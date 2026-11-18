import { enrichSkillsData } from './skillMethodsData.js';
export { GLOBAL_RS3_MECHANICS } from './skillMechanicsData.js';
export { PVM_DATA, PVM_BRACKETS, TOP_F2P_LOOT_HIGHLIGHTS, TOP_F2P_AFK_SPOTS } from './pvmData.js';

export const GIM_ROLES = [
  {
    id: 'artisan-smith',
    title: 'Master Smith & Miner',
    badge: 'Gear Anchor',
    focus: 'Mining, Smithing, Combat',
    summary: 'Rushes 50 Mining & Smithing to outfit the entire group with Rune +3 weapons, armour, pickaxes, and hatchets via Group Storage.',
    milestones: [
      'Complete Knight\'s Sword after Doric\'s Tasks (skip 1–29 Smithing)',
      'Upgrade Ore Box at every tier (Bronze → Iron → Steel → Mithril → Adamant → Rune)',
      'Craft full Rune +3 sets & Rune Hatchets/Pickaxes for all teammates',
      'Smelt extra bars for group Fletching (arrowheads/darts) and Crafting'
    ]
  },
  {
    id: 'runecrafter-mage',
    title: 'Arcane & Jewellery Specialist',
    badge: 'Alch & Teleports',
    focus: 'Runecrafting, Magic, Crafting',
    summary: 'Rushes 55 Magic for High Level Alchemy and 50 Runecrafting (Runespan) for daily Vis Wax & group elemental/nature rune supply.',
    milestones: [
      'Train in Runespan (Wizard Finix) to 33+ RC quickly, then 50 RC for Rune Goldberg Machine',
      'Mine Gem Rocks at Al Kharid / Shilo border & craft Amulets of Power / Rings of Luck for the group',
      'Unlock 55 Magic to centralize all group Rune salvage & green d\'hide body alching',
      'Supply Law & Nature runes from Cockroach Soldiers / Wizard Tower / Ankous'
    ]
  },
  {
    id: 'ranger-fletcher',
    title: 'Fletcher & Woodcutter',
    badge: 'Ranged & Supply',
    focus: 'Woodcutting, Fletching, Ranged, Crafting',
    summary: 'Since Fletching is F2P in RS3, one member can funnel logs into bows and arrows up to Maple/Yew for the whole group.',
    milestones: [
      'Buy daily feather packs (10,000 feathers/day across Lumbridge, Port Sarim, Shantay Pass)',
      'Fletch headless arrows + Bronze→Adamant arrows for group Ranged training',
      'Tan cowhides/green dragonhides (bought or dropped) into Coifs, Bodies, Chaps, Vambraces',
      'Chop Willow & Maple logs (Daemonheim Resource Dungeon at 30 Dungeoneering)'
    ]
  },
  {
    id: 'chef-gatherer',
    title: 'Sustenance & Dungeoneer',
    badge: 'Food & Tokens',
    focus: 'Fishing, Cooking, Dungeoneering',
    summary: 'Keeps Group Storage stocked with Trout, Salmon, Lobster, and Swordfish while leading group Daemonheim floors.',
    milestones: [
      'Fly fish at Lumbridge / Gunnarsgrunn (Barbarian Village) for fast 1–50 Fishing/Cooking',
      'Transition to Musa Point / Karamja cages & harpoons for Lobsters and Swordfish',
      'Cook on ranges (Lumbridge Castle range has lower burn rate after Cook\'s Assistant)',
      'Lead 5-man Group Dungeoneering Complexity 6 floors for Gem Bag, Coal Bag, and Gravite 2h'
    ]
  }
];

