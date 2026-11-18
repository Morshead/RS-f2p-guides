# Project Rules

## UI & Design System

Whenever you create, edit, or restyle any UI components, pages, layouts, or CSS files in this project, read and follow the [`monospace-blueprint-design`](./.agents/skills/monospace-blueprint-design/SKILL.md) skill strictly (monospace `JetBrains Mono` typography, grayscale `#F3F4F6` / `#FFFFFF` / `#FAFAFA` / `#E5E7EB` / `#111827` palette, `1px` borders, low-opacity geometric SVG patterns, and zero photography).

## Item Lookup Sync

Whenever you create, edit, or update any guide or data file in `src/data/`, read and follow the [`item-lookup-sync`](./.agents/skills/item-lookup-sync/SKILL.md) skill: run `node .agents/skills/item-lookup-sync/scripts/audit-guide-items.mjs`, search `runescape.wiki` via web search for any items referenced in the guide that are missing from `src/data/itemLookup.js` (gathering sell prices, alch prices, use requirements, and crafting requirements), and add them before finishing.

## GitHub Upload Confirmation

Whenever you create, edit, or delete files in this project, follow the [`github-auto-upload`](./.agents/skills/github-auto-upload/SKILL.md) skill:

1. Run `git status --short --branch` as a standalone command and draft a descriptive commit comment directly related to the changes made.
2. Ask the user **once**: *"Do you want to push these changes to GitHub?"* (including the proposed commit comment).
3. Once the user responds affirmatively, automatically execute each Git command as its own **separate tool call** (never chained on one line with `;` or `&&`):
   - `git add -A`
   - `git commit -m "<comment>"`
   - `git push`
   - `git status --short --branch`
