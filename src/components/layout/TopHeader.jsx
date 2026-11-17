import React from 'react';
import {
  ScrollText,
  CheckCircle2,
  ChevronRight,
  Home
} from 'lucide-react';

const SECTION_LABELS = {
  overview: 'GIM Overview & Roles',
  skills: 'Skills (1–99 F2P)',
  money: 'Money Making',
  quests: 'Quests & Order'
};

export default function TopHeader({
  activeSection,
  selectedItemLabel,
  onResetItem,
  onNavigate,
  completedQuestCount,
  totalQuests,
  totalQpEarned,
  completedDailyCount,
  totalDailies
}) {
  const sectionLabel = SECTION_LABELS[activeSection] || 'Guide';

  return (
    <header className="topbar glass-panel">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <button
          type="button"
          className="breadcrumb-link"
          onClick={() => onNavigate('overview', 'all')}
        >
          <Home size={13} />
          <span>RS3 F2P GIM</span>
        </button>

        <ChevronRight size={13} className="breadcrumb-sep" />

        {selectedItemLabel ? (
          <>
            <button
              type="button"
              className="breadcrumb-link"
              onClick={onResetItem}
            >
              {sectionLabel}
            </button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">{selectedItemLabel}</span>
          </>
        ) : (
          <span className="breadcrumb-current">{sectionLabel}</span>
        )}
      </nav>

      <div className="stat-pills">
        <button
          type="button"
          className="stat-pill interactive-pill"
          onClick={() => onNavigate('quests', 'all')}
          title="Jump to Quests tracker"
        >
          <ScrollText size={13} color="#0284c7" />
          <span>
            Quests: {completedQuestCount}/{totalQuests} ({totalQpEarned} QP)
          </span>
        </button>

        <button
          type="button"
          className="stat-pill interactive-pill"
          onClick={() => onNavigate('overview', 'all')}
          title="Jump to Daily Routine checklist"
        >
          <CheckCircle2 size={13} color="#059669" />
          <span>
            Dailies: {completedDailyCount}/{totalDailies}
          </span>
        </button>
      </div>
    </header>
  );
}
