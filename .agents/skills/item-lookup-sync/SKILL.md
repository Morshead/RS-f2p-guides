---
name: item-lookup-sync
description: >-
  Audits guide updates for items missing from the global RS3 item lookup
  dictionary (src/data/itemLookup.js), searches runescape.wiki via web search
  for RuneScape 3 sell prices, alch prices, use requirements, and crafting
  requirements, and adds missing entries. Use this skill whenever creating,
  editing, or updating any guide or data file in src/data/.
---

# Item Lookup Sync Skill

Whenever you add, edit, or update any skill, PvM, money-making, or quest guide in `src/data/` (`guideData.js`, `pvmData.js`, `skillMethodsSkilling.js`, `skillMethodsCombat.js`, `skillMechanicsData.js`), ensure every referenced RuneScape 3 item exists in the global dictionary at [itemLookup.js](../../../src/data/itemLookup.js).

## Workflow

1. **Identify Guide Changes & Run the Audit Script**
   - Review all item names added or modified in `src/data/` (including `lootDrops`, `TOP_F2P_LOOT_HIGHLIGHTS`, `itemsNeeded`, `rewards`, `method`, `prereqs`, `whereToSell`, and `steps`).
   - Run the automated audit script from the repository root:
     ```bash
     node .agents/skills/item-lookup-sync/scripts/audit-guide-items.mjs
     ```
   - Also inspect any newly added free-form item mentions (e.g., quest items, food, potions, tools, Dungeoneering rewards, or Archaeology/Necromancy supplies) that may not match generic regex patterns.

2. **Web-Search Missing Items for RS3 Data**
   - For every item in the guide that does not resolve in `ITEMS_DICTIONARY` / `lookupItem(...)`, perform a `search_web` query targeting `runescape.wiki` with RuneScape 3 context:
     - Example query: `RS3 "<item name>" value high alchemy low alchemy sell price requirements crafting runescape.wiki`
   - **Verify RS3 vs. OSRS / Pre-Rework Fandom:**
     - Always prefer **RuneScape 3** (`runescape.wiki`) post-Mining & Smithing rework values over Old School RuneScape (`oldschool.runescape.wiki`) or legacy pre-2019 `fandom.com` tables.
     - RS3 General Store sell price = `30%` of base value (`Math.floor(baseValue * 0.3)`), Low Alch = `40%`, High Alch = `60%`.
     - Post-rework smithed Rune items alch at `500 GP × total bars used` (e.g., Rune platebody +3 = 40 bars = 20,000 GP High Alch), and Adamant items at `200 GP × total bars used`.
     - Specialty shops in RS3 reject `+1/+2/+3` upgraded smithed gear and Salvage, buying only stocked base (`+0`) items.

3. **Add Verified Entries to `src/data/itemLookup.js`**
   - Add each missing item to `ITEMS_LIST` in [itemLookup.js](../../../src/data/itemLookup.js) using `makeItem(...)` (and `alchFromHigh(...)` when alchable):
     - `id`: kebab-case canonical slug (e.g., `'rune-platebody-3'`)
     - `name`: canonical RS3 item name
     - `aliases`: alternative spellings, plurals, or shorthand names used in the guides
     - `category`: `'Ore' | 'Bar' | 'Tool' | 'Weapon' | 'Armour' | 'Salvage' | 'Gem' | 'Jewellery' | 'Log' | 'Ammunition' | 'Rune' | 'Runecrafting' | 'Hide / Leather' | 'Raw Food' | 'Food' | 'Herb' | 'Potion' | 'Prayer' | 'Summoning' | 'Urn' | 'Boss / Clue Loot' | 'Archaeology Material' | 'Necromancy Supply' | 'Quest Item' | 'Misc'`
     - `f2p`, `tradeable`, `stackable`: booleans
     - `baseValue`, `sellPrices` (`generalStore`, `specialtyShop`, `shopNote`), `alchPrices` (`alchable`, `lowAlch`, `highAlch`)
     - `useRequirements`: `{ skills: {...}, quests: [...], notes: '...' }`
     - `craftingRequirements`: `{ skills: {...}, materials: [...], station: '...', quests: [...], notes: '...' }` or `null`
     - `guideSources`: array of guide sections referencing the item
     - `wikiUrl`: `https://runescape.wiki/w/...`
     - `lastVerified`: ISO date (`YYYY-MM-DD`)

4. **Validate Before Finishing**
   - Re-run `node .agents/skills/item-lookup-sync/scripts/audit-guide-items.mjs` and confirm it exits with code `0` (`PASS`).
   - Run `npm run build` to confirm the Vite bundle builds cleanly with no import or syntax errors.
