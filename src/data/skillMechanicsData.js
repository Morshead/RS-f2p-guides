export const GLOBAL_RS3_MECHANICS = [
  {
    title: 'Lodestone Network (Free Teleports)',
    badge: 'TRAVEL // ESSENTIAL',
    howItWorks:
      'Unlike OSRS, RS3 lets every F2P account activate Lodestones across major towns (Burthorpe, Taverley, Lumbridge, Varrock, Falador, Al Kharid, Edgeville, Draynor, Port Sarim) for unlimited free home-style teleports with zero runes.',
    howToUse:
      'Walk up and right-click/click each stone pad once on Day 1. Open the World Map or press "T" to open the Lodestone interface anytime (or combine with Vis Wax at 50 RC for instant-cast teleports).'
  },
  {
    title: 'Permanent Tool Belt',
    badge: 'INVENTORY // ZERO SLOTS',
    howItWorks:
      'Pickaxes, Hatchets, Mattocks, Fishing Rods/Cages/Harpoons, Knives, Chisels, Hammers, Tinderboxes, and Jewellery Moulds live inside your Tool Belt permanently without taking any of your 28 inventory slots.',
    howToUse:
      'Right-click -> "Add to tool belt" on every new Pickaxe, Hatchet, or Mattock tier you smith or buy. You will automatically gather using the highest-tier tool your skill level allows.'
  },
  {
    title: 'Revolution++ & Adrenaline Bar',
    badge: 'COMBAT // DPS + FREE CASTS',
    howItWorks:
      'RS3 combat uses Basic abilities (generate Adrenaline), Thresholds (cost 15% Adrenaline at 50%+), and Ultimates (100%). Revolution automatically fires abilities from left to right on your Action Bar.',
    howToUse:
      'Go to Settings -> Gameplay -> Combat -> Combat Mode and enable Revolution, ticking Basic & Threshold abilities. Place multi-target AoE abilities (Cleave, Hurricane, Quake, Chain, Dragon Breath, Ricochet) at slots 1–3!'
  },
  {
    title: 'Combat XP Selection Toggle',
    badge: 'COMBAT // TARGETED XP',
    howItWorks:
      'You can route 100% of Melee XP into Attack, Strength, or Defence — and you can even toggle Magic, Ranged, or Necromancy to grant Defence XP (using fast Magic AoE to train Defence!).',
    howToUse:
      'Open Settings -> Gameplay -> Combat -> Combat Experience and check ONLY the skill(s) you want to level right now.'
  },
  {
    title: 'Mining Stamina & Rockertunities',
    badge: 'GATHERING // +30% TO +50% XP',
    howItWorks:
      'Rocks in RS3 never deplete, and your blue Stamina bar drains slowly as you swing. Every ~15–20 seconds, a nearby rock sparkles brightly ("Rockertunity") — clicking it grants a massive 4x–8x progress burst and restores full Stamina.',
    howToUse:
      'Keep Stamina above 0 by clicking every 4 ticks if active, and ALWAYS switch onto the sparkling Rockertunity rock immediately for massive bonus ores and XP.'
  },
  {
    title: 'Smithing Heat & Shared Metal Bank',
    badge: 'ARTISAN // ZERO-BANK ORES',
    howItWorks:
      'Smelted bars go directly into the global Metal Bank accessible at EVERY furnace and anvil in RuneScape! While smithing an item on an anvil, its Heat bar cools down — higher heat grants much faster progress per swing.',
    howToUse:
      'Right-click any Furnace/Anvil -> "Open Metal Bank" to deposit ores or withdraw bars. While hammering, click the Forge next to your anvil whenever Heat drops below 66% (yellow/red) to reheat immediately.'
  },
  {
    title: 'Skilling Urns & Auto-Teleport Setting',
    badge: 'PASSIVE // +20% BONUS XP',
    howItWorks:
      'Crafted Urns (Mining, Smithing, Fishing, Cooking, Woodcutting, Prayer, Runecrafting) sit in your inventory/pocket and fill up automatically as you train. Once full, teleporting an urn grants a +20% XP bonus!',
    howToUse:
      'Craft urns -> attach 1 matching Elemental Rune -> carry multiple urns -> go to Settings -> Gameplay -> Skills -> Skilling Urns and enable "Auto-teleport full urns" so you never have to click them manually.'
  },
  {
    title: 'Area Loot & Safe Wilderness PvP Opt-Out',
    badge: 'QOL & SAFETY // MUST-ENABLE',
    howItWorks:
      'Area Loot lets you pick up every drop in a 7x7 tile radius from one window (critical at Cockroach Soldiers & Giants). RS3 also makes Wilderness PvP strictly opt-in!',
    howToUse:
      'Enable Area Loot under Settings -> Gameplay -> Item Drops -> Loot System. Speak to Vala at the Edgeville Wilderness border to ensure your PvP flag is OFF (do NOT carry a Demonic Skull) for 100% safe Wilderness Chaos Altar & Forinthry training.'
  }
];

