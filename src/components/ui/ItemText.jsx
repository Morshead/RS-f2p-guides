import React from 'react';
import { ITEMS_LIST, lookupItem } from '../../data/itemLookup';
import { useItemLookup } from '../../context/ItemLookupContext';

// Single-word generic adjectives/nouns that should NOT trigger freeform prose
// links on their own unless paired with a specific item noun (e.g. "Iron ore").
const AMBIGUOUS_SINGLE_WORDS = new Set([
  'iron',
  'copper',
  'tin',
  'gold',
  'silver',
  'bronze',
  'steel',
  'mithril',
  'adamant',
  'rune',
  'runite',
  'sapphire',
  'emerald',
  'ruby',
  'diamond',
  'logs',
  'hammer',
  'stake',
  'guam',
  'nats',
  'mystic',
  'talismans',
  'potatoes',
  'potato',
  'bread',
  'beer',
  'silk',
  'bone',
  'bones',
  'planks',
  'plank',
  'feather',
  'pickaxe',
  'hatchet',
  'knife',
  'chisel',
  'tinderbox',
  'shortbow',
  'shieldbow',
  'batwing'
]);

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Build longest-first matcher once at module load
const { MATCH_REGEX, TERM_TO_ITEM } = (() => {
  const termMap = new Map();

  for (const item of ITEMS_LIST) {
    const candidates = [item.name, ...(item.aliases || [])];
    for (const raw of candidates) {
      if (!raw) continue;
      const trimmed = raw.trim();
      const lower = trimmed.toLowerCase();
      const isSingleWord = !/\s/.test(trimmed);
      if (isSingleWord && AMBIGUOUS_SINGLE_WORDS.has(lower)) continue;
      if (lower.length < 3) continue;
      if (!termMap.has(lower)) {
        termMap.set(lower, item);
      }
      // Also allow "+ 3" vs "+3" spacing variants
      if (/\+\s*[123]/.test(lower)) {
        const compact = lower.replace(/\s*\+\s*/g, ' +');
        const spaced = lower.replace(/\s*\+\s*/g, ' + ');
        if (!termMap.has(compact)) termMap.set(compact, item);
        if (!termMap.has(spaced)) termMap.set(spaced, item);
      }
    }
  }

  const sortedTerms = [...termMap.keys()].sort((a, b) => b.length - a.length);
  const pattern = sortedTerms.map(escapeRegex).join('|');
  const regex = new RegExp(`(?<![A-Za-z0-9+])(${pattern})(?![A-Za-z0-9+])`, 'gi');

  return { MATCH_REGEX: regex, TERM_TO_ITEM: termMap };
})();

/**
 * Resolves compound item labels used in PvM loot tables & quest item lists, e.g.:
 * - "Nature, Law, Cosmic & Death Runes"
 * - "Medium / Large / Huge Rune Salvage"
 * - "Gud Raider Chainbody / Axe / Shield"
 * - "Dragon Rider Boots / Gloves"
 * - "Mole Skins / Claws"
 */
