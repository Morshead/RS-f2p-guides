/**
 * Computes F2P Ironman GP/hr across the 4 liquidation channels for any guide entry:
 *   1. General Store (30% of item value; rejects +1/+2/+3 upgraded smithed gear)
 *   2. Dedicated / Specialty Store (only buys natively stocked base +0 items; rejects +1/+2/+3 & Salvage)
 *   3. Low Level Alchemy (21 Magic — 40% of item value = 2/3 of High Alch)
 *   4. High Level Alchemy (55 Magic — 60% of item value)
 */

const SPECIALTY_SHOPS = [
  { pattern: /grum/i, name: "Grum's Gold Exchange", rateNote: 'Stocked jewellery' },
  { pattern: /horvik/i, name: "Horvik's Armour", rateNote: 'Base +0 Bronze–Steel' },
  { pattern: /wayne/i, name: "Wayne's Chains", rateNote: 'Base +0 chainbodies' },
  { pattern: /scavvo/i, name: "Scavvo's Rune Store", rateNote: 'Base +0 Rune (no plate)' },
  { pattern: /swordshop/i, name: 'Varrock Swordshop', rateNote: 'Stocked base swords' },
  { pattern: /zeke/i, name: "Zeke's Scimitars", rateNote: 'Stocked scimitars' },
  { pattern: /louie/i, name: "Louie's Legs", rateNote: 'Stocked base legs' },
  { pattern: /cassie/i, name: "Cassie's Shields", rateNote: 'Stocked base shields' },
  { pattern: /brian/i, name: "Brian's Archery", rateNote: 'Stocked bows/arrows' },
  { pattern: /lowe/i, name: "Lowe's Archery", rateNote: 'Stocked bows/arrows' },
  { pattern: /aubury/i, name: "Aubury's Rune Shop", rateNote: 'Runes' },
  { pattern: /betty/i, name: "Betty's Magic Shop", rateNote: 'Wizard robes/runes' },
  { pattern: /wydin/i, name: "Wydin's Food Store", rateNote: 'Food/fish' },
  { pattern: /gerrant/i, name: "Gerrant's Fish Shop", rateNote: 'Fish' },
  { pattern: /mandrith/i, name: 'Mandrith (Edgeville)', rateNote: 'Ancient Statuettes' },
  { pattern: /dargaud/i, name: "Dargaud's Bows", rateNote: 'Early bows' },
  { pattern: /thessalia/i, name: "Thessalia's / Lowe's", rateNote: 'Stocked cloth/bows' }
];

function parseNumericToken(raw, hasK) {
  const num = Number(raw.replace(/,/g, ''));
  if (!Number.isFinite(num)) return null;
  return hasK ? num * 1000 : num;
}

export function parseGpRange(gpStr = '') {
  if (!gpStr || typeof gpStr !== 'string') return null;

  let target = gpStr;
  // Handle dual strings like "-6,000 GP/hr (Banked) / +15k (Sold)" or "-25,000 GP/hr (Urns) / +240,000 GP/hr (Jewellery)"
  if (target.includes('/')) {
    const parts = target.split('/');
    const soldOrPositive = parts.find((p) => /\+\d/.test(p) && !/GP\/hr\s*$/i.test(p.trim()) ? true : /\+\d/.test(p));
    if (soldOrPositive) target = soldOrPositive;
  }

  const matches = [...target.matchAll(/([+-]?)\s*(\d[\d,]*(?:\.\d+)?)\s*(k)?/gi)];
  const values = [];
  for (const m of matches) {
    // Skip percentages or level mentions like "500 XP" or "10 min"
    const after = target.slice(m.index + m[0].length, m.index + m[0].length + 8);
    if (/^\s*(%|min|xp|m\b)/i.test(after)) continue;
    const val = parseNumericToken(m[2], Boolean(m[3]));
    if (val === null) continue;
    const sign = m[1] === '-' ? -1 : 1;
    values.push(sign * val);
  }

  if (values.length === 0) return null;
  if (values.length === 1) return { min: values[0], max: values[0] };
  // If two numbers are a range like 300,000 – 450,000
  const min = Math.min(values[0], values[1]);
  const max = Math.max(values[0], values[1]);
  return { min, max };
}