const BASE_SKILLS_DATA = [
  {
    id: 'mining',
    name: 'Mining',
    category: 'Gathering',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '12k – 45k XP/hr',
    netGpHr: '+25k – +450k GP/hr',
    gpTrend: 'positive',
    defaultSellLocation: "High Level Alchemy (55 Magic, 60%) or Low Alch (21 Magic, 40%) on +1/+2/+3 smithed gear, or General Stores (30% flat rate — buys +1/+2/+3; specialty shops like Horvik's/Wayne's only buy base +0 stock). Sell cut gem jewellery at Grum's Gold Exchange.",
    ironmanGatheringNote: 'Self-contained gathering skill (0 external prep time once Pickaxe & Ore Box are upgraded). Click sparkling Rockertunities every ~15s and maintain stamina for +25–40% faster ore acquisition.',
    gimSynergy: 'Critical — Supplies all Copper/Tin, Iron, Coal, Mithril, Adamantite, Runite, Luminite, and Al Kharid Gems into Group Storage for Smithing and Crafting.',
    overview: 'RS3\'s Mining rework means rocks never deplete and stamina resets on every click or Rockertunity. An Ore Box stores 100–140 of each ore tier, drastically reducing banking trips for Ironmen.',
    prerequisites: [
      'Tool Belt Pickaxes upgraded every 10 levels (Bronze 1 → Iron 10 → Steel 20 → Mithril 30 → Adamant 40 → Rune +3 at 50)',
      'Ore Box crafted or smithed at each tier (Bronze → Rune; holds 100–140 per ore with achievements)',
      "Doric's Quest (15 Mining rec.) & The Knight's Sword (10 Mining)",
      'Gem Bag (2,000 DG Tokens) & Coal Bag (4,000 DG Tokens) from Daemonheim',
      '60 Mining to enter the Falador Mining Guild (bank & Artisans\' Workshop nearby)'
    ],
    quests: [
      { name: "Doric's Quest", xp: '1,300 Mining XP', req: 'None (15 Mining recommended)' },
      { name: 'Beneath Cursed Tides', xp: '2,000 Mining XP', req: '30 Mining + 30 in 7 other F2P skills' },
      { name: 'The Knight\'s Sword', xp: 'Unlocks Blurite & 29 Smithing', req: '10 Mining' }
    ],
    brackets: [
      {
        levels: '1–10',
        method: 'Copper & Tin Ore → Bronze Ore Box & Bronze Gear',
        prereqs: 'Bronze Pickaxe (on Tool Belt)',
        location: 'Burthorpe / Lumbridge SE Swamp',
        xpPerHour: '8k – 14k XP/hr',
        ironmanPrep: '0 min prep (self-gathered; craft Bronze Ore Box immediately)',
        gpPerHour: '+25,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Smelt & smith Bronze gear, then sell to Horvik's Armour Shop (Varrock) or Varrock General Store",
        notes: 'Mine ~60 Copper & 60 Tin first for Bronze Ore Box + Doric\'s Quest.'
      },
      {
        levels: '10–20',
        method: 'Iron Ore + Iron Ore Box',
        prereqs: '10 Mining, Iron Pickaxe, Doric\'s Quest',
        location: 'Varrock SW Mine / Dwarven Mine',
        xpPerHour: '14k – 20k XP/hr',
        ironmanPrep: '0 min prep (upgrade Iron Pickaxe & Iron Ore Box at 10 Smithing)',
        gpPerHour: '+45,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or Varrock General Store (30%) on Iron +1 Platebodies (Horvik's buys base +0 only)",
        notes: 'Complete The Knight\'s Sword at 10 Mining to skip directly to 29 Smithing.'
      },
      {
        levels: '20–30',
        method: 'Al Kharid Uncommon Gem Rocks & Coal',
        prereqs: '20 Mining, Steel Pickaxe, Gem Bag (2k DG Tokens)',
        location: 'Al Kharid North Mine / Dwarven Mine',
        xpPerHour: '18k – 25k XP/hr',
        ironmanPrep: '0 min prep (Gem Bag saves 80% of banking trips)',
        gpPerHour: '+85,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Cut Sapphires/Emeralds into Gold Jewellery & sell to Grum's Gold Exchange (Port Sarim) at 60% High Alch value",
        notes: 'Coal Bag (4k DG Tokens) doubles Coal capacity for Steel/Mithril smelting.'
      },
      {
        levels: '30–40',
        method: 'Mithril Ore & Coal',
        prereqs: '30 Mining, Mithril Pickaxe, Mithril Ore Box',
        location: 'Dwarven Mine / Varrock SW',
        xpPerHour: '22k – 29k XP/hr',
        ironmanPrep: '0 min prep (1:1 Coal to Mithril ratio)',
        gpPerHour: '+95,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or Falador General Store (30%) on Mithril +2 Platebodies (Wayne's Chains buys base +0 chainbodies only)",
        notes: 'Keep Mining Urns active in pocket slot for +20% bonus XP.'
      },
      {
        levels: '40–50',
        method: 'Adamantite Ore & Luminite',
        prereqs: '40 Mining, Adamant Pickaxe, Adamant Ore Box',
        location: 'Rimmington Mine (Addy) / Dwarven Mine (Luminite)',
        xpPerHour: '26k – 34k XP/hr',
        ironmanPrep: '0 min prep (Luminite is required 1:1 with Adamantite & Runite)',
        gpPerHour: '+150,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or General Store (30% flat rate) on Adamant +2 Platebodies (Horvik's rejects +2)",
        notes: 'Dwarven Mine Resource Dungeon (15 DG) has convenient rocks close to deposit box.'
      },
      {
        levels: '50–99',
        method: 'Runite + Luminite & Daily Shooting Stars',
        prereqs: '50 Mining (60 for Mining Guild), Rune Pickaxe +3, Rune Ore Box',
        location: 'Mining Guild (Falador) / Wilderness / Karamja',
        xpPerHour: '32k – 45k XP/hr',
        ironmanPrep: '0 min prep (daily 10 min Shooting Star grants 15 min Double Ore buff)',
        gpPerHour: '+300,000 – +450,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Smith Rune Platebodies +3 & High Alch (20,000 GP), Low Alch (13,333 GP), or General Store (10,000 GP at 30%; Scavvo's rejects +3)",
        notes: 'Use Shooting Star double-ore buff strictly on Runite rocks for peak GIM GP.'
      }
    ],
    tips: [
      'Click the sparkling rock ("Rockertunity") every time it moves for massive bonus progress and stamina refresh.',
      'Upgrade your Ore Box and Pickaxe +3 at every metal tier (10, 20, 30, 40, 50) — a Rune +3 Pickaxe is essential for 50–99.',
      'In Group Ironman, funnel ores to one designated Smith while Mining Urns (Crafting) grant +20% XP.'
    ]
  },
  {
    id: 'smithing',
    name: 'Smithing',
    category: 'Artisan',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '22k – 58k XP/hr (IM) | 155k/hr (Anvil)',
    netGpHr: '+450k GP/hr (Alch) / -320k GP/hr (Burial)',
    gpTrend: 'positive',
    defaultSellLocation: "High Level Alchemy (55 Magic, 20,000 GP per Rune +3), Low Alch (21 Magic, 13,333 GP), or General Stores (30% flat rate = 10,000 GP per Rune +3). Specialty shops (Horvik's / Wayne's / Scavvo's) only buy un-upgraded (+0) stocked items; Burial Armour yields 0 GP.",
    ironmanGatheringNote: 'Effective Ironman XP/hr includes ~35–42 minutes of mining ores + Luminite/Coal per ~18–25 minutes of smelting & anvil smithing (roughly 60% Mining / 40% Smithing split).',
    gimSynergy: 'Critical — Outfits the entire team with Tier 50 Rune +3 weapons, armour, pickaxes, and hatchets via Group Storage, and generates up to 700k GP/hr via High Alch.',
    overview: 'RS3\'s Smithing rework splits training into two paths: upgrading Platebodies to +3 for huge High Alch/shop profit, or destroying +3 sets on Burial Anvils at Falador Artisans\' Workshop for maximum XP at a net GP loss.',
    prerequisites: [
      "The Knight's Sword quest (10 Mining) — skips levels 1 to 29 Smithing",
      "What's Mine is Yours (5 Smithing) for Gofannon Amulet",
      'Mining 1–50+ (or Group Ironman Miner supplying Runite + Luminite)',
      '55 Magic for High Level Alchemy (or 21 Magic Low Alch / General Store at 30% for +1/+2/+3 gear)',
      'Artisans\' Workshop in SE Falador + Scroll of Efficiency (20k DG Tokens)'
    ],
    quests: [
      { name: "The Knight's Sword", xp: '12,725 Smithing XP (1 → 29)', req: '10 Mining' },
      { name: "What's Mine is Yours", xp: 'Smithing XP + Gofannon Amulet', req: '5 Smithing' },
      { name: 'Beneath Cursed Tides', xp: '2,000 Smithing XP', req: '30 Smithing + 30 in 7 skills' }
    ],
    brackets: [
      {
        levels: '1–29',
        method: "The Knight's Sword Quest Skip",
        prereqs: '10 Mining, 2 Iron Bars, Redberry Pie',
        location: 'Falador White Knights\' Castle / Asgarnian Ice Dungeon',
        xpPerHour: '38k XP/hr (20 min total)',
        ironmanPrep: '~15 min baking Redberry Pie, smelting 2 Iron Bars & mining Blurite',
        gpPerHour: '+15,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Keep spare Blurite items; sell base (+0) Bronze/Iron leftovers to Horvik's Armour Shop (Varrock) or General Store",
        notes: 'Never smith Bronze/Iron from 1–29; always do Knight\'s Sword after Doric\'s Quest.'
      },
      {
        levels: '29–40',
        method: 'Steel +1/+2 & Mithril +2 Platebodies',
        prereqs: '29 Smithing, Coal + Iron / Mithril Ore',
        location: 'Falador Artisans\' Workshop / Varrock West Anvil',
        xpPerHour: '20k – 28k XP/hr (IM) | 55k/hr (Anvil)',
        ironmanPrep: '~35 min mining Iron/Coal/Mithril per 25 min smithing',
        gpPerHour: '+75,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or General Store (30% flat rate) on +1/+2 gear (Wayne's Chains buys base +0 chainbodies only)",
        notes: 'Upgrade your Iron/Steel/Mithril Pickaxes & Hatchets for the team here.'
      },
      {
        levels: '30–50 (Burial XP)',
        method: 'Mithril & Adamant Burial Armour Sets',
        prereqs: '30–40 Smithing, Artisans\' Workshop Burial Anvils',
        location: 'Falador Artisans\' Workshop',
        xpPerHour: '38k – 48k XP/hr (IM) | 95k/hr (Anvil)',
        ironmanPrep: '~35 min mining Mithril/Addy + Luminite per 25 min burial smithing',
        gpPerHour: '-110,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Item Destroyed (Burial Anvil consumes armour for +100% XP bonus & Workshop Respect)',
        notes: 'Negative GP/hr represents lost alch/shop value + Coal/Luminite gathering opportunity cost.'
      },
      {
        levels: '40–50',
        method: 'Adamant +2 Platebodies & Gear',
        prereqs: '40 Smithing, Adamantite + Luminite Ore',
        location: 'Falador Artisans\' Workshop',
        xpPerHour: '26k – 32k XP/hr (IM) | 68k/hr (Anvil)',
        ironmanPrep: '~38 min mining Adamantite & Luminite per 22 min smithing',
        gpPerHour: '+160,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Level Alchemy (55 Magic, 60%), Low Alch (21 Magic, 40%), or General Store (30% flat rate — Horvik's rejects +2 gear)",
        notes: 'Craft Adamant Pickaxes +2 and Arrowheads for GIM Ranged.'
      },
      {
        levels: '50–99 (Profit Alch)',
        method: 'Rune Platebodies +3 (Alch / Profit Engine)',
        prereqs: '50–53 Smithing, Runite + Luminite, 55 Magic (High Alch)',
        location: 'Falador Artisans\' Workshop',
        xpPerHour: '28k – 35k XP/hr (IM) | 85k/hr (Anvil)',
        ironmanPrep: '~38 min mining Runite & Luminite (or Shooting Star buff) per 22 min smithing',
        gpPerHour: '+450,000 – +700,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Level Alchemy (20,000 GP each), Low Alch (13,333 GP), or General Store (10,000 GP at 30% — Scavvo's/Horvik's reject +3 gear)",
        notes: 'Primary F2P Group Ironman raw GP engine; funds all feather/rune shop runs.'
      },
      {
        levels: '50–99 (Burial Max XP)',
        method: 'Rune +3 Burial Armour Sets',
        prereqs: '50–55 Smithing, 96 Runite + 96 Luminite per set',
        location: 'Falador Artisans\' Workshop Burial Anvils',
        xpPerHour: '45k – 58k XP/hr (IM) | 155k/hr (Anvil)',
        ironmanPrep: '~42 min mining Runite & Luminite per 18 min burial smithing',
        gpPerHour: '-320,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Item Destroyed (Consumes ~80,000 GP of alchable Rune +3 armour per set)',
        notes: 'Fastest F2P Smithing XP/hr; use only once your group already has sufficient GP.'
      }
    ],
    tips: [
      'Unlock the Scroll of Efficiency (20k DG Tokens) before grinding 50–99 — it regularly saves Runite/Luminite bars.',
      'Reheat items on the forge whenever heat drops below 66% to maintain max Smithing progress per swing.',
      'Deposit extra Runite Bars into the Artisan Metal Bank so any furnace/anvil can access them.',
      'Specialty armour/weapon shops (Horvik\'s, Wayne\'s, Scavvo\'s) only buy un-upgraded (+0) items they natively stock — sell +1/+2/+3 gear via High Alch (60%), Low Alch (40%), or General Stores (30% flat rate).'
    ]
  },
  {
    id: 'attack',
    name: 'Attack',
    category: 'Combat',
    tier: 'Core Combat',
    maxF2pLevel: '99',
    peakXpHr: '25k – 85k XP/hr',
    netGpHr: '+25k – +450k GP/hr',
    gpTrend: 'positive',
    defaultSellLocation: "High Level Alchemy (55 Magic) on Rune Salvage/Scimitars, Zeke's Superior Scimitars (Al Kharid), Varrock Swordshop, or Edgeville/Burthorpe General Store.",
    ironmanGatheringNote: 'Weapons are 100% self-supplied via Smithing (up to Rune +3 T50) or Dungeoneering (Gravite 2h/Rapiers T55). Combat requires ~5 min fishing/cooking per hour for food at higher mobs.',
    gimSynergy: 'Medium — Group Smith supplies Rune +3 2h/Dual Wield weapons while Attack farming brings Rune Salvage, Herbs, and Runes into Group Storage.',
    overview: 'Attack determines Melee weapon tier unlocks and hit chance. In RS3, weapon accuracy scales sharply with tier, so upgrading from Steel → Mithril → Adamant → Rune +3 (50) → Gravite (55) is mandatory.',
    prerequisites: [
      'Vampyre Slayer quest (1 → 20 Attack skip)',
      'Smithed 2H or Dual-Wield Melee Weapons (Bronze 1 → Rune +3 at 50 Smithing)',
      'Gravite 2h Sword or Rapiers (40,000 DG Tokens at 55 Attack/DG)',
      'Combat Settings configured to grant Attack XP only',
      '55 Magic (optional) for on-the-spot High Level Alchemy at Cockroach Soldiers/Greater Demons'
    ],
    quests: [
      { name: 'Vampyre Slayer', xp: '4,825 Attack XP (1 → 20)', req: 'Garlic, Stake, Hammer' },
      { name: 'Beneath Cursed Tides', xp: '2,000 Attack XP + Vannaka\'s Sword', req: '30 Attack + 30 in 7 skills' },
      { name: 'The Death of Chivalry', xp: 'Scaling Combat Lamps (up to 25k+)', req: 'None (scales to level)' }
    ],
    brackets: [
      {
        levels: '1–20',
        method: 'Vampyre Slayer + Burthorpe Troll Brutes',
        prereqs: 'None (free Bronze/Iron weapon in Burthorpe)',
        location: 'Draynor Manor (Quest) / Burthorpe Troll Cave',
        xpPerHour: '25k – 40k XP/hr (including quest)',
        ironmanPrep: '2 min grabbing Garlic/Stake in Draynor + basic food',
        gpPerHour: '+25,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Burthorpe General Store (early gear/bones) or keep Guam/Marrentill herbs for Herblore',
        notes: 'Instant 1 → 20 Attack jump via Vampyre Slayer.'
      },
      {
        levels: '20–40',
        method: 'Al Kharid Warriors & Hill Giants',
        prereqs: '20 Attack, Steel/Mithril 2h Sword, Brass Key (Hill Giants)',
        location: 'Al Kharid Palace / Edgeville Dungeon',
        xpPerHour: '30k – 42k XP/hr',
        ironmanPrep: '5 min cooking Trout/Salmon (or 10 min smithing Mithril 2h)',
        gpPerHour: '+55,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Zeke's Superior Scimitars (Al Kharid), Varrock Swordshop, or Edgeville General Store",
        notes: 'Bank Big Bones from Hill Giants for Wilderness Chaos Altar Prayer training.'
      },
      {
        levels: '40–60',
        method: 'Cockroach Soldiers (AoE Melee)',
        prereqs: '40–50 Attack, Adamant/Rune +3 2h, 55 Magic rec.',
        location: 'Stronghold of Player Safety Dungeon (Edgeville)',
        xpPerHour: '45k – 65k XP/hr',
        ironmanPrep: '5 min food prep + Fire Staff & Nature Runes for High Alch',
        gpPerHour: '+350,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'High Level Alchemy (Rune Scimitars/Sq Shields/Medium & Large Rune Salvage) or Varrock Swordshop',
        notes: 'Drops Law, Death & Nature runes plus noted Mithril/Addy ores for your team.'
      },
      {
        levels: '60–99',
        method: 'Greater Demons / Deadly Red Spiders / Ankous',
        prereqs: '55+ Attack, Rune +3 2h or Gravite 2h (55), Protect Prayers rec.',
        location: 'Forinthry Dungeon / Varrock Sewers / Stronghold of Security',
        xpPerHour: '65k – 85k XP/hr',
        ironmanPrep: '5–8 min fishing/cooking Swordfish or Lobsters per hour',
        gpPerHour: '+250,000 – +450,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'High Level Alchemy on Rune Salvage/Weapons or Scavvo\'s Rune Store (Champions\' Guild)',
        notes: 'Deadly Red Spiders give peak 85k+ XP/hr with 0 drops; Greater Demons balance XP + High Alch GP.'
      }
    ],
    tips: [
      'Put Cleave, Hurricane, Quake, and Sever at the front of your Revolution bar for multi-target AoE XP.',
      'Save 40,000 Dungeoneering tokens for the Gravite 2h Sword (Tier 55 — BiS F2P melee weapon).',
      'Always bring a Gem Bag from Daemonheim when camping Cockroach Soldiers or Ankous.'
    ]
  },
  {
    id: 'strength',
    name: 'Strength',
    category: 'Combat',
    tier: 'Core Combat',
    maxF2pLevel: '99',
    peakXpHr: '25k – 90k XP/hr',
    netGpHr: '+30k – +380k GP/hr (or -15k/hr Max XP)',
    gpTrend: 'positive',
    defaultSellLocation: "High Level Alchemy (55 Magic) on Rune Salvage, Varrock Swordshop, Horvik's Armour Shop, or Lumbridge/Edgeville General Store.",
    ironmanGatheringNote: 'Requires ~5–10 min fishing/cooking Trout/Lobsters per combat hour when fighting aggressive mobs like Deadly Red Spiders or Greater Demons.',
    gimSynergy: 'Medium — Unlocks Dragon Slayer (18,650 XP) and boosts melee max hit for faster Giant Mole / KBD / Cockroach Soldier group clears.',
    overview: 'Strength increases melee ability damage and unlocks crucial AoE thresholds like Quake (37) and Hurricane (55). Prioritize Dragon Slayer early for a massive 18,650 Strength XP jump.',
    prerequisites: [
      'Dragon Slayer quest (32 Quest Points → 18,650 Strength XP)',
      '2H Melee Weapon (Mithril/Adamant/Rune +3 2h or Gravite 2h T55)',
      '37 Strength for Quake & 55 Strength for Hurricane AoE abilities',
      'Combat XP Settings toggled exclusively to Strength'
    ],
    quests: [
      { name: 'Dragon Slayer', xp: '18,650 Strength XP', req: '32 Quest Points + defeat Elvarg' },
      { name: 'Beneath Cursed Tides', xp: '2,000 Strength XP', req: '30 Strength + 30 in 7 skills' },
      { name: 'Blood Pact / Death of Chivalry', xp: 'Scaling Combat XP Lamps', req: 'None' }
    ],
    brackets: [
      {
        levels: '1–33',
        method: 'Burthorpe Trolls / Cows + Dragon Slayer Skip',
        prereqs: 'None (32 QP for Dragon Slayer at ~30 Combat)',
        location: 'Burthorpe Troll Cave / Lumbridge Cow Pen / Crandor',
        xpPerHour: '25k – 45k XP/hr',
        ironmanPrep: '5 min starter gear + Anti-Dragon Shield (Duke Horacio)',
        gpPerHour: '+30,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Lumbridge General Store (early drops) or tan Cowhides at Al Kharid for Crafting XP',
        notes: 'Dragon Slayer instantly rockets early Strength straight past level 33.'
      },
      {
        levels: '33–55',
        method: 'Hill Giants & Moss Giants',
        prereqs: '33+ Strength, Adamant/Rune +3 2h (at 40/50 Atk)',
        location: 'Edgeville Dungeon / Varrock Sewers',
        xpPerHour: '40k – 55k XP/hr',
        ironmanPrep: '5 min Trout/Salmon food prep',
        gpPerHour: '+70,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Varrock Swordshop, Horvik's Armour Shop, or Edgeville General Store",
        notes: 'Use Cleave + Quake (37 Str) to cleave 2–3 Giants simultaneously.'
      },
      {
        levels: '55–75',
        method: 'Cockroach Soldiers (Hurricane + Quake AoE)',
        prereqs: '55 Strength (Hurricane), 50+ Attack, Rune +3 / Gravite 2h',
        location: 'Stronghold of Player Safety Dungeon',
        xpPerHour: '55k – 72k XP/hr',
        ironmanPrep: '5 min food + Fire Staff & Nature Runes',
        gpPerHour: '+380,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'High Level Alchemy (Medium/Large Rune Salvage, Rune Scimitars) or Varrock Swordshop',
        notes: 'Hurricane hits all adjacent targets twice; massive GP + XP balance.'
      },
      {
        levels: '75–99 (Max XP)',
        method: 'Deadly Red Spiders (Pure AFK XP)',
        prereqs: '70+ Stats, Rune +3 / Gravite 2h, Swordfish/Lobsters',
        location: 'Varrock Sewers (Red Spider Room)',
        xpPerHour: '75k – 90k XP/hr',
        ironmanPrep: '10 min fishing & cooking Lobsters/Swordfish per hour',
        gpPerHour: '-15,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: '0 Drops (Spiders only drop Red Spiders\' Eggs — negative GP due to food & armour degradation on Gravite)',
        notes: 'Switch to Greater Demons/Ankous (+320k GP/hr via High Alch) if you need GP.'
      }
    ],
    tips: [
      'Wait to complete Dragon Slayer until your Attack is 30–40 so Elvarg is smooth and 18,650 XP pushes you toward 40+ Strength.',
      'Keep Gravite 2h repaired at Bob\'s Brilliant Axes in Lumbridge (costs coins, or use Rune +3 2h for 0 upkeep).'
    ]
  },
  {
    id: 'defence',
    name: 'Defence',
    category: 'Combat',
    tier: 'Core Combat',
    maxF2pLevel: '99',
    peakXpHr: '25k – 85k XP/hr',
    netGpHr: '+25k – +350k GP/hr (or -10k/hr Hellhounds)',
    gpTrend: 'positive',
    defaultSellLocation: "High Level Alchemy (55 Magic) on Rune Salvage/Drops, Louie's Armoured Legs (Al Kharid), Cassie's Shield Shop (Falador), or Horvik's Armour Shop (Varrock).",
    ironmanGatheringNote: 'Can be trained using AoE Magic (0 rune consumption on Revolution abilities!) or 2H Melee. Food/supply prep takes ~5 min/hr.',
    gimSynergy: 'High — Level 50 Defence lets teammates wear full Rune +3, Green D\'hide, and Mystic armour crafted or bought within the group.',
    overview: 'Defence can be trained via Melee, Magic, or Ranged by switching your Combat XP Settings. Pair 48 Defence (Resonance ability) with a Rune Sq/Kite Shield +3 to heal from boss hits for free.',
    prerequisites: [
      'Dragon Slayer quest (32 QP → 18,650 Defence XP + unlocks Rune Platebody, Green D\'hide Body & Mystic Robe Top)',
      'The Death of Chivalry quest (scaling combat XP lamps)',
      'Smithed Armour sets (Steel → Rune +3) or Champions\' Guild Mystic/Green D\'hide (32 QP)',
      'Combat XP Settings toggled to Defence (Magic AoE is fastest in F2P!)'
    ],
    quests: [
      { name: 'Dragon Slayer', xp: '18,650 Defence XP', req: '32 Quest Points' },
      { name: 'The Death of Chivalry', xp: 'Combat XP Lamps + 2,500 Prayer', req: 'None (scales to level)' },
      { name: 'A Soul\'s Bane / Shadow over Ashdale', xp: 'Scaling Combat XP Lamps', req: 'None' }
    ],
    brackets: [
      {
        levels: '1–33',
        method: 'Burthorpe Trolls + Dragon Slayer Reward',
        prereqs: 'None (32 QP for Dragon Slayer)',
        location: 'Burthorpe Troll Cave / Crandor',
        xpPerHour: '25k – 42k XP/hr',
        ironmanPrep: '3 min basic armour/food prep',
        gpPerHour: '+25,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Burthorpe General Store or Lumbridge General Store',
        notes: 'Complete Dragon Slayer immediately to unlock Tier 40/50 chestplates.'
      },
      {
        levels: '33–50',
        method: 'Al Kharid Warriors / Moss Giants',
        prereqs: '33+ Defence, Air Bolt or Adamant/Rune Weapon',
        location: 'Al Kharid Palace / Varrock Sewers',
        xpPerHour: '38k – 50k XP/hr',
        ironmanPrep: '5 min Trout/Salmon prep',
        gpPerHour: '+65,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Louie's Armoured Legs Bazaar (Al Kharid), Horvik's (Varrock), or Edgeville General Store",
        notes: 'At 48 Defence, unlock Resonance for free emergency healing during bosses.'
      },
      {
        levels: '50–70',
        method: 'Cockroach Soldiers (AoE Magic / Melee)',
        prereqs: '50 Defence (Rune +3 / Mystic / D\'hide), 55 Magic rec.',
        location: 'Stronghold of Player Safety Dungeon',
        xpPerHour: '52k – 68k XP/hr',
        ironmanPrep: '5 min food + Nature Runes/Fire Staff',
        gpPerHour: '+350,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Level Alchemy (Rune Salvage/Sq Shields) or Cassie's Shield Shop (Falador)",
        notes: 'Training Defence with Magic Dragon Breath + Chain out-damages single-target melee.'
      },
      {
        levels: '70–99',
        method: 'Greater Demons (GP) or Hellhounds (AFK XP)',
        prereqs: '70+ Defence, Gravite Weapon (55), Protect from Melee (43 Prayer)',
        location: 'Forinthry Dungeon (Greater Demons / Hellhounds)',
        xpPerHour: '65k – 85k XP/hr',
        ironmanPrep: '8 min cooking Lobsters/Swordfish per combat hour',
        gpPerHour: '+300,000 GP/hr (Demons) / -10,000 GP/hr (Hellhounds)',
        gpTrend: 'positive',
        whereToSell: 'Greater Demons: High Alch Rune Salvage. Hellhounds: 0 alch drops (Gold Charms/Bones only = food cost loss)',
        notes: 'Farm Greater Demons for Rune items + Accursed Ashes; avoid Hellhounds unless purely AFKing XP.'
      }
    ],
    tips: [
      'Buy Blue Wizard / Green D\'hide / Rune Chainbody from the Champions\' Guild (32 QP) if your Smith hasn\'t reached 50 yet.',
      'Equip a Shield Switch for Resonance (48 Defence) against Elvarg, Giant Mole, and King Black Dragon.'
    ]
  },
  {
    id: 'constitution',
    name: 'Constitution',
    category: 'Combat',
    tier: 'Core Combat',
    maxF2pLevel: '99',
    peakXpHr: '10k – 32k XP/hr (Passive)',
    netGpHr: '+25k – +450k GP/hr',
    gpTrend: 'positive',
    defaultSellLocation: "Follows active combat style — High Level Alchemy (55 Magic) on Rune Salvage/Weapons, Grum's Gold Exchange (Port Sarim) for gems, or Varrock Swordshop.",
    ironmanGatheringNote: 'Levels passively at 33% of all combat XP (Attack, Strength, Defence, Magic, Ranged, Necromancy). No separate prep beyond combat food (~5 min/hr).',
    gimSynergy: 'Medium — Higher Constitution increases base Life Points (up to 9,900 base HP) and boosts food healing efficiency for group bossing.',
    overview: 'Constitution levels alongside every combat skill you train. Unlocking Level 5 Archaeology for the Font of Life relic (+500 LP) and warming up at a Bonfire gives huge early survivability in F2P.',
    prerequisites: [
      'Level 5 Archaeology → Font of Life Monolith Relic (+500 permanent Max Life Points in F2P!)',
      '52 Constitution + 52 Magic to unlock Dragon Breath (best F2P AoE Magic ability)',
      '5x Maple/Willow Logs burned on a Bonfire for temporary +5% Max HP bossing buff',
      'Active training in Attack, Strength, Defence, Magic, Ranged, or Necromancy'
    ],
    quests: [
      { name: 'The Blood Pact', xp: 'Early Combat Lamps', req: 'None' },
      { name: 'Shadow over Ashdale', xp: '3x 1,250 Combat Lamps + 2,500 Any Lamp', req: 'None' },
      { name: 'The Death of Chivalry', xp: 'Scaling Combat XP Lamps', req: 'None' }
    ],
    brackets: [
      {
        levels: '10–30',
        method: 'Early Questing & Burthorpe Troll Cave',
        prereqs: 'Level 5 Archaeology (Font of Life Relic)',
        location: 'Burthorpe Troll Cave / Quest Locations',
        xpPerHour: '10k – 15k Constitution XP/hr',
        ironmanPrep: '10 min Archaeology tutorial for +500 HP boost',
        gpPerHour: '+25,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Burthorpe General Store',
        notes: 'Font of Life (+500 HP) doubles your effective survivability at level 10–30.'
      },
      {
        levels: '30–52',
        method: 'Hill Giants & Moss Giants (AoE Combat)',
        prereqs: 'Tier 30–40 Weapons, Brass Key',
        location: 'Edgeville Dungeon / Varrock Sewers',
        xpPerHour: '14k – 20k Constitution XP/hr',
        ironmanPrep: '5 min cooking Trout/Salmon',
        gpPerHour: '+75,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Varrock Swordshop or Aubury's Rune Shop (runes)",
        notes: 'Reach 52 Constitution alongside 52 Magic to unlock Dragon Breath.'
      },
      {
        levels: '52–75',
        method: 'Cockroach Soldiers (Dragon Breath + Cleave AoE)',
        prereqs: '52 Constitution, Tier 50 Weapons, 55 Magic rec.',
        location: 'Stronghold of Player Safety Dungeon',
        xpPerHour: '20k – 26k Constitution XP/hr',
        ironmanPrep: '5 min food + Fire Staff & Nature Runes',
        gpPerHour: '+350,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'High Level Alchemy (Rune Salvage) or Varrock Swordshop',
        notes: 'Passive Constitution XP builds automatically while farming GP & Runes.'
      },
      {
        levels: '75–99',
        method: 'Ankous, Greater Demons & Deadly Red Spiders',
        prereqs: 'Tier 55 Gravite Weapon, Swordfish/Lobsters',
        location: 'Forinthry Dungeon / Stronghold of Security / Varrock Sewers',
        xpPerHour: '25k – 32k Constitution XP/hr',
        ironmanPrep: '8 min fishing/cooking Swordfish per hour',
        gpPerHour: '+300,000 – +450,000 GP/hr (Demons/Ankous)',
        gpTrend: 'positive',
        whereToSell: "High Alch Rune drops + Grum's Gold Exchange (Port Sarim) for Uncut Gems",
        notes: 'Use Regenerate ability out of combat to heal without eating food.'
      }
    ],
    tips: [
      'Activate the Font of Life Archaeology Relic at level 5 Archaeology — it works permanently in F2P!',
      'Warm yourself at a Bonfire by adding 5 logs before fighting Elvarg, Giant Mole, or King Black Dragon for a Max HP boost.'
    ]
  },
  {
    id: 'magic',
    name: 'Magic',
    category: 'Combat',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '25k – 95k XP/hr',
    netGpHr: '+120k – +750k GP/hr (or -65k/hr Splashing)',
    gpTrend: 'positive',
    defaultSellLocation: 'High Level Alchemy (55 Magic) converts Rune +3 & Salvage straight into Coins! Pre-55 drops go to Varrock Swordshop, Aubury\'s Rune Shop (Varrock), or Edgeville General Store.',
    ironmanGatheringNote: 'Revolution combat abilities consume ZERO runes! Only auto-attacks, High Alchemy (1 Nature Rune), and non-combat spells use runes (bought daily from Aubury in Varrock & Carwen in Burthorpe, or dropped by Cockroaches/Ankous).',
    gimSynergy: 'Critical — 55 Magic unlocks High Level Alchemy for the entire GIM team, turning smithed Rune +3 & PvM salvage into pure GP.',
    overview: 'Magic is the single highest-priority combat skill for F2P Ironmen. Abilities cast via Revolution consume zero runes, making Air Strike/Bolt/Blast practically free, while 55 Magic unlocks High Level Alchemy.',
    prerequisites: [
      'Imp Catcher (875 XP + Amulet of Accuracy) & Witch\'s Potion (325 XP)',
      'Swept Away + talk to Apprentice Clara in Burthorpe (+2,500 Magic XP)',
      'Elemental Staves (Staff of Air/Fire from Zaff in Varrock for 1,500 GP)',
      '52 Magic & Constitution for Dragon Breath; 55 Magic for High Level Alchemy',
      'Gravite Staff (40,000 DG Tokens at 55 Magic/DG — BiS F2P Magic Weapon)',
      'Daily Rune Shop Runs (Aubury in Varrock, Carwen in Burthorpe, Betty in Port Sarim)'
    ],
    quests: [
      { name: 'Imp Catcher', xp: '875 Magic XP + Amulet of Accuracy', req: '4 Coloured Beads' },
      { name: "Witch's Potion", xp: '325 Magic XP', req: 'None' },
      { name: 'Swept Away (Clara Bonus)', xp: '2,500 Magic XP (after quest)', req: 'Enchanted Broom' }
    ],
    brackets: [
      {
        levels: '1–17',
        method: 'Quests + Air Strike at Burthorpe Trolls',
        prereqs: 'Free Air Staff (Burthorpe/Diango), 50 Air Runes',
        location: 'Burthorpe Troll Cave / Lumbridge',
        xpPerHour: '25k – 38k XP/hr',
        ironmanPrep: '2 min claiming Air Staff & completing Imp Catcher / Witch\'s Potion',
        gpPerHour: '+20,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Burthorpe General Store (Troll drops)',
        notes: 'Revolution abilities use 0 Air Runes; only carry ~100 Air Runes for initial auto-attacks.'
      },
      {
        levels: '17–40',
        method: 'Air/Fire Bolt (Chain AoE) at Hill Giants or Al Kharid Warriors',
        prereqs: '17 Magic, Staff of Air/Fire (1,500 GP at Zaff), Chaos Runes',
        location: 'Edgeville Dungeon / Al Kharid Palace',
        xpPerHour: '38k – 52k XP/hr',
        ironmanPrep: '2 min buying Fire/Air Staff from Zaff + ~50 Chaos Runes from Aubury',
        gpPerHour: '+60,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Edgeville General Store, Varrock Swordshop, or Aubury's Rune Shop",
        notes: 'Craft Spider Silk armour (20 Magic/Crafting) or Batwing (30).'
      },
      {
        levels: '40–55',
        method: 'Air/Fire Blast at Cockroach Soldiers or Lesser Demons',
        prereqs: '41 Magic, Batwing/Mystic gear, Death Runes (~50/hr)',
        location: 'Stronghold of Player Safety / Karamja Volcano',
        xpPerHour: '52k – 68k XP/hr',
        ironmanPrep: '5 min food prep + Death Runes (Cockroach Soldiers drop Death/Law/Nature)',
        gpPerHour: '+220,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Varrock Swordshop / Horvik's Armour Shop until 55 Magic, then hold Rune Salvage to High Alch",
        notes: 'Rush 55 Magic here as fast as possible for High Level Alchemy.'
      },
      {
        levels: '55–99 (Alch Engine)',
        method: 'High Level Alchemy + Diamond/Ruby Enchanting (Non-Combat)',
        prereqs: '55 Magic, Staff of Fire, Nature Runes (Shops/Cockroaches)',
        location: 'Anywhere (While mining, agility, or standing at Bank/Anvil)',
        xpPerHour: '55k – 65k XP/hr',
        ironmanPrep: 'Depends on GIM Smithing/PvM alchables + Nature Runes (350 GP/rune or PvM drops)',
        gpPerHour: '+450,000 – +750,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Direct Coin Conversion (High Level Alchemy generates 60% item value in pure GP)',
        notes: 'Zero-time skill: cast High Alch between Mining/Fishing/Woodcutting ticks or quests.'
      },
      {
        levels: '55–99 (Curse/Tele)',
        method: 'Splashing Curse / Confuse + Varrock/Falador Teleports',
        prereqs: '19–55 Magic, Full Plate Armour (for -Magic accuracy splash), Body/Law Runes',
        location: 'Lumbridge Dummies / Edgeville Bank',
        xpPerHour: '60k – 75k XP/hr',
        ironmanPrep: '5 min/day buying Body, Law & Elemental Runes from Aubury/Carwen',
        gpPerHour: '-65,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: '0 Drops (Consumes ~1,000 Law/Body Runes per hour from NPC Rune Shops)',
        notes: 'Fast non-combat AFK/spam XP when you have surplus GP from High Alching.'
      },
      {
        levels: '55–99 (Max Combat)',
        method: 'Air/Fire Blast (Dragon Breath + Chain) at Ankous / Cockroaches',
        prereqs: '55+ Magic, Gravite Staff (40k DG Tokens), Mystic/Starfury Armour',
        location: 'Stronghold of Security / Stronghold of Player Safety',
        xpPerHour: '75k – 95k XP/hr',
        ironmanPrep: '5 min food + ~100 Fire/Death Runes + Nature Runes for on-site High Alch',
        gpPerHour: '+380,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'High Level Alchemy on the spot for Rune Salvage & Rune drops',
        notes: 'Highest F2P Magic XP/hr while simultaneously stocking Law, Death & Nature runes.'
      }
    ],
    tips: [
      'Always keep your Revolution bar full of Basic & Threshold Magic abilities so auto-attacks almost never fire (saving 95% of your runes).',
      'Buy Mystic Robes from the Champions\' Guild (32 QP) or craft Spider Silk (20) / Batwing (30) / Mystic (50).'
    ]
  },
  {
    id: 'ranged',
    name: 'Ranged',
    category: 'Combat',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '25k – 85k XP/hr',
    netGpHr: '+20k – +450k GP/hr',
    gpTrend: 'positive',
    defaultSellLocation: "High Level Alchemy (55 Magic) on Rune Salvage, Brian's Archery Supplies (Rimmington), Lowe's Archery Emporium (Varrock), or Horvik's Armour Shop.",
    ironmanGatheringNote: 'Ranged abilities consume ZERO arrows! A single batch of 500–1,000 fletched arrows lasts weeks. Preparation is ~10–15 min fletching tiered shortbows + buying Green D\'hide after Dragon Slayer.',
    gimSynergy: 'High — Powered by group Fletching (Magic Shortbow & Rune Arrows) and essential for safespotting King Black Dragon and Giant Mole.',
    overview: 'Since Fletching is F2P in RS3, Ironmen can self-craft every shortbow up to Magic Shortbow (50) and arrows up to Rune, before upgrading to the Tier 55 Gravite Shortbow from Dungeoneering.',
    prerequisites: [
      'Fletched Shortbows (Normal 1 → Oak 20 → Willow 30 → Maple 40 → Magic 50) + 500 Arrows',
      'Gravite Shortbow (40,000 DG Tokens at 55 Ranged/DG — BiS F2P Bow)',
      'Dragon Slayer quest (32 QP) to equip & buy Green Dragonhide Body from Oziach in Edgeville',
      'Valaine\'s Shop (Champions\' Guild, 32 QP) for Green D\'hide Chaps & Vambraces'
    ],
    quests: [
      { name: 'Shadow over Ashdale', xp: '3x 1,250 Combat Lamps + 2,500 Lamp', req: 'None' },
      { name: 'The Death of Chivalry', xp: 'Scaling Combat XP Lamps', req: 'None' },
      { name: 'The Blood Pact', xp: 'Early Ranged XP + Kayle\'s Chargebow (no arrows!)', req: 'None (in Lumbridge)' }
    ],
    brackets: [
      {
        levels: '1–20',
        method: 'Kayle\'s Chargebow at Burthorpe Trolls / Cows',
        prereqs: 'The Blood Pact (quick 3 min quest for Chargebow with infinite ammo!)',
        location: 'Burthorpe Troll Cave / Lumbridge',
        xpPerHour: '25k – 35k XP/hr',
        ironmanPrep: '3 min completing The Blood Pact for Kayle\'s Chargebow',
        gpPerHour: '+20,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Burthorpe General Store or tan Cowhides at Al Kharid',
        notes: 'Chargebow fires magical bolts needing 0 arrows until level 20.'
      },
      {
        levels: '20–40',
        method: 'Oak/Willow Shortbow + Iron/Steel Arrows at Hill & Moss Giants',
        prereqs: '20–30 Ranged & Fletching, Carapace/Studded Armour',
        location: 'Edgeville Dungeon / Varrock Sewers',
        xpPerHour: '36k – 50k XP/hr',
        ironmanPrep: '10 min fletching Oak/Willow Shortbow + ~500 arrows',
        gpPerHour: '+65,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Edgeville General Store, Varrock Swordshop, or Grum's Gold Exchange (gems)",
        notes: 'Use Ricochet & Bombardment (at 50) for multi-target AoE Ranged XP.'
      },
      {
        levels: '40–60',
        method: 'Maple/Magic Shortbow + Green D\'hide at Cockroach Soldiers',
        prereqs: '40–50 Ranged, Dragon Slayer (for Green D\'hide Body), Magic Shortbow (50)',
        location: 'Stronghold of Player Safety Dungeon',
        xpPerHour: '50k – 68k XP/hr',
        ironmanPrep: '15 min fletching Magic Shortbow + buying Green D\'hide at Champions\' Guild/Oziach',
        gpPerHour: '+340,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Level Alchemy on Rune Salvage or Brian's Archery Supplies / Horvik's",
        notes: 'Safespotting Cockroach Soldiers saves food while stacking Runes & Salvage.'
      },
      {
        levels: '60–99',
        method: 'Gravite Shortbow (T55) at Greater Demons / Ankous / Waterfiends',
        prereqs: '55+ Ranged, Gravite Shortbow (40k DG Tokens), Rune Arrows',
        location: 'Forinthry Dungeon / Stronghold of Security',
        xpPerHour: '65k – 85k XP/hr',
        ironmanPrep: '5 min Swordfish/Lobster food prep per combat hour',
        gpPerHour: '+300,000 – +450,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'High Level Alchemy on Rune Salvage & Weapon Drops',
        notes: 'Equip Fragmentation Shot and Corruption/Snapshot on Revolution.'
      }
    ],
    tips: [
      'Do The Blood Pact in Lumbridge Graveyard immediately on Day 1 for Kayle\'s Chargebow (Tier 5–20 with infinite ammo).',
      'Like Magic, Ranged abilities consume 0 arrows — fletching 1,000 Adamant or Rune arrows will last your entire team.'
    ]
  },
  {
    id: 'prayer',
    name: 'Prayer',
    category: 'Combat',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '14k – 28k XP/hr (IM) | 85k/hr (Altar)',
    netGpHr: '-15k – -20k GP/hr (Altar) / +280k/hr (Combat)',
    gpTrend: 'negative',
    defaultSellLocation: 'Bones & Ashes are consumed on the Wilderness Chaos Altar for 350% XP (net negative GP). During passive combat Prayer (Greater Demons + Urns), High Alch Rune drops for +280k GP/hr.',
    ironmanGatheringNote: 'Effective Ironman Prayer XP/hr is heavily bottlenecked by bone gathering (~40 min killing Hill/Moss Giants or collecting Boneyard bones per ~20 min offering on the Wilderness Chaos Altar).',
    gimSynergy: 'High — Reaching 43 Prayer unlocks Protect from Magic (37), Missiles (40), and Melee (43), cutting boss damage by 50–100% for the group.',
    overview: 'Never bury Big Bones raw! In RS3, Wilderness PvP is opt-in (stay opted out via Vala at Edgeville border), letting F2P Ironmen safely offer Big Bones on the Level 12 Wilderness Chaos Temple Altar for 350% XP.',
    prerequisites: [
      'The Restless Ghost (1,125 XP + 5 Ancient Bones = 2,125 total XP)',
      'One Piercing Note (2,000 Prayer XP + Illuminated God Book)',
      'Swept Away (10 Goulash lamps → ~26–28 Prayer!) & The Death of Chivalry (2,500 XP)',
      'Wilderness PvP Opt-Out confirmed with Vala (Edgeville border) — safe Chaos Temple Altar!',
      'Impious/Accursed Prayer Urns (Crafting) & Bonecrusher (34k DG Tokens at 21 Prayer)'
    ],
    quests: [
      { name: 'The Restless Ghost', xp: '1,125 XP + 5 Ancient Bones (1,000 XP)', req: 'None' },
      { name: 'One Piercing Note', xp: '2,000 Prayer XP + Illuminated God Book', req: 'None' },
      { name: 'Swept Away', xp: '10 Bowls of Goulash (choose Prayer XP!)', req: 'None' },
      { name: 'The Death of Chivalry', xp: '2,500 Prayer XP + Combat Lamps', req: 'None' }
    ],
    brackets: [
      {
        levels: '1–28',
        method: '4-Quest Prayer Rush (Zero Bone Grinding)',
        prereqs: 'None',
        location: 'Lumbridge / Al Kharid Abbey / Draynor / Black Knights\' Fortress',
        xpPerHour: '18k – 25k XP/hr (~45 min total)',
        ironmanPrep: '0 item prep — all puzzle items provided inside quests',
        gpPerHour: '+10,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Keep Illuminated God Book (+4 Prayer & +3 All Style Pocket Slot)',
        notes: 'Skips 1 → ~28 Prayer without burying a single bone.'
      },
      {
        levels: '28–43',
        method: 'Big Bones (Hill/Moss Giants) → Wilderness Chaos Altar',
        prereqs: '28 Prayer, Brass Key, Wilderness PvP Opted-Out (Vala)',
        location: 'Edgeville Dungeon (Gather) → Lvl 12 Chaos Temple (Offer)',
        xpPerHour: '16k – 24k XP/hr (IM) | 75k/hr (Altar)',
        ironmanPrep: '~40 min farming Big Bones at Hill/Moss Giants per 20 min Chaos Altar offering',
        gpPerHour: '-15,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Consumed on Altar (0 GP return + minor food cost; altar gives 52.5 XP per Big Bone)',
        notes: 'Bank directly with Banker npc right outside the Level 12 Chaos Temple!'
      },
      {
        levels: '43–99 (Active Altar)',
        method: 'Wilderness Boneyard Big Bones → Chaos Temple Altar',
        prereqs: '43 Prayer (Protect Melee), PvP Opted-Out',
        location: 'Wilderness Boneyard (Lvl 22) → Chaos Temple (Lvl 12)',
        xpPerHour: '22k – 28k XP/hr (IM) | 85k/hr (Altar)',
        ironmanPrep: 'Continuous loop (pick up 28 Big Bones in 90s at Boneyard & run south to Altar)',
        gpPerHour: '-20,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Consumed on Altar (Forfeits ~500 GP/bone sale value for 3.5x Prayer XP)',
        notes: 'Avoid carrying a Demonic Skull so you remain 100% safe from PvP.'
      },
      {
        levels: '43–99 (Passive PvM)',
        method: 'Greater Demons (Accursed Ashes + Prayer Urns + Bonecrusher)',
        prereqs: 'Crafting (Accursed Urns + Air Rune) &/or Bonecrusher (34k DG Tokens)',
        location: 'Forinthry Dungeon / Karamja Volcano',
        xpPerHour: '12k – 18k Prayer XP/hr + 65k Combat XP/hr',
        ironmanPrep: '5 min crafting Accursed Prayer Urns + Air Runes',
        gpPerHour: '+280,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'High Level Alchemy on Greater Demon Rune Salvage & Armour drops',
        notes: 'Best passive Prayer XP while making strong High Alch profit.'
      }
    ],
    tips: [
      'Always verify with Vala at the Edgeville Wilderness wall that your PvP flag is OFF before using the Chaos Altar.',
      'Equip an Accursed Prayer Urn while killing Greater Demons — they auto-scatter ashes and teleport away for +20% XP.'
    ]
  },
  {
    id: 'fletching',
    name: 'Fletching',
    category: 'Artisan',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '22k – 48k XP/hr (IM) | 110k/hr (Active)',
    netGpHr: '+30k – +220k GP/hr (Bows) / -60k GP/hr (Shafts)',
    gpTrend: 'positive',
    defaultSellLocation: "High Level Alchemy (55 Magic) on Maple/Yew/Magic Shieldbows (384 / 768 / 1,536 GP), Brian's Archery Supplies (Rimmington), Lowe's Archery Emporium (Varrock), or Dargaud's Bow and Arrows (Burthorpe).",
    ironmanGatheringNote: 'Effective Ironman XP/hr factors in ~25–30 min chopping Logs (Woodcutting) + ~15 min picking/spinning Flax in Burthorpe/Taverley + 2 min daily Feather Pack runs per ~15–20 min Fletching.',
    gimSynergy: 'High — Fletching is fully F2P in RS3! One GIM player supplies Magic Shortbows (50) and Rune Arrows (75) for the whole team while profiting via High Alch.',
    overview: 'RS3 made Fletching a full Free-to-Play skill up to Magic Bows and Rune Arrows. Combining daily Feather Packs (10,000/day), Daemonheim Maples (30 DG), and Burthorpe Flax creates a strong Ironman profit & Ranged supply loop.',
    prerequisites: [
      'Daily Feather Pack Shop Runs: Hank (Lumbridge Swamp) & Gerry (Port Sarim) — 10,000 feathers/day at 6 GP each',
      'Woodcutting 1–75 + 30 Dungeoneering (Daemonheim Maple Resource Dungeon)',
      '10 Crafting to spin Flax into Bowstrings (pick Flax in Burthorpe/Taverley or Lumbridge)',
      'Smithing 1–75 (optional) for Bronze → Rune Arrowheads',
      '55 Magic for High Level Alchemy on Maple/Yew/Magic Shieldbows'
    ],
    quests: [
      { name: 'Shadow over Ashdale', xp: '2,500 XP Any-Skill Lamp', req: 'None' },
      { name: 'Gower Quest', xp: 'Multiple Scaling XP Lamps', req: '34 Quest Points' }
    ],
    brackets: [
      {
        levels: '1–20',
        method: 'Arrow Shafts & Headless Arrows',
        prereqs: '1–15 Woodcutting, Knife on Tool Belt, Feather Packs',
        location: 'Lumbridge / Burthorpe Bank',
        xpPerHour: '25k – 35k XP/hr (IM) | 75k/hr (Active)',
        ironmanPrep: '~20 min chopping Normal Logs + 2 min buying 10,000 Feathers (60k GP)',
        gpPerHour: '-60,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Keep Headless Arrows for Bronze–Rune Arrows (costs 6 GP/feather at Hank/Gerry Fishing Shops)',
        notes: 'Do not sell headless arrows — store them in Group Storage for Arrowheads.'
      },
      {
        levels: '20–35',
        method: 'Oak Shortbows (20) & Oak Shieldbows (25)',
        prereqs: '20 Fletching, 15 Woodcutting, 10 Crafting (Bowstrings)',
        location: 'Draynor Village Bank / Burthorpe Spinning Wheel',
        xpPerHour: '22k – 28k XP/hr (IM) | 60k/hr (Active)',
        ironmanPrep: '~25 min chopping Oaks + ~15 min picking/spinning Flax per 20 min fletching',
        gpPerHour: '+30,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Brian's Archery Supplies (Rimmington) or Lowe's Archery Emporium (Varrock) at 60% specialty value",
        notes: 'Sell strung bows directly to Brian\'s Archery Supplies to avoid wasting Nature Runes.'
      },
      {
        levels: '35–55',
        method: 'Willow Shortbows (35) & Willow Shieldbows (40)',
        prereqs: '35 Fletching, 30 Woodcutting, Bowstrings',
        location: 'Draynor Shore / Burthorpe Wheel',
        xpPerHour: '28k – 36k XP/hr (IM) | 75k/hr (Active)',
        ironmanPrep: '~25 min chopping Willows at Draynor + ~15 min Flax per 20 min fletching',
        gpPerHour: '+55,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Brian's Archery Supplies (Rimmington) or Dargaud's Bow and Arrows (Burthorpe)",
        notes: 'At 30 Dungeoneering, unlock the Daemonheim Maple Resource Dungeon.'
      },
      {
        levels: '55–70',
        method: 'Maple Shortbows (50) & Maple Shieldbows (55)',
        prereqs: '50–55 Fletching, 45 Woodcutting, 30 Dungeoneering',
        location: 'Daemonheim Peninsula Resource Dungeon',
        xpPerHour: '34k – 44k XP/hr (IM) | 95k/hr (Active)',
        ironmanPrep: '~25 min chopping Maples next to Daemonheim bank + ~15 min Flax per 20 min fletching',
        gpPerHour: '+95,000 – +140,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Level Alchemy (384 GP per Maple Shieldbow) or Brian's Archery Supplies (Rimmington)",
        notes: 'Save 1 Magic Shortbow at 50 Ranged/80 Fletching (or fletch Maple Shieldbows to 70).'
      },
      {
        levels: '70–99',
        method: 'Yew Shieldbows (70), Rune Arrows (75) & Magic Shieldbows (85)',
        prereqs: '70–85 Fletching, 60–75 Woodcutting, 75 Smithing (for Rune Arrowtips)',
        location: 'Varrock Palace / Falador South Yews / Daemonheim Bank',
        xpPerHour: '38k – 48k XP/hr (IM) | 110k/hr (Active)',
        ironmanPrep: '~30 min chopping Yews/Magic + 15 min Flax per 15 min fletching',
        gpPerHour: '+140,000 – +220,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "High Level Alchemy (768 GP/Yew Shieldbow; 1,536 GP/Magic Shieldbow) or Brian's Archery Supplies",
        notes: 'Yew/Magic Shieldbows provide steady F2P alch profit & strong Ranged gear.'
      }
    ],
    tips: [
      'Stockpile 10,000 Feathers every day from Lumbridge (Hank) and Port Sarim (Gerry) — it only costs 60,000 GP/day.',
      'Make sure your Fletching level reaches 80 to craft Magic Shortbows for your whole Group Ironman squad.'
    ]
  },
  {
    id: 'woodcutting',
    name: 'Woodcutting',
    category: 'Gathering',
    tier: 'B-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '20k – 58k XP/hr',
    netGpHr: '+12k – +110k GP/hr',
    gpTrend: 'positive',
    defaultSellLocation: "Fletch banked logs into Shieldbows and sell to Brian's Archery Supplies (Rimmington) or High Level Alch (Maple/Yew/Magic Shieldbows); raw logs sell for minimal value at General Stores.",
    ironmanGatheringNote: 'Zero pre-gathering required once your Hatchet is upgraded on your Tool Belt. Daemonheim Resource Dungeon (30 DG) places 6 Maple trees 5 tiles from a bank!',
    gimSynergy: 'Medium — Supplies all Normal, Oak, Willow, Maple, and Yew logs for group Fletching and Bonfire HP boosts.',
    overview: 'Woodcutting in F2P peaks at Maple trees inside the Daemonheim Peninsula Resource Dungeon (requires 30 Dungeoneering), offering fast XP and instant banking right next to the dungeon entrance.',
    prerequisites: [
      'Tool Belt Hatchet upgraded at 1, 10, 20, 30, 40, and 50 (Rune Hatchet from Group Smith)',
      '30 Dungeoneering to enter the Daemonheim Peninsula Maple Resource Dungeon',
      'Woodcutting Urns (Crafting 4–76 + Earth Rune) for +20% bonus XP',
      'Beneath Cursed Tides quest (30 Woodcutting → 2,000 XP)'
    ],
    quests: [
      { name: 'Beneath Cursed Tides', xp: '2,000 Woodcutting XP', req: '30 Woodcutting + 30 in 7 skills' },
      { name: 'Gower Quest', xp: 'Scaling XP Lamps', req: '34 Quest Points' }
    ],
    brackets: [
      {
        levels: '1–15',
        method: 'Normal Trees',
        prereqs: 'Bronze/Iron Hatchet on Tool Belt',
        location: 'Lumbridge / Burthorpe',
        xpPerHour: '15k – 22k XP/hr',
        ironmanPrep: '0 min prep (upgrade Iron Hatchet at 10 WC)',
        gpPerHour: '+12,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Fletch into Arrow Shafts or sell logs to Lumbridge General Store / Dargaud's (as bows)",
        notes: 'Chop ~100 Normal Logs early for Dragon Slayer planks & starter Firemaking.'
      },
      {
        levels: '15–30',
        method: 'Oak Trees',
        prereqs: '15 Woodcutting, Iron/Steel Hatchet',
        location: 'Draynor Village Bank / Varrock West',
        xpPerHour: '22k – 32k XP/hr',
        ironmanPrep: '0 min prep (trees sit right outside Draynor Bank)',
        gpPerHour: '+25,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Fletch Oak Shieldbows & sell to Brian's Archery Supplies (Rimmington)",
        notes: 'Keep 200+ Oak Logs banked for early Fletching & Firemaking.'
      },
      {
        levels: '30–45',
        method: 'Willow Trees',
        prereqs: '30 Woodcutting, Mithril/Adamant Hatchet',
        location: 'Draynor Village Shore (South of Bank)',
        xpPerHour: '35k – 48k XP/hr',
        ironmanPrep: '0 min prep (use Strong Woodcutting Urns for +20% XP)',
        gpPerHour: '+40,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Fletch Willow Shieldbows & sell to Brian's Archery Supplies or Lowe's Archery Emporium",
        notes: 'Bank at Draynor or drop logs via action-bar keybind if rushing 45 WC.'
      },
      {
        levels: '45–60',
        method: 'Maple Trees (Daemonheim Resource Dungeon)',
        prereqs: '45 Woodcutting, 30 Dungeoneering, Adamant/Rune Hatchet',
        location: 'Daemonheim Peninsula Resource Dungeon',
        xpPerHour: '45k – 55k XP/hr',
        ironmanPrep: '0 min prep (Daemonheim bank chest is 5 seconds from dungeon door)',
        gpPerHour: '+75,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Fletch Maple Shieldbows & High Alch (384 GP each) or sell to Brian's Archery Supplies",
        notes: 'Best F2P Woodcutting + Fletching resource hub in the game.'
      },
      {
        levels: '60–99',
        method: 'Daemonheim Maples (Max XP) or Yew Trees (Alch GP)',
        prereqs: '60+ Woodcutting, Rune Hatchet (50), Woodcutting Urns',
        location: 'Daemonheim Dungeon (Maples) / Varrock Palace & Falador South (Yews)',
        xpPerHour: '50k – 58k XP/hr (Maples) | 28k – 36k XP/hr (Yews)',
        ironmanPrep: '0 min prep (Rune Hatchet + Decorated Woodcutting Urns)',
        gpPerHour: '+90,000 – +110,000 GP/hr (Yews)',
        gpTrend: 'positive',
        whereToSell: "Fletch Yew Shieldbows & High Alch (768 GP each) or sell raw logs at General Stores",
        notes: 'Yews are slower XP/hr but give great AFK logs for 70–99 Fletching alchs.'
      }
    ],
    tips: [
      'Have your Group Smith make a Rune Hatchet (50 Smithing) for every team member\'s Tool Belt.',
      'Equip Woodcutting Urns (with Earth Runes attached) for a permanent +20% XP multiplier.'
    ]
  },
  {
    id: 'firemaking',
    name: 'Firemaking',
    category: 'Artisan',
    tier: 'B-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '18k – 48k XP/hr (IM) | 185k/hr (Bonfire)',
    netGpHr: '-12k – -95k GP/hr (Burns Logs)',
    gpTrend: 'negative',
    defaultSellLocation: 'Logs are destroyed on Bonfires (net negative GP from lost bow alchs). Click Fire Spirits that spawn to loot Elemental Runes & Gems (sell at Aubury\'s Rune Shop / Grum\'s Gold Exchange).',
    ironmanGatheringNote: 'Effective Ironman XP/hr accounts for ~35–40 min chopping logs at Draynor or Daemonheim per ~20–25 min adding logs to a Bonfire.',
    gimSynergy: 'Low-Medium — Bonfires grant temporary Max HP boosts before group boss fights (Elvarg, KBD, Giant Mole), and Fire Spirits drop extra Runes & Charms.',
    overview: 'Adding logs to an active Bonfire in RS3 allows 100% AFK Firemaking training with a +10% to +15% group XP bonus when multiple teammates burn on the same fire.',
    prerequisites: [
      'Tinderbox on Tool Belt',
      'Woodcutting 1–60+ & Rune Hatchet (50 Smithing) for log gathering',
      '30 Dungeoneering for Daemonheim Maple Resource Dungeon (fastest F2P log source)',
      'Beneath Cursed Tides quest (30 Firemaking → 2,000 XP)'
    ],
    quests: [
      { name: 'Beneath Cursed Tides', xp: '2,000 Firemaking XP', req: '30 Firemaking + 30 in 7 skills' },
      { name: 'Gower Quest', xp: 'Scaling XP Lamps', req: '34 Quest Points' }
    ],
    brackets: [
      {
        levels: '1–15',
        method: 'Normal Logs on Bonfire',
        prereqs: 'Tinderbox, Normal Logs',
        location: 'Lumbridge / Burthorpe',
        xpPerHour: '18k XP/hr (IM) | 45k/hr (Bonfire)',
        ironmanPrep: '~30 min chopping Normal Logs per 30 min burning',
        gpPerHour: '-12,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Logs Destroyed (Forfeits ~12k GP/hr bow/log value; sell Fire Spirit charms/runes to Aubury)',
        notes: 'Always add logs to an existing bonfire rather than lighting individual fires.'
      },
      {
        levels: '15–30',
        method: 'Oak Logs on Bonfire',
        prereqs: '15 Firemaking, 15 Woodcutting',
        location: 'Draynor Village Bank',
        xpPerHour: '25k XP/hr (IM) | 70k/hr (Bonfire)',
        ironmanPrep: '~35 min chopping Oaks per 25 min bonfire',
        gpPerHour: '-25,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Logs Destroyed (Forfeits Oak Shieldbow sale value at Brian\'s Archery Supplies)',
        notes: 'Burn Oak Logs right next to Draynor Bank.'
      },
      {
        levels: '30–45',
        method: 'Willow Logs on Bonfire',
        prereqs: '30 Firemaking, 30 Woodcutting',
        location: 'Draynor Village Shore / Bank',
        xpPerHour: '34k XP/hr (IM) | 105k/hr (Bonfire)',
        ironmanPrep: '~38 min chopping Willows per 22 min bonfire',
        gpPerHour: '-40,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Logs Destroyed (Click Fire Spirits and sell extra runes to Aubury\'s Rune Shop)',
        notes: 'Group mates burning on the same bonfire boost XP per log by up to +4%.'
      },
      {
        levels: '45–99',
        method: 'Maple Logs on Bonfire (Daemonheim Bank)',
        prereqs: '45 Firemaking, 45 Woodcutting, 30 Dungeoneering',
        location: 'Daemonheim Bank Chest',
        xpPerHour: '45k – 48k XP/hr (IM) | 150k – 185k/hr (Bonfire)',
        ironmanPrep: '~40 min chopping Maples in 30 DG dungeon per 20 min bonfire',
        gpPerHour: '-75,000 – -95,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Logs Destroyed (Sacrifices Maple Shieldbow alch value; Fire Spirits return ~10k GP/hr in runes/ores)',
        notes: 'Yew logs (60 FM) are slower IM XP/hr than Maples because Yews chop much slower.'
      }
    ],
    tips: [
      'Click every Fire Spirit that spawns from your bonfire — they reward elemental runes, gold charms, and uncut gems.',
      'Burn 5 Maple logs before challenging Elvarg, Giant Mole, or KBD for a temporary Maximum Life Points buff.'
    ]
  },
  {
    id: 'fishing',
    name: 'Fishing',
    category: 'Gathering',
    tier: 'B-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '18k – 52k XP/hr',
    netGpHr: '+22k – +35k GP/hr (or -7.5k/hr Fly Fishing)',
    gpTrend: 'positive',
    defaultSellLocation: "Wydin's Food Store (Port Sarim) or Lumbridge General Store for cooked/raw surplus fish; most Ironmen bank Lobsters & Swordfish for PvM bossing instead of selling.",
    ironmanGatheringNote: 'Zero gear prep (all nets, rods, cages, harpoons are on Tool Belt!). Fly Fishing uses ~1,000 Feathers/hr (2 min/day shop run at Hank & Gerry for 6 GP/feather).',
    gimSynergy: 'High — Keeps Group Storage stocked with Trout, Salmon, Lobsters, and Swordfish for all PvM & quests.',
    overview: 'Fly Fishing at Barbarian Village/Lumbridge is the fastest F2P Fishing XP all the way to 99, while Musa Point (Karamja) Lobsters & Swordfish supply your team\'s high-healing boss food.',
    prerequisites: [
      'All Fishing equipment built into Tool Belt automatically (Crayfish Cage, Fly Rod, Lobster Pot, Harpoon)',
      'Daily Feather Packs (Hank in Lumbridge & Gerry in Port Sarim at 6 GP/feather)',
      'Fishing Urns (Crafting 2–76 + Water Rune) for +20% XP',
      'Port Sarim Entrana Monk Dock Bank Deposit Box unlocked for 15-second Karamja banking'
    ],
    quests: [
      { name: 'Beneath Cursed Tides', xp: '2,000 Fishing XP', req: '30 Fishing + 30 in 7 skills' },
      { name: 'Swept Away / Shadow over Ashdale', xp: 'Optional XP Lamps', req: 'None' }
    ],
    brackets: [
      {
        levels: '1–20',
        method: 'Crayfish Cages & Shrimp/Anchovies',
        prereqs: 'None (0 bait required)',
        location: 'Burthorpe Pond / Lumbridge Swamp / Draynor',
        xpPerHour: '12k – 18k XP/hr',
        ironmanPrep: '0 min prep',
        gpPerHour: '+5,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Lumbridge General Store (or cook & bank for early quests)',
        notes: 'Crayfish require zero bait and stack fast right next to Burthorpe bank.'
      },
      {
        levels: '20–40',
        method: 'Fly Fishing Trout (20) & Salmon (30)',
        prereqs: '20 Fishing, Feathers (6 GP each from Hank/Gerry)',
        location: 'Barbarian Village (Gunnarsgrunn) / Lumbridge River',
        xpPerHour: '25k – 40k XP/hr',
        ironmanPrep: '2 min/day buying Feather Packs (costs ~6,000 GP/hr in feathers)',
        gpPerHour: '-6,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Keep for Cooking/PvM (dropping fish or keeping costs 6 GP/feather; selling cooked salmon recoups ~10k GP/hr at Lumbridge General Store)',
        notes: 'Action-bar drop Trout/Salmon for max XP, or cook on Edgeville/Lumbridge fire.'
      },
      {
        levels: '40–50',
        method: 'Lobster Cages at Musa Point',
        prereqs: '40 Fishing, 60 GP round-trip Karamja Boat (0 bait)',
        location: 'Musa Point Dock (Karamja) → Port Sarim Deposit Box',
        xpPerHour: '20k – 26k XP/hr',
        ironmanPrep: '0 min prep (Lobster Cage on Tool Belt)',
        gpPerHour: '+22,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Wydin's Food Store (Port Sarim) or General Store — best kept for PvM food",
        notes: 'Use the Bank Deposit Box on the Port Sarim Entrana Monk dock right next to the Karamja ship!'
      },
      {
        levels: '50–99 (Max XP)',
        method: 'Fly Fishing Trout & Salmon + Fishing Urns',
        prereqs: '30–76+ Fishing, Feathers, Strong/Decorated Fishing Urns',
        location: 'Barbarian Village / Lumbridge River',
        xpPerHour: '42k – 52k XP/hr',
        ironmanPrep: '2 min/day Feather Shop Run + Water Runes for Urns',
        gpPerHour: '-7,500 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Drop-training or banking for Cooking (feather + urn rune supply sink)',
        notes: 'Fastest Fishing XP/hr in F2P; pairs seamlessly with Cooking.'
      },
      {
        levels: '50–99 (Boss Food)',
        method: 'Harpooning Tuna & Swordfish',
        prereqs: '50 Fishing, Karamja Ship Access',
        location: 'Musa Point Dock (Karamja)',
        xpPerHour: '22k – 30k XP/hr',
        ironmanPrep: '0 min prep (Harpoon on Tool Belt)',
        gpPerHour: '+28,000 – +35,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Wydin's Food Store (Port Sarim) or keep in Group Storage for KBD / Giant Mole",
        notes: 'Swordfish heal 1,400 HP in RS3 (best non-degrading F2P single-bite boss food).'
      }
    ],
    tips: [
      'Port Sarim\'s Bank Deposit Box sits right beside the Karamja boat dock, allowing 15-second banking for Lobsters and Swordfish.',
      'Equip Fishing Urns with Water Runes attached for +20% bonus Fishing XP.'
    ]
  },
  {
    id: 'cooking',
    name: 'Cooking',
    category: 'Artisan',
    tier: 'B-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '25k – 45k XP/hr (IM) | 160k/hr (Range)',
    netGpHr: '+6k – +40k GP/hr (or -6k/hr w/ Fly Feathers)',
    gpTrend: 'positive',
    defaultSellLocation: "Wydin's Food Store (Port Sarim) or Lumbridge General Store; cooked Trout, Lobsters & Swordfish are best kept in Group Storage for Combat/Bossing.",
    ironmanGatheringNote: 'Effective Ironman XP/hr includes ~38–42 min fishing raw fish per ~18–22 min cooking on the Lumbridge Castle Range (roughly 2:1 fishing-to-cooking ratio).',
    gimSynergy: 'High — Turns raw Trout, Salmon, Lobsters, and Swordfish from your group Fisher into burn-free bossing supplies.',
    overview: 'Always complete Cook\'s Assistant before serious Cooking: it permanently reduces burn rates on the Lumbridge Castle Ground Floor Range, located steps from the Lumbridge Combat Academy bank chest.',
    prerequisites: [
      "Cook's Assistant quest (300 XP + lower burn rate on Lumbridge Castle Range)",
      'Fishing 1–50+ (or Group Ironman Fisher supplying raw fish)',
      'Cooking Urns (Crafting 2–81 + Fire Rune) for +20% XP',
      'Beneath Cursed Tides (30 Cooking → 2,000 XP)'
    ],
    quests: [
      { name: "Cook's Assistant", xp: '300 Cooking XP + Range Burn Reduction', req: 'None' },
      { name: 'Beneath Cursed Tides', xp: '2,000 Cooking XP', req: '30 Cooking + 30 in 7 skills' },
      { name: 'Recipe for Disaster (Intro)', xp: 'Easy starter XP + bank chest access', req: "Cook's Assistant" }
    ],
    brackets: [
      {
        levels: '1–20',
        method: "Cook's Assistant + Crayfish, Shrimp & Sardines",
        prereqs: "Cook's Assistant quest",
        location: 'Lumbridge Castle Ground Floor Range',
        xpPerHour: '15k – 22k XP/hr (IM) | 55k/hr (Range)',
        ironmanPrep: '~35 min fishing Shrimp/Crayfish per 25 min cooking',
        gpPerHour: '+6,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Lumbridge General Store (or keep cooked food for early Combat)',
        notes: 'Lumbridge Castle Range has the lowest burn chance in F2P.'
      },
      {
        levels: '20–40',
        method: 'Trout (15) & Salmon (25) on Lumbridge Range',
        prereqs: '15–25 Cooking, 20–30 Fishing (Feathers)',
        location: 'Lumbridge Castle Range / Barbarian Village Fire',
        xpPerHour: '28k – 38k XP/hr (IM) | 95k/hr (Range)',
        ironmanPrep: '~40 min fly fishing per 20 min cooking',
        gpPerHour: '-6,000 GP/hr (if banked) / +15k (if sold)',
        gpTrend: 'negative',
        whereToSell: 'If kept for PvM: -6k GP/hr feather sink. Sell extra cooked fish to Lumbridge General Store (+15k GP/hr)',
        notes: 'Zero burn rate on Trout/Salmon comes around mid-40s Cooking.'
      },
      {
        levels: '40–50',
        method: 'Lobsters on Lumbridge Castle Range',
        prereqs: '40 Cooking, 40 Fishing',
        location: 'Lumbridge Castle Ground Floor Range',
        xpPerHour: '26k – 34k XP/hr (IM) | 130k/hr (Range)',
        ironmanPrep: '~42 min Karamja Lobster caging per 18 min cooking',
        gpPerHour: '+25,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Wydin's Food Store (Port Sarim) or Lumbridge General Store (best kept for PvM)",
        notes: 'Equip Plain/Strong Cooking Urns for +20% XP per Lobster.'
      },
      {
        levels: '50–99',
        method: 'Tuna, Lobsters & Swordfish + Decorated Urns',
        prereqs: '45–81 Cooking, 50+ Fishing, Cooking Urns',
        location: 'Lumbridge Castle Range',
        xpPerHour: '32k – 45k XP/hr (IM) | 160k/hr (Range)',
        ironmanPrep: '~40 min fishing Swordfish/Lobsters per 20 min cooking',
        gpPerHour: '+30,000 – +40,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Wydin's Food Store (Port Sarim) / General Store, or save in Group Storage for Bossing",
        notes: 'Swordfish stop burning at level 86 on standard ranges (lower on Lumbridge Range).'
      }
    ],
    tips: [
      'Always cook at the Lumbridge Castle Ground Floor Range after Cook\'s Assistant — never waste fish on open fires when banking.',
      'Alternatively, make Anchovy Pizzas (55) or Apple Pies if training purely off Varrock/Lumbridge shop ingredients.'
    ]
  },
  {
    id: 'crafting',
    name: 'Crafting',
    category: 'Artisan',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '14k – 42k XP/hr (IM) | 95k/hr (Active)',
    netGpHr: '+140k – +380k GP/hr (Jewellery) / -25k/hr (Urns)',
    gpTrend: 'positive',
    defaultSellLocation: "Grum's Gold Exchange (Port Sarim) buys Gold/Gem Jewellery at 60% High Alch value with ZERO Nature Runes! Also High Level Alchemy (55 Magic) on Diamond/Ruby Amulets & Green D'hide.",
    ironmanGatheringNote: 'Effective Ironman XP/hr blends ~25–35 min mining Al Kharid Uncommon Gem Rocks & Rimmington Gold Ore per ~25–35 min cutting & furnace crafting.',
    gimSynergy: 'High — Crafts Amulets of Power (50/70), Rings of Luck, Green D\'hide gear, and Skilling Urns (+20% XP across 7 skills!) for the entire team.',
    overview: 'Crafting in F2P revolves around Al Kharid Gem Rocks + Gold Jewellery (huge early profit at Grum\'s Gold Exchange without needing 55 Magic!) and Skilling Urns (+20% group XP in gathering/artisan skills).',
    prerequisites: [
      'Goblin Diplomacy (200 XP), Sheep Shearer (150 XP) & Gunnar\'s Ground (5 Crafting → 700 XP)',
      '20 Mining + Gem Bag (2,000 DG Tokens) for Al Kharid Uncommon Gem Rocks',
      '40 Mining for Gold Ore (stored directly in the Artisan Metal Bank at any furnace)',
      'Chisel, Ring Mould, Necklace Mould & Amulet Mould kept on Tool Belt',
      '55/57 Magic for High Alch & Enchanting Diamond Amulets (Amulet of Power)'
    ],
    quests: [
      { name: 'Goblin Diplomacy', xp: '200 Crafting XP + Gold Bar', req: 'None' },
      { name: 'Sheep Shearer', xp: '150 Crafting XP', req: 'None' },
      { name: "Gunnar's Ground", xp: '200 Crafting XP + 500 XP Lamp', req: '5 Crafting' }
    ],
    brackets: [
      {
        levels: '1–20',
        method: 'Quests + Soft Clay Pottery & Cracked/Fragile Urns',
        prereqs: 'None (Clay rocks in Burthorpe/Varrock SW)',
        location: 'Burthorpe / Barbarian Village Pottery Oven',
        xpPerHour: '14k – 20k XP/hr (IM)',
        ironmanPrep: '~25 min mining & wetting Soft Clay in Burthorpe per 35 min pottery',
        gpPerHour: '-5,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Untradeable Urns (Costs ~1 Elemental Rune per urn, but yields +20% XP across group skills)',
        notes: 'Skip 1–10 immediately via Goblin Diplomacy, Sheep Shearer & Gunnar\'s Ground.'
      },
      {
        levels: '20–40',
        method: 'Al Kharid Gem Rocks → Cut Sapphires/Emeralds & Gold Jewellery',
        prereqs: '20 Crafting & 20 Mining, Gem Bag (2k DG Tokens)',
        location: 'Al Kharid North Mine → Edgeville/Al Kharid Furnace',
        xpPerHour: '22k – 32k XP/hr (IM) | 65k/hr (Active)',
        ironmanPrep: '~35 min mining Gems & Gold Ore per 25 min cutting & smelting',
        gpPerHour: '+140,000 – +220,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Grum's Gold Exchange (Port Sarim) — buys all Gold/Sapphire/Emerald jewellery at 60% High Alch price (no Nature Runes needed!)",
        notes: 'Huge pre-55 Magic Ironman money maker while leveling Mining and Crafting together.'
      },
      {
        levels: '40–70',
        method: 'Ruby & Diamond Cutting + Gold Necklaces/Amulets',
        prereqs: '34–50 Crafting, 40 Mining (Gold), Gem Bag',
        location: 'Al Kharid Mine → Edgeville Furnace',
        xpPerHour: '28k – 38k XP/hr (IM) | 85k/hr (Active)',
        ironmanPrep: '~35 min mining Uncommon Gem Rocks & Gold per 25 min crafting',
        gpPerHour: '+250,000 – +380,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Grum's Gold Exchange (Port Sarim: 1,215 GP Ruby / 2,115 GP Diamond Amulet) or High Level Alchemy",
        notes: 'At 50 Crafting + 57 Magic, craft & enchant Diamond Amulets into Amulets of Power (+22 all styles).'
      },
      {
        levels: '70–99',
        method: 'Decorated Urns (Max XP) OR Diamond Jewellery / D\'hide Shields (Profit)',
        prereqs: '70–81 Crafting, Soft Clay / Cut Diamonds / Green D\'hides',
        location: 'Barbarian Village / Edgeville Furnace / Daemonheim',
        xpPerHour: '32k – 42k XP/hr (IM) | 95k/hr (Active)',
        ironmanPrep: '~30 min clay/gem/hide gathering per 30 min crafting',
        gpPerHour: '-25,000 GP/hr (Urns) / +240,000 GP/hr (Jewellery)',
        gpTrend: 'positive',
        whereToSell: "Jewellery/D'hide: Grum's Gold Exchange or High Alch. Decorated Urns: Untradeable (-GP rune cost for team +20% XP)",
        notes: 'Craft Decorated Cooking, Fishing, Mining & Prayer urns for the whole Group Ironman roster.'
      }
    ],
    tips: [
      'Grum\'s Gold Exchange in Port Sarim buys rings, necklaces, bracelets, and amulets at High Alch value without using Nature Runes!',
      'Store Gold & Silver Bars in the Artisan Metal Bank at any furnace so they never waste bank slots.'
    ]
  },
  {
    id: 'runecrafting',
    name: 'Runecrafting',
    category: 'Artisan',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    peakXpHr: '18k – 58k XP/hr',
    netGpHr: '+180k – +350k GP/hr (Vis Wax/Altars) / 0 GP (Runespan)',
    gpTrend: 'positive',
    defaultSellLocation: "Aubury's Rune Shop (Varrock) or Betty's Magic Emporium (Port Sarim) for altar-crafted runes; Runespan yields 0 GP directly. Level 50 unlocks Daily Vis Wax.",
    ironmanGatheringNote: 'Runespan requires ZERO essence and ZERO prep time (100% AFK XP!). Traditional Altar crafting requires ~30 min mining Pure/Rune Essence per ~30 min altar running.',
    gimSynergy: 'High — Level 50 Runecrafting unlocks the Rune Goldberg Machine (Vis Wax) plus steady elemental & Mind/Body rune supplies for team Magic & High Alch.',
    overview: 'Runespan inside the Wizards\' Tower transforms Runecrafting into an AFK, essence-free activity for peak F2P XP. Use traditional altars only when your group specifically needs bulk Air, Water, Earth, or Fire runes.',
    prerequisites: [
      'Rune Mysteries quest (250 XP + Rune Essence Mine access)',
      'Swept Away quest (10 Goulash lamps can boost 1 → 24+ Runecrafting)',
      '50 Runecrafting for the Rune Goldberg Machine (Daily Vis Wax in Wizards\' Tower)',
      'Runecrafting Urns (Crafting + Air Rune) for +20% XP during Altar crafting'
    ],
    quests: [
      { name: 'Rune Mysteries', xp: '250 Runecrafting XP + Mind Spike', req: 'None' },
      { name: 'Swept Away', xp: '10 Goulash Lamps (choose Runecrafting)', req: 'None' },
      { name: 'Beneath Cursed Tides', xp: '2,000 Runecrafting XP', req: '30 in 8 F2P skills' }
    ],
    brackets: [
      {
        levels: '1–33 (Runespan)',
        method: 'Runespan Lower Floor (Esshounds & Cyclone/Mind Storm Nodes)',
        prereqs: 'None (enter Wizards\' Tower top floor portal)',
        location: 'Wizards\' Tower Runespan (Floor 1)',
        xpPerHour: '18k – 28k XP/hr',
        ironmanPrep: '0 min prep (0 Rune Essence needed)',
        gpPerHour: '-2,000 GP/hr (Urns) / 0 GP',
        gpTrend: 'negative',
        whereToSell: '0 Drops (Runespan points stay inside Wizards\' Tower)',
        notes: 'Always prioritize yellow/purple Elemental Nodes over monsters for 2–4x faster XP.'
      },
      {
        levels: '1–33 (Altar Option)',
        method: 'Air, Mind, Water, Earth & Fire Altar Crafting',
        prereqs: 'Rune Mysteries, Wicked Hood (free from Tam McGrubor in Burthorpe!)',
        location: 'Elemental Altars (Falador, Lumbridge, Varrock)',
        xpPerHour: '10k – 16k XP/hr (IM)',
        ironmanPrep: '~30 min mining Rune/Pure Essence per 30 min altar running',
        gpPerHour: '+65,000 – +110,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Aubury's Rune Shop (Varrock) or Betty's Magic Emporium (Port Sarim) — or bank for team Magic",
        notes: 'Claim your free Wicked Hood in Burthorpe for daily free Pure Essence & Altar teleports!'
      },
      {
        levels: '33–50',
        method: 'Runespan Middle Floor Nodes (Chaotic Clouds, Vine Jumpers)',
        prereqs: '33 Runecrafting',
        location: 'Wizards\' Tower Runespan (Floor 2)',
        xpPerHour: '30k – 42k XP/hr',
        ironmanPrep: '0 min prep',
        gpPerHour: '-3,000 GP/hr (Urns) / 0 GP',
        gpTrend: 'negative',
        whereToSell: '0 Drops (Pure XP rush to 50 Runecrafting)',
        notes: 'Rush 50 Runecrafting as quickly as possible to unlock Vis Wax.'
      },
      {
        levels: '50–99',
        method: 'Runespan High Nodes (Living/Undead Souls) + Daily Vis Wax',
        prereqs: '50–66 Runecrafting, Wicked Hood + Rune Shop Runs',
        location: 'Runespan Floor 2/3 & Rune Goldberg Machine (Wizards\' Tower)',
        xpPerHour: '42k – 58k XP/hr',
        ironmanPrep: '0 min prep in Runespan; 2 min/day Rune Shop Run for Vis Wax',
        gpPerHour: '+180,000 – +350,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Vis Wax (Daily value/teleports/quick-charges) & multiple Air/Earth/Water runes sold to Aubury's Rune Shop",
        notes: 'At 66+ RC, Siphoning Living/Undead Souls & Bloody Skulls gives peak F2P Runecrafting XP.'
      }
    ],
    tips: [
      'Claim a free Wicked Hood from Tam McGrubor northwest of Burthorpe Lodestone — it gives free daily Rune Essence and altar teleports!',
      'At 66 Runecrafting, siphoning Living Souls and Undead Souls in Runespan maximizes F2P XP/hr.'
    ]
  },
  {
    id: 'dungeoneering',
    name: 'Dungeoneering',
    category: 'Support',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '99 (120 Virtual)',
    peakXpHr: '15k – 110k XP/hr',
    netGpHr: '+25k – +120k GP/hr (Dungeon Unlocks & Resource Access)',
    gpTrend: 'positive',
    defaultSellLocation: "Inside dungeons: sell unused loot to the Smuggler for coins/food. Outside: spend Tokens at Marmaros/Reward Trader (Daemonheim) for BiS Gravite Weapons, Gem Bag, Coal Bag & Scroll of Efficiency.",
    ironmanGatheringNote: 'Requires ZERO outside items or prep (you enter Daemonheim completely empty-handed!). All weapons, food & runes are crafted inside the dungeon.',
    gimSynergy: 'Maximum — Group Ironmen can party together on Complexity 6 floors! Unlocks shared resource dungeons (30 DG Maples) and BiS Tier 55 Gravite weapons.',
    overview: 'Daemonheim is the ultimate F2P Group Ironman training ground. Running 4–5 player floors accelerates XP/hr up to 110k/hr while rewarding Dungeoneering Tokens and passive XP in every F2P skill.',
    prerequisites: [
      'Ring of Kinship (free from Dungeoneering Tutor outside Daemonheim Castle)',
      'Empty inventory & equipment slots before boarding Daemonheim boat',
      '50+ Smithing / Crafting / Fletching on at least 1 GIM teammate to craft & bind Tier 50 Fractite gear inside floors',
      'Key Token Unlock Order: Gem Bag (2k) → Coal Bag (4k) → Scroll of Efficiency (20k) → Gravite Weapon (40k)'
    ],
    quests: [
      { name: 'Daemonheim Easy/Medium Tasks', xp: 'Aura upgrades, free binds & Law/Nature runes at start', req: 'Various F2P skill levels' }
    ],
    brackets: [
      {
        levels: '1–30',
        method: 'Complexity 6 Small Floors (1–15) + Prestige Reset',
        prereqs: 'Ring of Kinship (free)',
        location: 'Daemonheim Castle (Ring of Kinship teleport)',
        xpPerHour: '15k – 30k XP/hr',
        ironmanPrep: '0 min outside prep',
        gpPerHour: '+25,000 GP/hr (Equivalent Unlocks)',
        gpTrend: 'positive',
        whereToSell: 'Sell internal drops to the Smuggler; spend 2k Tokens on Gem Bag & 4k on Coal Bag (saves hours Mining/Crafting!)',
        notes: 'Hitting 30 DG unlocks the Maple Tree Resource Dungeon right outside Daemonheim.'
      },
      {
        levels: '30–55',
        method: 'Complexity 6 Small/Medium Party Floors (16+)',
        prereqs: '30 Dungeoneering, Tier 40–50 Bound 2H Weapon & Armour',
        location: 'Daemonheim',
        xpPerHour: '35k – 65k XP/hr',
        ironmanPrep: '0 min outside prep',
        gpPerHour: '+60,000 GP/hr (Token Value)',
        gpTrend: 'positive',
        whereToSell: 'Daemonheim Reward Trader: buy Scroll of Efficiency (20k tokens — saves Runite Bars!) & Bonecrusher (34k)',
        notes: 'Always reset Prestige ONLY after completing every unlocked floor once.'
      },
      {
        levels: '55–99 (120)',
        method: '4–5 Player Medium/Large High Floors + C1 Rush Low Floors',
        prereqs: '55+ Dungeoneering, Bound Tier 50 Fractite 2h + 125 Law/Cosmic Runes',
        location: 'Daemonheim',
        xpPerHour: '65k – 110k XP/hr',
        ironmanPrep: '0 min outside prep',
        gpPerHour: '+120,000 GP/hr (BiS Gear Value)',
        gpTrend: 'positive',
        whereToSell: 'Daemonheim Reward Trader: Gravite 2h / Staff / Shortbow (40k tokens each) & Arcane Blast Necklace (15.5k)',
        notes: 'Gravite weapons (Tier 55) are Best-in-Slot across all 3 classic F2P combat styles.'
      }
    ],
    tips: [
      'Bind your best 2H/Magic weapon, Platebody, and 125 Law Runes so you can set Gatestones (Group + Personal) on every floor.',
      'Rush your lowest 50% of floors on Complexity 1 Small, then run your highest floors on Complexity 6 Medium/Large for peak XP/hr.'
    ]
  },
  {
    id: 'necromancy',
    name: 'Necromancy (F2P Cap 20)',
    category: 'F2P Cap 20/5',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '20 (F2P Cap)',
    peakXpHr: '15k – 35k XP/hr',
    netGpHr: '+20k – +90k GP/hr (Combat) / -12k/hr (Rituals)',
    gpTrend: 'positive',
    defaultSellLocation: "City of Um General Store, Burthorpe General Store, or Edgeville General Store for combat drops; Ritual supplies are bought from Lupe's Soul Supplies in City of Um.",
    ironmanGatheringNote: 'Requires ~5–10 min gathering Bronze/Steel Bars, Soft Clay, Wool, and Spider Silk (lumbridge catacombs/spiders) for Kili\'s Tier 10 & Tier 20 gear upgrades, plus 5 min shopping Basic Ghostly Ink in Um.',
    gimSynergy: 'Medium — Tier 20 Death Guard & Skull Lantern deal strong single-target & AoE damage (with Ghost healing!) on early F2P quests and bosses up to Level 20.',
    overview: 'Necromancy is playable in F2P up to Level 20! Entering the Underworld Portal north of Draynor Lodestone unlocks the City of Um, Rituals, Conjure Skeleton/Ghost, and Tier 20 Deathwarden gear.',
    prerequisites: [
      'Complete Necromancy! tutorial quest (Underworld Portal north of Draynor Village Lodestone)',
      "Kili's Row mini-tasks (gather Soft Clay, Bronze Bars, Wool, Spider Silk & Steel Bars for Tier 10/20 gear)",
      'Rune Mythos quest (requires 20 Necromancy & 20 Runecrafting for F2P completion)',
      'Lupe\'s Soul Supplies shop in City of Um (Basic Ghostly Ink, Candles & Vials of Water)'
    ],
    quests: [
      { name: 'Necromancy!', xp: 'Unlocks City of Um & Level 5+ jump', req: 'None (Portal north of Draynor)' },
      { name: 'Rune Mythos', xp: '1,500 Necromancy & 1,000 RC XP', req: '20 Necromancy, 20 Runecrafting' }
    ],
    brackets: [
      {
        levels: '1–10',
        method: 'Necromancy! Tutorial + Burthorpe Troll Cave',
        prereqs: 'Enter Draynor Underworld Portal',
        location: 'City of Um / Burthorpe Troll Cave',
        xpPerHour: '15k – 22k XP/hr',
        ironmanPrep: '5 min gathering Soft Clay & Bronze Bars for Tier 10 Kili upgrade',
        gpPerHour: '+20,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Burthorpe General Store or City of Um General Store',
        notes: 'Conjure Putrid Zombie and Vengeful Ghost sustain your HP automatically.'
      },
      {
        levels: '10–20 (Rituals)',
        method: 'Lesser Necroplasm & Communion Rituals',
        prereqs: '5–10 Necromancy, Basic Ghostly Ink + Ritual Candles',
        location: 'City of Um Ritual Site',
        xpPerHour: '20k – 30k XP/hr',
        ironmanPrep: '5 min buying Basic Ghostly Ink, Candles & Vials of Water from Lupe in Um',
        gpPerHour: '-12,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Shop Sink (Lupe\'s Soul Supplies in Um — converts Weak/Lesser Necroplasm & Souls into Talents)',
        notes: 'Run enough Lesser Communion rituals to unlock all Level 20 Well of Souls talents.'
      },
      {
        levels: '10–20 (Combat)',
        method: 'Tier 20 Death Guard & Scythe at Al Kharid Warriors / Hill Giants',
        prereqs: '10–20 Necromancy, Kili Tier 20 Upgrade (Spider Silk + Steel Bars)',
        location: 'Al Kharid Palace / Edgeville Dungeon',
        xpPerHour: '25k – 35k XP/hr',
        ironmanPrep: '10 min gathering Spider Silk (Lumbridge Catacombs) & Steel Bars for T20 upgrade',
        gpPerHour: '+55,000 – +90,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'City of Um General Store, Edgeville General Store, or Zeke\'s Scimitars',
        notes: 'Cap is strictly Level 20 in F2P, but unlocks huge early combat utility.'
      }
    ],
    tips: [
      'Use Soul Sap + Finger of Death + Spectral Scythe on Revolution for effortless Level 1–20 combat clears.',
      'Even though capped at 20, getting Tier 20 Deathwarden gear + Ghost healing makes early F2P quests a breeze.'
    ]
  },
  {
    id: 'archaeology',
    name: 'Archaeology (F2P Cap 20)',
    category: 'F2P Cap 20/5',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '20 (F2P Cap)',
    peakXpHr: '4k – 12k XP/hr',
    netGpHr: '+15k – +45k GP/hr (Chronotes & Collections)',
    gpTrend: 'positive',
    defaultSellLocation: 'Turn in restored artefacts to Velucia (Museum Collector at Archaeology Campus) or Isaura for Chronotes! Excess soil/materials can be sold at Varrock General Store (keep materials for restorations).',
    ironmanGatheringNote: 'Self-sufficient excavation! Screen soil at the Archaeology Campus Soil Mesh to recover missing Ironman restoration materials without leaving the digsite (~0 extra prep).',
    gimSynergy: 'Critical — Level 5 Archaeology unlocks the Font of Life Monolith Relic, granting +500 permanent Max Life Points to every F2P teammate!',
    overview: 'Archaeology is capped at Level 20 in F2P, but hitting Level 5 takes ~10 minutes and rewards the Font of Life Relic (+500 HP permanently in F2P!). Kharid-et Digsite gives up to Level 20 plus Zarosian Collections.',
    prerequisites: [
      'Speak to Acting Guildmaster Reiniger at Archaeology Campus (east of Varrock / north of Al Kharid)',
      'Bronze Mattock (free) → Iron Mattock (10 Smithing) → Steel Mattock (20 Smithing) on Tool Belt',
      'Clean & repair Artefacts on the Archaeologist\'s Workbench using excavated materials + screened soil',
      'Activate Font of Life at the Mysterious Monolith (500 Chronotes from tutorial)'
    ],
    quests: [
      { name: 'Archaeology Campus Tutorial', xp: 'Level 1 → 5 + Font of Life Relic (+500 HP!)', req: 'None' },
      { name: 'Breaking the Seal Mystery', xp: 'Bonus XP + Kharid-et Shadow Realm access', req: '5–12 Archaeology' }
    ],
    brackets: [
      {
        levels: '1–5',
        method: 'Archaeology Campus Tutorial (Centurion\'s Seal)',
        prereqs: 'None (free Bronze Mattock)',
        location: 'Archaeology Campus (NE of Al Kharid)',
        xpPerHour: '4k – 6k XP/hr (~10 min total)',
        ironmanPrep: '0 min prep (everything excavated on-site)',
        gpPerHour: '+15,000 GP/hr (Chronote Value)',
        gpTrend: 'positive',
        whereToSell: 'Donate restored Centurion\'s Seal to Velucia at Archaeology Campus for 500 Chronotes → Activate Font of Life!',
        notes: 'MANDATORY Day 1 task for every F2P account: +500 permanent HP works everywhere!'
      },
      {
        levels: '5–12',
        method: 'Kharid-et Digsite (Venator Remains)',
        prereqs: '5 Archaeology, Iron Mattock (10 Smithing)',
        location: 'Kharid-et Fortress Courtyard (South of Archaeology Campus)',
        xpPerHour: '6k – 9k XP/hr',
        ironmanPrep: '0 min prep (screen Soil at Campus Mesh for extra Third-Age Iron/Zarosian Insignia)',
        gpPerHour: '+25,000 GP/hr (Chronote Value)',
        gpTrend: 'positive',
        whereToSell: 'Turn in Venator Daggers & Crossbows to Velucia (Museum) or Sir Atcha for Chronotes',
        notes: 'Always follow the glowing Time Sprite between excavation spots for +20% XP & precision.'
      },
      {
        levels: '12–20',
        method: 'Kharid-et Barracks (Legionary Remains)',
        prereqs: '12 Archaeology, Steel Mattock (20 Smithing rec.)',
        location: 'Kharid-et Fortress (Inside East Wing)',
        xpPerHour: '9k – 12k XP/hr',
        ironmanPrep: '0 min prep (materials self-gathered via excavation & soil screening)',
        gpPerHour: '+35,000 – +45,000 GP/hr (Chronote Value)',
        gpTrend: 'positive',
        whereToSell: 'Complete Zarosian I / Museum Zarosian I Collections with Velucia & Soran for Chronotes',
        notes: 'Once Level 20 is reached, spend Chronotes at Ezreal\'s Guild Shop for the Material Storage expansion or outfits.'
      }
    ],
    tips: [
      'Do NOT skip the Level 5 Archaeology tutorial — Font of Life (+500 HP) is one of the strongest F2P PvM upgrades in RuneScape.',
      'Have your Group Smith craft Iron (10) and Steel (20) Mattocks to speed up excavation up to Level 20.'
    ]
  },
  {
    id: 'trial-skills',
    name: 'Members Trial Skills (1–5 Cap)',
    category: 'F2P Cap 20/5',
    tier: 'B-Tier GIM Priority',
    maxF2pLevel: '5 (F2P Trial Cap)',
    peakXpHr: '8k – 18k XP/hr',
    netGpHr: '+15k – +20k GP/hr (Thieving/Herb) / -5k/hr (Construction)',
    gpTrend: 'positive',
    defaultSellLocation: "Poletax's Herblore Shop (Taverley) for herbs/Attack Potions, Pikkupstix's Shop (Taverley) for Summoning pouches, and Burthorpe General Store for Thieving/Hunter drops.",
    ironmanGatheringNote: 'All 9 Members trial skills (Agility, Construction, Divination, Farming, Herblore, Hunter, Slayer, Summoning, Thieving) are clustered in Burthorpe & Taverley and take ~30–45 mins total to max to Level 5!',
    gimSynergy: 'Medium — Adds +36 Total Levels immediately, unlocks Charm drops (Wolf Whistle) for future members/events, and lets you brew F2P Attack Potions (3 Herblore)!',
    overview: 'Free-to-Play accounts can train 9 Members\' skills up to Level 5 inside Burthorpe and Taverley. Importantly, Herblore Level 3–5 lets F2P Ironmen clean Guam & brew real Attack Potions (+Combat boost) for boss fights!',
    prerequisites: [
      'Burthorpe & Taverley Lodestones unlocked',
      'Wolf Whistle quest in Taverley (boosts Summoning 1 → 4 & unlocks Charm drops!)',
      'Guam Leaves & Eyes of Newt (dropped by Burthorpe Trolls / bought at Poletax\'s Shop in Taverley)',
      '100–200 GP for Taverley Sawmill Planks (Construction 1–5) & Farming Seed Stalls'
    ],
    quests: [
      { name: 'Wolf Whistle', xp: '276 Summoning XP (1 → 4) + Charm Drops', req: 'None (talk to Pikkupstix in Taverley)' },
      { name: 'Druidic Ritual (Poletax Task)', xp: '250 Herblore XP (1 → 3)', req: 'None (Taverley)' }
    ],
    brackets: [
      {
        levels: '1–5 Herblore & Summoning',
        method: 'Wolf Whistle + Poletax Task + Guam Attack Potions',
        prereqs: 'Burthorpe Trolls (Guam) + Poletax Eye of Newt (3 GP)',
        location: 'Taverley (Pikkupstix & Poletax)',
        xpPerHour: '12k – 18k XP/hr (~12 min total)',
        ironmanPrep: '~10 min collecting Guam Leaves from Burthorpe Trolls + Eye of Newt from Poletax',
        gpPerHour: '+15,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: "Keep Attack Potions (3 Herblore!) for F2P PvM/KBD; sell extras at Poletax's Herblore Shop or Burthorpe General Store",
        notes: 'Attack Potions work 100% in F2P — brew them from Troll Guam drops!'
      },
      {
        levels: '1–5 Agility, Thieving & Hunter',
        method: 'Burthorpe Agility Course, Pompous Merchants & Polar Kebbits',
        prereqs: 'None (Noose Wand from Aleck/Hunter Tutor in Taverley)',
        location: 'Burthorpe / Taverley Market',
        xpPerHour: '10k – 15k XP/hr (~15 min total)',
        ironmanPrep: '0 min prep (free Noose Wand & no food needed)',
        gpPerHour: '+20,000 GP/hr',
        gpTrend: 'positive',
        whereToSell: 'Pickpocketing Pompous Merchants gives raw GP; sell Kebbit fur/items to Burthorpe General Store',
        notes: '5 Agility slightly improves Run Energy regeneration in F2P.'
      },
      {
        levels: '1–5 Farming, Construction, Slayer & Divination',
        method: 'Taverley Allotment, Plank Workbench, Turael Task & Pale Wisps',
        prereqs: '100 GP for 2–4 Sawmill Planks, Potato Seeds (Taverley Seed Stall)',
        location: 'Taverley / Burthorpe',
        xpPerHour: '8k – 14k XP/hr (~15 min total)',
        ironmanPrep: '~5 min chopping Normal Logs & turning into Planks at Taverley Sawmill (100 GP/plank)',
        gpPerHour: '-5,000 GP/hr',
        gpTrend: 'negative',
        whereToSell: 'Planks & Pale Energies are consumed (+36 easy Total Levels; sell farmed Potatoes to General Store)',
        notes: 'Turael Slayer tasks (e.g. Cows/Goblins/Trolls) stack seamlessly with early combat.'
      }
    ],
    tips: [
      'Always complete Wolf Whistle early so every Hill Giant, Moss Giant, and Greater Demon drops Gold/Crimson/Green Charms into your bank.',
      'Herblore Level 3 lets F2P Ironmen brew Attack Potions using Guam Leaves (Burthorpe Trolls) and Eyes of Newt (Poletax in Taverley).'
    ]
  }
];

