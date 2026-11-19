/**
 * Global RS3 F2P Group Ironman Item Lookup & Dictionary
 *
 * Verified against the RuneScape Wiki (runescape.wiki) for RuneScape 3 (RS3).
 * Notes on RS3 economics:
 *   - General Store sell price = 30% of item base value (buys +1/+2/+3 smithed gear too).
 *   - Specialty Shops in RS3 generally buy natively stocked base (+0) items at 30% base value
 *     (and reject +1/+2/+3 upgraded smithed gear and Salvage). Grum's Gold Exchange buys
 *     stocked jewellery (starting at 30% RS3 base; pre-rework/empty-stock rates may differ).
 *   - Low Level Alchemy (21 Magic) = 40% of base value.
 *   - High Level Alchemy (55 Magic) = 60% of base value.
 *   - Post-Mining & Smithing rework (RS3): Rune items alch at 500 GP per bar used;
 *     Adamant items alch at 200 GP per bar used.
 */

const VERIFIED_DATE = '2026-11-18';

function makeItem(entry) {
  return {
    aliases: [],
    f2p: true,
    tradeable: true,
    stackable: false,
    baseValue: null,
    sellPrices: {
      generalStore: null,
      specialtyShop: null
    },
    alchPrices: {
      alchable: false,
      lowAlch: null,
      highAlch: null
    },
    useRequirements: {
      skills: {},
      quests: [],
      notes: 'None'
    },
    craftingRequirements: null,
    guideSources: [],
    lastVerified: VERIFIED_DATE,
    ...entry
  };
}

function alchFromHigh(highAlch, opts = {}) {
  const baseValue = Math.round(highAlch / 0.6);
  const lowAlch = opts.lowAlch ?? Math.floor(highAlch * (2 / 3));
  const generalStore = opts.generalStore ?? Math.floor(baseValue * 0.3);
  return {
    baseValue,
    sellPrices: {
      generalStore,
      specialtyShop: opts.specialtyShop ?? null,
      ...(opts.shopNote ? { shopNote: opts.shopNote } : {})
    },
    alchPrices: {
      alchable: true,
      lowAlch,
      highAlch
    }
  };
}

