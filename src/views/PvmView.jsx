import React, { useState, useMemo, useEffect } from 'react';
import {
  Swords,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  CheckSquare,
  Cpu,
  Trophy,
  Clock
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import CollapsibleSection from '../components/ui/CollapsibleSection';
import BlueprintMap from '../components/ui/BlueprintMap';
import { PVM_BRACKETS, TOP_F2P_LOOT_HIGHLIGHTS, TOP_F2P_AFK_SPOTS } from '../data/guideData';

const PVM_FILTERS = [
  'All',
  'AFK / Aggressive',
  'CB 3–25',
  'CB 25–45',
  'CB 45–65',
  'CB 65–80',
  'CB 80–95',
  'CB 95–126+'
];

export default function PvmView({
  selectedItemId,
  onSelectPvm,
  onNavigate,
  previousNav,
  onReturnPrevious,
  searchQuery
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openBrackets, setOpenBrackets] = useState({ 'cb-3-25': true });
  const [selectedOptionByBracket, setSelectedOptionByBracket] = useState({});
  const q = searchQuery.trim().toLowerCase();

  // Keep selected Combat Bracket expanded when clicked from Sidebar or cross-link
  useEffect(() => {
    if (!selectedItemId || selectedItemId === 'all') return;
    const match = PVM_BRACKETS.find((b) => b.id === selectedItemId);
    if (match) {
      setActiveFilter('All');
      setOpenBrackets((prev) => ({ ...prev, [match.id]: true }));
    }
  }, [selectedItemId]);

  const sortedBrackets = useMemo(() => {
    return [...PVM_BRACKETS]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .filter((bracket) => {
        if (selectedItemId && selectedItemId !== 'all' && bracket.id !== selectedItemId) {
          return false;
        }
        if (activeFilter === 'AFK / Aggressive') {
          const hasAfkOrAggro = bracket.options.some((opt) => opt.isAfk || opt.isAggressive);
          if (!hasAfkOrAggro) return false;
        } else if (activeFilter !== 'All' && bracket.combatRange !== activeFilter) {
          return false;
        }
        if (!q) return true;
        return (
          bracket.name.toLowerCase().includes(q) ||
          bracket.combatRange.toLowerCase().includes(q) ||
          bracket.title.toLowerCase().includes(q) ||
          bracket.options.some(
            (opt) =>
              opt.name.toLowerCase().includes(q) ||
              opt.shortName.toLowerCase().includes(q) ||
              opt.location.toLowerCase().includes(q) ||
              opt.lootDrops.some(
                (d) =>
                  d.item.toLowerCase().includes(q) ||
                  d.ironmanUseAndSell.toLowerCase().includes(q)
              )
          )
        );
      });
  }, [selectedItemId, activeFilter, q]);

  const handleToggleBracket = (bracketId) => {
    setOpenBrackets((prev) => ({ ...prev, [bracketId]: !prev[bracketId] }));
  };

  const handleSetAllBrackets = (expand) => {
    const next = {};
    PVM_BRACKETS.forEach((b) => {
      next[b.id] = expand;
    });
    setOpenBrackets(next);
  };

  const handleSelectOptionTab = (bracketId, optIdx) => {
    setSelectedOptionByBracket((prev) => ({ ...prev, [bracketId]: optIdx }));
  };

  const handleJumpToDrop = (bracketId, optionIdx) => {
    setActiveFilter('All');
    if (selectedItemId !== 'all' && selectedItemId !== bracketId) {
      onSelectPvm('all');
    }
    setOpenBrackets((prev) => ({ ...prev, [bracketId]: true }));
    setSelectedOptionByBracket((prev) => ({ ...prev, [bracketId]: optionIdx }));
    setTimeout(() => {
      const el = document.getElementById(`pvm-bracket-${bracketId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const totalOptionsCount = PVM_BRACKETS.reduce(
    (acc, b) => acc + b.options.length,
    0
  );

  const focusedBracket =
    selectedItemId && selectedItemId !== 'all'
      ? PVM_BRACKETS.find((b) => b.id === selectedItemId)
      : null;

  return (
    <div className="view-stack">
      <SectionHeader
        icon={Swords}
        title={
          focusedBracket
            ? focusedBracket.name
            : 'F2P PvM & Boss Loot (Sorted by Combat Level)'
        }
        subtitle={
          focusedBracket
            ? `${focusedBracket.combatRange} • ${focusedBracket.options.length} Monster & Boss Options • ${focusedBracket.title}`
            : `Sorted ascending from CB 3 to CB 126+ across ${PVM_BRACKETS.length} combat brackets (${totalOptionsCount} monsters & bosses) with highlighted Ironman drops, High Alch values, and route maps.`
        }
        filters={focusedBracket ? undefined : PVM_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        actions={
          <div className="nav-action-group">
            {previousNav && onReturnPrevious && (
              <button
                type="button"
                className="pill-tab active"
                onClick={onReturnPrevious}
              >
                <ArrowLeft size={13} />
                <span>Return to {previousNav.label}</span>
              </button>
            )}
            {focusedBracket && (
              <button
                type="button"
                className="pill-tab"
                onClick={() => onSelectPvm('all')}
              >
                <ArrowLeft size={13} />
                <span>All Combat Brackets</span>
              </button>
            )}
          </div>
        }
      />

      {/* Most Wanted F2P Ironman Drops Quick Reference (shown in full view) */}
      {!focusedBracket && (
        <GlassCard
          icon={Trophy}
          title="Most Wanted F2P Ironman Loot Drops"
          subtitle="Click any source button to automatically expand that Combat Level bracket and switch directly to that monster/boss tab"
          badge={<Badge>{TOP_F2P_LOOT_HIGHLIGHTS.length} Priority Drops</Badge>}
        >
          <div className="table-wrap">
            <table className="compact-table">
              <thead>
                <tr>
                  <th>Notable Drop</th>
                  <th>Combat Bracket &amp; Target</th>
                  <th style={{ width: '215px' }}>Value / Unlock</th>
                  <th>Why It Matters for Ironman / GIM</th>
                </tr>
              </thead>
              <tbody>
                {TOP_F2P_LOOT_HIGHLIGHTS.map((highlight, idx) => (
                  <tr key={idx}>
                    <td className="method-cell">{highlight.item}</td>
                    <td>
                      <button
                        type="button"
                        className="prereq-link-btn"
                        onClick={() =>
                          handleJumpToDrop(
                            highlight.bracketId,
                            highlight.optionIdx
                          )
                        }
                      >
                        <span>{highlight.source}</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </td>
                    <td>
                      <Badge variant="emerald" mono>
                        {highlight.value}
                      </Badge>
                    </td>
                    <td className="notes-cell">{highlight.whyItMatters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      )}

      {/* Best F2P Ironman AFK Combat Spots (shown in full view) */}
      {!focusedBracket && (
        <GlassCard
          icon={Clock}
          title="Best F2P Ironman AFK Combat Spots"
          subtitle="Naturally aggressive monsters (10-minute aggro timer) and low-damage rooms for Revolution++ AFK training"
          badge={<Badge variant="cyan">{TOP_F2P_AFK_SPOTS.length} AFK Spots</Badge>}
          className="afk-highlight-card"
        >
          <div style={{ marginBottom: '12px' }}>
            <CalloutBanner label="F2P AFK Mechanics" variant="cyan">
              F2P has no Aggression Potions or Soul Split — camp naturally aggressive multi-combat mobs with Revolution++ AoE abilities (Cleave / Hurricane / Chain / Ricochet), and step out/in every 10 minutes to reset aggression.
            </CalloutBanner>
          </div>
          <div className="table-wrap">
            <table className="compact-table">
              <thead>
                <tr>
                  <th>AFK Location</th>
                  <th>Combat Bracket / Target</th>
                  <th>Sustain &amp; Food</th>
                  <th>XP/hr &amp; Ironman Drops</th>
                  <th>Why It Works AFK</th>
                </tr>
              </thead>
              <tbody>
                {TOP_F2P_AFK_SPOTS.map((afk, idx) => (
                  <tr key={idx}>
                    <td className="method-cell">{afk.spot}</td>
                    <td>
                      <button
                        type="button"
                        className="prereq-link-btn"
                        onClick={() => {
                          if (afk.skillLink) {
                            onNavigate(
                              afk.skillLink.section,
                              afk.skillLink.itemId,
                              afk.skillLink.bracket,
                              { section: 'pvm', itemId: 'all', label: 'PvM & Drops' }
                            );
                          } else {
                            handleJumpToDrop(afk.bracketId, afk.optionIdx);
                          }
                        }}
                      >
                        <span>{afk.bracketLabel}</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </td>
                    <td>
                      <Badge variant="cyan">{afk.sustain}</Badge>
                    </td>
                    <td className="notes-cell">{afk.xpAndDrops}</td>
                    <td className="notes-cell">{afk.whyAfk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      )}

      {/* Sorted Combat Level Bracket Dropdowns */}
      <GlassCard
        title="PvM Progression by Combat Level (CB 3 → CB 126+)"
        subtitle="Expand any Combat Level bracket to toggle between Recommended and Alternative monster/boss options, inspect loot tables, and view blueprint maps."
        headerRight={
          <div className="nav-action-group">
            <Badge>{sortedBrackets.length} Brackets</Badge>
            <button
              type="button"
              className="text-action-btn"
              onClick={() => handleSetAllBrackets(true)}
            >
              Expand All
            </button>
            <button
              type="button"
              className="text-action-btn"
              onClick={() => handleSetAllBrackets(false)}
            >
              Collapse All
            </button>
          </div>
        }
      >
        {sortedBrackets.length === 0 ? (
          <p className="empty-state">
            No combat brackets or loot drops match your current filter or search query.
          </p>
        ) : (
          <div className="bracket-stack">
            {sortedBrackets.map((bracket) => {
              const isAfkFilter = activeFilter === 'AFK / Aggressive';
              const indexedOptions = bracket.options
                .map((opt, optIdx) => ({ opt, optIdx }))
                .filter(({ opt }) => !isAfkFilter || opt.isAfk || opt.isAggressive);

              const storedIdx = selectedOptionByBracket[bracket.id] ?? 0;
              const matchedEntry =
                indexedOptions.find((item) => item.optIdx === storedIdx) ||
                indexedOptions[0];
              const activeOptIdx = matchedEntry ? matchedEntry.optIdx : 0;
              const activeOption = bracket.options[activeOptIdx];
              const isOpen = !!openBrackets[bracket.id] || !!focusedBracket || isAfkFilter;
              const afkCount = bracket.options.filter((o) => o.isAfk || o.isAggressive).length;

              const returnCtx = {
                section: 'pvm',
                itemId: bracket.id,
                label: bracket.combatRange
              };

              return (
                <div
                  key={bracket.id}
                  id={`pvm-bracket-${bracket.id}`}
                  className={`bracket-dropdown ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="bracket-dropdown-trigger"
                    onClick={() => handleToggleBracket(bracket.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="bracket-trigger-left">
                      {isOpen ? (
                        <ChevronDown size={15} />
                      ) : (
                        <ChevronRight size={15} />
                      )}
                      <span className="bracket-level-pill">
                        {bracket.combatRange}
                      </span>
                      <div className="bracket-trigger-titles">
                        <span className="bracket-rec-title">
                          {bracket.title}
                        </span>
                        <span className="bracket-rec-sub">
                          Active Tab: {activeOption.name} (Monster CB {activeOption.monsterCb})
                        </span>
                      </div>
                    </div>

                    <div className="bracket-trigger-right">
                      {afkCount > 0 && (
                        <Badge variant="cyan">{afkCount} AFK / AGGRO</Badge>
                      )}
                      <Badge>{indexedOptions.length} OPTIONS</Badge>
                      <Badge>CB {activeOption.monsterCb}</Badge>
                      <Badge
                        variant={activeOption.gpTrend === 'negative' ? 'red' : 'emerald'}
                        mono
                      >
                        {activeOption.gpPerHour}
                      </Badge>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bracket-dropdown-body">
                      {/* Multi-Option Togglable Monster/Boss Tabs */}
                      <div className="method-tabs-bar" role="tablist">
                        {indexedOptions.map(({ opt, optIdx }) => {
                          const isActiveTab = optIdx === activeOptIdx;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              role="tab"
                              aria-selected={isActiveTab}
                              className={`method-tab-btn ${
                                isActiveTab ? 'active' : ''
                              } ${opt.isAfk || opt.isAggressive ? 'method-tab-afk' : ''}`.trim()}
                              onClick={() =>
                                handleSelectOptionTab(bracket.id, optIdx)
                              }
                            >
                              <span className="method-rec-tag">
                                {optIdx === 0 ? '★ REC' : `OPT ${optIdx}`}
                              </span>
                              <span>
                                {opt.shortName} (CB {opt.monsterCb})
                              </span>
                              {(opt.isAfk || opt.isAggressive) && (
                                <span className="method-afk-pill">
                                  {opt.isAfk ? 'AFK' : 'AGGRO'}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Active Monster/Boss Panel */}
                      <div className="method-panel">
                        <p className="card-desc">{activeOption.overview}</p>

                        <div className="method-telemetry-grid">
                          <div className="telemetry-box">
                            <div className="telemetry-label">
                              MONSTER COMBAT &amp; LP
                            </div>
                            <div className="telemetry-value">
                              CB {activeOption.monsterCb} •{' '}
                              {activeOption.lifepoints}
                            </div>
                          </div>

                          <div className="telemetry-box">
                            <div className="telemetry-label">
                              WEAKNESS &amp; AGGRO
                            </div>
                            <div className="telemetry-value">
                              {activeOption.weakness} • {activeOption.aggression}
                            </div>
                          </div>

                          <div className="telemetry-box">
                            <div className="telemetry-label">
                              ESTIMATED GP / HOUR
                            </div>
                            <div className="telemetry-value">
                              <Badge variant="emerald" mono>
                                {activeOption.gpPerHour}
                              </Badge>
                            </div>
                          </div>

                          <div className="telemetry-box">
                            <div className="telemetry-label">LOCATION</div>
                            <div className="telemetry-value">
                              {activeOption.location}
                            </div>
                          </div>
                        </div>

                        {/* Highlighted Good Loot Drops Table */}
                        <div className="sub-surface">
                          <div className="sub-surface-header">
                            <span className="sub-surface-title">
                              Highlighted Loot Drops &amp; Ironman Liquidation
                            </span>
                            <Badge>{activeOption.lootDrops.length} Drops</Badge>
                          </div>
                          <div className="table-wrap">
                            <table className="compact-table">
                              <thead>
                                <tr>
                                  <th>Loot Drop</th>
                                  <th style={{ width: '150px' }}>Rarity</th>
                                  <th style={{ width: '190px' }}>
                                    Value / Unlock
                                  </th>
                                  <th>Ironman Use &amp; Where to Sell</th>
                                </tr>
                              </thead>
                              <tbody>
                                {activeOption.lootDrops.map((drop, dIdx) => (
                                  <tr
                                    key={dIdx}
                                    className={
                                      drop.isHighlight ? 'loot-highlight-row' : ''
                                    }
                                  >
                                    <td>
                                      <div className="method-cell">
                                        {drop.item}{' '}
                                        {drop.isHighlight && (
                                          <Badge>★ TOP DROP</Badge>
                                        )}
                                      </div>
                                    </td>
                                    <td>
                                      <Badge>{drop.rarity}</Badge>
                                    </td>
                                    <td>
                                      <Badge
                                        variant={
                                          drop.gpTrend === 'positive'
                                            ? 'emerald'
                                            : 'red'
                                        }
                                        mono
                                      >
                                        {drop.value}
                                      </Badge>
                                    </td>
                                    <td className="notes-cell">
                                      {drop.ironmanUseAndSell}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Prerequisites & Cross-Guide Links */}
                        <div className="method-prereq-panel">
                          <div className="meta-label">
                            REQUIREMENTS &amp; GEAR SETUP:
                          </div>
                          <ul className="compact-list">
                            {activeOption.prereqs.map((req, rIdx) => (
                              <li key={rIdx}>{req}</li>
                            ))}
                          </ul>

                          {activeOption.prereqLinks &&
                            activeOption.prereqLinks.length > 0 && (
                              <div className="prereq-links-row">
                                <span className="meta-label">PREREQ GUIDES:</span>
                                {activeOption.prereqLinks.map((link, lIdx) => (
                                  <button
                                    key={lIdx}
                                    type="button"
                                    className="prereq-link-btn"
                                    onClick={() =>
                                      onNavigate(
                                        link.section,
                                        link.itemId,
                                        link.bracket || null,
                                        returnCtx
                                      )
                                    }
                                  >
                                    <span>{link.label}</span>
                                    <ArrowUpRight size={12} />
                                  </button>
                                ))}
                              </div>
                            )}
                        </div>

                        <CalloutBanner
                          label="Group Ironman PvM Synergy"
                          variant="blue"
                        >
                          {activeOption.gimSynergy}
                        </CalloutBanner>

                        {/* Mechanics Cards */}
                        {activeOption.mechanics &&
                          activeOption.mechanics.length > 0 && (
                            <div className="mechanics-grid">
                              {activeOption.mechanics.map((mech, mIdx) => (
                                <div key={mIdx} className="mechanic-card">
                                  <div className="mechanic-card-header">
                                    <span className="mechanic-title">
                                      <Cpu
                                        size={13}
                                        style={{
                                          marginRight: '6px',
                                          verticalAlign: 'middle'
                                        }}
                                      />
                                      {mech.title}
                                    </span>
                                    <Badge>{mech.badge}</Badge>
                                  </div>
                                  <div className="mechanic-row">
                                    <span className="meta-label">
                                      HOW IT WORKS:
                                    </span>{' '}
                                    <span>{mech.howItWorks}</span>
                                  </div>
                                  <div className="mechanic-row">
                                    <span className="meta-label">
                                      ACTION / SETTING:
                                    </span>{' '}
                                    <span>{mech.howToUse}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                        {/* Collapsible Step-by-Step Kill Walkthrough */}
                        <CollapsibleSection
                          title={`Step-by-Step Kill & Banking Walkthrough — ${activeOption.name}`}
                          badge={`${activeOption.steps.length} STEPS`}
                          defaultOpen={false}
                        >
                          <ol className="numbered-steps">
                            {activeOption.steps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ol>
                        </CollapsibleSection>

                        {/* Collapsible Location Blueprint Map */}
                        <CollapsibleSection
                          title={`Location Map & Route Schematic — ${activeOption.location}`}
                          badge="BLUEPRINT MAP"
                          defaultOpen={true}
                        >
                          <BlueprintMap
                            locationName={activeOption.location}
                            mapData={activeOption.mapData}
                          />
                        </CollapsibleSection>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </GlassCard>
    </div>
  );
}