export const SKILL_MECHANICS_MAP = {
  mining: [
    {
      title: 'Rockertunities (Sparkling Rocks)',
      badge: '4X–8X PROGRESS BURST',
      howItWorks:
        'Every ~15–20 seconds while mining, a nearby rock of the same type emits golden/blue sparkles ("Rockertunity"). Your very next swing on that sparkling rock deals massive bonus damage to rock health and restores 100% Stamina.',
      howToUse:
        'Stop mining your current rock the moment another rock sparkles and click the Rockertunity immediately — this is the single biggest Mining XP/hr and ore/hr boost in RS3.'
    },
    {
      title: 'Stamina Bar & Critical Swings',
      badge: 'UP TO +50% SPEED',
      howItWorks:
        'The blue bar above your character shows Mining Stamina. At full/high Stamina you deal full progress per swing; at 0 Stamina you still mine AFK, but at reduced progress.',
      howToUse:
        'Click the rock every 4 game ticks (2.4 seconds) for active 100% stamina speed, or semi-AFK by only clicking whenever a Rockertunity spawns.'
    },
    {
      title: 'Ore Boxes & Metal Bank Storage',
      badge: '100–140 ORES / TRIP',
      howItWorks:
        'Ore Boxes hold 100+ of every ore tier inside a single inventory slot, and any Furnace/Anvil can deposit all ores directly into your shared Metal Bank.',
      howToUse:
        'Put your upgraded Ore Box on an Action Bar keybind ("Fill ore box") and empty it right into any Furnace or Artisans\' Workshop smelter.'
    },
    {
      title: 'Mining Urns (+20% XP)',
      badge: '+20% BONUS XP',
      howItWorks:
        'Mining Urns fill passively with every ore mined and teleport for an instant +20% bonus Mining XP.',
      howToUse:
        'Attach Earth Runes to Mining Urns, keep 5–10 in your inventory, and turn on "Auto-teleport full urns" in Settings -> Gameplay -> Skills.'
    }
  ],

  smithing: [
    {
      title: 'Item Heat Management (<66% Reheat)',
      badge: '2X FASTER ANVIL PROGRESS',
      howItWorks:
        'Every smithed item has a Heat gauge (High/Medium/Low/Zero). Progress per hammer strike drops dramatically once Heat falls into yellow or runs cold.',
      howToUse:
        'Always stand right between an Anvil and Forge (like Falador Artisans\' Workshop) and click the Forge to reheat whenever Heat drops below 66%.'
    },
    {
      title: 'Global Artisan Metal Bank',
      badge: 'NO ORE BANKING CLUTTER',
      howItWorks:
        'Every Furnace and Anvil shares one Metal Bank storing unlimited Ores and Bars across all of Gielinor — zero regular bank slots used!',
      howToUse:
        'Deposit mined Ores straight at Artisans\' Workshop Furnace, smelt Bars directly into the Metal Bank, then right-click the Anvil -> "Open Smithing Interface" without withdrawing bars.'
    },
    {
      title: 'Upgrade (+1/+2/+3) vs. Burial Sets',
      badge: 'PROFIT VS. BURST XP',
      howItWorks:
        'Smithing an item to +3 yields solid XP and keeps a high-alchable Rune +3 item (20,000 GP). Taking +3 armour to a Burial Anvil destroys the item for massive bonus XP + Workshop Respect.',
      howToUse:
        'Use +3 Platebodies when your Ironman needs GP via High Alch; use Burial Anvils in Artisans\' Workshop only when prioritizing max Smithing XP/hr.'
    },
    {
      title: 'Scroll of Efficiency & Smithing Urns',
      badge: 'SAVE BARS + 20% XP',
      howItWorks:
        'Scroll of Efficiency (20k DG tokens) gives a chance to save Runite/Adamantite bars when starting items; Smithing Urns add +20% XP.',
      howToUse:
        'Unlock Scroll of Efficiency before grinding 50–99 Runite and always carry Smithing Urns (Fire Runes attached) at the anvil.'
    }
  ],

  attack: [
    {
      title: 'Weapon Tier Accuracy Scaling',
      badge: 'ACCURACY = HIT CHANCE',
      howItWorks:
        'In RS3, Accuracy scales steeply with Weapon Tier rather than Attack level alone. Upgrading from Adamant (T40) → Rune +3 (T50) → Gravite 2h (T55) boosts both hit chance and ability damage substantially.',
      howToUse:
        'Always use the highest-tier 2H or Dual-Wield melee weapon your Attack level allows (aim for Rune 2h +3 at 50 and Gravite 2h at 55).'
    },
    {
      title: '2H AoE Revolution++ Rotation',
      badge: 'MULTI-TARGET CLEARS',
      howItWorks:
        'Two-handed swords unlock wide AoE abilities (Cleave, Quake, Hurricane) that hit all adjacent enemies simultaneously for doubled or tripled XP/hr.',
      howToUse:
        'Enable Revolution in Combat Settings and place Hurricane, Quake, Cleave, Sever, and Slice in slots 1–5 so multi-spawns die together.'
    },
    {
      title: 'Area Loot Keybind',
      badge: '7X7 INSTANT LOOTING',
      howItWorks:
        'Clicking one pile of loot opens an Area Loot window listing every item within a 7x7 radius, letting you grab Rune Salvage, Runes, and Bones without walking.',
      howToUse:
        'Enable Area Loot in Settings -> Gameplay -> Item Drops, bind "Area Loot" to a key, and press Spacebar ("Loot All") after AoE clears.'
    }
  ],

  strength: [
    {
      title: '2H AoE Threshold Priority',
      badge: 'HURRICANE & QUAKE',
      howItWorks:
        'Strength unlocks Quake (37) and Hurricane (55) — Hurricane deals two heavy AoE hits around you, making 2H swords dominant for F2P melee XP.',
      howToUse:
        'Toggle Revolution to auto-fire Threshold abilities and place Hurricane -> Quake -> Cleave at the front of your bar.'
    },
    {
      title: 'Dedicated Strength XP Toggle',
      badge: '100% FOCUSED XP',
      howItWorks:
        'By default RS3 splits Melee XP across Attack, Strength, and Defence, slowing each level down by 3x.',
      howToUse:
        'Open Settings -> Gameplay -> Combat -> Combat Experience and check ONLY Strength whenever rushing key milestones like 37/55.'
    },
    {
      title: 'Regenerate Out-of-Combat Healing',
      badge: 'SAVE FOOD SUPPLIES',
      howItWorks:
        'The Constitution ability "Regenerate" drains leftover Adrenaline outside combat to heal your HP rapidly for zero food cost.',
      howToUse:
        'Click the Heart/Adrenaline Regenerate icon on your HP bar whenever pausing between spawns to save Trout, Lobsters, and Swordfish.'
    }
  ],

  defence: [
    {
      title: 'Train Defence Using Magic AoE',
      badge: 'FASTEST F2P DEFENCE XP',
      howItWorks:
        'You do not have to use Melee to train Defence! Toggling Defence XP under Magic lets you cast Dragon Breath + Chain (zero runes on abilities) to level Defence faster than melee.',
      howToUse:
        'Open Settings -> Gameplay -> Combat -> Combat Experience -> uncheck Magic XP and check Defence XP while wielding your Staff.'
    },
    {
      title: 'Resonance Shield Switch (48 Def)',
      badge: 'FREE BOSS HEALING',
      howItWorks:
        'Casting Resonance (48 Defence) while holding any Shield turns the next incoming enemy hit into a massive HEAL instead of damage (works on Elvarg, Giant Mole & KBD!).',
      howToUse:
        'Keep a Rune Sq/Kite Shield +3 on an action bar keybind; swap to Shield -> hit Resonance right before a boss attacks -> swap back to 2H/Staff.'
    },
    {
      title: 'Monster Weakness Accuracy Boost',
      badge: 'EXPLOIT STYLE WEAKNESS',
      howItWorks:
        'Monsters display a specific style/spell weakness icon next to their HP bar (e.g. Fire spells vs. Ice Giants, Stab/Magic vs. Plate foes).',
      howToUse:
        'Match your combat style or elemental spell to the enemy\'s weakness icon to eliminate splashes and speed up Defence kills.'
    }
  ],

  constitution: [
    {
      title: 'Font of Life Relic (+500 Base HP)',
      badge: 'MANDATORY DAY 1 BUFF',
      howItWorks:
        'Completing the 10-minute Level 5 Archaeology tutorial unlocks the Font of Life Monolith Relic, granting +500 permanent Maximum Life Points even in F2P!',
      howToUse:
        'Complete 1–5 Archaeology at the Campus east of Varrock on Day 1 and activate Font of Life at the Mysterious Monolith.'
    },
    {
      title: 'Bonfire Maximum LP Boost (+5%)',
      badge: 'PRE-BOSS HP BUFFER',
      howItWorks:
        'Adding 5 logs to any lit bonfire grants a temporary Maximum Life Points boost scaling with log tier (Maple/Yew best in F2P) for up to 30+ minutes.',
      howToUse:
        'Burn 5 Maple or Yew logs on a bonfire before entering Elvarg, King Black Dragon, or Giant Mole fights.'
    },
    {
      title: 'Dragon Breath & Regenerate Milestones',
      badge: '52 HP KEY UNLOCK',
      howItWorks:
        'Constitution levels passively at 33% of all combat XP. Level 52 Constitution unlocks Dragon Breath (paired with 52 Magic), the strongest F2P AoE cone attack.',
      howToUse:
        'Use Regenerate between waves to heal free, and prioritize 52 Constitution + 52 Magic early for massive AoE speed.'
    }
  ],

  magic: [
    {
      title: 'Zero-Rune Revolution Abilities',
      badge: '95% RUNE SAVINGS',
      howItWorks:
        'In RS3, Magic abilities (Wrack, Sonic Wave, Impact, Combust, Chain, Dragon Breath) consume ZERO runes! Only initial auto-attacks consume combat runes.',
      howToUse:
        'Fill your Revolution bar with 5–6 Magic abilities and equip an Elemental Staff (Staff of Air/Fire) so you can train for hours on just ~50 runes.'
    },
    {
      title: 'Zero-Time High Level Alchemy',
      badge: 'PASSIVE SKILL + GP',
      howItWorks:
        'High Level Alchemy (55 Magic) converts smithed Rune +3 & PvM Rune Salvage into raw GP (60% value) and can be cast between skilling ticks or while running.',
      howToUse:
        'Equip a Staff of Fire (free Fire Runes), keybind High Level Alchemy on your bar, and alch noted stacks while running quests or waiting between Mining/Fishing ticks.'
    },
    {
      title: 'Dragon Breath + Chain Cone Cleave',
      badge: 'MAX F2P AOE DPS',
      howItWorks:
        'Chain hits up to 3–4 targets at once, and Dragon Breath (52 Magic/HP) blasts a wide 180-degree flame cone in front of you.',
      howToUse:
        'Face grouped Cockroach Soldiers or Ankous and put Dragon Breath + Chain at slots 1 & 2 of your Revolution bar.'
    }
  ],

  ranged: [
    {
      title: 'Zero-Arrow Ability Consumption',
      badge: '1,000 ARROWS = WEEKS',
      howItWorks:
        'Just like Magic runes, Ranged Basic, Threshold, and Ultimate abilities consume ZERO arrows! Only rare auto-attacks spend an arrow.',
      howToUse:
        'Fletch 500–1,000 Mithril, Adamant, or Rune Arrows once and keep them equipped with Revolution enabled.'
    },
    {
      title: 'Kayle\'s Chargebow (Infinite Ammo)',
      badge: 'LVL 1–20 ZERO PREP',
      howItWorks:
        'Rewarded from the 3-minute Blood Pact quest in Lumbridge Graveyard, Chargebows generate their own magical energy bolts with zero ammo required.',
      howToUse:
        'Complete The Blood Pact at Level 1 Ranged and use Kayle\'s Chargebow straight to Level 20 before switching to Oak/Willow Shortbows.'
    },
    {
      title: 'Ricochet & Bombardment AoE + Safespots',
      badge: 'ZERO FOOD PVM',
      howItWorks:
        'Ricochet bounces between 3 nearby monsters, while Bombardment (50) hits a 3x3 cluster — letting you wipe packs safely from behind stalagmites or rocks.',
      howToUse:
        'Stand behind rocks at Hill Giants, Karamja Lesser Demons, or Cockroach Soldiers to eliminate food usage completely.'
    }
  ],

  prayer: [
    {
      title: 'Wilderness Chaos Altar (350% XP)',
      badge: '3.5X XP PER BONE',
      howItWorks:
        'Burying Big Bones gives only 15 XP each, whereas offering them on the Level 12 Wilderness Chaos Temple Altar awards 52.5 XP per Big Bone (3.5x!), with a Banker NPC right outside.',
      howToUse:
        'Never bury Big Bones raw! Bank them until you have 200–500, verify PvP is opted OUT, and offer them on the Level 12 Chaos Altar.'
    },
    {
      title: 'Safe Wilderness PvP Opt-Out',
      badge: '100% SAFE WILDERNESS',
      howItWorks:
        'RS3 replaced mandatory Wilderness PvP with an Opt-In system. Unless you toggle PvP ON or carry a Demonic Skull, PKers cannot attack you at the Chaos Altar or Boneyard.',
      howToUse:
        'Speak to Vala at the Edgeville Wilderness border before entering and confirm PvP is Opted OUT.'
    },
    {
      title: 'Prayer Urns & Protection Prayers (50% DR)',
      badge: 'PASSIVE +20% XP & BOSS TANK',
      howItWorks:
        'Impious/Accursed Prayer Urns automatically scatter ashes dropped during combat and teleport for +20% bonus XP. Protect from Magic (37), Missiles (40), and Melee (43) cut PvM damage by 50–100%.',
      howToUse:
        'Carry 5–10 Accursed Prayer Urns at Greater Demons and bind Protect Prayers onto quick-prayer presets.'
    }
  ],

  fletching: [
    {
      title: 'Daily Feather Pack Runs (10,000/Day)',
      badge: '60K GP FOR 10K FEATHERS',
      howItWorks:
        'NPC Fishing Shops stock 10 Feather Packs (1,000 feathers per pack) daily per player at 6,000 GP each — way faster than killing chickens.',
      howToUse:
        'Visit Hank (Lumbridge Swamp) and Gerry (Port Sarim docks) daily to buy 10,000 feathers for Headless Arrows.'
    },
    {
      title: 'Daemonheim 30 DG Maple Hub',
      badge: 'FASTEST LOGS -> ALCH BOWS',
      howItWorks:
        'Fletching is fully F2P in RS3 up to Magic Bows and Rune Arrows. The 30 Dungeoneering Resource Dungeon outside Daemonheim holds 6 Maple Trees steps from a bank chest.',
      howToUse:
        'Unlock 30 DG first, bank thousands of Maple Logs next to Daemonheim Bank, string Maple Shieldbows, and High Alch for 384 GP each.'
    },
    {
      title: 'Flax-to-Bowstring Spinning (10 Crafting)',
      badge: 'DOUBLES BOW ALCH VALUE',
      howItWorks:
        'Strung Shortbows and Shieldbows grant double Fletching XP and significantly higher High Alch / Brian\'s Archery Shop sell value than unstrung bows.',
      howToUse:
        'Pick Flax in the Burthorpe/Taverley field and spin it right nearby on the Taverley Spinning Wheel (or Lumbridge Castle 2nd floor).'
    }
  ],

  woodcutting: [
    {
      title: 'Tool Belt Hatchet Progression',
      badge: 'RUNE HATCHET AT 50',
      howItWorks:
        'Upgrading your Hatchet every 10 levels (Bronze -> Iron -> Steel -> Mithril -> Adamant -> Rune) directly increases chop success rate per swing.',
      howToUse:
        'Have your Group Smith craft a Rune Hatchet at 50 Smithing and add it straight onto every teammate\'s Tool Belt.'
    },
    {
      title: 'Woodcutting Urns (+20% XP)',
      badge: 'AUTO-TELEPORT XP',
      howItWorks:
        'Equipped Woodcutting Urns fill with every log chopped and teleport for +20% bonus XP automatically.',
      howToUse:
        'Attach Earth Runes to Woodcutting Urns and enable "Auto-teleport full urns" in Settings -> Gameplay -> Skills.'
    },
    {
      title: 'Action Bar Keybind Drop-Chopping',
      badge: 'ZERO-BANKING MAX XP',
      howItWorks:
        'When chopping Willows strictly for Woodcutting XP rather than Fletching, placing the Log icon on your Action Bar lets you drop logs in seconds by holding/tapping a key.',
      howToUse:
        'Drag a Willow Log onto your Action Bar and tap the keybind continuously as your inventory fills.'
    }
  ],

  firemaking: [
    {
      title: 'Bonfire AFK + Group Tend Bonus',
      badge: 'UP TO +15% PARTY XP',
      howItWorks:
        'Instead of lighting 28 fires in a line, clicking "Add logs to bonfire" burns your entire inventory completely AFK — and each extra player burning on the same fire increases XP per log!',
      howToUse:
        'Light 1 log right next to a bank chest (Draynor or Daemonheim) and have teammates add logs to the same bonfire.'
    },
    {
      title: 'Fire Spirit Loot Spawns',
      badge: 'FREE RUNES & CHARMS',
      howItWorks:
        'Adding logs to a Bonfire periodically spawns a glowing Fire Spirit above the flames; clicking it rewards Elemental Runes, Gems, Ores, and Summoning Charms.',
      howToUse:
        'Click every Fire Spirit immediately before it vanishes (line firemaking does NOT spawn Fire Spirits).'
    },
    {
      title: '5-Log Bonfire Bossing HP Buff',
      badge: 'TEMPORARY +MAX LP',
      howItWorks:
        'Burning 5 logs on a bonfire applies a temporary Maximum Life Points boost lasting 30+ minutes (scales up with Oak/Willow/Maple/Yew logs).',
      howToUse:
        'Always feed 5 Maple or Yew logs to a bonfire before tackling Elvarg, King Black Dragon, or Giant Mole.'
    }
  ],

  fishing: [
    {
      title: 'Port Sarim Entrana Dock Deposit Box',
      badge: '15-SEC KARAMJA BANKING',
      howItWorks:
        'Musa Point (Karamja) has no bank on the pier, and Stiles (who notes fish) is Members-only. However, Port Sarim\'s northern Monk pier has a Bank Deposit Box steps from the Karamja boat!',
      howToUse:
        'Fill 28 slots with Lobsters/Swordfish at Musa Point -> sail back to Port Sarim (30 GP) -> deposit at the Monk dock Deposit Box in 15 seconds.'
    },
    {
      title: 'Fishing Urns (+20% Bonus XP)',
      badge: 'AUTO-TELEPORT URNS',
      howItWorks:
        'Cracked, Plain, Strong, and Decorated Fishing Urns fill up as you catch fish and grant +20% extra Fishing XP when full.',
      howToUse:
        'Attach Water Runes to Fishing Urns and enable Auto-Teleport in Settings -> Gameplay -> Skills -> Skilling Urns.'
    },
    {
      title: 'Action Bar Keybind Drop-Fishing',
      badge: '52K XP/HR MAX FLY FISH',
      howItWorks:
        'Dragging Raw Trout and Raw Salmon onto two adjacent Action Bar slots lets you empty a full Fly Fishing inventory in ~3 seconds without moving from the river.',
      howToUse:
        'Put Raw Trout on key [1] and Raw Salmon on key [2] whenever prioritizing 99 Fishing XP over Cooking supplies.'
    }
  ],

  cooking: [
    {
      title: 'Lumbridge Range Permanent Burn Buff',
      badge: 'LOWEST F2P BURN RATE',
      howItWorks:
        'Completing Cook\'s Assistant permanently lowers burn rates on the Lumbridge Castle Ground Floor Range compared to open fires or regular ranges.',
      howToUse:
        'Always cook Lobsters, Tuna, and Swordfish on the Lumbridge Castle Ground Floor Range using the Combat Academy bank chest right outside.'
    },
    {
      title: 'Cooking Urns (+20% XP)',
      badge: '+20% XP PER BATCH',
      howItWorks:
        'Cooking Urns fill passively with every successful cook (requires Fire Runes) and teleport away for +20% Cooking XP.',
      howToUse:
        'Carry 5–10 Cooking Urns (with Fire Runes attached) and enable Auto-Teleport in Settings.'
    },
    {
      title: 'Spacebar Make-X Cooking Workflow',
      badge: 'FAST BANK PRESETS',
      howItWorks:
        'Loading Bank Preset [1] with 28 Raw Fish -> clicking the Range -> pressing Spacebar automates full-inventory cooking in two keystrokes.',
      howToUse:
        'Save a Bank Preset with 28 Raw Fish + Cooking Urns at Lumbridge Combat Academy chest for effortless cycles.'
    }
  ],

  crafting: [
    {
      title: 'Grum\'s Gold Exchange (Zero-Rune 60% Sell)',
      badge: '60% ALCH VALUE PRE-55 MAGIC',
      howItWorks:
        'Specialty shops in RS3 buy stocked items at static High Alchemy value (60%) without fluctuating prices! Grum\'s Gold Exchange in Port Sarim buys rings, necklaces, bracelets, and amulets.',
      howToUse:
        'Sell Gold/Sapphire/Emerald/Ruby jewellery directly to Grum in Port Sarim for full High Alch prices without spending a single Nature Rune!'
    },
    {
      title: 'Artisan Metal Bank for Gold & Silver Bars',
      badge: 'SHARED ACROSS ALL FURNACES',
      howItWorks:
        'Just like Smithing metals, smelted Gold and Silver Bars go directly into the global Metal Bank and can be pulled straight inside any furnace jewellery window.',
      howToUse:
        'Smelt Gold Ore at Edgeville Furnace into the Metal Bank, then bring only Cut Gems + Moulds (on Tool Belt) to craft twice as many Amulets per trip.'
    },
    {
      title: 'Gem Bag & Skilling Urn Crafting',
      badge: 'TEAMWIDE +20% XP',
      howItWorks:
        'The Daemonheim Gem Bag (2k tokens) holds 60 Uncut Gems per trip at Al Kharid Mine. Crafting Skilling Urns boosts 7 different skills by +20% XP for your entire team.',
      howToUse:
        'Unlock the Gem Bag early and keep Soft Clay stocked to fire Mining, Fishing, Cooking, Woodcutting & Prayer Urns.'
    }
  ],

  runecrafting: [
    {
      title: 'Runespan Yellow/Purple Node Priority',
      badge: '2X–4X FASTER THAN CREATURES',
      howItWorks:
        'Inside the Wizards\' Tower Runespan, siphoning floating Elemental/Chaotic Nodes (Cyclones, Mind Storms, Chaotic Clouds, Skulls, Souls) yields massive XP compared to regular Esshounds.',
      howToUse:
        'Use creatures only for starter Floating Essence, then hop platforms continuously toward sparkling yellow/purple Nodes.'
    },
    {
      title: 'Free Wicked Hood Daily Essence & Teleports',
      badge: 'FREE ESSENCE + ALTAR WARP',
      howItWorks:
        'Tam McGrubor NW of Burthorpe Lodestone hands out a free Wicked Hood in F2P — granting 100 free daily Rune/Pure Essence and free teleports to elemental altars.',
      howToUse:
        'Claim your Wicked Hood on Day 1 and feed it Air/Water/Earth/Fire Talismans (or Omni) for quick rune crafting runs.'
    },
    {
      title: 'Rune Goldberg Machine (50 RC Vis Wax)',
      badge: 'DAILY VIS WAX ENGINE',
      howItWorks:
        'At 50 Runecrafting, entering the Runecrafting Guild portal on Wizards\' Tower 1st floor unlocks the Rune Goldberg Machine to transmute cheap shop runes into Vis Wax daily.',
      howToUse:
        'Buy daily elemental/Mind/Body runes from Aubury & Carwen and run the Rune Goldberg Machine every day after reset for instant-cast Lodestone teleports & aura extensions.'
    }
  ],

  dungeoneering: [
    {
      title: 'Prestige System Rule (NEVER Reset Early!)',
      badge: 'CRITICAL XP MULTIPLIER',
      howItWorks:
        'Your floor XP depends equally on Floor XP and Prestige XP (equal to the highest number of unique floors completed before resetting). Resetting early permanently cuts your XP in half until refilled!',
      howToUse:
        'Complete EVERY single unlocked floor (1 through max floor) once so each has a checkmark, and ONLY then click "Reset" on your Ring of Kinship.'
    },
    {
      title: 'Complexity 1 Rush vs. Complexity 6 High Floors',
      badge: 'MAX TOKENS & XP/HR',
      howItWorks:
        'Low floors give tiny base XP regardless of Complexity, while your top 10–15 floors award huge XP scaled by Complexity 6 + party size.',
      howToUse:
        'Rush your bottom 50% of floors on Complexity 1 Small in ~2 minutes each, then run your top floors on Complexity 6 Medium/Large with your GIM squad.'
    },
    {
      title: 'Group & Personal Gatestone Teleports',
      badge: 'CUT FLOOR CLEAR TIME BY 40%',
      howItWorks:
        'Binding 125 Law Runes at the start of floors lets every player cast Create Gatestone + Teleport to eliminate backtracking across split corridors.',
      howToUse:
        'Always drop a Personal Gatestone at multi-door hubs and use the Group Gatestone whenever a teammate spots the Boss or Critical Key door.'
    }
  ],

  necromancy: [
    {
      title: 'Ritual Disturbances & Attraction',
      badge: 'HUGE BONUS RITUAL XP',
      howItWorks:
        'During City of Um Rituals, random events spawn around the platform (Wandering Souls, Sparking Glyphs, Corrupt Glyphs, Shambling Horrors). Clicking them grants massive burst Necromancy XP.',
      howToUse:
        'Stay focused during Lesser Communion rituals and click every disturbance immediately before it expires.'
    },
    {
      title: 'Conjure Ghost Healing & Finger of Death',
      badge: 'BUILT-IN SUSTAIN + BURST',
      howItWorks:
        'Conjure Vengeful Ghost heals you passively on every hit while attacking enemies alongside your Skeleton Warrior; Necrosis stacks power up Finger of Death bursts.',
      howToUse:
        'Keep Conjure Undead Army / Skeleton + Ghost active at the start of fights and put Soul Sap + Spectral Scythe on Revolution.'
    },
    {
      title: 'Kili\'s Tier 10 & Tier 20 Task Upgrades',
      badge: 'UNLOCKS TIER 20 GEAR',
      howItWorks:
        'Unlike Smithing, Necromancy weapons & armour upgrade via Kili\'s mini-quests inside City of Um using Soft Clay, Bronze Bars, Wool, Spider Silk, and Steel Bars.',
      howToUse:
        'Visit Kili west of Um Smithy as soon as you hit 10 and 20 Necromancy to craft your F2P-cap Tier 20 Death Guard & Deathwarden set.'
    }
  ],

  archaeology: [
    {
      title: 'Glowing Time Sprite (+20% XP & Precision)',
      badge: 'ALWAYS FOLLOW SPRITE',
      howItWorks:
        'A glowing blue Time Sprite hovers over one active excavation pile at a time, giving +20% Mattock Precision and +20% excavation XP while active.',
      howToUse:
        'Click the new excavation hotspot whenever the glowing Time Sprite flies to a nearby pile.'
    },
    {
      title: 'Soil Box & Campus Mesh Screening',
      badge: 'RECOVER MISSING MATERIALS',
      howItWorks:
        'As you excavate, Soil fills your Soil Box. Screening Soil at the Archaeology Campus Mesh turns Soil into extra Restoration Materials without spending GP.',
      howToUse:
        'Whenever you are 2–3 Third-Age Iron or Zarosian Insignia short of repairing a Damaged Artefact, screen your Soil Box at the Campus first.'
    },
    {
      title: 'Monolith Font of Life Activation',
      badge: '+500 HP FOR ALL F2P',
      howItWorks:
        'Turn in restored artefacts to Museum Collector Velucia to earn Chronotes, then spend 500 Chronotes at the Mysterious Monolith to unlock the Font of Life Relic.',
      howToUse:
        'At Level 5 Archaeology (~10 mins), activate Font of Life at the Monolith — it grants +500 Max HP across every activity in F2P!'
    }
  ],

  'trial-skills': [
    {
      title: 'Herblore 3–5 Attack Potions in F2P',
      badge: 'REAL F2P COMBAT BUFF',
      howItWorks:
        'Even though Herblore caps at Level 5 in F2P, Attack Potions (Level 3) are 100% brewable and drinkable by Free-to-Play accounts!',
      howToUse:
        'Save Grimy Guam Leaves from Burthorpe Trolls, buy Vials of Water & Eyes of Newt (3 GP) from Poletax in Taverley, and brew Attack Potions for bossing.'
    },
    {
      title: 'Wolf Whistle Permanent Charm Unlock',
      badge: 'START BANKING CHARMS DAY 1',
      howItWorks:
        'Monsters do not start dropping Gold, Green, Crimson, or Blue Charms until you complete Wolf Whistle in Taverley (boosts Summoning 1 -> 4).',
      howToUse:
        'Finish Wolf Whistle on Day 1 so every Giant, Cockroach, Hellhound, and Demon stacks Charms in your bank.'
    },
    {
      title: 'Clustered Burthorpe/Taverley +36 Total Levels',
      badge: '35-MINUTE FULL CAP',
      howItWorks:
        'All 9 Members\' preview skills (capped at Level 5 in F2P) have dedicated trainers, shops, patches, wisps, and agility obstacles clustered inside Burthorpe & Taverley.',
      howToUse:
        'Spend 35 minutes knocking out all 9 trial skills to Level 5 for +36 free Total Levels and Level 5 Agility run-regen speed.'
    }
  ]
};