function roundNice(n) {
  const abs = Math.abs(n);
  if (abs >= 100000) return Math.round(n / 1000) * 1000;
  if (abs >= 10000) return Math.round(n / 500) * 500;
  if (abs >= 1000) return Math.round(n / 100) * 100;
  return Math.round(n / 50) * 50;
}

export function formatGpValue(n, unit = 'GP/hr') {
  const rounded = roundNice(n);
  const sign = rounded > 0 ? '+' : rounded < 0 ? '-' : '';
  return `${sign}${Math.abs(rounded).toLocaleString('en-US')} ${unit}`;
}

export function formatScaledRange(range, factor, unit = 'GP/hr') {
  if (!range) return 'N/A';
  const minScaled = range.min * factor;
  const maxScaled = range.max * factor;
  if (roundNice(minScaled) === roundNice(maxScaled)) {
    return formatGpValue(minScaled, unit);
  }
  const sMin = roundNice(minScaled);
  const sMax = roundNice(maxScaled);
  const signMin = sMin > 0 ? '+' : sMin < 0 ? '-' : '';
  const signMax = sMax > 0 ? '+' : sMax < 0 ? '-' : '';
  return `${signMin}${Math.abs(sMin).toLocaleString('en-US')} – ${signMax}${Math.abs(sMax).toLocaleString('en-US')} ${unit}`;
}

function detectDedicatedShop(text) {
  for (const shop of SPECIALTY_SHOPS) {
    if (shop.pattern.test(text)) return shop;
  }
  return null;
}

/**
 * Returns { generalStore, dedicatedStore, lowAlch, highAlch } objects:
 *   { value: string, note: string, tone: 'positive' | 'negative' | 'muted' | 'info' }
 */
