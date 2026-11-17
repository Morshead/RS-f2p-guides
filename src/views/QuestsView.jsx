import React, { useState, useMemo } from 'react';
import { ScrollText, ArrowLeft, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import CollapsibleSection from '../components/ui/CollapsibleSection';
import { QUESTS_DATA } from '../data/guideData';

const QUEST_FILTERS = [
  'All Quests',
  'Rush Day 1',
  'Early Rush',
  'Mid-Game Goal',
  'Capstone',
  'Incomplete Only'
];

export default function QuestsView({
  selectedItemId,
  onSelectQuest,
  completedQuests,
  onToggleQuest,
  searchQuery
}) {
  const [activeFilter, setActiveFilter] = useState('All Quests');
  const q = searchQuery.trim().toLowerCase();

  const completedCount = Object.values(completedQuests).filter(Boolean).length;
  const totalQpEarned = QUESTS_DATA.reduce(
    (acc, quest) => (completedQuests[quest.id] ? acc + quest.qp : acc),
    0
  );
  const maxQp = QUESTS_DATA.reduce((acc, quest) => acc + quest.qp, 0);

  const filteredQuests = useMemo(() => {
    return QUESTS_DATA.filter((quest) => {
      if (selectedItemId !== 'all' && quest.id !== selectedItemId) {
        return false;
      }
      if (selectedItemId === 'all') {
        if (activeFilter === 'Incomplete Only' && completedQuests[quest.id]) {
          return false;
        } else if (
          activeFilter === 'Capstone' &&
          !quest.priority.includes('Capstone')
        ) {
          return false;
        } else if (
          activeFilter !== 'All Quests' &&
          activeFilter !== 'Incomplete Only' &&
          activeFilter !== 'Capstone' &&
          quest.priority !== activeFilter
        ) {
          return false;
        }
      }
      if (!q) return true;
      return (
        quest.name.toLowerCase().includes(q) ||
        quest.rewards.toLowerCase().includes(q) ||
        quest.reqs.toLowerCase().includes(q) ||
        quest.itemsNeeded.toLowerCase().includes(q) ||
        quest.gimTip.toLowerCase().includes(q)
      );
    });
  }, [selectedItemId, activeFilter, completedQuests, q]);

  const isSingleSelected = selectedItemId !== 'all';

  return (
    <div className="view-stack">
      <SectionHeader
        icon={ScrollText}
        title={
          isSingleSelected && filteredQuests[0]
            ? filteredQuests[0].name
            : 'Priority F2P Quests & Group Sharing'
        }
        subtitle={`Completed ${completedCount} of ${QUESTS_DATA.length} priority quests (${totalQpEarned}/${maxQp} Quest Points earned — aim for 25 QP for May's 250k Magical Die).`}
        filters={isSingleSelected ? undefined : QUEST_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        actions={
          <div className="nav-action-group">
            <Badge variant="emerald" mono>
              <CheckCircle2 size={11} style={{ marginRight: '4px' }} />
              {completedCount}/{QUESTS_DATA.length} Done
            </Badge>
            {isSingleSelected && (
              <button
                type="button"
                className="pill-tab"
                onClick={() => onSelectQuest('all')}
              >
                <ArrowLeft size={13} />
                <span>All Quests</span>
              </button>
            )}
          </div>
        }
      />

      {filteredQuests.length === 0 ? (
        <GlassCard>
          <p className="empty-state">
            No quests match your current filter or search query.
          </p>
        </GlassCard>
      ) : (
        <div className={isSingleSelected ? 'view-stack' : 'dense-grid-2'}>
          {filteredQuests.map((quest) => {
            const done = !!completedQuests[quest.id];
            const priorityVariant = quest.priority.includes('Day 1')
              ? 'emerald'
              : quest.priority.includes('Capstone')
              ? 'amber'
              : 'blue';

            return (
              <GlassCard
                key={quest.id}
                className={done ? 'quest-card-done' : ''}
              >
                <div className="quest-card-top">
                  <label className="quest-check-title">
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={() => onToggleQuest(quest.id)}
                    />
                    <span className={done ? 'line-through-title' : ''}>
                      {quest.name}
                    </span>
                  </label>

                  <div className="badge-row">
                    <Badge variant={priorityVariant}>{quest.priority}</Badge>
                    <Badge variant="slate" mono>
                      {quest.qp} QP
                    </Badge>
                    <Badge variant="indigo">{quest.difficulty}</Badge>
                  </div>
                </div>

                <div className="quest-rewards-box">
                  <strong>Rewards:</strong> {quest.rewards}
                </div>

                <CollapsibleSection
                  title="Requirements, Gatherable Items & GIM Tip"
                  defaultOpen={isSingleSelected}
                >
                  <div className="quest-details-stack">
                    <div>
                      <strong>Requirements:</strong> {quest.reqs}
                    </div>
                    <div>
                      <strong>Items Needed:</strong> {quest.itemsNeeded}
                    </div>
                    <CalloutBanner label="Group Ironman Tip" variant="blue">
                      {quest.gimTip}
                    </CalloutBanner>
                  </div>
                </CollapsibleSection>
              </GlassCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
