import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Search,
  ExternalLink,
  Hammer,
  ShieldCheck,
  Coins,
  BookOpen,
  ArrowLeft,
  Package
} from 'lucide-react';
import Badge from './Badge';
import { GeometricSvg } from './GeometricPattern';
import ItemText from './ItemText';
import { ITEMS_LIST, searchItems } from '../../data/itemLookup';
import { useItemLookup } from '../../context/ItemLookupContext';

const CATEGORIES = [
  'All',
  'Armour',
  'Weapon',
  'Salvage',
  'Tool',
  'Ore',
  'Bar',
  'Gem',
  'Jewellery',
  'Rune',
  'Food',
  'Urn',
  'Quest Item'
];

function formatGp(val) {
  if (val === null || val === undefined) return 'N/A';
  return `${Number(val).toLocaleString('en-US')} GP`;
}

function formatSkillMap(skills = {}) {
  const entries = Object.entries(skills);
  if (entries.length === 0) return [];
  return entries.map(([skill, lvl]) => `${lvl} ${skill}`);
}

export default function ItemLookupModal() {
  const {
    isOpen,
    selectedItem,
    initialBrowseQuery,
    setSelectedItem,
    closeModal
  } = useItemLookup();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (isOpen) {
      setQuery(initialBrowseQuery || '');
      if (!selectedItem) {
        setActiveCategory('All');
      }
    }
  }, [isOpen, initialBrowseQuery, selectedItem]);

  const filteredItems = useMemo(() => {
    const base = query.trim() ? searchItems(query) : ITEMS_LIST;
    if (activeCategory === 'All') return base;
    return base.filter(
      (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [query, activeCategory]);

  if (!isOpen) return null;

  const useSkillBadges = selectedItem
    ? formatSkillMap(selectedItem.useRequirements?.skills)
    : [];
  const craftSkillBadges = selectedItem?.craftingRequirements
    ? formatSkillMap(selectedItem.craftingRequirements.skills)
    : [];

  return (
    <div
      className="item-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={selectedItem ? `${selectedItem.name} Item Lookup` : 'RS3 Item Lookup Dictionary'}
      onClick={closeModal}
    >
      <div className="item-modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Blueprint Header */}
        <div className="item-modal-header">
          <GeometricSvg variant="grid" />
          <div className="item-modal-header-inner">
            <div className="item-modal-title-block">
              <div className="item-modal-kicker-row">
                <span className="meta-label">
                  {selectedItem
                    ? `ITEM // ${selectedItem.category.toUpperCase()}`
                    : 'SYS // ITEM DICTIONARY'}
                </span>
                {selectedItem && (
                  <>
                    <Badge variant={selectedItem.f2p ? 'emerald' : 'amber'}>
                      {selectedItem.f2p ? 'F2P' : 'MEMBERS / TRIAL'}
                    </Badge>
                    <Badge>{selectedItem.tradeable ? 'TRADEABLE' : 'UNTRADEABLE'}</Badge>
                    {selectedItem.stackable && <Badge>STACKABLE</Badge>}
                  </>
                )}
              </div>

              <h2 className="item-modal-title">
                {selectedItem
                  ? selectedItem.name
                  : `RS3 F2P Item Lookup (${ITEMS_LIST.length} Items)`}
              </h2>
            </div>

            <div className="item-modal-header-actions">
              {selectedItem && (
                <button
                  type="button"
                  className="pill-tab"
                  onClick={() => setSelectedItem(null)}
                  title="Browse all items in dictionary"
                >
                  <ArrowLeft size={13} />
                  <span>ALL ITEMS ({ITEMS_LIST.length})</span>
                </button>
              )}
              <button
                type="button"
                className="icon-btn"
                onClick={closeModal}
                aria-label="Close item lookup modal"
                title="Close (Esc)"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Search Bar inside Modal */}
        <div className="item-modal-search-bar">
          <div className="item-modal-search-input-wrap">
            <Search size={13} className="item-modal-search-icon" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (selectedItem && e.target.value.trim()) {
                  setSelectedItem(null);
                }
              }}
              placeholder="SEARCH ANY ITEM, ALIAS, OR GUIDE SOURCE..."
              aria-label="Search item dictionary"
            />
            {query && (
              <button
                type="button"
                className="sidebar-search-clear"
                onClick={() => setQuery('')}
                title="Clear item search"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Body: Either Detailed Item Inspector OR Searchable Index */}
        <div className="item-modal-body">
          {selectedItem ? (
            <div className="item-modal-detail-stack">
              {/* 4-Channel Pricing & Alchemy Grid */}
              <div className="liquidation-panel">
                <div className="liquidation-header">
                  <span className="meta-label">
                    <Coins size={11} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                    SELL PRICES &amp; ALCHEMY VALUES (RS3)
                  </span>
                  <span className="liquidation-legend">
                    Base Value: {formatGp(selectedItem.baseValue)}
                  </span>
                </div>

                <div className="liquidation-grid">
                  <div
                    className={`liquidation-cell ${
                      selectedItem.sellPrices.generalStore != null ? 'tone-info' : 'tone-muted'
                    }`}
                  >
                    <div className="liquidation-cell-label">GENERAL STORE (30%)</div>
                    <div className="liquidation-cell-value">
                      {formatGp(selectedItem.sellPrices.generalStore)}
                    </div>
                    <div className="liquidation-cell-note">
                      {selectedItem.sellPrices.generalStore != null
                        ? 'Flat 30% RS3 store rate'
                        : 'Cannot sell to General Store'}
                    </div>
                  </div>

                  <div
                    className={`liquidation-cell ${
                      selectedItem.sellPrices.specialtyShop ? 'tone-positive' : 'tone-muted'
                    }`}
                  >
                    <div className="liquidation-cell-label">SPECIALTY SHOP</div>
                    <div className="liquidation-cell-value">
                      {selectedItem.sellPrices.specialtyShop
                        ? formatGp(selectedItem.sellPrices.specialtyShop.price)
                        : 'N/A'}
                    </div>
                    <div className="liquidation-cell-note">
                      {selectedItem.sellPrices.specialtyShop
                        ? selectedItem.sellPrices.specialtyShop.shop
                        : selectedItem.sellPrices.shopNote || 'Not stocked at specialty shop'}
                    </div>
                  </div>

                  <div
                    className={`liquidation-cell ${
                      selectedItem.alchPrices.alchable ? 'tone-info' : 'tone-muted'
                    }`}
                  >
                    <div className="liquidation-cell-label">LOW ALCH (21 MAG • 40%)</div>
                    <div className="liquidation-cell-value">
                      {selectedItem.alchPrices.alchable
                        ? formatGp(selectedItem.alchPrices.lowAlch)
                        : 'Not Alchable'}
                    </div>
                    <div className="liquidation-cell-note">
                      {selectedItem.alchPrices.alchable
                        ? 'Requires 1 Nature Rune'
                        : 'Cannot cast Alchemy'}
                    </div>
                  </div>

                  <div
                    className={`liquidation-cell ${
                      selectedItem.alchPrices.alchable ? 'tone-positive' : 'tone-muted'
                    }`}
                  >
                    <div className="liquidation-cell-label">HIGH ALCH (55 MAG • 60%)</div>
                    <div className="liquidation-cell-value">
                      {selectedItem.alchPrices.alchable
                        ? formatGp(selectedItem.alchPrices.highAlch)
                        : 'Not Alchable'}
                    </div>
                    <div className="liquidation-cell-note">
                      {selectedItem.alchPrices.alchable
                        ? 'Requires 1 Nature + 5 Fire (or Fire Staff)'
                        : 'Cannot cast Alchemy'}
                    </div>
                  </div>
                </div>

                {selectedItem.sellPrices.shopNote && selectedItem.sellPrices.specialtyShop && (
                  <div className="item-modal-shop-note">{selectedItem.sellPrices.shopNote}</div>
                )}
              </div>

              {/* 2-Column Use & Crafting Requirements */}
              <div className="dense-grid-2">
                <div className="sub-surface">
                  <div className="sub-surface-header">
                    <span className="sub-surface-title">
                      <ShieldCheck size={13} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                      Use &amp; Equip Requirements
                    </span>
                    <Badge>USE REQS</Badge>
                  </div>

                  <div className="badge-row">
                    {useSkillBadges.length > 0 ? (
                      useSkillBadges.map((label) => (
                        <Badge key={label} variant="amber">
                          {label}
                        </Badge>
                      ))
                    ) : (
                      <Badge>No Skill Req</Badge>
                    )}

                    {(selectedItem.useRequirements?.quests || []).map((q) => (
                      <Badge key={q} variant="indigo">
                        Quest: {q}
                      </Badge>
                    ))}
                  </div>

                  <p className="card-desc">
                    <ItemText>{selectedItem.useRequirements?.notes || 'No special requirements.'}</ItemText>
                  </p>
                </div>

                <div className="sub-surface">
                  <div className="sub-surface-header">
                    <span className="sub-surface-title">
                      <Hammer size={13} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                      Crafting / Gathering Requirements
                    </span>
                    <Badge>
                      {selectedItem.craftingRequirements ? 'CRAFTABLE' : 'DROP / SHOP'}
                    </Badge>
                  </div>

                  {selectedItem.craftingRequirements ? (
                    <>
                      <div className="badge-row">
                        {craftSkillBadges.length > 0 ? (
                          craftSkillBadges.map((label) => (
                            <Badge key={label} variant="blue">
                              {label}
                            </Badge>
                          ))
                        ) : (
                          <Badge>Level 1 / None</Badge>
                        )}
                        <Badge>{selectedItem.craftingRequirements.station}</Badge>
                        {(selectedItem.craftingRequirements.quests || []).map((q) => (
                          <Badge key={q} variant="indigo">
                            Quest: {q}
                          </Badge>
                        ))}
                      </div>

                      <div className="item-modal-materials">
                        <span className="meta-label">MATERIALS:</span>{' '}
                        <span>
                          {selectedItem.craftingRequirements.materials.map((mat, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && ' + '}
                              <ItemText>{mat}</ItemText>
                            </React.Fragment>
                          ))}
                        </span>
                      </div>

                      {selectedItem.craftingRequirements.notes && (
                        <p className="card-desc">
                          <ItemText>{selectedItem.craftingRequirements.notes}</ItemText>
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="card-desc">
                      Not player-crafted. Obtained from PvM drops, NPC shops, D&amp;Ds, or quest rewards.
                    </p>
                  )}
                </div>
              </div>

              {/* Aliases, Guide Sources & Wiki Link */}
              <div className="sub-surface">
                <div className="item-modal-meta-rows">
                  {selectedItem.aliases && selectedItem.aliases.length > 0 && (
                    <div>
                      <span className="meta-label">ALSO REFERENCED AS:</span>{' '}
                      <span className="item-modal-muted-val">
                        {selectedItem.aliases.join(' • ')}
                      </span>
                    </div>
                  )}

                  {selectedItem.guideSources && selectedItem.guideSources.length > 0 && (
                    <div className="item-modal-sources-row">
                      <span className="meta-label">
                        <BookOpen size={11} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        GUIDE SOURCES:
                      </span>
                      <div className="badge-row">
                        {selectedItem.guideSources.map((src) => (
                          <Badge key={src}>{src}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="item-modal-footer-row">
                  <span className="meta-label">
                    VERIFIED ON RUNESCAPE.WIKI ({selectedItem.lastVerified})
                  </span>
                  <a
                    href={selectedItem.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prereq-link-btn"
                  >
                    <span>OPEN RUNESCAPE WIKI</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Searchable Dictionary Browser Mode */
            <div className="item-modal-browser-stack">
              <div className="filter-bar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`pill-tab ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="item-browser-count meta-label">
                SHOWING {filteredItems.length} OF {ITEMS_LIST.length} ITEMS
              </div>

              {filteredItems.length === 0 ? (
                <p className="empty-state">No items match "{query}".</p>
              ) : (
                <div className="item-browser-grid">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="item-browser-card"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="item-browser-card-top">
                        <span className="item-browser-name">
                          <Package size={12} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                          {item.name}
                        </span>
                        <Badge>{item.category}</Badge>
                      </div>
                      <div className="item-browser-card-metrics">
                        <span>
                          GS: <strong>{formatGp(item.sellPrices.generalStore)}</strong>
                        </span>
                        <span className={item.alchPrices.alchable ? 'gp-positive' : ''}>
                          HA:{' '}
                          <strong>
                            {item.alchPrices.alchable
                              ? formatGp(item.alchPrices.highAlch)
                              : 'N/A'}
                          </strong>
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
