export const COMBAT_METHODS = {
  attack: {
    skillPrereqLinks: [
      { label: 'Quest: Vampyre Slayer (1–20 Skip)', section: 'quests', itemId: 'vampire-slayer' },
      { label: 'Smithing: Tiered 2H Weapons (Rune +3)', section: 'skills', itemId: 'smithing', bracket: '50–99' },
      { label: 'Dungeoneering: Gravite 2h Sword (40k)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' },
      { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
    ],
    brackets: [
      {
        levels: '1–20',
        methods: [
          {
            id: 'atk-1-20-vampire',
            tabLabel: 'Recommended: Vampyre Slayer + Trolls',
            isRecommended: true,
            method: 'Vampyre Slayer Quest Skip + Burthorpe Troll Brutes',
            prereqs: 'None (free Bronze/Iron gear in Burthorpe; Garlic & Stake for Count Draynor)',
            prereqLinks: [
              { label: 'Quest: Vampyre Slayer', section: 'quests', itemId: 'vampire-slayer' }
            ],
            location: 'Draynor Manor (Quest) / Burthorpe Troll Cave',
            xpPerHour: '25k – 40k XP/hr (including quest)',
            ironmanPrep: '2 min grabbing Garlic (Morgan\'s cupboard) & Stake in Draynor + starter food',
            gpPerHour: '+25,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store (early drops) or keep Guam/Marrentill for 1–5 Herblore',
            notes: 'Instant 1 → 20 Attack jump via Vampyre Slayer.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Troll Cave (North)',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Kill Burthorpe Trolls north of the Lodestone until ~10 Combat, then kill Count Draynor in Draynor Manor basement.'
            },
            steps: [
              'Start Vampyre Slayer by speaking to Morgan in Draynor Village and grabbing Garlic upstairs.',
              'Speak to Dr. Harlow in Varrock Blue Moon Inn with a Beer to get the Stake & Hammer.',
              'Kill Trolls in Burthorpe Troll Cave for ~10–15 Combat and Guam Leaves.',
              'Defeat Count Draynor in Draynor Manor basement for 4,825 Attack XP (1 → 20!).'
            ]
          },
          {
            id: 'atk-1-20-catacombs',
            tabLabel: 'Alt: Lumbridge Catacombs',
            isRecommended: false,
            method: 'Lumbridge Catacombs Skeletons & Zombies',
            prereqs: 'The Blood Pact quest (2 min unlock in Lumbridge Graveyard)',
            prereqLinks: [
              { label: 'Prayer: Restless Ghost (1–9 Prayer)', section: 'skills', itemId: 'prayer', bracket: '1–28' }
            ],
            location: 'Lumbridge Graveyard Catacombs',
            xpPerHour: '20k – 30k XP/hr',
            ironmanPrep: '3 min completing The Blood Pact',
            gpPerHour: '+18,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge General Store (or keep Mask parts for Statue / early drops)',
            notes: 'Great source of early Spider Silk for Magic armour and Necromancy Tier 20 upgrade.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge Catacombs (Corpse Spiders / Skeletons)',
              sellSpot: 'Lumbridge General Store',
              routeNote: 'Enter the crypt south of Lumbridge Church and farm low-HP skeletons & Corpse Spiders.'
            },
            steps: [
              'Complete The Blood Pact inside Lumbridge Graveyard.',
              'Farm Skeletons and Corpse Spiders inside the Catacombs.',
              'Bank Spider Silk for 20 Crafting/Magic robes and Necromancy Kili upgrades.',
              'Sell unwanted drops north at Lumbridge General Store.'
            ]
          }
        ]
      },
      {
        levels: '20–40',
        methods: [
          {
            id: 'atk-20-40-hill-giants',
            tabLabel: 'Recommended: Hill Giants & Warriors',
            isRecommended: true,
            method: 'Al Kharid Warriors & Edgeville Hill Giants',
            prereqs: '20 Attack, Steel/Mithril 2h Sword, Brass Key (Hill Giants)',
            prereqLinks: [
              { label: 'Smithing: Steel & Mithril 2H (29–40)', section: 'skills', itemId: 'smithing', bracket: '29–40' },
              { label: 'Prayer: Chaos Altar Big Bones (28–43)', section: 'skills', itemId: 'prayer', bracket: '28–43' }
            ],
            location: 'Edgeville Dungeon / Al Kharid Palace',
            xpPerHour: '30k – 42k XP/hr',
            ironmanPrep: '5 min cooking Trout/Salmon (or 10 min smithing Mithril 2h)',
            gpPerHour: '+55,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Zeke's Superior Scimitars (Al Kharid), Varrock Swordshop, or Edgeville General Store",
            notes: 'Bank Big Bones from Hill Giants for 350% Prayer XP at the Wilderness Chaos Altar.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Dungeon Hill Giants (Brass Key Shed)',
              sellSpot: "Varrock Swordshop / Zeke's Scimitars",
              routeNote: 'Grab Brass Key inside Edgeville Dungeon, then enter via the locked shed west of Varrock Cooks\' Guild.'
            },
            steps: [
              'Equip a Steel (20) or Mithril (30) 2h Sword with AoE Cleave on your Revolution bar.',
              'Unlock the Brass Key shed west of Varrock and farm Hill Giants below.',
              'Bank Big Bones & Limpwurt Roots at Edgeville Bank or Varrock West Bank.',
              'Sell metal drops to Varrock Swordshop or Edgeville General Store.'
            ]
          },
          {
            id: 'atk-20-40-stronghold',
            tabLabel: 'Alt: Stronghold Minotaurs/Crawlers',
            isRecommended: false,
            method: 'Stronghold of Security (Minotaurs & Flesh Crawlers)',
            prereqs: '20+ Attack, Steel/Mithril Gear, Trout/Salmon',
            prereqLinks: [
              { label: 'Money: Stronghold 20k Starter GP', section: 'money', itemId: 'stronghold-security' }
            ],
            location: 'Stronghold of Security (Barbarian Village)',
            xpPerHour: '28k – 38k XP/hr',
            ironmanPrep: '5 min cooking Trout/Salmon in Barbarian Village',
            gpPerHour: '+35,000 GP/hr (Iron Arrows & Herbs)',
            gpTrend: 'positive',
            whereToSell: 'Edgeville General Store (keep noted/unnoted Iron Arrows & Herbs)',
            notes: 'Minotaurs drop hundreds of Bronze/Iron arrows for Ranged; Flesh Crawlers drop Fire Runes & Herbs.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold of Security Floors 1 & 2',
              sellSpot: 'Edgeville General Store',
              routeNote: 'Climb down the center hole in Barbarian Village; claim the 10k GP reward chests along the way!'
            },
            steps: [
              'Climb into the Stronghold of Security in the center of Barbarian Village.',
              'Claim the 10,000 GP and Fancy Boots from the 4 chest rooms first.',
              'Farm Level 12/27 Minotaurs (Floor 1) or Flesh Crawlers (Floor 2).',
              'Collect Iron Arrows, Fire Runes, and Herbs while banking north in Edgeville.'
            ]
          }
        ]
      },
      {
        levels: '40–60',
        methods: [
          {
            id: 'atk-40-60-cockroaches',
            tabLabel: 'Recommended: Cockroach Soldiers',
            isRecommended: true,
            method: 'Cockroach Soldiers (AoE Melee + Salvage)',
            prereqs: '40–50 Attack, Adamant/Rune +3 2h, 55 Magic rec.',
            prereqLinks: [
              { label: 'Smithing: Rune +3 2H Sword (50–99)', section: 'skills', itemId: 'smithing', bracket: '50–99' },
              { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' },
              { label: 'Money: Cockroach Soldiers Guide', section: 'money', itemId: 'cockroach-soldiers' }
            ],
            location: 'Stronghold of Player Safety Dungeon (Edgeville)',
            xpPerHour: '45k – 65k XP/hr',
            ironmanPrep: '5 min food prep + Fire Staff & Nature Runes for High Alch',
            gpPerHour: '+350,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy (Rune Scimitars/Sq Shields/Medium & Large Rune Salvage) or Varrock Swordshop',
            notes: 'Drops Law, Death & Nature runes plus noted Mithril/Addy ores and Carapace.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank (North)',
              target: 'Stronghold of Player Safety Lower Level',
              sellSpot: 'High Level Alchemy (On-Site) / Varrock Swordshop',
              routeNote: 'Run west/south of Edgeville Jail into the Stronghold Jail -> climb down the poster/trapdoor to Cockroach Soldiers.'
            },
            steps: [
              'Upgrade to an Adamant +2 (40) or Rune +3 (50) 2H Sword.',
              'Bring Trout/Lobsters, Gem Bag, Fire Staff, and Nature Runes.',
              'Enter the Stronghold of Player Safety dungeon south of Edgeville Jail and lure 2+ Soldiers for Cleave/Hurricane.',
              'High Alch Rune Salvage/Scimitars directly on the floor and bank Carapace/Ores at Edgeville.'
            ]
          },
          {
            id: 'atk-40-60-moss-lessers',
            tabLabel: 'Alt: Moss Giants & Lesser Demons',
            isRecommended: false,
            method: 'Varrock Sewers Moss Giants / Karamja Lesser Demons',
            prereqs: '40+ Attack, Adamant/Rune 2h, Lobster/Trout food',
            prereqLinks: [
              { label: 'Prayer: Moss Giant Big Bones', section: 'skills', itemId: 'prayer', bracket: '28–43' }
            ],
            location: 'Varrock Sewers / Karamja Volcano',
            xpPerHour: '40k – 55k XP/hr',
            ironmanPrep: '5 min food prep',
            gpPerHour: '+120,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Alch Rune Med Helms (Lesser Demons) or Varrock Swordshop / Horvik's",
            notes: 'Moss Giants give great Big Bones + Nature/Law/Cosmic runes; Lesser Demons drop Rune Med Helms.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock East Bank',
              target: 'Varrock Sewers Moss Giant Chamber',
              sellSpot: "Horvik's Armour Shop / High Alch",
              routeNote: 'Climb down Varrock Sewer manhole east of the Palace and cross the pipes/bridges to the Moss Giants.'
            },
            steps: [
              'Enter Varrock Sewers east of Varrock Palace (or Karamja Volcano for Lesser Demons).',
              'Fight Moss Giants with AoE Cleave + Quake.',
              'Collect Big Bones, Nature/Law Runes, and Mithril drops.',
              'Bank at Varrock East Bank or High Alch Rune Med Helms.'
            ]
          }
        ]
      },
      {
        levels: '60–99',
        methods: [
          {
            id: 'atk-60-99-demons-ankous',
            tabLabel: 'Recommended: Greater Demons / Ankous',
            isRecommended: true,
            method: 'Greater Demons & Ankous (High Alch + XP)',
            prereqs: '55+ Attack, Rune +3 2h or Gravite 2h (55), Protect Prayers rec.',
            prereqLinks: [
              { label: 'Dungeoneering: Gravite 2h (40k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' },
              { label: 'Prayer: 43 Protect Melee + Accursed Urns', section: 'skills', itemId: 'prayer', bracket: '43–99' }
            ],
            location: 'Forinthry Dungeon / Stronghold of Security Floor 4',
            xpPerHour: '65k – 78k XP/hr',
            ironmanPrep: '5–8 min fishing/cooking Swordfish or Lobsters per hour',
            gpPerHour: '+250,000 – +450,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy on Rune Salvage/Weapons or Scavvo's Rune Store (Champions' Guild)",
            notes: 'Greater Demons drop Rune Full Helms & Rune Salvage plus Accursed Ashes for Prayer Urns.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank (Safe South of Ditch)',
              target: 'Forinthry Dungeon South Chamber (Greater Demons)',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Verify PvP Opt-Out with Vala -> enter Forinthry Dungeon (Lvl 18 Wild) or camp Ankous on Stronghold Floor 4.'
            },
            steps: [
              'Unlock Gravite 2h Sword (40k DG tokens) or keep Rune 2h +3 for 0 repair cost.',
              'Bring Swordfish/Lobsters, Fire Staff, Nature Runes, and Accursed Prayer Urns (for Demons).',
              'Fight Greater Demons (Forinthry) or Ankous (Stronghold Floor 4) with Hurricane + Quake + Cleave.',
              'High Alch every Rune Salvage & Rune Armour piece on the spot.'
            ]
          },
          {
            id: 'atk-60-99-spiders',
            tabLabel: 'Alt: Deadly Red Spiders (Max XP)',
            isRecommended: false,
            method: 'Deadly Red Spiders (Pure AFK Peak XP)',
            prereqs: '65+ Stats, Gravite 2h / Rune +3 2h, Swordfish',
            prereqLinks: [
              { label: 'Fishing: Swordfish Prep (50–99)', section: 'skills', itemId: 'fishing', bracket: '50–99' }
            ],
            location: 'Varrock Sewers (Red Spider Chamber)',
            xpPerHour: '75k – 88k XP/hr',
            ironmanPrep: '10 min fishing & cooking Lobsters/Swordfish per hour',
            gpPerHour: '-15,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: "0 Alch Drops (Spiders only drop Red Spiders' Eggs — negative GP due to food & Gravite upkeep)",
            notes: 'Highest raw Attack XP/hr in F2P with zero alch/loot clutter.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock East Bank',
              target: 'Varrock Sewers Deadly Red Spiders (West Room)',
              sellSpot: '0 Drops (Pure XP Focus)',
              routeNote: 'Enter Varrock Sewers -> run west past Moss Giants into the aggressive Deadly Red Spider den.'
            },
            steps: [
              'Pack 24 Swordfish/Lobsters from Varrock East Bank.',
              'Run into Varrock Sewers -> head west past Moss Giants to the Red Spider room.',
              'Stand in the center so multiple aggressive spiders pile you for 100% AoE uptime.',
              'Re-bank at Varrock East whenever food runs low.'
            ]
          }
        ]
      }
    ]
  },

  strength: {
    skillPrereqLinks: [
      { label: 'Quest: Dragon Slayer (18,650 XP)', section: 'quests', itemId: 'dragon-slayer' },
      { label: 'Smithing: 2H Swords for AoE', section: 'skills', itemId: 'smithing', bracket: '50–99' },
      { label: 'Dungeoneering: Gravite 2h (55+)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' }
    ],
    brackets: [
      {
        levels: '1–33',
        methods: [
          {
            id: 'str-1-33-dragon-slayer',
            tabLabel: 'Recommended: Trolls + Dragon Slayer',
            isRecommended: true,
            method: 'Burthorpe Trolls / Cows + Dragon Slayer Skip',
            prereqs: 'None (32 Quest Points for Dragon Slayer at ~30 Combat)',
            prereqLinks: [
              { label: 'Quest: Dragon Slayer (18,650 Str/Def)', section: 'quests', itemId: 'dragon-slayer' }
            ],
            location: 'Burthorpe Troll Cave / Crandor Island',
            xpPerHour: '25k – 45k XP/hr',
            ironmanPrep: '5 min starter gear + Anti-Dragon Shield (Duke Horacio)',
            gpPerHour: '+30,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge General Store (or tan Cowhides at Al Kharid for 1–20 Crafting)',
            notes: 'Dragon Slayer instantly rockets early Strength straight past level 33.',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe / Port Sarim Lodestone',
              bank: 'Burthorpe / Draynor Bank',
              target: 'Burthorpe Trolls → Crandor (Elvarg)',
              sellSpot: 'Burthorpe / Lumbridge General Store',
              routeNote: 'Train on Trolls until 32 QP & ~30 Combat, then slay Elvarg on Crandor with Anti-Dragon Shield.'
            },
            steps: [
              'Toggle Combat XP Settings in RS3 exclusively to Strength.',
              'Kill Burthorpe Trolls/Cows with a 2H sword until you have ~30 Attack/Combat.',
              'Unlock 32 Quest Points and complete Dragon Slayer (bring Anti-Dragon Shield + Trout/Lobsters).',
              'Claim 18,650 Strength + 18,650 Defence XP to skyrocket past Level 33!'
            ]
          },
          {
            id: 'str-1-33-cows-minotaurs',
            tabLabel: 'Alt: Cows & Minotaurs (No Quests)',
            isRecommended: false,
            method: 'Lumbridge Cows → Stronghold Minotaurs',
            prereqs: 'None',
            prereqLinks: [
              { label: 'Crafting: Leather from Cowhides (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' }
            ],
            location: 'Lumbridge Cow Field / Stronghold Floor 1',
            xpPerHour: '18k – 28k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+22,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge General Store (or keep Cowhides & Iron Arrows)',
            notes: 'Steady pre-Dragon Slayer grinding that builds Crafting hides and Iron arrows.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge East Cow Field',
              sellSpot: 'Lumbridge General Store',
              routeNote: 'Kill Cows east of the River Lum bridge; bank Cowhides at Combat Academy chest.'
            },
            steps: [
              'Kill Cows east of Lumbridge and bank Cowhides if training early Crafting.',
              'Move to Stronghold of Security Floor 1 Minotaurs at Level 15+ Strength.',
              'Collect Bronze/Iron arrows for Ranged.',
              'Use Cleave whenever unlocked at Level 1 Strength with a 2H sword.'
            ]
          }
        ]
      },
      {
        levels: '33–55',
        methods: [
          {
            id: 'str-33-55-giants',
            tabLabel: 'Recommended: Hill & Moss Giants',
            isRecommended: true,
            method: 'Hill Giants & Moss Giants (Cleave + Quake AoE)',
            prereqs: '33+ Strength, Adamant/Rune +3 2h (at 40/50 Atk)',
            prereqLinks: [
              { label: 'Prayer: Big Bones on Chaos Altar', section: 'skills', itemId: 'prayer', bracket: '28–43' },
              { label: 'Smithing: Adamant & Rune 2H', section: 'skills', itemId: 'smithing', bracket: '40–50' }
            ],
            location: 'Edgeville Dungeon / Varrock Sewers',
            xpPerHour: '40k – 55k XP/hr',
            ironmanPrep: '5 min Trout/Salmon food prep',
            gpPerHour: '+70,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Varrock Swordshop, Horvik's Armour Shop, or Edgeville General Store",
            notes: 'Quake (37 Strength) hits multiple Giants simultaneously and lowers their Defence.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Dungeon Hill Giants / Sewers Moss Giants',
              sellSpot: "Horvik's Armour Shop / Varrock Swordshop",
              routeNote: 'Use the Brass Key shed to reach Hill Giants quickly and bank Big Bones north at Edgeville.'
            },
            steps: [
              'Put Quake (37 Strength) and Cleave at the front of your Revolution bar.',
              'Fight Hill Giants (Edgeville Dungeon) or Moss Giants (Varrock Sewers).',
              'Bank Big Bones for Level 43 Prayer and sell weapon/armour drops in Varrock.',
              'Hit 55 Strength for Hurricane (double AoE hit).'
            ]
          },
          {
            id: 'str-33-55-warriors',
            tabLabel: 'Alt: Al Kharid Warriors & Guards',
            isRecommended: false,
            method: 'Al Kharid Palace Warriors (Safe Multi-Combat)',
            prereqs: '30+ Strength, Mithril/Adamant 2h',
            prereqLinks: [
              { label: 'Cooking: Trout & Salmon Food', section: 'skills', itemId: 'cooking', bracket: '20–40' }
            ],
            location: 'Al Kharid Palace Courtyard',
            xpPerHour: '34k – 45k XP/hr',
            ironmanPrep: '5 min food prep',
            gpPerHour: '+40,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Zeke's Superior Scimitars / Al Kharid General Store",
            notes: 'Close to Al Kharid Bank with steady Level 25–30 herb/rune drops.',
            mapData: {
              terrain: 'city',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Al Kharid Bank',
              target: 'Al Kharid Palace Main Hall (Warriors)',
              sellSpot: "Zeke's Superior Scimitars (North of Palace)",
              routeNote: 'Fight inside Al Kharid Palace where multiple Warriors aggro around you; bank 10 seconds west.'
            },
            steps: [
              'Enter Al Kharid Palace east of the bank.',
              'Attack a Warrior inside the central hall to trigger multi-aggro.',
              'Use Cleave & Quake to wipe groups rapidly.',
              'Pick up herbs/coins and bank west at Al Kharid Bank.'
            ]
          }
        ]
      },
      {
        levels: '55–75',
        methods: [
          {
            id: 'str-55-75-cockroaches',
            tabLabel: 'Recommended: Cockroach Soldiers',
            isRecommended: true,
            method: 'Cockroach Soldiers (Hurricane + Quake AoE)',
            prereqs: '55 Strength (Hurricane), 50+ Attack, Rune +3 / Gravite 2h',
            prereqLinks: [
              { label: 'Money: Cockroach Soldiers Guide', section: 'money', itemId: 'cockroach-soldiers' },
              { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: 'Stronghold of Player Safety Dungeon',
            xpPerHour: '55k – 72k XP/hr',
            ironmanPrep: '5 min food + Fire Staff & Nature Runes',
            gpPerHour: '+380,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy (Medium/Large Rune Salvage, Rune Scimitars) or Varrock Swordshop',
            notes: 'Hurricane hits all adjacent targets twice; peak GP + Strength XP balance.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold of Player Safety (Cockroaches)',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Climb down Stronghold of Player Safety south of Edgeville Jail -> Alch Rune Salvage on site.'
            },
            steps: [
              'Place Hurricane (55 Strength), Quake, and Cleave at the front of your Revolution bar.',
              'Enter Stronghold of Player Safety with Lobsters, Fire Staff, Nature Runes & Gem Bag.',
              'Pull 2–3 Cockroach Soldiers together and burst with Hurricane.',
              'High Alch Rune drops and collect Law/Death/Nature runes.'
            ]
          },
          {
            id: 'str-55-75-lessers',
            tabLabel: 'Alt: Lesser Demons (Karamja)',
            isRecommended: false,
            method: 'Karamja Volcano Lesser Demons',
            prereqs: '50+ Attack & Strength, Rune +3 2h, Lobsters',
            prereqLinks: [
              { label: 'Fishing: Karamja Lobsters (40–50)', section: 'skills', itemId: 'fishing', bracket: '40–50' }
            ],
            location: 'Karamja Volcano Dungeon (Crandor Tunnel)',
            xpPerHour: '48k – 62k XP/hr',
            ironmanPrep: '5 min Lobster/Swordfish food prep',
            gpPerHour: '+140,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy (Rune Med Helms) or Horvik's Armour Shop",
            notes: 'Easy multi-target spawns plus Imp spawns along the volcano path.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Deposit Box / TzHaar Bank',
              target: 'Karamja Volcano Lesser Demons',
              sellSpot: 'High Level Alchemy (Rune Med Helms)',
              routeNote: 'Sail to Karamja -> climb down Volcano rope -> fight Lesser Demons and High Alch Rune Med Helms.'
            },
            steps: [
              'Sail from Port Sarim to Karamja and climb down the Volcano entrance.',
              'Fight Lesser Demons with Hurricane + Quake.',
              'High Alch Rune Med Helms and Fire Rune stacks.',
              'Collect Black/Red/Yellow/White Beads from nearby Imps if teammates still need Imp Catcher.'
            ]
          }
        ]
      },
      {
        levels: '75–99',
        methods: [
          {
            id: 'str-75-99-demons-ankous',
            tabLabel: 'Recommended: Greater Demons / Ankous',
            isRecommended: true,
            method: 'Greater Demons & Ankous (Alch GP + High XP)',
            prereqs: '70+ Stats, Gravite 2h / Rune +3 2h, 43 Prayer rec.',
            prereqLinks: [
              { label: 'Dungeoneering: Gravite 2h (55–99)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' },
              { label: 'Prayer: 43 Prayer + Accursed Urns', section: 'skills', itemId: 'prayer', bracket: '43–99' }
            ],
            location: 'Forinthry Dungeon / Stronghold of Security Floor 4',
            xpPerHour: '65k – 78k XP/hr',
            ironmanPrep: '8 min Swordfish/Lobster food prep per hour',
            gpPerHour: '+320,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy on Rune Salvage & Weapon Drops',
            notes: 'Sustains strong GP/hr all the way to 99 Strength while stacking Death/Blood/Law drops at Ankous.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Forinthry Greater Demons / Stronghold Floor 4 Ankous',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Edgeville Bank -> Forinthry Dungeon (PvP Opt-Out!) or Barbarian Village Stronghold Floor 4.'
            },
            steps: [
              'Confirm PvP is Opted-Out at Edgeville if visiting Forinthry Dungeon.',
              'Bring Gravite 2h (or Rune +3 2h), Swordfish, Nature Runes, and Fire Staff.',
              'Use AoE Thresholds on Greater Demons or Ankous.',
              'High Alch every Rune drop immediately.'
            ]
          },
          {
            id: 'str-75-99-spiders',
            tabLabel: 'Alt: Deadly Red Spiders (Peak XP)',
            isRecommended: false,
            method: 'Deadly Red Spiders (Pure AFK Max XP)',
            prereqs: '70+ Stats, Rune +3 / Gravite 2h, Swordfish/Lobsters',
            prereqLinks: [
              { label: 'Cooking: Swordfish & Lobsters (50–99)', section: 'skills', itemId: 'cooking', bracket: '50–99' }
            ],
            location: 'Varrock Sewers (Red Spider Room)',
            xpPerHour: '75k – 90k XP/hr',
            ironmanPrep: '10 min fishing & cooking Lobsters/Swordfish per hour',
            gpPerHour: '-15,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: "0 Drops (Spiders only drop Red Spiders' Eggs — negative GP due to food & Gravite repair)",
            notes: 'Fastest raw Strength XP/hr in F2P when GP is already funded.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock East Bank',
              target: 'Varrock Sewers Deadly Red Spiders',
              sellSpot: '0 Drops (Pure XP Focus)',
              routeNote: 'Varrock East Bank -> Varrock Sewers -> West Red Spider den.'
            },
            steps: [
              'Stock up on 24+ Swordfish/Lobsters at Varrock East Bank.',
              'Enter Varrock Sewers and run west to the Red Spider room.',
              'Let 3+ aggressive spiders surround you for constant Cleave/Quake/Hurricane hits.',
              'Bank at Varrock East when food runs out.'
            ]
          }
        ]
      }
    ]
  },

  defence: {
    skillPrereqLinks: [
      { label: 'Quest: Dragon Slayer (18,650 Def XP)', section: 'quests', itemId: 'dragon-slayer' },
      { label: 'Magic: Defensive AoE Casting (40–99)', section: 'skills', itemId: 'magic', bracket: '40–55' },
      { label: 'Smithing: Full Rune +3 Armour (50–99)', section: 'skills', itemId: 'smithing', bracket: '50–99' }
    ],
    brackets: [
      {
        levels: '1–33',
        methods: [
          {
            id: 'def-1-33-dragon-slayer',
            tabLabel: 'Recommended: Trolls + Dragon Slayer',
            isRecommended: true,
            method: 'Burthorpe Trolls + Dragon Slayer Reward (18,650 XP)',
            prereqs: 'None (32 QP for Dragon Slayer)',
            prereqLinks: [
              { label: 'Quest: Dragon Slayer', section: 'quests', itemId: 'dragon-slayer' },
              { label: 'Quest: The Death of Chivalry', section: 'quests', itemId: 'death-of-chivalry' }
            ],
            location: 'Burthorpe Troll Cave / Crandor',
            xpPerHour: '25k – 42k XP/hr',
            ironmanPrep: '3 min basic armour/food prep',
            gpPerHour: '+25,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store or Lumbridge General Store',
            notes: 'Complete Dragon Slayer immediately to unlock Tier 40/50 chestplates (Rune/D\'hide/Mystic).',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Troll Cave → Elvarg (Crandor)',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Set Combat XP to Defence on Trolls, then finish Dragon Slayer for instant 33+ Defence.'
            },
            steps: [
              'Switch Combat XP Settings exclusively to Defence.',
              'Kill Burthorpe Trolls until ~30 Combat while building 32 Quest Points.',
              'Complete Dragon Slayer with Anti-Dragon Shield and food.',
              'Collect 18,650 Defence XP + ability to wear Rune Platebody, Green D\'hide Body & Mystic Top.'
            ]
          },
          {
            id: 'def-1-33-magic-def',
            tabLabel: 'Alt: Defensive Magic Casting',
            isRecommended: false,
            method: 'Train Defence via Air Strike/Bolt (Zero Runes)',
            prereqs: 'Air Staff, Combat XP Settings set to Defence',
            prereqLinks: [
              { label: 'Magic: Zero-Rune Revolution (1–17)', section: 'skills', itemId: 'magic', bracket: '1–17' }
            ],
            location: 'Burthorpe Troll Cave / Al Kharid',
            xpPerHour: '22k – 35k XP/hr',
            ironmanPrep: '2 min equipping free Air Staff',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store',
            notes: 'Magic AoE (Chain + Dragon Breath) trains Defence faster than early melee!',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Troll Cave',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Set Magic XP toggle to Defence Only and cast Air Strike/Bolt with Chain at Trolls.'
            },
            steps: [
              'Open Settings -> Combat XP -> tick Defence under Magic.',
              'Equip an Air Staff and set Air Strike/Bolt.',
              'Place Chain on your Revolution bar to hit 3 targets at once.',
              'Sell Troll drops at Burthorpe General Store.'
            ]
          }
        ]
      },
      {
        levels: '33–50',
        methods: [
          {
            id: 'def-33-50-warriors-moss',
            tabLabel: 'Recommended: Warriors & Moss Giants',
            isRecommended: true,
            method: 'Al Kharid Warriors / Varrock Moss Giants',
            prereqs: '33+ Defence, Air Bolt or Adamant Weapon',
            prereqLinks: [
              { label: 'Smithing: Adamant +2 Armour (40–50)', section: 'skills', itemId: 'smithing', bracket: '40–50' }
            ],
            location: 'Al Kharid Palace / Varrock Sewers',
            xpPerHour: '38k – 50k XP/hr',
            ironmanPrep: '5 min Trout/Salmon prep',
            gpPerHour: '+65,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Louie's Armoured Legs Bazaar (Al Kharid), Horvik's (Varrock), or Edgeville General Store",
            notes: 'At 48 Defence, unlock Resonance for free healing with a Shield switch.',
            mapData: {
              terrain: 'city',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Al Kharid Bank',
              target: 'Al Kharid Palace Warriors',
              sellSpot: "Louie's Armoured Legs / Zeke's Scimitars",
              routeNote: 'Fight Al Kharid Warriors inside the Palace with AoE abilities; bank 10s west.'
            },
            steps: [
              'Wear best Spider Silk/Carapace/Adamant armour with Defence XP toggled on.',
              'Use AoE abilities at Al Kharid Palace Warriors or Varrock Sewers Moss Giants.',
              'Unlock Resonance at 48 Defence for free healing during tough fights.',
              'Hit 50 Defence to equip full Rune +3 & Mystic.'
            ]
          },
          {
            id: 'def-33-50-stronghold',
            tabLabel: 'Alt: Flesh Crawlers & Catablepons',
            isRecommended: false,
            method: 'Stronghold of Security Floor 2/3',
            prereqs: '33+ Defence, Trout/Salmon food',
            prereqLinks: [
              { label: 'Cooking: Trout & Salmon (20–40)', section: 'skills', itemId: 'cooking', bracket: '20–40' }
            ],
            location: 'Stronghold of Security (Barbarian Village)',
            xpPerHour: '34k – 44k XP/hr',
            ironmanPrep: '5 min food prep',
            gpPerHour: '+45,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Edgeville General Store (keep Fire Runes & Herbs)',
            notes: 'Flesh Crawlers auto-aggro so you can AFK Defence XP smoothly.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold Floor 2 Flesh Crawlers',
              sellSpot: 'Edgeville General Store',
              routeNote: 'Descend Barbarian Village Stronghold to Floor 2 and stand in a multi-spawn Flesh Crawler room.'
            },
            steps: [
              'Bring an inventory of Trout/Salmon to Stronghold Floor 2.',
              'Stand in a 3+ Flesh Crawler room with Auto-Retaliate & Revolution ON.',
              'Loot Fire Runes and Herbs.',
              'Bank north in Edgeville when food runs out.'
            ]
          }
        ]
      },
      {
        levels: '50–70',
        methods: [
          {
            id: 'def-50-70-cockroaches',
            tabLabel: 'Recommended: Cockroaches (Magic/Melee)',
            isRecommended: true,
            method: 'Cockroach Soldiers (Defensive Magic AoE / Melee)',
            prereqs: '50 Defence (Rune +3 / Mystic / D\'hide), 55 Magic rec.',
            prereqLinks: [
              { label: 'Magic: Dragon Breath & High Alch (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' },
              { label: 'Smithing: Rune +3 Armour (50–99)', section: 'skills', itemId: 'smithing', bracket: '50–99' }
            ],
            location: 'Stronghold of Player Safety Dungeon',
            xpPerHour: '52k – 68k XP/hr',
            ironmanPrep: '5 min food + Nature Runes/Fire Staff',
            gpPerHour: '+350,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy (Rune Salvage/Sq Shields) or Cassie's Shield Shop (Falador)",
            notes: 'Training Defence with Magic Dragon Breath + Chain out-damages single-target melee.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold of Player Safety (Cockroaches)',
              sellSpot: "High Level Alchemy / Cassie's Shield Shop",
              routeNote: 'Set Combat XP to Defence -> cast Dragon Breath & Chain at Cockroach Soldiers -> Alch Rune Salvage.'
            },
            steps: [
              'Equip Rune +3 (Melee) or Mystic + Staff of Air/Gravite Staff (Magic) with Defence XP enabled.',
              'Enter Stronghold of Player Safety with Lobsters, Nature Runes & Gem Bag.',
              'Burst grouped Cockroach Soldiers with Dragon Breath + Chain (or Hurricane + Cleave).',
              'High Alch Rune Salvage/Scimitars on-site for 350k+ GP/hr.'
            ]
          },
          {
            id: 'def-50-70-ice-giants',
            tabLabel: 'Alt: Ice Giants & Warriors',
            isRecommended: false,
            method: 'Asgarnian Ice Dungeon (Ice Giants / Warriors)',
            prereqs: '50+ Defence, Fire Bolt/Blast (weakness to Fire!) or Rune +3',
            prereqLinks: [
              { label: 'Magic: Air/Fire Blast (40–55)', section: 'skills', itemId: 'magic', bracket: '40–55' }
            ],
            location: 'Asgarnian Ice Dungeon (Mudskipper Point)',
            xpPerHour: '45k – 58k XP/hr',
            ironmanPrep: '5 min food prep',
            gpPerHour: '+95,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Alch Mithril/Rune drops or Cassie's Shield Shop / Port Sarim General Store",
            notes: 'Ice Giants drop Big Bones + Water/Law/Cosmic runes.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Deposit Box',
              target: 'Asgarnian Ice Dungeon (Ice Giant Hall)',
              sellSpot: 'High Level Alchemy / Port Sarim General Store',
              routeNote: 'Run south from Port Sarim Lodestone past Thurgo -> climb down Ice Dungeon -> camp Ice Giants.'
            },
            steps: [
              'Bring Fire spells (Staff of Fire) or Rune +3 melee with Defence XP enabled.',
              'Climb down the Asgarnian Ice Dungeon south of Port Sarim.',
              'Kill Ice Giants & Ice Warriors for fast XP + Big Bones.',
              'High Alch drops or deposit valuables at Port Sarim.'
            ]
          }
        ]
      },
      {
        levels: '70–99',
        methods: [
          {
            id: 'def-70-99-demons',
            tabLabel: 'Recommended: Greater Demons (GP)',
            isRecommended: true,
            method: 'Greater Demons (High Alch + Defence XP)',
            prereqs: '70+ Defence, Gravite Weapon (55), 43 Prayer rec.',
            prereqLinks: [
              { label: 'Dungeoneering: Gravite Weapons (55–99)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' },
              { label: 'Prayer: 43 Prayer + Accursed Urns', section: 'skills', itemId: 'prayer', bracket: '43–99' }
            ],
            location: 'Forinthry Dungeon (Wilderness Lvl 18 — PvP Opted-Out)',
            xpPerHour: '65k – 78k XP/hr',
            ironmanPrep: '8 min cooking Swordfish/Lobsters per combat hour',
            gpPerHour: '+300,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy on Rune Salvage & Rune Full Helms',
            notes: 'Balances fast Defence XP with 300k GP/hr and passive Prayer via Accursed Urns.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Forinthry Dungeon Greater Demons',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Confirm PvP Opt-Out with Vala -> enter Forinthry Dungeon north of Edgeville -> Alch Rune drops.'
            },
            steps: [
              'Toggle PvP Opt-Out OFF at Vala near Edgeville wall.',
              'Bring Gravite Staff/2h, Swordfish, Fire Staff, Nature Runes & Accursed Prayer Urns.',
              'Camp Greater Demons inside Forinthry Dungeon using Magic or Melee Defence XP.',
              'High Alch Rune drops continuously.'
            ]
          },
          {
            id: 'def-70-99-hellhounds',
            tabLabel: 'Alt 1: Hellhounds (AFK + Charms)',
            isRecommended: false,
            method: 'Forinthry Hellhounds (AFK + Gold Charms)',
            prereqs: '70+ Defence, Swordfish/Lobsters, Gravite Weapon',
            prereqLinks: [
              { label: 'Fishing: Swordfish Food (50–99)', section: 'skills', itemId: 'fishing', bracket: '50–99' }
            ],
            location: 'Forinthry Dungeon (Hellhound Wing)',
            xpPerHour: '68k – 82k XP/hr',
            ironmanPrep: '8 min food prep per hour',
            gpPerHour: '-10,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: '0 Alch Drops (Hellhounds only drop Gold Charms, Bones & Hard Clues — food cost loss)',
            notes: 'Great if you want pure AFK aggression without picking up loot.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Forinthry Dungeon Hellhounds',
              sellSpot: '0 Drops (Gold Charms / Clues Only)',
              routeNote: 'Enter Forinthry Dungeon (PvP Opted-Out) and camp Hellhounds with auto-retaliate.'
            },
            steps: [
              'Pack 24+ Swordfish/Lobsters from Edgeville Bank.',
              'Stand in the Forinthry Hellhound room (PvP Opted-Out).',
              'Let aggressive Hellhounds auto-attack your AoE Revolution bar.',
              'Bank for fresh food when inventory empties.'
            ]
          },
          {
            id: 'def-70-99-spiders',
            tabLabel: 'Alt 2: Deadly Red Spiders (Max XP)',
            isRecommended: false,
            method: 'Deadly Red Spiders (Peak Raw Defence XP)',
            prereqs: '70+ Defence, Gravite Weapon, Swordfish',
            prereqLinks: [
              { label: 'Attack: Red Spiders Setup (60–99)', section: 'skills', itemId: 'attack', bracket: '60–99' }
            ],
            location: 'Varrock Sewers',
            xpPerHour: '75k – 86k XP/hr',
            ironmanPrep: '10 min food prep per hour',
            gpPerHour: '-15,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: '0 Alch Drops (Food & weapon degradation sink)',
            notes: 'Highest raw Defence XP/hr in F2P.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock East Bank',
              target: 'Varrock Sewers Red Spider Room',
              sellSpot: '0 Drops (Pure XP Focus)',
              routeNote: 'Enter Varrock Sewers -> run west to Red Spiders with Magic Dragon Breath/Chain or 2H Melee.'
            },
            steps: [
              'Bring 24+ Swordfish and set Combat XP strictly to Defence.',
              'Run into the Varrock Sewers Deadly Red Spider room.',
              'Maximize AoE abilities across multiple aggressive spiders.',
              'Bank at Varrock East Bank when needed.'
            ]
          }
        ]
      }
    ]
  },

  constitution: {
    skillPrereqLinks: [
      { label: 'Archaeology: Font of Life Relic (+500 HP!)', section: 'skills', itemId: 'archaeology', bracket: '1–5' },
      { label: 'Magic: Dragon Breath (52 Magic/HP)', section: 'skills', itemId: 'magic', bracket: '55–99' },
      { label: 'Firemaking: Bonfire +5% Max HP Buff', section: 'skills', itemId: 'firemaking', bracket: '45–99' }
    ],
    brackets: [
      {
        levels: '10–30',
        methods: [
          {
            id: 'hp-10-30-quests-trolls',
            tabLabel: 'Recommended: Font of Life + Trolls',
            isRecommended: true,
            method: 'Font of Life (+500 HP) + Quest Bosses & Trolls',
            prereqs: 'Level 5 Archaeology (Font of Life Relic)',
            prereqLinks: [
              { label: 'Archaeology: 1–5 Tutorial (+500 HP)', section: 'skills', itemId: 'archaeology', bracket: '1–5' },
              { label: 'Quest: Vampyre Slayer', section: 'quests', itemId: 'vampire-slayer' }
            ],
            location: 'Archaeology Campus → Burthorpe Troll Cave',
            xpPerHour: '10k – 15k Constitution XP/hr',
            ironmanPrep: '10 min Archaeology tutorial for +500 Max HP boost',
            gpPerHour: '+25,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store',
            notes: 'Constitution gains 33% of all combat XP passively; Font of Life doubles early survivability.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'Varrock / Burthorpe Lodestone',
              bank: 'Archaeology Campus / Burthorpe Bank',
              target: 'Monolith (Font of Life) → Burthorpe Trolls',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Finish 1–5 Archaeology east of Varrock first to activate Font of Life, then train Combat at Burthorpe Trolls.'
            },
            steps: [
              'Complete the 10-minute Archaeology Campus tutorial to reach Level 5 Archaeology.',
              'Turn in Centurion\'s Seal and activate Font of Life (+500 Max HP) at the Monolith.',
              'Train Attack, Magic, Ranged, or Necromancy at Burthorpe Trolls.',
              'Constitution levels automatically alongside every kill.'
            ]
          },
          {
            id: 'hp-10-30-minotaurs',
            tabLabel: 'Alt: Stronghold Minotaurs',
            isRecommended: false,
            method: 'Stronghold of Security Floor 1 Combat',
            prereqs: 'Level 10+ Combat',
            prereqLinks: [
              { label: 'Money: Stronghold 20k Cash', section: 'money', itemId: 'stronghold-security' }
            ],
            location: 'Stronghold of Security (Barbarian Village)',
            xpPerHour: '9k – 14k Constitution XP/hr',
            ironmanPrep: '0 min prep (loot 10k GP inside)',
            gpPerHour: '+30,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Edgeville General Store',
            notes: 'Stacks Iron Arrows & GP chests alongside passive Constitution XP.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold Floor 1 Minotaurs',
              sellSpot: 'Edgeville General Store',
              routeNote: 'Barbarian Village center hole -> Floor 1 Minotaurs.'
            },
            steps: [
              'Enter Stronghold of Security in Barbarian Village.',
              'Train any combat style on Minotaurs (Levels 12 & 27).',
              'Use Regenerate out of combat to heal free without wasting food.'
            ]
          }
        ]
      },
      {
        levels: '30–52',
        methods: [
          {
            id: 'hp-30-52-giants',
            tabLabel: 'Recommended: Hill & Moss Giants',
            isRecommended: true,
            method: 'Hill Giants & Moss Giants AoE Combat',
            prereqs: 'Tier 30–40 Weapons, Brass Key',
            prereqLinks: [
              { label: 'Cooking: Trout & Salmon Food (20–40)', section: 'skills', itemId: 'cooking', bracket: '20–40' },
              { label: 'Magic: Bolt Spells (17–40)', section: 'skills', itemId: 'magic', bracket: '17–40' }
            ],
            location: 'Edgeville Dungeon / Varrock Sewers',
            xpPerHour: '14k – 20k Constitution XP/hr',
            ironmanPrep: '5 min cooking Trout/Salmon',
            gpPerHour: '+75,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Varrock Swordshop or Aubury's Rune Shop (runes)",
            notes: 'Reach 52 Constitution alongside 52 Magic to unlock Dragon Breath!',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Hill Giants / Sewers Moss Giants',
              sellSpot: 'Varrock Swordshop',
              routeNote: 'Brass Key shed west of Varrock Cooks\' Guild -> Edgeville Dungeon Hill Giants.'
            },
            steps: [
              'Equip Tier 30/40 Magic, Ranged, or 2H Melee weapons.',
              'Train AoE combat at Hill Giants or Moss Giants.',
              'Reach 52 Constitution & 52 Magic to unlock Dragon Breath.',
              'Bank Big Bones for Level 43 Prayer.'
            ]
          },
          {
            id: 'hp-30-52-daemonheim',
            tabLabel: 'Alt: Daemonheim Party Floors',
            isRecommended: false,
            method: 'Daemonheim Complexity 6 Combat',
            prereqs: 'Ring of Kinship (free)',
            prereqLinks: [
              { label: 'Dungeoneering: Party Floors (30–55)', section: 'skills', itemId: 'dungeoneering', bracket: '30–55' }
            ],
            location: 'Daemonheim',
            xpPerHour: '12k – 18k Constitution XP/hr + DG XP',
            ironmanPrep: '0 min outside prep',
            gpPerHour: '+60,000 GP/hr (Token Unlocks)',
            gpTrend: 'positive',
            whereToSell: 'Smuggler inside Dungeon / Daemonheim Reward Trader',
            notes: 'Zero food or gear cost outside Daemonheim while grinding DG Tokens.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'No Outside Bank Needed',
              target: 'Daemonheim Floors (Complexity 6)',
              sellSpot: 'Marmaros Reward Trader',
              routeNote: 'Ring of Kinship teleport -> form GIM party -> clear Complexity 6 Guardian rooms.'
            },
            steps: [
              'Empty inventory and enter Daemonheim with your GIM party.',
              'Clear Guardian & Skiller rooms on Complexity 6.',
              'Constitution builds passively while earning Gravite/Scroll tokens.'
            ]
          }
        ]
      },
      {
        levels: '52–75',
        methods: [
          {
            id: 'hp-52-75-cockroaches',
            tabLabel: 'Recommended: Cockroach Soldiers',
            isRecommended: true,
            method: 'Cockroach Soldiers (Dragon Breath + Cleave AoE)',
            prereqs: '52 Constitution, Tier 50 Weapons, 55 Magic rec.',
            prereqLinks: [
              { label: 'Magic: Dragon Breath & High Alch (55–99)', section: 'skills', itemId: 'magic', bracket: '55–99' },
              { label: 'Fishing: Karamja Lobsters (40–50)', section: 'skills', itemId: 'fishing', bracket: '40–50' }
            ],
            location: 'Stronghold of Player Safety Dungeon',
            xpPerHour: '20k – 26k Constitution XP/hr',
            ironmanPrep: '5 min food + Fire Staff & Nature Runes',
            gpPerHour: '+350,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy (Rune Salvage) or Varrock Swordshop',
            notes: 'Passive Constitution XP builds automatically while farming GP & Runes.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold of Player Safety (Cockroaches)',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Edgeville Jail dungeon -> AoE Cockroach Soldiers with Dragon Breath + Chain or Hurricane.'
            },
            steps: [
              'Bring Lobsters, Nature Runes, Fire Staff & Gem Bag.',
              'Use Dragon Breath (52 Constitution/Magic) + Chain or Hurricane on Cockroach Soldiers.',
              'High Alch Rune Salvage drops immediately.',
              'Use Regenerate between spawns to save food.'
            ]
          },
          {
            id: 'hp-52-75-lessers',
            tabLabel: 'Alt: Lesser Demons (Karamja)',
            isRecommended: false,
            method: 'Karamja Lesser Demons (Magic/Ranged Safespot)',
            prereqs: 'Tier 40–50 Magic or Ranged',
            prereqLinks: [
              { label: 'Ranged: Magic Shortbow (40–60)', section: 'skills', itemId: 'ranged', bracket: '40–60' }
            ],
            location: 'Karamja Volcano Dungeon',
            xpPerHour: '17k – 22k Constitution XP/hr',
            ironmanPrep: '5 min food prep',
            gpPerHour: '+140,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy (Rune Med Helms)',
            notes: 'Zero food needed if safespotting with Ranged or Magic.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Deposit Box',
              target: 'Karamja Volcano Lesser Demons',
              sellSpot: 'High Level Alchemy (Rune Med Helms)',
              routeNote: 'Sail to Karamja -> climb down Volcano rope -> safespot behind stalagmites.'
            },
            steps: [
              'Climb down the Karamja Volcano rope.',
              'Safespot Lesser Demons with Magic/Ranged abilities.',
              'High Alch Rune Med Helms and stack Fire Runes.'
            ]
          }
        ]
      },
      {
        levels: '75–99',
        methods: [
          {
            id: 'hp-75-99-demons-ankous',
            tabLabel: 'Recommended: Greater Demons & Ankous',
            isRecommended: true,
            method: 'Greater Demons & Ankous (AoE Combat + Alchs)',
            prereqs: 'Tier 55 Gravite Weapon, Swordfish/Lobsters',
            prereqLinks: [
              { label: 'Fishing: Swordfish Prep (50–99)', section: 'skills', itemId: 'fishing', bracket: '50–99' },
              { label: 'Prayer: 43 Prayer + Accursed Urns', section: 'skills', itemId: 'prayer', bracket: '43–99' }
            ],
            location: 'Forinthry Dungeon / Stronghold of Security Floor 4',
            xpPerHour: '25k – 30k Constitution XP/hr',
            ironmanPrep: '8 min fishing/cooking Swordfish per hour',
            gpPerHour: '+300,000 – +450,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Alch Rune drops + Grum's Gold Exchange (Port Sarim) for Uncut Gems",
            notes: 'Use 5-log Bonfire HP boost + Font of Life relic (+500 HP) before bossing.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Forinthry Greater Demons / Stronghold Ankous',
              sellSpot: 'High Level Alchemy',
              routeNote: 'Warm up at a Bonfire if fighting KBD/Giant Mole, or camp Demons/Ankous with AoE.'
            },
            steps: [
              'Equip Gravite Staff/2h/Shortbow + Swordfish.',
              'Fight Greater Demons (Forinthry) or Ankous (Stronghold Floor 4).',
              'High Alch Rune Salvage and bank Death/Law runes.',
              'Hits 99 Constitution naturally while maxing Attack/Strength/Magic/Ranged.'
            ]
          },
          {
            id: 'hp-75-99-spiders',
            tabLabel: 'Alt: Deadly Red Spiders (Max XP)',
            isRecommended: false,
            method: 'Deadly Red Spiders (Pure AFK Constitution XP)',
            prereqs: '75+ Combat, Gravite Weapon, Swordfish',
            prereqLinks: [
              { label: 'Strength: Red Spiders Max XP (75–99)', section: 'skills', itemId: 'strength', bracket: '75–99' }
            ],
            location: 'Varrock Sewers',
            xpPerHour: '28k – 33k Constitution XP/hr',
            ironmanPrep: '10 min Swordfish prep per hour',
            gpPerHour: '-15,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: '0 Drops (Pure XP Focus)',
            notes: 'Peak raw Constitution XP/hr in F2P via multi-target AoE.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Varrock Lodestone',
              bank: 'Varrock East Bank',
              target: 'Varrock Sewers Deadly Red Spiders',
              sellSpot: '0 Drops (Pure XP Focus)',
              routeNote: 'Varrock East Bank -> Varrock Sewers -> West Red Spider den.'
            },
            steps: [
              'Fill inventory with Swordfish at Varrock East Bank.',
              'Run west through Varrock Sewers to Deadly Red Spiders.',
              'Chain Dragon Breath + Chain (Magic) or Hurricane + Quake + Cleave (Melee).',
              'Re-bank when food runs out.'
            ]
          }
        ]
      }
    ]
  },

  magic: {
    skillPrereqLinks: [
      { label: 'Quest: Imp Catcher & Swept Away', section: 'quests', itemId: 'imp-catcher' },
      { label: 'Dungeoneering: Gravite Staff (40k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' },
      { label: 'Smithing: Rune +3 High Alch Fuel', section: 'skills', itemId: 'smithing', bracket: '50–99' },
      { label: 'Runecrafting: Nature/Law/Air Supplies', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
    ],
    brackets: [
      {
        levels: '1–17',
        methods: [
          {
            id: 'mag-1-17-trolls',
            tabLabel: 'Recommended: Quests + Trolls',
            isRecommended: true,
            method: 'Quests + Air Strike at Burthorpe Trolls (0-Rune Abilities)',
            prereqs: 'Free Air Staff (Burthorpe/Diango), 50 Air Runes',
            prereqLinks: [
              { label: 'Quest: Imp Catcher (875 XP)', section: 'quests', itemId: 'imp-catcher' },
              { label: 'Quest: Swept Away (+2,500 XP Clara)', section: 'quests', itemId: 'swept-away' }
            ],
            location: 'Burthorpe Troll Cave / Lumbridge',
            xpPerHour: '25k – 38k XP/hr',
            ironmanPrep: '2 min claiming Air Staff & finishing Imp Catcher / Witch\'s Potion',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store (Troll drops)',
            notes: 'Revolution abilities consume 0 runes! Only carry ~100 Air Runes for initial auto-attacks.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Troll Cave (North)',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Claim free Air Staff in Burthorpe, talk to Apprentice Clara after Swept Away for +2,500 XP, and cast Air Strike at Trolls.'
            },
            steps: [
              'Complete Imp Catcher (875 XP) and Witch\'s Potion (325 XP); bring Swept Away Broomstick to Apprentice Clara in Burthorpe for +2,500 Magic XP.',
              'Equip an Air Staff and put Wrack, Sonic Wave, Impact, Dragon Breath/Combust on Revolution.',
              'Cast Air Strike inside Burthorpe Troll Cave (abilities use 0 Air Runes!).',
              'Sell Troll drops at Burthorpe General Store.'
            ]
          },
          {
            id: 'mag-1-17-chickens',
            tabLabel: 'Alt: Lumbridge Cows/Chickens',
            isRecommended: false,
            method: 'Lumbridge Chickens & Cows (Feathers + Cowhides)',
            prereqs: 'Air Staff, 50 Air Runes',
            prereqLinks: [
              { label: 'Crafting: Leather from Cowhides (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' }
            ],
            location: 'Lumbridge East Farms',
            xpPerHour: '18k – 26k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+15,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge General Store (or bank Feathers & Cowhides)',
            notes: 'Good if you want free starter Feathers & Cowhides simultaneously.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge Chicken Coop / Cow Pen',
              sellSpot: 'Lumbridge General Store',
              routeNote: 'Cross the River Lum bridge -> kill Chickens/Cows -> bank at Combat Academy.'
            },
            steps: [
              'Cross the River Lum bridge east of the Castle.',
              'Attack Chickens or Cows with Air Strike on Revolution.',
              'Pick up Feathers, Raw Chicken, and Cowhides.',
              'Bank at Lumbridge Combat Academy.'
            ]
          }
        ]
      },
      {
        levels: '17–40',
        methods: [
          {
            id: 'mag-17-40-bolt',
            tabLabel: 'Recommended: Air/Fire Bolt AoE',
            isRecommended: true,
            method: 'Air/Fire Bolt (Chain AoE) at Hill Giants & Al Kharid',
            prereqs: '17 Magic, Staff of Air/Fire (1,500 GP at Zaff in Varrock), ~50 Chaos Runes',
            prereqLinks: [
              { label: 'Runecrafting: Mind & Elemental Runes', section: 'skills', itemId: 'runecrafting', bracket: '1–33' },
              { label: 'Prayer: Hill Giant Big Bones (28–43)', section: 'skills', itemId: 'prayer', bracket: '28–43' }
            ],
            location: 'Edgeville Dungeon / Al Kharid Palace',
            xpPerHour: '38k – 52k XP/hr',
            ironmanPrep: '2 min buying Fire/Air Staff from Zaff + ~50 Chaos Runes from Aubury',
            gpPerHour: '+60,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Edgeville General Store, Varrock Swordshop, or Aubury's Rune Shop",
            notes: 'Craft Spider Silk armour (20 Magic/Crafting) or Batwing (30).',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Varrock / Edgeville Lodestone',
              bank: 'Edgeville / Varrock West Bank',
              target: 'Edgeville Hill Giants / Al Kharid Warriors',
              sellSpot: "Varrock Swordshop / Aubury's Rune Shop",
              routeNote: 'Buy Staff of Air/Fire from Zaff (Varrock Square) & Chaos Runes from Aubury -> AoE Chain Hill Giants.'
            },
            steps: [
              'Buy a Staff of Fire or Air from Zaff in Varrock Square (1,500 GP) and 50 Chaos Runes from Aubury.',
              'Put Chain (45 Magic / earlier AoE) + Impact + Wrack + Combust on Revolution.',
              'Fight Hill Giants (Edgeville Dungeon) or Al Kharid Warriors.',
              'Bank Big Bones for Prayer and sell metal drops at Varrock Swordshop.'
            ]
          },
          {
            id: 'mag-17-40-splashing',
            tabLabel: 'Alt: Confuse / Weaken Splashing',
            isRecommended: false,
            method: 'Splashing Confuse / Weaken in Plate Armour',
            prereqs: '11–19 Magic, Full Bronze/Iron Plate Armour (-Magic Accuracy), Body Runes',
            prereqLinks: [
              { label: 'Runecrafting: Body/Water Runes', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
            ],
            location: 'Lumbridge Combat Dummies / Chickens',
            xpPerHour: '30k – 42k XP/hr',
            ironmanPrep: '3 min buying Body Runes from Aubury & Carwen',
            gpPerHour: '-18,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: '0 Drops (Body Rune shop sink)',
            notes: 'Non-combat option for skillers or if you have surplus Body Runes.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge Combat Dummies',
              sellSpot: '0 Drops (Rune Shop Sink)',
              routeNote: 'Equip full Plate Armour + Air Staff -> cast Confuse/Weaken repeatedly on Lumbridge Dummies.'
            },
            steps: [
              'Buy Body Runes from Aubury (Varrock) and Carwen (Burthorpe).',
              'Equip full Metal Armour so Magic accuracy drops below -65 (100% splash).',
              'Keybind Confuse (3) or Weaken (11) or Curse (19) and cast repeatedly.',
              'Switch back to combat at 41 Magic for Air Blast.'
            ]
          }
        ]
      },
      {
        levels: '40–55',
        methods: [
          {
            id: 'mag-40-55-cockroaches',
            tabLabel: 'Recommended: Blast at Cockroaches',
            isRecommended: true,
            method: 'Air/Fire Blast at Cockroach Soldiers or Lesser Demons',
            prereqs: '41 Magic, Batwing/Mystic gear, Death Runes (~50/hr)',
            prereqLinks: [
              { label: 'Money: Cockroach Soldiers Guide', section: 'money', itemId: 'cockroach-soldiers' },
              { label: 'Constitution: Unlock Dragon Breath (52)', section: 'skills', itemId: 'constitution', bracket: '52–75' }
            ],
            location: 'Stronghold of Player Safety / Karamja Volcano',
            xpPerHour: '52k – 68k XP/hr',
            ironmanPrep: '5 min food prep + Death Runes (Cockroaches drop Death/Law/Nature!)',
            gpPerHour: '+220,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Varrock Swordshop / Horvik's Armour Shop until 55 Magic, then hold Rune Salvage to High Alch",
            notes: 'Rush 55 Magic here as fast as possible for High Level Alchemy.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold of Player Safety (Cockroaches)',
              sellSpot: "Horvik's Armour Shop / Hold for 55 Magic High Alch",
              routeNote: 'Enter Stronghold south of Edgeville Jail -> bank Rune Salvage until hitting 55 Magic for High Alch!'
            },
            steps: [
              'Buy Mystic/Batwing pieces from Champions\' Guild (32 QP) or craft Spider Silk/Batwing.',
              'Buy ~100 Death Runes from Aubury and set Air/Fire Blast.',
              'Kill Cockroach Soldiers in Stronghold of Player Safety (they refund Death, Law & Nature runes!).',
              'Bank Rune Salvage at Edgeville until you hit 55 Magic.'
            ]
          },
          {
            id: 'mag-40-55-lessers',
            tabLabel: 'Alt: Lesser Demons Safespot',
            isRecommended: false,
            method: 'Karamja Lesser Demons (Zero Food Safespot)',
            prereqs: '41 Magic, Staff of Air, Death Runes',
            prereqLinks: [
              { label: 'Cooking: Lobsters / Trout (40–50)', section: 'skills', itemId: 'cooking', bracket: '40–50' }
            ],
            location: 'Karamja Volcano Dungeon',
            xpPerHour: '46k – 58k XP/hr',
            ironmanPrep: '2 min buying Death Runes',
            gpPerHour: '+120,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Horvik's Armour Shop (Varrock) or hold Rune Med Helms for 55 Magic High Alch",
            notes: 'Zero food consumed via safespotting; drops Fire Runes & Rune Med Helms.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Deposit Box / TzHaar',
              target: 'Karamja Volcano Lesser Demons',
              sellSpot: "Horvik's / Hold for High Alch",
              routeNote: 'Sail to Karamja -> climb down Volcano -> stand behind rock stalagmites to safespot Lesser Demons.'
            },
            steps: [
              'Sail to Karamja and descend into the Volcano dungeon.',
              'Lure Lesser Demons behind the central stalagmites.',
              'Cast Air Blast with Revolution abilities (0 Death Runes consumed on abilities).',
              'Bank Rune Med Helms until 55 Magic.'
            ]
          }
        ]
      },
      {
        levels: '55–99',
        methods: [
          {
            id: 'mag-55-99-combat-alch',
            tabLabel: 'Recommended: AoE Combat + Alch',
            isRecommended: true,
            method: 'Air/Fire Blast (Dragon Breath + Chain) at Ankous / Cockroaches',
            prereqs: '55+ Magic, Gravite Staff (40k DG Tokens), Mystic Armour',
            prereqLinks: [
              { label: 'Dungeoneering: Gravite Staff (40k)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' },
              { label: 'Money: Cockroach Soldiers Guide', section: 'money', itemId: 'cockroach-soldiers' }
            ],
            location: 'Stronghold of Security Floor 4 / Stronghold of Player Safety',
            xpPerHour: '75k – 95k XP/hr',
            ironmanPrep: '5 min food + ~100 Fire/Death Runes + Nature Runes for on-site High Alch',
            gpPerHour: '+380,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy directly on the spot for Rune Salvage & Weapon drops',
            notes: 'Highest F2P Magic XP/hr while simultaneously stocking Law, Death & Nature runes.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold Floor 4 Ankous / Cockroach Soldiers',
              sellSpot: 'High Level Alchemy (On-Site Coins)',
              routeNote: 'Equip Gravite Staff + Mystic -> use Dragon Breath & Chain -> High Alch all Rune drops immediately.'
            },
            steps: [
              'Equip your Gravite Staff (40k DG tokens) and full Mystic Robes.',
              'Place Dragon Breath (52), Chain, Combust, and Sonic Wave at the start of your Revolution bar.',
              'Fight Ankous (Stronghold Floor 4) or Cockroach Soldiers.',
              'Cast High Level Alchemy on all Rune Salvage & drops between kills.'
            ]
          },
          {
            id: 'mag-55-99-high-alch',
            tabLabel: 'Alt 1: High Alch & Enchant (Zero-Time GP)',
            isRecommended: false,
            method: 'High Level Alchemy + Diamond/Ruby Enchanting',
            prereqs: '55 Magic, Staff of Fire, Nature Runes (Shops/Cockroaches)',
            prereqLinks: [
              { label: 'Smithing: Rune Platebodies +3 (50–99)', section: 'skills', itemId: 'smithing', bracket: '50–99' },
              { label: 'Crafting: Diamond/Ruby Amulets (40–70)', section: 'skills', itemId: 'crafting', bracket: '40–70' },
              { label: 'Money: Rune +3 High Alch Engine', section: 'money', itemId: 'high-alch-smithing' }
            ],
            location: 'Anywhere (While Mining, Agility, or Bankstanding)',
            xpPerHour: '55k – 65k XP/hr',
            ironmanPrep: 'Depends on GIM Smithing/PvM alchables + Nature Runes (350 GP/rune or drops)',
            gpPerHour: '+450,000 – +750,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Direct Coin Conversion (High Level Alchemy converts items into 60% value in pure GP)',
            notes: 'Zero-time skill: cast High Alch between Mining/Fishing/Woodcutting ticks or quest runs.',
            mapData: {
              terrain: 'city',
              lodestone: 'Falador / Edgeville Lodestone',
              bank: 'Any Bank Chest / Skilling Spot',
              target: 'Bankstanding / Zero-Time Alching',
              sellSpot: 'High Level Alchemy (Instant GP)',
              routeNote: 'Equip Staff of Fire -> put High Level Alchemy on action bar -> convert noted/unnoted Rune +3 & Bows to GP.'
            },
            steps: [
              'Equip a Staff of Fire (infinite Fire Runes) and bring Nature Runes.',
              'Withdraw noted Rune Platebodies +3, Rune Salvage, or Maple/Yew Shieldbows.',
              'Keybind High Level Alchemy on your action bar and cast while skilling or running.',
              'At 57 Magic, cast Lvl-4 Enchant on Diamond Amulets for Amulets of Power (+22 all styles).'
            ]
          },
          {
            id: 'mag-55-99-curse-tele',
            tabLabel: 'Alt 2: Curse Splash + Teleports (AFK/Spam)',
            isRecommended: false,
            method: 'Splashing Curse / Vulnerability + Varrock/Falador Teleports',
            prereqs: '55+ Magic, Full Plate Armour (-Magic accuracy), Body & Law Runes',
            prereqLinks: [
              { label: 'Runecrafting: Rune Supplies (1–33)', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
            ],
            location: 'Lumbridge Combat Dummies / Edgeville',
            xpPerHour: '60k – 75k XP/hr',
            ironmanPrep: '5 min/day buying Body, Law & Elemental Runes from Aubury/Carwen',
            gpPerHour: '-65,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: '0 Drops (Consumes ~1,000 Law/Body Runes per hour from NPC Rune Shops)',
            notes: 'Fast non-combat XP when you have surplus GP from High Alching.',
            mapData: {
              terrain: 'city',
              lodestone: 'Varrock / Lumbridge Lodestone',
              bank: 'Varrock East Bank / Lumbridge',
              target: 'Lumbridge Dummies (Curse) / City Teleports',
              sellSpot: "Shop Sink (Aubury's & Carwen's Rune Shops)",
              routeNote: 'Buy out Aubury (Varrock), Betty (Port Sarim) & Carwen (Burthorpe) -> cast Curse/Teleports.'
            },
            steps: [
              'Buy Body and Law Runes daily from Aubury, Betty, and Carwen.',
              'Equip full Metal Plate armour + Air Staff for negative Magic accuracy.',
              'Alternate Curse/Vulnerability splashes with Varrock/Falador Teleports.',
              'Use strictly when funded by High Alch profits.'
            ]
          }
        ]
      }
    ]
  },

  ranged: {
    skillPrereqLinks: [
      { label: 'Fletching: Craft Bows & Arrows', section: 'skills', itemId: 'fletching', bracket: '35–55' },
      { label: 'Quest: Dragon Slayer (Green D\'hide Body)', section: 'quests', itemId: 'dragon-slayer' },
      { label: 'Dungeoneering: Gravite Shortbow (40k)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' }
    ],
    brackets: [
      {
        levels: '1–20',
        methods: [
          {
            id: 'rng-1-20-chargebow',
            tabLabel: "Recommended: Kayle's Chargebow",
            isRecommended: true,
            method: "Kayle's Chargebow at Burthorpe Trolls / Cows",
            prereqs: 'The Blood Pact (quick 3 min quest for Chargebow with infinite ammo!)',
            prereqLinks: [
              { label: 'Quest: Shadow over Ashdale (Lamps)', section: 'quests', itemId: 'shadow-over-ashdale' }
            ],
            location: 'Lumbridge Graveyard → Burthorpe Troll Cave',
            xpPerHour: '25k – 35k XP/hr',
            ironmanPrep: '3 min completing The Blood Pact for Kayle\'s Chargebow',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store or tan Cowhides at Al Kharid',
            notes: 'Chargebow fires magical bolts needing 0 arrows until level 20.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Troll Cave',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Complete The Blood Pact in Lumbridge Graveyard -> claim Kayle\'s Chargebow -> kill Burthorpe Trolls.'
            },
            steps: [
              'Complete The Blood Pact in Lumbridge Graveyard (takes 3 minutes).',
              'Equip Kayle\'s Chargebow (fires infinite bolts; 0 arrows required!).',
              'Kill Trolls in Burthorpe Troll Cave using Piercing Shot & Binding Shot.',
              'Use Shadow over Ashdale combat lamps to skip extra early levels.'
            ]
          },
          {
            id: 'rng-1-20-shortbow',
            tabLabel: 'Alt: Fletched Shortbow + Bronze Arrows',
            isRecommended: false,
            method: 'Normal/Oak Shortbow + Bronze Arrows',
            prereqs: '1–20 Fletching, 200 Bronze Arrows',
            prereqLinks: [
              { label: 'Fletching: Arrows & Bows (1–20)', section: 'skills', itemId: 'fletching', bracket: '1–20' }
            ],
            location: 'Lumbridge / Burthorpe',
            xpPerHour: '20k – 28k XP/hr',
            ironmanPrep: '10 min fletching Normal Shortbow + Bronze Arrows',
            gpPerHour: '+15,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Lumbridge General Store',
            notes: 'Revolution abilities consume zero arrows — 200 arrows last hours.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge Lodestone',
              bank: 'Lumbridge Combat Academy Bank',
              target: 'Lumbridge Cows / Burthorpe Trolls',
              sellSpot: 'Lumbridge General Store',
              routeNote: 'Equip fletched Shortbow + Bronze Arrows -> train on Cows or Trolls.'
            },
            steps: [
              'Fletch a Shortbow and 200 Bronze Arrows.',
              'Put Ranged Basic abilities on your Revolution bar.',
              'Kill Cows or Trolls until Level 20 Ranged.'
            ]
          }
        ]
      },
      {
        levels: '20–40',
        methods: [
          {
            id: 'rng-20-40-giants',
            tabLabel: 'Recommended: Oak/Willow Bow at Giants',
            isRecommended: true,
            method: 'Oak/Willow Shortbow at Hill & Moss Giants',
            prereqs: '20–30 Ranged & Fletching, Carapace/Studded Armour',
            prereqLinks: [
              { label: 'Fletching: Oak & Willow Bows (20–35)', section: 'skills', itemId: 'fletching', bracket: '20–35' },
              { label: 'Prayer: Big Bones on Chaos Altar', section: 'skills', itemId: 'prayer', bracket: '28–43' }
            ],
            location: 'Edgeville Dungeon / Varrock Sewers',
            xpPerHour: '36k – 50k XP/hr',
            ironmanPrep: '10 min fletching Oak/Willow Shortbow + ~500 arrows',
            gpPerHour: '+65,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Edgeville General Store, Varrock Swordshop, or Grum's Gold Exchange (gems)",
            notes: 'Use Ricochet & Bombardment (at 50) for multi-target AoE Ranged XP.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Dungeon Hill Giants / Moss Giants',
              sellSpot: 'Edgeville General Store / Varrock Swordshop',
              routeNote: 'Safespot behind rocks in Edgeville Dungeon Hill Giants room -> bank Big Bones north.'
            },
            steps: [
              'Equip an Oak Shortbow (20) then Willow Shortbow (30) with Iron/Steel arrows.',
              'Put Ricochet, Snipe, Dazing Shot, and Binding Shot on Revolution.',
              'Safespot Hill Giants in Edgeville Dungeon.',
              'Bank Big Bones for Level 43 Prayer.'
            ]
          },
          {
            id: 'rng-20-40-crawlers',
            tabLabel: 'Alt: Flesh Crawlers & Minotaurs',
            isRecommended: false,
            method: 'Stronghold of Security Floor 1/2',
            prereqs: '20–30 Ranged, Oak/Willow Shortbow',
            prereqLinks: [
              { label: 'Cooking: Trout & Salmon (20–40)', section: 'skills', itemId: 'cooking', bracket: '20–40' }
            ],
            location: 'Stronghold of Security',
            xpPerHour: '30k – 42k XP/hr',
            ironmanPrep: '5 min food prep',
            gpPerHour: '+40,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Edgeville General Store (keep Iron Arrows & Herbs)',
            notes: 'Minotaurs drop extra Bronze/Iron arrows as you train.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold Floor 1/2',
              sellSpot: 'Edgeville General Store',
              routeNote: 'Barbarian Village center -> Floor 1/2 -> Ricochet multi-target packs.'
            },
            steps: [
              'Enter Stronghold of Security in Barbarian Village.',
              'Stand in Floor 1 Minotaurs or Floor 2 Flesh Crawlers.',
              'Use Ricochet to hit 3 targets at once.',
              'Loot arrows and herbs.'
            ]
          }
        ]
      },
      {
        levels: '40–60',
        methods: [
          {
            id: 'rng-40-60-cockroaches',
            tabLabel: 'Recommended: Cockroach Soldiers',
            isRecommended: true,
            method: 'Maple/Magic Shortbow + Green D\'hide at Cockroach Soldiers',
            prereqs: '40–50 Ranged, Dragon Slayer (for Green D\'hide Body), Magic Shortbow (50)',
            prereqLinks: [
              { label: 'Quest: Dragon Slayer', section: 'quests', itemId: 'dragon-slayer' },
              { label: 'Fletching: Maple & Magic Bows (55–70)', section: 'skills', itemId: 'fletching', bracket: '55–70' },
              { label: 'Money: Cockroach Soldiers Guide', section: 'money', itemId: 'cockroach-soldiers' }
            ],
            location: 'Stronghold of Player Safety Dungeon',
            xpPerHour: '50k – 68k XP/hr',
            ironmanPrep: '15 min fletching Magic Shortbow + buying Green D\'hide at Champions\' Guild/Oziach',
            gpPerHour: '+340,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "High Level Alchemy on Rune Salvage or Brian's Archery Supplies / Horvik's",
            notes: 'Safespotting Cockroach Soldiers saves food while stacking Runes & Salvage.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Stronghold of Player Safety (Cockroaches)',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Buy Green D\'hide Body from Oziach (Edgeville) -> head south to Stronghold of Player Safety -> safespot Soldiers.'
            },
            steps: [
              'Complete Dragon Slayer and buy Green D\'hide Body from Oziach (Edgeville) + Chaps/Vambraces from Valaine (Champions\' Guild).',
              'Equip Maple Shortbow (40) or Magic Shortbow (50) with Mithril/Adamant Arrows.',
              'Safespot Cockroach Soldiers in the Stronghold of Player Safety using Snipe, Ricochet & Bombardment (50).',
              'High Alch Rune Salvage and bank Carapace & Runes.'
            ]
          },
          {
            id: 'rng-40-60-lessers',
            tabLabel: 'Alt: Lesser Demons (Karamja)',
            isRecommended: false,
            method: 'Karamja Volcano Lesser Demons (Safespot)',
            prereqs: '40–50 Ranged, Maple/Magic Shortbow',
            prereqLinks: [
              { label: 'Crafting: Carapace Armour (40–70)', section: 'skills', itemId: 'crafting', bracket: '40–70' }
            ],
            location: 'Karamja Volcano Dungeon',
            xpPerHour: '44k – 56k XP/hr',
            ironmanPrep: '5 min arrow/bow prep',
            gpPerHour: '+130,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy (Rune Med Helms)',
            notes: '0 food needed when safespotting behind the volcano rocks.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Deposit Box',
              target: 'Karamja Volcano Lesser Demons',
              sellSpot: 'High Level Alchemy (Rune Med Helms)',
              routeNote: 'Sail to Karamja -> Volcano rope -> safespot behind stalagmites.'
            },
            steps: [
              'Bring Magic Shortbow + 500 Adamant Arrows + Fire Staff & Nature Runes.',
              'Stand behind the stalagmites in Karamja Volcano dungeon.',
              'Fire Ranged abilities across Lesser Demons.',
              'High Alch Rune Med Helms on-site.'
            ]
          }
        ]
      },
      {
        levels: '60–99',
        methods: [
          {
            id: 'rng-60-99-gravite',
            tabLabel: 'Recommended: Gravite Bow at Demons/Ankous',
            isRecommended: true,
            method: 'Gravite Shortbow (T55) at Greater Demons / Ankous',
            prereqs: '55+ Ranged, Gravite Shortbow (40k DG Tokens), Rune Arrows',
            prereqLinks: [
              { label: 'Dungeoneering: Gravite Shortbow (40k)', section: 'skills', itemId: 'dungeoneering', bracket: '55–99' },
              { label: 'Fletching: Rune Arrows (70–99)', section: 'skills', itemId: 'fletching', bracket: '70–99' }
            ],
            location: 'Forinthry Dungeon / Stronghold of Security Floor 4',
            xpPerHour: '65k – 85k XP/hr',
            ironmanPrep: '5 min Swordfish/Lobster food prep per combat hour',
            gpPerHour: '+300,000 – +450,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy on Rune Salvage & Weapon Drops',
            notes: 'Equip Fragmentation Shot, Ricochet, Snapshot, and Bombardment on Revolution.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Forinthry Greater Demons / Stronghold Ankous',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Safespot Greater Demons in Forinthry (PvP Opt-Out!) or kite Ankous in Stronghold Floor 4.'
            },
            steps: [
              'Unlock Gravite Shortbow (40k DG tokens) and fletch/smith 1,000 Rune Arrows (or use Adamant Arrows).',
              'Bring Swordfish, Fire Staff, Nature Runes & Gem Bag.',
              'Safespot Greater Demons in Forinthry Dungeon (PvP Opted-Out) or farm Ankous.',
              'High Alch Rune Salvage drops continuously.'
            ]
          },
          {
            id: 'rng-60-99-waterfiends',
            tabLabel: 'Alt: Waterfiends / Ice Warriors',
            isRecommended: false,
            method: 'Asgarnian Ice Dungeon Ice Giants & Warriors',
            prereqs: '55+ Ranged, Gravite/Magic Shortbow',
            prereqLinks: [
              { label: 'Prayer: Chaos Altar Big Bones (43–99)', section: 'skills', itemId: 'prayer', bracket: '43–99' }
            ],
            location: 'Asgarnian Ice Dungeon (Mudskipper Point)',
            xpPerHour: '58k – 72k XP/hr',
            ironmanPrep: '5 min food prep',
            gpPerHour: '+120,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy on Mithril/Rune drops',
            notes: 'Good alternative if Forinthry or Stronghold spots are occupied.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Port Sarim Lodestone',
              bank: 'Port Sarim Deposit Box',
              target: 'Asgarnian Ice Dungeon',
              sellSpot: 'High Level Alchemy',
              routeNote: 'Port Sarim -> south past Thurgo -> Ice Dungeon.'
            },
            steps: [
              'Equip Gravite/Magic Shortbow + Green D\'hide.',
              'Enter Asgarnian Ice Dungeon south of Port Sarim.',
              'Use Bombardment + Ricochet on Ice Giants & Warriors.',
              'High Alch weapon/armour drops.'
            ]
          }
        ]
      }
    ]
  },

  prayer: {
    skillPrereqLinks: [
      { label: 'Quest: The Restless Ghost (2,125 XP)', section: 'quests', itemId: 'restless-ghost' },
      { label: 'Quest: One Piercing Note (2,000 XP)', section: 'quests', itemId: 'one-piercing-note' },
      { label: 'Quest: Swept Away (Goulash Lamps)', section: 'quests', itemId: 'swept-away' },
      { label: 'Crafting: Accursed Prayer Urns (40–70)', section: 'skills', itemId: 'crafting', bracket: '40–70' }
    ],
    brackets: [
      {
        levels: '1–28',
        methods: [
          {
            id: 'pray-1-28-quests',
            tabLabel: 'Recommended: 4-Quest Rush',
            isRecommended: true,
            method: '4-Quest Prayer Rush (Zero Bone Grinding)',
            prereqs: 'None (Restless Ghost, One Piercing Note, Swept Away, Death of Chivalry)',
            prereqLinks: [
              { label: 'Quest: The Restless Ghost', section: 'quests', itemId: 'restless-ghost' },
              { label: 'Quest: One Piercing Note', section: 'quests', itemId: 'one-piercing-note' },
              { label: 'Quest: Swept Away', section: 'quests', itemId: 'swept-away' },
              { label: 'Quest: The Death of Chivalry', section: 'quests', itemId: 'death-of-chivalry' }
            ],
            location: "Lumbridge / Al Kharid Abbey / Draynor / Black Knights' Fortress",
            xpPerHour: '18k – 25k XP/hr (~45 min total)',
            ironmanPrep: '0 item prep — all puzzle items provided inside quests',
            gpPerHour: '+10,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Keep Illuminated God Book (+4 Prayer & +3 All Style Pocket Slot)',
            notes: 'Skips 1 → ~28 Prayer without burying a single bone.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge / Al Kharid Lodestone',
              bank: 'Al Kharid / Draynor Bank',
              target: 'Lumbridge Swamp → Al Kharid Abbey → Draynor Manor',
              sellSpot: 'Keep Illuminated God Book (Pocket BiS)',
              routeNote: 'Complete Restless Ghost -> One Piercing Note (Al Kharid Abbey) -> Swept Away -> Death of Chivalry.'
            },
            steps: [
              'Finish The Restless Ghost (1,125 XP + 5 Ancient Bones for another 1,000 XP).',
              'Complete One Piercing Note at the Abbey SE of Al Kharid for 2,000 Prayer XP + Illuminated God Book.',
              'Complete Swept Away south of Draynor and choose Prayer XP for all 10 Goulash bowls.',
              'Complete The Death of Chivalry for 2,500 Prayer XP + scaling combat lamps.'
            ]
          },
          {
            id: 'pray-1-28-urns-bones',
            tabLabel: 'Alt: Impious Urns + Regular Bones',
            isRecommended: false,
            method: 'Chaos Altar Regular Bones + Impious Urns',
            prereqs: 'Wilderness PvP Opted-Out (Vala at Edgeville)',
            prereqLinks: [
              { label: 'Crafting: Impious Prayer Urns (1–20)', section: 'skills', itemId: 'crafting', bracket: '1–20' }
            ],
            location: 'Wilderness Chaos Temple (Lvl 12)',
            xpPerHour: '8k – 14k XP/hr',
            ironmanPrep: '~20 min collecting Bones from Cows/Trolls',
            gpPerHour: '-5,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Consumed on Chaos Altar for 350% XP',
            notes: 'Only use if saving Swept Away lamps for Runecrafting.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank / Chaos Temple Banker',
              target: 'Level 12 Wilderness Chaos Temple Altar',
              sellSpot: '0 GP (Consumed on Altar)',
              routeNote: 'Verify PvP Opt-Out with Vala at Edgeville wall -> run NW to Level 12 Chaos Temple -> unnote/bank with nearby Banker.'
            },
            steps: [
              'Talk to Vala at Edgeville Wilderness border to ensure PvP is opted OUT.',
              'Bring 28 Bones (or Impious Urns while killing Imps/Cows).',
              'Offer Bones on the Level 12 Chaos Altar for 3.5x XP.',
              'Bank right outside the temple with the Banker NPC.'
            ]
          }
        ]
      },
      {
        levels: '28–43',
        methods: [
          {
            id: 'pray-28-43-chaos-big-bones',
            tabLabel: 'Recommended: Hill Giant Bones → Chaos Altar',
            isRecommended: true,
            method: 'Big Bones (Hill/Moss Giants) → Wilderness Chaos Altar',
            prereqs: '28 Prayer, Brass Key, Wilderness PvP Opted-Out (Vala)',
            prereqLinks: [
              { label: 'Attack: Hill Giants (20–40)', section: 'skills', itemId: 'attack', bracket: '20–40' }
            ],
            location: 'Edgeville Dungeon (Gather) → Lvl 12 Chaos Temple (Offer)',
            xpPerHour: '16k – 24k XP/hr (IM) | 75k/hr (Altar)',
            ironmanPrep: '~40 min farming Big Bones at Hill/Moss Giants per 20 min Chaos Altar offering',
            gpPerHour: '-15,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Consumed on Altar (0 GP return + minor food cost; altar gives 52.5 XP per Big Bone)',
            notes: 'Bank directly with the Banker NPC right outside the Level 12 Chaos Temple!',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Chaos Temple Banker NPC (Lvl 12 Wild)',
              target: 'Wilderness Chaos Temple Altar (Lvl 12)',
              sellSpot: '0 GP (350% Prayer XP Altar)',
              routeNote: 'Farm Big Bones at Edgeville Hill Giants -> Opt Out PvP -> run NW to Chaos Temple & swap noted/banked bones via Banker NPC.'
            },
            steps: [
              'Farm ~450–600 Big Bones from Hill Giants (Edgeville Dungeon) or Moss Giants.',
              'Confirm PvP is Opted-Out with Vala at the Edgeville Wilderness wall (DO NOT bring a Demonic Skull!).',
              'Run northwest to the Level 12 Wilderness Chaos Temple and talk to the Banker NPC right outside the door.',
              'Offer 28 Big Bones per trip on the Chaos Altar for 52.5 XP each until 43 Prayer (Protect from Magic/Missiles/Melee)!'
            ]
          },
          {
            id: 'pray-28-43-boneyard',
            tabLabel: 'Alt: Wilderness Boneyard Loop',
            isRecommended: false,
            method: 'Wilderness Boneyard Big Bones → Chaos Altar (Zero Combat)',
            prereqs: '28 Prayer, PvP Opted-Out, ~5 Trout/Salmon',
            prereqLinks: [
              { label: 'Cooking: Trout & Salmon Food (20–40)', section: 'skills', itemId: 'cooking', bracket: '20–40' }
            ],
            location: 'Wilderness Boneyard (Lvl 22) → Chaos Temple (Lvl 12)',
            xpPerHour: '20k – 26k XP/hr (IM)',
            ironmanPrep: 'Continuous loop (pick up 28 Big Bones in 90s & run south to Altar)',
            gpPerHour: '-18,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Consumed on Altar (Forfeits ~500 GP/bone sale value for 3.5x XP)',
            notes: 'Zero combat requirement — great for low-level skillers rushing 43 Prayer.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Chaos Temple Banker NPC',
              target: 'Wilderness Boneyard (Lvl 22) → Chaos Altar (Lvl 12)',
              sellSpot: '0 GP (Consumed on Altar)',
              routeNote: 'Run north from Chaos Temple to the Boneyard (Lvl 22) -> pick up 4 Big Bone spawns -> run south to Chaos Altar.'
            },
            steps: [
              'Opt out of PvP with Vala and bring a few Trout/Salmon for Skeleton damage.',
              'Run north of the Chaos Temple to the Wilderness Boneyard (Lvl 22).',
              'Pick up 28 Big Bones off the ground (respawns quickly).',
              'Run directly south to the Chaos Altar and offer all 28 Big Bones.'
            ]
          }
        ]
      },
      {
        levels: '43–99',
        methods: [
          {
            id: 'pray-43-99-boneyard-altar',
            tabLabel: 'Recommended: Boneyard → Chaos Altar',
            isRecommended: true,
            method: 'Wilderness Boneyard Big Bones → Chaos Temple Altar',
            prereqs: '43 Prayer (Protect Melee), PvP Opted-Out',
            prereqLinks: [
              { label: 'Cooking: Lobsters / Swordfish (40–99)', section: 'skills', itemId: 'cooking', bracket: '40–50' }
            ],
            location: 'Wilderness Boneyard (Lvl 22) → Chaos Temple (Lvl 12)',
            xpPerHour: '22k – 28k XP/hr (IM) | 85k/hr (Altar)',
            ironmanPrep: 'Continuous loop (pick up 28 Big Bones in 90s & offer at Chaos Altar)',
            gpPerHour: '-20,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Consumed on Altar (Forfeits ~500 GP/bone value for 3.5x Prayer XP)',
            notes: 'Fastest active Ironman Prayer XP/hr in F2P; never carry a Demonic Skull.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Chaos Temple Banker NPC',
              target: 'Wilderness Boneyard (Lvl 22) → Chaos Altar (Lvl 12)',
              sellSpot: '0 GP (Consumed on Altar)',
              routeNote: 'Toggle Protect from Melee near Boneyard skeletons -> collect 28 Big Bones -> offer south at Chaos Altar.'
            },
            steps: [
              'Verify PvP is Opted-Out at Edgeville border.',
              'Run north to the Wilderness Boneyard (Level 22) and gather 28 Big Bones.',
              'Run south to the Level 12 Chaos Temple Altar (recharge Prayer points right at the altar!).',
              'Offer all 28 Big Bones for 52.5 XP each and repeat.'
            ]
          },
          {
            id: 'pray-43-99-demons-urns',
            tabLabel: 'Alt 1: Greater Demons + Prayer Urns (Profit!)',
            isRecommended: false,
            method: 'Greater Demons (Accursed Ashes + Prayer Urns + Bonecrusher)',
            prereqs: 'Crafting (Accursed Urns + Air Rune) &/or Bonecrusher (34k DG Tokens)',
            prereqLinks: [
              { label: 'Crafting: Accursed Prayer Urns (40–70)', section: 'skills', itemId: 'crafting', bracket: '40–70' },
              { label: 'Dungeoneering: Bonecrusher (34k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '30–55' },
              { label: 'Magic: High Level Alchemy (55+)', section: 'skills', itemId: 'magic', bracket: '55–99' }
            ],
            location: 'Forinthry Dungeon / Karamja Volcano',
            xpPerHour: '12k – 18k Prayer XP/hr + 65k Combat XP/hr',
            ironmanPrep: '5 min crafting Accursed Prayer Urns + Air Runes',
            gpPerHour: '+280,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'High Level Alchemy on Greater Demon Rune Salvage & Armour drops',
            notes: 'Best passive Prayer XP while making strong High Alch profit & maxing Combat.',
            mapData: {
              terrain: 'wilderness',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Forinthry Dungeon Greater Demons',
              sellSpot: 'High Level Alchemy (On-Site)',
              routeNote: 'Bring 5–10 Accursed Prayer Urns (with Air Runes) to Forinthry Greater Demons; urns auto-fill & teleport for +20% XP.'
            },
            steps: [
              'Craft Accursed Prayer Urns (26 Crafting) and attach 1 Air Rune each.',
              'Bring Swordfish, Nature Runes, Fire Staff, and Urns to Forinthry Greater Demons (PvP Opted-Out).',
              'Kill Greater Demons for Combat XP and Rune Salvage High Alchs.',
              'Urns automatically scatter Accursed Ashes and teleport away for 1,500 Prayer XP per urn!'
            ]
          },
          {
            id: 'pray-43-99-giants',
            tabLabel: 'Alt 2: Giant Bones + Bonecrusher',
            isRecommended: false,
            method: 'Hill/Moss Giant Big Bones → Chaos Altar or Bonecrusher',
            prereqs: 'Bonecrusher (34k DG Tokens) or Brass Key',
            prereqLinks: [
              { label: 'Dungeoneering: Bonecrusher (34k Tokens)', section: 'skills', itemId: 'dungeoneering', bracket: '30–55' }
            ],
            location: 'Edgeville Dungeon / Varrock Sewers',
            xpPerHour: '14k – 22k XP/hr',
            ironmanPrep: 'Passive during Combat training',
            gpPerHour: '+65,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Varrock Swordshop / Horvik\'s (drops)',
            notes: 'Bonecrusher auto-buries bones during combat (less XP/bone than Chaos Altar, zero banking).',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Edgeville Lodestone',
              bank: 'Edgeville Bank',
              target: 'Edgeville Hill Giants / Sewers Moss Giants',
              sellSpot: 'Varrock Swordshop',
              routeNote: 'Farm Giants with Bonecrusher in inventory, or bank Big Bones for Chaos Altar runs.'
            },
            steps: [
              'Unlock Bonecrusher for 34,000 Dungeoneering Tokens (optional passive bury).',
              'Or bank Big Bones from Hill/Moss Giants at Edgeville Bank.',
              'Offer banked Big Bones at the Wilderness Chaos Altar for 3.5x XP.'
            ]
          }
        ]
      }
    ]
  },

  dungeoneering: {
    skillPrereqLinks: [
      { label: 'Smithing: Tier 50 Fractite Binds', section: 'skills', itemId: 'smithing', bracket: '50–99' },
      { label: 'Woodcutting: 30 DG Maple Unlock', section: 'skills', itemId: 'woodcutting', bracket: '45–60' },
      { label: 'Crafting: Gem Bag Synergy (20–40)', section: 'skills', itemId: 'crafting', bracket: '20–40' }
    ],
    brackets: [
      {
        levels: '1–30',
        methods: [
          {
            id: 'dg-1-30-c6-party',
            tabLabel: 'Recommended: C6 Small Party Floors',
            isRecommended: true,
            method: 'Complexity 6 Small Floors (1–15) + Prestige Reset',
            prereqs: 'Ring of Kinship (free from Dungeoneering Tutor)',
            prereqLinks: [
              { label: 'Mining: Gem & Coal Bag Targets', section: 'skills', itemId: 'mining', bracket: '20–30' },
              { label: 'Woodcutting: 30 DG Maple Dungeon', section: 'skills', itemId: 'woodcutting', bracket: '45–60' }
            ],
            location: 'Daemonheim Castle (Ring of Kinship)',
            xpPerHour: '15k – 30k XP/hr',
            ironmanPrep: '0 min outside prep (bank all outside gear first)',
            gpPerHour: '+25,000 GP/hr (Equivalent Unlocks)',
            gpTrend: 'positive',
            whereToSell: 'Sell dungeon loot to the Smuggler; buy Gem Bag (2k Tokens) & Coal Bag (4k Tokens) from Marmaros',
            notes: 'Hitting 30 DG unlocks the Maple Tree Resource Dungeon right outside Daemonheim.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Boat (Complexity 6 Small Floors 1–15)',
              sellSpot: 'Smuggler (Inside) / Marmaros Reward Trader (Outside)',
              routeNote: 'Ring of Kinship -> bank all items -> form GIM party via Ring -> board boat for C6 Small floors.'
            },
            steps: [
              'Equip your Ring of Kinship to teleport to Daemonheim and bank all items in the Courtyard chest.',
              'Form a Group Ironman party via your Ring of Kinship -> Party tab and enter Complexity 6 Small floors.',
              'Bind your highest tier 2H weapon/armour inside and clear every floor 1 through 15 once before pressing Reset Prestige.',
              'Buy Gem Bag (2,000 tokens) and Coal Bag (4,000 tokens) from the Daemonheim Reward Trader!'
            ]
          },
          {
            id: 'dg-1-30-solo-tasks',
            tabLabel: 'Alt: Solo Floors + Daemonheim Tasks',
            isRecommended: false,
            method: 'Solo Complexity 6 Floors + Easy Daemonheim Tasks',
            prereqs: 'Ring of Kinship',
            prereqLinks: [
              { label: 'Fletching: 30 DG Maple Access', section: 'skills', itemId: 'fletching', bracket: '55–70' }
            ],
            location: 'Daemonheim',
            xpPerHour: '12k – 22k XP/hr',
            ironmanPrep: '0 min outside prep',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Marmaros Reward Trader (Gem Bag / Coal Bag)',
            notes: 'Easy Daemonheim Tasks award free start-of-floor Law/Cosmic runes & extra food!',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Solo Boat + Easy Task NPC',
              sellSpot: 'Marmaros Reward Trader',
              routeNote: 'Check Daemonheim Achievements -> complete Easy tasks while soloing Complexity 6 Small floors.'
            },
            steps: [
              'Start a solo party with your Ring of Kinship if teammates are offline.',
              'Set Complexity 6 Small and clear rooms sequentially.',
              'Craft/bind Tier 30–40 equipment inside floors.',
              'Hit 30 Dungeoneering to enter the Maple Tree Resource Dungeon.'
            ]
          }
        ]
      },
      {
        levels: '30–55',
        methods: [
          {
            id: 'dg-30-55-party',
            tabLabel: 'Recommended: C6 Party Floors (16+)',
            isRecommended: true,
            method: 'Complexity 6 Small/Medium Party Floors (16+)',
            prereqs: '30 Dungeoneering, Tier 40–50 Bound 2H Weapon & Armour',
            prereqLinks: [
              { label: 'Smithing: Scroll of Efficiency Synergy', section: 'skills', itemId: 'smithing', bracket: '50–99' },
              { label: 'Prayer: Bonecrusher Synergy (34k)', section: 'skills', itemId: 'prayer', bracket: '43–99' }
            ],
            location: 'Daemonheim',
            xpPerHour: '35k – 65k XP/hr',
            ironmanPrep: '0 min outside prep',
            gpPerHour: '+60,000 GP/hr (Token Value)',
            gpTrend: 'positive',
            whereToSell: 'Daemonheim Reward Trader: Scroll of Efficiency (20k tokens — saves Runite Bars!) & Bonecrusher (34k)',
            notes: 'Always reset Prestige ONLY after completing every unlocked floor once.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Floors 16–28 (C6 Small/Medium)',
              sellSpot: 'Marmaros Reward Trader',
              routeNote: 'Rush floors 1–15 on C1 Small, then run highest floors (16+) on C6 Medium with your GIM squad.'
            },
            steps: [
              'Have a 50+ Smithing teammate craft and drop Tier 50 Fractite 2H/Platebody inside a floor so everyone can bind them!',
              'Bind 125 Law Runes (or Cosmic Runes) for Group & Personal Gatestone teleports.',
              'Rush lower floors 1–15 on C1 Small, then run your highest floors on C6 Medium.',
              'Unlock Scroll of Efficiency (20k tokens) for Smithing and save toward Gravite weapons (40k).'
            ]
          },
          {
            id: 'dg-30-55-c1-rush',
            tabLabel: 'Alt: Solo C1 Rush + C6 High',
            isRecommended: false,
            method: 'Solo C1 Rush Low Floors + C6 Top 10 Floors',
            prereqs: '30+ Dungeoneering, Bound Weapon & Law Runes',
            prereqLinks: [
              { label: 'Smithing: Fractite / Tier 50 Binds', section: 'skills', itemId: 'smithing', bracket: '50–99' }
            ],
            location: 'Daemonheim',
            xpPerHour: '28k – 45k XP/hr',
            ironmanPrep: '0 min outside prep',
            gpPerHour: '+45,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Marmaros Reward Trader (Scroll of Efficiency)',
            notes: 'Solo-friendly pacing that preserves high Prestige XP.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Solo Boat (C1 Rush / C6 High)',
              sellSpot: 'Marmaros Reward Trader',
              routeNote: 'Set C1 Small for floors 1–15 -> switch to C6 Small for floors 16+ -> Reset Prestige at max floor.'
            },
            steps: [
              'Clear floors 1–15 on Complexity 1 Small in ~2 minutes per floor.',
              'Switch to Complexity 6 Small for your top 10–15 floors.',
              'Click Reset Prestige only when every available floor has a checkmark.',
              'Repeat for steady token accumulation.'
            ]
          }
        ]
      },
      {
        levels: '55–99',
        methods: [
          {
            id: 'dg-55-99-group-large',
            tabLabel: 'Recommended: 4–5 Player High Floors',
            isRecommended: true,
            method: '4–5 Player Medium/Large High Floors + C1 Rush',
            prereqs: '55+ Dungeoneering, Bound Tier 50 Fractite 2h + 125 Law Runes',
            prereqLinks: [
              { label: 'Attack: Gravite 2h Target (60–99)', section: 'skills', itemId: 'attack', bracket: '60–99' },
              { label: 'Magic: Gravite Staff Target (55–99)', section: 'skills', itemId: 'magic', bracket: '55–99' },
              { label: 'Ranged: Gravite Shortbow Target (60–99)', section: 'skills', itemId: 'ranged', bracket: '60–99' }
            ],
            location: 'Daemonheim',
            xpPerHour: '65k – 110k XP/hr',
            ironmanPrep: '0 min outside prep',
            gpPerHour: '+120,000 GP/hr (BiS Gear Value)',
            gpTrend: 'positive',
            whereToSell: 'Daemonheim Reward Trader: Gravite 2h / Staff / Shortbow (40k tokens each) & Arcane Blast Necklace (15.5k)',
            notes: 'Gravite weapons (Tier 55) are Best-in-Slot across all 3 classic F2P combat styles.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Floors 29–35+ (Medium/Large Party)',
              sellSpot: 'Marmaros Reward Trader (Gravite Gear)',
              routeNote: 'Use Group Gatestones + Personal Gatestones so 4–5 teammates split critical/bonus paths simultaneously.'
            },
            steps: [
              'Rush lower 50% of floors on C1 Small (solo or duo).',
              'Team up with 4–5 players for your highest floors on Complexity 6 Medium or Large.',
              'Use Group Gatestone & Personal Gatestone teleports at every split corridor.',
              'Buy Gravite Weapons (40k tokens), Arcane Pulse/Blast Necklace, and Bonecrusher (34k) from Marmaros.'
            ]
          },
          {
            id: 'dg-55-99-solo-med',
            tabLabel: 'Alt: Solo Medium C6 Floors',
            isRecommended: false,
            method: 'Solo Medium Complexity 6 Highest Floors',
            prereqs: '55+ Dungeoneering, Tier 50 Bound Gear',
            prereqLinks: [
              { label: 'Smithing: Fractite Gear Inside Floor', section: 'skills', itemId: 'smithing', bracket: '50–99' }
            ],
            location: 'Daemonheim',
            xpPerHour: '45k – 68k XP/hr',
            ironmanPrep: '0 min outside prep',
            gpPerHour: '+75,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Marmaros Reward Trader',
            notes: 'Reliable solo XP/token method when party members are unavailable.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Daemonheim (Ring of Kinship)',
              bank: 'Daemonheim Courtyard Bank Chest',
              target: 'Daemonheim Solo Medium C6 Floors',
              sellSpot: 'Marmaros Reward Trader',
              routeNote: 'Run C1 Small on floors 1–18, then C6 Medium on floors 19–35.'
            },
            steps: [
              'Rush lower floors 1–18 on C1 Small.',
              'Set Complexity 6 Medium for top floors.',
              'Drop Personal Gatestone at hub rooms to backtrack fast.',
              'Reset Prestige once every unlocked floor is complete.'
            ]
          }
        ]
      }
    ]
  },

  necromancy: {
    skillPrereqLinks: [
      { label: 'Smithing: Bronze & Steel Bars for Kili', section: 'skills', itemId: 'smithing', bracket: '29–40' },
      { label: 'Runecrafting: Level 20 for Rune Mythos', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
    ],
    brackets: [
      {
        levels: '1–10',
        methods: [
          {
            id: 'necro-1-10-tutorial',
            tabLabel: 'Recommended: Tutorial + Trolls',
            isRecommended: true,
            method: 'Necromancy! Tutorial + Burthorpe Troll Cave',
            prereqs: 'Enter Underworld Portal north of Draynor Lodestone',
            prereqLinks: [
              { label: 'Mining: Copper/Tin for Bronze Bars', section: 'skills', itemId: 'mining', bracket: '1–10' }
            ],
            location: 'City of Um / Burthorpe Troll Cave',
            xpPerHour: '15k – 22k XP/hr',
            ironmanPrep: '5 min gathering Soft Clay & Bronze Bars for Tier 10 Kili upgrade',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store or City of Um General Store',
            notes: 'Conjure Putrid Zombie and Vengeful Ghost sustain your HP automatically.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'Draynor Village Lodestone → City of Um',
              bank: 'City of Um Bank Chest / Burthorpe',
              target: 'City of Um Portal → Burthorpe Trolls',
              sellSpot: 'Burthorpe / City of Um General Store',
              routeNote: 'Step north of Draynor Lodestone into the Underworld Portal -> finish Necromancy! -> fight Burthorpe Trolls.'
            },
            steps: [
              'Walk north of Draynor Village Lodestone and enter the Underworld Portal to start Necromancy!.',
              'Complete the City of Um tutorial to unlock Death Guard, Skull Lantern, and Conjure Skeleton/Ghost.',
              'Complete Kili\'s Tier 10 upgrade (Soft Clay & Bronze Bars).',
              'Kill Trolls in Burthorpe Troll Cave until Level 10 Necromancy.'
            ]
          },
          {
            id: 'necro-1-10-rituals',
            tabLabel: 'Alt: Weak Necroplasm Rituals',
            isRecommended: false,
            method: 'Weak Necroplasm & Communion Rituals (City of Um)',
            prereqs: 'Necromancy! tutorial, Basic Ghostly Ink (Lupe in Um)',
            prereqLinks: [
              { label: 'Runecrafting: Pure Essence for Impure (P2P/F2P)', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
            ],
            location: 'City of Um Ritual Site',
            xpPerHour: '14k – 20k XP/hr',
            ironmanPrep: '3 min buying Basic Ghostly Ink & Candles from Lupe in Um',
            gpPerHour: '-8,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: "Shop Sink (Lupe's Soul Supplies in Um — builds Weak Necroplasm & Talent Points)",
            notes: 'Generates Talent Points for the Well of Souls early.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'City of Um (Draynor Portal / Tome)',
              bank: 'City of Um Ritual Storage Pedestal',
              target: 'City of Um Ritual Site (North)',
              sellSpot: "Lupe's Soul Supplies (Shop Sink)",
              routeNote: 'Buy Basic Ghostly Ink & Candles from Lupe -> draw glyphs at the Ritual Site north of Um bank.'
            },
            steps: [
              'Buy Basic Ghostly Ink and Ritual Candles from Lupe south of the Ritual Site.',
              'Place Weak Necroplasm or Lesser Communion focus on the pedestal.',
              'Draw glyphs and click Start Ritual; click random ritual disturbances for huge bonus XP.',
              'Spend Souls at the Well of Souls for Finger of Death & Spectral Scythe.'
            ]
          }
        ]
      },
      {
        levels: '10–20',
        methods: [
          {
            id: 'necro-10-20-combat',
            tabLabel: 'Recommended: T20 Combat (Al Kharid)',
            isRecommended: true,
            method: 'Tier 20 Death Guard & Scythe at Al Kharid Warriors / Hill Giants',
            prereqs: '10–20 Necromancy, Kili Tier 20 Upgrade (Spider Silk + Steel Bars)',
            prereqLinks: [
              { label: 'Smithing: Steel Bars (29–40)', section: 'skills', itemId: 'smithing', bracket: '29–40' }
            ],
            location: 'Al Kharid Palace / Edgeville Dungeon',
            xpPerHour: '25k – 35k XP/hr',
            ironmanPrep: '10 min gathering Spider Silk (Lumbridge Catacombs) & Steel Bars for T20 upgrade',
            gpPerHour: '+55,000 – +90,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "City of Um General Store, Edgeville General Store, or Zeke's Scimitars",
            notes: 'Cap is strictly Level 20 in F2P, but Tier 20 Deathwarden gear + Ghost healing makes early quests trivial.',
            mapData: {
              terrain: 'city',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Al Kharid Bank',
              target: 'Al Kharid Palace / Edgeville Hill Giants',
              sellSpot: "Zeke's Superior Scimitars / Edgeville General Store",
              routeNote: 'Upgrade Death Guard & Skull Lantern to Tier 20 via Kili -> AoE Warriors/Giants with Spectral Scythe.'
            },
            steps: [
              'Gather Spider Silk (Lumbridge Catacombs Corpse Spiders) and Steel Bars to upgrade Kili\'s Tier 20 Death Guard & Deathwarden armour.',
              'Put Soul Sap, Touch of Death, Spectral Scythe, Finger of Death & Conjure Ghost on Revolution.',
              'Farm Al Kharid Palace Warriors or Edgeville Hill Giants to Level 20 cap.',
              'Sell drops at Zeke\'s Scimitars or Edgeville General Store.'
            ]
          },
          {
            id: 'necro-10-20-rituals',
            tabLabel: 'Alt: Lesser Rituals + Rune Mythos',
            isRecommended: false,
            method: 'Lesser Necroplasm & Communion Rituals (Well of Souls)',
            prereqs: '10–20 Necromancy, Basic Ghostly Ink + Ritual Candles',
            prereqLinks: [
              { label: 'Runecrafting: Level 20 for Rune Mythos', section: 'skills', itemId: 'runecrafting', bracket: '1–33' }
            ],
            location: 'City of Um Ritual Site',
            xpPerHour: '20k – 30k XP/hr',
            ironmanPrep: '5 min buying Basic Ghostly Ink & Vials of Water from Lupe in Um',
            gpPerHour: '-12,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: "Shop Sink (Lupe's Soul Supplies in Um — converts Weak/Lesser Necroplasm & Souls into Talents)",
            notes: 'Run enough Lesser Communion rituals to unlock all Level 20 Well of Souls talents and finish Rune Mythos.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'City of Um (Draynor Portal)',
              bank: 'City of Um Ritual Storage Pedestal',
              target: 'City of Um Ritual Site',
              sellSpot: "Lupe's Soul Supplies (Shop Sink)",
              routeNote: 'Complete rituals at Um Ritual Site until Well of Souls Level 20 talents + Rune Mythos are done.'
            },
            steps: [
              'Stock up on Basic Ghostly Ink and Candles from Lupe in Um.',
              'Perform Lesser Necroplasm & Lesser Communion rituals until all Level 20 Well of Souls talents unlock.',
              'Hit 20 Runecrafting & 20 Necromancy to complete Rune Mythos quest in Um.',
              'Use Tier 20 Necromancy freely on early F2P quests.'
            ]
          }
        ]
      }
    ]
  },

  archaeology: {
    skillPrereqLinks: [
      { label: 'Constitution: +500 HP Font of Life Benefit', section: 'skills', itemId: 'constitution', bracket: '10–30' },
      { label: 'Smithing: Iron (10) & Steel (20) Mattocks', section: 'skills', itemId: 'smithing', bracket: '1–29' }
    ],
    brackets: [
      {
        levels: '1–5',
        methods: [
          {
            id: 'arch-1-5-tutorial',
            tabLabel: 'Recommended: Campus Tutorial (Font of Life)',
            isRecommended: true,
            method: "Archaeology Campus Tutorial (Centurion's Seal + Font of Life)",
            prereqs: 'None (free Bronze Mattock from Guildmaster Reiniger)',
            prereqLinks: [
              { label: 'Constitution: Pair with +500 HP Relic', section: 'skills', itemId: 'constitution', bracket: '10–30' }
            ],
            location: 'Archaeology Campus (NE of Al Kharid)',
            xpPerHour: '4k – 6k XP/hr (~10 min total)',
            ironmanPrep: '0 min prep (everything excavated on-site)',
            gpPerHour: '+15,000 GP/hr (Chronote Value)',
            gpTrend: 'positive',
            whereToSell: "Donate restored Centurion's Seal to Velucia at Archaeology Campus for 500 Chronotes → Activate Font of Life!",
            notes: 'MANDATORY Day 1 task for every F2P account: +500 permanent HP works everywhere!',
            mapData: {
              terrain: 'citadel',
              lodestone: 'Varrock / Al Kharid Lodestone',
              bank: 'Archaeology Campus Material Storage / Bank',
              target: 'Archaeology Campus Monolith & Tutorial Trench',
              sellSpot: 'Velucia (Museum Collector) → Mysterious Monolith',
              routeNote: 'Run east of Varrock (or north of Al Kharid) to Archaeology Campus -> restore Seal at Workbench -> turn in to Velucia.'
            },
            steps: [
              'Speak to Acting Guildmaster Reiniger at the Archaeology Campus (east of Varrock / north of Al Kharid).',
              'Excavate the Centurion\'s Seal and restore it at the Archaeologist\'s Workbench.',
              'Donate the restored Seal to Velucia inside the Campus Guildhall for 500 Chronotes & Level 5 Archaeology.',
              'Click the Mysterious Monolith in the center of campus and activate Font of Life (+500 Max HP permanently in F2P!).'
            ]
          },
          {
            id: 'arch-1-5-soil',
            tabLabel: 'Alt: Soil Screening & Material Caches',
            isRecommended: false,
            method: 'Campus Soil Screening + Third-Age Iron Caches',
            prereqs: 'Bronze Mattock, Soil Box (tutorial)',
            prereqLinks: [
              { label: 'Smithing: Upgrade Mattock at 10 Smithing', section: 'skills', itemId: 'smithing', bracket: '1–29' }
            ],
            location: 'Archaeology Campus Mesh & Caches',
            xpPerHour: '3.5k – 5k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+12,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Keep materials in Material Storage for Kharid-et restorations',
            notes: 'Recovers extra restoration materials if you fall short on an artefact.',
            mapData: {
              terrain: 'citadel',
              lodestone: 'Varrock Lodestone',
              bank: 'Archaeology Campus Material Storage',
              target: 'Archaeology Soil Screener Mesh',
              sellSpot: 'Velucia (Restored Artefacts)',
              routeNote: 'Use the Soil Screener beside the Workbench at Archaeology Campus.'
            },
            steps: [
              'Excavate tutorial debris piles until your Soil Box fills.',
              'Screen soil at the Campus Mesh for extra Third-Age Iron & Zarosian Insignia.',
              'Store materials directly in the Material Storage container.'
            ]
          }
        ]
      },
      {
        levels: '5–12',
        methods: [
          {
            id: 'arch-5-12-venator',
            tabLabel: 'Recommended: Kharid-et Venator Remains',
            isRecommended: true,
            method: 'Kharid-et Digsite (Venator Remains)',
            prereqs: '5 Archaeology, Iron Mattock (10 Smithing)',
            prereqLinks: [
              { label: 'Smithing: Iron Mattock (10 Smithing)', section: 'skills', itemId: 'smithing', bracket: '1–29' }
            ],
            location: 'Kharid-et Fortress Courtyard (South of Campus)',
            xpPerHour: '6k – 9k XP/hr',
            ironmanPrep: '0 min prep (screen Soil at Campus Mesh for extra materials)',
            gpPerHour: '+25,000 GP/hr (Chronote Value)',
            gpTrend: 'positive',
            whereToSell: 'Turn in Venator Daggers & Crossbows to Velucia (Museum) or Sir Atcha for Chronotes',
            notes: 'Always follow the glowing Time Sprite between excavation spots for +20% XP & precision.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Archaeology Campus Bank / Material Storage',
              target: 'Kharid-et Fortress Courtyard (Venator Remains)',
              sellSpot: 'Velucia (Museum) / Sir Atcha (Chronotes)',
              routeNote: 'Run north from Al Kharid Lodestone into Kharid-et Digsite -> chase Time Sprite -> restore back at Campus Workbench.'
            },
            steps: [
              'Equip an Iron Mattock (10 Smithing) on your Tool Belt.',
              'Enter Kharid-et Fortress south of Archaeology Campus and excavate Venator Remains.',
              'Switch hotspots whenever the glowing Time Sprite moves for +20% progress.',
              'Restore Venator Daggers & Crossbows at the Workbench and hand to Velucia for Chronotes.'
            ]
          },
          {
            id: 'arch-5-12-caches',
            tabLabel: 'Alt: Material Caches + Screening',
            isRecommended: false,
            method: 'Kharid-et Material Caches (Third-Age Iron / Tyrian Purple)',
            prereqs: '5 Archaeology, Iron Mattock',
            prereqLinks: [
              { label: 'Mining: Tool Belt Pickaxes/Mattocks', section: 'skills', itemId: 'mining', bracket: '10–20' }
            ],
            location: 'Kharid-et Fortress Courtyard Caches',
            xpPerHour: '4k – 6k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+20,000 GP/hr (Restoration Supply)',
            gpTrend: 'positive',
            whereToSell: 'Used directly to restore banked Damaged Artefacts for big XP drops',
            notes: 'Use whenever you have more damaged artefacts than restoration materials.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Material Storage',
              target: 'Kharid-et Material Caches',
              sellSpot: 'Campus Workbench Restorations',
              routeNote: 'Gather missing Imperial Steel, Third-Age Iron, or Tyrian Purple at Kharid-et caches.'
            },
            steps: [
              'Check your damaged Venator artefacts to see which materials are missing.',
              'Excavate the matching Material Caches around Kharid-et.',
              'Restore artefacts at the Campus Workbench for big chunks of XP.'
            ]
          }
        ]
      },
      {
        levels: '12–20',
        methods: [
          {
            id: 'arch-12-20-legionary',
            tabLabel: 'Recommended: Legionary Remains',
            isRecommended: true,
            method: 'Kharid-et Barracks (Legionary Remains)',
            prereqs: '12 Archaeology, Steel Mattock (20 Smithing rec.)',
            prereqLinks: [
              { label: 'Smithing: Steel Mattock (20 Smithing)', section: 'skills', itemId: 'smithing', bracket: '29–40' }
            ],
            location: 'Kharid-et Fortress (Inside East Wing)',
            xpPerHour: '9k – 12k XP/hr',
            ironmanPrep: '0 min prep (materials self-gathered via excavation & soil screening)',
            gpPerHour: '+35,000 – +45,000 GP/hr (Chronote Value)',
            gpTrend: 'positive',
            whereToSell: 'Complete Zarosian I / Museum Zarosian I Collections with Velucia & Soran for Chronotes',
            notes: 'Once Level 20 is reached, spend Chronotes at Ezreal\'s Guild Shop for Material Storage upgrades.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Archaeology Campus Bank / Material Storage',
              target: 'Kharid-et Barracks (Legionary Remains)',
              sellSpot: 'Velucia & Soran (Zarosian I Collections)',
              routeNote: 'Enter Kharid-et Fortress east wing -> excavate Legionary Remains -> restore & turn in to Velucia.'
            },
            steps: [
              'Upgrade to a Steel Mattock at 20 Smithing & 20 Archaeology.',
              'Enter the Kharid-et Barracks inside the fortress and excavate Legionary Remains.',
              'Screen soil and excavate caches as needed to repair damaged artefacts.',
              'Donate restored sets to Velucia / Soran until reaching the Level 20 F2P cap.'
            ]
          },
          {
            id: 'arch-12-20-venator-repeat',
            tabLabel: 'Alt: Venator Collection Repeats',
            isRecommended: false,
            method: 'Repeat Venator Collections (Chronote Focus)',
            prereqs: '12+ Archaeology, Steel/Iron Mattock',
            prereqLinks: [
              { label: 'Archaeology: Venator Remains (5–12)', section: 'skills', itemId: 'archaeology', bracket: '5–12' }
            ],
            location: 'Kharid-et Courtyard',
            xpPerHour: '8k – 10.5k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+45,000 GP/hr (Chronote Repeats)',
            gpTrend: 'positive',
            whereToSell: 'Velucia (Museum Zarosian I Repeats)',
            notes: 'Easier collection completion than mixing higher-level artefacts.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Al Kharid Lodestone',
              bank: 'Material Storage',
              target: 'Kharid-et Courtyard Venator Spots',
              sellSpot: 'Velucia (Museum Collector)',
              routeNote: 'Camp Venator spots -> restore pairs -> turn in completed collection sets repeatedly.'
            },
            steps: [
              'Excavate balanced sets of Venator Daggers & Crossbows.',
              'Restore at the Campus Workbench.',
              'Hand completed sets to Velucia for repeat Chronote bonuses.'
            ]
          }
        ]
      }
    ]
  },

  'trial-skills': {
    skillPrereqLinks: [
      { label: 'Woodcutting: Normal Logs for Planks', section: 'skills', itemId: 'woodcutting', bracket: '1–15' },
      { label: 'Attack: Trolls Drop Guam Herbs', section: 'skills', itemId: 'attack', bracket: '1–20' }
    ],
    brackets: [
      {
        levels: '1–5 Herblore & Summoning',
        methods: [
          {
            id: 'trial-herb-summ-rec',
            tabLabel: 'Recommended: Wolf Whistle + Attack Pots',
            isRecommended: true,
            method: 'Wolf Whistle + Poletax Task + Guam Attack Potions',
            prereqs: 'Burthorpe Trolls (Guam) + Poletax Eye of Newt (3 GP)',
            prereqLinks: [
              { label: 'Attack: Farm Trolls for Guam (1–20)', section: 'skills', itemId: 'attack', bracket: '1–20' }
            ],
            location: 'Taverley (Pikkupstix & Poletax)',
            xpPerHour: '12k – 18k XP/hr (~12 min total)',
            ironmanPrep: '~10 min collecting Guam Leaves from Burthorpe Trolls + Eye of Newt from Poletax',
            gpPerHour: '+15,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: "Keep Attack Potions (3 Herblore!) for F2P PvM/KBD; sell extras at Poletax's Herblore Shop or Burthorpe General Store",
            notes: 'Attack Potions work 100% in F2P — brew them from Troll Guam drops!',
            mapData: {
              terrain: 'city',
              lodestone: 'Taverley Lodestone',
              bank: 'Taverley Bank',
              target: "Pikkupstix's House & Poletax's Herblore Shop",
              sellSpot: "Poletax's Herblore Shop / Keep Attack Potions",
              routeNote: 'Teleport to Taverley -> finish Wolf Whistle at Pikkupstix -> brew Attack Potions at Poletax across the road.'
            },
            steps: [
              'Speak to Pikkupstix in Taverley to complete Wolf Whistle (boosts Summoning 1 → 4 & unlocks Charm drops forever!).',
              'Kill Burthorpe Trolls for Grimy Guam leaves and buy Vials of Water + Eyes of Newt (3 GP) from Poletax.',
              'Speak to Poletax in Taverley for starter Herblore XP, clean Guams, and brew Attack Potions at Level 3.',
              'Keep Attack Potions in Group Storage for F2P bossing (Elvarg, Giant Mole, KBD).'
            ]
          },
          {
            id: 'trial-herb-summ-pouches',
            tabLabel: 'Alt: Dreadfowl Pouches (Lvl 4–5)',
            isRecommended: false,
            method: 'Dreadfowl Pouches (4 Summoning) at Taverley Obelisk',
            prereqs: 'Wolf Whistle, Gold Charms (Trolls/Giants), Raw Chicken',
            prereqLinks: [
              { label: 'Magic: Lumbridge Chickens (1–17)', section: 'skills', itemId: 'magic', bracket: '1–17' }
            ],
            location: 'Taverley Summoning Obelisk (Pikkupstix Basement)',
            xpPerHour: '10k – 14k XP/hr',
            ironmanPrep: '5 min grabbing Raw Chicken & Gold Charms + Spirit Shards (25 GP)',
            gpPerHour: '-2,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Trade extra pouches back to Bogrog / Pikkupstix for Spirit Shards',
            notes: 'Finishes Level 5 Summoning cap right after Wolf Whistle.',
            mapData: {
              terrain: 'dungeon',
              lodestone: 'Taverley Lodestone',
              bank: 'Taverley Bank',
              target: 'Taverley Summoning Obelisk (Trapdoor)',
              sellSpot: 'Pikkupstix Shop (Spirit Shards)',
              routeNote: 'Buy Pouches & Shards from Pikkupstix -> climb down trapdoor -> infuse Dreadfowl Pouches to Level 5.'
            },
            steps: [
              'Collect 4–5 Gold Charms and Raw Chicken.',
              'Buy Spirit Shards (25 GP) and Blank Pouches from Pikkupstix in Taverley.',
              'Climb down the trapdoor to the Summoning Obelisk and infuse Dreadfowl Pouches to hit Level 5.'
            ]
          }
        ]
      },
      {
        levels: '1–5 Agility, Thieving & Hunter',
        methods: [
          {
            id: 'trial-agi-thief-hunt-rec',
            tabLabel: 'Recommended: Burthorpe/Taverley Loop',
            isRecommended: true,
            method: 'Burthorpe Agility Course, Pompous Merchants & Polar Kebbits',
            prereqs: 'None (free Noose Wand from Hunter Tutor in Taverley)',
            prereqLinks: [
              { label: 'Overview: Day 1 Rush Order', section: 'overview', itemId: 'all' }
            ],
            location: 'Burthorpe / Taverley Market',
            xpPerHour: '10k – 15k XP/hr (~15 min total)',
            ironmanPrep: '0 min prep (free Noose Wand & no food needed)',
            gpPerHour: '+20,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Pickpocketing Pompous Merchants gives raw GP; sell Kebbit fur/items to Burthorpe General Store',
            notes: '5 Agility slightly improves Run Energy regeneration across F2P.',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe / Taverley Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Burthorpe Agility Course → Taverley Market → Kebbit Snow',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Run 4–5 laps at Burthorpe Agility Course -> pickpocket Merchants in Taverley -> track Polar Kebbits NW.'
            },
            steps: [
              'Run laps on the Burthorpe Agility Course just northeast of the bank until Level 5 Agility.',
              'Pickpocket Pompous Merchants around Taverley/Burthorpe market to reach Level 5 Thieving.',
              'Claim a free Noose Wand from the Hunter Tutor and track Polar Kebbits NW of Burthorpe to Level 5 Hunter.',
              'Sell unwanted fur/drops to Burthorpe General Store.'
            ]
          },
          {
            id: 'trial-agi-thief-alt',
            tabLabel: 'Alt: Men/Stalls + Crimson Swifts',
            isRecommended: false,
            method: 'Pickpocketing Men/Women + Bird Snares',
            prereqs: 'Bird Snare (Hunter shop in Taverley)',
            prereqLinks: [
              { label: 'Money: Stronghold 20k Cash', section: 'money', itemId: 'stronghold-security' }
            ],
            location: 'Lumbridge / Taverley',
            xpPerHour: '8k – 12k XP/hr',
            ironmanPrep: '2 min buying Bird Snare',
            gpPerHour: '+12,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Raw Coins from Pickpocketing / General Store',
            notes: 'Alternative Thieving/Hunter route if Taverley spots are busy.',
            mapData: {
              terrain: 'city',
              lodestone: 'Lumbridge / Taverley Lodestone',
              bank: 'Lumbridge / Taverley Bank',
              target: 'Lumbridge Courtyard / Taverley Meadow',
              sellSpot: 'Lumbridge General Store',
              routeNote: 'Pickpocket Men/Women around Lumbridge Courtyard for fast coins to Level 5.'
            },
            steps: [
              'Pickpocket Men/Women in Lumbridge or Burthorpe until Level 5 Thieving.',
              'Set Bird Snares north of Taverley if you prefer passive trapping over tracking.',
              'Complete Burthorpe Agility laps for Level 5 Agility.'
            ]
          }
        ]
      },
      {
        levels: '1–5 Farming, Construction, Slayer & Divination',
        methods: [
          {
            id: 'trial-misc-rec',
            tabLabel: 'Recommended: Taverley 4-Skill Sprint',
            isRecommended: true,
            method: 'Taverley Allotment, Plank Workbench, Turael Task & Pale Wisps',
            prereqs: '100–400 GP for 2–4 Sawmill Planks, Potato Seeds (Taverley Stall)',
            prereqLinks: [
              { label: 'Woodcutting: Normal Logs for Planks (1–15)', section: 'skills', itemId: 'woodcutting', bracket: '1–15' }
            ],
            location: 'Taverley / Burthorpe',
            xpPerHour: '8k – 14k XP/hr (~15 min total)',
            ironmanPrep: '~5 min chopping Normal Logs & converting into Planks at Taverley Sawmill (100 GP/plank)',
            gpPerHour: '-5,000 GP/hr',
            gpTrend: 'negative',
            whereToSell: 'Planks & Pale Energies are consumed (+36 easy Total Levels; sell farmed Potatoes to General Store)',
            notes: 'Turael Slayer tasks (Cows/Goblins/Trolls) stack seamlessly with early combat.',
            mapData: {
              terrain: 'city',
              lodestone: 'Taverley Lodestone',
              bank: 'Taverley Bank',
              target: 'Taverley Allotment → Sawmill → Pale Wisps (South)',
              sellSpot: 'Burthorpe General Store (Potatoes)',
              routeNote: 'Plant Potatoes -> take 4 Normal Logs to Taverley Sawmill/Workbench -> harvest Pale Wisps south of Taverley.'
            },
            steps: [
              'Grab Potato Seeds & Rake from Taverley Farming Shop -> plant in Taverley Allotment (check back in 10 mins for Level 5 Farming).',
              'Chop 4 Normal Logs, convert to Planks at Taverley Sawmill (100 GP each), and build/flatpack Crude Chairs at the Workbench to Level 5 Construction.',
              'Get a fast Goblin/Cow/Troll task from Turael (Spria) in Burthorpe for Level 5 Slayer.',
              'Harvest Pale Wisps south of Taverley and convert Memories to XP at the Energy Rift to Level 5 Divination.'
            ]
          },
          {
            id: 'trial-misc-slayer-focus',
            tabLabel: 'Alt: Slayer + Combat Stacking',
            isRecommended: false,
            method: 'Burthorpe Slayer Tasks + Pale Divination',
            prereqs: 'Any starter Combat Weapon',
            prereqLinks: [
              { label: 'Attack: Burthorpe Trolls (1–20)', section: 'skills', itemId: 'attack', bracket: '1–20' }
            ],
            location: 'Burthorpe / Lumbridge',
            xpPerHour: '9k – 13k XP/hr',
            ironmanPrep: '0 min prep',
            gpPerHour: '+10,000 GP/hr',
            gpTrend: 'positive',
            whereToSell: 'Burthorpe General Store (drops)',
            notes: 'Pairs Slayer 1–5 directly with early Attack/Magic/Ranged training.',
            mapData: {
              terrain: 'city',
              lodestone: 'Burthorpe Lodestone',
              bank: 'Burthorpe Bank Chest',
              target: 'Turael / Spria (Burthorpe) → Assigned Mobs',
              sellSpot: 'Burthorpe General Store',
              routeNote: 'Speak to Turael/Spria east of Burthorpe Bank before starting early combat training.'
            },
            steps: [
              'Talk to Turael in Burthorpe for an easy Slayer task (Trolls/Cows/Spiders).',
              'Complete the task while training your main combat style.',
              'Finish Farming, Construction, and Divination to cap all 9 trial skills at Level 5.'
            ]
          }
        ]
      }
    ]
  }
};