function renderCompoundTokens(text, openItem) {
  // Split while preserving delimiters so the exact original wording stays intact
  const parts = text.split(/(\s*(?:,|&|\+|\/)\s*)/);
  if (parts.length <= 1) return null;

  const plainSegments = parts.filter((_, idx) => idx % 2 === 0);
  const lastPlain = (plainSegments[plainSegments.length - 1] || '')
    .replace(/\([^)]*\)/g, '')
    .trim();
  const firstPlain = (plainSegments[0] || '').replace(/\([^)]*\)/g, '').trim();

  // Detect shared trailing noun like "Runes", "Talismans", "Beads", "Rune Salvage"
  const suffixMatch = lastPlain.match(
    /\b((?:Blunt\s+)?Rune\s+Salvage|Runes|Talismans|Beads|Ore|Logs|Salvage|Arrows)\b/i
  );
  const sharedSuffix = suffixMatch ? suffixMatch[1] : null;

  // Detect shared prefix like "Gud Raider Chainbody / Axe / Shield"
  const firstWords = firstPlain.split(/\s+/);
  const sharedPrefix =
    firstWords.length >= 2 &&
    !/^(Noted|Raw|Medium|Large|Huge|Small|Grimy|Red)$/i.test(firstWords[0])
      ? firstWords.slice(0, -1).join(' ')
      : null;

  let anyCompoundResolved = false;
  const rendered = parts.map((seg, idx) => {
    if (idx % 2 === 1) return <React.Fragment key={idx}>{seg}</React.Fragment>;

    const cleaned = seg
      .replace(/\([^)]*\)/g, '')
      .replace(/\b\d+(?:–\d+)?x?\b/gi, '')
      .replace(/\bnoted\b/gi, '')
      .trim();

    let resolved = lookupItem(cleaned) || lookupItem(cleaned.replace(/s$/i, ''));

    if (!resolved && sharedSuffix && cleaned && !cleaned.includes(' ')) {
      resolved =
        lookupItem(`${cleaned} ${sharedSuffix}`) ||
        lookupItem(`${cleaned} ${sharedSuffix.replace(/s$/i, '')}`);
    }
    if (!resolved && sharedPrefix && cleaned && !cleaned.includes(' ')) {
      resolved =
        lookupItem(`${sharedPrefix} ${cleaned}`) ||
        lookupItem(`${sharedPrefix} ${cleaned.replace(/s$/i, '')}`);
    }
    if (!resolved && sharedSuffix && /^(Medium|Large|Huge)$/i.test(cleaned)) {
      resolved = lookupItem(`${cleaned} blunt rune salvage`);
    }
    if (!resolved && /^Robe Top$/i.test(cleaned)) {
      resolved = lookupItem('Wizard robe top');
    }

    if (resolved) {
      anyCompoundResolved = true;
      return (
        <button
          key={idx}
          type="button"
          className="item-inline-link"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            openItem(resolved);
          }}
          title={`Inspect ${resolved.name} (Prices, Alch, Requirements)`}
        >
          {seg}
        </button>
      );
    }

    // Fallback to normal inline scanner on this segment
    return (
      <React.Fragment key={idx}>
        {renderInlineMatches(seg, openItem, `seg-${idx}`)}
      </React.Fragment>
    );
  });

  return anyCompoundResolved ? rendered : null;
}

function renderInlineMatches(text, openItem, keyPrefix = 'm') {
  if (!text || typeof text !== 'string') return text;

  const nodes = [];
  let lastIndex = 0;
  MATCH_REGEX.lastIndex = 0;

  let match;
  let count = 0;
  while ((match = MATCH_REGEX.exec(text)) !== null) {
    const matchedText = match[0];
    const start = match.index;
    const item = TERM_TO_ITEM.get(matchedText.toLowerCase());
    if (!item) continue;

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start));
    }

    nodes.push(
      <button
        key={`${keyPrefix}-${count++}-${start}`}
        type="button"
        className="item-inline-link"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          openItem(item);
        }}
        title={`Inspect ${item.name} (Prices, Alch, Requirements)`}
      >
        {matchedText}
      </button>
    );

    lastIndex = start + matchedText.length;
  }

  if (lastIndex === 0) return text;
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

/**
 * Renders guide text with clickable item links that open ItemLookupModal.
 * Pass `compound` for structured drop/item lists like "Nature, Law & Death Runes".
 */
export default function ItemText({ children, text, compound = false }) {
  const { openItem } = useItemLookup();
  const content = text ?? children;

  if (typeof content !== 'string') {
    return <>{content}</>;
  }

  if (compound) {
    const compoundRendered = renderCompoundTokens(content, openItem);
    if (compoundRendered) return <>{compoundRendered}</>;
  }

  return <>{renderInlineMatches(content, openItem)}</>;
}