export const SKILLS_DATA = enrichSkillsData(BASE_SKILLS_DATA);

export const MONEY_MAKING_DATA = [
  {
    id: 'may-quest-shop',
    title: "May's Quest Caravan (Magical Dice)",
    category: 'Milestone Burst GP',
    gpPerHour: '250,000 – 500,000 GP per Dice (Instant)',
    requirements: 'Every 25 Quest Points (25 QP, 50 QP)',
    risk: 'Safe',
    gimShareable: 'Indirectly (buy group consumables/feathers/shops)',
    description: 'Located just southwest of the Varrock Lodestone, May rewards you with a Tier 1 Magical Die (T1) at 25 Quest Points (+250k GP) and another at 50 Quest Points (+250k GP), plus useful Treasure Trail items.',
    steps: [
      'Complete quick Novice F2P quests (Cook\'s Assistant, Sheep Shearer, Restless Ghost, Ernest the Chicken, Goblin Diplomacy, etc.) to reach 25 and 40+ QP.',
      'Teleport to Varrock Lodestone and talk to May next to her caravan.',
      'Open the Quest Point Track and claim your Magical Dice (T1).',
      'Roll the dice in your inventory for an instant 250,000 GP cash injection per group member!'
    ]
  },
  {
    id: 'stronghold-security',
    title: 'Stronghold of Security & Player Safety',
    category: 'Starter Cash',
    gpPerHour: '20,000 GP Instant (10 min)',
    requirements: 'Account Security enabled; Level 10+ Combat recommended',
    risk: 'Safe',
    gimShareable: 'Pool towards early Feather Packs & Rune Shops',
    description: 'Every new Group Ironman character can claim 10,000 GP from the four floors of the Stronghold of Security in Barbarian Village, plus another 10,000 GP and two 500 XP lamps from the Stronghold of Player Safety.',
    steps: [
      'Enter the Stronghold of Security in the center of Barbarian Village (Gunnarsgrunn).',
      'Run through the 4 floors: Vault of War (2k GP), Catacomb of Famine (3k GP), Pit of Pestilence (5k GP), and Sepulchre of Death (Fancy/Fighting Boots).',
      'Head north toward Edgeville Jail and complete the Stronghold of Player Safety exam + hidden lever backdoor for 10,000 GP and Safety Gloves.'
    ]
  },
  {
    id: 'high-alch-smithing',
    title: 'Rune +3 Smithing & High Level Alchemy',
    category: 'Sustained GIM Engine',
    gpPerHour: '450,000 – 750,000 GP/hr',
    requirements: '50+ Mining, 50+ Smithing, 55 Magic (1 Group Member)',
    risk: 'Safe',
    gimShareable: 'Yes — Deposit Rune +3 items in Group Storage for the designated Alcher',
    description: 'Mining Runite & Luminite and smithing Rune Platebodies +3 or Rune 2h Swords +3 generates reliable pure coin via High Level Alchemy.',
    steps: [
      'Miners gather Runite Ore (Mining Guild / Wilderness / Karamja) and Luminite (Dwarven Mine).',
      'Smelt Runite Bars using Smelting Gauntlets (if unlocked) or Artisans\' Workshop.',
      'Smith Rune Platebodies up to +3 and pass them via Group Storage to your group member with 55 Magic.',
      'Cast High Level Alchemy using a Staff of Fire and Nature Runes.'
    ]
  },
  {
    id: 'shooting-stars',
    title: 'Shooting Star Daily D&D',
    category: 'Daily GP & Runes',
    gpPerHour: '50,000 GP + Cosmic/Astral Runes + 15m Double Ore Buff (10 min/day)',
    requirements: '10–90 Mining (scales by Star Size 1–9)',
    risk: 'Safe',
    gimShareable: 'Star sprite grants untradeable GP, Cosmic/Astral runes, and Gold/Runite ore buff',
    description: 'Once per day, mining 200 Stardust from a crashed Shooting Star rewards 50,000 coins, 152 Cosmic Runes, 52 Astral Runes, 20 Gold Ore, and a 15-minute buff where every ore mined gives double ore!',
    steps: [
      'Check the telescope in a POH or hop/join the "Star Find" Friends Chat to locate an active F2P Shooting Star.',
      'Mine the star until you have collected 200 Stardust (stacks in inventory).',
      'Fully mine the star down to expose the Star Sprite inside and claim your daily reward.',
      'Immediately go mine Runite Ore during your 15-minute double-ore buff!'
    ]
  },
  {
    id: 'cockroach-soldiers',
    title: 'Cockroach Soldiers & Ankous (Rune Salvage + Runes)',
    category: 'PvM Alchs',
    gpPerHour: '350,000 – 550,000 GP/hr',
    requirements: '50+ Combat, 55 Magic for Alching',
    risk: 'Safe',
    gimShareable: 'Yes — Trade Rune Salvage, Law/Death/Nature Runes & Gems via Group Storage',
    description: 'Cockroach Soldiers in the Stronghold of Player Safety drop Medium/Large Blunt Rune Salvage (alchs for 16,000–32,000 GP each!), plus Law, Death, and Nature runes and noted Mithril/Adamantite ore.',
    steps: [
      'Enter the crevice south of Edgeville Jail into the Stronghold of Player Safety dungeon.',
      'Use AoE Magic (Air Blast + Dragon Breath/Chain) or Melee (Rune +3 2h) to farm Cockroach Soldiers.',
      'Bring a Gem Bag, Nature Runes, and Fire Staff to High Alch all Rune Salvage on the spot.',
      'Collect all Law, Death, and Nature runes plus Carapace for Crafting XP.'
    ]
  },
  {
    id: 'crafting-jewellery-alch',
    title: 'Al Kharid Gem Rocks → Enchanted/Unstrung Jewellery Alchs',
    category: 'Skilling GP',
    gpPerHour: '250,000 – 400,000 GP/hr',
    requirements: '20 Mining, 40+ Crafting, 55 Magic',
    risk: 'Safe',
    gimShareable: 'Yes — Gems, Gold Bars, and Amulets can all be shared in Group Storage',
    description: 'Mining Common & Uncommon Gem Rocks in Al Kharid and crafting Gold/Silver Ruby & Diamond Amulets or Necklaces provides simultaneous Mining, Crafting, and Magic XP alongside solid alch value.',
    steps: [
      'Bring a Daemonheim Gem Bag to the Al Kharid Mine and mine Uncommon Gem Rocks.',
      'Mine Gold Ore in Rimmington or the Karamja Volcano (or Dwarven Mine).',
      'Craft Ruby and Diamond Amulets/Necklaces at the Edgeville or Lumbridge furnace.',
      'High Alch or sell surplus jewellery to the Port Sarim Jewellery Shop.'
    ]
  }
];

