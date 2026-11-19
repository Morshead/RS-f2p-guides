import React, { useState, useMemo } from 'react';
import { Coins, ArrowLeft, Clock, Package, ChevronsUpDown, Zap } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import CollapsibleSection from '../components/ui/CollapsibleSection';
import LiquidationBreakdown from '../components/ui/LiquidationBreakdown';
import ItemText from '../components/ui/ItemText';
import { MONEY_MAKING_DATA } from '../data/guideData';

const MONEY_FILTERS = [
  'All',
  'Starter / Milestone',
  'Sustained GIM',
  'PvM & Daily'
];

function matchesMoneyFilter(category, filter) {
  if (filter === 'All') return true;
  if (filter === 'Starter / Milestone') {
    return category === 'Milestone Burst GP' || category === 'Starter Cash';
  }
  if (filter === 'Sustained GIM') {
    return category === 'Sustained GIM Engine' || category === 'Skilling GP';
  }
  if (filter === 'PvM & Daily') {
    return category === 'PvM Alchs' || category === 'Daily GP & Runes';
  }
  return true;
}

export default function MoneyMakingView({
  selectedItemId,
  onSelectMethod,
  searchQuery
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandAllSteps, setExpandAllSteps] = useState(false);
  const q = searchQuery.trim().toLowerCase();

  const filteredMethods = useMemo(() => {
    return MONEY_MAKING_DATA.filter((m) => {
      if (selectedItemId !== 'all' && m.id !== selectedItemId) {
        return false;
      }
      if (selectedItemId === 'all' && !matchesMoneyFilter(m.category, activeFilter)) {
        return false;
      }
      if (!q) return true;
      return (
        m.title.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.requirements.toLowerCase().includes(q) ||
        (m.cycleScope && m.cycleScope.toLowerCase().includes(q)) ||
        (m.totalEstimatedTime && m.totalEstimatedTime.toLowerCase().includes(q))
      );
    });
  }, [selectedItemId, activeFilter, q]);

  const isSingleSelected = selectedItemId !== 'all';

  return (
    <div className="view-stack">
      <SectionHeader
        icon={Coins}
        title={
          isSingleSelected && filteredMethods[0]
            ? filteredMethods[0].title
            : 'F2P Group Ironman Money Making'
        }
        subtitle="Self-sufficient coin generation with per-step time estimates, section resource breakdowns, and full-cycle totals."
        filters={isSingleSelected ? undefined : MONEY_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        actions={
          <div className="nav-action-group">
            {!isSingleSelected && filteredMethods.length > 0 && (
              <button
                type="button"
                className="pill-tab"
                onClick={() => setExpandAllSteps((prev) => !prev)}
              >
                <ChevronsUpDown size={13} />
                <span>{expandAllSteps ? 'Collapse All Steps' : 'Expand All Steps'}</span>
              </button>
            )}
            {isSingleSelected && (
              <button
                type="button"
                className="pill-tab"
                onClick={() => onSelectMethod('all')}
              >
                <ArrowLeft size={13} />
                <span>All GP Methods</span>
              </button>
            )}
          </div>
        }
      />

      {filteredMethods.length === 0 ? (
        <GlassCard>
          <p className="empty-state">
            No money making methods match your filter or search query.
          </p>
        </GlassCard>
      ) : (
        <div className={isSingleSelected ? 'view-stack' : 'dense-grid-2'}>
          {filteredMethods.map((method) => (
            <GlassCard
              key={method.id}
              icon={Coins}
              title={method.title}
              badge={
                <div className="mm-header-badges">
                  <Badge variant="emerald" mono>
                    {method.gpPerHour}
                  </Badge>
                  {method.totalEstimatedTime && (
                    <Badge variant="slate" mono className="mm-time-badge">
                      <Clock size={10} />
                      <span>{method.totalEstimatedTime}</span>
                    </Badge>
                  )}
                </div>
              }
            >
              <div className="badge-row">
                <Badge variant="blue">{method.category}</Badge>
                <Badge variant="amber">Reqs: {method.requirements}</Badge>
                <Badge variant="slate">{method.risk}</Badge>
              </div>

              <p className="card-desc">
                <ItemText>{method.description}</ItemText>
              </p>

              {method.resourceOverview && (
                <div className="mm-overview-panel">
                  <div className="mm-overview-header">
                    <div className="mm-overview-title-wrap">
                      <span className="meta-label">TOTAL TIME &amp; RESOURCE OVERVIEW</span>
                      {method.cycleScope && (
                        <span className="mm-cycle-scope">{method.cycleScope}</span>
                      )}
                    </div>
                    {method.totalEstimatedTime && (
                      <div className="mm-total-time-pill">
                        <Clock size={12} />
                        <span>TOTAL: {method.totalEstimatedTime}</span>
                      </div>
                    )}
                  </div>

                  <div className="mm-overview-grid">
                    <div className="mm-overview-cell">
                      <div className="telemetry-label">RESOURCES TO COLLECT</div>
                      <ul className="compact-list">
                        {method.resourceOverview.collect.map((entry, idx) => (
                          <li key={idx}>
                            <ItemText>{entry}</ItemText>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mm-overview-cell">
                      <div className="telemetry-label">SUPPLIES / CONSUMED</div>
                      <ul className="compact-list">
                        {method.resourceOverview.consume.map((entry, idx) => (
                          <li key={idx}>
                            <ItemText>{entry}</ItemText>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mm-overview-cell">
                      <div className="telemetry-label">EXPECTED OUTPUT</div>
                      <ul className="compact-list">
                        {method.resourceOverview.output.map((entry, idx) => (
                          <li key={idx}>
                            <ItemText>{entry}</ItemText>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {method.stepMeta && method.stepMeta.length > 0 && (
                    <div className="mm-timeline-strip">
                      <span className="meta-label">STEP TIMES &amp; XP/HR:</span>
                      <div className="mm-timeline-pills">
                        {method.stepMeta.map((meta, idx) => (
                          <span key={idx} className="mm-timeline-chip">
                            <span className="mm-timeline-num">S{idx + 1}</span>
                            <span>{meta.timeEstimate}</span>
                            {meta.xpPerHour && (
                              <>
                                <span className="mm-timeline-sep">•</span>
                                <span className="mm-timeline-xp">{meta.xpPerHour}</span>
                              </>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <LiquidationBreakdown
                gpPerHour={method.gpPerHour}
                gpTrend="positive"
                whereToSell={`${method.description} ${method.steps.join(' ')}`}
                title={method.title}
                description={method.description}
              />

              <CalloutBanner label="Group Storage Sharing" variant="emerald">
                <ItemText>{method.gimShareable}</ItemText>
              </CalloutBanner>

              <CollapsibleSection
                title="Step-by-Step Guide & Section Resources"
                badge={`${method.steps.length} steps • ${method.totalEstimatedTime || ''}`}
                defaultOpen={isSingleSelected || expandAllSteps}
              >
                <div className="mm-step-list">
                  {method.steps.map((step, i) => {
                    const meta = method.stepMeta?.[i];
                    return (
                      <div key={i} className="mm-step-card">
                        <div className="mm-step-header">
                          <div className="mm-step-header-left">
                            <span className="roadmap-step-num">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="mm-step-title">
                              {meta?.sectionTitle || `Step ${i + 1}`}
                            </span>
                          </div>
                          {(meta?.xpPerHour || meta?.timeEstimate) && (
                            <div className="mm-step-badges">
                              {meta?.xpPerHour && (
                                <span className="mm-step-xp-chip">
                                  <Zap size={11} />
                                  <span>{meta.xpPerHour}</span>
                                </span>
                              )}
                              {meta?.timeEstimate && (
                                <span className="mm-step-time-chip">
                                  <Clock size={11} />
                                  <span>{meta.timeEstimate}</span>
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        <p className="mm-step-instruction">
                          <ItemText>{step}</ItemText>
                        </p>

                        {meta && (
                          <div className="mm-step-resources-box">
                            <div className="mm-step-resources-head">
                              <Package size={11} />
                              <span className="meta-label">
                                SECTION RESOURCES &amp; QUANTITIES
                              </span>
                            </div>
                            <p className="mm-step-resources-desc">
                              <ItemText>{meta.resourcesOverview}</ItemText>
                            </p>
                            {meta.resources && meta.resources.length > 0 && (
                              <div className="mm-resource-rows">
                                {meta.resources.map((res, rIdx) => (
                                  <div key={rIdx} className="mm-resource-row">
                                    <span className="mm-resource-role">{res.role}</span>
                                    <span className="mm-resource-item">
                                      <ItemText>{res.item}</ItemText>
                                    </span>
                                    <span className="mm-resource-qty">{res.quantity}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {method.totalEstimatedTime && (
                    <div className="mm-total-footer">
                      <div className="mm-total-footer-left">
                        <span className="meta-label">
                          TOTAL ESTIMATED TIME ({method.steps.length} STEPS)
                        </span>
                        {method.timeBreakdownFormula && (
                          <span className="mm-total-formula">
                            {method.timeBreakdownFormula}
                          </span>
                        )}
                      </div>
                      <div className="mm-total-time-pill">
                        <Clock size={12} />
                        <span>{method.totalEstimatedTime}</span>
                      </div>
                    </div>
                  )}
                </div>
              </CollapsibleSection>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
