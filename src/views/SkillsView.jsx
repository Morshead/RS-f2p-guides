import React, { useState, useMemo, useEffect } from 'react';
import {
  Pickaxe,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ScrollText,
  Lightbulb,
  ArrowRight,
  ArrowUpRight,
  CheckSquare,
  Cpu
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import CollapsibleSection from '../components/ui/CollapsibleSection';
import BlueprintMap from '../components/ui/BlueprintMap';
import { AbstractGeometricBox } from '../components/ui/GeometricPattern';
import { SKILLS_DATA, QUESTS_DATA } from '../data/guideData';

const SKILL_FILTERS = ['All', 'Combat', 'Artisan', 'Gathering', 'Support', 'F2P Cap 20/5'];
const GEO_VARIANTS = ['grid', 'circles', 'triangles'];

function findMatchingQuestId(questName) {
  const normalized = questName.toLowerCase();
  const match = QUESTS_DATA.find(
    (q) =>
      normalized.includes(q.name.toLowerCase()) ||
      q.name.toLowerCase().includes(normalized)
  );
  return match ? match.id : null;
}

export default function SkillsView({
  selectedItemId,
  onSelectSkill,
  onNavigate,
  targetBracket,
  previousNav,
  onReturnPrevious,
  searchQuery
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openBrackets, setOpenBrackets] = useState({});
  const [selectedMethodByBracket, setSelectedMethodByBracket] = useState({});
  const q = searchQuery.trim().toLowerCase();

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      if (
        activeFilter !== 'All' &&
        !skill.category.toLowerCase().includes(activeFilter.toLowerCase())
      ) {
        return false;
      }
      if (!q) return true;
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.category.toLowerCase().includes(q) ||
        skill.overview.toLowerCase().includes(q) ||
        skill.defaultSellLocation.toLowerCase().includes(q) ||
        skill.prerequisites.some((p) => p.toLowerCase().includes(q)) ||
        skill.brackets.some((b) => {
          const methods = b.methods || [b];
          return methods.some(
            (m) =>
              m.method.toLowerCase().includes(q) ||
              m.location.toLowerCase().includes(q) ||
              m.whereToSell.toLowerCase().includes(q) ||
              m.prereqs.toLowerCase().includes(q)
          );
        })
      );
    });
  }, [activeFilter, q]);

  const focusedSkillIndex = SKILLS_DATA.findIndex((s) => s.id === selectedItemId);
  const focusedSkill = focusedSkillIndex >= 0 ? SKILLS_DATA[focusedSkillIndex] : null;

  useEffect(() => {
    if (!focusedSkill) return;

    const nextOpen = {};
    let matchedTarget = false;

    focusedSkill.brackets.forEach((b, idx) => {
      const key = `${focusedSkill.id}:${b.levels}`;
      if (
        targetBracket &&
        (b.levels === targetBracket ||
          b.levels.toLowerCase().includes(targetBracket.toLowerCase()))
      ) {
        nextOpen[key] = true;
        matchedTarget = true;
      } else {
        nextOpen[key] = false;
      }
      if (!targetBracket && idx === 0) {
        nextOpen[key] = true;
      }
    });

    if (targetBracket && !matchedTarget && focusedSkill.brackets[0]) {
      nextOpen[`${focusedSkill.id}:${focusedSkill.brackets[0].levels}`] = true;
    }

    setOpenBrackets((prev) => ({ ...prev, ...nextOpen }));
  }, [focusedSkill?.id, targetBracket]);

  const handleToggleBracket = (key) => {
    setOpenBrackets((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetAllBrackets = (expand) => {
    if (!focusedSkill) return;
    const updated = {};
    focusedSkill.brackets.forEach((b) => {
      updated[`${focusedSkill.id}:${b.levels}`] = expand;
    });
    setOpenBrackets((prev) => ({ ...prev, ...updated }));
  };

  const handleSelectMethodTab = (bracketKey, methodIdx) => {
    setSelectedMethodByBracket((prev) => ({
      ...prev,
      [bracketKey]: methodIdx
    }));
  };

  // FOCUSED SINGLE-SKILL GUIDE
  if (focusedSkill) {
    const prevSkill =
      focusedSkillIndex > 0 ? SKILLS_DATA[focusedSkillIndex - 1] : null;
    const nextSkill =
      focusedSkillIndex < SKILLS_DATA.length - 1
        ? SKILLS_DATA[focusedSkillIndex + 1]
        : null;

    const returnCtx = {
      section: 'skills',
      itemId: focusedSkill.id,
      bracket: targetBracket || null,
      label: focusedSkill.name
    };

    return (
      <div className="view-stack">
        <SectionHeader
          icon={Pickaxe}
          title={focusedSkill.name}
          subtitle={`${focusedSkill.category} • Max F2P Level: ${focusedSkill.maxF2pLevel} • ${focusedSkill.tier}`}
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
              <Badge mono>XP: {focusedSkill.peakXpHr}</Badge>
              <Badge
                variant={focusedSkill.gpTrend === 'positive' ? 'emerald' : 'red'}
                mono
              >
                GP: {focusedSkill.netGpHr}
              </Badge>
              <button
                type="button"
                className="pill-tab"
                onClick={() => onSelectSkill('all')}
              >
                <ArrowLeft size={13} />
                <span>All Skills</span>
              </button>
              <button
                type="button"
                className="icon-btn"
                disabled={!prevSkill}
                onClick={() => prevSkill && onSelectSkill(prevSkill.id)}
                title={prevSkill ? `Previous: ${prevSkill.name}` : 'First skill'}
              >
                <ChevronLeft size={15} />
              </button>
              <button
                type="button"
                className="icon-btn"
                disabled={!nextSkill}
                onClick={() => nextSkill && onSelectSkill(nextSkill.id)}
                title={nextSkill ? `Next: ${nextSkill.name}` : 'Last skill'}
              >
                <ChevronRight size={15} />
              </button>
            </div>
          }
        />

        {/* Prerequisites, Ironman Prep, Cross-Guide Links & Where to Sell */}
        <GlassCard
          padding="spacious"
          icon={CheckSquare}
          title="Prerequisites, Ironman Prep & Where to Sell"
          badge={<Badge>{focusedSkill.prerequisites.length} Prerequisites</Badge>}
        >
          <p className="focused-overview">{focusedSkill.overview}</p>

          <div className="prereq-grid">
            {focusedSkill.prerequisites.map((prereq, idx) => (
              <div key={idx} className="prereq-item">
                <span className="prereq-bullet">&gt;</span>
                <span>{prereq}</span>
              </div>
            ))}
          </div>

          {focusedSkill.skillPrereqLinks && focusedSkill.skillPrereqLinks.length > 0 && (
            <div className="prereq-links-box">
              <div className="meta-label">LINKED PREREQUISITE GUIDES</div>
              <div className="prereq-links-row">
                {focusedSkill.skillPrereqLinks.map((link, idx) => (
                  <button
                    key={idx}
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
            </div>
          )}

          <CalloutBanner label="Ironman Item Gathering & Prep Time" variant="amber">
            {focusedSkill.ironmanGatheringNote}
          </CalloutBanner>

          <CalloutBanner
            label="Where to Sell Items (Ironman Liquidation)"
            variant={focusedSkill.gpTrend === 'positive' ? 'emerald' : 'red'}
          >
            {focusedSkill.defaultSellLocation}
          </CalloutBanner>

          <CalloutBanner label="Group Ironman Synergy" variant="blue">
            {focusedSkill.gimSynergy}
          </CalloutBanner>
        </GlassCard>

        {/* New Player In-Game Mechanics & XP Multipliers */}
        {focusedSkill.mechanics && focusedSkill.mechanics.length > 0 && (
          <GlassCard
            icon={Cpu}
            title="New Player In-Game Mechanics & XP Multipliers"
            subtitle="RS3-specific clicks, hotkeys, settings & boosts that significantly increase XP/hr or save resources"
            badge={<Badge>{focusedSkill.mechanics.length} Core Mechanics</Badge>}
          >
            <div className="mechanics-grid">
              {focusedSkill.mechanics.map((mech, idx) => (
                <div key={idx} className="mechanic-card">
                  <div className="mechanic-card-header">
                    <span className="mechanic-title">{mech.title}</span>
                    <Badge>{mech.badge}</Badge>
                  </div>
                  <div className="mechanic-row">
                    <span className="meta-label">HOW IT WORKS:</span>{' '}
                    <span>{mech.howItWorks}</span>
                  </div>
                  <div className="mechanic-row">
                    <span className="meta-label">ACTION / SETTING:</span>{' '}
                    <span>{mech.howToUse}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {/* Collapsible Level Brackets with Multi-Method Tabs, Walkthroughs & Maps */}
        <GlassCard
          title={`1–${focusedSkill.maxF2pLevel.split(' ')[0]} F2P Ironman Leveling Path`}
          subtitle="Expand any level bracket to switch between Recommended & Alternative methods, inspect step-by-step walkthroughs, view sector maps, and jump to linked prerequisite guides."
          headerRight={
            <div className="nav-action-group">
              <Badge>{focusedSkill.brackets.length} Brackets</Badge>
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
          <div className="bracket-stack">
            {focusedSkill.brackets.map((b) => {
              const bracketKey = `${focusedSkill.id}:${b.levels}`;
              const isOpen = !!openBrackets[bracketKey];
              const methods = b.methods && b.methods.length > 0 ? b.methods : [b];
              const activeIdx = Math.min(
                selectedMethodByBracket[bracketKey] ?? 0,
                methods.length - 1
              );
              const activeMethod = methods[activeIdx];
              const isFocusedTarget =
                targetBracket &&
                (b.levels === targetBracket ||
                  b.levels.toLowerCase().includes(targetBracket.toLowerCase()));

              return (
                <div
                  key={bracketKey}
                  className={`bracket-dropdown ${isOpen ? 'open' : ''} ${
                    isFocusedTarget ? 'bracket-highlighted' : ''
                  }`.trim()}
                >
                  <button
                    type="button"
                    className="bracket-dropdown-trigger"
                    onClick={() => handleToggleBracket(bracketKey)}
                    aria-expanded={isOpen}
                  >
                    <div className="bracket-trigger-left">
                      {isOpen ? (
                        <ChevronDown size={15} />
                      ) : (
                        <ChevronRight size={15} />
                      )}
                      <span className="bracket-level-pill">LVL {b.levels}</span>
                      <div className="bracket-trigger-titles">
                        <span className="bracket-rec-title">
                          {activeMethod.method}
                        </span>
                        <span className="bracket-rec-sub">
                          {activeMethod.location}
                        </span>
                      </div>
                    </div>

                    <div className="bracket-trigger-right">
                      <Badge>{methods.length} METHODS</Badge>
                      <Badge mono>{activeMethod.xpPerHour}</Badge>
                      <Badge
                        variant={
                          activeMethod.gpTrend === 'positive' ? 'emerald' : 'red'
                        }
                        mono
                      >
                        {activeMethod.gpPerHour}
                      </Badge>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bracket-dropdown-body">
                      {/* Multi-Method Togglable Tabs */}
                      <div className="method-tabs-bar" role="tablist">
                        {methods.map((m, mIdx) => {
                          const isActiveTab = mIdx === activeIdx;
                          return (
                            <button
                              key={m.id || mIdx}
                              type="button"
                              role="tab"
                              aria-selected={isActiveTab}
                              className={`method-tab-btn ${
                                isActiveTab ? 'active' : ''
                              }`}
                              onClick={() =>
                                handleSelectMethodTab(bracketKey, mIdx)
                              }
                            >
                              <span className="method-rec-tag">
                                {m.isRecommended || mIdx === 0 ? '★ REC' : `ALT ${mIdx}`}
                              </span>
                              <span>{m.tabLabel || m.method}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Active Method Details */}
                      <div className="method-panel">
                        <div className="method-telemetry-grid">
                          <div className="telemetry-box">
                            <div className="telemetry-label">XP / HOUR (IRONMAN)</div>
                            <div className="telemetry-value">
                              {activeMethod.xpPerHour}
                            </div>
                          </div>

                          <div className="telemetry-box">
                            <div className="telemetry-label">MONEY / HOUR</div>
                            <div className="telemetry-value">
                              <Badge
                                variant={
                                  activeMethod.gpTrend === 'positive'
                                    ? 'emerald'
                                    : 'red'
                                }
                                mono
                              >
                                {activeMethod.gpPerHour}
                              </Badge>
                            </div>
                          </div>

                          <div className="telemetry-box">
                            <div className="telemetry-label">IRONMAN PREP TIME</div>
                            <div className="telemetry-value">
                              {activeMethod.ironmanPrep}
                            </div>
                          </div>

                          <div className="telemetry-box">
                            <div className="telemetry-label">WHERE TO SELL ITEMS</div>
                            <div className="telemetry-value">
                              {activeMethod.whereToSell}
                            </div>
                          </div>
                        </div>

                        <div className="method-prereq-panel">
                          <div>
                            <span className="meta-label">PREREQUISITES:</span>{' '}
                            <span>{activeMethod.prereqs}</span>
                          </div>
                          <div>
                            <span className="meta-label">OPTIMIZATION NOTES:</span>{' '}
                            <span>{activeMethod.notes}</span>
                          </div>
                          {focusedSkill.mechanics && focusedSkill.mechanics[0] && (
                            <div>
                              <span className="meta-label">IN-GAME MECHANIC REMINDER:</span>{' '}
                              <span>
                                {focusedSkill.mechanics[0].title} —{' '}
                                {focusedSkill.mechanics[0].howToUse}
                              </span>
                            </div>
                          )}

                          {activeMethod.prereqLinks &&
                            activeMethod.prereqLinks.length > 0 && (
                              <div className="prereq-links-row">
                                <span className="meta-label">PREREQ GUIDES:</span>
                                {activeMethod.prereqLinks.map((link, lIdx) => (
                                  <button
                                    key={lIdx}
                                    type="button"
                                    className="prereq-link-btn"
                                    onClick={() =>
                                      onNavigate(
                                        link.section,
                                        link.itemId,
                                        link.bracket || null,
                                        {
                                          ...returnCtx,
                                          bracket: b.levels
                                        }
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

                        {/* Collapsible Step-by-Step Walkthrough */}
                        {activeMethod.steps && activeMethod.steps.length > 0 && (
                          <CollapsibleSection
                            title={`Step-by-Step Walkthrough — ${activeMethod.method}`}
                            badge={`${activeMethod.steps.length} STEPS`}
                            defaultOpen={false}
                          >
                            <ol className="numbered-steps">
                              {activeMethod.steps.map((step, sIdx) => (
                                <li key={sIdx}>{step}</li>
                              ))}
                            </ol>
                          </CollapsibleSection>
                        )}

                        {/* Collapsible Location Blueprint Map */}
                        <CollapsibleSection
                          title={`Location Map & Route Schematic — ${activeMethod.location}`}
                          badge="BLUEPRINT MAP"
                          defaultOpen={true}
                        >
                          <BlueprintMap
                            locationName={activeMethod.location}
                            mapData={activeMethod.mapData}
                          />
                        </CollapsibleSection>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </GlassCard>

        {/* Quests & Pro Tips side-by-side */}
        <div className="dense-grid-2">
          <GlassCard
            icon={ScrollText}
            title="Quest XP Skips & Unlocks"
            badge={<Badge>{focusedSkill.quests.length} Quests</Badge>}
          >
            <div className="quest-skip-list">
              {focusedSkill.quests.map((quest, idx) => {
                const matchedQuestId = findMatchingQuestId(quest.name);
                return (
                  <div key={idx} className="sub-surface">
                    <div className="sub-surface-header">
                      <span className="sub-surface-title">{quest.name}</span>
                      <Badge>{quest.xp}</Badge>
                    </div>
                    <div className="card-desc">Requirements: {quest.req}</div>
                    {matchedQuestId && (
                      <div style={{ marginTop: '4px' }}>
                        <button
                          type="button"
                          className="prereq-link-btn"
                          onClick={() =>
                            onNavigate('quests', matchedQuestId, null, returnCtx)
                          }
                        >
                          <span>OPEN QUEST GUIDE</span>
                          <ArrowUpRight size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard
            icon={Lightbulb}
            title="RS3 & Group Ironman Pro Tips"
            badge={<Badge>Key Advice</Badge>}
          >
            <ul className="compact-list roomy-list">
              {focusedSkill.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    );
  }

  // CATALOG MODE (Abstract Geometric Cards Grid)
  return (
    <div className="view-stack">
      <SectionHeader
        icon={Pickaxe}
        title="F2P Ironman Skills Catalog (All 20 Guides)"
        subtitle="Includes all 17 full 1–99/120 F2P skills, Level 20 previews (Necromancy & Archaeology), and Level 5 trial skills with XP/hr, Red/Green GP/hr, multi-method tabs, sector maps, and prerequisite links."
        filters={SKILL_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filteredSkills.length === 0 ? (
        <GlassCard>
          <p className="empty-state">
            No skills match your current filter or search query. Try clearing the search or choosing &ldquo;All&rdquo;.
          </p>
        </GlassCard>
      ) : (
        <div className="catalog-grid-3">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.id}
              className="geo-card skill-geo-card"
              onClick={() => onSelectSkill(skill.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSkill(skill.id);
                }
              }}
            >
              <AbstractGeometricBox
                icon={Pickaxe}
                variant={GEO_VARIANTS[idx % GEO_VARIANTS.length]}
                aspectSquare
                tag={skill.category}
                code={`MAX ${skill.maxF2pLevel.split(' ')[0]}`}
                iconSize={38}
              />

              <div className="geo-card-footer">
                <div className="geo-card-left">
                  <div className="geo-card-title">{skill.name}</div>
                  <div className="geo-card-tag">
                    {skill.brackets.length} BRACKETS • {skill.prerequisites.length} PREREQS • {skill.quests.length} QUESTS
                  </div>
                </div>
                <div className="geo-card-right">
                  <div className="geo-card-metric">{skill.peakXpHr}</div>
                  <Badge
                    variant={skill.gpTrend === 'positive' ? 'emerald' : 'red'}
                    mono
                  >
                    {skill.netGpHr}
                  </Badge>
                </div>
              </div>

              <div className="geo-card-submeta">
                <div>
                  <span className="meta-label">PREREQ:</span>{' '}
                  <span>{skill.prerequisites[0]}</span>
                </div>
                <div>
                  <span className="meta-label">SELL:</span>{' '}
                  <span>{skill.defaultSellLocation}</span>
                </div>
              </div>

              <div className="geo-card-action-row">
                <Badge>{skill.tier.replace(' GIM Priority', '')}</Badge>
                <span className="card-footer-link">
                  <span>OPEN BLUEPRINT</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