export const QUESTS_DATA = [
  {
    id: 'knights-sword',
    name: "The Knight's Sword",
    difficulty: 'Intermediate',
    qp: 1,
    priority: 'Rush Day 1',
    reqs: '10 Mining (able to run past Level 57 Ice Warriors)',
    itemsNeeded: '2 Iron Bars, 1 Redberry Pie (1 Pastry Dough + 1 Cooking Apple/Redberries + Pie Dish)',
    rewards: '12,725 Smithing XP (boosts level 1 → 29 instantly!)',
    gimTip: 'One member can bake Redberry Pies and mine extra Blurite Ore for the whole group during the quest!'
  },
  {
    id: 'vampire-slayer',
    name: 'Vampyre Slayer',
    difficulty: 'Novice',
    qp: 3,
    priority: 'Rush Day 1',
    reqs: 'Able to defeat Count Draynor (Level 28)',
    itemsNeeded: '1 Beer, 1 Garlic (upstairs in Morgan\'s house), Stake & Hammer (from Dr. Harlow)',
    rewards: '4,825 Attack XP (boosts level 1 → 20 instantly!)',
    gimTip: 'Grab multiple cloves of Garlic from Morgan\'s cupboard in Draynor Village for all teammates at once.'
  },
  {
    id: 'restless-ghost',
    name: 'The Restless Ghost',
    difficulty: 'Novice',
    qp: 1,
    priority: 'Rush Day 1',
    reqs: 'None',
    itemsNeeded: 'None (Ghostspeak Amulet obtained during quest)',
    rewards: '1,125 Prayer XP (1 → 9 Prayer) + 5 Ancient Bones (1,000 extra Prayer XP)',
    gimTip: 'Keep the Ghostspeak Amulet for future quests and Morytania/Ghost interactions.'
  },
  {
    id: 'one-piercing-note',
    name: 'One Piercing Note',
    difficulty: 'Novice',
    qp: 2,
    priority: 'Early Rush',
    reqs: 'None',
    itemsNeeded: 'None',
    rewards: '2,000 Prayer XP + Illuminated God Book (+4 Prayer & +3 All Style Bonus in Pocket Slot!)',
    gimTip: 'The Illuminated God Book is a free best-in-slot early pocket item when you aren\'t filling Skilling Urns.'
  },
  {
    id: 'swept-away',
    name: 'Swept Away',
    difficulty: 'Novice',
    qp: 2,
    priority: 'Early Rush',
    reqs: 'None',
    itemsNeeded: 'None (all puzzle items on location)',
    rewards: '10 Bowls of Goulash (scales XP; gives huge early Prayer or Runecrafting XP) + Enchanted Broom (free Sorceress\'s Garden teleports)',
    gimTip: 'After the quest, bring the Broomstick to Apprentice Clara in Burthorpe for an extra 2,500 Magic XP!'
  },
  {
    id: 'imp-catcher',
    name: 'Imp Catcher',
    difficulty: 'Novice',
    qp: 1,
    priority: 'Early Rush',
    reqs: 'None',
    itemsNeeded: 'Red, Yellow, Black, and White Beads (dropped by Imps south of Falador / Karamja Volcano)',
    rewards: '875 Magic XP + Amulet of Accuracy (+4 all styles)',
    gimTip: 'Since beads are tradeable between regular Group Ironmen, farm Imps at Karamja Volcano together and swap duplicate beads!'
  },
  {
    id: 'dorics-quest',
    name: "Doric's Quest",
    difficulty: 'Novice',
    qp: 1,
    priority: 'Rush Day 1',
    reqs: '15 Mining recommended',
    itemsNeeded: '6 Clay, 4 Copper Ore, 2 Iron Ore',
    rewards: '1,300 Mining XP + 180 Coins + Unlock Doric\'s Anvil & Post-Quest Smithing Tasks',
    gimTip: 'One Miner can pre-mine 24 Clay, 16 Copper, and 8 Iron for a 4-player GIM so everyone finishes in 30 seconds.'
  },
  {
    id: 'cooks-assistant',
    name: "Cook's Assistant",
    difficulty: 'Novice',
    qp: 1,
    priority: 'Rush Day 1',
    reqs: 'None',
    itemsNeeded: '1 Super Large Egg, 1 Top-Quality Milk, 1 Extra Fine Flour',
    rewards: '300 Cooking XP + 500 Coins + 20 Sardines + Lower Burn Rate on Lumbridge Castle Range',
    gimTip: 'Unlocks the best F2P cooking range in the game right next to the Lumbridge Combat Academy bank chest.'
  },
  {
    id: 'beneath-cursed-tides',
    name: 'Beneath Cursed Tides',
    difficulty: 'Intermediate',
    qp: 1,
    priority: 'Mid-Game Goal',
    reqs: '30 Attack, 30 Strength, 30 Magic, 30 Mining, 30 Smithing, 30 Woodcutting, 30 Firemaking, 30 Cooking',
    itemsNeeded: 'Combat gear, Hatchet, Pickaxe, Tinderbox (Tool belt works)',
    rewards: '2,000 XP each in Attack, Strength, Magic, Mining, Smithing, Woodcutting, Firemaking, Cooking + Vannaka\'s Sword (T30) + Giant Oyster access!',
    gimTip: 'Unlocks Tutorial Island underwater Giant Oyster—check if accessible in your mode for monthly Fishing/Farming XP!'
  },
  {
    id: 'shadow-over-ashdale',
    name: 'Shadow over Ashdale',
    difficulty: 'Novice',
    qp: 2,
    priority: 'Mid-Game Goal',
    reqs: 'None (scales to your combat level)',
    itemsNeeded: 'Combat gear + food',
    rewards: '3x 1,250 XP Combat Lamps + 2,500 XP Any Skill Lamp + Unlock Agoroth Weekly Repeat!',
    gimTip: 'Even in F2P, fighting Agoroth gives Black Pearls (Bonus XP) — one of the best weekly routines.'
  },
  {
    id: 'death-of-chivalry',
    name: 'The Death of Chivalry',
    difficulty: 'Novice',
    qp: 3,
    priority: 'Mid-Game Goal',
    reqs: 'Scales to your combat level',
    itemsNeeded: 'Food & best combat gear',
    rewards: 'Combat XP Lamps (scales up to 25k+) + 2,500 Prayer XP + Dulcin Armour Override',
    gimTip: 'Wait until 35–45 Combat before claiming the lamps for significantly higher scaling XP.'
  },
  {
    id: 'dragon-slayer',
    name: 'Dragon Slayer',
    difficulty: 'Experienced',
    qp: 2,
    priority: 'Capstone F2P Goal',
    reqs: '32 Quest Points, able to defeat Elvarg (Level 63 Dragon)',
    itemsNeeded: '3 Steel Nails (90 actually: 3 Planks + 90 Steel Nails), Unfired Bowl, Wizard\'s Mind Bomb, Lobster Pot, Silk, Anti-Dragon Shield',
    rewards: '18,650 Strength XP + 18,650 Defence XP + Ability to equip Rune Platebody, Green D\'hide Body & Mystic Robe Top!',
    gimTip: 'Claim multiple Anti-Dragon Shields from Duke Horacio during the quest so every GIM member has backups for King Black Dragon (F2P boss!).'
  }
];

export const DAILY_CHECKLIST = [
  { id: 'feathers', label: 'Buy 10,000 Feathers (10 Feather Packs each at Lumbridge & Port Sarim)', category: 'Shop Run' },
  { id: 'runes-shop', label: 'Buy Fire, Air, Water, Earth & Body Runes from Burthorpe & Varrock (Zaff)', category: 'Shop Run' },
  { id: 'shooting-star', label: 'Mine 200 Stardust from a Crashed Shooting Star (50k GP + Runes + Double Ore buff)', category: 'D&D' },
  { id: 'vis-wax', label: 'Run Rune Goldberg Machine at 50 Runecrafting (Wizards\' Tower)', category: 'Daily' },
  { id: 'daily-challenges', label: 'Complete 3 Daily Skilling Challenges for big XP & Challenge Mystery Bags', category: 'Daily' },
  { id: 'goblin-raids', label: 'Check for Hollowtoof Goblin Raids (chance at Gud Raider Chainbody — BiS F2P Non-Degrading!)', category: 'Bossing' }
];
