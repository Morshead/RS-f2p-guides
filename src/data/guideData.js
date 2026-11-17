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

export const SKILLS_DATA = [
  {
    id: 'mining-smithing',
    name: 'Mining & Smithing',
    category: 'Artisan & Gathering',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'High — Smithing produces tradable (within GIM) melee gear, tools, and arrowheads up to Tier 50 (Rune +3).',
    overview: 'RS3\'s Mining & Smithing rework makes these two skills completely self-contained and essential for Group Ironman. Stamina resets on every click (or every 4-tick rockertunity), and rocks never deplete.',
    quests: [
      { name: "Doric's Quest", xp: '1,300 Mining XP', req: 'None (15 Mining recommended)' },
      { name: "The Knight's Sword", xp: '12,725 Smithing XP (1 → 29)', req: '10 Mining' },
      { name: 'What\'s Mine is Yours', xp: 'Smithing XP + Gofannon Amulet', req: '5 Smithing' }
    ],
    brackets: [
      { levels: '1–10', method: 'Copper & Tin Ore → Bronze Bars & Equipment', location: 'Burthorpe / Lumbridge SE Swamp', notes: 'Make a Bronze Ore Box immediately (stores 100 of each ore).' },
      { levels: '10–20', method: 'Iron Ore → Iron +1 Gear & Iron Ore Box', location: 'Varrock SW / Dwarven Mine', notes: 'Complete The Knight\'s Sword at 10 Mining to skip directly to 29 Smithing.' },
      { levels: '20–30', method: 'Coal & Iron → Steel Bars & Steel +1/+2', location: 'Dwarven Mine / Lumbridge West', notes: 'Unlock Coal Bag (4,000 DG tokens) for longer coal trips.' },
      { levels: '30–40', method: 'Mithril Ore & Coal → Mithril +2 Burial / Gear', location: 'Varrock SW / Dwarven Mine', notes: 'Artisans\' Workshop in Falador gives respect & fast Burial XP.' },
      { levels: '40–50', method: 'Adamantite & Luminite → Adamant +2', location: 'Dwarven Mine (Luminite) / Rimmington (Addy)', notes: 'Luminite is required for all Adamant & Runite smelting.' },
      { levels: '50–99', method: 'Runite + Luminite → Rune +3 / Burial Sets or Gem Rocks', location: 'Mining Guild (60+) / Wilderness / Artisans\' Workshop', notes: 'Rune Platebodies +3 alch well or convert into Burial Armour for peak F2P Smithing XP.' }
    ],
    tips: [
      'Click the sparkling rock ("Rockertunity") every time it moves for massive bonus progress and stamina refresh.',
      'Upgrade your Ore Box at every metal tier (1, 10, 20, 30, 40, 50) — at level 50 with achievements it holds up to 120–140 of each ore.',
      'In Group Ironman, funnel bars to one designated Smith so they reach 50+ first and unlock Rune +3 Pickaxes for the entire team.'
    ]
  },
  {
    id: 'melee-combat',
    name: 'Melee (Attack, Strength, Defence)',
    category: 'Combat',
    tier: 'Core Combat',
    maxF2pLevel: '99',
    gimSynergy: 'Medium — Fuelled by group-smithed weapons (Rune +3 2h/Dual Wield) and Dungeoneering Gravite weapons (T55).',
    overview: 'In RS3, weapon accuracy and damage scale heavily with weapon tier. Dual-wielding or 2H AoE abilities (Cleave, Hurricane, Quake, Meteor Strike) make multi-target training far faster than single-target.',
    quests: [
      { name: 'Vampyre Slayer', xp: '4,825 Attack XP (1 → 20)', req: 'Combat gear + Garlic/Stake' },
      { name: 'Dragon Slayer', xp: '18,650 Strength & 18,650 Defence XP', req: '32 Quest Points' },
      { name: 'The Death of Chivalry', xp: 'Combat XP Lamps + Override', req: 'None (scales to level)' }
    ],
    brackets: [
      { levels: '1–20', method: 'Burthorpe Troll Cave (Brutes/Shamans)', location: 'North of Burthorpe Lodestone', notes: 'Instant respawns, low hitpoints, great early XP and starter herb/seed drops.' },
      { levels: '20–40', method: 'Al Kharid Warriors / Guards / Cows', location: 'Al Kharid Palace / Edgeville', notes: 'Use Revolution++ bar with Slice, Cleave, Sever, and Smash.' },
      { levels: '40–60', method: 'Moss Giants / Hill Giants / Cockroach Soldiers', location: 'Varrock Sewers / Edgeville Dungeon / Stronghold of Player Safety', notes: 'Cockroach Soldiers drop Rune Scimitars, Rune Sq Shields, Law/Nature/Death runes, and Carapace.' },
      { levels: '60–99', method: 'Deadly Red Spiders / Greater Demons / Hellhounds', location: 'Varrock Sewers / Forinthry Dungeon / Wilderness', notes: 'Deadly Red Spiders have high HP and fast spawns; Greater Demons drop Rune items for group alching.' }
    ],
    tips: [
      'Configure Revolution to auto-trigger Basic and Threshold abilities; place AoE abilities (Cleave, Hurricane, Quake) at the front of your bar.',
      'Save 40,000–60,000 Dungeoneering tokens for a Gravite 2h Sword or Gravite Rapiers (Tier 55 — best-in-slot F2P melee weapons).',
      'Always carry a Gem Bag and Herb Bag / Rune pouch when killing Cockroach Soldiers or Ankous.'
    ]
  },
  {
    id: 'magic',
    name: 'Magic',
    category: 'Combat',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'Critical — Level 55 unlocks High Level Alchemy, the single biggest raw GP generator for a F2P Group Ironman team.',
    overview: 'Magic in RS3 uses elemental spells (Air/Water/Earth/Fire Strike → Bolt → Blast) that only consume runes on auto-attacks—Revolution abilities do NOT consume runes! This makes Magic extremely rune-efficient in RS3.',
    quests: [
      { name: 'Imp Catcher', xp: '875 Magic XP', req: '4 Elemental/Color Beads (can share in GIM!)' },
      { name: "Witch's Potion", xp: '325 Magic XP', req: 'None' }
    ],
    brackets: [
      { levels: '1–17', method: 'Air Strike at Trolls / Chicken / Cows', location: 'Burthorpe Troll Cave / Lumbridge', notes: 'Claim free Air Staff from Wizard Tower or Diango/Burthorpe.' },
      { levels: '17–40', method: 'Air/Fire Bolt at Hill Giants or Al Kharid Warriors', location: 'Edgeville Dungeon / Al Kharid', notes: 'Equip elemental staves (Staff of Air/Fire from Zaff in Varrock) for infinite elemental runes.' },
      { levels: '40–55', method: 'Air Blast at Cockroach Soldiers or Lesser Demons', location: 'Stronghold of Player Safety / Karamja Volcano', notes: 'Rush 55 Magic as early as possible for High Level Alchemy.' },
      { levels: '55–99', method: 'High Level Alchemy + AoE Combat (Chain/Dragon Breath)', location: 'Varrock Sewers / Edgeville Dungeon / Anywhere', notes: 'Unlock Dragon Breath (52 Constitution/Magic) and Chain for multi-target magic training.' }
    ],
    tips: [
      'Abilities cast via Revolution consume ZERO runes—use an Air Staff and Air spells to train Magic virtually for free!',
      'Buy Batwing and Mystic robe pieces from Champions\' Guild (32 QP) or craft Spider Silk (20) / Batwing (30) / Mystic (50).',
      'Gravite Staff (Tier 55 from Dungeoneering) is the strongest F2P Magic weapon.'
    ]
  },
  {
    id: 'ranged-fletching',
    name: 'Ranged & Fletching',
    category: 'Combat & Artisan',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'High — Fletching is fully F2P in RS3 (up to Magic Shortbow/Rune Arrows), letting one GIM member craft bows and ammo for everyone.',
    overview: 'Fletching was made a Free-to-Play skill in RS3. Combined with daily feather shop runs and group-smithed arrowheads, Ranged is completely self-sufficient.',
    quests: [
      { name: 'Shadow over Ashdale', xp: 'Scaling XP Lamps', req: 'None' }
    ],
    brackets: [
      { levels: '1–20', method: 'Fletch Arrow Shafts & Headless Arrows; Train Ranged on Trolls', location: 'Lumbridge / Burthorpe', notes: 'Buy Feather Packs from Lumbridge Fishing Shop & Port Sarim (1,000 feathers per pack).' },
      { levels: '20–30', method: 'Oak Shortbow/Shieldbow + Iron/Steel Arrows', location: 'Varrock / Edgeville Dungeon', notes: 'Abilities consume no ammunition in RS3—only auto-attacks use arrows!' },
      { levels: '30–50', method: 'Willow & Maple Shortbows + Mithril/Adamant Arrows', location: 'Daemonheim Resource Dungeon (30 DG for Maples)', notes: 'Daemonheim peninsula has a 30 Dungeoneering resource dungeon with Maple trees right next to a bank.' },
      { levels: '50–99', method: 'Magic Shortbow (50 Ranged) / Gravite Shortbow (55) at Greater Demons or Ankous', location: 'Stronghold of Security / Forinthry', notes: 'Buy Blue Wizard/Green D\'hide gear from Champions\' Guild or Oziach after Dragon Slayer.' }
    ],
    tips: [
      'At 30 Dungeoneering, unlock the Daemonheim peninsula Resource Dungeon (3,500 XP + Maple trees in F2P!).',
      'Like Magic, Ranged abilities do not consume arrows—1,000 Adamant or Rune arrows will last your entire GIM team weeks.',
      'Flax can be picked in Burthorpe/Taverley and spun into Bowstrings for profitable Fletching XP.'
    ]
  },
  {
    id: 'dungeoneering',
    name: 'Dungeoneering',
    category: 'Support',
    tier: 'S-Tier GIM Priority',
    maxF2pLevel: '99 (120 Virtual)',
    gimSynergy: 'Maximum — Group Ironmen can run Daemonheim floors together! Unlocks best-in-slot F2P weapons (Gravite T55), Gem Bag, Coal Bag, and Resource Dungeons.',
    overview: 'Daemonheim is the ultimate Group Ironman hub in F2P. Running floors as a coordinated GIM party speeds up floor clear times and rewards everyone with XP across all F2P skills plus Dungeoneering Tokens.',
    quests: [
      { name: 'Daemonheim Tasks (Easy/Medium)', xp: 'Aura upgrades & free runes/teleports', req: 'Various skill levels' }
    ],
    brackets: [
      { levels: '1–30', method: 'Complexity 6 Small Floors (1–15), Prestige Reset', location: 'Daemonheim (Ring of Kinship teleport)', notes: 'At 30 DG, unlock the Maple Tree Resource Dungeon outside Daemonheim.' },
      { levels: '30–55', method: 'Complexity 6 Small/Medium Party Floors (rush 1–15, full clear 16+)', location: 'Daemonheim', notes: 'Save tokens for Gem Bag (2,000), Coal Bag (4,000), and Scroll of Efficiency (20,000).' },
      { levels: '55–99', method: 'Group Medium/Large Floors ( highest 10 floors ) + C1/C6 Rush Low Floors', location: 'Daemonheim', notes: 'Buy Gravite 2h / Staff / Shortbow (40,000 tokens) and Amulet of Zealots / Arcane Blast Necklace.' }
    ],
    tips: [
      'Always reset your progress (Prestige) only AFTER completing every available floor at least once.',
      'Bind your highest tier 2H weapon, body armour, and 125 Law/Nature/Astral runes inside Daemonheim.',
      'Key Unlock Order: Gem Bag (2k) → Coal Bag (4k) → Scroll of Efficiency (20k) → Arcane Pulse/Blast Necklace (6.5k/15.5k) → Gravite Weapon (40k).'
    ]
  },
  {
    id: 'runecrafting',
    name: 'Runecrafting',
    category: 'Artisan',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'High — Level 50 unlocks the Rune Goldberg Machine (Vis Wax) and steady Nature/Water/Earth rune crafting.',
    overview: 'Runespan inside the Wizards\' Tower turns Runecrafting into an AFK, high-XP gathering activity with zero pure essence required. Traditional altar crafting is used when your GIM needs specific runes.',
    quests: [
      { name: 'Rune Mysteries', xp: '250 Runecrafting XP + Mind Spike', req: 'None' },
      { name: 'Beneath Cursed Tides', xp: 'Runecrafting & Cooking/Mining XP', req: '30 in several skills' }
    ],
    brackets: [
      { levels: '1–33', method: 'Runespan Lower Floor (Siphoning Esshounds, Esslings & Nodes)', location: 'Wizards\' Tower Top Floor Portal', notes: 'Prioritize siphoning elemental/chaotic nodes (Cyclones, Mind Storms, Water Pools) over creatures.' },
      { levels: '33–50', method: 'Runespan Middle Floor (Vine jumpers, Skulls, Chaotic Clouds)', location: 'Runespan', notes: 'Hit 50 RC as soon as possible to unlock the Rune Goldberg Machine.' },
      { levels: '50–99', method: 'Runespan High Nodes (Living Souls, Undead Souls, Bloody Skulls)', location: 'Runespan', notes: 'Produces massive AFK XP; use traditional altars with Pure Essence from Greater Demons/Ankous for elemental runes.' }
    ],
    tips: [
      'Always chase yellow/purple node spawns in Runespan—nodes give 2x to 4x the XP/hr of siphoning monsters.',
      'Mine Rune/Pure Essence after Rune Mysteries if your team needs bulk Air, Mind, Water, Earth, Fire, or Body runes.'
    ]
  },
  {
    id: 'crafting',
    name: 'Crafting',
    category: 'Artisan',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'High — Crafts Diamond Amulets (for Amulet of Power), Rings of Luck, Urns (20% bonus XP in gathering/artisan skills!), and Dragonhide armour.',
    overview: 'In RS3, Crafting unlocks Skilling Urns—which automatically fill as you train Mining, Smithing, Fishing, Cooking, Woodcutting, Prayer, and Runecrafting, then teleport away for +20% bonus XP!',
    quests: [
      { name: 'Goblin Diplomacy', xp: '200 Crafting XP + Gold Bar', req: 'None' },
      { name: 'Sheep Shearer', xp: '150 Crafting XP', req: 'None' },
      { name: 'Gunnar\'s Ground', xp: '200 Crafting XP + Antique Lamp (500 XP)', req: '5 Crafting' }
    ],
    brackets: [
      { levels: '1–20', method: 'Soft Clay Pottery & Skilling Urns (Cracked/Fragile)', location: 'Varrock West / Burthorpe / Barbarian Village', notes: 'Make Mining, Fishing, and Cooking urns for the whole Group Ironman storage!' },
      { levels: '20–40', method: 'Uncut Sapphire & Emerald Cutting (Al Kharid Gem Rocks)', location: 'Al Kharid North Mine', notes: 'Requires 20 Mining; use a Gem Bag from Daemonheim to hold 60 uncut gems per trip.' },
      { levels: '40–70', method: 'Ruby & Diamond Cutting / Gold & Silver Jewellery / Strong Urns', location: 'Al Kharid / Edgeville Furnace', notes: 'At 50 Crafting + 57 Magic, craft & enchant Diamond Amulets into Amulets of Power (+22 all styles).' },
      { levels: '70–99', method: 'Decorated Urns + Diamond Cutting / Green D\'hide Bodies', location: 'Edgeville /Daemonheim Crafting', notes: 'Decorated Cooking/Fishing/Mining urns are essential for late-game group skilling.' }
    ],
    tips: [
      'Store Gold and Silver bars inside the Artisan Metal Bank at any furnace so any furnace in Gielinor can access them!',
      'Always fire Skilling Urns and attach an elemental rune so teammates can equip them in their pocket slot.',
      'Keep one Chisel, Ring Mould, Amulet Mould, and Tiara Mould on your Tool Belt permanently.'
    ]
  },
  {
    id: 'fishing-cooking',
    name: 'Fishing & Cooking',
    category: 'Gathering & Artisan',
    tier: 'B-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'High — Provides all group PvM food (Trout, Salmon, Lobster, Swordfish) for Dragon Slayer, Giant Mole, King Black Dragon, and Wilderness bosses.',
    overview: 'Fishing and Cooking level hand-in-hand. Equipped Cooking & Fishing Urns boost XP rates by 20%.',
    quests: [
      { name: "Cook's Assistant", xp: '300 Cooking XP + Lumbridge Range Burn Reduction', req: 'None' },
      { name: 'Beneath Cursed Tides', xp: '2,000 Cooking XP + Vannaka\'s Sword', req: '30 Cooking, 30 Fishing, 30 Mining, 30 Smithing' }
    ],
    brackets: [
      { levels: '1–20', method: 'Crayfish Cages & Shrimp/Anchovies', location: 'Burthorpe / Lumbridge Swamp / Draynor', notes: 'Crayfish cages require no bait and are built into your Tool Belt.' },
      { levels: '20–40', method: 'Fly Fishing Trout (20) & Salmon (30)', location: 'Lumbridge River / Barbarian Village (Gunnarsgrunn)', notes: 'Buy feather packs daily; bank in Edgeville or cook on the spot.' },
      { levels: '40–99', method: 'Fly Fishing (Fastest XP) or Lobsters (40) & Swordfish (50) at Karamja', location: 'Lumbridge / Musa Point (Karamja)', notes: 'Talk to Customs Officer/Stiles on Musa Point? Note: Stiles is P2P, so use the Draynor/Port Sarim deposit box!' }
    ],
    tips: [
      'Port Sarim has a Bank Deposit Box right next to the Karamja ship (Monks of Entrana dock) — bank Lobsters & Swordfish in 15 seconds!',
      'Always cook on the Lumbridge Castle Ground Floor Range after completing Cook\'s Assistant for reduced burn chance.',
      'Equip Fragile/Plain/Strong Fishing and Cooking Urns with Water/Fire runes attached.'
    ]
  },
  {
    id: 'woodcutting-firemaking',
    name: 'Woodcutting & Firemaking',
    category: 'Gathering & Artisan',
    tier: 'B-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'Medium — Supplies logs for group Fletching and Bonfire HP boosts before boss fights.',
    overview: 'In RS3, adding logs to a Bonfire ("Add logs to bonfire") allows completely AFK Firemaking training with bonus XP for every fire spirit and extra fire tender.',
    quests: [
      { name: 'Gower Quest', xp: 'Multiple Lamp Rewards', req: '34 Quest Points' }
    ],
    brackets: [
      { levels: '1–15', method: 'Normal Trees → Bonfire', location: 'Lumbridge / Draynor', notes: 'Upgrade your Hatchet on your tool belt at 1, 10, 20, 30, 40, 50 Woodcutting.' },
      { levels: '15–30', method: 'Oak Trees → Oak Bonfire / Fletching', location: 'Draynor Village Bank / Varrock West', notes: 'Oaks right next to Draynor Bank are fast to bank or burn.' },
      { levels: '30–45', method: 'Willow Trees → Willow Bonfire', location: 'Draynor Village Shore', notes: 'Best Woodcutting XP in F2P outside of Maples/Acadia.' },
      { levels: '45–99', method: 'Maple Logs (Daemonheim 30 DG Resource Dungeon) or Willows', location: 'Daemonheim Peninsula Resource Dungeon', notes: 'Warming at a bonfire with 5 logs grants a temporary Maximum Life Points boost for bossing!' }
    ],
    tips: [
      'Have your group Smith craft a Rune Hatchet (50 Smithing) for every member\'s Tool Belt.',
      'Click every Fire Spirit that pops out of bonfires—they reward stacks of Elemental Runes, Charms, and Ores!'
    ]
  },
  {
    id: 'prayer',
    name: 'Prayer',
    category: 'Combat',
    tier: 'A-Tier GIM Priority',
    maxF2pLevel: '99',
    gimSynergy: 'High — Unlocks Protect from Magic (37), Protect from Missiles (40), and Protect from Melee (43), making all F2P bosses and revenants trivial.',
    overview: 'Getting 43 Prayer is a transformative milestone for every GIM member, unlocking full protection prayers (50% damage reduction in RS3 PvM, 100% against Elvarg/certain quest bosses).',
    quests: [
      { name: 'The Restless Ghost', xp: '1,125 Prayer XP (1 → 9)', req: 'None' },
      { name: 'One Piercing Note', xp: '2,000 Prayer XP + Illuminated God Book', req: 'None' },
      { name: 'Swept Away', xp: '10 Bowls of Goulash (Choose Prayer XP!)', req: 'None' }
    ],
    brackets: [
      { levels: '1–25', method: 'The Restless Ghost + One Piercing Note + Swept Away Lamps', location: 'Lumbridge / Al Kharid Abbey / Draynor', notes: 'Quests take you from 1 to ~26 Prayer without burying a single bone!' },
      { levels: '25–43', method: 'Big Bones (Hill/Moss Giants) or Wilderness Boneyard + Chaos Altar', location: 'Edgeville Dungeon / Wilderness Chaos Temple (Lvl 12)', notes: 'Wilderness Chaos Temple altar offers 350% Prayer XP (same as Gilded Altar!).' },
      { levels: '43–99', method: 'Accursed Ashes (Greater Demons) / Big Bones at Chaos Temple', location: 'Forinthry Dungeon / Wilderness Chaos Temple', notes: 'Use Cremation ability (unlocked via Ghost/Banshee drop) or Chaos Altar for best XP per bone.' }
    ],
    tips: [
      'Do NOT bury Big Bones raw on the ground! Offer them on the Wilderness Chaos Temple Altar (Level 12 Wilderness, safe PvP opt-out in RS3!) for 3.5x XP per bone.',
      'Since RS3 made Wilderness PvP opt-in (talk to Vala near Edgeville border to stay opted out of PvP), the Wilderness Chaos Altar is safe from PKers as long as you do not carry the Demonic Skull!'
    ]
  }
];

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
