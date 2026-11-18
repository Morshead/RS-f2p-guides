import {
  ITEMS_LIST,
  ITEM_ALIASES,
  lookupItem
} from '../../../../src/data/itemLookup.js';
import {
  PVM_DATA,
  TOP_F2P_LOOT_HIGHLIGHTS,
  QUESTS_DATA,
  MONEY_MAKING_DATA,
  SKILLS_DATA
} from '../../../../src/data/guideData.js';

const NON_ITEM_PHRASES = [
  /^zero alch drops/i,
  /^coins$/i,
  /^revenant coins$/i,
  /^ores$/i,
  /^gems$/i,
  /^combat gear$/i,
  /^food$/i,
  /^best combat gear$/i,
  /^none\b/i,
  /^bronze\/iron drops$/i,
  /^bronze drops$/i,
  /^iron drops$/i,
  /^corrupt pvp gear$/i,
  /^corrupt dragon weapons$/i,
  /^corrupt dragon armour$/i,
  /^herbs$/i,
  /^salvage$/i
];

function cleanToken(raw) {
  return raw
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\b\d+(?:–\d+)?x?\b/gi, ' ')
    .replace(/\bnoted\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function expandGroup(segment) {
  const cleaned = cleanToken(segment);
  if (!cleaned) return [];

  // Handle slash-separated groups with shared prefix or suffix:
  // e.g. "Gud Raider Chainbody / Axe / Shield", "Medium / Large / Huge Rune Salvage", "Mithril/Adamant Salvage"
  if (cleaned.includes('/')) {
    const parts = cleaned.split(/\s*\/\s*/).map((p) => p.trim()).filter(Boolean);
    const firstWords = parts[0].split(' ');
    const lastWords = parts[parts.length - 1].split(' ');

    // Case A: "Medium / Large / Huge Rune Salvage" or "Medium & Large Blunt Rune Salvage" -> shared suffix
    if (parts[0].split(' ').length === 1 && lastWords.length >= 2) {
      const suffix = lastWords.slice(1).join(' ');
      return parts.map((p) => (p.includes(' ') ? p : `${p} ${suffix}`));
    }

    // Case B: "Gud Raider Chainbody / Axe / Shield" -> shared prefix on first part ("Gud Raider")
    if (
      firstWords.length >= 2 &&
      parts.slice(1).every((p) => p.split(' ').length <= 2 && !/^(Coal|Iron|Gold|Silver|Runite|Logs|Ores|Gems)$/i.test(p)) &&
      !/^(Raw|Noted|Small|Medium|Large|Huge)$/i.test(firstWords[0])
    ) {
      const prefix = firstWords.slice(0, -1).join(' ');
      return parts.map((p, idx) => (idx === 0 || p.toLowerCase().startsWith(prefix.toLowerCase()) ? p : `${prefix} ${p}`));
    }

    return parts;
  }

  return [cleaned];
}

function splitCompoundItemLabel(label) {
  const stripped = label.replace(/\([^)]*\)/g, '').trim();
  if (!stripped) return [];

  // Stop propagation across '+' clauses like "...Runes + Gems"
  const topGroups = stripped.split(/\s*\+\s*/);
  const results = [];

  for (const group of topGroups) {
    const subClauses = group
      .split(/\s*(?:,|&)\s*/)
      .map((c) => cleanToken(c))
      .filter(Boolean);

    const lastClause = subClauses[subClauses.length - 1] || '';
    // Match multi-word trailing nouns like "Blunt Rune Salvage" or "Rune Salvage" or "Runes"
    const sharedMatch = lastClause.match(
      /\b((?:(?:Blunt|Plated|Spiky|Bladed)\s+)?(?:Rune\s+)?(?:Runes|Talismans|Beads|Ore|Logs|Salvage|Urns|Arrows|Arrowheads|Pickaxes|Hatchets|Shieldbows|Shortbows|Amulets|Rings|Necklaces))\s*$/i
    );
    const sharedNoun = sharedMatch ? sharedMatch[1] : null;

    // Only propagate multi-word prefix if not generic descriptor like "Goblin Raider" across "Ores & Coins"
    const firstWords = (subClauses[0] || '').split(' ');
    const sharedPrefix =
      firstWords.length >= 2 &&
      subClauses.length > 1 &&
      subClauses.slice(1).every((c) => c.split(' ').length === 1 && !/^(Coins|Ores|Gems|Bones|Ashes|Herbs)$/i.test(c)) &&
      !/^(Raw|Noted|Small|Medium|Large|Huge|Steel\/Mithril|Bronze\/Iron)$/i.test(firstWords[0])
        ? firstWords.slice(0, -1).join(' ')
        : null;

    for (let i = 0; i < subClauses.length; i++) {
      for (const expanded of expandGroup(subClauses[i])) {
        if (
          sharedNoun &&
          !expanded.includes(' ') &&
          !/^(Coins|Gems|Ores|Herbs|Bones|Ashes|Food|Coal|Iron|Runite|Gold|Large|Medium|Huge)$/i.test(expanded)
        ) {
          results.push(`${expanded} ${sharedNoun}`);
        } else if (sharedNoun && /^(Medium|Large|Huge)$/i.test(expanded)) {
          results.push(`${expanded} ${sharedNoun.replace(/^(?:Medium|Large|Huge)\s+/i, '')}`);
        } else if (sharedPrefix && i > 0 && !expanded.includes(' ')) {
          results.push(`${sharedPrefix} ${expanded}`);
        } else {
          results.push(expanded);
        }
      }
    }
  }

  return results;
}