export const ITEMS_LIST = [
  // =========================================================================
  // ORES & MINING MATERIALS
  // =========================================================================
  makeItem({
    id: 'copper-ore',
    name: 'Copper ore',
    aliases: ['Copper', 'Copper Ores'],
    category: 'Ore',
    ...alchFromHigh(6, { lowAlch: 4, generalStore: 3 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted with Tin ore into Bronze bars (1 Smithing) or used in Doric\'s Quest (4x).' },
    craftingRequirements: { skills: { Mining: 1 }, materials: ['Copper rock'], station: 'Mining node', quests: [], notes: 'Mined at Burthorpe, Lumbridge SE Swamp, or Dwarven Mine.' },
    guideSources: ['Mining (1–10)', 'Quests: Doric\'s Quest', 'PvM: Minotaurs'],
    wikiUrl: 'https://runescape.wiki/w/Copper_ore'
  }),
  makeItem({
    id: 'tin-ore',
    name: 'Tin ore',
    aliases: ['Tin', 'Tin Ores'],
    category: 'Ore',
    ...alchFromHigh(10, { lowAlch: 6, generalStore: 5 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted with Copper ore into Bronze bars (1 Smithing).' },
    craftingRequirements: { skills: { Mining: 1 }, materials: ['Tin rock'], station: 'Mining node', quests: [], notes: 'Mined at Burthorpe, Lumbridge SE Swamp, or Dwarven Mine.' },
    guideSources: ['Mining (1–10)', 'PvM: Minotaurs'],
    wikiUrl: 'https://runescape.wiki/w/Tin_ore'
  }),
  makeItem({
    id: 'clay',
    name: 'Clay',
    aliases: ['Clay ore'],
    category: 'Ore',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: [], notes: 'Soften with water to make Soft clay; 6x required for Doric\'s Quest.' },
    craftingRequirements: { skills: { Mining: 1 }, materials: ['Clay rock'], station: 'Mining node', quests: [], notes: 'Mined at Burthorpe or Varrock SW Mine.' },
    guideSources: ['Mining (1–10)', 'Quests: Doric\'s Quest', 'Crafting (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Clay'
  }),
  makeItem({
    id: 'soft-clay',
    name: 'Soft clay',
    category: 'Ore',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: [], notes: 'Used on a Potter\'s wheel to mould Skilling Urns and pottery, and for Kili\'s Necromancy tasks.' },
    craftingRequirements: { skills: {}, materials: ['1x Clay', 'Water source / Jug of water'], station: 'Water source', quests: [], notes: 'Combine Clay with water.' },
    guideSources: ['Mining (1–10)', 'Crafting (1–20, 40–70, 70–99)', 'Necromancy'],
    wikiUrl: 'https://runescape.wiki/w/Soft_clay'
  }),
  makeItem({
    id: 'iron-ore',
    name: 'Iron ore',
    aliases: ['Iron Ores', 'Noted Iron Ore', 'Iron'],
    category: 'Ore',
    ...alchFromHigh(15, { lowAlch: 10, generalStore: 7 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted into Iron bars (10 Smithing) or Steel bars with Coal (20 Smithing); 2x needed for Doric\'s Quest.' },
    craftingRequirements: { skills: { Mining: 10 }, materials: ['Iron rock'], station: 'Mining node', quests: [], notes: 'Mined at Varrock SW Mine, Rimmington, or Dwarven Mine.' },
    guideSources: ['Mining (10–20)', 'Quests: Doric\'s Quest', 'PvM: Flesh Crawlers, Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Iron_ore'
  }),
  makeItem({
    id: 'coal',
    name: 'Coal',
    aliases: ['Noted Coal'],
    category: 'Ore',
    ...alchFromHigh(27, { lowAlch: 18, generalStore: 13 }),
    useRequirements: { skills: {}, quests: [], notes: 'Combined with Iron ore for Steel bars (20 Smithing) and Mithril ore for Mithril bars (30 Smithing).' },
    craftingRequirements: { skills: { Mining: 20 }, materials: ['Coal rock'], station: 'Mining node', quests: [], notes: 'Stored in Coal Bag (81) or Metal Bank.' },
    guideSources: ['Mining (20–40)', 'Smithing (29–40)', 'PvM: Catablepons, KBD, Giant Mole, Chaos Elemental'],
    wikiUrl: 'https://runescape.wiki/w/Coal'
  }),
  makeItem({
    id: 'silver-ore',
    name: 'Silver ore',
    category: 'Ore',
    ...alchFromHigh(45, { lowAlch: 30, generalStore: 22 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted into Silver bars (20 Smithing) for Silver tiaras and Unstrung symbols.' },
    craftingRequirements: { skills: { Mining: 20 }, materials: ['Silver rock'], station: 'Mining node', quests: [], notes: 'Mined at Al Kharid or Varrock SW Mine.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Silver_ore'
  }),
  makeItem({
    id: 'mithril-ore',
    name: 'Mithril ore',
    aliases: ['Noted Mithril Ore', 'Noted Mithril/Addy Ore'],
    category: 'Ore',
    ...alchFromHigh(35, { lowAlch: 23, generalStore: 17 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted with Coal into Mithril bars (30 Smithing).' },
    craftingRequirements: { skills: { Mining: 30 }, materials: ['Mithril rock'], station: 'Mining node', quests: [], notes: 'Mined in Dwarven Mine.' },
    guideSources: ['Mining (30–40)', 'PvM: Ankous, Cockroach Soldiers'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_ore'
  }),
  makeItem({
    id: 'gold-ore',
    name: 'Gold ore',
    category: 'Ore',
    ...alchFromHigh(90, { lowAlch: 60, generalStore: 45 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted into Gold bars (40 Smithing) for jewellery crafting.' },
    craftingRequirements: { skills: { Mining: 40 }, materials: ['Gold rock'], station: 'Mining node', quests: [], notes: 'Mined at Rimmington, Karamja Volcano, or Dwarven Mine; 20x rewarded daily from Shooting Stars.' },
    guideSources: ['Mining (40–50)', 'Money Making: Shooting Stars, Jewellery Alchs', 'PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Gold_ore'
  }),
  makeItem({
    id: 'adamantite-ore',
    name: 'Adamantite ore',
    aliases: ['Addy Ore', 'Noted Adamantite Ore'],
    category: 'Ore',
    ...alchFromHigh(50, { lowAlch: 33, generalStore: 25 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted with Luminite into Adamantite bars (40 Smithing).' },
    craftingRequirements: { skills: { Mining: 40 }, materials: ['Adamantite rock'], station: 'Mining node', quests: [], notes: 'Mined at Rimmington or Dwarven Mine.' },
    guideSources: ['Mining (40–50)', 'PvM: Cockroach Soldiers'],
    wikiUrl: 'https://runescape.wiki/w/Adamantite_ore'
  }),
  makeItem({
    id: 'luminite',
    name: 'Luminite',
    aliases: ['Luminite ore'],
    category: 'Ore',
    ...alchFromHigh(50, { lowAlch: 33, generalStore: 25 }),
    useRequirements: { skills: {}, quests: [], notes: 'RS3 rework ore smelted 1:1 with Adamantite ore (40 Smithing) and Runite ore (50 Smithing).' },
    craftingRequirements: { skills: { Mining: 40 }, materials: ['Luminite rock'], station: 'Mining node', quests: [], notes: 'Mined in Dwarven Mine & 15 DG Resource Dungeon.' },
    guideSources: ['Mining (40–99)', 'Smithing (40–99)', 'Money Making: High Alch Smithing'],
    wikiUrl: 'https://runescape.wiki/w/Luminite'
  }),
  makeItem({
    id: 'runite-ore',
    name: 'Runite ore',
    aliases: ['Noted Runite Ore', 'Noted Runite', 'Runite'],
    category: 'Ore',
    ...alchFromHigh(125, { lowAlch: 83, generalStore: 62 }),
    useRequirements: { skills: {}, quests: [], notes: 'Smelted 1:1 with Luminite into Rune bars (50 Smithing).' },
    craftingRequirements: { skills: { Mining: 50 }, materials: ['Runite rock'], station: 'Mining node', quests: [], notes: 'Mined in Falador Mining Guild (60 Mining), Wilderness, or Karamja.' },
    guideSources: ['Mining (50–99)', 'Money Making: High Alch Smithing', 'PvM: KBD, Chaos Elemental'],
    wikiUrl: 'https://runescape.wiki/w/Runite_ore'
  }),
  makeItem({
    id: 'blurite-ore',
    name: 'Blurite ore',
    category: 'Ore',
    tradeable: false,
    ...alchFromHigh(3, { lowAlch: 1, generalStore: null }),
    useRequirements: { skills: {}, quests: ["The Knight's Sword"], notes: 'Untradeable quest ore given to Thurgo to forge the Blurite sword.' },
    craftingRequirements: { skills: { Mining: 10 }, materials: ['Blurite rock'], station: 'Asgarnian Ice Dungeon', quests: ["The Knight's Sword (started)"], notes: 'Mined past Level 57 Ice Warriors.' },
    guideSources: ['Smithing (1–29)', "Quests: The Knight's Sword"],
    wikiUrl: 'https://runescape.wiki/w/Blurite_ore'
  }),
  makeItem({
    id: 'pure-essence',
    name: 'Pure essence',
    aliases: ['Noted Pure Essence'],
    category: 'Runecrafting',
    ...alchFromHigh(4, { lowAlch: 2, generalStore: 2 }),
    useRequirements: { skills: { Runecrafting: 1 }, quests: ['Rune Mysteries'], notes: 'Used to craft runes at Runecrafting Altars and activate Runecrafting Urns.' },
    craftingRequirements: { skills: { Mining: 30 }, materials: ['Rune Essence Mine'], station: 'Mining node', quests: ['Rune Mysteries'], notes: 'Also obtained free daily from Wicked Hood (100/day) and drops from Minotaurs/Ankous.' },
    guideSources: ['Runecrafting (1–99)', 'PvM: Minotaurs, Ankous'],
    wikiUrl: 'https://runescape.wiki/w/Pure_essence'
  }),
  makeItem({
    id: 'rune-essence',
    name: 'Rune essence',
    category: 'Runecrafting',
    ...alchFromHigh(2, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: { Runecrafting: 1 }, quests: ['Rune Mysteries'], notes: 'Used to craft elemental/mind/body runes at F2P Runecrafting Altars.' },
    craftingRequirements: { skills: { Mining: 1 }, materials: ['Rune Essence Mine'], station: 'Mining node', quests: ['Rune Mysteries'], notes: 'Mined in Rune Essence Mine via Aubury or Wicked Hood.' },
    guideSources: ['Runecrafting (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_essence'
  }),
  makeItem({
    id: 'stardust',
    name: 'Stardust',
    category: 'Mining',
    tradeable: false,
    stackable: true,
    ...alchFromHigh(50, { lowAlch: 30, generalStore: null }),
    useRequirements: { skills: {}, quests: [], notes: 'Hand 200 Stardust to the Star Sprite daily for 50,000 GP, 152 Cosmic Runes, 52 Astral Runes, 20 Gold Ore, and 15 min double-ore buff.' },
    craftingRequirements: { skills: { Mining: 10 }, materials: ['Crashed Shooting Star'], station: 'Shooting Star D&D', quests: [], notes: 'Mining level required scales from 10–90 by Star Size 1–9.' },
    guideSources: ['Mining (50–99)', 'Money Making: Shooting Stars', 'Daily Checklist'],
    wikiUrl: 'https://runescape.wiki/w/Stardust'
  }),

  // =========================================================================
  // METAL BARS
  // =========================================================================
  makeItem({
    id: 'bronze-bar',
    name: 'Bronze bar',
    aliases: ['Bronze Bars'],
    category: 'Bar',
    ...alchFromHigh(4, { lowAlch: 2, generalStore: 2 }),
    useRequirements: { skills: { Smithing: 1 }, quests: [], notes: 'Smithed into Tier 1 Bronze gear, Ore Box, and used for Kili\'s Tier 10 Necromancy task.' },
    craftingRequirements: { skills: { Smithing: 1 }, materials: ['1x Copper ore', '1x Tin ore'], station: 'Furnace', quests: [], notes: 'Stored automatically in the global Metal Bank.' },
    guideSources: ['Mining (1–10)', 'Smithing (1–29)', 'Necromancy'],
    wikiUrl: 'https://runescape.wiki/w/Bronze_bar'
  }),
  makeItem({
    id: 'iron-bar',
    name: 'Iron bar',
    aliases: ['Iron Bars'],
    category: 'Bar',
    ...alchFromHigh(16, { lowAlch: 10, generalStore: 8 }),
    useRequirements: { skills: { Smithing: 10 }, quests: [], notes: 'Smithed into Tier 10 Iron gear/pickaxes/ore box; 2x required for The Knight\'s Sword.' },
    craftingRequirements: { skills: { Smithing: 10 }, materials: ['1x Iron ore'], station: 'Furnace', quests: [], notes: '100% smelt success in RS3 post-rework.' },
    guideSources: ['Mining (10–20)', 'Smithing (1–29)', "Quests: The Knight's Sword"],
    wikiUrl: 'https://runescape.wiki/w/Iron_bar'
  }),
  makeItem({
    id: 'steel-bar',
    name: 'Steel bar',
    aliases: ['Steel Bars'],
    category: 'Bar',
    ...alchFromHigh(60, { lowAlch: 40, generalStore: 30 }),
    useRequirements: { skills: { Smithing: 20 }, quests: [], notes: 'Smithed into Tier 20 Steel gear, Steel Mattock, and Kili\'s Tier 20 Necromancy upgrade.' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['1x Iron ore', '1x Coal'], station: 'Furnace', quests: [], notes: 'RS3 post-rework uses 1 Iron ore + 1 Coal (20 Smithing).' },
    guideSources: ['Smithing (29–40)', 'Necromancy', 'Archaeology'],
    wikiUrl: 'https://runescape.wiki/w/Steel_bar'
  }),
  makeItem({
    id: 'silver-bar',
    name: 'Silver bar',
    aliases: ['Silver Bars'],
    category: 'Bar',
    ...alchFromHigh(90, { lowAlch: 60, generalStore: 45 }),
    useRequirements: { skills: { Crafting: 16 }, quests: [], notes: 'Crafted at furnaces into Unstrung symbols (16) and Silver tiaras (23).' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['1x Silver ore'], station: 'Furnace', quests: [], notes: 'Stored in Metal Bank.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Silver_bar'
  }),
  makeItem({
    id: 'mithril-bar',
    name: 'Mithril bar',
    aliases: ['Mithril Bars'],
    category: 'Bar',
    ...alchFromHigh(180, { lowAlch: 120, generalStore: 90 }),
    useRequirements: { skills: { Smithing: 30 }, quests: [], notes: 'Smithed into Tier 30 Mithril gear, Pickaxe, Ore Box, and Burial Sets.' },
    craftingRequirements: { skills: { Smithing: 30 }, materials: ['1x Mithril ore', '1x Coal'], station: 'Furnace', quests: [], notes: 'RS3 post-rework uses 1 Mithril ore + 1 Coal.' },
    guideSources: ['Smithing (29–40)', 'Mining (30–40)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_bar'
  }),
  makeItem({
    id: 'gold-bar',
    name: 'Gold bar',
    aliases: ['Gold Bars'],
    category: 'Bar',
    ...alchFromHigh(180, { lowAlch: 120, generalStore: 90 }),
    useRequirements: { skills: { Crafting: 5 }, quests: [], notes: 'Forged with cut gems at furnaces into Rings, Necklaces, and Amulets.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['1x Gold ore'], station: 'Furnace', quests: [], notes: 'Stored in global Artisan Metal Bank.' },
    guideSources: ['Mining (40–50)', 'Crafting (20–99)', 'Money Making: Jewellery Alchs'],
    wikiUrl: 'https://runescape.wiki/w/Gold_bar'
  }),
  makeItem({
    id: 'adamantite-bar',
    name: 'Adamantite bar',
    aliases: ['Adamant bar', 'Adamantite Bars', 'Adamant Bars'],
    category: 'Bar',
    ...alchFromHigh(384, { lowAlch: 256, generalStore: 192 }),
    useRequirements: { skills: { Smithing: 40 }, quests: [], notes: 'Smithed into Tier 40 Adamant gear (+2), Pickaxes, Arrowheads, and Burial Sets.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['1x Adamantite ore', '1x Luminite'], station: 'Furnace', quests: [], notes: 'RS3 post-rework smelts 1 Adamantite ore + 1 Luminite.' },
    guideSources: ['Mining (40–50)', 'Smithing (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Adamantite_bar'
  }),
  makeItem({
    id: 'rune-bar',
    name: 'Rune bar',
    aliases: ['Runite bar', 'Runite Bars', 'Rune Bars'],
    category: 'Bar',
    ...alchFromHigh(250, { lowAlch: 166, generalStore: 125 }),
    useRequirements: { skills: { Smithing: 50 }, quests: [], notes: 'Smithed into Tier 50 Rune +3 gear (500 GP High Alch per bar used), Pickaxes, Hatchets, and Arrowheads.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['1x Runite ore', '1x Luminite'], station: 'Furnace', quests: [], notes: 'Scroll of Efficiency (20k DG) refunds bars on 3+ bar smithing projects.' },
    guideSources: ['Smithing (50–99)', 'Money Making: High Alch Smithing'],
    wikiUrl: 'https://runescape.wiki/w/Rune_bar'
  }),

  // =========================================================================
  // TOOLS, ORE BOXES, PICKAXES, HATCHETS, MATTOCKS
  // =========================================================================
  makeItem({
    id: 'bronze-pickaxe',
    name: 'Bronze pickaxe',
    aliases: ['Pickaxe'],
    category: 'Tool',
    ...alchFromHigh(10, { lowAlch: 6, generalStore: 5 }),
    useRequirements: { skills: { Mining: 1 }, quests: [], notes: 'Can be added to Tool Belt; wield requires 1 Attack.' },
    craftingRequirements: { skills: { Smithing: 1 }, materials: ['1x Bronze bar'], station: 'Anvil', quests: [], notes: 'Starter pickaxe provided on Tool Belt.' },
    guideSources: ['Mining (1–10)', 'Quests: Beneath Cursed Tides'],
    wikiUrl: 'https://runescape.wiki/w/Bronze_pickaxe'
  }),
  makeItem({
    id: 'iron-pickaxe',
    name: 'Iron pickaxe',
    aliases: ['Iron Pickaxe +1'],
    category: 'Tool',
    ...alchFromHigh(84, { lowAlch: 56, generalStore: 42 }),
    useRequirements: { skills: { Mining: 10 }, quests: [], notes: 'Add to Tool Belt; wield requires 10 Attack.' },
    craftingRequirements: { skills: { Smithing: 10 }, materials: ['2x Iron bar'], station: 'Anvil', quests: [], notes: 'Upgradeable to +1 at 10 Smithing.' },
    guideSources: ['Mining (10–20)'],
    wikiUrl: 'https://runescape.wiki/w/Iron_pickaxe'
  }),
  makeItem({
    id: 'steel-pickaxe',
    name: 'Steel pickaxe',
    category: 'Tool',
    ...alchFromHigh(300, { lowAlch: 200, generalStore: 150 }),
    useRequirements: { skills: { Mining: 20 }, quests: [], notes: 'Add to Tool Belt; wield requires 20 Attack.' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['2x Steel bar'], station: 'Anvil', quests: [], notes: 'Upgradeable up to +2.' },
    guideSources: ['Mining (20–30)'],
    wikiUrl: 'https://runescape.wiki/w/Steel_pickaxe'
  }),
  makeItem({
    id: 'mithril-pickaxe',
    name: 'Mithril pickaxe',
    aliases: ['Mithril Pickaxe +2'],
    category: 'Tool',
    ...alchFromHigh(780, { lowAlch: 520, generalStore: 390 }),
    useRequirements: { skills: { Mining: 30 }, quests: [], notes: 'Add to Tool Belt; wield requires 30 Attack.' },
    craftingRequirements: { skills: { Smithing: 30 }, materials: ['2x Mithril bar'], station: 'Anvil', quests: [], notes: 'Upgradeable to +2 at 30 Smithing.' },
    guideSources: ['Mining (30–40)', 'Smithing (29–40)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_pickaxe'
  }),
  makeItem({
    id: 'adamant-pickaxe',
    name: 'Adamant pickaxe',
    aliases: ['Adamant Pickaxe +2'],
    category: 'Tool',
    ...alchFromHigh(400, { lowAlch: 266, generalStore: 200 }),
    useRequirements: { skills: { Mining: 40 }, quests: [], notes: 'Add to Tool Belt; wield requires 40 Attack.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['2x Adamantite bar'], station: 'Anvil', quests: [], notes: 'Post-rework Adamant base = 200 GP HA/bar (400 GP for 2 bars; +2 = 8 bars = 1,600 GP).' },
    guideSources: ['Mining (40–50)', 'Smithing (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Adamant_pickaxe'
  }),
  makeItem({
    id: 'rune-pickaxe-3',
    name: 'Rune pickaxe +3',
    aliases: ['Rune pickaxe', 'Rune +3 Pickaxe', 'Rune Pickaxes'],
    category: 'Tool',
    ...alchFromHigh(8000, { lowAlch: 5333, generalStore: 4000, shopNote: 'General stores buy +3 at 30%; specialty shops reject +3.' }),
    useRequirements: { skills: { Mining: 50 }, quests: [], notes: 'Best F2P Mining pickaxe (+3 adds mining damage/penetration; wield requires 50 Attack). Add to Tool Belt.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['16x Rune bar (2 base + 2 + 4 + 8 for +3)'], station: 'Anvil & Forge', quests: [], notes: 'Base Rune pickaxe = 1,000 GP High Alch (2 bars); +3 = 8,000 GP High Alch (16 bars).' },
    guideSources: ['Mining (50–99)', 'Smithing (50–99)', 'GIM Roles'],
    wikiUrl: 'https://runescape.wiki/w/Rune_pickaxe_%2B_3'
  }),
  makeItem({
    id: 'bronze-hatchet',
    name: 'Bronze hatchet',
    aliases: ['Hatchet'],
    category: 'Tool',
    ...alchFromHigh(9, { lowAlch: 6, generalStore: 4 }),
    useRequirements: { skills: { Woodcutting: 1 }, quests: [], notes: 'Starter hatchet on Tool Belt; wield requires 1 Attack.' },
    craftingRequirements: { skills: { Smithing: 1 }, materials: ['1x Bronze bar'], station: 'Anvil', quests: [], notes: 'Bought from Bob\'s Brilliant Axes or smithed.' },
    guideSources: ['Woodcutting (1–15)', 'Quests: Beneath Cursed Tides'],
    wikiUrl: 'https://runescape.wiki/w/Bronze_hatchet'
  }),
  makeItem({
    id: 'iron-hatchet',
    name: 'Iron hatchet',
    category: 'Tool',
    ...alchFromHigh(33, { lowAlch: 22, generalStore: 16 }),
    useRequirements: { skills: { Woodcutting: 1 }, quests: [], notes: 'Can be added to Tool Belt (10 Woodcutting recommended progression; wield requires 10 Attack).' },
    craftingRequirements: { skills: { Smithing: 10 }, materials: ['1x Iron bar'], station: 'Anvil', quests: [], notes: 'Sold by Bob in Lumbridge or smithed.' },
    guideSources: ['Woodcutting (1–30)'],
    wikiUrl: 'https://runescape.wiki/w/Iron_hatchet'
  }),
  makeItem({
    id: 'steel-hatchet',
    name: 'Steel hatchet',
    category: 'Tool',
    ...alchFromHigh(120, { lowAlch: 80, generalStore: 60 }),
    useRequirements: { skills: { Woodcutting: 1 }, quests: [], notes: 'Add to Tool Belt (20 WC progression; wield requires 20 Attack).' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['1x Steel bar'], station: 'Anvil', quests: [], notes: 'Sold by Bob in Lumbridge or smithed.' },
    guideSources: ['Woodcutting (15–30)'],
    wikiUrl: 'https://runescape.wiki/w/Steel_hatchet'
  }),
  makeItem({
    id: 'mithril-hatchet',
    name: 'Mithril hatchet',
    category: 'Tool',
    ...alchFromHigh(480, { lowAlch: 320, generalStore: 240 }),
    useRequirements: { skills: { Woodcutting: 21 }, quests: [], notes: 'Add to Tool Belt; wield requires 30 Attack.' },
    craftingRequirements: { skills: { Smithing: 30 }, materials: ['1x Mithril bar'], station: 'Anvil', quests: [], notes: 'Crafted by Group Smith.' },
    guideSources: ['Woodcutting (30–45)', 'Smithing (29–40)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_hatchet'
  }),
  makeItem({
    id: 'adamant-hatchet',
    name: 'Adamant hatchet',
    category: 'Tool',
    ...alchFromHigh(768, { lowAlch: 512, generalStore: 384 }),
    useRequirements: { skills: { Woodcutting: 31 }, quests: [], notes: 'Add to Tool Belt; wield requires 40 Attack.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['1x Adamantite bar'], station: 'Anvil', quests: [], notes: 'Crafted by Group Smith.' },
    guideSources: ['Woodcutting (30–60)', 'Smithing (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Adamant_hatchet'
  }),
  makeItem({
    id: 'rune-hatchet',
    name: 'Rune hatchet',
    aliases: ['Rune Hatchets'],
    category: 'Tool',
    ...alchFromHigh(7680, { lowAlch: 5120, generalStore: 3840 }),
    useRequirements: { skills: { Woodcutting: 41 }, quests: [], notes: 'Best F2P Tool Belt hatchet (wield requires 50 Attack).' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['1x Rune bar'], station: 'Anvil', quests: [], notes: 'Group Smith crafts 1 per teammate at 50 Smithing (or post-rework 50 Smithing / legacy 86).' },
    guideSources: ['Woodcutting (45–99)', 'Smithing (50–99)', 'GIM Roles'],
    wikiUrl: 'https://runescape.wiki/w/Rune_hatchet'
  }),
  makeItem({
    id: 'bronze-mattock',
    name: 'Bronze mattock',
    category: 'Tool',
    ...alchFromHigh(33, { lowAlch: 22, generalStore: 16 }),
    useRequirements: { skills: { Archaeology: 1 }, quests: [], notes: 'Free starter mattock from Acting Guildmaster Reiniger; add to Tool Belt.' },
    craftingRequirements: { skills: { Smithing: 1 }, materials: ['1x Bronze bar'], station: 'Anvil', quests: [], notes: 'Smithed or claimed free at Archaeology Campus.' },
    guideSources: ['Archaeology (1–5)'],
    wikiUrl: 'https://runescape.wiki/w/Bronze_mattock'
  }),
  makeItem({
    id: 'iron-mattock',
    name: 'Iron mattock',
    category: 'Tool',
    ...alchFromHigh(121, { lowAlch: 80, generalStore: 60 }),
    useRequirements: { skills: { Archaeology: 10 }, quests: [], notes: 'Add to Tool Belt for Kharid-et excavation.' },
    craftingRequirements: { skills: { Smithing: 10 }, materials: ['1x Iron bar'], station: 'Anvil', quests: [], notes: 'Smithed at 10 Smithing.' },
    guideSources: ['Archaeology (5–12)'],
    wikiUrl: 'https://runescape.wiki/w/Iron_mattock'
  }),
  makeItem({
    id: 'steel-mattock',
    name: 'Steel mattock',
    category: 'Tool',
    ...alchFromHigh(240, { lowAlch: 160, generalStore: 120 }),
    useRequirements: { skills: { Archaeology: 20 }, quests: [], notes: 'Best F2P mattock (caps at Level 20 Archaeology).' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['2x Steel bar'], station: 'Anvil', quests: [], notes: 'Smithed at 20 Smithing from 2 Steel bars.' },
    guideSources: ['Archaeology (12–20)'],
    wikiUrl: 'https://runescape.wiki/w/Steel_mattock'
  }),
  makeItem({
    id: 'bronze-ore-box',
    name: 'Bronze ore box',
    category: 'Tool',
    ...alchFromHigh(100, { lowAlch: 67, generalStore: 50 }),
    useRequirements: { skills: { Mining: 1 }, quests: [], notes: 'Stores 100 Copper and 100 Tin ore in 1 inventory slot.' },
    craftingRequirements: { skills: { Smithing: 1 }, materials: ['2x Bronze bar'], station: 'Anvil', quests: [], notes: 'Grants 30 Smithing XP.' },
    guideSources: ['Mining (1–10)'],
    wikiUrl: 'https://runescape.wiki/w/Bronze_ore_box'
  }),
  makeItem({
    id: 'iron-ore-box',
    name: 'Iron ore box',
    category: 'Tool',
    ...alchFromHigh(100, { lowAlch: 67, generalStore: 50 }),
    useRequirements: { skills: { Mining: 10 }, quests: [], notes: 'Stores 100+ of Copper, Tin, and Iron ores.' },
    craftingRequirements: { skills: { Smithing: 10 }, materials: ['Bronze ore box', '2x Iron bar'], station: 'Anvil', quests: [], notes: 'Grants 80 Smithing XP.' },
    guideSources: ['Mining (10–20)'],
    wikiUrl: 'https://runescape.wiki/w/Iron_ore_box'
  }),
  makeItem({
    id: 'steel-ore-box',
    name: 'Steel ore box',
    category: 'Tool',
    ...alchFromHigh(201, { lowAlch: 134, generalStore: 100 }),
    useRequirements: { skills: { Mining: 20 }, quests: [], notes: 'Stores Copper, Tin, Iron, Coal, and Silver ores.' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['Iron ore box', '2x Steel bar'], station: 'Anvil', quests: [], notes: 'Grants 140 Smithing XP.' },
    guideSources: ['Mining (20–30)'],
    wikiUrl: 'https://runescape.wiki/w/Steel_ore_box'
  }),
  makeItem({
    id: 'mithril-ore-box',
    name: 'Mithril ore box',
    category: 'Tool',
    ...alchFromHigh(301, { lowAlch: 200, generalStore: 150 }),
    useRequirements: { skills: { Mining: 30 }, quests: [], notes: 'Stores up to Mithril ore (100–140 per ore).' },
    craftingRequirements: { skills: { Smithing: 30 }, materials: ['Steel ore box', '2x Mithril bar'], station: 'Anvil', quests: [], notes: 'Grants 240 Smithing XP.' },
    guideSources: ['Mining (30–40)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_ore_box'
  }),
  makeItem({
    id: 'adamant-ore-box',
    name: 'Adamant ore box',
    category: 'Tool',
    ...alchFromHigh(400, { lowAlch: 268, generalStore: 200 }),
    useRequirements: { skills: { Mining: 40 }, quests: [], notes: 'Stores up to Adamantite, Gold, and Luminite ores.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['Mithril ore box', '2x Adamantite bar'], station: 'Anvil', quests: [], notes: 'Grants 340 Smithing XP.' },
    guideSources: ['Mining (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Adamant_ore_box'
  }),
  makeItem({
    id: 'rune-ore-box',
    name: 'Rune ore box',
    category: 'Tool',
    ...alchFromHigh(1000, { lowAlch: 667, generalStore: 500 }),
    useRequirements: { skills: { Mining: 50 }, quests: [], notes: 'Best F2P Ore Box; holds 100–140 of every F2P ore including Runite & Luminite.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['Adamant ore box', '2x Rune bar'], station: 'Anvil', quests: [], notes: 'Grants 480 Smithing XP.' },
    guideSources: ['Mining (50–99)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_ore_box'
  }),

  // =========================================================================
  // SMITHED ARMOUR, WEAPONS, ARROWHEADS & NAILS
  // =========================================================================
  makeItem({
    id: 'bronze-platebody',
    name: 'Bronze platebody',
    aliases: ['Bronze gear'],
    category: 'Armour',
    ...alchFromHigh(96, { lowAlch: 64, generalStore: 48, specialtyShop: { shop: "Horvik's Armour Shop", price: 48 }, shopNote: 'Base +0 accepted at Horvik\'s and General Stores.' }),
    useRequirements: { skills: { Defence: 1 }, quests: [], notes: 'Tier 1 melee body armour.' },
    craftingRequirements: { skills: { Smithing: 1 }, materials: ['5x Bronze bar'], station: 'Anvil', quests: [], notes: 'Post-rework Bronze items can be smithed from Level 1+ Smithing.' },
    guideSources: ['Mining (1–10)', 'Smithing (1–29)'],
    wikiUrl: 'https://runescape.wiki/w/Bronze_platebody'
  }),
  makeItem({
    id: 'iron-platebody-1',
    name: 'Iron platebody +1',
    aliases: ['Iron platebody', 'Iron +1 Platebodies'],
    category: 'Armour',
    ...alchFromHigh(336, { lowAlch: 224, generalStore: 168, shopNote: 'General Stores buy +1 at 30%; Horvik\'s accepts base +0 only.' }),
    useRequirements: { skills: { Defence: 10 }, quests: [], notes: 'Tier 12 melee body armour.' },
    craftingRequirements: { skills: { Smithing: 10 }, materials: ['10x Iron bar (5 base + 5 for +1)'], station: 'Anvil & Forge', quests: [], notes: 'Base Iron platebody = 5 Iron bars; upgrade +1 with 5 more bars.' },
    guideSources: ['Mining (10–20)', 'Smithing (1–29)'],
    wikiUrl: 'https://runescape.wiki/w/Iron_platebody_%2B_1'
  }),
  makeItem({
    id: 'steel-platebody-2',
    name: 'Steel platebody +2',
    aliases: ['Steel platebody', 'Steel +2 Platebodies'],
    category: 'Armour',
    ...alchFromHigh(1200, { lowAlch: 800, generalStore: 600, shopNote: 'General Stores buy +2 at 30%; specialty shops accept base +0 only.' }),
    useRequirements: { skills: { Defence: 20 }, quests: [], notes: 'Tier 22 melee body armour (base Steel is T20).' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['20x Steel bar (5 base + 5 for +1 + 10 for +2)'], station: 'Anvil & Forge', quests: [], notes: 'Base value note: legacy base Steel platebody High Alch was 1,200 GP.' },
    guideSources: ['Mining (20–30)', 'Smithing (29–40)'],
    wikiUrl: 'https://runescape.wiki/w/Steel_platebody_%2B_2'
  }),
  makeItem({
    id: 'mithril-platebody-2',
    name: 'Mithril platebody +2',
    aliases: ['Mithril platebody', 'Mithril +2', 'Mithril +2 Platebodies'],
    category: 'Armour',
    ...alchFromHigh(3120, { lowAlch: 2080, generalStore: 1560, shopNote: 'General Stores buy +2 at 30%; specialty shops reject +2 gear.' }),
    useRequirements: { skills: { Defence: 30 }, quests: [], notes: 'Tier 32 melee body armour (also part of Mithril +2 Burial Armour Set).' },
    craftingRequirements: { skills: { Smithing: 30 }, materials: ['20x Mithril bar (5 base + 5 for +1 + 10 for +2)'], station: 'Anvil & Forge', quests: [], notes: 'Can be destroyed on Burial Anvil for double Smithing XP + Respect.' },
    guideSources: ['Mining (30–40)', 'Smithing (29–40)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_platebody_%2B_2'
  }),
  makeItem({
    id: 'mithril-full-helm-2',
    name: 'Mithril full helm +2',
    aliases: ['Mithril full helm'],
    category: 'Armour',
    ...alchFromHigh(858, { lowAlch: 572, generalStore: 429, shopNote: 'General Stores buy +2 at 30%; specialty shops reject +2.' }),
    useRequirements: { skills: { Defence: 30 }, quests: [], notes: 'Part of Mithril +2 Burial Armour Set.' },
    craftingRequirements: { skills: { Smithing: 30 }, materials: ['8x Mithril bar (2 base + 2 + 4 for +2)'], station: 'Anvil & Forge', quests: [], notes: 'Used for Mithril Burial sets.' },
    guideSources: ['Smithing (29–40)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_full_helm_%2B_2'
  }),
  makeItem({
    id: 'mithril-2h-sword',
    name: 'Mithril 2h sword',
    category: 'Weapon',
    ...alchFromHigh(1560, { lowAlch: 1040, generalStore: 780, specialtyShop: { shop: 'Varrock Swordshop', price: 780 } }),
    useRequirements: { skills: { Attack: 30 }, quests: [], notes: 'Tier 30 2H melee sword for AoE Cleave/Quake.' },
    craftingRequirements: { skills: { Smithing: 30 }, materials: ['3x Mithril bar'], station: 'Anvil', quests: [], notes: 'Upgradeable to +2 at 30 Smithing.' },
    guideSources: ['Attack (20–40)', 'Strength (33–55)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_2h_sword'
  }),
  makeItem({
    id: 'steel-2h-sword',
    name: 'Steel 2h sword',
    category: 'Weapon',
    ...alchFromHigh(600, { lowAlch: 400, generalStore: 300, specialtyShop: { shop: 'Varrock Swordshop', price: 300 } }),
    useRequirements: { skills: { Attack: 20 }, quests: [], notes: 'Tier 20 2H melee sword.' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['3x Steel bar'], station: 'Anvil', quests: [], notes: 'Upgradeable to +2.' },
    guideSources: ['Attack (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Steel_2h_sword'
  }),
  makeItem({
    id: 'adamant-2h-sword',
    name: 'Adamant 2h sword',
    aliases: ['Adamant +2 2H'],
    category: 'Weapon',
    ...alchFromHigh(600, { lowAlch: 400, generalStore: 300, specialtyShop: { shop: 'Varrock Swordshop', price: 300 }, shopNote: 'RS3 post-rework: 3 Adamantite bars × 200 GP = 600 GP HA (base); +2 = 12 bars = 2,400 GP HA.' }),
    useRequirements: { skills: { Attack: 40 }, quests: [], notes: 'Tier 40 2H melee sword.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['3x Adamantite bar'], station: 'Anvil', quests: [], notes: 'Upgradeable to +2 (12 bars).' },
    guideSources: ['Attack (40–60)', 'Strength (33–55)'],
    wikiUrl: 'https://runescape.wiki/w/Adamant_2h_sword'
  }),
  makeItem({
    id: 'adamant-platebody-2',
    name: 'Adamant platebody +2',
    aliases: ['Adamant platebody', 'Adamant +2 Platebodies', 'Addy +2'],
    category: 'Armour',
    ...alchFromHigh(4000, { lowAlch: 2666, generalStore: 2000, shopNote: 'General Stores buy +2 at 30%; Horvik\'s rejects +2 gear.' }),
    useRequirements: { skills: { Defence: 40 }, quests: [], notes: 'Tier 42 melee body armour.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['20x Adamantite bar (5 base + 5 for +1 + 10 for +2)'], station: 'Anvil & Forge', quests: [], notes: 'RS3 post-rework: Adamant equipment alchs at 200 GP/bar (base 5 bars = 1,000 HA; +2 = 20 bars = 4,000 HA).' },
    guideSources: ['Mining (40–50)', 'Smithing (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Adamant_platebody_%2B_2'
  }),
  makeItem({
    id: 'rune-platebody-3',
    name: 'Rune platebody +3',
    aliases: ['Rune platebody', 'Rune Platebodies +3', 'Rune +3 Platebody', 'Rune +3'],
    category: 'Armour',
    ...alchFromHigh(20000, { lowAlch: 13333, generalStore: 10000, shopNote: 'General Stores buy +3 at 10,000 GP (30%); Scavvo\'s/Horvik\'s reject +3 items.' }),
    useRequirements: { skills: { Defence: 50 }, quests: [], notes: 'Tier 53 melee body armour; primary F2P GIM raw GP generator via High Alch.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['40x Rune bar (5 base + 5 + 10 + 20 for +3)'], station: 'Anvil & Forge', quests: [], notes: 'Base Rune platebody (5 bars) = 2,500 GP HA; +3 (40 bars) = 20,000 GP HA (500 GP/bar).' },
    guideSources: ['Mining (50–99)', 'Smithing (50–99)', 'Money Making: High Alch Smithing'],
    wikiUrl: 'https://runescape.wiki/w/Rune_platebody_%2B_3'
  }),
  makeItem({
    id: 'rune-2h-sword-3',
    name: 'Rune 2h sword +3',
    aliases: ['Rune 2h sword', 'Rune 2h Swords', 'Rune +3 2h', 'Rune 2h'],
    category: 'Weapon',
    ...alchFromHigh(12000, { lowAlch: 8000, generalStore: 6000, shopNote: 'General Stores buy +3 at 6,000 GP; base +0 (1,500 GP HA) sells to Varrock Swordshop.' }),
    useRequirements: { skills: { Attack: 50 }, quests: [], notes: 'Best F2P non-degrading 2H melee weapon for AoE Cleave/Quake/Hurricane (Tier 53 at +3).' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['24x Rune bar (3 base + 3 + 6 + 12 for +3)'], station: 'Anvil & Forge', quests: [], notes: 'Base Rune 2h = 1,500 GP HA (3 bars); +3 = 12,000 GP HA (24 bars).' },
    guideSources: ['Smithing (50–99)', 'Attack/Strength (50–99)', 'PvM: Chaos Elemental'],
    wikiUrl: 'https://runescape.wiki/w/Rune_2h_sword_%2B_3'
  }),
  makeItem({
    id: 'rune-scimitar',
    name: 'Rune scimitar',
    category: 'Weapon',
    ...alchFromHigh(1000, { lowAlch: 666, generalStore: 500, specialtyShop: { shop: "Zeke's Superior Scimitars / Varrock Swordshop", price: 500 } }),
    useRequirements: { skills: { Attack: 50 }, quests: [], notes: 'Tier 50 main-hand slash weapon dropped by Cockroach Soldiers.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['2x Rune bar'], station: 'Anvil', quests: [], notes: 'RS3 post-rework: 2 Rune bars × 500 GP = 1,000 GP High Alch.' },
    guideSources: ['PvM: Cockroach Soldiers', 'Attack (40–60)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_scimitar'
  }),
  makeItem({
    id: 'rune-sq-shield',
    name: 'Rune sq shield',
    aliases: ['Rune Sq Shields', 'Rune Kite Shield +3'],
    category: 'Armour',
    ...alchFromHigh(1000, { lowAlch: 666, generalStore: 500, specialtyShop: { shop: "Cassie's Shield Shop", price: 500 } }),
    useRequirements: { skills: { Defence: 50 }, quests: [], notes: 'Tier 50 melee shield used for Resonance (48 Defence) heals; dropped by Cockroach Soldiers.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['2x Rune bar'], station: 'Anvil', quests: [], notes: '2 Rune bars × 500 GP = 1,000 GP High Alch.' },
    guideSources: ['PvM: Cockroach Soldiers', 'Defence (48+)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_sq_shield'
  }),
  makeItem({
    id: 'rune-med-helm',
    name: 'Rune med helm',
    aliases: ['Rune Med Helms'],
    category: 'Armour',
    ...alchFromHigh(500, { lowAlch: 333, generalStore: 250, specialtyShop: { shop: "Horvik's / Scavvo's", price: 250 } }),
    useRequirements: { skills: { Defence: 50 }, quests: [], notes: 'Tier 50 melee helmet dropped by Lesser Demons.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['1x Rune bar'], station: 'Anvil', quests: [], notes: '1 Rune bar × 500 GP = 500 GP High Alch.' },
    guideSources: ['PvM: Lesser Demons', 'Attack/Magic/Ranged (40–60)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_med_helm'
  }),
  makeItem({
    id: 'rune-full-helm',
    name: 'Rune full helm',
    aliases: ['Rune Full Helms'],
    category: 'Armour',
    ...alchFromHigh(1000, { lowAlch: 666, generalStore: 500, specialtyShop: { shop: "Scavvo's Rune Store", price: 500 } }),
    useRequirements: { skills: { Defence: 50 }, quests: [], notes: 'Tier 50 melee helmet dropped by Greater Demons.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['2x Rune bar'], station: 'Anvil', quests: [], notes: '2 Rune bars × 500 GP = 1,000 GP High Alch.' },
    guideSources: ['PvM: Greater Demons', 'Attack/Defence (60–99)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_full_helm'
  }),
  makeItem({
    id: 'mithril-spear',
    name: 'Mithril spear',
    category: 'Weapon',
    ...alchFromHigh(780, { lowAlch: 520, generalStore: 390, shopNote: 'Dropped by Moss Giants (cannot be smithed at normal anvils without Barbarian Training).' }),
    useRequirements: { skills: { Attack: 30 }, quests: [], notes: 'Tier 30 2H melee spear dropped by Moss Giants.' },
    craftingRequirements: null,
    guideSources: ['PvM: Moss Giants'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_spear'
  }),
  makeItem({
    id: 'adamant-arrowheads',
    name: 'Adamant arrowheads',
    aliases: ['Adamant Arrowtips'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(15, { lowAlch: 10, generalStore: 7 }),
    useRequirements: { skills: { Fletching: 60 }, quests: [], notes: 'Attach to Headless arrows at 60 Fletching to make Adamant arrows.' },
    craftingRequirements: { skills: { Smithing: 40 }, materials: ['1x Adamantite bar'], station: 'Anvil', quests: [], notes: 'RS3 post-rework: 1 bar = 75 arrowheads at 40 Smithing.' },
    guideSources: ['Smithing (40–50)', 'Fletching (55–70)', 'PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Adamant_arrowheads'
  }),
  makeItem({
    id: 'rune-arrowheads',
    name: 'Rune arrowheads',
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(60, { lowAlch: 40, generalStore: 30 }),
    useRequirements: { skills: { Fletching: 75 }, quests: [], notes: 'Attach to Headless arrows at 75 Fletching for Rune arrows.' },
    craftingRequirements: { skills: { Smithing: 50 }, materials: ['1x Rune bar'], station: 'Anvil', quests: [], notes: 'RS3 post-rework: 1 bar = 75 arrowheads (guides note 50–75 Smithing).' },
    guideSources: ['Smithing (50–99)', 'Fletching (70–99)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_arrowheads'
  }),
  makeItem({
    id: 'steel-nails',
    name: 'Steel nails',
    category: 'Misc',
    stackable: true,
    ...alchFromHigh(1, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: {}, quests: ['Dragon Slayer'], notes: '90 Steel nails + 3 Planks needed to repair Lady Lumbridge in Dragon Slayer.' },
    craftingRequirements: { skills: { Smithing: 20 }, materials: ['1x Steel bar'], station: 'Anvil', quests: [], notes: 'Produces Steel nails at an anvil.' },
    guideSources: ['Quests: Dragon Slayer'],
    wikiUrl: 'https://runescape.wiki/w/Steel_nails'
  }),

  // =========================================================================
  // SALVAGE & PVM SPECIAL LOOT
  // =========================================================================
  makeItem({
    id: 'medium-blunt-rune-salvage',
    name: 'Medium blunt rune salvage',
    aliases: ['Medium Rune Salvage', 'Medium & Large Blunt Rune Salvage', 'Rune Salvage'],
    category: 'Salvage',
    ...alchFromHigh(24000, { lowAlch: 16000, generalStore: 12000, shopNote: 'High Alch (24,000 GP) is standard; General Store pays 30% (12,000 GP). Specialty shops do not stock salvage.' }),
    useRequirements: { skills: { Magic: 55 }, quests: [], notes: 'Pure High Alch / Coin drop from Cockroaches, Lesser Demons, Ankous, and KBD.' },
    craftingRequirements: null,
    guideSources: ['PvM: Cockroach Soldiers, Lesser Demons, Ankous, KBD', 'Money Making: Cockroach Soldiers'],
    wikiUrl: 'https://runescape.wiki/w/Medium_blunt_rune_salvage'
  }),
  makeItem({
    id: 'large-blunt-rune-salvage',
    name: 'Large blunt rune salvage',
    aliases: ['Large Rune Salvage'],
    category: 'Salvage',
    ...alchFromHigh(32000, { lowAlch: 21333, generalStore: 16000, shopNote: 'High Alch (32,000 GP) is standard; General Store pays 16,000 GP.' }),
    useRequirements: { skills: { Magic: 55 }, quests: [], notes: 'High-value alch drop from Cockroach Soldiers, Greater Demons, and KBD.' },
    craftingRequirements: null,
    guideSources: ['PvM: Cockroach Soldiers, Greater Demons, KBD', 'Money Making: Cockroach Soldiers'],
    wikiUrl: 'https://runescape.wiki/w/Large_blunt_rune_salvage'
  }),
  makeItem({
    id: 'huge-blunt-rune-salvage',
    name: 'Huge blunt rune salvage',
    aliases: ['Huge Rune Salvage', 'Medium / Large / Huge Rune Salvage'],
    category: 'Salvage',
    ...alchFromHigh(40000, { lowAlch: 26666, generalStore: 20000, shopNote: 'High Alch (40,000 GP) is standard across all Huge rune salvage variants.' }),
    useRequirements: { skills: { Magic: 55 }, quests: [], notes: 'Top F2P boss salvage drop from King Black Dragon.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Huge_blunt_rune_salvage'
  }),
  makeItem({
    id: 'mithril-salvage',
    name: 'Medium plated mithril salvage',
    aliases: ['Mithril salvage', 'Steel/Mithril Salvage', 'Rune/Mithril Salvage', 'Mithril/Adamant Salvage'],
    category: 'Salvage',
    ...alchFromHigh(1800, { lowAlch: 1200, generalStore: 900, shopNote: 'Tiny mithril salvage = 600 GP HA; Medium = 1,800 GP HA.' }),
    useRequirements: { skills: { Magic: 55 }, quests: [], notes: 'Alched or sold to General Store (low/mid-tier PvM drop).' },
    craftingRequirements: null,
    guideSources: ['PvM: Al Kharid Warriors, Moss Giants, Ice Giants, Ankous, Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Medium_plated_mithril_salvage'
  }),
  makeItem({
    id: 'adamant-salvage',
    name: 'Medium plated adamant salvage',
    aliases: ['Adamant salvage'],
    category: 'Salvage',
    ...alchFromHigh(4000, { lowAlch: 2666, generalStore: 2000, shopNote: 'Adamant salvage ranges from ~4,000 GP HA (small/medium) to 10,000 GP HA (huge).' }),
    useRequirements: { skills: { Magic: 55 }, quests: [], notes: 'High Alch drop from Ice Giants and Ice Warriors.' },
    craftingRequirements: null,
    guideSources: ['PvM: Ice Giants, Ice Warriors'],
    wikiUrl: 'https://runescape.wiki/w/Medium_plated_adamant_salvage'
  }),
  makeItem({
    id: 'bronze-salvage',
    name: 'Small plated bronze salvage',
    aliases: ['Bronze salvage', 'Goblin Raider Salvage'],
    category: 'Salvage',
    ...alchFromHigh(120, { lowAlch: 80, generalStore: 60, shopNote: 'Early-tier salvage (Bronze/Goblin raid drops); sell to General Store pre-55 Magic.' }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Lumbridge/Edgeville/Burthorpe General Store for early GP.' },
    craftingRequirements: null,
    guideSources: ['PvM: Corpse Spiders, Hollowtoof'],
    wikiUrl: 'https://runescape.wiki/w/Small_plated_bronze_salvage'
  }),
  makeItem({
    id: 'iron-salvage',
    name: 'Medium blunt iron salvage',
    aliases: ['Iron salvage', 'Bronze/Iron Salvage'],
    category: 'Salvage',
    ...alchFromHigh(195, { lowAlch: 130, generalStore: 97, shopNote: 'Tiny iron salvage = 65 GP HA; Medium blunt = 195 GP HA.' }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Lumbridge General Store for early GP.' },
    craftingRequirements: null,
    guideSources: ['PvM: Corpse Spiders'],
    wikiUrl: 'https://runescape.wiki/w/Medium_blunt_iron_salvage'
  }),
  makeItem({
    id: 'steel-salvage',
    name: 'Medium plated steel salvage',
    aliases: ['Steel salvage', 'Steel/Mithril Salvage'],
    category: 'Salvage',
    ...alchFromHigh(720, { lowAlch: 480, generalStore: 360 }),
    useRequirements: { skills: {}, quests: [], notes: 'Alched or sold at Edgeville/Al Kharid General Store.' },
    craftingRequirements: null,
    guideSources: ['PvM: Al Kharid Warriors'],
    wikiUrl: 'https://runescape.wiki/w/Medium_plated_steel_salvage'
  }),
  makeItem({
    id: 'troll-pelt',
    name: 'Troll pelt',
    aliases: ['Troll Pelts'],
    category: 'Misc',
    baseValue: 1,
    sellPrices: { generalStore: 0, specialtyShop: null, shopNote: 'Low-tier Burthorpe Troll drop; sell to Burthorpe General Store or discard.' },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: 'Early Burthorpe Troll drop; low store value.' },
    craftingRequirements: null,
    guideSources: ['PvM: Trolls'],
    wikiUrl: 'https://runescape.wiki/w/Troll_pelt'
  }),
  makeItem({
    id: 'gud-raider-chainbody',
    name: 'Gud raider chainbody',
    aliases: ['Gud Raider Chainbody / Axe / Shield'],
    category: 'Armour',
    ...alchFromHigh(30000, { lowAlch: 20000, generalStore: 15000, shopNote: 'NEVER alch or sell to NPCs — rare BiS F2P melee chestplate!' }),
    useRequirements: { skills: { Defence: 55 }, quests: [], notes: 'Best-in-Slot non-degrading F2P Melee Power torso (+20 Strength bonus); dropped by Hollowtoof (Goblin Raids).' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Hollowtoof', 'Daily Checklist'],
    wikiUrl: 'https://runescape.wiki/w/Gud_raider_chainbody'
  }),
  makeItem({
    id: 'gud-raider-axe',
    name: 'Gud raider axe',
    category: 'Weapon',
    ...alchFromHigh(30000, { lowAlch: 20000, generalStore: 15000 }),
    useRequirements: { skills: { Attack: 55 }, quests: [], notes: 'Tier 55 non-degrading main-hand melee weapon from Hollowtoof.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Hollowtoof'],
    wikiUrl: 'https://runescape.wiki/w/Gud_raider_axe'
  }),
  makeItem({
    id: 'gud-raider-shield',
    name: 'Gud raider shield',
    category: 'Armour',
    ...alchFromHigh(45000, { lowAlch: 30000, generalStore: 22500 }),
    useRequirements: { skills: { Defence: 55 }, quests: [], notes: 'Tier 55 non-degrading melee shield from Hollowtoof.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Hollowtoof'],
    wikiUrl: 'https://runescape.wiki/w/Gud_raider_shield'
  }),
  makeItem({
    id: 'ancient-statuette',
    name: 'Ancient statuette',
    aliases: ['Ancient Statuettes', 'Ancient Artefacts', 'Broken statuette'],
    category: 'Boss / Clue Loot',
    baseValue: 2000000,
    sellPrices: {
      generalStore: 600000,
      specialtyShop: { shop: 'Mandrith (Edgeville)', price: 5000000 },
      mandrith: 5000000,
      shopNote: 'Exchange with Mandrith in Edgeville for 5,000,000 GP (Ancient statuette) — vastly exceeds High Alch.'
    },
    alchPrices: { alchable: true, lowAlch: 800000, highAlch: 1200000 },
    useRequirements: { skills: {}, quests: [], notes: 'Rare Wilderness Revenant / Chaos Elemental drop; trade to Mandrith for raw GP.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Revenants, Chaos Elemental'],
    wikiUrl: 'https://runescape.wiki/w/Ancient_statuette'
  }),
  makeItem({
    id: 'corrupt-dragon-gear',
    name: 'Corrupt dragon sq shield',
    aliases: ['Corrupt Dragon', 'Corrupt Gear', 'Corrupt Dragon Weapons / Armour', 'Corrupt PvP Gear'],
    category: 'Armour',
    ...alchFromHigh(72000, { lowAlch: 48000, generalStore: 36000, shopNote: 'High Alch unused Corrupt Dragon pieces; equipping degrades them to dust in 30 mins.' }),
    useRequirements: { skills: { Defence: 60 }, quests: [], notes: 'F2P-equippable Tier 60 gear that degrades to dust in 30 minutes of combat; Ironmen usually High Alch.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Revenants, Chaos Elemental'],
    wikiUrl: 'https://runescape.wiki/w/Corrupt_dragon_sq_shield'
  }),
  makeItem({
    id: 'clingy-mole',
    name: 'Clingy mole',
    category: 'Boss / Clue Loot',
    tradeable: true,
    sellPrices: { generalStore: null, specialtyShop: null, shopNote: 'Cannot be alched or sold to general stores; attach to Anti-dragon shield.' },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Crafting: 45 }, quests: ['Dragon Slayer (Anti-dragon shield)'], notes: 'Combine with Anti-dragon shield at 45 Crafting to create Anti-dragon shield (mole) (T50).' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Clingy_mole'
  }),
  makeItem({
    id: 'anti-dragon-shield',
    name: 'Anti-dragon shield',
    category: 'Armour',
    ...alchFromHigh(12, { lowAlch: 8, generalStore: 6 }),
    useRequirements: { skills: { Defence: 1 }, quests: ['Dragon Slayer (started)'], notes: 'Protects against Elvarg and King Black Dragon dragonfire; claim extras from Duke Horacio.' },
    craftingRequirements: null,
    guideSources: ['Quests: Dragon Slayer', 'PvM: Giant Mole, KBD'],
    wikiUrl: 'https://runescape.wiki/w/Anti-dragon_shield'
  }),
  makeItem({
    id: 'anti-dragon-shield-mole',
    name: 'Anti-dragon shield (mole)',
    aliases: ['Mole shield', 'T50 Mole Shield'],
    category: 'Armour',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Defence: 50 }, quests: ['Dragon Slayer (started)'], notes: 'Tier 50 dragonfire shield with stronger Resonance heals at KBD.' },
    craftingRequirements: { skills: { Crafting: 45 }, materials: ['1x Anti-dragon shield', '1x Clingy mole'], station: 'Inventory combine', quests: [], notes: 'Degrades over time when hit by dragonfire.' },
    guideSources: ['PvM Highlights', 'PvM: Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Anti-dragon_shield_(mole)'
  }),
  makeItem({
    id: 'mole-skin',
    name: 'Mole skin',
    aliases: ['Mole Skins'],
    category: 'Boss / Clue Loot',
    sellPrices: { generalStore: null, specialtyShop: null, shopNote: 'Trade to Wyson the Gardener in Falador Park for Bird\'s nests.' },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: '100% Giant Mole drop; exchange with Wyson for Bird\'s nests (gem rings).' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Mole_skin'
  }),
  makeItem({
    id: 'mole-claw',
    name: 'Mole claw',
    aliases: ['Mole Claws'],
    category: 'Boss / Clue Loot',
    sellPrices: { generalStore: null, specialtyShop: null, shopNote: 'Trade to Wyson the Gardener in Falador Park for Bird\'s nests.' },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: '100% Giant Mole drop; exchange with Wyson for Bird\'s nests.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Mole_claw'
  }),
  makeItem({
    id: 'birds-nest',
    name: "Bird's nest",
    aliases: ['Bird Nests'],
    category: 'Boss / Clue Loot',
    ...alchFromHigh(1, { lowAlch: 1, generalStore: 0 }),
    useRequirements: { skills: {}, quests: [], notes: 'Search to receive random rings (Sapphire–Diamond) or tree seeds.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Giant Mole'],
    wikiUrl: "https://runescape.wiki/w/Bird's_nest"
  }),
  makeItem({
    id: 'giant-key',
    name: 'Giant key',
    category: 'Boss / Clue Loot',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: 'Rare Hill Giant drop; check F2P Obor boss access.' },
    craftingRequirements: null,
    guideSources: ['PvM: Hill Giants'],
    wikiUrl: 'https://runescape.wiki/w/Giant_key'
  }),
  makeItem({
    id: 'draconic-visage',
    name: 'Draconic visage',
    category: 'Boss / Clue Loot',
    sellPrices: { generalStore: null, specialtyShop: null, shopNote: 'Trophy drop in F2P; Dragonfire shield forging requires 90 Smithing (P2P).' },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Smithing: 90 }, quests: [], notes: 'Rare KBD trophy drop; attaches to Anti-dragon shield at 90 Smithing (Members).' },
    craftingRequirements: null,
    guideSources: ['PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Draconic_visage'
  }),
  makeItem({
    id: 'dragon-rider-boots',
    name: 'Dragon rider boots',
    category: 'Armour',
    f2p: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Defence: 60 }, quests: [], notes: 'Tier 60 hybrid boots dropped by KBD (Members trophy item for collection log / future P2P).' },
    craftingRequirements: null,
    guideSources: ['PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Dragon_rider_boots'
  }),
  makeItem({
    id: 'dragon-rider-gloves',
    name: 'Dragon rider gloves',
    category: 'Armour',
    f2p: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Defence: 60 }, quests: [], notes: 'Tier 60 hybrid gloves dropped by KBD (Members trophy item for collection log / future P2P).' },
    craftingRequirements: null,
    guideSources: ['PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Dragon_rider_gloves'
  }),
  makeItem({
    id: 'hard-clue-scroll',
    name: 'Sealed clue scroll (hard)',
    aliases: ['Hard Clue Scrolls'],
    category: 'Boss / Clue Loot',
    tradeable: false,
    stackable: true,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: 'Hard Treasure Trails are Members-only; stack in bank from Hellhounds if upgrading to P2P later.' },
    craftingRequirements: null,
    guideSources: ['PvM: Hellhounds'],
    wikiUrl: 'https://runescape.wiki/w/Sealed_clue_scroll_(hard)'
  }),
  makeItem({
    id: 'skull-sceptre',
    name: 'Skull sceptre',
    aliases: ['Right skull half', 'Left skull half', 'Top of sceptre', 'Bottom of sceptre'],
    category: 'Tool',
    tradeable: false,
    ...alchFromHigh(1, { lowAlch: 0, generalStore: null }),
    useRequirements: { skills: {}, quests: [], notes: 'Teleports directly to Barbarian Village (Stronghold of Security entrance).' },
    craftingRequirements: { skills: {}, materials: ['Right skull half (Minotaurs)', 'Left skull half (Ankous)', 'Top of sceptre (Catablepons)', 'Bottom of sceptre (Flesh Crawlers)'], station: 'Inventory combine', quests: [], notes: 'Combine skull halves and sceptre halves, then join both.' },
    guideSources: ['PvM: Minotaurs, Flesh Crawlers, Catablepons, Ankous'],
    wikiUrl: 'https://runescape.wiki/w/Skull_sceptre'
  }),
  makeItem({
    id: 'mask-part',
    name: 'Mask part 1',
    aliases: ['Mask Parts', 'Mask of Dragith Nurn'],
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: ['The Blood Pact'], notes: 'Collect all 5 Mask parts in Lumbridge Catacombs to assemble Mask of Dragith Nurn.' },
    craftingRequirements: null,
    guideSources: ['PvM: Corpse Spiders', 'Attack (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Mask_of_Dragith_Nurn'
  }),

  // =========================================================================
  // GEMS & JEWELLERY
  // =========================================================================
  makeItem({
    id: 'uncut-sapphire',
    name: 'Uncut sapphire',
    aliases: ['Sapphire', 'Uncut Gems'],
    category: 'Gem',
    ...alchFromHigh(15, { lowAlch: 10, generalStore: 7 }),
    useRequirements: { skills: { Crafting: 20 }, quests: [], notes: 'Cut with Tool Belt Chisel into Sapphire (50 Crafting XP).' },
    craftingRequirements: { skills: { Mining: 20 }, materials: ['Uncommon gem rock'], station: 'Al Kharid North Mine', quests: [], notes: 'Store in Gem Bag (2k DG tokens).' },
    guideSources: ['Mining (20–99)', 'Crafting (20–40)', 'PvM: Hill Giants, Cockroaches, Moss/Ice Giants'],
    wikiUrl: 'https://runescape.wiki/w/Uncut_sapphire'
  }),
  makeItem({
    id: 'uncut-emerald',
    name: 'Uncut emerald',
    aliases: ['Emerald'],
    category: 'Gem',
    ...alchFromHigh(30, { lowAlch: 20, generalStore: 15 }),
    useRequirements: { skills: { Crafting: 27 }, quests: [], notes: 'Cut with Chisel into Emerald (67.5 Crafting XP).' },
    craftingRequirements: { skills: { Mining: 20 }, materials: ['Uncommon gem rock'], station: 'Al Kharid North Mine', quests: [], notes: 'Store in Gem Bag.' },
    guideSources: ['Mining (20–99)', 'Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Uncut_emerald'
  }),
  makeItem({
    id: 'uncut-ruby',
    name: 'Uncut ruby',
    aliases: ['Ruby'],
    category: 'Gem',
    ...alchFromHigh(60, { lowAlch: 40, generalStore: 30 }),
    useRequirements: { skills: { Crafting: 34 }, quests: [], notes: 'Cut with Chisel into Ruby (85 Crafting XP).' },
    craftingRequirements: { skills: { Mining: 20 }, materials: ['Uncommon gem rock'], station: 'Al Kharid North Mine', quests: [], notes: 'Store in Gem Bag.' },
    guideSources: ['Mining (20–99)', 'Crafting (40–99)'],
    wikiUrl: 'https://runescape.wiki/w/Uncut_ruby'
  }),
  makeItem({
    id: 'uncut-diamond',
    name: 'Uncut diamond',
    aliases: ['Diamond'],
    category: 'Gem',
    ...alchFromHigh(120, { lowAlch: 80, generalStore: 60 }),
    useRequirements: { skills: { Crafting: 43 }, quests: [], notes: 'Cut with Chisel into Diamond (107.5 Crafting XP).' },
    craftingRequirements: { skills: { Mining: 20 }, materials: ['Uncommon gem rock'], station: 'Al Kharid North Mine', quests: [], notes: 'Rarest gem from Al Kharid Uncommon Gem Rocks.' },
    guideSources: ['Mining (20–99)', 'Crafting (40–99)'],
    wikiUrl: 'https://runescape.wiki/w/Uncut_diamond'
  }),
  makeItem({
    id: 'gold-ring',
    name: 'Gold ring',
    category: 'Jewellery',
    ...alchFromHigh(210, { lowAlch: 140, generalStore: 105, specialtyShop: { shop: "Grum's Gold Exchange", price: 105 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell at Grum\'s Gold Exchange (Port Sarim).' },
    craftingRequirements: { skills: { Crafting: 5 }, materials: ['1x Gold bar', 'Ring mould'], station: 'Furnace', quests: [], notes: 'Grants 15 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Gold_ring'
  }),
  makeItem({
    id: 'gold-necklace',
    name: 'Gold necklace',
    category: 'Jewellery',
    ...alchFromHigh(270, { lowAlch: 180, generalStore: 135, specialtyShop: { shop: "Grum's Gold Exchange", price: 135 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell at Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 6 }, materials: ['1x Gold bar', 'Necklace mould'], station: 'Furnace', quests: [], notes: 'Grants 20 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Gold_necklace'
  }),
  makeItem({
    id: 'gold-amulet',
    name: 'Gold amulet',
    category: 'Jewellery',
    ...alchFromHigh(210, { lowAlch: 140, generalStore: 105, specialtyShop: { shop: "Grum's Gold Exchange", price: 105 } }),
    useRequirements: { skills: {}, quests: [], notes: 'String with Ball of wool or sell unstrung.' },
    craftingRequirements: { skills: { Crafting: 8 }, materials: ['1x Gold bar', 'Amulet mould'], station: 'Furnace', quests: [], notes: 'Grants 30 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Gold_amulet'
  }),
  makeItem({
    id: 'sapphire-ring',
    name: 'Sapphire ring',
    aliases: ['Gem Rings'],
    category: 'Jewellery',
    ...alchFromHigh(540, { lowAlch: 360, generalStore: 270, specialtyShop: { shop: "Grum's Gold Exchange", price: 270 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Enchantable to Ring of recoil (7 Magic) or sell to Grum\'s.' },
    craftingRequirements: { skills: { Crafting: 20 }, materials: ['1x Gold bar', '1x Sapphire', 'Ring mould'], station: 'Furnace', quests: [], notes: 'Grants 40 Crafting XP.' },
    guideSources: ['Crafting (20–40)', 'PvM: Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Sapphire_ring'
  }),
  makeItem({
    id: 'sapphire-necklace',
    name: 'Sapphire necklace',
    category: 'Jewellery',
    ...alchFromHigh(630, { lowAlch: 420, generalStore: 315, specialtyShop: { shop: "Grum's Gold Exchange", price: 315 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 22 }, materials: ['1x Gold bar', '1x Sapphire', 'Necklace mould'], station: 'Furnace', quests: [], notes: 'Grants 55–65 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Sapphire_necklace'
  }),
  makeItem({
    id: 'sapphire-amulet',
    name: 'Sapphire amulet',
    category: 'Jewellery',
    ...alchFromHigh(540, { lowAlch: 360, generalStore: 270, specialtyShop: { shop: "Grum's Gold Exchange", price: 270 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Grum\'s Gold Exchange or High Alch.' },
    craftingRequirements: { skills: { Crafting: 24 }, materials: ['1x Gold bar', '1x Sapphire', 'Amulet mould'], station: 'Furnace', quests: [], notes: 'String with Ball of wool if enchanting.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Sapphire_amulet'
  }),
  makeItem({
    id: 'emerald-ring',
    name: 'Emerald ring',
    category: 'Jewellery',
    ...alchFromHigh(765, { lowAlch: 510, generalStore: 382, specialtyShop: { shop: "Grum's Gold Exchange", price: 382 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 27 }, materials: ['1x Gold bar', '1x Emerald', 'Ring mould'], station: 'Furnace', quests: [], notes: 'Grants 55 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Emerald_ring'
  }),
  makeItem({
    id: 'emerald-necklace',
    name: 'Emerald necklace',
    category: 'Jewellery',
    ...alchFromHigh(855, { lowAlch: 570, generalStore: 427, specialtyShop: { shop: "Grum's Gold Exchange", price: 427 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 29 }, materials: ['1x Gold bar', '1x Emerald', 'Necklace mould'], station: 'Furnace', quests: [], notes: 'Grants 60 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Emerald_necklace'
  }),
  makeItem({
    id: 'emerald-amulet',
    name: 'Emerald amulet',
    category: 'Jewellery',
    ...alchFromHigh(765, { lowAlch: 510, generalStore: 382, specialtyShop: { shop: "Grum's Gold Exchange", price: 382 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 31 }, materials: ['1x Gold bar', '1x Emerald', 'Amulet mould'], station: 'Furnace', quests: [], notes: 'Grants 70 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Emerald_amulet'
  }),
  makeItem({
    id: 'ruby-ring',
    name: 'Ruby ring',
    category: 'Jewellery',
    ...alchFromHigh(1215, { lowAlch: 810, generalStore: 607, specialtyShop: { shop: "Grum's Gold Exchange", price: 607 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to Grum\'s Gold Exchange or High Alch.' },
    craftingRequirements: { skills: { Crafting: 34 }, materials: ['1x Gold bar', '1x Ruby', 'Ring mould'], station: 'Furnace', quests: [], notes: 'Grants 70 Crafting XP.' },
    guideSources: ['Crafting (40–70)'],
    wikiUrl: 'https://runescape.wiki/w/Ruby_ring'
  }),
  makeItem({
    id: 'ruby-necklace',
    name: 'Ruby necklace',
    category: 'Jewellery',
    ...alchFromHigh(1305, { lowAlch: 870, generalStore: 652, specialtyShop: { shop: "Grum's Gold Exchange", price: 652 } }),
    useRequirements: { skills: {}, quests: [], notes: 'High Alch or sell to Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 40 }, materials: ['1x Gold bar', '1x Ruby', 'Necklace mould'], station: 'Furnace', quests: [], notes: 'Grants 75 Crafting XP.' },
    guideSources: ['Crafting (40–70)', 'Money Making: Jewellery Alchs'],
    wikiUrl: 'https://runescape.wiki/w/Ruby_necklace'
  }),
  makeItem({
    id: 'ruby-amulet',
    name: 'Ruby amulet',
    category: 'Jewellery',
    ...alchFromHigh(1215, { lowAlch: 810, generalStore: 607, specialtyShop: { shop: "Grum's Gold Exchange", price: 607 } }),
    useRequirements: { skills: {}, quests: [], notes: 'High Alch (1,215 GP) or sell to Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 50 }, materials: ['1x Gold bar', '1x Ruby', 'Amulet mould'], station: 'Furnace', quests: [], notes: 'Grants 85 Crafting XP.' },
    guideSources: ['Crafting (40–99)', 'Money Making: Jewellery Alchs'],
    wikiUrl: 'https://runescape.wiki/w/Ruby_amulet'
  }),
  makeItem({
    id: 'diamond-ring',
    name: 'Diamond ring',
    category: 'Jewellery',
    ...alchFromHigh(2115, { lowAlch: 1410, generalStore: 1057, specialtyShop: { shop: "Grum's Gold Exchange", price: 1057 } }),
    useRequirements: { skills: {}, quests: [], notes: 'High Alch (2,115 GP) or sell to Grum\'s Gold Exchange.' },
    craftingRequirements: { skills: { Crafting: 43 }, materials: ['1x Gold bar', '1x Diamond', 'Ring mould'], station: 'Furnace', quests: [], notes: 'Grants 85 Crafting XP.' },
    guideSources: ['Crafting (40–70)'],
    wikiUrl: 'https://runescape.wiki/w/Diamond_ring'
  }),
  makeItem({
    id: 'diamond-necklace',
    name: 'Diamond necklace',
    category: 'Jewellery',
    ...alchFromHigh(2205, { lowAlch: 1470, generalStore: 1102, specialtyShop: { shop: "Grum's Gold Exchange", price: 1102 } }),
    useRequirements: { skills: {}, quests: [], notes: 'High Alch (2,205 GP) or sell to Grum\'s.' },
    craftingRequirements: { skills: { Crafting: 56 }, materials: ['1x Gold bar', '1x Diamond', 'Necklace mould'], station: 'Furnace', quests: [], notes: 'Grants 90 Crafting XP.' },
    guideSources: ['Crafting (40–70)', 'Money Making: Jewellery Alchs'],
    wikiUrl: 'https://runescape.wiki/w/Diamond_necklace'
  }),
  makeItem({
    id: 'diamond-amulet',
    name: 'Diamond amulet',
    category: 'Jewellery',
    ...alchFromHigh(2115, { lowAlch: 1410, generalStore: 1057, specialtyShop: { shop: "Grum's Gold Exchange", price: 1057 } }),
    useRequirements: { skills: { Magic: 57 }, quests: [], notes: 'Enchant at 57 Magic into Amulet of power, or High Alch (2,115 GP).' },
    craftingRequirements: { skills: { Crafting: 70 }, materials: ['1x Gold bar', '1x Diamond', 'Amulet mould'], station: 'Furnace', quests: [], notes: 'String with Ball of wool before enchanting.' },
    guideSources: ['Crafting (40–99)', 'Magic (55–99)', 'Money Making: Jewellery Alchs'],
    wikiUrl: 'https://runescape.wiki/w/Diamond_amulet'
  }),
  makeItem({
    id: 'amulet-of-power',
    name: 'Amulet of power',
    aliases: ['Amulets of Power'],
    category: 'Jewellery',
    ...alchFromHigh(2115, { lowAlch: 1410, generalStore: 1057 }),
    useRequirements: { skills: {}, quests: [], notes: 'BiS craftable F2P neck slot (+22 all styles bonus).' },
    craftingRequirements: { skills: { Crafting: 70, Magic: 57 }, materials: ['1x Strung diamond amulet', '1x Cosmic rune', '10x Earth rune'], station: 'Lvl-4 Enchant spell', quests: [], notes: 'Craft Diamond amulet at 70 Crafting, string, then cast Lvl-4 Enchant.' },
    guideSources: ['GIM Roles', 'Crafting (40–70)', 'Magic (55–99)'],
    wikiUrl: 'https://runescape.wiki/w/Amulet_of_power'
  }),
  makeItem({
    id: 'amulet-of-accuracy',
    name: 'Amulet of accuracy',
    category: 'Jewellery',
    ...alchFromHigh(3000, { lowAlch: 2000, generalStore: 1500 }),
    useRequirements: { skills: {}, quests: ['Imp Catcher'], notes: 'Early all-style neck slot (+4 all styles); reward from Imp Catcher.' },
    craftingRequirements: null,
    guideSources: ['Quests: Imp Catcher', 'Magic (1–17)', 'PvM: Imps'],
    wikiUrl: 'https://runescape.wiki/w/Amulet_of_accuracy'
  }),
  makeItem({
    id: 'gofannon-amulet',
    name: 'Gofannon amulet',
    category: 'Jewellery',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: ["What's Mine is Yours"], notes: 'Reward from What\'s Mine is Yours; grants bonus Smithing utility.' },
    craftingRequirements: null,
    guideSources: ['Smithing (1–29)'],
    wikiUrl: 'https://runescape.wiki/w/Gofannon_amulet'
  }),
  makeItem({
    id: 'silver-tiara',
    name: 'Tiara',
    aliases: ['Silver Tiara', 'Tiaras'],
    category: 'Jewellery',
    ...alchFromHigh(72, { lowAlch: 48, generalStore: 36 }),
    useRequirements: { skills: {}, quests: [], notes: 'Combine with a Talisman at a Runecrafting Altar to make a Runecrafting Tiara.' },
    craftingRequirements: { skills: { Crafting: 23 }, materials: ['1x Silver bar', 'Tiara mould'], station: 'Furnace', quests: [], notes: 'Grants 52.5 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Tiara'
  }),
  makeItem({
    id: 'unstrung-symbol',
    name: 'Unstrung symbol',
    aliases: ['Unstrung Symbols'],
    category: 'Jewellery',
    ...alchFromHigh(120, { lowAlch: 80, generalStore: 60 }),
    useRequirements: { skills: {}, quests: [], notes: 'Sell to General Stores or string with Ball of wool for Unblessed symbol.' },
    craftingRequirements: { skills: { Crafting: 16 }, materials: ['1x Silver bar', 'Holy mould'], station: 'Furnace', quests: [], notes: 'Grants 50 Crafting XP.' },
    guideSources: ['Crafting (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Unstrung_symbol'
  }),

  // =========================================================================
  // LOGS, PLANKS & FLETCHING / BOWS / ARROWS
  // =========================================================================
  makeItem({
    id: 'logs',
    name: 'Logs',
    aliases: ['Normal logs', 'Normal Trees'],
    category: 'Log',
    ...alchFromHigh(2, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: { Firemaking: 1, Fletching: 1 }, quests: [], notes: 'Used for Firemaking (1), Arrow shafts (1 Fletching), Shortbows (5), Shieldbows (10), and Planks.' },
    craftingRequirements: { skills: { Woodcutting: 1 }, materials: ['Tree'], station: 'Woodcutting node', quests: [], notes: 'Chopped around Burthorpe or Lumbridge.' },
    guideSources: ['Woodcutting (1–15)', 'Firemaking (1–15)', 'Fletching (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Logs'
  }),
  makeItem({
    id: 'oak-logs',
    name: 'Oak logs',
    category: 'Log',
    ...alchFromHigh(12, { lowAlch: 8, generalStore: 6 }),
    useRequirements: { skills: { Firemaking: 15, Fletching: 20 }, quests: [], notes: 'Used for Oak bonfires (15 FM), Oak shortbows (20), and Oak shieldbows (25).' },
    craftingRequirements: { skills: { Woodcutting: 15 }, materials: ['Oak tree'], station: 'Woodcutting node', quests: [], notes: 'Chopped outside Draynor Bank or Varrock West Bank.' },
    guideSources: ['Woodcutting (15–30)', 'Firemaking (15–30)', 'Fletching (20–35)'],
    wikiUrl: 'https://runescape.wiki/w/Oak_logs'
  }),
  makeItem({
    id: 'willow-logs',
    name: 'Willow logs',
    category: 'Log',
    ...alchFromHigh(24, { lowAlch: 16, generalStore: 12 }),
    useRequirements: { skills: { Firemaking: 30, Fletching: 35 }, quests: [], notes: 'Used for Willow bonfires (30 FM), Willow shortbows (35), and Willow shieldbows (40).' },
    craftingRequirements: { skills: { Woodcutting: 30 }, materials: ['Willow tree'], station: 'Woodcutting node', quests: [], notes: 'Chopped at Draynor Shore or Port Sarim South.' },
    guideSources: ['Woodcutting (30–60)', 'Firemaking (30–45)', 'Fletching (35–55)'],
    wikiUrl: 'https://runescape.wiki/w/Willow_logs'
  }),
  makeItem({
    id: 'maple-logs',
    name: 'Maple logs',
    category: 'Log',
    ...alchFromHigh(48, { lowAlch: 32, generalStore: 24 }),
    useRequirements: { skills: { Firemaking: 45, Fletching: 50 }, quests: [], notes: 'Used for Maple bonfires (45 FM), Maple shortbows (50), and Maple shieldbows (55).' },
    craftingRequirements: { skills: { Woodcutting: 45, Dungeoneering: 30 }, materials: ['Maple tree'], station: 'Daemonheim 30 DG Resource Dungeon', quests: [], notes: 'Fastest F2P Woodcutting & Firemaking resource.' },
    guideSources: ['Woodcutting (45–99)', 'Firemaking (45–99)', 'Fletching (55–70)'],
    wikiUrl: 'https://runescape.wiki/w/Maple_logs'
  }),
  makeItem({
    id: 'yew-logs',
    name: 'Yew logs',
    aliases: ['Noted Yew Logs'],
    category: 'Log',
    ...alchFromHigh(96, { lowAlch: 64, generalStore: 48 }),
    useRequirements: { skills: { Firemaking: 60, Fletching: 65 }, quests: [], notes: 'Used for Yew bonfires (60 FM), Yew shortbows (65), and Yew shieldbows (70).' },
    craftingRequirements: { skills: { Woodcutting: 60 }, materials: ['Yew tree'], station: 'Woodcutting node', quests: [], notes: 'Chopped south of Edgeville Bank or dropped by KBD & Giant Mole.' },
    guideSources: ['Woodcutting (60–99)', 'Firemaking (45–99)', 'Fletching (70–99)', 'PvM: KBD, Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Yew_logs'
  }),
  makeItem({
    id: 'plank',
    name: 'Plank',
    aliases: ['Planks', '3 Planks'],
    category: 'Misc',
    ...alchFromHigh(1, { lowAlch: 1, generalStore: 0 }),
    useRequirements: { skills: { Construction: 1 }, quests: ['Dragon Slayer'], notes: '3x Planks used in Dragon Slayer; 2–4x used for Construction 1–5 (Crude chairs).' },
    craftingRequirements: { skills: {}, materials: ['1x Logs', '100 GP'], station: 'Sawmill (Taverley / Varrock NE)', quests: [], notes: 'Convert Normal Logs to Planks at Sawmill.' },
    guideSources: ['Woodcutting (1–15)', 'Quests: Dragon Slayer', 'Members Trial Skills'],
    wikiUrl: 'https://runescape.wiki/w/Plank'
  }),
  makeItem({
    id: 'flax',
    name: 'Flax',
    category: 'Misc',
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1 }),
    useRequirements: { skills: { Crafting: 10 }, quests: [], notes: 'Spun on a Spinning wheel at 10 Crafting into Bowstrings.' },
    craftingRequirements: { skills: {}, materials: ['Flax plant'], station: 'Burthorpe/Taverley or Lumbridge field', quests: [], notes: 'Picked free from flax fields.' },
    guideSources: ['Fletching (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Flax'
  }),
  makeItem({
    id: 'bowstring',
    name: 'Bowstring',
    aliases: ['Bowstrings'],
    category: 'Misc',
    ...alchFromHigh(2, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: { Fletching: 5 }, quests: [], notes: 'Attached to unstrung bows to complete strung Shortbows & Shieldbows (doubles value).' },
    craftingRequirements: { skills: { Crafting: 10 }, materials: ['1x Flax'], station: 'Spinning wheel', quests: [], notes: 'Spun at Taverley or Lumbridge Castle 2nd floor.' },
    guideSources: ['Fletching (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Bowstring'
  }),
  makeItem({
    id: 'feather',
    name: 'Feather',
    aliases: ['Feathers', 'Feather pack', 'Feather Packs'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: { Fletching: 1, Fishing: 20 }, quests: [], notes: 'Attached to Arrow shafts for Headless arrows and used as Fly Fishing bait.' },
    craftingRequirements: null,
    guideSources: ['Fletching (1–99)', 'Fishing (20–99)', 'Daily Checklist'],
    wikiUrl: 'https://runescape.wiki/w/Feather'
  }),
  makeItem({
    id: 'arrow-shaft',
    name: 'Arrow shaft',
    aliases: ['Arrow Shafts'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(4, { lowAlch: 2, generalStore: 2 }),
    useRequirements: { skills: { Fletching: 1 }, quests: [], notes: 'Combine with Feathers to create Headless arrows.' },
    craftingRequirements: { skills: { Fletching: 1 }, materials: ['1x Logs', 'Knife'], station: 'Inventory Fletching', quests: [], notes: '15 Arrow shafts per Normal log.' },
    guideSources: ['Fletching (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Arrow_shaft'
  }),
  makeItem({
    id: 'headless-arrow',
    name: 'Headless arrow',
    aliases: ['Headless Arrows'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: { Fletching: 1 }, quests: [], notes: 'Combine with Bronze–Rune arrowheads to finish arrows.' },
    craftingRequirements: { skills: { Fletching: 1 }, materials: ['1x Arrow shaft', '1x Feather'], station: 'Inventory Fletching', quests: [], notes: 'Made in batches of 15.' },
    guideSources: ['Fletching (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Headless_arrow'
  }),
  makeItem({
    id: 'shortbow',
    name: 'Shortbow',
    aliases: ['Shieldbow'],
    category: 'Weapon',
    ...alchFromHigh(30, { lowAlch: 20, generalStore: 15, specialtyShop: { shop: "Dargaud's Bow and Arrows / Brian's Archery", price: 15 } }),
    useRequirements: { skills: { Ranged: 1 }, quests: [], notes: 'Tier 1 Ranged shortbow (Shieldbow alchs for 48 GP).' },
    craftingRequirements: { skills: { Fletching: 5 }, materials: ['1x Logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Shortbow at 5 Fletching; Shieldbow at 10 Fletching.' },
    guideSources: ['Fletching (1–20)', 'Ranged (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Shortbow'
  }),
  makeItem({
    id: 'oak-shortbow',
    name: 'Oak shortbow',
    category: 'Weapon',
    ...alchFromHigh(60, { lowAlch: 40, generalStore: 30, specialtyShop: { shop: "Brian's Archery Supplies", price: 30 } }),
    useRequirements: { skills: { Ranged: 20 }, quests: [], notes: 'Tier 20 Ranged weapon.' },
    craftingRequirements: { skills: { Fletching: 20 }, materials: ['1x Oak logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Cut Oak logs + string.' },
    guideSources: ['Fletching (20–35)', 'Ranged (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Oak_shortbow'
  }),
  makeItem({
    id: 'oak-shieldbow',
    name: 'Oak shieldbow',
    category: 'Weapon',
    ...alchFromHigh(96, { lowAlch: 64, generalStore: 48, specialtyShop: { shop: "Brian's Archery Supplies", price: 48 } }),
    useRequirements: { skills: { Ranged: 20 }, quests: [], notes: 'Tier 20 Ranged shieldbow (longer range, defensive).' },
    craftingRequirements: { skills: { Fletching: 25 }, materials: ['1x Oak logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Best 25–35 Fletching bow.' },
    guideSources: ['Fletching (20–35)', 'Woodcutting (15–30)'],
    wikiUrl: 'https://runescape.wiki/w/Oak_shieldbow'
  }),
  makeItem({
    id: 'willow-shortbow',
    name: 'Willow shortbow',
    category: 'Weapon',
    ...alchFromHigh(120, { lowAlch: 80, generalStore: 60, specialtyShop: { shop: "Brian's Archery Supplies", price: 60 } }),
    useRequirements: { skills: { Ranged: 30 }, quests: [], notes: 'Tier 30 Ranged shortbow.' },
    craftingRequirements: { skills: { Fletching: 35 }, materials: ['1x Willow logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Cut Willow logs + string.' },
    guideSources: ['Fletching (35–55)', 'Ranged (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Willow_shortbow'
  }),
  makeItem({
    id: 'willow-shieldbow',
    name: 'Willow shieldbow',
    category: 'Weapon',
    ...alchFromHigh(192, { lowAlch: 128, generalStore: 96, specialtyShop: { shop: "Brian's Archery Supplies", price: 96 } }),
    useRequirements: { skills: { Ranged: 30 }, quests: [], notes: 'Tier 30 Ranged shieldbow.' },
    craftingRequirements: { skills: { Fletching: 40 }, materials: ['1x Willow logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Best 40–55 Fletching bow.' },
    guideSources: ['Fletching (35–55)', 'Woodcutting (30–60)'],
    wikiUrl: 'https://runescape.wiki/w/Willow_shieldbow'
  }),
  makeItem({
    id: 'maple-shortbow',
    name: 'Maple shortbow',
    category: 'Weapon',
    ...alchFromHigh(240, { lowAlch: 160, generalStore: 120, specialtyShop: { shop: "Brian's Archery Supplies", price: 120 } }),
    useRequirements: { skills: { Ranged: 40 }, quests: [], notes: 'Tier 40 Ranged shortbow.' },
    craftingRequirements: { skills: { Fletching: 50 }, materials: ['1x Maple logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Cut Maple logs + string.' },
    guideSources: ['Fletching (55–70)', 'Ranged (40–60)'],
    wikiUrl: 'https://runescape.wiki/w/Maple_shortbow'
  }),
  makeItem({
    id: 'maple-shieldbow',
    name: 'Maple shieldbow',
    category: 'Weapon',
    ...alchFromHigh(384, { lowAlch: 256, generalStore: 192, specialtyShop: { shop: "Brian's Archery Supplies", price: 192 } }),
    useRequirements: { skills: { Ranged: 40 }, quests: [], notes: 'Tier 40 Ranged shieldbow; solid F2P High Alch bow (384 GP).' },
    craftingRequirements: { skills: { Fletching: 55 }, materials: ['1x Maple logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Pairs with Daemonheim 30 DG Maple Resource Dungeon.' },
    guideSources: ['Fletching (55–70)', 'Woodcutting (45–99)'],
    wikiUrl: 'https://runescape.wiki/w/Maple_shieldbow'
  }),
  makeItem({
    id: 'yew-shieldbow',
    name: 'Yew shieldbow',
    aliases: ['Yew Shieldbows'],
    category: 'Weapon',
    ...alchFromHigh(768, { lowAlch: 512, generalStore: 384, specialtyShop: { shop: "Brian's Archery Supplies", price: 384 } }),
    useRequirements: { skills: { Ranged: 45 }, quests: [], notes: 'Profitable High Alch bow (768 GP each).' },
    craftingRequirements: { skills: { Fletching: 70 }, materials: ['1x Yew logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Yew shortbow requires 65 Fletching (480 GP HA).' },
    guideSources: ['Fletching (70–99)', 'Woodcutting (60–99)', 'PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Yew_shieldbow'
  }),
  makeItem({
    id: 'magic-shortbow',
    name: 'Magic shortbow',
    aliases: ['Magic Shortbows', 'Magic Shortbow (Tier 50)', 'Magic Shortbow (Tier 50 Ranged)'],
    category: 'Weapon',
    ...alchFromHigh(960, { lowAlch: 640, generalStore: 480 }),
    useRequirements: { skills: { Ranged: 50 }, quests: [], notes: 'Best craftable/droppable Tier 50 F2P shortbow; Greater Demons drop skips 80 Fletching!' },
    craftingRequirements: { skills: { Fletching: 80 }, materials: ['1x Magic logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Note: Magic trees are Members-only, so F2P Ironmen obtain Magic shortbows from Greater Demons.' },
    guideSources: ['PvM Highlights', 'PvM: Greater Demons', 'Ranged (40–60)', 'Fletching (70–99)'],
    wikiUrl: 'https://runescape.wiki/w/Magic_shortbow'
  }),
  makeItem({
    id: 'magic-shieldbow',
    name: 'Magic shieldbow',
    category: 'Weapon',
    ...alchFromHigh(1536, { lowAlch: 1024, generalStore: 768 }),
    useRequirements: { skills: { Ranged: 50 }, quests: [], notes: 'Tier 50 Ranged shieldbow; 1,536 GP High Alch.' },
    craftingRequirements: { skills: { Fletching: 85 }, materials: ['1x Magic logs', '1x Bowstring'], station: 'Knife', quests: [], notes: 'Magic logs are Members-only.' },
    guideSources: ['Fletching (70–99)'],
    wikiUrl: 'https://runescape.wiki/w/Magic_shieldbow'
  }),
  makeItem({
    id: 'kayles-chargebow',
    name: "Kayle's chargebow",
    category: 'Weapon',
    tradeable: false,
    ...alchFromHigh(17, { lowAlch: 10, generalStore: null }),
    useRequirements: { skills: { Ranged: 1 }, quests: ['The Blood Pact'], notes: 'Fires infinite magical bolts requiring 0 arrows until Level 20 Ranged.' },
    craftingRequirements: null,
    guideSources: ['Ranged (1–20)'],
    wikiUrl: "https://runescape.wiki/w/Kayle's_chargebow"
  }),
  makeItem({
    id: 'gravite-chargebow',
    name: 'Gravite chargebow',
    aliases: ['Gravite shortbow'],
    category: 'Weapon',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Ranged: 55, Dungeoneering: 55 }, quests: [], notes: 'Tier 55 BiS F2P Ranged bow (40,000 DG tokens; 50% refund on destroy). Functions as chargebow (0 ammo needed).' },
    craftingRequirements: null,
    guideSources: ['Ranged (60–99)', 'Dungeoneering (55–99)'],
    wikiUrl: 'https://runescape.wiki/w/Gravite_chargebow'
  }),
  makeItem({
    id: 'bronze-arrow',
    name: 'Bronze arrow',
    aliases: ['Bronze Arrows'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(4, { lowAlch: 2, generalStore: 2 }),
    useRequirements: { skills: { Ranged: 1 }, quests: [], notes: 'Tier 1 Ranged arrows; Revolution abilities consume 0 arrows.' },
    craftingRequirements: { skills: { Fletching: 1 }, materials: ['1x Headless arrow', '1x Bronze arrowhead'], station: 'Inventory Fletching', quests: [], notes: 'Made in sets of 15.' },
    guideSources: ['Ranged (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Bronze_arrow'
  }),
  makeItem({
    id: 'iron-arrow',
    name: 'Iron arrow',
    aliases: ['Iron Arrows'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(12, { lowAlch: 8, generalStore: 6 }),
    useRequirements: { skills: { Ranged: 10 }, quests: [], notes: 'Tier 10 arrows; dropped abundantly by Minotaurs.' },
    craftingRequirements: { skills: { Fletching: 15 }, materials: ['1x Headless arrow', '1x Iron arrowhead'], station: 'Inventory Fletching', quests: [], notes: 'Made in sets of 15.' },
    guideSources: ['PvM: Minotaurs', 'Fletching (20–35)'],
    wikiUrl: 'https://runescape.wiki/w/Iron_arrow'
  }),
  makeItem({
    id: 'steel-arrow',
    name: 'Steel arrow',
    aliases: ['Steel Arrows'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(27, { lowAlch: 18, generalStore: 13 }),
    useRequirements: { skills: { Ranged: 20 }, quests: [], notes: 'Tier 20 Ranged arrows.' },
    craftingRequirements: { skills: { Fletching: 30 }, materials: ['1x Headless arrow', '1x Steel arrowhead'], station: 'Inventory Fletching', quests: [], notes: 'Made in sets of 15.' },
    guideSources: ['Fletching (20–35)'],
    wikiUrl: 'https://runescape.wiki/w/Steel_arrow'
  }),
  makeItem({
    id: 'mithril-arrow',
    name: 'Mithril arrow',
    aliases: ['Mithril Arrows'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(45, { lowAlch: 30, generalStore: 22 }),
    useRequirements: { skills: { Ranged: 30 }, quests: [], notes: 'Tier 30 Ranged arrows.' },
    craftingRequirements: { skills: { Fletching: 45 }, materials: ['1x Headless arrow', '1x Mithril arrowhead'], station: 'Inventory Fletching', quests: [], notes: 'Made in sets of 15.' },
    guideSources: ['Fletching (35–55)'],
    wikiUrl: 'https://runescape.wiki/w/Mithril_arrow'
  }),
  makeItem({
    id: 'adamant-arrow',
    name: 'Adamant arrow',
    aliases: ['Adamant Arrows'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(103, { lowAlch: 68, generalStore: 51 }),
    useRequirements: { skills: { Ranged: 40 }, quests: [], notes: 'Tier 40 Ranged arrows; dropped by Ankous.' },
    craftingRequirements: { skills: { Fletching: 60 }, materials: ['1x Headless arrow', '1x Adamant arrowhead'], station: 'Inventory Fletching', quests: [], notes: 'Made in sets of 15.' },
    guideSources: ['Fletching (55–70)', 'PvM: Ankous'],
    wikiUrl: 'https://runescape.wiki/w/Adamant_arrow'
  }),
  makeItem({
    id: 'rune-arrow',
    name: 'Rune arrow',
    aliases: ['Rune Arrows'],
    category: 'Ammunition',
    stackable: true,
    ...alchFromHigh(306, { lowAlch: 204, generalStore: 153 }),
    useRequirements: { skills: { Ranged: 50 }, quests: [], notes: 'BiS craftable F2P Ranged ammunition.' },
    craftingRequirements: { skills: { Fletching: 75 }, materials: ['1x Headless arrow', '1x Rune arrowhead'], station: 'Inventory Fletching', quests: [], notes: 'Made in sets of 15.' },
    guideSources: ['Fletching (70–99)', 'Ranged (60–99)'],
    wikiUrl: 'https://runescape.wiki/w/Rune_arrow'
  }),

  // =========================================================================
  // MAGIC GEAR, STAVES, RUNES & TALISMANS
  // =========================================================================
  makeItem({
    id: 'staff-of-air',
    name: 'Staff of air',
    aliases: ['Air Staff'],
    category: 'Weapon',
    ...alchFromHigh(900, { lowAlch: 600, generalStore: 450, specialtyShop: { shop: "Zaff's Superior Staffs", price: 450 } }),
    useRequirements: { skills: { Magic: 1 }, quests: [], notes: 'Provides infinite Air runes; bought at Zaff in Varrock for 1,500 GP.' },
    craftingRequirements: null,
    guideSources: ['Magic (1–40)', 'Defence (1–33)'],
    wikiUrl: 'https://runescape.wiki/w/Staff_of_air'
  }),
  makeItem({
    id: 'staff-of-fire',
    name: 'Staff of fire',
    aliases: ['Fire Staff'],
    category: 'Weapon',
    ...alchFromHigh(900, { lowAlch: 600, generalStore: 450, specialtyShop: { shop: "Zaff's Superior Staffs", price: 450 } }),
    useRequirements: { skills: { Magic: 1 }, quests: [], notes: 'Provides infinite Fire runes for High Level Alchemy and Fire spells; 1,500 GP at Zaff.' },
    craftingRequirements: null,
    guideSources: ['Magic (17–99)', 'Money Making: High Alch Smithing, Cockroach Soldiers'],
    wikiUrl: 'https://runescape.wiki/w/Staff_of_fire'
  }),
  makeItem({
    id: 'gravite-staff',
    name: 'Gravite staff',
    category: 'Weapon',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Magic: 55, Dungeoneering: 55 }, quests: [], notes: 'BiS F2P Magic weapon (Tier 55); 40,000 DG tokens (50% refund on destroy).' },
    craftingRequirements: null,
    guideSources: ['Magic (55–99)', 'Dungeoneering (55–99)'],
    wikiUrl: 'https://runescape.wiki/w/Gravite_staff'
  }),
  makeItem({
    id: 'gravite-2h-sword',
    name: 'Gravite 2h sword',
    aliases: ['Gravite 2h'],
    category: 'Weapon',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Attack: 55, Dungeoneering: 55 }, quests: [], notes: 'BiS F2P 2H Melee weapon (Tier 55); 40,000 DG tokens (50% refund on destroy).' },
    craftingRequirements: null,
    guideSources: ['Attack (60–99)', 'Strength (55–99)', 'Dungeoneering (55–99)'],
    wikiUrl: 'https://runescape.wiki/w/Gravite_2h_sword'
  }),
  makeItem({
    id: 'vannakas-sword',
    name: "Vannaka's sword",
    category: 'Weapon',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Attack: 30 }, quests: ['Beneath Cursed Tides'], notes: 'Tier 30 reward / override unlocked from Beneath Cursed Tides.' },
    craftingRequirements: null,
    guideSources: ['Quests: Beneath Cursed Tides'],
    wikiUrl: "https://runescape.wiki/w/Vannaka's_sword"
  }),
  makeItem({
    id: 'wizard-hat',
    name: 'Wizard hat',
    aliases: ['Wizard Hat (Black & Blue)'],
    category: 'Armour',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0, specialtyShop: { shop: "Betty's Magic Emporium", price: 0 } }),
    useRequirements: { skills: { Defence: 1 }, quests: [], notes: 'Tier 1 Magic tank headwear; dropped by Dark Wizards and Wizards\' Tower Wizards.' },
    craftingRequirements: null,
    guideSources: ['PvM: Dark Wizards'],
    wikiUrl: 'https://runescape.wiki/w/Wizard_hat'
  }),
  makeItem({
    id: 'wizard-robe-top',
    name: 'Wizard robe top',
    aliases: ['Wizard Hat / Robe Top (Black & Blue)'],
    category: 'Armour',
    ...alchFromHigh(6, { lowAlch: 4, generalStore: 3, specialtyShop: { shop: "Betty's Magic Emporium", price: 3 } }),
    useRequirements: { skills: { Defence: 1 }, quests: [], notes: 'Tier 1 Magic tank chestpiece.' },
    craftingRequirements: { skills: { Crafting: 5 }, materials: ['2x Cloth', 'Thread', 'Needle'], station: 'Inventory Crafting', quests: [], notes: 'Grants 10 Crafting XP.' },
    guideSources: ['PvM: Dark Wizards'],
    wikiUrl: 'https://runescape.wiki/w/Wizard_robe_top'
  }),
  makeItem({
    id: 'spider-silk',
    name: 'Spider silk',
    category: 'Misc',
    ...alchFromHigh(180, { lowAlch: 120, generalStore: 90 }),
    useRequirements: { skills: { Crafting: 20 }, quests: [], notes: 'Used to craft Tier 20 Spider silk Magic robes and Necromancy Tier 20 Deathwarden gear.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Corpse Spiders', 'Attack (1–20)', 'Necromancy'],
    wikiUrl: 'https://runescape.wiki/w/Spider_silk'
  }),
  makeItem({
    id: 'spider-silk-robe-top',
    name: 'Spider silk robe top',
    aliases: ['Spider Silk Robes'],
    category: 'Armour',
    ...alchFromHigh(1200, { lowAlch: 800, generalStore: 600 }),
    useRequirements: { skills: { Defence: 20 }, quests: [], notes: 'Tier 20 Magic tank chestpiece (72 Armour).' },
    craftingRequirements: { skills: { Crafting: 24 }, materials: ['3x Spider silk', 'Thread', 'Needle'], station: 'Inventory Crafting', quests: [], notes: 'Grants 37.5 Crafting XP.' },
    guideSources: ['PvM: Corpse Spiders', 'Magic (17–40)', 'Defence (33–50)'],
    wikiUrl: 'https://runescape.wiki/w/Spider_silk_robe_top'
  }),
  makeItem({
    id: 'batwing-torso',
    name: 'Batwing torso',
    aliases: ['Batwing'],
    category: 'Armour',
    ...alchFromHigh(540, { lowAlch: 360, generalStore: 270 }),
    useRequirements: { skills: { Defence: 30 }, quests: [], notes: 'Tier 30 Magic tank chestpiece (104 Armour).' },
    craftingRequirements: { skills: { Crafting: 35 }, materials: ['3x Batwing', 'Thread', 'Needle'], station: 'Inventory Crafting', quests: [], notes: 'Grants 36 Crafting XP.' },
    guideSources: ['Magic (17–55)'],
    wikiUrl: 'https://runescape.wiki/w/Batwing_torso'
  }),
  makeItem({
    id: 'mystic-robe-top',
    name: 'Mystic robe top',
    aliases: ['Mystic Robe Top', 'Mystic'],
    category: 'Armour',
    ...alchFromHigh(9000, { lowAlch: 6000, generalStore: 4500 }),
    useRequirements: { skills: { Defence: 50 }, quests: [], notes: 'Tier 50 Magic tank body; bought at Champions\' Guild (32 QP) in F2P.' },
    craftingRequirements: null,
    guideSources: ['Magic (40–99)', 'Defence (1–70)', 'Quests: Dragon Slayer'],
    wikiUrl: 'https://runescape.wiki/w/Mystic_robe_top'
  }),
  makeItem({
    id: 'air-rune',
    name: 'Air rune',
    aliases: ['Air Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1, specialtyShop: { shop: "Aubury's Rune Shop", price: 1 } }),
    useRequirements: { skills: { Runecrafting: 1 }, quests: [], notes: 'Used for Air spells, Prayer Urns, and daily Vis Wax.' },
    craftingRequirements: { skills: { Runecrafting: 1 }, materials: ['1x Rune/Pure essence'], station: 'Air Altar', quests: ['Rune Mysteries'], notes: 'Multiplies up to 7x at 66 Runecrafting.' },
    guideSources: ['Runecrafting (1–99)', 'Magic (1–17)', 'Daily Checklist'],
    wikiUrl: 'https://runescape.wiki/w/Air_rune'
  }),
  makeItem({
    id: 'mind-rune',
    name: 'Mind rune',
    aliases: ['Mind Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(10, { lowAlch: 6, generalStore: 5, specialtyShop: { shop: "Aubury's Rune Shop", price: 5 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Used for Strike spells and cheap Vis Wax inputs.' },
    craftingRequirements: { skills: { Runecrafting: 2 }, materials: ['1x Rune/Pure essence'], station: 'Mind Altar', quests: ['Rune Mysteries'], notes: 'Bought cheaply at Aubury/Carwen/Zaff.' },
    guideSources: ['Runecrafting (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Mind_rune'
  }),
  makeItem({
    id: 'water-rune',
    name: 'Water rune',
    aliases: ['Water Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1, specialtyShop: { shop: "Aubury's Rune Shop", price: 1 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Used for Water spells, Fishing Urns, and daily Vis Wax.' },
    craftingRequirements: { skills: { Runecrafting: 5 }, materials: ['1x Rune/Pure essence'], station: 'Water Altar', quests: ['Rune Mysteries'], notes: 'Multiplies 4x at 57 Runecrafting.' },
    guideSources: ['Runecrafting (1–99)', 'Fishing', 'PvM: Dark Wizards'],
    wikiUrl: 'https://runescape.wiki/w/Water_rune'
  }),
  makeItem({
    id: 'earth-rune',
    name: 'Earth rune',
    aliases: ['Earth Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1, specialtyShop: { shop: "Aubury's Rune Shop", price: 1 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Used for Mining Urns, Woodcutting Urns, Enchanting, and Vis Wax.' },
    craftingRequirements: { skills: { Runecrafting: 9 }, materials: ['1x Rune/Pure essence'], station: 'Earth Altar', quests: ['Rune Mysteries'], notes: '2x per essence at 26 Runecrafting.' },
    guideSources: ['Runecrafting (1–50)', 'Mining', 'Woodcutting', 'PvM: Dark Wizards'],
    wikiUrl: 'https://runescape.wiki/w/Earth_rune'
  }),
  makeItem({
    id: 'fire-rune',
    name: 'Fire rune',
    aliases: ['Fire Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1, specialtyShop: { shop: "Aubury's Rune Shop", price: 1 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Used for Fire spells, Cooking/Smelting Urns, Alchemy, and Vis Wax.' },
    craftingRequirements: { skills: { Runecrafting: 14 }, materials: ['1x Rune/Pure essence'], station: 'Fire Altar', quests: ['Rune Mysteries'], notes: '2x per essence at 35 Runecrafting; dropped by Flesh Crawlers & Lesser/Greater Demons.' },
    guideSources: ['Runecrafting (1–50)', 'Cooking', 'PvM: Flesh Crawlers, Lesser Demons, Greater Demons'],
    wikiUrl: 'https://runescape.wiki/w/Fire_rune'
  }),
  makeItem({
    id: 'body-rune',
    name: 'Body rune',
    aliases: ['Body Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(9, { lowAlch: 6, generalStore: 4, specialtyShop: { shop: "Aubury's Rune Shop", price: 4 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Used for Confuse/Weaken/Curse/Vulnerability splashing and daily Vis Wax.' },
    craftingRequirements: { skills: { Runecrafting: 20 }, materials: ['1x Rune/Pure essence'], station: 'Body Altar', quests: ['Rune Mysteries'], notes: 'Dropped by Dark Wizards, Flesh Crawlers, and Hobgoblins.' },
    guideSources: ['Magic (17–99)', 'PvM: Dark Wizards, Flesh Crawlers, Hobgoblins'],
    wikiUrl: 'https://runescape.wiki/w/Body_rune'
  }),
  makeItem({
    id: 'chaos-rune',
    name: 'Chaos rune',
    aliases: ['Chaos Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(84, { lowAlch: 56, generalStore: 42 }),
    useRequirements: { skills: { Magic: 17 }, quests: [], notes: 'Used for Bolt spells and Vis Wax.' },
    craftingRequirements: null,
    guideSources: ['Magic (17–40)', 'PvM: Dark Wizards, Hill Giants, Lesser/Greater Demons'],
    wikiUrl: 'https://runescape.wiki/w/Chaos_rune'
  }),
  makeItem({
    id: 'cosmic-rune',
    name: 'Cosmic rune',
    aliases: ['Cosmic Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(30, { lowAlch: 20, generalStore: 15 }),
    useRequirements: { skills: { Magic: 7 }, quests: [], notes: 'Used for Jewellery Enchanting (Lvl-4 Enchant for Amulet of Power); 152x daily from Shooting Stars.' },
    craftingRequirements: null,
    guideSources: ['Money Making: Shooting Stars', 'PvM: Hill/Moss/Ice Giants, Catablepons, Ice Warriors, Hobgoblins'],
    wikiUrl: 'https://runescape.wiki/w/Cosmic_rune'
  }),
  makeItem({
    id: 'nature-rune',
    name: 'Nature rune',
    aliases: ['Nature Runes', 'Nats'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(74, { lowAlch: 49, generalStore: 37 }),
    useRequirements: { skills: { Magic: 21 }, quests: [], notes: 'Consumed by Low Level Alchemy (21) and High Level Alchemy (55).' },
    craftingRequirements: null,
    guideSources: ['Magic (55–99)', 'PvM: Dark Wizards, Hill/Moss/Ice Giants, Cockroach Soldiers, Ice Warriors, Hobgoblins'],
    wikiUrl: 'https://runescape.wiki/w/Nature_rune'
  }),
  makeItem({
    id: 'law-rune',
    name: 'Law rune',
    aliases: ['Law Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(75, { lowAlch: 50, generalStore: 37 }),
    useRequirements: { skills: { Magic: 25 }, quests: [], notes: 'Used for Teleports (Varrock/Falador/Lumbridge) and Dungeoneering Gatestones.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Cockroaches, Ankous, Giants, KBD', 'Dungeoneering'],
    wikiUrl: 'https://runescape.wiki/w/Law_rune'
  }),
  makeItem({
    id: 'death-rune',
    name: 'Death rune',
    aliases: ['Death Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(62, { lowAlch: 41, generalStore: 31 }),
    useRequirements: { skills: { Magic: 41 }, quests: [], notes: 'Used for Air/Fire Blast spells (41–59 Magic).' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'Magic (40–99)', 'PvM: Cockroaches, Ankous, Greater Demons, KBD'],
    wikiUrl: 'https://runescape.wiki/w/Death_rune'
  }),
  makeItem({
    id: 'blood-rune',
    name: 'Blood rune',
    aliases: ['Blood Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(110, { lowAlch: 73, generalStore: 55 }),
    useRequirements: { skills: { Magic: 62 }, quests: [], notes: 'High-value F2P rune drop from Ankous & KBD; sells well at Aubury\'s Rune Shop.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Ankous, KBD'],
    wikiUrl: 'https://runescape.wiki/w/Blood_rune'
  }),
  makeItem({
    id: 'astral-rune',
    name: 'Astral rune',
    aliases: ['Astral Runes'],
    category: 'Rune',
    stackable: true,
    ...alchFromHigh(132, { lowAlch: 88, generalStore: 66 }),
    useRequirements: { skills: {}, quests: [], notes: 'Lunar spellbook rune (Members); 52x rewarded daily from Shooting Star D&D.' },
    craftingRequirements: null,
    guideSources: ['Money Making: Shooting Stars'],
    wikiUrl: 'https://runescape.wiki/w/Astral_rune'
  }),
  makeItem({
    id: 'air-talisman',
    name: 'Air talisman',
    aliases: ['Water talisman', 'Earth talisman', 'Fire talisman', 'Mind talisman', 'Chaos talisman', 'Talismans'],
    category: 'Runecrafting',
    ...alchFromHigh(2, { lowAlch: 2, generalStore: 1 }),
    useRequirements: { skills: {}, quests: [], notes: 'Feed directly to Wicked Hood to unlock daily Altar teleports & essence.' },
    craftingRequirements: null,
    guideSources: ['PvM: Imps, Dark Wizards', 'Runecrafting (1–50)'],
    wikiUrl: 'https://runescape.wiki/w/Air_talisman'
  }),
  makeItem({
    id: 'earth-tiara',
    name: 'Earth tiara',
    aliases: ['Fire tiara'],
    category: 'Runecrafting',
    ...alchFromHigh(36, { lowAlch: 24, generalStore: 18 }),
    useRequirements: { skills: { Runecrafting: 9 }, quests: [], notes: 'Allows direct entry into Earth Altar (25 RC / Fire tiara at Fire Altar).' },
    craftingRequirements: { skills: { Runecrafting: 1 }, materials: ['1x Silver tiara', '1x Earth talisman'], station: 'Earth Altar', quests: ['Rune Mysteries'], notes: 'Crafted by using Talisman + Tiara on the altar.' },
    guideSources: ['Runecrafting (33–50)'],
    wikiUrl: 'https://runescape.wiki/w/Earth_tiara'
  }),
  makeItem({
    id: 'wicked-hood',
    name: 'Wicked hood',
    category: 'Runecrafting',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: 'Claimed free from Tam McGrubor NW of Burthorpe Lodestone; grants 100 daily free essence & altar teleports.' },
    craftingRequirements: null,
    guideSources: ['Runecrafting (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Wicked_hood'
  }),
  makeItem({
    id: 'vis-wax',
    name: 'Vis wax',
    category: 'Runecrafting',
    stackable: true,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Runecrafting: 50 }, quests: [], notes: 'Powers instant-cast Lodestone teleports, Daily Challenge extensions, and Auras.' },
    craftingRequirements: { skills: { Runecrafting: 50 }, materials: ['Cheap elemental/Mind/Body runes'], station: 'Rune Goldberg Machine (Runecrafting Guild)', quests: [], notes: 'Daily once per day at Wizards\' Tower 1st floor portal.' },
    guideSources: ['GIM Roles', 'Runecrafting (50–99)', 'Daily Checklist'],
    wikiUrl: 'https://runescape.wiki/w/Vis_wax'
  }),

  // =========================================================================
  // HIDES & RANGED ARMOUR
  // =========================================================================
  makeItem({
    id: 'cowhide',
    name: 'Cowhide',
    aliases: ['Cowhides'],
    category: 'Hide / Leather',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: [], notes: 'Tan at Ellis in Al Kharid (1 GP each) into Soft or Hard leather.' },
    craftingRequirements: null,
    guideSources: ['PvM: Cows', 'Crafting (1–20)', 'Magic (1–17)'],
    wikiUrl: 'https://runescape.wiki/w/Cowhide'
  }),
  makeItem({
    id: 'leather-body',
    name: 'Leather body',
    aliases: ['Leather Gloves', 'Leather Boots', 'Leather Cowl', 'Leather Chaps'],
    category: 'Armour',
    ...alchFromHigh(24, { lowAlch: 16, generalStore: 12 }),
    useRequirements: { skills: { Defence: 1 }, quests: [], notes: 'Early Ranged armour; sell excess to General Stores.' },
    craftingRequirements: { skills: { Crafting: 14 }, materials: ['1x Leather', 'Thread', 'Needle'], station: 'Inventory Crafting', quests: [], notes: 'Leather gloves (1), boots (7), cowl (9), body (14), chaps (18).' },
    guideSources: ['Crafting (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Leather_body'
  }),
  makeItem({
    id: 'carapace',
    name: 'Carapace',
    category: 'Hide / Leather',
    ...alchFromHigh(50, { lowAlch: 30, generalStore: 25 }),
    useRequirements: { skills: { Crafting: 33 }, quests: [], notes: 'Dropped by Cockroach Soldiers; crafted into Tier 30 Carapace Ranged armour.' },
    craftingRequirements: null,
    guideSources: ['PvM: Cockroach Soldiers', 'Money Making: Cockroach Soldiers', 'Crafting (40–70)'],
    wikiUrl: 'https://runescape.wiki/w/Carapace'
  }),
  makeItem({
    id: 'carapace-torso',
    name: 'Carapace torso',
    aliases: ['Carapace Armour', 'Carapace Legs', 'Carapace Helm'],
    category: 'Armour',
    ...alchFromHigh(540, { lowAlch: 360, generalStore: 270 }),
    useRequirements: { skills: { Defence: 30 }, quests: [], notes: 'Tier 30 Ranged tank body (Legs 34 Crafting / 450 HA; Helm 33 Crafting / 360 HA).' },
    craftingRequirements: { skills: { Crafting: 35 }, materials: ['3x Carapace', 'Thread', 'Needle'], station: 'Inventory Crafting', quests: [], notes: 'Grants 36 Crafting XP.' },
    guideSources: ['Crafting (40–70)', 'Ranged (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Carapace_torso'
  }),
  makeItem({
    id: 'studded-body',
    name: 'Studded body',
    aliases: ['Studded Armour'],
    category: 'Armour',
    ...alchFromHigh(510, { lowAlch: 340, generalStore: 255 }),
    useRequirements: { skills: { Defence: 20 }, quests: [], notes: 'Tier 20 Ranged armour.' },
    craftingRequirements: { skills: { Crafting: 41 }, materials: ['1x Leather body', '1x Steel studs'], station: 'Inventory Crafting', quests: [], notes: 'Bought or crafted.' },
    guideSources: ['Ranged (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Studded_body'
  }),
  makeItem({
    id: 'green-dhide-body',
    name: "Green d'hide body",
    aliases: ["Green D'hide", "Green D'hide Chaps", "Green D'hide Vambraces"],
    category: 'Armour',
    ...alchFromHigh(4680, { lowAlch: 3120, generalStore: 2340 }),
    useRequirements: { skills: { Defence: 40 }, quests: ['Dragon Slayer (shop unlock at Oziach)'], notes: 'Tier 40/50 F2P Ranged chestplate; bought from Oziach in Edgeville after Dragon Slayer (chaps/vambs at Valaine).' },
    craftingRequirements: { skills: { Crafting: 63 }, materials: ['3x Green dragonleather', 'Thread', 'Needle'], station: 'Inventory Crafting', quests: [], notes: 'Chaps require 60 Crafting (2,340 HA); Vambraces require 57 Crafting.' },
    guideSources: ['Ranged (40–99)', 'Quests: Dragon Slayer'],
    wikiUrl: "https://runescape.wiki/w/Green_d'hide_body"
  }),
  makeItem({
    id: 'green-dhide-shield',
    name: "Green d'hide shield",
    category: 'Armour',
    ...alchFromHigh(6240, { lowAlch: 4160, generalStore: 3120 }),
    useRequirements: { skills: { Defence: 40 }, quests: [], notes: 'Ranged shield crafted for 70–99 Crafting.' },
    craftingRequirements: { skills: { Crafting: 64 }, materials: ['4x Green dragonleather', 'Thread', 'Needle'], station: 'Inventory Crafting', quests: [], notes: 'Grants 248 Crafting XP.' },
    guideSources: ['Crafting (70–99)'],
    wikiUrl: "https://runescape.wiki/w/Green_d'hide_shield"
  }),
  makeItem({
    id: 'black-dragonhide',
    name: 'Black dragonhide',
    category: 'Hide / Leather',
    ...alchFromHigh(120, { lowAlch: 80, generalStore: 60 }),
    useRequirements: { skills: { Crafting: 79 }, quests: [], notes: 'Dropped 100% by King Black Dragon; sell excess to General Store or bank for future Members Crafting.' },
    craftingRequirements: null,
    guideSources: ['PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Black_dragonhide'
  }),

  // =========================================================================
  // FOOD, COOKING, HERBS & POTIONS
  // =========================================================================
  makeItem({
    id: 'raw-crayfish',
    name: 'Raw crayfish',
    category: 'Raw Food',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: { Cooking: 1 }, quests: [], notes: 'Cook on Lumbridge Range for 1–15 Cooking.' },
    craftingRequirements: { skills: { Fishing: 1 }, materials: ['Crayfish cage (Tool Belt)'], station: 'Burthorpe pond', quests: [], notes: 'Zero bait needed.' },
    guideSources: ['Fishing (1–20)', 'Cooking (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Raw_crayfish'
  }),
  makeItem({
    id: 'crayfish',
    name: 'Crayfish',
    category: 'Food',
    ...alchFromHigh(2, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 200 LP.' },
    craftingRequirements: { skills: { Cooking: 1 }, materials: ['1x Raw crayfish'], station: 'Range / Fire', quests: [], notes: 'Starter food.' },
    guideSources: ['Fishing (1–20)', 'Cooking (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Crayfish'
  }),
  makeItem({
    id: 'shrimps',
    name: 'Shrimps',
    aliases: ['Shrimp', 'Raw shrimps'],
    category: 'Food',
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1 }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 300 LP (scales with Constitution).' },
    craftingRequirements: { skills: { Cooking: 1, Fishing: 1 }, materials: ['1x Raw shrimps'], station: 'Range / Fire', quests: [], notes: 'Caught with Small fishing net at Draynor.' },
    guideSources: ['Fishing (1–20)', 'Cooking (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Shrimps'
  }),
  makeItem({
    id: 'sardine',
    name: 'Sardine',
    aliases: ['Sardines', 'Raw sardine'],
    category: 'Food',
    ...alchFromHigh(6, { lowAlch: 4, generalStore: 3 }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 200 LP; 20x rewarded from Cook\'s Assistant.' },
    craftingRequirements: { skills: { Cooking: 1, Fishing: 5 }, materials: ['1x Raw sardine'], station: 'Range / Fire', quests: [], notes: 'Early Cooking food.' },
    guideSources: ['Cooking (1–20)', "Quests: Cook's Assistant"],
    wikiUrl: 'https://runescape.wiki/w/Sardine'
  }),
  makeItem({
    id: 'anchovies',
    name: 'Anchovies',
    aliases: ['Raw anchovies'],
    category: 'Food',
    ...alchFromHigh(9, { lowAlch: 6, generalStore: 4 }),
    useRequirements: { skills: { Cooking: 55 }, quests: [], notes: 'Heals 200 LP; used on Plain pizza at 55 Cooking to make Anchovy pizza.' },
    craftingRequirements: { skills: { Cooking: 1, Fishing: 15 }, materials: ['1x Raw anchovies'], station: 'Range / Fire', quests: [], notes: 'Caught with Small fishing net at Draynor.' },
    guideSources: ['Fishing (1–20)', 'Cooking (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Anchovies'
  }),
  makeItem({
    id: 'pike',
    name: 'Pike',
    aliases: ['Raw pike'],
    category: 'Food',
    ...alchFromHigh(15, { lowAlch: 10, generalStore: 7 }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 500 LP (scales with Constitution).' },
    craftingRequirements: { skills: { Cooking: 20, Fishing: 25 }, materials: ['1x Raw pike'], station: 'Range / Fire', quests: [], notes: 'Caught with Fishing bait (3 GP each).' },
    guideSources: ['Fishing (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Pike'
  }),
  makeItem({
    id: 'raw-trout',
    name: 'Raw trout',
    category: 'Raw Food',
    ...alchFromHigh(10, { lowAlch: 6, generalStore: 5 }),
    useRequirements: { skills: { Cooking: 15 }, quests: [], notes: 'Cook on Lumbridge Castle Range for 15–30 Cooking.' },
    craftingRequirements: { skills: { Fishing: 20 }, materials: ['1x Feather', 'Fly fishing rod'], station: 'Barbarian Village / Lumbridge river', quests: [], notes: 'Fastest early Fishing XP.' },
    guideSources: ['Fishing (20–99)', 'Cooking (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Raw_trout'
  }),
  makeItem({
    id: 'trout',
    name: 'Trout',
    category: 'Food',
    ...alchFromHigh(6, { lowAlch: 4, generalStore: 3 }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 300+ LP (scales with Constitution); reliable early/mid combat food.' },
    craftingRequirements: { skills: { Cooking: 15 }, materials: ['1x Raw trout'], station: 'Lumbridge Range / Fire', quests: [], notes: 'Zero burn mid-40s Cooking on Lumbridge Range.' },
    guideSources: ['Cooking (20–99)', 'Attack (20–60)'],
    wikiUrl: 'https://runescape.wiki/w/Trout'
  }),
  makeItem({
    id: 'raw-salmon',
    name: 'Raw salmon',
    category: 'Raw Food',
    ...alchFromHigh(12, { lowAlch: 8, generalStore: 6 }),
    useRequirements: { skills: { Cooking: 25 }, quests: [], notes: 'Cook on Lumbridge Castle Range.' },
    craftingRequirements: { skills: { Fishing: 30 }, materials: ['1x Feather', 'Fly fishing rod'], station: 'Barbarian Village river', quests: [], notes: 'Caught alongside Raw trout.' },
    guideSources: ['Fishing (20–99)', 'Cooking (20–99)'],
    wikiUrl: 'https://runescape.wiki/w/Raw_salmon'
  }),
  makeItem({
    id: 'salmon',
    name: 'Salmon',
    category: 'Food',
    ...alchFromHigh(18, { lowAlch: 12, generalStore: 9 }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 400+ LP (scales with Constitution).' },
    craftingRequirements: { skills: { Cooking: 25 }, materials: ['1x Raw salmon'], station: 'Lumbridge Range / Fire', quests: [], notes: 'Great steady food stocked in Group Storage.' },
    guideSources: ['Cooking (20–99)', 'GIM Roles'],
    wikiUrl: 'https://runescape.wiki/w/Salmon'
  }),
  makeItem({
    id: 'tuna',
    name: 'Tuna',
    aliases: ['Raw tuna'],
    category: 'Food',
    ...alchFromHigh(72, { lowAlch: 48, generalStore: 36, specialtyShop: { shop: "Wydin's Food Store", price: 36 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 750 LP (scales with Constitution).' },
    craftingRequirements: { skills: { Cooking: 30, Fishing: 35 }, materials: ['1x Raw tuna'], station: 'Range / Fire', quests: [], notes: 'Harpooned at Musa Point alongside Swordfish.' },
    guideSources: ['Fishing (50–99)', 'Cooking (50–99)'],
    wikiUrl: 'https://runescape.wiki/w/Tuna'
  }),
  makeItem({
    id: 'raw-lobster',
    name: 'Raw lobster',
    aliases: ['Raw Lobsters'],
    category: 'Raw Food',
    ...alchFromHigh(42, { lowAlch: 28, generalStore: 21, specialtyShop: { shop: "Gerrant's Fishy Business", price: 21 } }),
    useRequirements: { skills: { Cooking: 40 }, quests: [], notes: 'Cook on Lumbridge Castle Range.' },
    craftingRequirements: { skills: { Fishing: 40 }, materials: ['Lobster pot (Tool Belt)'], station: 'Musa Point (Karamja)', quests: [], notes: 'Deposit at Port Sarim Entrana Monk dock Deposit Box.' },
    guideSources: ['Fishing (40–99)', 'Cooking (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Raw_lobster'
  }),
  makeItem({
    id: 'lobster',
    name: 'Lobster',
    aliases: ['Lobsters'],
    category: 'Food',
    ...alchFromHigh(120, { lowAlch: 80, generalStore: 60, specialtyShop: { shop: "Wydin's Food Store", price: 60 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 1,200 LP (scales at 48+ Constitution).' },
    craftingRequirements: { skills: { Cooking: 40 }, materials: ['1x Raw lobster'], station: 'Lumbridge Range', quests: [], notes: 'Standard mid-to-late F2P PvM food.' },
    guideSources: ['Cooking (40–99)', 'GIM Roles', 'PvM'],
    wikiUrl: 'https://runescape.wiki/w/Lobster'
  }),
  makeItem({
    id: 'raw-swordfish',
    name: 'Raw swordfish',
    aliases: ['Raw Swordfish'],
    category: 'Raw Food',
    ...alchFromHigh(60, { lowAlch: 40, generalStore: 30, specialtyShop: { shop: "Gerrant's Fishy Business", price: 30 } }),
    useRequirements: { skills: { Cooking: 45 }, quests: [], notes: 'Cook on Lumbridge Range (stops burning mid-70s).' },
    craftingRequirements: { skills: { Fishing: 50 }, materials: ['Harpoon (Tool Belt)'], station: 'Musa Point (Karamja)', quests: [], notes: 'Caught 50/50 alongside Tuna.' },
    guideSources: ['Fishing (50–99)', 'Cooking (50–99)'],
    wikiUrl: 'https://runescape.wiki/w/Raw_swordfish'
  }),
  makeItem({
    id: 'swordfish',
    name: 'Swordfish',
    category: 'Food',
    ...alchFromHigh(240, { lowAlch: 160, generalStore: 120, specialtyShop: { shop: "Wydin's Food Store", price: 120 } }),
    useRequirements: { skills: {}, quests: [], notes: 'Heals up to 1,400 LP; best single-bite F2P boss food (KBD, Giant Mole, Red Spiders).' },
    craftingRequirements: { skills: { Cooking: 45 }, materials: ['1x Raw swordfish'], station: 'Lumbridge Range', quests: [], notes: 'Bank in Group Storage for bossing.' },
    guideSources: ['Cooking (50–99)', 'GIM Roles', 'PvM: Red Spiders, Ankous, Hellhounds, KBD, Giant Mole'],
    wikiUrl: 'https://runescape.wiki/w/Swordfish'
  }),
  makeItem({
    id: 'raw-beef',
    name: 'Raw beef',
    aliases: ['Cooked meat'],
    category: 'Food',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: [], notes: 'Cook into Cooked meat (1 Cooking) for early healing or Meat pizza.' },
    craftingRequirements: null,
    guideSources: ['PvM: Cows'],
    wikiUrl: 'https://runescape.wiki/w/Raw_beef'
  }),
  makeItem({
    id: 'raw-chicken',
    name: 'Raw chicken',
    category: 'Raw Food',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: { Cooking: 1, Summoning: 4 }, quests: [], notes: 'Used as secondary ingredient to infuse Dreadfowl pouches (4 Summoning).' },
    craftingRequirements: null,
    guideSources: ['Magic (1–17)', 'Members Trial Skills (Summoning)'],
    wikiUrl: 'https://runescape.wiki/w/Raw_chicken'
  }),
  makeItem({
    id: 'bread',
    name: 'Bread',
    category: 'Food',
    ...alchFromHigh(12, { lowAlch: 8, generalStore: 6 }),
    useRequirements: { skills: {}, quests: [], notes: 'Early food healing up to 300–600 LP.' },
    craftingRequirements: { skills: { Cooking: 1 }, materials: ['Pot of flour', 'Water'], station: 'Range', quests: [], notes: 'Make Bread dough then bake.' },
    guideSources: ['Cooking (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Bread'
  }),
  makeItem({
    id: 'redberry-pie',
    name: 'Redberry pie',
    aliases: ['Redberry Pies'],
    category: 'Food',
    ...alchFromHigh(7, { lowAlch: 4, generalStore: 3 }),
    useRequirements: { skills: {}, quests: ["The Knight's Sword"], notes: 'Heals 250 LP (2 bites); 1x required per teammate for The Knight\'s Sword.' },
    craftingRequirements: { skills: { Cooking: 10 }, materials: ['1x Pastry dough', '1x Redberries', '1x Pie dish'], station: 'Range', quests: [], notes: 'Redberries spawn SE of Varrock.' },
    guideSources: ['Cooking (1–20)', 'Smithing (1–29)', "Quests: The Knight's Sword"],
    wikiUrl: 'https://runescape.wiki/w/Redberry_pie'
  }),
  makeItem({
    id: 'plain-pizza',
    name: 'Plain pizza',
    aliases: ['Meat Pizza', 'Anchovy Pizza'],
    category: 'Food',
    ...alchFromHigh(24, { lowAlch: 16, generalStore: 12 }),
    useRequirements: { skills: {}, quests: [], notes: 'Plain (35 Cooking, 700 LP), Meat (45 Cooking, 1,124 LP), Anchovy (55 Cooking, 1,374–1,800 LP in 2 bites).' },
    craftingRequirements: { skills: { Cooking: 35 }, materials: ['Pizza base (Flour + Water)', 'Tomato', 'Cheese'], station: 'Range', quests: [], notes: 'Add Cooked meat (45) or Anchovies (55) after baking.' },
    guideSources: ['Cooking (40–50)'],
    wikiUrl: 'https://runescape.wiki/w/Plain_pizza'
  }),
  makeItem({
    id: 'grimy-guam',
    name: 'Grimy guam',
    aliases: ['Grimy Guam Leaves', 'Guam leaf', 'Guam', 'Grimy Herbs', 'Grimy Marrentill', 'Grimy Tarromin'],
    category: 'Herb',
    ...alchFromHigh(1, { lowAlch: 1, generalStore: 0 }),
    useRequirements: { skills: { Herblore: 3 }, quests: [], notes: 'Clean at 3 Herblore (1 Herblore in some tables; Attack potion at 3) and brew with Eye of newt.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Trolls, Flesh Crawlers, Al Kharid Warriors', 'Members Trial Skills (Herblore)'],
    wikiUrl: 'https://runescape.wiki/w/Grimy_guam'
  }),
  makeItem({
    id: 'eye-of-newt',
    name: 'Eye of newt',
    aliases: ['Eyes of Newt'],
    category: 'Herblore',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: { Herblore: 3 }, quests: [], notes: 'Add to Guam potion (unf) for Attack potions; bought 3 GP each from Poletax in Taverley.' },
    craftingRequirements: null,
    guideSources: ['PvM: Trolls', 'Members Trial Skills (Herblore)'],
    wikiUrl: 'https://runescape.wiki/w/Eye_of_newt'
  }),
  makeItem({
    id: 'attack-potion',
    name: 'Attack potion (3)',
    aliases: ['Attack Potions', 'Attack Pots'],
    category: 'Potion',
    ...alchFromHigh(15, { lowAlch: 10, generalStore: 7 }),
    useRequirements: { skills: {}, quests: [], notes: '100% drinkable and brewable in F2P (3 Herblore); boosts Attack for bossing.' },
    craftingRequirements: { skills: { Herblore: 3 }, materials: ['1x Clean guam', '1x Vial of water', '1x Eye of newt'], station: 'Inventory mixing', quests: [], notes: 'Grants 25 Herblore XP.' },
    guideSources: ['PvM: Trolls', 'Members Trial Skills (Herblore)'],
    wikiUrl: 'https://runescape.wiki/w/Attack_potion'
  }),
  makeItem({
    id: 'limpwurt-root',
    name: 'Limpwurt root',
    aliases: ['Limpwurt Roots'],
    category: 'Herblore',
    ...alchFromHigh(4, { lowAlch: 2, generalStore: 2 }),
    useRequirements: { skills: {}, quests: [], notes: 'Bring 1 Limpwurt root + 1 Red spiders\' eggs + 5 GP to Varrock Apothecary for Strength potion (4).' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Hill Giants, Hobgoblins'],
    wikiUrl: 'https://runescape.wiki/w/Limpwurt_root'
  }),
  makeItem({
    id: 'red-spiders-eggs',
    name: "Red spiders' eggs",
    category: 'Herblore',
    ...alchFromHigh(2, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: {}, quests: [], notes: 'Ground spawn in Varrock Sewers Spider Room; combine with Limpwurt root + 5 GP at Apothecary.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Deadly Red Spiders'],
    wikiUrl: "https://runescape.wiki/w/Red_spiders'_eggs"
  }),
  makeItem({
    id: 'strength-potion-4',
    name: 'Strength potion (4)',
    aliases: ['Strength Potions (4)'],
    category: 'Potion',
    ...alchFromHigh(12, { lowAlch: 8, generalStore: 6 }),
    useRequirements: { skills: {}, quests: [], notes: 'F2P melee Strength boost potion brewed by Varrock Apothecary.' },
    craftingRequirements: { skills: {}, materials: ['1x Limpwurt root', "1x Red spiders' eggs", '5 GP'], station: 'Varrock Apothecary', quests: [], notes: 'Requires 0 Herblore level when brewed by Apothecary.' },
    guideSources: ['PvM Highlights', 'PvM: Hill Giants, Deadly Red Spiders, Hobgoblins'],
    wikiUrl: 'https://runescape.wiki/w/Strength_potion'
  }),
  makeItem({
    id: 'weapon-poison',
    name: 'Weapon poison (1)',
    aliases: ['Weapon Poison', 'Weapon Poison (1-Dose Vial)'],
    category: 'Potion',
    ...alchFromHigh(150, { lowAlch: 100, generalStore: 75 }),
    useRequirements: { skills: {}, quests: [], notes: 'Rare Ankou drop; works in F2P on King Black Dragon & Giant Mole for extra poison DPS.' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Ankous'],
    wikiUrl: 'https://runescape.wiki/w/Weapon_poison'
  }),
  makeItem({
    id: 'beer',
    name: 'Beer',
    category: 'Food',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: ['Vampyre Slayer'], notes: '1x given to Dr. Harlow in Blue Moon Inn for Stake & Hammer.' },
    craftingRequirements: null,
    guideSources: ['Quests: Vampyre Slayer', 'Attack (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Beer'
  }),
  makeItem({
    id: 'wizards-mind-bomb',
    name: "Wizard's mind bomb",
    category: 'Food',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: ['Dragon Slayer'], notes: 'Temporarily boosts Magic; 1x required for Dragon Slayer (Oracle).' },
    craftingRequirements: null,
    guideSources: ['Quests: Dragon Slayer'],
    wikiUrl: "https://runescape.wiki/w/Wizard's_mind_bomb"
  }),

  // =========================================================================
  // PRAYER, ASHES, CHARMS & SKILLING URNS
  // =========================================================================
  makeItem({
    id: 'bones',
    name: 'Bones',
    aliases: ['Starter Bones'],
    category: 'Prayer',
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 1 }, quests: [], notes: '4.5 XP buried; 15.75 XP on Level 12 Wilderness Chaos Altar (3.5x).' },
    craftingRequirements: null,
    guideSources: ['PvM: Trolls, Cows, Hellhounds', 'Prayer (1–28)'],
    wikiUrl: 'https://runescape.wiki/w/Bones'
  }),
  makeItem({
    id: 'big-bones',
    name: 'Big bones',
    category: 'Prayer',
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 1 }, quests: [], notes: '15 XP buried; 52.5 XP offered on Wilderness Chaos Altar (3.5x).' },
    craftingRequirements: null,
    guideSources: ['Prayer (28–99)', 'PvM: Hill Giants, Moss Giants, Ice Giants'],
    wikiUrl: 'https://runescape.wiki/w/Big_bones'
  }),
  makeItem({
    id: 'dragon-bones',
    name: 'Dragon bones',
    category: 'Prayer',
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 1 }, quests: [], notes: '72 base XP (Members-only to scatter/offer at high altars; KBD drops 100%).' },
    craftingRequirements: null,
    guideSources: ['PvM: KBD'],
    wikiUrl: 'https://runescape.wiki/w/Dragon_bones'
  }),
  makeItem({
    id: 'ancient-bones',
    name: 'Ancient bones',
    category: 'Prayer',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 1 }, quests: ['The Restless Ghost'], notes: '5x Ancient bones from The Restless Ghost reward 200 Prayer XP each (1,000 total).' },
    craftingRequirements: null,
    guideSources: ['Quests: The Restless Ghost', 'Prayer (1–28)'],
    wikiUrl: 'https://runescape.wiki/w/Ancient_bones_(The_Restless_Ghost)'
  }),
  makeItem({
    id: 'impious-ashes',
    name: 'Impious ashes',
    category: 'Prayer',
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 1 }, quests: [], notes: '4 base Prayer XP when scattered or caught by Impious urns (+20% XP).' },
    craftingRequirements: null,
    guideSources: ['PvM: Imps', 'Prayer (1–28)'],
    wikiUrl: 'https://runescape.wiki/w/Impious_ashes'
  }),
  makeItem({
    id: 'accursed-ashes',
    name: 'Accursed ashes',
    category: 'Prayer',
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 1 }, quests: [], notes: '12.5 base Prayer XP; automatically scattered by Accursed urns for +20% XP.' },
    craftingRequirements: null,
    guideSources: ['PvM: Lesser Demons, Greater Demons', 'Prayer (43–99)'],
    wikiUrl: 'https://runescape.wiki/w/Accursed_ashes'
  }),
  makeItem({
    id: 'gold-charm',
    name: 'Gold charm',
    aliases: ['Gold Charms'],
    category: 'Summoning',
    tradeable: false,
    stackable: true,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Summoning: 1 }, quests: ['Wolf Whistle'], notes: 'Dropped only after Wolf Whistle; used to infuse Dreadfowl pouches (4 Summoning).' },
    craftingRequirements: null,
    guideSources: ['PvM: Trolls, Hellhounds', 'Members Trial Skills (Summoning)'],
    wikiUrl: 'https://runescape.wiki/w/Gold_charm'
  }),
  makeItem({
    id: 'mining-urn',
    name: 'Decorated mining urn',
    aliases: ['Mining Urns', 'Cracked Mining Urn', 'Strong Mining Urn'],
    category: 'Urn',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Mining: 1 }, quests: [], notes: 'Attach 1 Earth rune to activate; grants +20% bonus Mining XP when full (Cracked 1, Fragile 17, Plain 32, Strong 48, Decorated 59 Crafting).' },
    craftingRequirements: { skills: { Crafting: 59 }, materials: ['2x Soft clay', '1x Earth rune'], station: "Potter's wheel & Pottery oven", quests: [], notes: 'Cracked starts at 1 Crafting.' },
    guideSources: ['Mining (30–99)', 'Crafting (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Decorated_mining_urn'
  }),
  makeItem({
    id: 'fishing-urn',
    name: 'Decorated fishing urn',
    aliases: ['Fishing Urns', 'Cracked Fishing Urns', 'Strong Fishing Urns'],
    category: 'Urn',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Fishing: 1 }, quests: [], notes: 'Attach 1 Water rune to activate; grants +20% Fishing XP (Cracked 2, Fragile 15, Plain 41, Strong 53, Decorated 76 Crafting).' },
    craftingRequirements: { skills: { Crafting: 76 }, materials: ['2x Soft clay', '1x Water rune'], station: "Potter's wheel & Pottery oven", quests: [], notes: 'Cracked starts at 2 Crafting.' },
    guideSources: ['Fishing (1–99)', 'Crafting (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Decorated_fishing_urn'
  }),
  makeItem({
    id: 'cooking-urn',
    name: 'Decorated cooking urn',
    aliases: ['Cooking Urns', 'Cracked Cooking Urns', 'Strong Cooking Urns'],
    category: 'Urn',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Cooking: 1 }, quests: [], notes: 'Attach 1 Fire rune to activate; grants +20% Cooking XP (Cracked 2, Fragile 12, Plain 36, Strong 51, Decorated 81 Crafting).' },
    craftingRequirements: { skills: { Crafting: 81 }, materials: ['2x Soft clay', '1x Fire rune'], station: "Potter's wheel & Pottery oven", quests: [], notes: 'Cracked starts at 2 Crafting.' },
    guideSources: ['Cooking (1–99)', 'Crafting (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Decorated_cooking_urn'
  }),
  makeItem({
    id: 'woodcutting-urn',
    name: 'Decorated woodcutting urn',
    aliases: ['Woodcutting Urns', 'Strong Woodcutting Urns', 'Decorated Urns'],
    category: 'Urn',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Woodcutting: 1 }, quests: [], notes: 'Attach 1 Earth rune to activate; grants +20% Woodcutting XP (Cracked 4, Fragile 15, Plain 44, Strong 61, Decorated 76 Crafting).' },
    craftingRequirements: { skills: { Crafting: 76 }, materials: ['2x Soft clay', '1x Earth rune'], station: "Potter's wheel & Pottery oven", quests: [], notes: 'Cracked starts at 4 Crafting.' },
    guideSources: ['Woodcutting (15–99)', 'Crafting (70–99)'],
    wikiUrl: 'https://runescape.wiki/w/Decorated_woodcutting_urn'
  }),
  makeItem({
    id: 'smelting-urn',
    name: 'Decorated smelting urn',
    aliases: ['Smithing Urns', 'Smelting Urn'],
    category: 'Urn',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Smithing: 1 }, quests: [], notes: 'Attach 1 Fire rune to activate; grants +20% Smithing XP (Cracked 4, Fragile 15, Plain 35, Strong 50, Decorated 72 Crafting).' },
    craftingRequirements: { skills: { Crafting: 72 }, materials: ['2x Soft clay', '1x Fire rune'], station: "Potter's wheel & Pottery oven", quests: [], notes: 'Used at Forge/Anvil/Furnace.' },
    guideSources: ['Smithing (Mechanics)'],
    wikiUrl: 'https://runescape.wiki/w/Decorated_smelting_urn'
  }),
  makeItem({
    id: 'runecrafting-urn',
    name: 'Decorated runecrafting urn',
    aliases: ['Runecrafting Urns'],
    category: 'Urn',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Runecrafting: 1 }, quests: [], notes: 'Activated with 1 Pure essence (RS3); grants +20% RC XP (Cracked 4, Fragile 18, Plain 33, Strong 52, Decorated 77 Crafting).' },
    craftingRequirements: { skills: { Crafting: 77 }, materials: ['2x Soft clay', '1x Pure essence'], station: "Potter's wheel & Pottery oven", quests: [], notes: 'Fills during Altar crafting & Runespan.' },
    guideSources: ['Runecrafting (1–99)'],
    wikiUrl: 'https://runescape.wiki/w/Decorated_runecrafting_urn'
  }),
  makeItem({
    id: 'prayer-urn',
    name: 'Accursed urn',
    aliases: ['Impious Prayer Urns', 'Accursed Prayer Urns', 'Impious urn'],
    category: 'Urn',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 1 }, quests: [], notes: 'Attach 1 Air rune; Impious (2 Crafting) scatters Impious ashes, Accursed (26 Crafting) scatters Accursed ashes (+20% Prayer XP).' },
    craftingRequirements: { skills: { Crafting: 26 }, materials: ['2x Soft clay', '1x Air rune'], station: "Potter's wheel & Pottery oven", quests: [], notes: '1,500 Prayer XP per full Accursed urn.' },
    guideSources: ['Prayer (1–99)', 'PvM: Imps, Lesser/Greater Demons'],
    wikiUrl: 'https://runescape.wiki/w/Accursed_urn'
  }),

  // =========================================================================
  // DUNGEONEERING, NECROMANCY, ARCHAEOLOGY & TRIAL SKILL ITEMS
  // =========================================================================
  makeItem({
    id: 'ring-of-kinship',
    name: 'Ring of kinship',
    category: 'Tool',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: 'Free from Dungeoneering Tutor outside Daemonheim; unlimited Daemonheim teleports & party management.' },
    craftingRequirements: null,
    guideSources: ['Dungeoneering (1–99)', 'Woodcutting (45–99)'],
    wikiUrl: 'https://runescape.wiki/w/Ring_of_kinship'
  }),
  makeItem({
    id: 'gem-bag',
    name: 'Gem bag',
    category: 'Tool',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Crafting: 25, Dungeoneering: 25 }, quests: [], notes: 'Costs 2,000 DG Tokens at Marmaros; holds 100 uncut sapphires, emeralds, rubies, diamonds.' },
    craftingRequirements: null,
    guideSources: ['Mining (20–99)', 'Crafting (20–70)', 'Dungeoneering (1–30)'],
    wikiUrl: 'https://runescape.wiki/w/Gem_bag'
  }),
  makeItem({
    id: 'coal-bag',
    name: 'Coal bag',
    category: 'Tool',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Mining: 35, Dungeoneering: 35 }, quests: [], notes: 'Costs 4,000 DG Tokens at Marmaros; holds 81 Coal.' },
    craftingRequirements: null,
    guideSources: ['Mining (20–99)', 'Dungeoneering (1–30)'],
    wikiUrl: 'https://runescape.wiki/w/Coal_bag'
  }),
  makeItem({
    id: 'scroll-of-efficiency',
    name: 'Scroll of efficiency',
    category: 'Tool',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Smithing: 55, Dungeoneering: 55 }, quests: [], notes: 'Costs 20,000 DG Tokens; permanent unlock giving a chance to save bars on 3+ bar smithing.' },
    craftingRequirements: null,
    guideSources: ['Smithing (50–99)', 'Dungeoneering (30–55)'],
    wikiUrl: 'https://runescape.wiki/w/Scroll_of_efficiency'
  }),
  makeItem({
    id: 'bonecrusher',
    name: 'Bonecrusher',
    category: 'Tool',
    f2p: false,
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Prayer: 21, Dungeoneering: 21 }, quests: [], notes: 'Members-only Dungeoneering reward (34,000 tokens); automatically buries dropped bones.' },
    craftingRequirements: null,
    guideSources: ['Prayer (43–99)', 'Dungeoneering (55–99)'],
    wikiUrl: 'https://runescape.wiki/w/Bonecrusher'
  }),
  makeItem({
    id: 'arcane-blast-necklace',
    name: 'Arcane blast necklace',
    aliases: ['Arcane Pulse Necklace'],
    category: 'Jewellery',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Magic: 50, Dungeoneering: 50 }, quests: [], notes: 'Costs 15,500 DG Tokens; Magic neck slot item.' },
    craftingRequirements: null,
    guideSources: ['Dungeoneering (55–99)'],
    wikiUrl: 'https://runescape.wiki/w/Arcane_blast_necklace'
  }),
  makeItem({
    id: 'death-guard',
    name: 'Death guard (tier 10)',
    aliases: ['Death Guard', 'Death Guard & Scythe', 'Skull Lantern', 'Deathwarden'],
    category: 'Necromancy Supply',
    f2p: true,
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Necromancy: 1 }, quests: ['Necromancy!'], notes: 'F2P Necromancy trial caps at Level 20; note that Kili Row / T20 upgrades beyond starter trial require Membership.' },
    craftingRequirements: { skills: { Necromancy: 10 }, materials: ['Soft clay', 'Bronze bars'], station: 'Forge / Kili tasks', quests: ['Necromancy!'], notes: 'Tier 20 Deathwarden & Rune Mythos are Members-locked on Wiki.' },
    guideSources: ['Necromancy (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Death_guard_(tier_10)'
  }),
  makeItem({
    id: 'weak-necroplasm',
    name: 'Weak necroplasm',
    aliases: ['Lesser Necroplasm', 'Basic Ghostly Ink', 'Ritual Candles'],
    category: 'Necromancy Supply',
    f2p: false,
    stackable: true,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Necromancy: 1 }, quests: ['Necromancy!'], notes: 'Used for Necromancy rituals & inks in City of Um (full ritual pipeline is Members-restricted beyond F2P trial).' },
    craftingRequirements: null,
    guideSources: ['Necromancy (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Weak_necroplasm'
  }),
  makeItem({
    id: 'third-age-iron',
    name: 'Third-age iron',
    aliases: ['Third-Age Iron'],
    category: 'Archaeology Material',
    stackable: false,
    ...alchFromHigh(24, { lowAlch: 16, generalStore: 12 }),
    useRequirements: { skills: { Archaeology: 5 }, quests: [], notes: 'Zarosian restoration material for Venator daggers (16x) and crossbows (12x).' },
    craftingRequirements: { skills: { Archaeology: 5 }, materials: ['Kharid-et / Campus Soil'], station: 'Material cache / Soil mesh', quests: [], notes: 'Stored in Material Storage.' },
    guideSources: ['Archaeology (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Third-age_iron'
  }),
  makeItem({
    id: 'zarosian-insignia',
    name: 'Zarosian insignia',
    category: 'Archaeology Material',
    ...alchFromHigh(24, { lowAlch: 16, generalStore: 12 }),
    useRequirements: { skills: { Archaeology: 5 }, quests: [], notes: 'Zarosian restoration material for Venator daggers (12x) and crossbows (16x).' },
    craftingRequirements: { skills: { Archaeology: 5 }, materials: ['Kharid-et / Campus Soil'], station: 'Material cache / Soil mesh', quests: [], notes: 'Stored in Material Storage.' },
    guideSources: ['Archaeology (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Zarosian_insignia'
  }),
  makeItem({
    id: 'tyrian-purple',
    name: 'Tyrian purple',
    category: 'Archaeology Material',
    ...alchFromHigh(24, { lowAlch: 16, generalStore: 12 }),
    useRequirements: { skills: { Archaeology: 25 }, quests: [], notes: 'Zarosian pigment material from Kharid-et caches.' },
    craftingRequirements: null,
    guideSources: ['Archaeology (5–12)'],
    wikiUrl: 'https://runescape.wiki/w/Tyrian_purple'
  }),
  makeItem({
    id: 'venator-dagger',
    name: 'Venator dagger',
    aliases: ['Venator Daggers', 'Venator Crossbows', 'Venator light crossbow', "Centurion's seal"],
    category: 'Archaeology Material',
    ...alchFromHigh(54, { lowAlch: 36, generalStore: 27 }),
    useRequirements: { skills: { Attack: 5 }, quests: [], notes: 'Donate restored Venator Daggers & Light Crossbows to Velucia for Chronotes (Zarosian I collection).' },
    craftingRequirements: { skills: { Archaeology: 5 }, materials: ['1x Damaged Venator dagger', '16x Third-age iron', '12x Zarosian insignia'], station: "Archaeologist's workbench", quests: [], notes: 'Centurion\'s seal unlocks deeper Kharid-et & Font of Life tutorial Chronotes.' },
    guideSources: ['Archaeology (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Venator_dagger'
  }),
  makeItem({
    id: 'chronotes',
    name: 'Chronotes',
    category: 'Archaeology Material',
    stackable: true,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Archaeology: 1 }, quests: [], notes: '500 Chronotes activate Font of Life (+500 permanent Max LP) at the Mysterious Monolith.' },
    craftingRequirements: null,
    guideSources: ['Archaeology (1–20)', 'Constitution'],
    wikiUrl: 'https://runescape.wiki/w/Chronotes'
  }),
  makeItem({
    id: 'dreadfowl-pouch',
    name: 'Dreadfowl pouch',
    aliases: ['Dreadfowl Pouches', 'Spirit Shards', 'Blank Pouches'],
    category: 'Summoning',
    ...alchFromHigh(374, { lowAlch: 249, generalStore: 187 }),
    useRequirements: { skills: { Summoning: 4 }, quests: ['Wolf Whistle'], notes: 'Trade extras back to Bogrog/Pikkupstix for Spirit shards.' },
    craftingRequirements: { skills: { Summoning: 4 }, materials: ['1x Pouch', '1x Gold charm', '1x Raw chicken', '8x Spirit shards'], station: 'Taverley Summoning Obelisk', quests: ['Wolf Whistle'], notes: 'Finishes Level 5 F2P Summoning cap.' },
    guideSources: ['Members Trial Skills (Summoning)', 'PvM: Trolls'],
    wikiUrl: 'https://runescape.wiki/w/Dreadfowl_pouch'
  }),
  makeItem({
    id: 'pale-energy',
    name: 'Pale energy',
    aliases: ['Pale Energies'],
    category: 'Misc',
    stackable: true,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Divination: 1 }, quests: [], notes: 'Harvested from Pale wisps south of Taverley for 1–5 Divination.' },
    craftingRequirements: null,
    guideSources: ['Members Trial Skills (Divination)'],
    wikiUrl: 'https://runescape.wiki/w/Pale_energy'
  }),

  // =========================================================================
  // QUEST & MISC KEY ITEMS
  // =========================================================================
  makeItem({
    id: 'brass-key',
    name: 'Brass key',
    category: 'Quest Item',
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: 'Unlocks the Edgeville shed shortcut directly into Hill Giants.' },
    craftingRequirements: null,
    guideSources: ['Attack (20–40)', 'Prayer (43–99)'],
    wikiUrl: 'https://runescape.wiki/w/Brass_key'
  }),
  makeItem({
    id: 'ghostspeak-amulet',
    name: 'Ghostspeak amulet',
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: ['The Restless Ghost (started)'], notes: 'Required to speak to ghosts; obtained from Father Urhney.' },
    craftingRequirements: null,
    guideSources: ['Quests: The Restless Ghost'],
    wikiUrl: 'https://runescape.wiki/w/Ghostspeak_amulet'
  }),
  makeItem({
    id: 'illuminated-god-book',
    name: 'Illuminated book of wisdom',
    aliases: ['Illuminated God Book'],
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Crafting: 60, Prayer: 60 }, quests: ['One Piercing Note', 'Horror from the Deep'], notes: 'Pocket-slot Prayer & combat bonus unlocked via One Piercing Note (completed god book requires Horror from the Deep).' },
    craftingRequirements: null,
    guideSources: ['Quests: One Piercing Note', 'Prayer (1–28)'],
    wikiUrl: 'https://runescape.wiki/w/Illuminated_god_book'
  }),
  makeItem({
    id: 'enchanted-broom',
    name: 'Broomstick',
    aliases: ['Enchanted Broom'],
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: ['Swept Away'], notes: 'Show to Apprentice Clara in Burthorpe for 2,500 Magic XP; teleports to Sorceress\'s Garden.' },
    craftingRequirements: null,
    guideSources: ['Quests: Swept Away', 'Magic (1–17)'],
    wikiUrl: 'https://runescape.wiki/w/Broomstick'
  }),
  makeItem({
    id: 'imp-beads',
    name: 'Red bead',
    aliases: ['Yellow bead', 'Black bead', 'White bead', 'Coloured Beads', 'Red, Yellow, Black & White Beads'],
    category: 'Quest Item',
    ...alchFromHigh(2, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: {}, quests: [], notes: '1 set of Red, Yellow, Black, White beads completes Imp Catcher (875 Magic XP + Amulet of accuracy).' },
    craftingRequirements: null,
    guideSources: ['PvM Highlights', 'PvM: Imps', 'Quests: Imp Catcher'],
    wikiUrl: 'https://runescape.wiki/w/Red_bead'
  }),
  makeItem({
    id: 'magical-dice-t1',
    name: 'Magical dice (T1)',
    aliases: ['Magical Dice', 'Tier 1 Magical Die', 'Magical die'],
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: ['25 Quest Points / 50 Quest Points'], notes: 'Claim from May southwest of Varrock Lodestone; rolling grants 250,000 GP + Treasure Trail item.' },
    craftingRequirements: null,
    guideSources: ['Money Making: May Quest Caravan', 'Overview'],
    wikiUrl: 'https://runescape.wiki/w/Magical_dice_(T1)'
  }),
  makeItem({
    id: 'fancy-boots',
    name: 'Fancy boots',
    aliases: ['Fighting boots'],
    category: 'Armour',
    tradeable: false,
    ...alchFromHigh(1, { lowAlch: 0, generalStore: null }),
    useRequirements: { skills: { Defence: 1 }, quests: [], notes: 'Tier 4 melee boots from Stronghold of Security Floor 4 Cradle of Life.' },
    craftingRequirements: null,
    guideSources: ['Money Making: Stronghold of Security', 'Overview'],
    wikiUrl: 'https://runescape.wiki/w/Fancy_boots'
  }),
  makeItem({
    id: 'safety-gloves',
    name: 'Safety gloves',
    category: 'Armour',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: { Defence: 1 }, quests: [], notes: 'Claimed from Stronghold of Player Safety chest alongside 10,000 GP.' },
    craftingRequirements: null,
    guideSources: ['Money Making: Stronghold of Security'],
    wikiUrl: 'https://runescape.wiki/w/Safety_gloves'
  }),
  makeItem({
    id: 'garlic',
    name: 'Garlic',
    category: 'Quest Item',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: ['Vampyre Slayer'], notes: 'Grabbed from Morgan\'s cupboard in Draynor Village to weaken Count Draynor.' },
    craftingRequirements: null,
    guideSources: ['Quests: Vampyre Slayer', 'Attack (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Garlic'
  }),
  makeItem({
    id: 'stake',
    name: 'Stake',
    aliases: ['Stake & Hammer', 'Hammer'],
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: ['Vampyre Slayer'], notes: 'Obtained from Dr. Harlow in exchange for 1 Beer to slay Count Draynor.' },
    craftingRequirements: null,
    guideSources: ['Quests: Vampyre Slayer', 'Attack (1–20)'],
    wikiUrl: 'https://runescape.wiki/w/Stake'
  }),
  makeItem({
    id: 'unfired-bowl',
    name: 'Unfired bowl',
    category: 'Quest Item',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: ['Dragon Slayer'], notes: '1x required for Dragon Slayer (Oracle\'s map door).' },
    craftingRequirements: { skills: { Crafting: 8 }, materials: ['1x Soft clay'], station: "Potter's wheel", quests: [], notes: 'Do NOT fire in pottery oven.' },
    guideSources: ['Quests: Dragon Slayer'],
    wikiUrl: 'https://runescape.wiki/w/Unfired_bowl'
  }),
  makeItem({
    id: 'lobster-pot',
    name: 'Lobster pot',
    category: 'Tool',
    ...alchFromHigh(12, { lowAlch: 8, generalStore: 6, specialtyShop: { shop: "Gerrant's Fishy Business", price: 6 } }),
    useRequirements: { skills: { Fishing: 40 }, quests: ['Dragon Slayer'], notes: 'Built into Tool Belt for Fishing; 1 physical Lobster pot needed for Dragon Slayer.' },
    craftingRequirements: null,
    guideSources: ['Quests: Dragon Slayer', 'Fishing (40–99)'],
    wikiUrl: 'https://runescape.wiki/w/Lobster_pot'
  }),
  makeItem({
    id: 'silk',
    name: 'Silk',
    category: 'Quest Item',
    ...alchFromHigh(18, { lowAlch: 12, generalStore: 9 }),
    useRequirements: { skills: {}, quests: ['Dragon Slayer'], notes: '1x required for Dragon Slayer (Oracle\'s map door).' },
    craftingRequirements: null,
    guideSources: ['Quests: Dragon Slayer'],
    wikiUrl: 'https://runescape.wiki/w/Silk'
  }),
  makeItem({
    id: 'super-large-egg',
    name: 'Super large egg',
    aliases: ['Top-quality milk', 'Extra fine flour'],
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: ["Cook's Assistant"], notes: 'Quest-exclusive ingredients gathered around Lumbridge for Cook\'s Assistant.' },
    craftingRequirements: null,
    guideSources: ["Quests: Cook's Assistant"],
    wikiUrl: 'https://runescape.wiki/w/Super_large_egg'
  }),
  makeItem({
    id: 'fishing-bait',
    name: 'Fishing bait',
    category: 'Misc',
    stackable: true,
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: { Fishing: 5 }, quests: [], notes: '3 GP each at Hank (Lumbridge Swamp) / Gerry (Port Sarim); used for Pike.' },
    craftingRequirements: null,
    guideSources: ['Fishing (20–40)'],
    wikiUrl: 'https://runescape.wiki/w/Fishing_bait'
  }),
  makeItem({
    id: 'potato-seed',
    name: 'Potato seed',
    aliases: ['Potato', 'Potatoes'],
    category: 'Misc',
    stackable: true,
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: { Farming: 1 }, quests: [], notes: 'Planted in Taverley Allotment for 1–5 Farming trial cap.' },
    craftingRequirements: null,
    guideSources: ['Members Trial Skills (Farming)'],
    wikiUrl: 'https://runescape.wiki/w/Potato_seed'
  }),
  makeItem({
    id: 'noose-wand',
    name: 'Noose wand',
    aliases: ['Bird snare'],
    category: 'Tool',
    ...alchFromHigh(2, { lowAlch: 1, generalStore: 1 }),
    useRequirements: { skills: { Hunter: 1 }, quests: [], notes: 'Free from Hunter Tutor in Taverley to track Polar Kebbits (1–5 Hunter).' },
    craftingRequirements: null,
    guideSources: ['Members Trial Skills (Hunter)'],
    wikiUrl: 'https://runescape.wiki/w/Noose_wand'
  }),
  makeItem({
    id: 'tinderbox',
    name: 'Tinderbox',
    aliases: ['Knife', 'Chisel'],
    category: 'Tool',
    ...alchFromHigh(1, { lowAlch: 0, generalStore: 0 }),
    useRequirements: { skills: {}, quests: [], notes: 'Built permanently into the RS3 Tool Belt.' },
    craftingRequirements: null,
    guideSources: ['Global Mechanics', 'Firemaking', 'Quests: Beneath Cursed Tides'],
    wikiUrl: 'https://runescape.wiki/w/Tinderbox'
  }),
  makeItem({
    id: 'goblin-mail',
    name: 'Goblin mail',
    category: 'Quest Item',
    ...alchFromHigh(24, { lowAlch: 16, generalStore: 12 }),
    useRequirements: { skills: {}, quests: ['Goblin Diplomacy'], notes: 'Cannot be equipped by players; 3x required for Goblin Diplomacy (5 QP).' },
    craftingRequirements: null,
    guideSources: ['Money Making: May Quest Caravan'],
    wikiUrl: 'https://runescape.wiki/w/Goblin_mail'
  }),
  makeItem({
    id: 'orange-dye',
    name: 'Orange dye',
    category: 'Quest Item',
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1 }),
    useRequirements: { skills: {}, quests: ['Goblin Diplomacy'], notes: 'Combined from Red dye + Yellow dye (made by Aggie in Draynor Village) to dye Goblin mail.' },
    craftingRequirements: { skills: {}, materials: ['1x Red dye', '1x Yellow dye'], station: 'Combine in inventory', quests: [], notes: 'Aggie makes Red dye (3 Redberries + 5 GP) and Yellow dye (2 Onions + 5 GP).' },
    guideSources: ['Money Making: May Quest Caravan'],
    wikiUrl: 'https://runescape.wiki/w/Orange_dye'
  }),
  makeItem({
    id: 'blue-dye',
    name: 'Blue dye',
    category: 'Quest Item',
    ...alchFromHigh(3, { lowAlch: 2, generalStore: 1 }),
    useRequirements: { skills: {}, quests: ['Goblin Diplomacy'], notes: 'Used to dye Goblin mail blue during Goblin Diplomacy (5 QP).' },
    craftingRequirements: { skills: {}, materials: ['2x Woad leaf', '5x Coins'], station: 'Aggie (Draynor Village)', quests: [], notes: 'Buy Woad leaves from Wyson the Gardener in Falador Park.' },
    guideSources: ['Money Making: May Quest Caravan'],
    wikiUrl: 'https://runescape.wiki/w/Blue_dye'
  }),
  makeItem({
    id: 'antique-lamp',
    name: 'Antique lamp',
    aliases: ['Antique Lamps', '500 XP Antique Lamp'],
    category: 'Quest Item',
    tradeable: false,
    sellPrices: { generalStore: null, specialtyShop: null },
    alchPrices: { alchable: false, lowAlch: null, highAlch: null },
    useRequirements: { skills: {}, quests: [], notes: 'Untradeable XP lamp; 2x (500 XP each in any skill) rewarded from Stronghold of Player Safety chest.' },
    craftingRequirements: null,
    guideSources: ['Money Making: Stronghold of Security & Player Safety'],
    wikiUrl: 'https://runescape.wiki/w/Antique_lamp_(Stronghold_of_Player_Safety)'
  })
];

export const ITEMS_DICTIONARY = Object.fromEntries(
  ITEMS_LIST.map((item) => [item.id, item])
);

function normalizeKey(str = '') {
  return String(str)
    .toLowerCase()
    .replace(/\s*\+\s*/g, ' +')
    .replace(/['’]/g, "'")
    .replace(/[^a-z0-9+' -]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const ITEM_ALIASES = (() => {
  const map = new Map();
  for (const item of ITEMS_LIST) {
    map.set(normalizeKey(item.id), item.id);
    map.set(normalizeKey(item.name), item.id);
    for (const alias of item.aliases || []) {
      map.set(normalizeKey(alias), item.id);
    }
  }
  return map;
})();

/**
 * Resolves any item ID, canonical name, or registered alias to its dictionary entry.
 */
export function lookupItem(nameOrId) {
  if (!nameOrId) return null;
  if (ITEMS_DICTIONARY[nameOrId]) return ITEMS_DICTIONARY[nameOrId];
  const key = normalizeKey(nameOrId);
  const resolvedId = ITEM_ALIASES.get(key);
  if (resolvedId) return ITEMS_DICTIONARY[resolvedId];
  return null;
}

/**
 * Returns all items belonging to a given category (case-insensitive).
 */
export function getItemsByCategory(category) {
  const target = String(category || '').toLowerCase();
  return ITEMS_LIST.filter((item) => item.category.toLowerCase() === target);
}

/**
 * Searches items by name, alias, category, or guide source.
 */
export function searchItems(query = '') {
  const q = normalizeKey(query);
  if (!q) return ITEMS_LIST;
  return ITEMS_LIST.filter((item) => {
    if (normalizeKey(item.name).includes(q)) return true;
    if (normalizeKey(item.category).includes(q)) return true;
    if ((item.aliases || []).some((a) => normalizeKey(a).includes(q))) return true;
    if ((item.guideSources || []).some((s) => normalizeKey(s).includes(q))) return true;
    return false;
  });
}
