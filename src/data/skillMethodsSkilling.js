export const SKILLING_METHODS = {
  mining: {
    skillPrereqLinks: [
      { label: 'Smithing: Ore Boxes & Pickaxes', section: 'skills', itemId: 'smithing', bracket: '29–40' },
      { label: "Quest: Doric's Quest", section: 'quests', itemId: 'dorics-quest' },
      { label: 'Dungeoneering: Gem & Coal Bags', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
      { label: 'Money: Shooting Star Daily Buff', section: 'money', itemId: 'shooting-stars' }
    ],
    brackets: [
      {
        levels: '1–10',
        methods: [
          {
            id: 'mining-1-10-copper-tin',
            tabLabel: 'Recommended: Copper & Tin',
            isRecommended: true,
            method: 'Copper & Tin Ore → Bronze Ore Box & Gear',
            prereqs: 'Bronze Pickaxe (on Tool Belt)',
            prereqLinks: [
              { label: 'Smithing Guide: 1–29 Skip', section: 'skills', itemId: 'smithing', bracket: '1–29' }
            ],
            location: 'Burthorpe Mine / Lumbridge SE Swamp',
            xpPerHour: '8k – 14k XP/hr',
            ironmanPrep: '0 min prep (self-gathered; smith Bronze Ore Box immediately)',
            gpPerHour: '+25,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Smelt & smith Bronze gear, then sell to Horvik's Armour Shop (Varrock) or Burthorpe General Store",
            notes: 'Mine ~60 Copper & 60 Tin first for Bronze Ore Box + Doric\'s Quest.',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest (Center)',
              target: 'Burthorpe Copper/Tin Rocks (NE)',
              sellSpot: "Burthorpe Furnace / Horvik's (Varrock)",
              routeNote: 'Mine 28 ores, bank or smelt right next to the Burthorpe anvil, then craft Bronze Ore Box.'
            },
            steps: [
              'Teleport to Burthorpe Lodestone and confirm your Bronze Pickaxe is on your Tool Belt.',
              'Mine 30 Copper and 30 Tin northeast of the Burthorpe anvil, clicking sparkling Rockertunities.',
              'Smelt 2 Bronze Bars and smith a Bronze Ore Box (stores 100 Copper & 100 Tin per trip).',
              'Mine extra Copper/Tin until Level 10, saving 4 Copper for Doric\'s Quest.'
            ]
          },
          {
            id: 'mining-1-10-clay',
            tabLabel: 'Alt: Clay for Doric & Urns',
            isRecommended: false,
            method: 'Soft Clay Mining (Doric\'s Quest & Crafting Urns)',
            prereqs: 'Bronze Pickaxe',
            prereqLinks: [
              { label: "Quest: Doric's Quest", section: 'quests', itemId: 'dorics-quest' },
              { label: 'Crafting Guide: Skilling Urns (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' }
            ],
            location: 'Burthorpe Clay Rocks / Varrock SW Mine',
            xpPerHour: '6k – 10k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+12,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Keep Clay for Doric\'s Quest (6 Clay) & Crafting Urns, or sell excess at Varrock General Store',
            notes: 'Pre-mines early Clay needed for Crafting Skilling Urns.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock West Bank',
              target: 'Varrock SW Mine (Clay Vein)',
              sellSpot: 'Barbarian Village Pottery / Varrock General Store',
              routeNote: 'Run southwest out of Varrock West gate to the clay rocks and bank back at Varrock West.'
            },
            steps: [
              'Teleport to Burthorpe or Varrock Lodestone.',
              'Mine Clay nodes (6 Clay for Doric\'s Quest, plus 100+ for early Crafting Urns).',
              'Bank Clay at Varrock West Bank or wet it with Jugs of Water in Burthorpe.',
              'Hand in 6 Clay, 4 Copper, and 2 Iron to Doric for 1,300 Mining XP.'
            ]
          }
        ]
      },
      {
        levels: '10–20',
        methods: [
          {
            id: 'mining-10-20-iron',
            tabLabel: 'Recommended: Iron Ore + Box',
            isRecommended: true,
            method: 'Iron Ore + Iron Ore Box',
            prereqs: "10 Mining, Iron Pickaxe, Doric's Quest",
            prereqLinks: [
              { label: "Quest: Doric's Quest", section: 'quests', itemId: 'dorics-quest' },
              { label: "Quest: The Knight's Sword", section: 'quests', itemId: 'knights-sword' }
            ],
            location: 'Varrock SW Mine / Dwarven Mine',
            xpPerHour: '14k – 20k XP/hr',
            ironmanPrep: '0 min prep (upgrade Iron Pickaxe & Ore Box at 10 Smithing)',
            gpPerHour: '+45,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or Varrock General Store (30%) on Iron +1 Platebodies (Horvik's buys base +0 only)",
            notes: 'Complete The Knight\'s Sword at 10 Mining to skip directly to 29 Smithing.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock West Bank',
              target: 'Varrock SW Iron Rocks (3-Rock Cluster)',
              sellSpot: "High/Low Alch or General Store (+1) / Horvik's (+0 only)",
              routeNote: 'Fill inventory + Iron Ore Box (holds 100 Iron), bank at Varrock West, or smelt at Edgeville.'
            },
            steps: [
              'Smith an Iron Pickaxe +1 and Iron Ore Box once you hit 10 Smithing.',
              'Head to Varrock SW Mine and stand between the Iron rocks.',
              'Click Rockertunities whenever they spark to fill your Iron Ore Box cleanly.',
              'Keep at least 2 Iron Bars for The Knight\'s Sword and 2 Iron Ore for Doric\'s Quest.'
            ]
          },
          {
            id: 'mining-10-20-rimmington',
            tabLabel: 'Alt: Rimmington / Falador',
            isRecommended: false,
            method: 'Rimmington Iron Ore (Quiet Spot)',
            prereqs: '10 Mining, Iron Pickaxe, Iron Ore Box',
            prereqLinks: [
              { label: 'Crafting: Jewellery & Port Sarim Sell', section: 'skills', itemId: 'crafting', bracket: '20–40' }
            ],
            location: 'Rimmington Mine → Port Sarim Deposit Box',
            xpPerHour: '12k – 18k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+40,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Smith Iron Platebodies & sell at Horvik's (Varrock) or Rimmington General Store",
            notes: 'Zero competition; easy deposit box east at Port Sarim docks.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Entrana Deposit Box',
              target: 'Rimmington Open-Pit Mine (West)',
              sellSpot: "Horvik's Armour Shop / General Store",
              routeNote: 'Lodestone to Port Sarim, run west into Rimmington Mine, fill Ore Box, and deposit east at the docks.'
            },
            steps: [
              'Teleport to Port Sarim Lodestone and run west to the Rimmington Mine.',
              'Mine Iron rocks while filling your Iron Ore Box.',
              'Run east back to the Port Sarim Entrana dock Deposit Box to bank ores quickly.',
              'Repeat until 20 Mining.'
            ]
          }
        ]
      },
      {
        levels: '20–30',
        methods: [
          {
            id: 'mining-20-30-gems',
            tabLabel: 'Recommended: Al Kharid Gems',
            isRecommended: true,
            method: 'Al Kharid Uncommon Gem Rocks',
            prereqs: '20 Mining, Steel Pickaxe, Gem Bag (2k DG Tokens)',
            prereqLinks: [
              { label: 'Dungeoneering: Gem Bag (2k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
              { label: 'Crafting: Gem Jewellery (20–40)', section: 'skills', itemId: 'crafting', bracket: '20–40' }
            ],
            location: 'Al Kharid North Mine',
            xpPerHour: '18k – 25k XP/hr',
            ironmanPrep: '0 min prep (Gem Bag holds 60 uncut gems per trip)',
            gpPerHour: '+85,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Cut Sapphires/Emeralds into Gold Jewellery & sell to Grum's Gold Exchange (Port Sarim) at 60% High Alch",
            notes: 'Simultaneously banks hundreds of Sapphires/Emeralds/Rubies for Crafting.',
            mapData: {
              terrain: 'city',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Al Kharid Palace Bank (South)',
              target: 'Al Kharid North Mine (Uncommon Gem Rocks)',
              sellSpot: "Grum's Gold Exchange (Port Sarim)",
              routeNote: 'Lodestone to Al Kharid, run north past the furnace into the canyon mine, fill Gem Bag + inventory.'
            },
            steps: [
              'Unlock the Gem Bag (2,000 Dungeoneering tokens) before long gem sessions.',
              'Teleport to Al Kharid Lodestone and run north into the Scorpion canyon mine.',
              'Mine Uncommon Gem Rocks on the western ledge, storing uncut gems in your Gem Bag.',
              'Bank at Al Kharid Bank (or cut on-site) and convert gems into jewellery for Grum\'s Gold Exchange.'
            ]
          },
          {
            id: 'mining-20-30-coal',
            tabLabel: 'Alt: Coal + Steel Prep',
            isRecommended: false,
            method: 'Coal Mining (Dwarven Mine / Lumbridge West)',
            prereqs: '20 Mining, Steel Pickaxe, Coal Bag (4k DG Tokens rec.)',
            prereqLinks: [
              { label: 'Dungeoneering: Coal Bag (4k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
              { label: 'Smithing: Steel & Mithril (29–40)', section: 'skills', itemId: 'smithing', bracket: '29–40' }
            ],
            location: 'Dwarven Mine / Lumbridge West Swamp',
            xpPerHour: '15k – 21k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+55,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High/Low Alch or Falador General Store (30% flat rate) on Steel +2 Platebodies (Horvik's buys base +0 only)",
            notes: 'Stockpiles Coal needed for Steel (20) & Mithril (30) Smithing.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank / Dwarven Deposit Box',
              target: 'Dwarven Mine Coal Veins',
              sellSpot: "Artisans' Workshop → Alch / Falador General Store (+2)",
              routeNote: 'Enter Dwarven Mine south of Ice Mountain or via Falador; deposit Coal at the 15 DG Resource Dungeon box.'
            },
            steps: [
              'Equip Steel Pickaxe + Ore Box (and Coal Bag if unlocked).',
              'Enter the Dwarven Mine via the northern entrance or Falador.',
              'Mine Coal veins until Ore Box + inventory are full.',
              'Bank at Falador East Bank or Dwarven Mine Resource Dungeon (15 DG).'
            ]
          }
        ]
      },
      {
        levels: '30–40',
        methods: [
          {
            id: 'mining-30-40-mithril',
            tabLabel: 'Recommended: Mithril & Coal',
            isRecommended: true,
            method: 'Mithril Ore & Coal',
            prereqs: '30 Mining, Mithril Pickaxe, Mithril Ore Box',
            prereqLinks: [
              { label: 'Smithing: Mithril +2 (29–40)', section: 'skills', itemId: 'smithing', bracket: '29–40' },
              { label: 'Crafting: Strong Mining Urns', section: 'skills', itemId: 'crafting', bracket: '40–70' }
            ],
            location: 'Dwarven Mine / Varrock SW',
            xpPerHour: '22k – 29k XP/hr',
            ironmanPrep: '0 min prep (1:1 Coal to Mithril ratio)',
            gpPerHour: '+95,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or Falador General Store (30%) on Mithril +2 (Wayne's Chains buys base +0 only)",
            notes: 'Keep Mining Urns active in pocket slot for +20% bonus XP.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank',
              target: 'Dwarven Mine Mithril Chamber',
              sellSpot: "High/Low Alch or Falador General Store (+2) / Wayne's (+0)",
              routeNote: 'Mine Mithril + Coal inside Dwarven Mine, then smelt/smith at Falador Artisans\' Workshop.'
            },
            steps: [
              'Craft a Mithril Pickaxe +2 and upgrade to Mithril Ore Box at 30 Smithing.',
              'Attach Earth Runes to Plain/Strong Mining Urns in your pocket slot.',
              'Mine 1:1 Mithril Ore and Coal inside the Dwarven Mine.',
              'Deposit directly into the Metal Bank at Falador Artisans\' Workshop.'
            ]
          },
          {
            id: 'mining-30-40-gems-alt',
            tabLabel: 'Alt: Uncommon Gems (GP)',
            isRecommended: false,
            method: 'Al Kharid Gem Rocks (Crafting Fuel)',
            prereqs: '20+ Mining, Mithril Pickaxe, Gem Bag',
            prereqLinks: [
              { label: 'Crafting: Gem Jewellery (20–40)', section: 'skills', itemId: 'crafting', bracket: '20–40' }
            ],
            location: 'Al Kharid North Mine',
            xpPerHour: '20k – 26k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+120,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Craft into Gold Jewellery & sell to Grum's Gold Exchange (Port Sarim)",
            notes: 'Great alternative if you want fast GP and Crafting XP simultaneously.',
            mapData: {
              terrain: 'city',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Al Kharid Bank',
              target: 'Al Kharid Uncommon Gem Rocks',
              sellSpot: "Grum's Gold Exchange (Port Sarim)",
              routeNote: 'Fill Gem Bag + inventory with Sapphires/Emeralds/Rubies and bank south at Al Kharid.'
            },
            steps: [
              'Upgrade to a Mithril Pickaxe and bring your Gem Bag to Al Kharid North Mine.',
              'Mine Uncommon Gem Rocks, clicking Rockertunities for instant rock clears.',
              'Store cut/uncut gems for 40–70 Crafting jewellery profit.',
              'Sell excess jewellery to Grum\'s Gold Exchange in Port Sarim.'
            ]
          }
        ]
      },
      {
        levels: '40–50',
        methods: [
          {
            id: 'mining-40-50-addy-luminite',
            tabLabel: 'Recommended: Addy & Luminite',
            isRecommended: true,
            method: 'Adamantite Ore & Luminite',
            prereqs: '40 Mining, Adamant Pickaxe, Adamant Ore Box',
            prereqLinks: [
              { label: 'Smithing: Adamant +2 (40–50)', section: 'skills', itemId: 'smithing', bracket: '40–50' },
              { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: 'Rimmington Mine (Addy) / Dwarven Mine (Luminite)',
            xpPerHour: '26k – 34k XP/hr',
            ironmanPrep: '0 min prep (Luminite is needed 1:1 with Adamantite & Runite)',
            gpPerHour: '+150,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Smith Adamant +2 Platebodies & High Alch (60%), Low Alch (40%), or General Store (30% flat rate — Horvik's rejects +2)",
            notes: 'Stockpile extra Luminite here — you will need hundreds for 50–99 Runite.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank / Dwarven Resource Box',
              target: 'Dwarven Mine Luminite & Rimmington Addy',
              sellSpot: "High Alch (60%) / Low Alch (40%) / General Store (30%)",
              routeNote: 'Alternate between Dwarven Mine Luminite veins and Rimmington Adamantite rocks.'
            },
            steps: [
              'Upgrade to Adamant Pickaxe +2 and Adamant Ore Box at 40 Smithing.',
              'Mine Luminite in the Dwarven Mine (SE tunnel or 15 DG Resource Dungeon).',
              'Mine matching quantities of Adamantite in Rimmington Mine (bank at Port Sarim Deposit Box).',
              'Smelt Adamantite Bars at Artisans\' Workshop for +2 Platebodies.'
            ]
          },
          {
            id: 'mining-40-50-gold',
            tabLabel: 'Alt: Gold Ore (Crafting)',
            isRecommended: false,
            method: 'Gold Ore Mining (Jewellery Supply)',
            prereqs: '40 Mining, Adamant Pickaxe',
            prereqLinks: [
              { label: 'Crafting: Ruby & Diamond Jewellery (40–70)', section: 'skills', itemId: 'crafting', bracket: '40–70' }
            ],
            location: 'Rimmington Mine / Karamja Volcano',
            xpPerHour: '22k – 28k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+180,000 GP/hr (with Gems)',
            gpTrend: 'positive',
            whereToSell: "Smelt Gold Bars & craft Ruby/Diamond Amulets for Grum's Gold Exchange or High Alch",
            notes: 'Powers Crafting 40–70 while stacking Mining XP.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Deposit Box',
              target: 'Rimmington Gold Rocks',
              sellSpot: "Edgeville Furnace → Grum's Gold Exchange",
              routeNote: 'Mine Gold in Rimmington, deposit at Port Sarim dock, and store smelted Gold Bars in Metal Bank.'
            },
            steps: [
              'Run west from Port Sarim Lodestone to Rimmington Mine Gold rocks.',
              'Fill inventory + Adamant Ore Box with Gold Ore.',
              'Deposit at the Port Sarim Entrana Deposit Box.',
              'Smelt Gold Bars at Edgeville Furnace directly into your Metal Bank for Crafting.'
            ]
          }
        ]
      },
      {
        levels: '50–99',
        methods: [
          {
            id: 'mining-50-99-runite',
            tabLabel: 'Recommended: Runite + Shooting Stars',
            isRecommended: true,
            method: 'Runite + Luminite & Daily Shooting Stars',
            prereqs: '50 Mining (60 for Mining Guild), Rune Pickaxe +3, Rune Ore Box',
            prereqLinks: [
              { label: 'Money: Shooting Star Double Ore Buff', section: 'money', itemId: 'shooting-stars' },
              { label: 'Smithing: Rune +3 Engine (50–99)', section: 'skills', itemId: 'smithing', bracket: '50–99' },
              { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: 'Mining Guild (Falador) / Wilderness / Dwarven Mine',
            xpPerHour: '32k – 45k XP/hr',
            ironmanPrep: '0 min prep (10 min daily Shooting Star grants 15 min Double Ore buff)',
            gpPerHour: '+300,000 – +450,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Smith Rune Platebodies +3 & High Alch (20,000 GP), Low Alch (13,333 GP), or General Store (10,000 GP at 30%; Scavvo's rejects +3)",
            notes: 'Use Shooting Star double-ore buff strictly on Runite rocks for peak GIM GP.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank / Artisans\' Metal Bank',
              target: 'Falador Mining Guild (60+) & Dwarven Luminite',
              sellSpot: "High Alch (20k) / Low Alch (13.3k) / General Store (10k)",
              routeNote: 'Lodestone to Falador, drop down Mining Guild ladder (60 Mining), fill Rune Ore Box, deposit at Artisans\' Workshop.'
            },
            steps: [
              'Craft or obtain a Rune Pickaxe +3 and Rune Ore Box (holds 120–140 Runite & Luminite).',
              'Each day, mine 200 Stardust from a Crashed Shooting Star for 50k GP + 15 min Double Ore buff.',
              'Immediately mine Runite in the Mining Guild (60+) or Wilderness (PvP opted-out) during the buff.',
              'Mine 1:1 Luminite in the Dwarven Mine and deposit all ores at Artisans\' Workshop.'
            ]
          },
          {
            id: 'mining-50-99-gems-afk',
            tabLabel: 'Alt: Gem Rocks AFK + Crafting',
            isRecommended: false,
            method: 'Al Kharid Uncommon Gems (AFK Crafting + Mining)',
            prereqs: '50+ Mining, Rune Pickaxe +3, Gem Bag',
            prereqLinks: [
              { label: 'Crafting: 70–99 Jewellery & Urns', section: 'skills', itemId: 'crafting', bracket: '70–99' }
            ],
            location: 'Al Kharid North Mine',
            xpPerHour: '28k – 36k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+240,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Grum's Gold Exchange (Port Sarim) or High Level Alchemy on Diamond/Ruby Amulets",
            notes: 'More AFK than Runite while banking thousands of Sapphires/Emeralds/Rubies.',
            mapData: {
              terrain: 'city',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Al Kharid Bank',
              target: 'Al Kharid Uncommon Gem Rocks',
              sellSpot: "Grum's Gold Exchange / High Alch",
              routeNote: 'AFK mine Uncommon Gems in Al Kharid and bank south once your Gem Bag (60) + inventory are full.'
            },
            steps: [
              'Equip Rune Pickaxe +3, Mining Urns, and Daemonheim Gem Bag.',
              'Click Uncommon Gem Rocks in Al Kharid North Mine.',
              'Fill Gem Bag (60) + 27 inventory slots before running south to Al Kharid Bank.',
              'Cut gems & craft Gold Jewellery whenever you need Crafting XP.'
            ]
          },
          {
            id: 'mining-50-99-luminite-coal',
            tabLabel: 'Alt: Luminite / Coal Bulk',
            isRecommended: false,
            method: 'Dwarven Mine Resource Dungeon Bulk Luminite',
            prereqs: '50+ Mining, 15 Dungeoneering, Rune Ore Box',
            prereqLinks: [
              { label: 'Dungeoneering: Resource Dungeons', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' }
            ],
            location: 'Dwarven Mine Resource Dungeon (15 DG)',
            xpPerHour: '30k – 38k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+120,000 GP/hr (Bar Supply)',
            gpTrend: 'positive',
            whereToSell: 'Funnel to Smithing for Rune +3 Platebody High Alchs',
            notes: 'Deposit box sits inside the resource dungeon itself — ultra-fast banking.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Falador Lodestone',
              bank: 'Resource Dungeon Deposit Box (On-Site)',
              target: 'Dwarven Resource Dungeon Luminite/Coal',
              sellSpot: "Falador Artisans' Workshop",
              routeNote: 'Enter Dwarven Mine, pass through the 15 DG Mysterious Door near King Scorpion, deposit right inside.'
            },
            steps: [
              'Hit 15 Dungeoneering to unlock the Dwarven Mine Resource Dungeon.',
              'Bring your Rune Ore Box + Coal Bag inside the dungeon.',
              'Mine Luminite & Coal continuously, banking at the dungeon Deposit Box in 5 seconds.',
              'Pair with Runite Ore at Falador Artisans\' Workshop.'
            ]
          }
        ]
      }
    ]
  },

  smithing: {
    skillPrereqLinks: [
      { label: "Quest: The Knight's Sword (1–29 Skip)", section: 'quests', itemId: 'knights-sword' },
      { label: 'Mining Guide: Ore & Luminite Gathering', section: 'skills', itemId: 'mining', bracket: '40–50' },
      { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' },
      { label: 'Dungeoneering: Scroll of Efficiency (20k)', section: 'skills', itemId: 'dungeoneering', bracket: '30–55' }
    ],
    brackets: [
      {
        levels: '1–29',
        methods: [
          {
            id: 'smithing-1-29-knights-sword',
            tabLabel: "Recommended: Knight's Sword Skip",
            isRecommended: true,
            method: "The Knight's Sword Quest Skip (1 → 29)",
            prereqs: '10 Mining, 2 Iron Bars, Redberry Pie',
            prereqLinks: [
              { label: "Quest: The Knight's Sword", section: 'quests', itemId: 'knights-sword' },
              { label: 'Mining: 10–20 Iron Ore', section: 'skills', itemId: 'mining', bracket: '10–20' },
              { label: 'Cooking: Redberry Pie Prep', section: 'skills', itemId: 'cooking', bracket: '1–20' }
            ],
            location: "Falador White Knights' Castle / Asgarnian Ice Dungeon",
            xpPerHour: '38k XP/hr (~20 min total)',
            ironmanPrep: '~15 min baking Redberry Pie, smelting 2 Iron Bars & mining Blurite',
            gpPerHour: '+15,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Keep spare Blurite items; sell base (+0) Bronze/Iron leftovers to Horvik's Armour Shop (Varrock)",
            notes: 'Never smith Bronze/Iron from 1–29; always do Knight\'s Sword after Doric\'s Quest.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Falador East Bank',
              target: 'Asgarnian Ice Dungeon (Blurite Wall)',
              sellSpot: "Squire (Falador Castle) / Horvik's",
              routeNote: 'Bake Redberry Pie (berries SE of Varrock), talk to Squire in Falador & Thurgo at Mudskipper Point, mine Blurite.'
            },
            steps: [
              'Reach 10 Mining and smelt 2 Iron Bars; pick Redberries SE of Varrock and bake a Redberry Pie (10 Cooking).',
              'Start The Knight\'s Sword with the Squire in Falador Castle courtyard, then speak to Reldo in Varrock Library.',
              'Take the pie + 2 Iron Bars to Thurgo south of Port Sarim (Mudskipper Point).',
              'Run past Ice Warriors in Asgarnian Ice Dungeon to mine Blurite Ore, return to Thurgo & Squire for 12,725 Smithing XP!'
            ]
          },
          {
            id: 'smithing-1-29-dorics',
            tabLabel: "Alt: Doric's Tasks + Bronze/Iron",
            isRecommended: false,
            method: "What's Mine is Yours + Bronze/Iron Gear",
            prereqs: '5 Smithing, Copper/Tin/Iron Ore',
            prereqLinks: [
              { label: 'Mining: Copper & Tin (1–10)', section: 'skills', itemId: 'mining', bracket: '1–10' }
            ],
            location: "Doric's Hut (North of Falador) / Artisans' Workshop",
            xpPerHour: '10k – 15k XP/hr',
            ironmanPrep: '~30 min mining Copper/Tin/Iron per 30 min smithing',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Horvik's Armour Shop (Varrock) or Falador General Store",
            notes: 'Good for completing Doric\'s post-quest tasks and unlocking the Gofannon Amulet.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Falador West Bank / Metal Bank',
              target: "Doric's Anvil & Artisans' Workshop",
              sellSpot: "Horvik's Armour Shop (Varrock)",
              routeNote: 'Use the anvil inside Doric\'s Hut north of Falador or Artisans\' Workshop in SE Falador.'
            },
            steps: [
              'Start What\'s Mine is Yours with Doric north of Falador at 5 Smithing.',
              'Smelt Bronze/Iron Bars into your Metal Bank at Falador Artisans\' Workshop.',
              'Craft Bronze/Iron Platebodies and Ore Boxes.',
              'Sell unwanted base (+0) Bronze/Iron gear to Horvik\'s Armour Shop in Varrock Square (upgraded +1 items go to General Store or Low/High Alch).'
            ]
          }
        ]
      },
      {
        levels: '29–40',
        methods: [
          {
            id: 'smithing-29-40-plates',
            tabLabel: 'Recommended: Steel & Mithril +2',
            isRecommended: true,
            method: 'Steel +1/+2 & Mithril +2 Platebodies (Profit)',
            prereqs: '29 Smithing, Iron + Coal / Mithril Ore',
            prereqLinks: [
              { label: 'Mining: 20–30 Coal & 30–40 Mithril', section: 'skills', itemId: 'mining', bracket: '30–40' }
            ],
            location: "Falador Artisans' Workshop",
            xpPerHour: '20k – 28k XP/hr (IM) | 55k/hr (Anvil)',
            ironmanPrep: '~35 min mining Iron/Coal/Mithril per 25 min smithing',
            gpPerHour: '+75,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or Falador General Store (30%) on +1/+2 gear (Wayne's Chains buys base +0 only)",
            notes: 'Upgrade your Iron/Steel/Mithril Pickaxes & Hatchets for the team here.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank (On-Site)',
              target: "Falador Artisans' Workshop Anvils",
              sellSpot: "High/Low Alch or Falador General Store (+1/+2) / Wayne's (+0)",
              routeNote: 'Smelt Bars at the Artisans\' Workshop furnace, forge at adjacent anvils, then High/Low Alch +1/+2 items or sell to Falador General Store at 30% (Wayne\'s only buys base +0 chainbodies).'
            },
            steps: [
              'Deposit mined Iron, Coal, and Mithril Ore into the Artisans\' Workshop Furnace.',
              'Smelt Steel Bars (29–30) then Mithril Bars (30–40) into your Metal Bank.',
              'Create Mithril Platebodies and upgrade them to +2 using the central Forge to reheat at <66% heat.',
              'Liquidate +1/+2 gear via High Alch (60%), Low Alch (40%), or Falador General Store (30% flat rate — specialty shops like Wayne\'s/Horvik\'s reject +1/+2 and only buy base +0 stock).'
            ]
          },
          {
            id: 'smithing-29-40-burial',
            tabLabel: 'Alt: Mithril Burial (Fast XP)',
            isRecommended: false,
            method: 'Mithril +2 Burial Armour Sets',
            prereqs: '30 Smithing, Mithril + Coal',
            prereqLinks: [
              { label: 'Mining: 30–40 Mithril & Coal', section: 'skills', itemId: 'mining', bracket: '30–40' }
            ],
            location: "Falador Artisans' Workshop Burial Anvils",
            xpPerHour: '36k – 44k XP/hr (IM) | 90k/hr (Anvil)',
            ironmanPrep: '~35 min mining Mithril & Coal per 25 min burial smithing',
            gpPerHour: '-110,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Item Destroyed (Burial Anvil consumes armour for +100% XP bonus & Workshop Respect)',
            notes: 'Negative GP/hr reflects lost shop/alch value when destroying Mithril +2 gear.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank',
              target: "Artisans' Workshop Burial Anvils (West Wing)",
              sellSpot: '0 GP (Items Destroyed on Burial Anvil)',
              routeNote: 'Smith full Mithril +2 armour set on standard anvils, then carry the +2 pieces to the Burial Anvil.'
            },
            steps: [
              'Smelt Mithril Bars (1 Mithril + 1 Coal) at the Artisans\' Workshop.',
              'Forge Mithril Full Helm +2, Platebody +2, Platelegs +2, Gauntlets +2, and Boots +2.',
              'Bring the +2 pieces to the Burial Anvils on the west side of the workshop.',
              'Receive massive bonus Smithing XP + Artisans\' Respect (items are permanently consumed).'
            ]
          }
        ]
      },
      {
        levels: '40–50',
        methods: [
          {
            id: 'smithing-40-50-addy-plates',
            tabLabel: 'Recommended: Addy +2 (Alch/Sell)',
            isRecommended: true,
            method: 'Adamant +2 Platebodies & Gear',
            prereqs: '40 Smithing, Adamantite + Luminite Ore',
            prereqLinks: [
              { label: 'Mining: 40–50 Addy & Luminite', section: 'skills', itemId: 'mining', bracket: '40–50' },
              { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: "Falador Artisans' Workshop",
            xpPerHour: '26k – 32k XP/hr (IM) | 68k/hr (Anvil)',
            ironmanPrep: '~38 min mining Adamantite & Luminite per 22 min smithing',
            gpPerHour: '+160,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy (55 Magic, 60%), Low Alch (21 Magic, 40%), or General Store (30% flat rate — Horvik's rejects +2 gear)",
            notes: 'Also craft Adamant Pickaxes +2 and Hatchets for your whole team.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank',
              target: "Artisans' Workshop Anvils",
              sellSpot: "High Alch (60%) / Low Alch (40%) / General Store (30%)",
              routeNote: 'Smelt Adamantite Bars (1 Addy + 1 Luminite), smith Platebodies +2, and High/Low Alch (or sell +2 to Falador General Store at 30% if pre-21 Magic).'
            },
            steps: [
              'Mine 1:1 Adamantite Ore (Rimmington) and Luminite (Dwarven Mine).',
              'Smelt Adamantite Bars into your Metal Bank at Artisans\' Workshop.',
              'Smith Adamant Platebodies and upgrade to +2 while keeping heat above 66%.',
              'High Alch (55 Magic, 60%), Low Alch (21 Magic, 40%), or sell +2 pieces to a General Store (30% flat rate; specialty shops like Horvik\'s reject +2 items).'
            ]
          },
          {
            id: 'smithing-40-50-addy-burial',
            tabLabel: 'Alt 1: Addy Burial (Max XP)',
            isRecommended: false,
            method: 'Adamant +2 Burial Armour Sets',
            prereqs: '40 Smithing, Adamantite + Luminite',
            prereqLinks: [
              { label: 'Mining: 40–50 Addy & Luminite', section: 'skills', itemId: 'mining', bracket: '40–50' }
            ],
            location: "Falador Artisans' Workshop Burial Anvils",
            xpPerHour: '38k – 48k XP/hr (IM) | 105k/hr (Anvil)',
            ironmanPrep: '~38 min mining Addy & Luminite per 22 min burial smithing',
            gpPerHour: '-150,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Item Destroyed (Consumes Addy +2 sets on Burial Anvil for double XP)',
            notes: 'Fastest sprint from 40 to 50 if you already have starting cash from Magical Dice.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank',
              target: "Artisans' Workshop Burial Anvils",
              sellSpot: '0 GP (Items Destroyed for Burial XP)',
              routeNote: 'Forge full Addy +2 set on normal anvils, then destroy on the west-side Burial Anvil.'
            },
            steps: [
              'Smelt 48+ Adamantite Bars per Burial Set.',
              'Upgrade Helm, Body, Legs, Boots & Gauntlets to +2.',
              'Step over to the Burial Anvil and destroy the +2 pieces for burst XP.',
              'Repeat until 50 Smithing unlocks Runite.'
            ]
          },
          {
            id: 'smithing-40-50-arrowheads',
            tabLabel: 'Alt 2: Addy Arrowheads (GIM)',
            isRecommended: false,
            method: 'Adamant Arrowheads (Group Fletching)',
            prereqs: '40 Smithing, Adamantite Bars',
            prereqLinks: [
              { label: 'Fletching: Arrows & Bows (55–70)', section: 'skills', itemId: 'fletching', bracket: '55–70' }
            ],
            location: "Falador Artisans' Workshop",
            xpPerHour: '18k – 24k XP/hr (IM)',
            ironmanPrep: '~35 min mining Addy + Luminite per 25 min smithing',
            gpPerHour: '+35,000 GP/hr (Ammo Value)',
            gpTrend: 'positive',
            whereToSell: 'Pass via Group Storage to Fletcher for 45 Fletching Adamant Arrows (or sell to Lowe\'s Archery)',
            notes: '1 bar = 75 arrowheads; 1,000 arrows supply your whole team for weeks.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank',
              target: "Artisans' Workshop Anvil",
              sellSpot: 'Group Storage / Lowe\'s Archery Emporium',
              routeNote: 'Smith 15–20 bars into 1,125+ Adamant Arrowtips, then deposit in Group Storage.'
            },
            steps: [
              'Smelt 20 Adamantite Bars into your Metal Bank.',
              'Select Adamant Arrowheads on the Anvil interface.',
              'AFK smith 1,500+ arrowheads.',
              'Combine with Headless Arrows for Fletching XP & Tier 40 Ranged ammo.'
            ]
          }
        ]
      },
      {
        levels: '50–99',
        methods: [
          {
            id: 'smithing-50-99-rune-alch',
            tabLabel: 'Recommended: Rune +3 (Alch GP)',
            isRecommended: true,
            method: 'Rune Platebodies +3 (High Alch Engine)',
            prereqs: '50–53 Smithing, Runite + Luminite, 55 Magic, Scroll of Efficiency (20k DG)',
            prereqLinks: [
              { label: 'Mining: 50–99 Runite + Stars', section: 'skills', itemId: 'mining', bracket: '50–99' },
              { label: 'Magic: High Level Alchemy (55–99)', section: 'skills', itemId: 'magic', bracket: '55–99' },
              { label: 'Dungeoneering: Scroll of Efficiency', section: 'skills', itemId: 'dungeoneering', bracket: '30–55' }
            ],
            location: "Falador Artisans' Workshop",
            xpPerHour: '28k – 35k XP/hr (IM) | 85k/hr (Anvil)',
            ironmanPrep: '~38 min mining Runite & Luminite (or Shooting Star buff) per 22 min smithing',
            gpPerHour: '+450,000 – +700,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy (20,000 GP each), Low Alch (13,333 GP), or General Store (10,000 GP at 30% — Scavvo's/Horvik's reject +3 gear)",
            notes: 'Primary F2P Group Ironman raw GP engine; funds all daily Feather & Rune shop runs.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank / Falador East Bank',
              target: "Artisans' Workshop Anvils",
              sellSpot: "High Alch (20,000 GP) / Low Alch (13,333 GP) / General Store (10,000 GP)",
              routeNote: 'Smelt Runite Bars at Artisans\' Furnace, upgrade Platebodies to +3, then High Alch right next to the bank.'
            },
            steps: [
              'Unlock Scroll of Efficiency (20k DG tokens) so smelting/smithing saves free Runite Bars.',
              'Smelt 1:1 Runite + Luminite into Runite Bars at Falador Artisans\' Workshop.',
              'Forge Rune Platebodies (base → +1 → +2 → +3), reheating at the forge whenever heat <66%.',
              'High Alch each Rune Platebody +3 for 20,000 GP (or Low Alch at 21 Magic for 13,333 GP, or sell to a General Store at 10,000 GP; specialty shops like Scavvo\'s reject +3 items).'
            ]
          },
          {
            id: 'smithing-50-99-rune-burial',
            tabLabel: 'Alt 1: Rune Burial (Max XP)',
            isRecommended: false,
            method: 'Rune +3 Burial Armour Sets',
            prereqs: '50–55 Smithing, 96 Runite + 96 Luminite per set',
            prereqLinks: [
              { label: 'Mining: 50–99 Runite + Stars', section: 'skills', itemId: 'mining', bracket: '50–99' }
            ],
            location: "Falador Artisans' Workshop Burial Anvils",
            xpPerHour: '45k – 58k XP/hr (IM) | 155k/hr (Anvil)',
            ironmanPrep: '~42 min mining Runite & Luminite per 18 min burial smithing',
            gpPerHour: '-320,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Item Destroyed (Consumes ~80,000 GP of alchable Rune +3 armour per set)',
            notes: 'Fastest F2P Smithing XP/hr; use once your group already has surplus coins.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank',
              target: "Artisans' Workshop Burial Anvils (West)",
              sellSpot: '0 GP (Items Destroyed for Burial XP)',
              routeNote: 'Create a complete Rune +3 set (Helm, Body, Legs, Boots, Gauntlets) and bury it on the west-wing anvil.'
            },
            steps: [
              'Smelt 96 Runite Bars into your Metal Bank per full Burial Set.',
              'Smith & upgrade Helm, Platebody, Platelegs, Boots, and Gauntlets to +3.',
              'Move to the Burial Anvil in the western bay of Artisans\' Workshop.',
              'Destroy the +3 pieces for massive Burial Smithing XP and Workshop Respect.'
            ]
          },
          {
            id: 'smithing-50-99-tools-arrows',
            tabLabel: 'Alt 2: GIM Gear & Rune Arrows',
            isRecommended: false,
            method: 'Rune +3 Pickaxes, Hatchets & Arrowheads',
            prereqs: '50–75 Smithing, Runite + Luminite',
            prereqLinks: [
              { label: 'Fletching: Rune Arrows (70–99)', section: 'skills', itemId: 'fletching', bracket: '70–99' }
            ],
            location: "Falador Artisans' Workshop",
            xpPerHour: '22k – 28k XP/hr (IM)',
            ironmanPrep: '~35 min mining Runite & Luminite per 25 min smithing',
            gpPerHour: '+120,000 GP/hr (Gear/Ammo Value)',
            gpTrend: 'positive',
            whereToSell: 'Distribute to Group Storage for all teammates, or High Alch surplus Rune 2h Swords +3',
            notes: 'First priority at 50 Smithing is crafting Rune +3 Pickaxes, Hatchets & 2h Swords for every teammate.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Artisans\' Metal Bank',
              target: "Artisans' Workshop Anvils",
              sellSpot: 'Group Storage / Bob\'s / High Alch',
              routeNote: 'Craft full Rune +3 tool & weapon sets first, then deposit into shared Group Storage.'
            },
            steps: [
              'Craft 1 Rune Pickaxe +3 and 1 Rune Hatchet for each teammate\'s Tool Belt.',
              'Smith Rune 2h Swords +3 and full Rune +3 armour for melee/defence teammates.',
              'At 75 Smithing, smith 1,500 Rune Arrowheads (20 bars) for group Ranged.',
              'High Alch any duplicates.'
            ]
          }
        ]
      }
    ]
  },

  fletching: {
    skillPrereqLinks: [
      { label: 'Woodcutting: Logs & 30 DG Maples', section: 'skills', itemId: 'woodcutting', bracket: '45–60' },
      { label: 'Crafting: Spinning Flax (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' },
      { label: 'Dungeoneering: 30 DG Maple Dungeon', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
      { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
    ],
    brackets: [
      {
        levels: '1–20',
        methods: [
          {
            id: 'fletch-1-20-headless',
            tabLabel: 'Recommended: Headless Arrows',
            isRecommended: true,
            method: 'Arrow Shafts & Headless Arrows',
            prereqs: '1–15 Woodcutting, Knife (Tool Belt), Feather Packs (6 GP/feather)',
            prereqLinks: [
              { label: 'Woodcutting: Normal Trees (1–15)', section: 'skills', itemId: 'woodcutting', bracket: '1–15' }
            ],
            location: 'Lumbridge / Burthorpe Bank',
            xpPerHour: '25k – 35k XP/hr (IM) | 75k/hr (Active)',
            ironmanPrep: '~20 min chopping Normal Logs + 2 min buying 10,000 Feathers (60k GP)',
            gpPerHour: '-60,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Keep Headless Arrows for Bronze–Rune Arrows (6 GP/feather at Hank in Lumbridge & Gerry in Port Sarim)',
            notes: 'Do not sell headless arrows — store them in Group Storage for Arrowheads.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge Trees & Bankstanding',
              sellSpot: 'Hank (Lumbridge) & Gerry (Port Sarim) Feather Shops',
              routeNote: 'Buy 10 Feather Packs (1,000 each) south at Lumbridge Swamp & Port Sarim, chop Normal logs, fletch shafts -> headless.'
            },
            steps: [
              'Buy 10 Feather Packs from Hank (Lumbridge Swamp) and Gerry (Port Sarim) for 60,000 GP total.',
              'Chop ~300 Normal Logs near Lumbridge or Burthorpe.',
              'Click logs in inventory to cut Arrow Shafts (15 shafts per log).',
              'Attach Feathers to Arrow Shafts to make Headless Arrows for 1–20+ Fletching.'
            ]
          },
          {
            id: 'fletch-1-20-shortbows',
            tabLabel: 'Alt: Normal Bows (No Cost)',
            isRecommended: false,
            method: 'Unstrung & Strung Shortbows/Shieldbows',
            prereqs: '1–15 Woodcutting, 10 Crafting (Flax optional)',
            prereqLinks: [
              { label: 'Woodcutting: Normal Trees (1–15)', section: 'skills', itemId: 'woodcutting', bracket: '1–15' }
            ],
            location: 'Burthorpe Spinning Wheel & Bank',
            xpPerHour: '15k – 22k XP/hr (IM)',
            ironmanPrep: '~25 min chopping Normal Logs + picking Flax in Burthorpe',
            gpPerHour: '+12,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Dargaud's Bow and Arrows (Burthorpe) or Brian's Archery Supplies (Rimmington)",
            notes: 'Costs 0 GP upfront if you are saving cash before your first Magical Die.',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Trees & Flax Field',
              sellSpot: "Dargaud's Bow and Arrows (Burthorpe)",
              routeNote: 'Chop logs NW of Burthorpe, pick Flax near Taverley wheel, spin Bowstrings, and sell bows north at Dargaud\'s.'
            },
            steps: [
              'Chop Normal Logs northwest of Burthorpe Bank.',
              'Fletch into Shortbows (5) and Shieldbows (10).',
              'Pick Flax between Burthorpe and Taverley and spin into Bowstrings at the Taverley Spinning Wheel.',
              'String the bows and sell them to Dargaud\'s Bow and Arrows in Burthorpe.'
            ]
          }
        ]
      },
      {
        levels: '20–35',
        methods: [
          {
            id: 'fletch-20-35-oak',
            tabLabel: 'Recommended: Oak Shieldbows',
            isRecommended: true,
            method: 'Oak Shortbows (20) & Oak Shieldbows (25)',
            prereqs: '20 Fletching, 15 Woodcutting, 10 Crafting (Bowstrings)',
            prereqLinks: [
              { label: 'Woodcutting: Oak Trees (15–30)', section: 'skills', itemId: 'woodcutting', bracket: '15–30' },
              { label: 'Crafting: Soft Clay & Early Crafting', section: 'skills', itemId: 'crafting', bracket: '1–20' }
            ],
            location: 'Draynor Village Bank / Burthorpe Wheel',
            xpPerHour: '22k – 28k XP/hr (IM) | 60k/hr (Active)',
            ironmanPrep: '~25 min chopping Oaks + ~15 min spinning Flax per 20 min fletching',
            gpPerHour: '+30,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Brian's Archery Supplies (Rimmington) or Lowe's Archery Emporium (Varrock) at 60% specialty value",
            notes: 'Sell strung bows directly to Brian\'s Archery Supplies to avoid wasting Nature Runes.',
            mapData: {
              terrain: 'city',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Oak Trees & Burthorpe Flax Wheel',
              sellSpot: "Brian's Archery Supplies (Rimmington)",
              routeNote: 'Chop Oaks right outside Draynor Bank, spin Flax in Burthorpe/Lumbridge, and sell notes/batches at Brian\'s in Rimmington.'
            },
            steps: [
              'Chop Oak Logs right outside Draynor Village Bank until you have 300–500 logs.',
              'Pick and spin matching Flax into Bowstrings at Lumbridge Castle (2nd floor) or Taverley.',
              'Cut Oak Logs into Oak Shortbows (20–25) then Oak Shieldbows (25–35) and string them.',
              'Teleport to Port Sarim and run west to Brian\'s Archery Supplies in Rimmington to sell for full shop value.'
            ]
          },
          {
            id: 'fletch-20-35-arrows',
            tabLabel: 'Alt: Iron & Steel Arrows',
            isRecommended: false,
            method: 'Iron (15) & Steel (30) Arrows',
            prereqs: '15–30 Fletching & Smithing, Headless Arrows',
            prereqLinks: [
              { label: 'Smithing: Steel Gear (29–40)', section: 'skills', itemId: 'smithing', bracket: '29–40' }
            ],
            location: 'Burthorpe / Varrock Anvil',
            xpPerHour: '24k – 32k XP/hr (IM)',
            ironmanPrep: '~25 min mining & smithing Arrowheads + daily Feathers',
            gpPerHour: '-35,000 GP/hr (Feather Cost)',
            gpTrend: 'negative',
            whereToSell: "Keep 1,000 arrows for Ranged; sell excess arrows to Brian's Archery Supplies (Rimmington)",
            notes: 'Zero Flax spinning required — uses smithed Iron/Steel bars instead.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank',
              target: "Artisans' Workshop → Bankstanding",
              sellSpot: "Brian's Archery Supplies (Rimmington)",
              routeNote: 'Smith Arrowheads from Metal Bank, attach to Headless Arrows at the bank.'
            },
            steps: [
              'Smith Iron/Steel Arrowheads (1 bar = 75 arrowtips) at Falador Artisans\' Workshop.',
              'Ensure you have matching Headless Arrows in your bank.',
              'Attach Arrowheads to Headless Arrows in batches of 150.',
              'Deposit 1,000 arrows in Group Storage for Ranged training.'
            ]
          }
        ]
      },
      {
        levels: '35–55',
        methods: [
          {
            id: 'fletch-35-55-willow',
            tabLabel: 'Recommended: Willow Shieldbows',
            isRecommended: true,
            method: 'Willow Shortbows (35) & Willow Shieldbows (40)',
            prereqs: '35 Fletching, 30 Woodcutting, Bowstrings',
            prereqLinks: [
              { label: 'Woodcutting: Willow Trees (30–45)', section: 'skills', itemId: 'woodcutting', bracket: '30–45' },
              { label: 'Dungeoneering: Unlock 30 DG Maples', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' }
            ],
            location: 'Draynor Shore / Burthorpe Wheel',
            xpPerHour: '28k – 36k XP/hr (IM) | 75k/hr (Active)',
            ironmanPrep: '~25 min chopping Willows at Draynor + ~15 min Flax per 20 min fletching',
            gpPerHour: '+55,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Brian's Archery Supplies (Rimmington) or Dargaud's Bow and Arrows (Burthorpe)",
            notes: 'Hit 30 Dungeoneering during this bracket to unlock the Daemonheim Maple Resource Dungeon.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Shore Willow Trees',
              sellSpot: "Brian's Archery Supplies (Rimmington)",
              routeNote: 'Chop Willows on Draynor shoreline, spin Bowstrings, and sell strung Willow Shieldbows to Brian in Rimmington.'
            },
            steps: [
              'Chop Willow Logs along the Draynor Village shore south of the bank.',
              'Pick Flax and spin Bowstrings at Lumbridge Castle or Taverley.',
              'Fletch Willow Shortbows (35–40) then Willow Shieldbows (40–55) and string them.',
              'Sell strung bows to Brian\'s Archery Supplies in Rimmington.'
            ]
          },
          {
            id: 'fletch-35-55-mithril-arrows',
            tabLabel: 'Alt: Mithril Arrows / Darts',
            isRecommended: false,
            method: 'Mithril Arrows (45)',
            prereqs: '45 Fletching, 30 Smithing, Feather Packs',
            prereqLinks: [
              { label: 'Smithing: Mithril Bars (29–40)', section: 'skills', itemId: 'smithing', bracket: '29–40' }
            ],
            location: 'Falador Bank / Lumbridge Bank',
            xpPerHour: '30k – 38k XP/hr (IM)',
            ironmanPrep: '~25 min mining & smithing Mithril Arrowtips + Feathers',
            gpPerHour: '-30,000 GP/hr (Feather Cost)',
            gpTrend: 'negative',
            whereToSell: "Keep for Ranged or sell to Brian's Archery Supplies / Lowe's Archery Emporium",
            notes: 'Fast alternative when you have spare Mithril Bars and Feathers.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank',
              target: "Artisans' Workshop Anvil",
              sellSpot: "Brian's Archery Supplies (Rimmington)",
              routeNote: 'Smelt Mithril Bars into Arrowtips at Artisans\' Workshop, combine with Headless Arrows.'
            },
            steps: [
              'Smith Mithril Arrowheads at Falador Artisans\' Workshop.',
              'Prepare matching Headless Arrows from daily Feather Packs.',
              'Fletch Mithril Arrows at any bank chest.',
              'Supply Group Storage or sell excess to Brian\'s Archery Supplies.'
            ]
          }
        ]
      },
      {
        levels: '55–70',
        methods: [
          {
            id: 'fletch-55-70-maple',
            tabLabel: 'Recommended: Maple Shieldbows',
            isRecommended: true,
            method: 'Maple Shortbows (50) & Maple Shieldbows (55)',
            prereqs: '50–55 Fletching, 45 Woodcutting, 30 Dungeoneering',
            prereqLinks: [
              { label: 'Dungeoneering: 30 DG Maple Dungeon', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
              { label: 'Woodcutting: Daemonheim Maples (45–60)', section: 'skills', itemId: 'woodcutting', bracket: '45–60' },
              { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: 'Daemonheim Peninsula Resource Dungeon',
            xpPerHour: '34k – 44k XP/hr (IM) | 95k/hr (Active)',
            ironmanPrep: '~25 min chopping Maples next to Daemonheim bank + ~15 min Flax per 20 min fletching',
            gpPerHour: '+95,000 – +140,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy (384 GP per Maple Shieldbow) or Brian's Archery Supplies (Rimmington)",
            notes: 'Maple Shieldbows alch well while giving huge Magic + Fletching synergy.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim 30 DG Maple Resource Dungeon',
              sellSpot: "High Level Alchemy / Brian's Archery Supplies",
              routeNote: 'Ring of Kinship teleport -> enter Resource Dungeon to the SW -> chop Maples -> bank 5 tiles east.'
            },
            steps: [
              'Teleport to Daemonheim with your Ring of Kinship and enter the 30 DG Resource Dungeon.',
              'Chop Maple Logs right beside the Daemonheim Courtyard bank chest.',
              'Spin Flax into Bowstrings and string Maple Shieldbows (55 Fletching).',
              'High Alch strung Maple Shieldbows for 384 GP each or sell to Brian\'s Archery Supplies.'
            ]
          },
          {
            id: 'fletch-55-70-addy-arrows',
            tabLabel: 'Alt: Adamant Arrows (60)',
            isRecommended: false,
            method: 'Adamant Arrows (60)',
            prereqs: '60 Fletching, 40 Smithing, Feather Packs',
            prereqLinks: [
              { label: 'Smithing: Adamant Arrowheads (40–50)', section: 'skills', itemId: 'smithing', bracket: '40–50' }
            ],
            location: 'Falador Bank',
            xpPerHour: '36k – 45k XP/hr (IM)',
            ironmanPrep: '~25 min mining & smithing Addy Arrowheads + Feathers',
            gpPerHour: '-25,000 GP/hr (Feather Cost)',
            gpTrend: 'negative',
            whereToSell: "Keep for Tier 40+ Ranged or sell at Brian's Archery Supplies",
            notes: 'Zero Flax needed; turns Adamantite Ore into peak mid-game Ranged ammo.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank',
              target: "Artisans' Workshop Anvil",
              sellSpot: "Group Storage / Brian's Archery Supplies",
              routeNote: 'Smith Addy Arrowheads at Artisans\' Workshop and attach to Headless Arrows.'
            },
            steps: [
              'Smith Adamant Arrowheads from your Metal Bank at Artisans\' Workshop.',
              'Combine with Headless Arrows at Falador East Bank.',
              'Bank 1,000+ arrows in Group Storage for Ranged teammates.',
              'Sell any unneeded surplus at Brian\'s Archery Supplies.'
            ]
          }
        ]
      },
      {
        levels: '70–99',
        methods: [
          {
            id: 'fletch-70-99-yew-magic',
            tabLabel: 'Recommended: Yew & Magic Bows',
            isRecommended: true,
            method: 'Yew Shieldbows (70) & Magic Shieldbows (85)',
            prereqs: '70–85 Fletching, 60–75 Woodcutting, 55 Magic',
            prereqLinks: [
              { label: 'Woodcutting: Yew Trees (60–99)', section: 'skills', itemId: 'woodcutting', bracket: '60–99' },
              { label: 'Magic: High Level Alchemy (55–99)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: 'Varrock Palace / Falador South Yews / Edgeville',
            xpPerHour: '38k – 48k XP/hr (IM) | 110k/hr (Active)',
            ironmanPrep: '~30 min chopping Yews/Magic + 15 min Flax per 15 min fletching',
            gpPerHour: '+140,000 – +220,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy (768 GP/Yew Shieldbow; 1,536 GP/Magic Shieldbow) or Brian's Archery Supplies",
            notes: 'Make sure to craft Magic Shortbows at level 80 for every Ranged teammate.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock East / Edgeville Bank',
              target: 'Varrock Palace / Edgeville Yews',
              sellSpot: "High Level Alchemy / Brian's Archery Supplies",
              routeNote: 'Chop Yews north of Varrock Palace or south of Edgeville Bank, string with Bowstrings, and High Alch.'
            },
            steps: [
              'Chop Yew Logs (60 WC) south of Edgeville Bank or north of Varrock Palace.',
              'Fletch Yew Shieldbows (70) and Magic Shieldbows (85) once unlocked.',
              'String bows with Bowstrings spun from Burthorpe Flax.',
              'High Alch strung Yew Shieldbows (768 GP) & Magic Shieldbows (1,536 GP) for pure coin.'
            ]
          },
          {
            id: 'fletch-70-99-rune-arrows',
            tabLabel: 'Alt: Rune Arrows (75)',
            isRecommended: false,
            method: 'Rune Arrows (75 Fletching + 75 Smithing)',
            prereqs: '75 Fletching, 75 Smithing, Feather Packs',
            prereqLinks: [
              { label: 'Smithing: Rune Arrowheads (50–99)', section: 'skills', itemId: 'smithing', bracket: '50–99' }
            ],
            location: "Falador Artisans' Workshop / Bank",
            xpPerHour: '40k – 50k XP/hr (IM)',
            ironmanPrep: '~25 min mining & smithing Runite Arrowheads + Feathers',
            gpPerHour: '+65,000 GP/hr (Ammo / Shop Sell)',
            gpTrend: 'positive',
            whereToSell: "Keep for Gravite Shortbow / Bossing, or sell excess at Brian's Archery Supplies",
            notes: 'Supplies BiS F2P arrows while training Fletching quickly without Flax.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank',
              target: "Artisans' Workshop Anvil",
              sellSpot: "Group Storage / Brian's Archery Supplies",
              routeNote: 'Smith Rune Arrowtips at Artisans\' Workshop, fletch onto Headless Arrows at Falador Bank.'
            },
            steps: [
              'Reach 75 Smithing and smelt Runite Bars into Rune Arrowheads (75 per bar).',
              'Prepare Headless Arrows using daily Feather Packs.',
              'Attach Rune Arrowheads at Falador Bank for fast Fletching XP.',
              'Store 1,000+ Rune Arrows in Group Storage for KBD & Giant Mole.'
            ]
          }
        ]
      }
    ]
  },

  woodcutting: {
    skillPrereqLinks: [
      { label: 'Smithing: Upgraded Tool Belt Hatchets', section: 'skills', itemId: 'smithing', bracket: '50–99' },
      { label: 'Dungeoneering: 30 DG Maple Resource Dungeon', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
      { label: 'Crafting: Woodcutting Urns (+20% XP)', section: 'skills', itemId: 'crafting', bracket: '40–70' },
      { label: 'Fletching: Convert Logs to Alchable Bows', section: 'skills', itemId: 'fletching', bracket: '55–70' }
    ],
    brackets: [
      {
        levels: '1–15',
        methods: [
          {
            id: 'wc-1-15-normal',
            tabLabel: 'Recommended: Normal Trees',
            isRecommended: true,
            method: 'Normal Trees (Bank for Shafts & Planks)',
            prereqs: 'Bronze/Iron Hatchet (Tool Belt)',
            prereqLinks: [
              { label: 'Fletching: Arrow Shafts (1–20)', section: 'skills', itemId: 'fletching', bracket: '1–20' }
            ],
            location: 'Lumbridge / Burthorpe',
            xpPerHour: '15k – 22k XP/hr',
            ironmanPrep: '0 min prep (upgrade Iron Hatchet at 10 WC)',
            gpPerHour: '+12,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch into Arrow Shafts or sell bows to Dargaud's (Burthorpe) / Lumbridge General Store",
            notes: 'Chop ~100 Normal Logs early for Dragon Slayer planks & starter Fletching.',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe NW Pine/Normal Trees',
              sellSpot: "Dargaud's Bow and Arrows (Burthorpe)",
              routeNote: 'Chop Normal Trees immediately west of Burthorpe Lodestone and bank at the central chest.'
            },
            steps: [
              'Check your Tool Belt has a Bronze Hatchet (upgrade to Iron at 10 Woodcutting).',
              'Chop Normal Trees around Burthorpe Bank or Lumbridge Castle.',
              'Bank logs for Dragon Slayer (3 Planks), Construction (1–5), and early Fletching.',
              'Switch to Oak Trees at Level 15.'
            ]
          },
          {
            id: 'wc-1-15-wc-fm',
            tabLabel: 'Alt: Chop & Burn (WC + FM)',
            isRecommended: false,
            method: 'Normal Trees → Immediate Bonfire',
            prereqs: 'Hatchet + Tinderbox on Tool Belt',
            prereqLinks: [
              { label: 'Firemaking: Normal Bonfire (1–15)', section: 'skills', itemId: 'firemaking', bracket: '1–15' }
            ],
            location: 'Lumbridge / Draynor',
            xpPerHour: '13k WC + 15k FM XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '-12,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Logs Burned (Zero banking — click Fire Spirits for runes/ores)',
            notes: 'Eliminates banking trips while leveling Firemaking simultaneously.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'No Banking Required',
              target: 'Lumbridge North Trees',
              sellSpot: 'Logs Destroyed on Bonfire',
              routeNote: 'Chop 28 Normal Logs, light 1 fire right beside the trees, and feed the other 27 logs to the bonfire.'
            },
            steps: [
              'Chop a full inventory of 28 Normal Logs.',
              'Light one log with your Tool Belt Tinderbox to start a fire.',
              'Click "Add logs to bonfire" to burn the remaining 27 logs AFK.',
              'Click any Fire Spirits that appear for bonus runes and charms.'
            ]
          }
        ]
      },
      {
        levels: '15–30',
        methods: [
          {
            id: 'wc-15-30-draynor-oak',
            tabLabel: 'Recommended: Draynor Oaks',
            isRecommended: true,
            method: 'Oak Trees at Draynor Village Bank',
            prereqs: '15 Woodcutting, Iron/Steel Hatchet',
            prereqLinks: [
              { label: 'Fletching: Oak Shieldbows (20–35)', section: 'skills', itemId: 'fletching', bracket: '20–35' },
              { label: 'Crafting: Woodcutting Urns (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' }
            ],
            location: 'Draynor Village Bank',
            xpPerHour: '22k – 32k XP/hr',
            ironmanPrep: '0 min prep (Oak trees sit 4 tiles from Draynor Bank)',
            gpPerHour: '+25,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch Oak Shieldbows & sell to Brian's Archery Supplies (Rimmington)",
            notes: 'Keep 200+ Oak Logs banked for Fletching 20–35 & Firemaking.',
            mapData: {
              terrain: 'city',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Oak Trees (East & South)',
              sellSpot: "Brian's Archery Supplies (Rimmington)",
              routeNote: 'Chop Oaks directly east of Draynor Bank and step 4 tiles inside to deposit.'
            },
            steps: [
              'Equip Steel Hatchet at Level 20 Woodcutting and bring Woodcutting Urns.',
              'Teleport to Draynor Lodestone and stand by the Oak Trees right next to Draynor Bank.',
              'Chop full inventories and bank in 5 seconds.',
              'Save logs to fletch Oak Shieldbows for profitable sales at Brian\'s Archery Supplies.'
            ]
          },
          {
            id: 'wc-15-30-varrock-oak',
            tabLabel: 'Alt: Varrock West Oaks',
            isRecommended: false,
            method: 'Oak Trees North of Varrock West Bank',
            prereqs: '15 Woodcutting, Iron/Steel Hatchet',
            prereqLinks: [
              { label: 'Firemaking: Oak Bonfire (15–30)', section: 'skills', itemId: 'firemaking', bracket: '15–30' }
            ],
            location: 'Varrock West Gate',
            xpPerHour: '20k – 29k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch & sell to Lowe's Archery Emporium (Varrock Square)",
            notes: 'Convenient backup if Draynor Oak spots are crowded.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock West Bank',
              target: 'Varrock NW Oak Grove',
              sellSpot: "Lowe's Archery Emporium (Varrock)",
              routeNote: 'Step out of Varrock West Bank to the north wall Oaks and bank back inside.'
            },
            steps: [
              'Teleport to Varrock and walk to Varrock West Bank.',
              'Chop the Oak trees immediately outside the northwest wall.',
              'Deposit logs in Varrock West Bank.',
              'Convert to Oak Bows and sell east at Lowe\'s Archery Emporium.'
            ]
          }
        ]
      },
      {
        levels: '30–45',
        methods: [
          {
            id: 'wc-30-45-draynor-willows',
            tabLabel: 'Recommended: Draynor Willows',
            isRecommended: true,
            method: 'Willow Trees at Draynor Shore',
            prereqs: '30 Woodcutting, Mithril/Adamant Hatchet',
            prereqLinks: [
              { label: 'Fletching: Willow Shieldbows (35–55)', section: 'skills', itemId: 'fletching', bracket: '35–55' },
              { label: 'Quest: Beneath Cursed Tides', section: 'quests', itemId: 'beneath-cursed-tides' }
            ],
            location: 'Draynor Village Shoreline (South of Bank)',
            xpPerHour: '35k – 48k XP/hr',
            ironmanPrep: '0 min prep (use Woodcutting Urns for +20% XP)',
            gpPerHour: '+40,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch Willow Shieldbows & sell to Brian's Archery Supplies or Lowe's Archery Emporium",
            notes: 'Bank logs for 35–55 Fletching or drop via keybind for peak XP/hr.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Shore Willow Grove (SW)',
              sellSpot: "Brian's Archery Supplies (Rimmington)",
              routeNote: 'Walk 10 seconds southwest from Draynor Bank to the shoreline Willows; avoid Dark Wizards to the east.'
            },
            steps: [
              'Upgrade to Mithril Hatchet (30) then Adamant Hatchet (40) on your Tool Belt.',
              'Equip Plain/Strong Woodcutting Urns with Earth Runes attached.',
              'Chop Willow Trees on the Draynor Village shoreline.',
              'Bank logs at Draynor Bank (10s run) for Willow Shieldbows or Firemaking.'
            ]
          },
          {
            id: 'wc-30-45-port-sarim',
            tabLabel: 'Alt: Port Sarim Willows',
            isRecommended: false,
            method: 'Port Sarim South Willows (Deposit Box)',
            prereqs: '30 Woodcutting, Mithril Hatchet',
            prereqLinks: [
              { label: 'Fishing: Port Sarim Deposit Box', section: 'skills', itemId: 'fishing', bracket: '40–50' }
            ],
            location: 'Port Sarim / Rimmington Coast',
            xpPerHour: '32k – 44k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+35,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch & sell right nearby at Brian's Archery Supplies (Rimmington)",
            notes: 'Zero Dark Wizard aggression and close to Port Sarim Deposit Box.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Entrana Deposit Box',
              target: 'Port Sarim Coast Willows',
              sellSpot: "Brian's Archery Supplies (Rimmington)",
              routeNote: 'Chop Willows along the coast south of Port Sarim Lodestone, deposit at the Entrana dock box.'
            },
            steps: [
              'Teleport to Port Sarim Lodestone and head south along the shoreline.',
              'Chop Willow trees cleanly with zero hostile NPCs.',
              'Deposit logs at the Port Sarim Entrana dock Deposit Box.',
              'Fletch Willow Bows and sell nearby in Rimmington.'
            ]
          }
        ]
      },
      {
        levels: '45–60',
        methods: [
          {
            id: 'wc-45-60-maples',
            tabLabel: 'Recommended: Daemonheim Maples',
            isRecommended: true,
            method: 'Maple Trees (Daemonheim 30 DG Resource Dungeon)',
            prereqs: '45 Woodcutting, 30 Dungeoneering, Adamant/Rune Hatchet',
            prereqLinks: [
              { label: 'Dungeoneering: 30 DG Unlock (1–30)', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
              { label: 'Fletching: Maple Shieldbows (55–70)', section: 'skills', itemId: 'fletching', bracket: '55–70' }
            ],
            location: 'Daemonheim Peninsula Resource Dungeon',
            xpPerHour: '45k – 55k XP/hr',
            ironmanPrep: '0 min prep (Daemonheim bank chest is 5 seconds from dungeon door)',
            gpPerHour: '+75,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch Maple Shieldbows & High Alch (384 GP each) or sell to Brian's Archery Supplies",
            notes: 'Best F2P Woodcutting + Fletching resource hub in RuneScape.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Resource Dungeon (6 Maple Trees)',
              sellSpot: "High Level Alchemy / Brian's Archery Supplies",
              routeNote: 'Ring of Kinship teleport -> enter Resource Dungeon SW -> chop Maples -> bank chest 5s outside.'
            },
            steps: [
              'Reach 30 Dungeoneering and claim/equip your free Ring of Kinship.',
              'Teleport to Daemonheim and enter the Resource Dungeon southwest of the Castle entrance (3,500 bonus DG XP on first entry!).',
              'Chop the 6 Maple Trees inside while filling Woodcutting Urns.',
              'Step outside to the Daemonheim Courtyard bank chest and deposit all Maple Logs.'
            ]
          },
          {
            id: 'wc-45-60-willow-alt',
            tabLabel: 'Alt: Draynor Willows (No 30 DG)',
            isRecommended: false,
            method: 'Willow Trees + Urns (Pre-30 Dungeoneering)',
            prereqs: '40+ Woodcutting, Adamant/Rune Hatchet',
            prereqLinks: [
              { label: 'Dungeoneering: Rush Level 30 DG', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' }
            ],
            location: 'Draynor Village Shoreline',
            xpPerHour: '40k – 50k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+45,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch Willow Shieldbows → Brian's Archery Supplies (Rimmington)",
            notes: 'Use this only until you finish 30 Dungeoneering for Daemonheim Maples.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Shore Willows',
              sellSpot: "Brian's Archery Supplies",
              routeNote: 'Continue Draynor shoreline Willows until you unlock 30 Dungeoneering.'
            },
            steps: [
              'Upgrade to a Rune Hatchet at 50 Woodcutting (smithed at 50 Smithing).',
              'Equip Strong Woodcutting Urns for +20% XP.',
              'Chop Willows at Draynor Shore and bank.',
              'Unlock 30 Dungeoneering as soon as possible for Maples.'
            ]
          }
        ]
      },
      {
        levels: '60–99',
        methods: [
          {
            id: 'wc-60-99-maples-max',
            tabLabel: 'Recommended: Maples (Max XP)',
            isRecommended: true,
            method: 'Daemonheim Maple Trees + Decorated Urns',
            prereqs: '50+ Woodcutting, 30 Dungeoneering, Rune Hatchet, Decorated Urns',
            prereqLinks: [
              { label: 'Crafting: Decorated Urns (70–99)', section: 'skills', itemId: 'crafting', bracket: '70–99' },
              { label: 'Fletching: Maple Shieldbows (55–70)', section: 'skills', itemId: 'fletching', bracket: '55–70' }
            ],
            location: 'Daemonheim Peninsula Resource Dungeon',
            xpPerHour: '50k – 58k XP/hr',
            ironmanPrep: '0 min prep (Decorated WC Urns + Earth Runes)',
            gpPerHour: '+85,000 GP/hr (Maple Shieldbow Alchs)',
            gpTrend: 'positive',
            whereToSell: "Fletch Maple Shieldbows & High Alch (384 GP) or burn on Daemonheim Bonfire",
            notes: 'Fastest F2P Woodcutting XP/hr all the way to 99.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim 30 DG Maple Resource Dungeon',
              sellSpot: 'High Level Alchemy (Maple Shieldbows)',
              routeNote: 'Ring of Kinship -> 30 DG Resource Dungeon -> fill inventory + Urns -> 5s bank run.'
            },
            steps: [
              'Equip a Rune Hatchet (50 Smithing) and Decorated Woodcutting Urns (76 Crafting).',
              'Teleport to Daemonheim and enter the 30 DG Maple Resource Dungeon.',
              'AFK chop Maple Trees and bank right outside at the Courtyard Bank Chest.',
              'Use banked Maple Logs for 99 Fletching (Alchs) or 99 Firemaking (Bonfires).'
            ]
          },
          {
            id: 'wc-60-99-yews',
            tabLabel: 'Alt: Yew Trees (AFK + High Alch)',
            isRecommended: false,
            method: 'Yew Trees (AFK + Yew Shieldbow Alchs)',
            prereqs: '60+ Woodcutting, Rune Hatchet, 70 Fletching (for Alch)',
            prereqLinks: [
              { label: 'Fletching: Yew Shieldbows (70–99)', section: 'skills', itemId: 'fletching', bracket: '70–99' },
              { label: 'Magic: High Level Alchemy (55–99)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: 'Edgeville / Varrock Palace / Falador South',
            xpPerHour: '28k – 36k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+90,000 – +110,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Fletch Yew Shieldbows & High Alch (768 GP each) or sell raw logs at General Stores",
            notes: 'Slower XP/hr than Maples, but very AFK and doubles alch GP per bow.',
            mapData: {
              terrain: 'city',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Yew Trees (South of Bank)',
              sellSpot: 'High Level Alchemy (Yew Shieldbows)',
              routeNote: 'Chop the two Yew trees immediately south of Edgeville Bank and deposit in 5 seconds.'
            },
            steps: [
              'Teleport to Edgeville Lodestone and walk east to Edgeville Bank.',
              'Chop the two Yew Trees directly south of the bank.',
              'Deposit Yew Logs and keep Decorated Woodcutting Urns active.',
              'Fletch into Yew Shieldbows (70 Fletching) and High Alch for 768 GP each.'
            ]
          }
        ]
      }
    ]
  },

  firemaking: {
    skillPrereqLinks: [
      { label: 'Woodcutting: Gather Logs (1–60)', section: 'skills', itemId: 'woodcutting', bracket: '45–60' },
      { label: 'Dungeoneering: 30 DG Maple Dungeon', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
      { label: 'Quest: Beneath Cursed Tides (30 FM)', section: 'quests', itemId: 'beneath-cursed-tides' }
    ],
    brackets: [
      {
        levels: '1–15',
        methods: [
          {
            id: 'fm-1-15-bonfire',
            tabLabel: 'Recommended: Normal Bonfire',
            isRecommended: true,
            method: 'Normal Logs on Bonfire',
            prereqs: 'Tinderbox (Tool Belt), Normal Logs',
            prereqLinks: [
              { label: 'Woodcutting: Normal Trees (1–15)', section: 'skills', itemId: 'woodcutting', bracket: '1–15' }
            ],
            location: 'Lumbridge / Burthorpe Bank',
            xpPerHour: '18k XP/hr (IM) | 45k/hr (Bonfire)',
            ironmanPrep: '~30 min chopping Normal Logs per 30 min burning',
            gpPerHour: '-12,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: "Logs Destroyed (Forfeits ~12k GP/hr bow value; sell Fire Spirit runes to Aubury's Rune Shop)",
            notes: 'Always add logs to an active bonfire for AFK XP + Fire Spirit drops.',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Bankside Bonfire',
              sellSpot: "Aubury's Rune Shop (Fire Spirit Runes)",
              routeNote: 'Withdraw 28 Normal Logs at Burthorpe Bank, light one, and add the rest to the bonfire.'
            },
            steps: [
              'Chop ~150 Normal Logs around Burthorpe or Lumbridge.',
              'Light 1 log right next to a bank chest (or join a group bonfire).',
              'Right-click -> "Add logs to bonfire" to burn the entire inventory AFK.',
              'Click Fire Spirits that spawn for extra Elemental Runes & Gold Charms.'
            ]
          },
          {
            id: 'fm-1-15-line',
            tabLabel: 'Alt: Line Firemaking',
            isRecommended: false,
            method: 'Active Line Firemaking (Normal Logs)',
            prereqs: 'Tinderbox, Normal Logs',
            prereqLinks: [
              { label: 'Woodcutting: Normal Trees (1–15)', section: 'skills', itemId: 'woodcutting', bracket: '1–15' }
            ],
            location: 'Grand Exchange / Varrock Square',
            xpPerHour: '20k XP/hr (IM) | 52k/hr (Active)',
            ironmanPrep: '~30 min chopping Normal Logs per 30 min burning',
            gpPerHour: '-14,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Logs Destroyed (0 GP return — no Fire Spirit spawns on line fires)',
            notes: 'Slightly faster tick burn speed at the cost of no AFK and no Fire Spirits.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock Lodestone',
              bank: 'Grand Exchange / Varrock West Bank',
              target: 'Varrock Open Plaza (East-West Lane)',
              sellSpot: '0 GP (Logs Destroyed)',
              routeNote: 'Withdraw 28 logs at Varrock West Bank, light logs in a straight line heading west-to-east.'
            },
            steps: [
              'Stand on an unobstructed east-west path near Varrock West Bank or GE.',
              'Put Normal Logs on your action bar and press the keybind to light rapidly.',
              'Walk backward automatically after each log lights.',
              'Bank and repeat until Level 15.'
            ]
          }
        ]
      },
      {
        levels: '15–30',
        methods: [
          {
            id: 'fm-15-30-oak-bonfire',
            tabLabel: 'Recommended: Oak Bonfire',
            isRecommended: true,
            method: 'Oak Logs on Bonfire (Draynor Bank)',
            prereqs: '15 Firemaking, 15 Woodcutting',
            prereqLinks: [
              { label: 'Woodcutting: Draynor Oaks (15–30)', section: 'skills', itemId: 'woodcutting', bracket: '15–30' }
            ],
            location: 'Draynor Village Bank',
            xpPerHour: '25k XP/hr (IM) | 70k/hr (Bonfire)',
            ironmanPrep: '~35 min chopping Oaks per 25 min bonfire',
            gpPerHour: '-25,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: "Logs Destroyed (Forfeits Oak Shieldbow value at Brian's Archery Supplies)",
            notes: 'Group teammates burning on the same bonfire boost XP per log by up to +4%.',
            mapData: {
              terrain: 'city',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Bank Bonfire',
              sellSpot: "Aubury's Rune Shop (Fire Spirit Runes)",
              routeNote: 'Chop Oaks right outside Draynor Bank and feed them to a shared bonfire 3 tiles from the bank teller.'
            },
            steps: [
              'Chop 300+ Oak Logs right outside Draynor Village Bank.',
              'Light an Oak Bonfire directly outside the bank door.',
              'Burn 28 logs per inventory while staying AFK.',
              'Always click Fire Spirits for free runes, ores, and charms.'
            ]
          },
          {
            id: 'fm-15-30-oak-line',
            tabLabel: 'Alt: Oak Line Firemaking',
            isRecommended: false,
            method: 'Active Oak Line Firemaking',
            prereqs: '15 Firemaking, Oak Logs',
            prereqLinks: [
              { label: 'Woodcutting: Varrock Oaks (15–30)', section: 'skills', itemId: 'woodcutting', bracket: '15–30' }
            ],
            location: 'Varrock West / Draynor Road',
            xpPerHour: '27k XP/hr (IM) | 78k/hr (Active)',
            ironmanPrep: '~35 min chopping Oaks per 25 min line burning',
            gpPerHour: '-27,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Logs Destroyed (0 GP return)',
            notes: 'High click intensity; skip if you prefer AFK bonfires + Fire Spirits.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock West Bank',
              target: 'Varrock West Lane',
              sellSpot: '0 GP (Logs Destroyed)',
              routeNote: 'Withdraw 28 Oak Logs and light in a 28-tile line back toward the bank.'
            },
            steps: [
              'Withdraw 28 Oak Logs from Varrock West Bank.',
              'Walk 28 tiles east along the clear street.',
              'Light logs one by one moving west back toward the bank.',
              'Deposit any clues/randoms and withdraw the next 28 logs.'
            ]
          }
        ]
      },
      {
        levels: '30–45',
        methods: [
          {
            id: 'fm-30-45-willow-bonfire',
            tabLabel: 'Recommended: Willow Bonfire',
            isRecommended: true,
            method: 'Willow Logs on Bonfire',
            prereqs: '30 Firemaking, 30 Woodcutting',
            prereqLinks: [
              { label: 'Woodcutting: Draynor Willows (30–45)', section: 'skills', itemId: 'woodcutting', bracket: '30–45' },
              { label: 'Quest: Beneath Cursed Tides', section: 'quests', itemId: 'beneath-cursed-tides' }
            ],
            location: 'Draynor Village Bank / Shore',
            xpPerHour: '34k XP/hr (IM) | 105k/hr (Bonfire)',
            ironmanPrep: '~38 min chopping Willows per 22 min bonfire',
            gpPerHour: '-40,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: "Logs Destroyed (Click Fire Spirits and sell extra runes to Aubury's Rune Shop)",
            notes: 'Do Beneath Cursed Tides once all 8 requirements hit Level 30 for +2,000 FM XP.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Bankside Bonfire',
              sellSpot: "Aubury's Rune Shop (Fire Spirit Drops)",
              routeNote: 'Chop Willows on Draynor Shore, then burn inventories on a shared bonfire right next to Draynor Bank.'
            },
            steps: [
              'Chop 400–600 Willow Logs along Draynor Shore.',
              'Burn Willow Logs on a bonfire next to Draynor Bank (ideally with GIM teammates for bonus XP).',
              'Click every Fire Spirit that spawns.',
              'Stop at 45 Firemaking once Maples unlock.'
            ]
          },
          {
            id: 'fm-30-45-willow-line',
            tabLabel: 'Alt: Willow Line Burn',
            isRecommended: false,
            method: 'Active Willow Line Firemaking',
            prereqs: '30 Firemaking, Willow Logs',
            prereqLinks: [
              { label: 'Woodcutting: Port Sarim Willows (30–45)', section: 'skills', itemId: 'woodcutting', bracket: '30–45' }
            ],
            location: 'Draynor Square / Grand Exchange',
            xpPerHour: '36k XP/hr (IM) | 115k/hr (Active)',
            ironmanPrep: '~38 min chopping Willows per 22 min line burning',
            gpPerHour: '-42,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Logs Destroyed (0 GP return)',
            notes: 'Fast burn option when clearing banked Willow Logs.',
            mapData: {
              terrain: 'city',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Bank',
              target: 'Draynor Market Square',
              sellSpot: '0 GP (Logs Destroyed)',
              routeNote: 'Run east out of Draynor Bank and light lines back toward the bank door.'
            },
            steps: [
              'Withdraw 28 Willow Logs from Draynor Bank.',
              'Line-burn east-to-west across Draynor Market Square.',
              'Re-bank immediately and repeat to 45 Firemaking.'
            ]
          }
        ]
      },
      {
        levels: '45–99',
        methods: [
          {
            id: 'fm-45-99-maple-bonfire',
            tabLabel: 'Recommended: Maple Bonfire',
            isRecommended: true,
            method: 'Maple Logs on Bonfire (Daemonheim Bank)',
            prereqs: '45 Firemaking, 45 Woodcutting, 30 Dungeoneering',
            prereqLinks: [
              { label: 'Woodcutting: Daemonheim Maples (45–60)', section: 'skills', itemId: 'woodcutting', bracket: '45–60' },
              { label: 'Dungeoneering: 30 DG Unlock (1–30)', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' }
            ],
            location: 'Daemonheim Courtyard Bank Chest',
            xpPerHour: '45k – 48k XP/hr (IM) | 150k – 185k/hr (Bonfire)',
            ironmanPrep: '~40 min chopping Maples in 30 DG dungeon per 20 min bonfire',
            gpPerHour: '-75,000 – -95,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Logs Destroyed (Sacrifices Maple Shieldbow alchs; Fire Spirits return ~10k GP/hr in runes/ores)',
            notes: 'Yew logs (60 FM) are slower IM XP/hr than Maples because Yews chop much slower.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Bankside Bonfire',
              sellSpot: "Aubury's Rune Shop (Fire Spirit Runes)",
              routeNote: 'Chop Maples in 30 DG Resource Dungeon, deposit at Daemonheim Bank Chest, and burn right beside the chest.'
            },
            steps: [
              'Chop bulk Maple Logs inside the Daemonheim 30 DG Resource Dungeon.',
              'Stand beside the Daemonheim Courtyard Bank Chest and light a Maple Bonfire.',
              'Burn 28 Maple Logs per inventory AFK (+10–15% XP with party tenders).',
              'Also burn 5 Maple Logs before any boss (Elvarg, KBD, Giant Mole) for a temporary Max HP boost!'
            ]
          },
          {
            id: 'fm-45-99-yew-bonfire',
            tabLabel: 'Alt: Yew Bonfire (60+ FM)',
            isRecommended: false,
            method: 'Yew Logs on Bonfire (Edgeville Bank)',
            prereqs: '60 Firemaking, 60 Woodcutting',
            prereqLinks: [
              { label: 'Woodcutting: Edgeville Yews (60–99)', section: 'skills', itemId: 'woodcutting', bracket: '60–99' }
            ],
            location: 'Edgeville Bank / Grand Exchange',
            xpPerHour: '30k – 36k XP/hr (IM) | 210k/hr (Bonfire)',
            ironmanPrep: '~46 min chopping Yews per 14 min bonfire',
            gpPerHour: '-105,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Logs Destroyed (Sacrifices 768 GP/bow Yew Shieldbow alchs)',
            notes: 'Ultra-AFK if you already chopped thousands of Yews, though Maples beat it for total IM XP/hr.',
            mapData: {
              terrain: 'city',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Bank Courtyard Bonfire',
              sellSpot: "Aubury's / Grum's (Fire Spirit Loot)",
              routeNote: 'Withdraw Yew Logs at Edgeville Bank and burn directly outside on a bonfire.'
            },
            steps: [
              'Chop Yew Logs south of Edgeville Bank.',
              'Light a Yew Bonfire beside Edgeville Bank.',
              'Feed 28 Yew Logs per trip and loot Fire Spirits.',
              'Keep 5 Yew Logs for max-tier F2P Bonfire HP boosts.'
            ]
          }
        ]
      }
    ]
  },

  fishing: {
    skillPrereqLinks: [
      { label: 'Crafting: Fishing Urns (+20% XP)', section: 'skills', itemId: 'crafting', bracket: '1–20' },
      { label: 'Runecrafting: Water Runes for Urns', section: 'skills', itemId: 'runecrafting', bracket: '1–33' },
      { label: 'Cooking: Cook Caught Fish (20–99)', section: 'skills', itemId: 'cooking', bracket: '20–40' },
      { label: 'Quest: Beneath Cursed Tides', section: 'quests', itemId: 'beneath-cursed-tides' }
    ],
    brackets: [
      {
        levels: '1–20',
        methods: [
          {
            id: 'fish-1-20-crayfish',
            tabLabel: 'Recommended: Crayfish Cages',
            isRecommended: true,
            method: 'Crayfish Cages (Zero Bait, Instant Bank)',
            prereqs: 'None (Crayfish Cage on Tool Belt)',
            prereqLinks: [
              { label: 'Crafting: Cracked Fishing Urns (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' },
              { label: 'Cooking: Crayfish & Shrimp (1–20)', section: 'skills', itemId: 'cooking', bracket: '1–20' }
            ],
            location: 'Burthorpe Pond (North of Bank)',
            xpPerHour: '12k – 18k XP/hr',
            ironmanPrep: '0 min prep (0 bait required)',
            gpPerHour: '+5,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge/Burthorpe General Store — or bank to cook for 1–20 Cooking',
            notes: 'Crayfish stack fast right next to Burthorpe Bank.',
            mapData: {
              terrain: 'river',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Fishing Pond (NE)',
              sellSpot: 'Burthorpe General Store / Cooking Range',
              routeNote: 'Fish Crayfish at the small pond northeast of Burthorpe Bank and bank in 5 seconds.'
            },
            steps: [
              'Teleport to Burthorpe Lodestone and walk to the pond northeast of the bank.',
              'Click "Cage Crayfish" (Tool Belt supplies the cage automatically).',
              'Equip Cracked Fishing Urns (with Water Runes) once unlocked at 2 Crafting.',
              'Bank Crayfish for 1–20 Cooking, or drop/sell at Burthorpe General Store.'
            ]
          },
          {
            id: 'fish-1-20-shrimp',
            tabLabel: 'Alt: Shrimp & Anchovies',
            isRecommended: false,
            method: 'Small Fishing Net (Shrimp & Anchovies)',
            prereqs: 'None (Small Net on Tool Belt)',
            prereqLinks: [
              { label: 'Cooking: Cook\'s Assistant & Early Fish', section: 'skills', itemId: 'cooking', bracket: '1–20' }
            ],
            location: 'Draynor Shore / Lumbridge Swamp',
            xpPerHour: '10k – 15k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+4,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge General Store (save 10+ Anchovies for Anchovy Pizzas later)',
            notes: 'Anchovies (15 Fishing) are useful later for 55 Cooking Anchovy Pizzas.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Draynor Village Bank',
              target: 'Draynor Fishing Spots (South Shore)',
              sellSpot: 'Draynor / Lumbridge General Store',
              routeNote: 'Walk 12 seconds south from Draynor Bank to the shoreline fishing spots.'
            },
            steps: [
              'Walk south from Draynor Bank to the Net fishing spots.',
              'Catch Shrimp (1) and Anchovies (15) using your Tool Belt Small Net.',
              'Bank catches at Draynor Bank.',
              'Cook on Lumbridge Castle Range after Cook\'s Assistant.'
            ]
          }
        ]
      },
      {
        levels: '20–40',
        methods: [
          {
            id: 'fish-20-40-fly',
            tabLabel: 'Recommended: Fly Fishing',
            isRecommended: true,
            method: 'Fly Fishing Trout (20) & Salmon (30)',
            prereqs: '20 Fishing, Feathers (6 GP each from Hank/Gerry), Fishing Urns rec.',
            prereqLinks: [
              { label: 'Crafting: Plain Fishing Urns (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' },
              { label: 'Runecrafting: Water Runes for Urns', section: 'skills', itemId: 'runecrafting', bracket: '1–33' },
              { label: 'Cooking: Trout & Salmon (20–40)', section: 'skills', itemId: 'cooking', bracket: '20–40' }
            ],
            location: 'Barbarian Village (Gunnarsgrunn) / Lumbridge River',
            xpPerHour: '25k – 40k XP/hr',
            ironmanPrep: '2 min/day buying Feather Packs (costs ~6,000 GP/hr in feathers)',
            gpPerHour: '-6,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Keep for Cooking/PvM (feather cost = -6k/hr; selling cooked salmon recoups ~10k GP/hr at Lumbridge General Store)',
            notes: 'Action-bar drop Trout/Salmon for fastest XP, or bank at Edgeville for Cooking.',
            mapData: {
              terrain: 'river',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank (North)',
              target: 'Barbarian Village River (East Bank)',
              sellSpot: 'Lumbridge General Store / Edgeville Range',
              routeNote: 'Lodestone to Edgeville, run south past the bridge to Barbarian Village river; bank north or cook on the village fire.'
            },
            steps: [
              'Buy daily Feather Packs from Hank (Lumbridge Swamp) and Gerry (Port Sarim).',
              'Craft Fishing Urns (Plain/Strong) and attach Water Runes for +20% XP.',
              'Fly Fish Trout (20) and Salmon (30) at Barbarian Village river.',
              'Bank at Edgeville Bank for Cooking, or cook on the Barbarian Village fire / drop via action bar.'
            ]
          },
          {
            id: 'fish-20-40-pike',
            tabLabel: 'Alt: Bait Fishing Pike (25)',
            isRecommended: false,
            method: 'Bait Fishing Pike (Fishing Bait)',
            prereqs: '25 Fishing, Fishing Bait (3 GP each at Hank/Gerry)',
            prereqLinks: [
              { label: 'Cooking: Early Cooking (20–40)', section: 'skills', itemId: 'cooking', bracket: '20–40' }
            ],
            location: 'Lumbridge River / Barbarian Village',
            xpPerHour: '18k – 26k XP/hr',
            ironmanPrep: '2 min buying Fishing Bait Packs at Port Sarim / Lumbridge',
            gpPerHour: '-3,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Keep for Cooking or sell to Lumbridge General Store',
            notes: 'Cheaper bait if you are saving Feathers strictly for Fletching.',
            mapData: {
              terrain: 'river',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge River East Bank',
              sellSpot: 'Lumbridge General Store',
              routeNote: 'Fish Pike directly east of Lumbridge Castle bridge and bank at the Combat Academy chest.'
            },
            steps: [
              'Buy Fishing Bait Packs from Hank in Lumbridge Swamp.',
              'Fish Pike along the Lumbridge River east of the castle.',
              'Bank at the Lumbridge Combat Academy bank chest.',
              'Switch back to Fly Fishing once you have surplus Feather Packs.'
            ]
          }
        ]
      },
      {
        levels: '40–50',
        methods: [
          {
            id: 'fish-40-50-lobsters',
            tabLabel: 'Recommended: Karamja Lobsters',
            isRecommended: true,
            method: 'Lobster Cages at Musa Point (Karamja)',
            prereqs: '40 Fishing, 60 GP round-trip Karamja Boat (0 bait)',
            prereqLinks: [
              { label: 'Cooking: Lobsters (40–50)', section: 'skills', itemId: 'cooking', bracket: '40–50' },
              { label: 'Crafting: Fishing Urns (+20% XP)', section: 'skills', itemId: 'crafting', bracket: '40–70' }
            ],
            location: 'Musa Point Dock (Karamja) → Port Sarim Deposit Box',
            xpPerHour: '20k – 26k XP/hr',
            ironmanPrep: '0 min prep (Lobster Cage on Tool Belt)',
            gpPerHour: '+22,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Wydin's Food Store (Port Sarim) or General Store — best kept in Group Storage for PvM",
            notes: 'Use the Bank Deposit Box on the Port Sarim Entrana Monk dock right beside the Karamja boat!',
            mapData: {
              terrain: 'coast',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Entrana Dock Deposit Box',
              target: 'Musa Point Pier (Karamja)',
              sellSpot: "Wydin's Food Store (Port Sarim)",
              routeNote: 'Pay 30 GP to sail to Karamja -> Cage Lobsters on the pier -> sail back for 30 GP -> deposit right on the next pier north.'
            },
            steps: [
              'Teleport to Port Sarim Lodestone with ~1,000 GP for boat fares + Strong Fishing Urns.',
              'Speak to the Seaman on the southern dock (30 GP) to sail to Musa Point, Karamja.',
              'Cage Lobsters on the Musa Point pier until 27–28 Lobsters fill your inventory.',
              'Sail back to Port Sarim (30 GP) and deposit all Lobsters at the Entrana Monk dock Deposit Box in 15 seconds.'
            ]
          },
          {
            id: 'fish-40-50-fly-xp',
            tabLabel: 'Alt: Fly Fishing (Faster XP)',
            isRecommended: false,
            method: 'Fly Fishing Trout & Salmon (XP Focus)',
            prereqs: '40 Fishing, Feathers, Fishing Urns',
            prereqLinks: [
              { label: 'Crafting: Fishing Urns (40–70)', section: 'skills', itemId: 'crafting', bracket: '40–70' }
            ],
            location: 'Barbarian Village River',
            xpPerHour: '36k – 44k XP/hr',
            ironmanPrep: '2 min/day Feather Shop Run',
            gpPerHour: '-6,500 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Drop fish via action bar or bank at Edgeville for Cooking',
            notes: 'Faster Fishing XP/hr than Lobsters if you do not need 1,200 HP PvM food yet.',
            mapData: {
              terrain: 'river',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Barbarian Village Fly Fishing Spots',
              sellSpot: 'Edgeville Bank / General Store',
              routeNote: 'Fly fish at Barbarian Village river and keybind-drop Trout/Salmon for max XP/hr.'
            },
            steps: [
              'Drag Raw Trout and Raw Salmon onto your action bar to drop with keybinds.',
              'Equip Strong Fishing Urns with Water Runes attached.',
              'Fly Fish at Barbarian Village until 50 Fishing.',
              'Bank Salmon if your Cooking still needs raw food.'
            ]
          }
        ]
      },
      {
        levels: '50–99',
        methods: [
          {
            id: 'fish-50-99-fly-max',
            tabLabel: 'Recommended: Fly Fish + Urns (Max XP)',
            isRecommended: true,
            method: 'Fly Fishing Trout & Salmon + Decorated Urns',
            prereqs: '50–76+ Fishing, Feathers, Strong/Decorated Fishing Urns',
            prereqLinks: [
              { label: 'Crafting: Decorated Fishing Urns (70–99)', section: 'skills', itemId: 'crafting', bracket: '70–99' },
              { label: 'Runecrafting: Water Runes for Urns', section: 'skills', itemId: 'runecrafting', bracket: '1–33' },
              { label: 'Cooking: Mass Fish Cooking (20–40)', section: 'skills', itemId: 'cooking', bracket: '20–40' }
            ],
            location: 'Barbarian Village / Lumbridge River',
            xpPerHour: '42k – 52k XP/hr',
            ironmanPrep: '2 min/day Feather Shop Run + Water Runes for Urns',
            gpPerHour: '-7,500 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Drop-training or banking for Cooking (feather + urn rune supply sink)',
            notes: 'Fastest Fishing XP/hr in F2P all the way to 99.',
            mapData: {
              terrain: 'river',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Barbarian Village River',
              sellSpot: 'Lumbridge General Store (if cooked & sold)',
              routeNote: 'Use Barbarian Village Fly Fishing spots with Decorated Fishing Urns; drop or bank north at Edgeville.'
            },
            steps: [
              'Craft Decorated Fishing Urns (76 Crafting) and attach Water Runes for +20% XP.',
              'Keep daily Feather Packs stocked from Hank (Lumbridge) & Gerry (Port Sarim).',
              'Fly Fish Trout & Salmon continuously at Barbarian Village.',
              'Keybind-drop catches for peak 52k XP/hr, or bank at Edgeville for Cooking XP.'
            ]
          },
          {
            id: 'fish-50-99-swordfish',
            tabLabel: 'Alt 1: Swordfish & Tuna (Boss Food)',
            isRecommended: false,
            method: 'Harpooning Tuna & Swordfish at Musa Point',
            prereqs: '50 Fishing, Karamja Ship Access (60 GP/trip)',
            prereqLinks: [
              { label: 'Cooking: Swordfish & Tuna (50–99)', section: 'skills', itemId: 'cooking', bracket: '50–99' }
            ],
            location: 'Musa Point Dock (Karamja)',
            xpPerHour: '22k – 30k XP/hr',
            ironmanPrep: '0 min prep (Harpoon on Tool Belt)',
            gpPerHour: '+28,000 – +35,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Wydin's Food Store (Port Sarim) or keep in Group Storage for KBD / Giant Mole / Elvarg",
            notes: 'Swordfish heal 1,400 HP in RS3 — best non-degrading single-bite F2P boss food.',
            mapData: {
              terrain: 'coast',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Entrana Deposit Box',
              target: 'Musa Point Harpoon Pier',
              sellSpot: "Wydin's Food Store (Port Sarim) / Group Storage",
              routeNote: 'Sail to Karamja (30 GP), Harpoon Tuna/Swordfish on the pier, sail back, deposit at Port Sarim Entrana dock.'
            },
            steps: [
              'Equip Strong/Decorated Fishing Urns and carry GP for boat trips.',
              'Sail from Port Sarim to Musa Point pier (30 GP).',
              'Click "Harpoon" at the Tuna/Swordfish spots on the pier.',
              'Return to Port Sarim and deposit Tuna & Swordfish at the Entrana Monk dock Deposit Box.'
            ]
          },
          {
            id: 'fish-50-99-lobsters',
            tabLabel: 'Alt 2: Lobsters AFK (Slayer/PvM)',
            isRecommended: false,
            method: 'Lobster Caging at Musa Point (Steady Food)',
            prereqs: '40+ Fishing, Karamja Boat',
            prereqLinks: [
              { label: 'Cooking: Lobsters (40–50)', section: 'skills', itemId: 'cooking', bracket: '40–50' }
            ],
            location: 'Musa Point Dock (Karamja)',
            xpPerHour: '21k – 27k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+24,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Wydin's Food Store (Port Sarim) or keep for Group PvM",
            notes: 'Guarantees 100% Lobster inventory per trip (vs. 50/50 Tuna/Swordfish split).',
            mapData: {
              terrain: 'coast',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Entrana Deposit Box',
              target: 'Musa Point Cage Pier',
              sellSpot: "Wydin's Food Store (Port Sarim)",
              routeNote: 'Same 15-second Port Sarim Deposit Box loop as Swordfish.'
            },
            steps: [
              'Sail to Musa Point from Port Sarim.',
              'Cage Lobsters until full inventory.',
              'Return to Port Sarim and deposit at the Entrana Deposit Box.',
              'Cook on Lumbridge Castle Range for burn-free 1,200 HP food.'
            ]
          }
        ]
      }
    ]
  },

  cooking: {
    skillPrereqLinks: [
      { label: "Quest: Cook's Assistant (Range Buff)", section: 'quests', itemId: 'cooks-assistant' },
      { label: 'Fishing Guide: Catch Raw Fish', section: 'skills', itemId: 'fishing', bracket: '20–40' },
      { label: 'Crafting: Cooking Urns (+20% XP)', section: 'skills', itemId: 'crafting', bracket: '1–20' },
      { label: 'Runecrafting: Fire Runes for Urns', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
    ],
    brackets: [
      {
        levels: '1–20',
        methods: [
          {
            id: 'cook-1-20-fish',
            tabLabel: "Recommended: Cook's Assistant + Fish",
            isRecommended: true,
            method: "Cook's Assistant + Crayfish, Shrimp & Sardines",
            prereqs: "Cook's Assistant quest (lowers burn rate on Lumbridge Range)",
            prereqLinks: [
              { label: "Quest: Cook's Assistant", section: 'quests', itemId: 'cooks-assistant' },
              { label: 'Fishing: Crayfish & Shrimp (1–20)', section: 'skills', itemId: 'fishing', bracket: '1–20' }
            ],
            location: 'Lumbridge Castle Ground Floor Range',
            xpPerHour: '15k – 22k XP/hr (IM) | 55k/hr (Range)',
            ironmanPrep: '~35 min fishing Shrimp/Crayfish per 25 min cooking',
            gpPerHour: '+6,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge General Store (or keep cooked food for early Combat)',
            notes: 'Lumbridge Castle Range has the lowest burn chance in F2P.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank Chest',
              target: 'Lumbridge Castle Ground Floor Range',
              sellSpot: 'Lumbridge General Store (North of Castle)',
              routeNote: 'Run between Lumbridge Combat Academy bank chest (east courtyard) and the Castle kitchen range.'
            },
            steps: [
              'Complete Cook\'s Assistant immediately on Day 1 for 300 XP + permanent Range burn reduction.',
              'Catch 150+ Crayfish/Shrimp at Burthorpe or Draynor.',
              'Equip Cracked Cooking Urns (with Fire Runes) in your pocket slot.',
              'Cook on the Lumbridge Castle Ground Floor Range, banking at the Combat Academy chest.'
            ]
          },
          {
            id: 'cook-1-20-pies',
            tabLabel: 'Alt: Bread & Redberry Pies',
            isRecommended: false,
            method: 'Bread & Redberry Pies (Knight\'s Sword Prep)',
            prereqs: '1–10 Cooking, Wheat/Flour + Redberries + Pie Dish',
            prereqLinks: [
              { label: "Quest: The Knight's Sword", section: 'quests', itemId: 'knights-sword' }
            ],
            location: 'Lumbridge Mill & Castle Range',
            xpPerHour: '10k – 16k XP/hr (IM)',
            ironmanPrep: '~20 min picking Wheat & Redberries SE of Varrock',
            gpPerHour: '+4,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Keep Redberry Pies for Knight\'s Sword (1 per teammate) or sell at General Store',
            notes: 'Prepares Redberry Pies for the whole Group Ironman squad at 10 Cooking.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Castle 3rd Floor Bank / Academy',
              target: 'Lumbridge Windmill & Kitchen Range',
              sellSpot: 'Group Storage (Knight\'s Sword)',
              routeNote: 'Pick Wheat north of Lumbridge -> grind at Mill -> combine Pastry Dough + Redberries -> bake on Castle Range.'
            },
            steps: [
              'Pick Wheat north of Lumbridge and grind into Pots of Flour at the Windmill.',
              'Use Water on Flour to make Pastry Dough, then place inside a Pie Dish (Port Sarim/Varrock).',
              'Pick Redberries southeast of Varrock and add to Pie Shell.',
              'Bake 1 Redberry Pie per GIM teammate on the Lumbridge Range at 10 Cooking.'
            ]
          }
        ]
      },
      {
        levels: '20–40',
        methods: [
          {
            id: 'cook-20-40-trout-salmon',
            tabLabel: 'Recommended: Trout & Salmon Range',
            isRecommended: true,
            method: 'Trout (15) & Salmon (25) on Lumbridge Range',
            prereqs: '15–25 Cooking, 20–30 Fishing (Feathers)',
            prereqLinks: [
              { label: 'Fishing: Fly Fishing (20–40)', section: 'skills', itemId: 'fishing', bracket: '20–40' },
              { label: 'Crafting: Plain Cooking Urns (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' }
            ],
            location: 'Lumbridge Castle Ground Floor Range',
            xpPerHour: '28k – 38k XP/hr (IM) | 95k/hr (Range)',
            ironmanPrep: '~40 min fly fishing per 20 min cooking',
            gpPerHour: '-6,000 GP/hr (Banked) / +15k (Sold)',
            gpTrend: 'negative',
            whereToSell: 'Keep for Combat/PvM (-6k/hr feather cost) OR sell cooked fish to Lumbridge General Store (+15k/hr)',
            notes: 'Zero burn rate on Trout/Salmon comes in the mid-40s Cooking on Lumbridge Range.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank Chest',
              target: 'Lumbridge Castle Kitchen Range',
              sellSpot: 'Lumbridge General Store / Group Storage',
              routeNote: 'Load 28 Raw Trout/Salmon at Combat Academy bank chest and cook inside Lumbridge Castle kitchen.'
            },
            steps: [
              'Withdraw 28 Raw Trout/Salmon from your Fly Fishing trips.',
              'Equip Plain/Strong Cooking Urns with Fire Runes attached.',
              'Cook on the Lumbridge Castle Ground Floor Range for reduced burn chance.',
              'Store cooked Trout/Salmon in Group Storage for early combat & quests.'
            ]
          },
          {
            id: 'cook-20-40-barb-fire',
            tabLabel: 'Alt: Barbarian Village Fire',
            isRecommended: false,
            method: 'Cook-on-the-Spot (Zero Banking Loop)',
            prereqs: '15–25 Cooking, 20–30 Fishing',
            prereqLinks: [
              { label: 'Fishing: Fly Fishing (20–40)', section: 'skills', itemId: 'fishing', bracket: '20–40' }
            ],
            location: 'Barbarian Village Permanent Fire',
            xpPerHour: '26k – 34k XP/hr (IM)',
            ironmanPrep: 'Integrated into Fishing (0 separate banking)',
            gpPerHour: '-6,000 GP/hr (Feather Cost)',
            gpTrend: 'negative',
            whereToSell: 'Drop cooked fish or sell batches to Edgeville General Store',
            notes: 'Great if you only want XP and do not need to bank Trout/Salmon.',
            mapData: {
              terrain: 'river',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank (Optional)',
              target: 'Barbarian Village Hall Fire (Beside River)',
              sellSpot: 'Edgeville General Store',
              routeNote: 'Fish 27 Trout/Salmon at the river, step 5 tiles west into Barbarian Hall fire, cook & drop/bank.'
            },
            steps: [
              'Fly Fish 27 Trout/Salmon at Barbarian Village river.',
              'Step west into the Barbarian Hall with the eternal fire (or light a log outside).',
              'Cook all fish in one batch, keeping Cooking Urns active.',
              'Drop via action bar or bank north in Edgeville.'
            ]
          }
        ]
      },
      {
        levels: '40–50',
        methods: [
          {
            id: 'cook-40-50-lobsters',
            tabLabel: 'Recommended: Lobsters on Range',
            isRecommended: true,
            method: 'Lobsters on Lumbridge Castle Range',
            prereqs: '40 Cooking, 40 Fishing',
            prereqLinks: [
              { label: 'Fishing: Karamja Lobsters (40–50)', section: 'skills', itemId: 'fishing', bracket: '40–50' },
              { label: 'Crafting: Strong Cooking Urns (40–70)', section: 'skills', itemId: 'crafting', bracket: '40–70' }
            ],
            location: 'Lumbridge Castle Ground Floor Range',
            xpPerHour: '26k – 34k XP/hr (IM) | 130k/hr (Range)',
            ironmanPrep: '~42 min Karamja Lobster caging per 18 min cooking',
            gpPerHour: '+25,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Wydin's Food Store (Port Sarim) or Lumbridge General Store (best kept for PvM)",
            notes: 'Equip Strong Cooking Urns for +20% XP per Lobster.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank Chest',
              target: 'Lumbridge Castle Kitchen Range',
              sellSpot: "Wydin's Food Store (Port Sarim) / Group Storage",
              routeNote: 'Withdraw Raw Lobsters banked from Karamja and cook on the Lumbridge Castle Range.'
            },
            steps: [
              'Fish 500+ Raw Lobsters at Musa Point (Port Sarim Deposit Box).',
              'Teleport to Lumbridge and equip Strong Cooking Urns.',
              'Cook Lobsters on the Lumbridge Castle Range.',
              'Deposit cooked Lobsters in Group Storage for Dragon Slayer and mid-game PvM.'
            ]
          },
          {
            id: 'cook-40-50-pizza',
            tabLabel: 'Alt: Plain / Meat Pizzas',
            isRecommended: false,
            method: 'Baking Plain Pizzas (35) & Meat Pizzas (45)',
            prereqs: '35–45 Cooking, Flour + Tomatoes + Cheese',
            prereqLinks: [
              { label: 'Fishing: Anchovies (1–20)', section: 'skills', itemId: 'fishing', bracket: '1–20' }
            ],
            location: 'Port Sarim Food Store → Lumbridge Range',
            xpPerHour: '24k – 32k XP/hr (IM)',
            ironmanPrep: '~25 min buying/gathering Cheese, Tomatoes & Flour',
            gpPerHour: '+12,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Keep 2-bite Pizzas for bossing or sell to Wydin's Food Store (Port Sarim)",
            notes: 'Anchovy Pizzas (55) heal 2x 900 HP per inventory slot!',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge Castle Range',
              sellSpot: "Wydin's Food Store / Group Storage",
              routeNote: 'Combine Pizza Base + Tomato + Cheese (bought from Wydin/Aggie/Culinaromancer chest), bake on Lumbridge Range.'
            },
            steps: [
              'Collect Pots of Flour, Tomatoes, and Cheese (Wydin\'s Food Store / Lumbridge kitchen cellar).',
              'Make Pizza Bases (Flour + Water) and add Tomato + Cheese.',
              'Bake Plain Pizzas on the Lumbridge Castle Range.',
              'At 55 Cooking, add cooked Anchovies for 1,800 HP multi-bite food!'
            ]
          }
        ]
      },
      {
        levels: '50–99',
        methods: [
          {
            id: 'cook-50-99-swordfish',
            tabLabel: 'Recommended: Swordfish + Urns',
            isRecommended: true,
            method: 'Tuna, Lobsters & Swordfish + Decorated Urns',
            prereqs: '45–81 Cooking, 50+ Fishing, Decorated Cooking Urns',
            prereqLinks: [
              { label: 'Fishing: Swordfish & Tuna (50–99)', section: 'skills', itemId: 'fishing', bracket: '50–99' },
              { label: 'Crafting: Decorated Cooking Urns (70–99)', section: 'skills', itemId: 'crafting', bracket: '70–99' }
            ],
            location: 'Lumbridge Castle Ground Floor Range',
            xpPerHour: '32k – 45k XP/hr (IM) | 160k/hr (Range)',
            ironmanPrep: '~40 min fishing Swordfish/Lobsters per 20 min cooking',
            gpPerHour: '+30,000 – +40,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Wydin's Food Store (Port Sarim) / General Store, or save in Group Storage for Bossing",
            notes: 'Swordfish stop burning around mid-70s on the Lumbridge Castle Range.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank Chest',
              target: 'Lumbridge Castle Range',
              sellSpot: "Wydin's Food Store (Port Sarim) / Group Storage",
              routeNote: 'Cook Tuna first (less burn) -> Lobsters -> Swordfish on the Lumbridge Range with Decorated Cooking Urns.'
            },
            steps: [
              'Craft Decorated Cooking Urns (81 Crafting) and attach Fire Runes.',
              'Withdraw 28 Raw Swordfish/Tuna/Lobsters from the Lumbridge Combat Academy chest.',
              'Cook on the Lumbridge Castle Ground Floor Range.',
              'Bank cooked Swordfish (1,400 HP) in Group Storage for KBD & Giant Mole.'
            ]
          },
          {
            id: 'cook-50-99-trout-mass',
            tabLabel: 'Alt: Trout & Salmon Mass Cook',
            isRecommended: false,
            method: 'High-Throughput Fly-Fish Cooking',
            prereqs: '50+ Cooking, Fly Fishing 50–99',
            prereqLinks: [
              { label: 'Fishing: Fly Fishing Max XP (50–99)', section: 'skills', itemId: 'fishing', bracket: '50–99' }
            ],
            location: 'Lumbridge Castle Range',
            xpPerHour: '36k – 48k XP/hr (IM) | 140k/hr (Range)',
            ironmanPrep: '~35 min fly fishing & banking per 25 min cooking',
            gpPerHour: '-5,000 GP/hr (Feathers) / +18k (Sold)',
            gpTrend: 'negative',
            whereToSell: 'Lumbridge General Store (if selling surplus) or kept as cheap slayer/mob sustain',
            notes: 'Higher total Ironman XP/hr than Swordfish because Fly Fishing catches fish twice as fast.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank Chest',
              target: 'Lumbridge Castle Range',
              sellSpot: 'Lumbridge General Store',
              routeNote: 'Withdraw banked Trout & Salmon at Lumbridge and cook cleanly with zero burn.'
            },
            steps: [
              'Bank Trout & Salmon at Edgeville during 50–99 Fly Fishing.',
              'Equip Decorated Cooking Urns with Fire Runes.',
              'Cook batches at Lumbridge Castle Ground Floor Range.',
              'Sell unwanted excess to Lumbridge General Store.'
            ]
          }
        ]
      }
    ]
  },

  crafting: {
    skillPrereqLinks: [
      { label: 'Mining: Al Kharid Gem Rocks (20–30)', section: 'skills', itemId: 'mining', bracket: '20–30' },
      { label: 'Dungeoneering: Gem Bag (2k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' },
      { label: 'Money: Gem Jewellery Method', section: 'money', itemId: 'crafting-jewellery-alch' },
      { label: 'Magic: High Alch & Enchanting (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
    ],
    brackets: [
      {
        levels: '1–20',
        methods: [
          {
            id: 'craft-1-20-urns',
            tabLabel: 'Recommended: Quests & Urns',
            isRecommended: true,
            method: "Quests + Soft Clay Pottery & Cracked/Fragile Urns",
            prereqs: 'None (Clay rocks in Burthorpe/Varrock SW)',
            prereqLinks: [
              { label: 'Mining: Soft Clay (1–10)', section: 'skills', itemId: 'mining', bracket: '1–10' },
              { label: 'Runecrafting: Elemental Runes for Urns', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
            ],
            location: 'Burthorpe / Barbarian Village Pottery',
            xpPerHour: '14k – 20k XP/hr (IM)',
            ironmanPrep: '~25 min mining & wetting Soft Clay in Burthorpe per 35 min pottery',
            gpPerHour: '-5,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Untradeable Urns (Costs ~1 Elemental Rune per urn, yields +20% XP across 7 group skills)',
            notes: 'Skip 1–10 immediately via Goblin Diplomacy, Sheep Shearer & Gunnar\'s Ground.',
            mapData: {
              terrain: 'river',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Barbarian Village Pottery Wheel & Oven',
              sellSpot: 'Group Storage (Share Urns with Team)',
              routeNote: 'Soften Clay at Edgeville/Burthorpe well -> mould & fire Urns at Barbarian Village Pottery -> attach runes.'
            },
            steps: [
              'Complete Goblin Diplomacy, Sheep Shearer, and Gunnar\'s Ground to jump to ~10 Crafting.',
              'Mine Clay in Burthorpe/Varrock SW and soften it with water at any fountain.',
              'Use the Barbarian Village Potter\'s Wheel & Pottery Oven to craft Fishing, Mining & Cooking Urns.',
              'Attach 1 Air/Water/Earth/Fire Rune to each urn so teammates can equip them.'
            ]
          },
          {
            id: 'craft-1-20-leather',
            tabLabel: 'Alt: Leather Gloves & Bodies',
            isRecommended: false,
            method: 'Cowhide Tanning → Leather Gloves/Bodies',
            prereqs: 'None, Thread & Needle (Tool Belt), 1 GP/hide tan fee',
            prereqLinks: [
              { label: 'Strength: Lumbridge Cows (1–33)', section: 'skills', itemId: 'strength', bracket: '1–33' }
            ],
            location: 'Lumbridge Cows → Al Kharid Tanner (Ellis)',
            xpPerHour: '12k – 17k XP/hr (IM)',
            ironmanPrep: '~30 min killing Cows & tanning hides per 30 min crafting',
            gpPerHour: '+10,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Lumbridge General Store or Lowe's / Thessalia's Clothes Shop (Varrock)",
            notes: 'Also crafts early Ranged armour (Leather Cowl/Body/Chaps) at 1–18 Crafting.',
            mapData: {
              terrain: 'city',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Al Kharid Bank',
              target: "Ellis's Tannery (North of Al Kharid Bank)",
              sellSpot: 'Al Kharid / Varrock General Store',
              routeNote: 'Kill Cows east of Lumbridge, bank hides, then run to Ellis just north of Al Kharid Bank to tan.'
            },
            steps: [
              'Collect Cowhides from Lumbridge Cow Pens while training early combat.',
              'Teleport to Al Kharid and take Cowhides to Ellis north of the bank (1 GP/hide).',
              'Craft Leather Gloves/Boots/Bodies using Needle & Thread on your Tool Belt.',
              'Sell finished leather gear to General Stores.'
            ]
          }
        ]
      },
      {
        levels: '20–40',
        methods: [
          {
            id: 'craft-20-40-gems',
            tabLabel: 'Recommended: Gems & Gold',
            isRecommended: true,
            method: 'Al Kharid Gem Rocks → Sapphires/Emeralds & Gold Jewellery',
            prereqs: '20 Crafting & 20 Mining, Gem Bag (2k DG Tokens)',
            prereqLinks: [
              { label: 'Mining: Al Kharid Gem Rocks (20–30)', section: 'skills', itemId: 'mining', bracket: '20–30' },
              { label: 'Dungeoneering: Gem Bag (2k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '1–30' }
            ],
            location: "Al Kharid Mine → Edgeville Furnace → Grum's",
            xpPerHour: '22k – 32k XP/hr (IM) | 65k/hr (Active)',
            ironmanPrep: '~35 min mining Gems & Gold Ore per 25 min cutting & smelting',
            gpPerHour: '+140,000 – +220,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Grum's Gold Exchange (Port Sarim) — buys all Gold/Sapphire/Emerald jewellery at 60% High Alch (0 Nature Runes!)",
            notes: 'Best pre-55 Magic Ironman money maker while training Mining and Crafting together.',
            mapData: {
              terrain: 'city',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank (Next to Furnace)',
              target: 'Edgeville Furnace & Al Kharid Gem Mine',
              sellSpot: "Grum's Gold Exchange (Port Sarim)",
              routeNote: 'Mine Uncommon Gems in Al Kharid -> cut gems -> smelt Gold Bars into Edgeville Metal Bank -> craft Jewellery -> sell in Port Sarim.'
            },
            steps: [
              'Mine Uncommon Gem Rocks in Al Kharid North Mine with a Gem Bag.',
              'Mine Gold Ore in Rimmington (at 40 Mining) or craft Silver symbols until 40 Mining.',
              'Cut Sapphires (20) and Emeralds (27) with your Tool Belt Chisel, then craft Gold Rings/Necklaces/Amulets at Edgeville Furnace.',
              'Sell finished jewellery to Grum\'s Gold Exchange in Port Sarim at 60% High Alch value.'
            ]
          },
          {
            id: 'craft-20-40-silver',
            tabLabel: 'Alt: Silver Tiaras & Symbols',
            isRecommended: false,
            method: 'Silver Ore → Tiaras & Unstrung Symbols (No 40 Mining)',
            prereqs: '16–23 Crafting, 20 Mining (Silver Ore)',
            prereqLinks: [
              { label: 'Mining: 20–30 Mine Spots', section: 'skills', itemId: 'mining', bracket: '20–30' }
            ],
            location: 'Al Kharid Silver Rocks → Edgeville Furnace',
            xpPerHour: '18k – 24k XP/hr (IM)',
            ironmanPrep: '~35 min mining Silver Ore per 25 min smelting & crafting',
            gpPerHour: '+45,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Varrock / Edgeville General Store (or Grum's Gold Exchange for Silver rings/necklaces)",
            notes: 'Strong option between 20–40 Crafting before you unlock 40 Mining for Gold Ore.',
            mapData: {
              terrain: 'city',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Furnace (10s from Bank)',
              sellSpot: "General Store / Grum's Gold Exchange",
              routeNote: 'Mine Silver in Al Kharid/Varrock SW, store Silver Bars in Metal Bank, and craft Tiaras at Edgeville.'
            },
            steps: [
              'Mine Silver Ore at Al Kharid or Varrock SW (20 Mining).',
              'Deposit Silver Ore into the Edgeville Furnace Metal Bank.',
              'Craft Unstrung Symbols (16) or Silver Tiaras (23).',
              'Sell finished Silver items to General Stores or Grum\'s Gold Exchange.'
            ]
          }
        ]
      },
      {
        levels: '40–70',
        methods: [
          {
            id: 'craft-40-70-ruby-diamond',
            tabLabel: 'Recommended: Ruby & Diamond Jewellery',
            isRecommended: true,
            method: 'Ruby & Diamond Cutting + Gold Necklaces/Amulets',
            prereqs: '34–50 Crafting, 40 Mining (Gold), Gem Bag',
            prereqLinks: [
              { label: 'Mining: Gold & Gems (40–50)', section: 'skills', itemId: 'mining', bracket: '40–50' },
              { label: 'Money: Gem Jewellery Profit Guide', section: 'money', itemId: 'crafting-jewellery-alch' },
              { label: 'Magic: High Alch & Enchanting (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: "Al Kharid Mine → Edgeville Furnace → Grum's",
            xpPerHour: '28k – 38k XP/hr (IM) | 85k/hr (Active)',
            ironmanPrep: '~35 min mining Uncommon Gem Rocks & Gold per 25 min crafting',
            gpPerHour: '+250,000 – +380,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Grum's Gold Exchange (Port Sarim: 1,215 GP Ruby / 2,115 GP Diamond Amulet) or High Level Alchemy",
            notes: 'At 50 Crafting + 57 Magic, craft & enchant Diamond Amulets into Amulets of Power (+22 all styles).',
            mapData: {
              terrain: 'city',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Furnace (Metal Bank)',
              sellSpot: "Grum's Gold Exchange (Port Sarim) / High Alch",
              routeNote: 'Smelt Gold into Metal Bank at Edgeville Furnace -> withdraw 14 Cut Rubies/Diamonds -> craft Amulets -> sell at Grum\'s.'
            },
            steps: [
              'Mine Uncommon Gem Rocks in Al Kharid (Rubies 34, Diamonds 43) and Gold Ore in Rimmington (40 Mining).',
              'Smelt Gold Bars directly into the Edgeville Furnace Metal Bank.',
              'Withdraw 28 Cut Rubies/Diamonds and forge Ruby/Diamond Necklaces & Amulets at Edgeville Furnace.',
              'Keep 1 Diamond Amulet per teammate to enchant into Amulets of Power (57 Magic); sell the rest to Grum\'s in Port Sarim.'
            ]
          },
          {
            id: 'craft-40-70-carapace',
            tabLabel: 'Alt 1: Cockroach Carapace Gear',
            isRecommended: false,
            method: 'Cockroach Soldier Carapace Armour',
            prereqs: '30–40 Crafting, Combat 45+',
            prereqLinks: [
              { label: 'Attack: Cockroach Soldiers (40–60)', section: 'skills', itemId: 'attack', bracket: '40–60' }
            ],
            location: 'Stronghold of Player Safety',
            xpPerHour: '20k – 28k XP/hr (IM + Combat)',
            ironmanPrep: 'Gathered passively while farming Cockroach Soldiers for Rune Salvage',
            gpPerHour: '+350,000 GP/hr (With Cockroach Drops)',
            gpTrend: 'positive',
            whereToSell: "Horvik's / General Store (Carapace gear) + High Alch Rune Salvage",
            notes: 'Passive Crafting XP while farming Tier 30 Ranged gear & Rune Salvage.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold of Player Safety (Cockroaches)',
              sellSpot: 'Edgeville General Store / High Alch',
              routeNote: 'Farm Cockroach Soldiers south of Edgeville Jail, collect noted/unnoted Carapace, craft at Edgeville Bank.'
            },
            steps: [
              'Farm Cockroach Soldiers in the Stronghold of Player Safety.',
              'Pick up Carapace drops alongside Rune Salvage and Runes.',
              'Craft Carapace Torsos, Legs & Helms at Edgeville Bank.',
              'Sell finished Carapace pieces to General Stores.'
            ]
          },
          {
            id: 'craft-40-70-strong-urns',
            tabLabel: 'Alt 2: Strong Skilling Urns',
            isRecommended: false,
            method: 'Strong Mining, Fishing & Cooking Urns',
            prereqs: '40–64 Crafting, Soft Clay, Elemental Runes',
            prereqLinks: [
              { label: 'Mining: Clay Mining (1–10)', section: 'skills', itemId: 'mining', bracket: '1–10' }
            ],
            location: 'Barbarian Village Pottery',
            xpPerHour: '22k – 30k XP/hr (IM)',
            ironmanPrep: '~30 min mining & softening Clay per 30 min pottery',
            gpPerHour: '-12,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Untradeable Urns (Deposit in Group Storage for +20% group skilling XP)',
            notes: 'Essential support task so every GIM member trains Mining/Fishing/Cooking 20% faster.',
            mapData: {
              terrain: 'river',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Barbarian Village Pottery House',
              sellSpot: 'Group Storage (Team Urn Stockpile)',
              routeNote: 'Run between Edgeville Bank and Barbarian Village Pottery Wheel & Oven.'
            },
            steps: [
              'Gather Soft Clay (Burthorpe well or Varrock SW).',
              'Mould Strong Urns (2 Soft Clay each) on the Barbarian Village Potter\'s Wheel.',
              'Fire them in the adjacent Pottery Oven and attach matching runes.',
              'Share stacks in Group Storage.'
            ]
          }
        ]
      },
      {
        levels: '70–99',
        methods: [
          {
            id: 'craft-70-99-jewellery',
            tabLabel: 'Recommended: Gem Jewellery Profit',
            isRecommended: true,
            method: 'Diamond/Ruby Jewellery & Green D\'hide Shields',
            prereqs: '70+ Crafting, Al Kharid Gems + Gold Ore',
            prereqLinks: [
              { label: 'Mining: Al Kharid Gems & Gold (50–99)', section: 'skills', itemId: 'mining', bracket: '50–99' },
              { label: 'Money: Gem Jewellery Profit Guide', section: 'money', itemId: 'crafting-jewellery-alch' }
            ],
            location: "Edgeville Furnace → Grum's / High Alch",
            xpPerHour: '32k – 42k XP/hr (IM) | 95k/hr (Active)',
            ironmanPrep: '~30 min mining Gems & Gold per 30 min crafting',
            gpPerHour: '+240,000 – +350,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Grum's Gold Exchange (Port Sarim) or High Level Alchemy (55 Magic)",
            notes: 'Sustains strong GP/hr all the way to 99 while supplying Amulets of Power.',
            mapData: {
              terrain: 'city',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Furnace (Metal Bank)',
              sellSpot: "Grum's Gold Exchange (Port Sarim) / High Alch",
              routeNote: 'Smelt Gold into Metal Bank -> craft Diamond/Ruby Amulets at Edgeville Furnace -> sell at Grum\'s.'
            },
            steps: [
              'Mine Al Kharid Gem Rocks + Rimmington Gold Ore.',
              'Cut Gems and forge Diamond/Ruby Amulets at Edgeville Furnace.',
              'High Alch or sell entire stacks to Grum\'s Gold Exchange in Port Sarim.',
              'Keep Decorated Urns stocked whenever needed.'
            ]
          },
          {
            id: 'craft-70-99-decorated-urns',
            tabLabel: 'Alt: Decorated Urns (Team XP)',
            isRecommended: false,
            method: 'Decorated Mining, Fishing & Cooking Urns',
            prereqs: '72–81 Crafting, Soft Clay, Elemental Runes',
            prereqLinks: [
              { label: 'Fishing: Use Decorated Urns (50–99)', section: 'skills', itemId: 'fishing', bracket: '50–99' }
            ],
            location: 'Barbarian Village Pottery',
            xpPerHour: '28k – 38k XP/hr (IM)',
            ironmanPrep: '~30 min mining & wetting Soft Clay per 30 min pottery',
            gpPerHour: '-25,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Untradeable Urns (Massive +20% XP bonus across all GIM 99 grinds)',
            notes: 'Craft hundreds of Decorated Cooking (81), Fishing (76), and Woodcutting (76) urns.',
            mapData: {
              terrain: 'river',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Barbarian Village Pottery House',
              sellSpot: 'Group Storage (Team Urns)',
              routeNote: 'Use Edgeville Bank <-> Barbarian Village Pottery Wheel/Oven loop.'
            },
            steps: [
              'Mine bulk Clay and soften at Edgeville/Burthorpe water source.',
              'Mould Decorated Urns on the Barbarian Village wheel.',
              'Fire in the Pottery Oven and attach Earth/Water/Fire/Air Runes.',
              'Equip on all late-game 99 skilling grinds.'
            ]
          }
        ]
      }
    ]
  },

  runecrafting: {
    skillPrereqLinks: [
      { label: 'Quest: Swept Away (1–24+ Skip!)', section: 'quests', itemId: 'swept-away' },
      { label: 'Quest: Beneath Cursed Tides (30 RC)', section: 'quests', itemId: 'beneath-cursed-tides' },
      { label: 'Crafting: Attach Runes to Urns', section: 'skills', itemId: 'crafting', bracket: '1–20' },
      { label: 'Mining: Pure Essence Mining', section: 'skills', itemId: 'mining', bracket: '10–20' }
    ],
    brackets: [
      {
        levels: '1–33',
        methods: [
          {
            id: 'rc-1-33-runespan',
            tabLabel: 'Recommended: Runespan Floor 1',
            isRecommended: true,
            method: 'Runespan Lower Floor (Nodes & Esshounds)',
            prereqs: 'None (Wizards\' Tower top floor portal; Swept Away lamps skip 1→24+!)',
            prereqLinks: [
              { label: 'Quest: Swept Away (Goulash Lamps)', section: 'quests', itemId: 'swept-away' }
            ],
            location: "Wizards' Tower Runespan (Floor 1)",
            xpPerHour: '18k – 28k XP/hr',
            ironmanPrep: '0 min prep (0 Rune Essence required)',
            gpPerHour: '-2,000 GP/hr (Urns) / 0 GP',
            gpTrend: 'negative',
            whereToSell: '0 Drops (Runespan points stay inside Wizards\' Tower)',
            notes: 'Always prioritize yellow/purple Elemental Nodes (Cyclones, Mind Storms) over creatures for 2–4x XP.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'Draynor Village Lodestone',
              bank: 'No Banking Required',
              target: "Wizards' Tower Top Floor → Runespan Portal",
              sellSpot: 'Wizard Finix (Runespan Point Shop)',
              routeNote: 'Run south from Draynor Lodestone across the bridge into Wizards\' Tower -> Beam to Top Floor -> Enter Runespan.'
            },
            steps: [
              'Complete Swept Away and feed all 10 Goulash bowls into Runecrafting (instant 1 → ~24 jump!).',
              'Enter Wizards\' Tower south of Draynor Village and take the beam to the top floor.',
              'Enter the Runespan portal and grab 25 Floating Essence.',
              'Siphon Cyclones, Mind Storms, and Water Pools on Floor 1 until Level 33.'
            ]
          },
          {
            id: 'rc-1-33-altars',
            tabLabel: 'Alt: Elemental Altars (Runes)',
            isRecommended: false,
            method: 'Air, Mind, Water, Earth & Fire Altar Crafting',
            prereqs: 'Rune Mysteries, Wicked Hood (free from Tam McGrubor in Burthorpe!)',
            prereqLinks: [
              { label: 'Crafting: Urns Need Elemental Runes', section: 'skills', itemId: 'crafting', bracket: '1–20' },
              { label: 'Mining: Pure Essence Mine', section: 'skills', itemId: 'mining', bracket: '10–20' }
            ],
            location: 'Elemental Altars (Falador, Lumbridge, Varrock)',
            xpPerHour: '10k – 16k XP/hr (IM)',
            ironmanPrep: '~30 min mining Rune/Pure Essence per 30 min altar running',
            gpPerHour: '+65,000 – +110,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Aubury's Rune Shop (Varrock) or Betty's Magic Emporium (Port Sarim) — or bank for team Urns/Magic",
            notes: 'Claim your free Wicked Hood in Burthorpe for 100 daily free Pure Essence & free Altar teleports!',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe / Falador Lodestone',
              bank: 'Falador East / Varrock East Bank',
              target: 'Air (Falador S) / Water (Lumbridge Swamp) / Earth (Varrock NE)',
              sellSpot: "Aubury's Rune Shop (Varrock) / Group Storage",
              routeNote: 'Claim free Wicked Hood from Tam McGrubor in Burthorpe -> teleport straight to any elemental altar daily!'
            },
            steps: [
              'Speak to Tam McGrubor NW of Burthorpe Lodestone to claim your free Wicked Hood.',
              'Use the Wicked Hood daily for free Pure Essence + instant Altar teleports.',
              'Craft Air (1), Water (5), Earth (9), and Fire (14) runes for Skilling Urns and team Magic.',
              'Sell unwanted runes to Aubury\'s Rune Shop in Varrock.'
            ]
          }
        ]
      },
      {
        levels: '33–50',
        methods: [
          {
            id: 'rc-33-50-runespan',
            tabLabel: 'Recommended: Runespan Floor 2',
            isRecommended: true,
            method: 'Runespan Middle Floor Nodes (Chaotic Clouds, Vine Jumpers)',
            prereqs: '33 Runecrafting',
            prereqLinks: [
              { label: 'Quest: Beneath Cursed Tides', section: 'quests', itemId: 'beneath-cursed-tides' }
            ],
            location: "Wizards' Tower Runespan (Floor 2)",
            xpPerHour: '30k – 42k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '-3,000 GP/hr (Urns) / 0 GP',
            gpTrend: 'negative',
            whereToSell: '0 Drops (Pure XP rush to 50 Runecrafting to unlock Rune Goldberg Vis Wax)',
            notes: 'Jump across middle-floor bridges chasing Chaotic Clouds, Vine Jumpers & Skulls.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'Draynor Village Lodestone',
              bank: 'No Banking Required',
              target: 'Runespan Middle Floor (Vine Portal East)',
              sellSpot: 'Wizard Finix (Massive Essence Pouches / Points)',
              routeNote: 'Ascend the ladder/portal to Runespan Floor 2 and hop platforms toward yellow/purple nodes.'
            },
            steps: [
              'At 33 Runecrafting, ascend the portal inside Runespan to the Middle Floor.',
              'Always siphon Fireballs, Chaotic Clouds, Vine Jumpers, and Skulls before regular creatures.',
              'Unlock Medium/Large Rune Pouches from Wizard Finix if doing traditional altars.',
              'Hit Level 50 Runecrafting to unlock the Rune Goldberg Machine!'
            ]
          },
          {
            id: 'rc-33-50-altars',
            tabLabel: 'Alt: Bulk Earth/Fire Altars',
            isRecommended: false,
            method: 'Earth (26 = 2x) & Fire (35 = 2x) Altar Running',
            prereqs: '26–35 Runecrafting, Wicked Hood + Tiara',
            prereqLinks: [
              { label: 'Attack: Cockroach / Ankou Pure Essence', section: 'skills', itemId: 'attack', bracket: '40–60' }
            ],
            location: 'Varrock NE Earth Altar / Al Kharid Fire Altar',
            xpPerHour: '16k – 24k XP/hr (IM)',
            ironmanPrep: '~25 min mining Pure Essence (or PvM drops) per 35 min altar runs',
            gpPerHour: '+95,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Aubury's Rune Shop (Varrock) or keep for Magic & Fire/Mining Urns",
            notes: 'Produces 2x Earth Runes at 26 RC and 2x Fire Runes at 35 RC.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock / Al Kharid Lodestone',
              bank: 'Varrock East Bank / Al Kharid Bank',
              target: 'Earth Altar (NE of Varrock) / Fire Altar',
              sellSpot: "Aubury's Rune Shop (Varrock) / Group Storage",
              routeNote: 'Run between Varrock East Bank and Earth Altar NE of the Lumber Yard.'
            },
            steps: [
              'Craft an Earth or Fire Tiara (or use Wicked Hood).',
              'Withdraw 28 Pure/Rune Essence from Varrock East Bank.',
              'Run northeast to the Earth Altar (or north from Al Kharid Duel Arena for Fire Altar).',
              'Bind runes and bank back for team Magic & Urn attachments.'
            ]
          }
        ]
      },
      {
        levels: '50–99',
        methods: [
          {
            id: 'rc-50-99-runespan-high',
            tabLabel: 'Recommended: High Runespan + Vis Wax',
            isRecommended: true,
            method: 'Runespan High Nodes (Living/Undead Souls) + Daily Vis Wax',
            prereqs: '50–66 Runecrafting, Wicked Hood + Rune Shop Runs',
            prereqLinks: [
              { label: 'Crafting: Decorated RC Urns (70–99)', section: 'skills', itemId: 'crafting', bracket: '70–99' },
              { label: 'Magic: High Alch / Teleports (55–99)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: "Runespan Floor 2/3 & Rune Goldberg Machine (Wizards' Tower)",
            xpPerHour: '42k – 58k XP/hr',
            ironmanPrep: '0 min prep in Runespan; 2 min/day Rune Shop Run for Vis Wax',
            gpPerHour: '+180,000 – +350,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Vis Wax (Daily teleport/aura/challenge value) & multi-craft Air/Earth/Water runes sold to Aubury's Rune Shop",
            notes: 'At 66+ RC, Siphoning Living Souls, Undead Souls & Bloody Skulls gives peak F2P Runecrafting XP.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'Draynor Village Lodestone',
              bank: 'Wizards\' Tower Bank / No Bank inside Runespan',
              target: "Runespan High Nodes & Rune Goldberg Machine (Floor 1)",
              sellSpot: "Aubury's Rune Shop / Daily Vis Wax",
              routeNote: 'Hit Rune Goldberg Machine inside the Runecrafting Guild (50 RC) daily, then enter Runespan for 50–99 XP.'
            },
            steps: [
              'At 50 Runecrafting, enter the Runecrafting Guild portal on the Wizards\' Tower first floor each day for Vis Wax.',
              'Buy cheap elemental/Mind/Body runes from Aubury & Carwen for your Vis Wax machine slots.',
              'Train Runecrafting inside Runespan Floor 2/3, prioritizing Bloody Skulls (65+), Living Souls (90), and Undead Souls (95).',
              'Keep Runecrafting Urns active for +20% bonus XP during traditional altar runs.'
            ]
          },
          {
            id: 'rc-50-99-multi-altars',
            tabLabel: 'Alt: Multi-Air/Water Altar Profit',
            isRecommended: false,
            method: 'Multiple Air (66 = 7x) & Water (57 = 4x) Altar Runs',
            prereqs: '55–88 Runecrafting, Pure/Rune Essence, Wicked Hood',
            prereqLinks: [
              { label: 'Attack: Cockroach / Ankou Essence Drops', section: 'skills', itemId: 'attack', bracket: '40–60' }
            ],
            location: 'Falador Air Altar / Lumbridge Water Altar',
            xpPerHour: '22k – 30k XP/hr (IM)',
            ironmanPrep: '~25 min essence mining/PvM drops per 35 min running',
            gpPerHour: '+160,000 – +260,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Aubury's Rune Shop (Varrock) or Betty's Magic Emporium (Port Sarim)",
            notes: 'Massive rune generation for team Magic, High Alch / Teleports, or selling to Aubury.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador Lodestone',
              bank: 'Falador East Bank',
              target: 'Air Altar (South of Falador)',
              sellSpot: "Aubury's Rune Shop (Varrock)",
              routeNote: 'Run south from Falador East Bank -> enter Air Altar -> craft 7x–9x Air Runes per Essence -> bank.'
            },
            steps: [
              'Equip Wicked Hood + Runecrafting Urns + Rune Pouches.',
              'Withdraw Pure/Rune Essence from Falador East Bank.',
              'Run south to the Air Altar to multiply each essence into 6x–10x Air Runes.',
              'Sell excess stacks to Aubury\'s Rune Shop or keep for team Vis Wax.'
            ]
          }
        ]
      }
    ]
  }
};
