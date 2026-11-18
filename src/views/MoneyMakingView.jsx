import React, { useState, useMemo } from 'react';
import { Coins, ArrowLeft } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import CollapsibleSection from '../components/ui/CollapsibleSection';
import LiquidationBreakdown from '../components/ui/LiquidationBreakdown';
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
        m.requirements.toLowerCase().includes(q)
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
        subtitle="Self-sufficient coin generation through Magical Dice, High Level Alchemy, Rune Salvage, and daily D&Ds."
        filters={isSingleSelected ? undefined : MONEY_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        actions={
          isSingleSelected && (
            <button
              type="button"
              className="pill-tab"
              onClick={() => onSelectMethod('all')}
            >
              <ArrowLeft size={13} />
              <span>All GP Methods</span>
            </button>
          )
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
                <Badge variant="emerald" mono>
                  {method.gpPerHour}
                </Badge>
              }
            >
              <div className="badge-row">
                <Badge variant="blue">{method.category}</Badge>
                <Badge variant="amber">Reqs: {method.requirements}</Badge>
                <Badge variant="slate">{method.risk}</Badge>
              </div>

              <p className="card-desc">{method.description}</p>

              <LiquidationBreakdown
                gpPerHour={method.gpPerHour}
                gpTrend="positive"
                whereToSell={`${method.description} ${method.steps.join(' ')}`}
                title={method.title}
                description={method.description}
              />

              <CalloutBanner label="Group Storage Sharing" variant="emerald">
                {method.gimShareable}
              </CalloutBanner>

              <CollapsibleSection
                title="Step-by-Step Guide"
                badge={`${method.steps.length} steps`}
                defaultOpen={isSingleSelected}
              >
                <ol className="numbered-steps">
                  {method.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </CollapsibleSection>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