export function computeLiquidationBreakdown({
  gpPerHour = '',
  gpTrend = 'positive',
  whereToSell = '',
  title = '',
  description = '',
  skillId = '',
  isPvm = false,
  unit = 'GP/hr'
}) {
  const combined = `${title} ${whereToSell} ${description}`.toLowerCase();
  const range = parseGpRange(gpPerHour);

  // 1. Raw Coin / Quest / D&D bursts (May's Caravan, Stronghold chests, Shooting Star D&D, etc.)
  if (
    /may's quest caravan|magical die|stronghold of security & player safety|shooting star daily|wilderness flash/i.test(
      combined
    ) ||
    (/mandrith/i.test(combined) && !/salvage|rune/i.test(combined))
  ) {
    return {
      mode: 'raw-coins',
      generalStore: { value: 'N/A', note: 'Direct coin / reward drop', tone: 'muted' },
      dedicatedStore: /mandrith/i.test(combined)
        ? { value: gpPerHour, note: 'Mandrith exchanges Statuettes', tone: 'positive' }
        : { value: 'N/A', note: 'Direct coin reward', tone: 'muted' },
      lowAlch: { value: 'N/A', note: 'Already raw GP', tone: 'muted' },
      highAlch: { value: 'N/A', note: 'Already raw GP', tone: 'muted' }
    };
  }

  // 2. Untradeable / Destroyed / Token / XP-only methods
  if (skillId === 'dungeoneering' || skillId === 'archaeology') {
    const label = skillId === 'dungeoneering' ? 'DG Tokens / Unlocks' : 'Chronotes / XP Only';
    return {
      mode: 'tokens-only',
      generalStore: { value: 'N/A', note: `${label} (Cannot sell)`, tone: 'muted' },
      dedicatedStore: { value: 'N/A', note: `${label} (Cannot sell)`, tone: 'muted' },
      lowAlch: { value: 'N/A', note: 'Untradeable rewards', tone: 'muted' },
      highAlch: { value: 'N/A', note: 'Untradeable rewards', tone: 'muted' }
    };
  }

  const hasPositiveGp = /\+\d/.test(gpPerHour);
  const sellAndTitle = `${whereToSell} ${title}`.toLowerCase();
  const isConsumedOrUntradeable =
    (skillId === 'firemaking' && gpTrend === 'negative') ||
    (skillId === 'prayer' && gpTrend === 'negative') ||
    /burial|item destroyed|logs destroyed|0 alch drops|0 drops/i.test(sellAndTitle) ||
    (!hasPositiveGp &&
      (/(?:^|[^\d,])0\s*gp\b/i.test(`${sellAndTitle} ${gpPerHour}`) ||
        /untradeable|dungeoneering token/i.test(sellAndTitle)));

  if (isConsumedOrUntradeable) {
    const costText = range && range.min < 0 ? formatScaledRange(range, 1, unit) : '0 GP/hr';
    return {
      mode: 'consumed',
      generalStore: { value: costText, note: 'No sellable output', tone: range && range.min < 0 ? 'negative' : 'muted' },
      dedicatedStore: { value: costText, note: 'Consumed / untradeable', tone: range && range.min < 0 ? 'negative' : 'muted' },
      lowAlch: { value: costText, note: 'Consumed / untradeable', tone: range && range.min < 0 ? 'negative' : 'muted' },
      highAlch: { value: costText, note: 'Consumed / untradeable', tone: range && range.min < 0 ? 'negative' : 'muted' }
    };
  }

  // 3. Negative sustain / training cost (e.g. Red Spiders, Hellhounds, Magic Curse, Fishing banked)
  if (gpTrend === 'negative' && !/\+\d/.test(gpPerHour)) {
    const costText = range ? formatScaledRange(range, 1, unit) : gpPerHour;
    return {
      mode: 'cost-only',
      generalStore: { value: costText, note: 'Supply/food upkeep only', tone: 'negative' },
      dedicatedStore: { value: costText, note: 'Supply/food upkeep only', tone: 'negative' },
      lowAlch: { value: costText, note: 'No alchable drops', tone: 'negative' },
      highAlch: { value: costText, note: 'No alchable drops', tone: 'negative' }
    };
  }

  // 4. Upgraded Smithing Gear (+1 / +2 / +3)
  // General Stores DO buy +1/+2/+3 at 30% value (50% of High Alch); Dedicated/Specialty shops reject +1/+2/+3!
  const isUpgradedSmithing =
    !isPvm &&
    /\+[123]\b/.test(`${title} ${whereToSell}`) &&
    (skillId === 'mining' ||
      skillId === 'smithing' ||
      /platebod|chainbod|smith|rune \+3|addy \+2|adamant \+2|mithril \+2|steel \+2|iron \+1/i.test(
        combined
      ));

  if (isUpgradedSmithing && range) {
    return {
      mode: 'upgraded-smithing',
      generalStore: {
        value: formatScaledRange(range, 0.5, unit),
        note: '30% value (Buys +1/+2/+3 flat)',
        tone: 'info'
      },
      dedicatedStore: {
        value: '0 GP/hr',
        note: 'Rejects +1/+2/+3 (base +0 only)',
        tone: 'negative'
      },
      lowAlch: {
        value: formatScaledRange(range, 2 / 3, unit),
        note: '21 Magic • 40% value (-Nats)',
        tone: 'info'
      },
      highAlch: {
        value: formatScaledRange(range, 1, unit),
        note: '55 Magic • 60% value (-Nats)',
        tone: 'positive'
      }
    };
  }

  // 5. Standard Tradeable Items (PvM drops, Fletching, Crafting, Fishing, Woodcutting, etc.)
  if (!range) {
    return {
      mode: 'unknown',
      generalStore: { value: 'N/A', note: 'See method notes', tone: 'muted' },
      dedicatedStore: { value: 'N/A', note: 'See method notes', tone: 'muted' },
      lowAlch: { value: 'N/A', note: 'See method notes', tone: 'muted' },
      highAlch: { value: 'N/A', note: 'See method notes', tone: 'muted' }
    };
  }

  // Determine whether the guide's quoted gpPerHour is based on High Alch (60% / Grum's) or General Store (30%)
  const isHighAlchBaseline =
    /high\s*(level\s*)?alch|alch|60%|grum|salvage|shieldbow|scimitar|med helm|ruby|diamond|dragonstone|revenant|kbd|giant mole|chaos elemental|hollowtoof|cockroach|greater demon|lesser demon|ankou/i.test(
      `${whereToSell} ${title} ${gpPerHour}`
    );

  // Raw low-value gathered items (e.g. raw logs, raw/cooked fish, ores, cowhides, runes)
  const isLowValuePerItem =
    skillId === 'fishing' ||
    skillId === 'cooking' ||
    skillId === 'runecrafting' ||
    ((skillId === 'woodcutting' && !/shieldbow|fletch/i.test(combined)) && range.max <= 40000);

  const shop = detectDedicatedShop(`${whereToSell} ${title}`);
  const isSalvageOnly = /salvage/i.test(combined) && !/med helm|scimitar|sq shield|sword|longsword|platelegs|chainbody/i.test(combined);

  if (isHighAlchBaseline) {
    // Guide gpPerHour = 60% High Alch baseline
    const genVal = formatScaledRange(range, 0.5, unit); // 30% / 60% = 0.5x
    const lowVal = formatScaledRange(range, 2 / 3, unit); // 40% / 60% = 0.667x
    const highVal = formatScaledRange(range, 1, unit); // 60% = 1.0x

    let dedicatedCell;
    if (isSalvageOnly) {
      dedicatedCell = {
        value: 'N/A',
        note: 'Salvage not stocked by NPCs',
        tone: 'muted'
      };
    } else if (shop && /grum|mandrith/i.test(shop.name) && !isPvm) {
      dedicatedCell = {
        value: highVal,
        note: `${shop.name} (0 Nats)`,
        tone: 'positive'
      };
    } else if (shop) {
      dedicatedCell = {
        value: genVal,
        note: `${shop.name} (30% RS3 base)`,
        tone: 'info'
      };
    } else {
      dedicatedCell = {
        value: 'N/A',
        note: 'No single stocked shop',
        tone: 'muted'
      };
    }

    return {
      mode: 'tradeable-alch',
      generalStore: {
        value: genVal,
        note: '30% value (50% of High Alch)',
        tone: 'info'
      },
      dedicatedStore: dedicatedCell,
      lowAlch: {
        value: lowVal,
        note: '21 Magic • 40% value (-Nats)',
        tone: 'info'
      },
      highAlch: {
        value: highVal,
        note: '55 Magic • 60% value (-Nats)',
        tone: 'positive'
      }
    };
  }

  // Otherwise baseline is 30% NPC Shop (General Store / early drops / fish / logs / base +0)
  const genVal = formatScaledRange(range, 1, unit);
  const lowVal = isLowValuePerItem
    ? 'Net Loss'
    : formatScaledRange(range, 4 / 3, unit);
  const highVal = isLowValuePerItem
    ? 'Net Loss'
    : formatScaledRange(range, 2, unit);

  const dedicatedCell = shop
    ? {
        value: genVal,
        note: `${shop.name} (30% RS3 base)`,
        tone: 'info'
      }
    : isPvm
    ? {
        value: 'Mixed',
        note: 'Stocked gear only (30%)',
        tone: 'muted'
      }
    : {
        value: 'N/A',
        note: 'Not stocked at specialty shop',
        tone: 'muted'
      };

  return {
    mode: 'tradeable-shop',
    generalStore: {
      value: genVal,
      note: '30% value (RS3 flat rate)',
      tone: 'positive'
    },
    dedicatedStore: dedicatedCell,
    lowAlch: isLowValuePerItem
      ? { value: 'Net Loss', note: 'Nature Rune (~350 GP) > item', tone: 'negative' }
      : { value: lowVal, note: '21 Magic • 40% value (-Nats)', tone: 'info' },
    highAlch: isLowValuePerItem
      ? { value: 'Net Loss', note: 'Nature Rune (~350 GP) > item', tone: 'negative' }
      : { value: highVal, note: '55 Magic • 60% value (-Nats)', tone: 'positive' }
  };
}