function matchesDictionary(token) {
  if (!token) return true;
  if (NON_ITEM_PHRASES.some((re) => re.test(token))) return true;
  if (lookupItem(token)) return true;

  const singular = token.replace(/ies$/i, 'y').replace(/s$/i, '');
  if (lookupItem(singular)) return true;

  const lower = token.toLowerCase();
  for (const key of ITEM_ALIASES.keys()) {
    if (key === lower || key === singular.toLowerCase()) return true;
    if (lower.length >= 5 && lower.includes(key) && key.length >= 6) return true;
  }
  return false;
}

function validateDictionarySchema() {
  const errors = [];
  const seenIds = new Set();
  for (const item of ITEMS_LIST) {
    if (!item.id || !item.name || !item.category) {
      errors.push(`Missing id/name/category on item: ${JSON.stringify(item)}`);
    }
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate item id: ${item.id}`);
    }
    seenIds.add(item.id);
    if (!item.sellPrices || !('generalStore' in item.sellPrices) || !('specialtyShop' in item.sellPrices)) {
      errors.push(`Invalid sellPrices on ${item.id}`);
    }
    if (!item.alchPrices || typeof item.alchPrices.alchable !== 'boolean') {
      errors.push(`Invalid alchPrices on ${item.id}`);
    }
    if (!item.useRequirements || !item.useRequirements.skills || !Array.isArray(item.useRequirements.quests)) {
      errors.push(`Invalid useRequirements on ${item.id}`);
    }
    if (item.craftingRequirements !== null) {
      const c = item.craftingRequirements;
      if (!c.skills || !Array.isArray(c.materials) || !c.station) {
        errors.push(`Invalid craftingRequirements on ${item.id}`);
      }
    }
    if (!item.wikiUrl || !item.wikiUrl.startsWith('https://')) {
      errors.push(`Missing/invalid wikiUrl on ${item.id}`);
    }
    if (!item.lastVerified) {
      errors.push(`Missing lastVerified on ${item.id}`);
    }
  }
  return errors;
}

const ITEM_MENTION_PATTERNS = [
  /\b(?:Bronze|Iron|Steel|Mithril|Adamant(?:ite)?|Rune|Runite|Gold|Silver)\s+(?:ore(?!\s+box)|bar|pickaxe|hatchet|mattock|ore box|platebody|platelegs|full helm|med helm|sq shield|2h sword|scimitar|arrowheads|arrows|nails)(?:\s*\+[123])?/gi,
  /\b(?:Normal|Oak|Willow|Maple|Yew|Magic)\s+(?:logs|shortbow|shieldbow)/gi,
  /\b(?:Uncut\s+)?(?:Sapphire|Emerald|Ruby|Diamond)\s*(?:ring|necklace|amulet)?/gi,
  /\b(?:Air|Water|Earth|Fire|Mind|Body|Chaos|Cosmic|Nature|Law|Death|Blood|Astral)\s+(?:rune|talisman|tiara)/gi,
  /\b(?:Raw\s+)?(?:Crayfish|Shrimps|Sardine|Anchovies|Pike|Trout|Salmon|Tuna|Lobster|Swordfish)\b/gi
];

function scanFreeformTextItems() {
  const textBlobs = [];
  for (const s of SKILLS_DATA) {
    textBlobs.push({ source: `SKILL:${s.id}`, text: `${s.prerequisites.join(' ')} ${s.defaultSellLocation}` });
    for (const b of s.brackets) {
      for (const m of b.methods || [b]) {
        textBlobs.push({
          source: `SKILL:${s.id}[${b.levels}]`,
          text: `${m.method} ${m.prereqs} ${m.whereToSell} ${(m.steps || []).join(' ')}`
        });
      }
    }
  }
  for (const mm of MONEY_MAKING_DATA) {
    textBlobs.push({
      source: `MONEY:${mm.id}`,
      text: `${mm.title} ${mm.description} ${mm.steps.join(' ')}`
    });
  }

  const unmapped = new Map();
  for (const blob of textBlobs) {
    for (const re of ITEM_MENTION_PATTERNS) {
      for (const match of blob.text.matchAll(re)) {
        const candidate = match[0].replace(/\s+/g, ' ').trim();
        if (!matchesDictionary(candidate)) {
          const key = candidate.toLowerCase();
          if (!unmapped.has(key)) {
            unmapped.set(key, { source: blob.source, token: candidate });
          }
        }
      }
    }
  }
  return [...unmapped.values()];
}

function auditGuides() {
  const missing = [];

  for (const h of TOP_F2P_LOOT_HIGHLIGHTS) {
    for (const token of splitCompoundItemLabel(h.item)) {
      if (!matchesDictionary(token)) {
        missing.push({ source: 'TOP_F2P_LOOT_HIGHLIGHTS', raw: h.item, token });
      }
    }
  }

  for (const bracket of PVM_DATA) {
    for (const opt of bracket.options) {
      for (const drop of opt.lootDrops || []) {
        for (const token of splitCompoundItemLabel(drop.item)) {
          if (!matchesDictionary(token)) {
            missing.push({ source: `PVM:${bracket.id}/${opt.id}`, raw: drop.item, token });
          }
        }
      }
    }
  }

  for (const q of QUESTS_DATA) {
    for (const token of splitCompoundItemLabel(q.itemsNeeded || '')) {
      if (!matchesDictionary(token)) {
        missing.push({ source: `QUEST:${q.id}:itemsNeeded`, raw: q.itemsNeeded, token });
      }
    }
  }

  for (const hit of scanFreeformTextItems()) {
    missing.push({ source: hit.source, raw: hit.token, token: hit.token });
  }

  return missing;
}

const schemaErrors = validateDictionarySchema();
const missingItems = auditGuides();

console.log(`=== RS3 F2P Item Lookup Audit ===`);
console.log(`Dictionary entries : ${ITEMS_LIST.length}`);
console.log(`Indexed aliases    : ${ITEM_ALIASES.size}`);
console.log(`Guides scanned     : ${SKILLS_DATA.length} skills, ${PVM_DATA.length} PvM brackets, ${MONEY_MAKING_DATA.length} money methods, ${QUESTS_DATA.length} quests`);

if (schemaErrors.length > 0) {
  console.error(`\n[SCHEMA ERRORS] (${schemaErrors.length}):`);
  for (const err of schemaErrors) console.error(`  - ${err}`);
}

if (missingItems.length > 0) {
  console.error(`\n[MISSING ITEMS] (${missingItems.length}):`);
  for (const m of missingItems) {
    console.error(`  - [${m.source}] token="${m.token}" (from "${m.raw}")`);
  }
}

if (schemaErrors.length > 0 || missingItems.length > 0) {
  process.exit(1);
}

console.log(`\nPASS: All dictionary schemas valid and all guide items resolved!`);
