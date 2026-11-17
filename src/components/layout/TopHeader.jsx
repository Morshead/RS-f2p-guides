import React from 'react';
import {
  ScrollText,
  CheckCircle2,
  ChevronRight,
  Search,
  X
} from 'lucide-react';

const SECTION_LABELS = {
  overview: 'OVERVIEW & ROLES',
  skills: 'SKILLS CATALOG',
  money: 'MONEY MAKING',
  quests: 'QUEST LEDGER'
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
  totalDailies,
  searchQuery,
  onSearchChange
}) {
  const sectionLabel = SECTION_LABELS[activeSection] || 'GUIDE';

  return (
    <header className="topbar">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <button
          type="button"
          className="breadcrumb-link"
          onClick={() => onNavigate('overview', 'all')}
        >
          <span>RS3 F2P GIM</span>
        </button>

        <ChevronRight size={12} className="breadcrumb-sep" />

        {selectedItemLabel ? (
          <>
            <button
              type="button"
              className="breadcrumb-link"
              onClick={onResetItem}
            >
              {sectionLabel}
            </button>
            <ChevronRight size={12} className="breadcrumb-sep" />
            <span className="breadcrumb-current">{selectedItemLabel}</span>
          </>
        ) : (
          <span className="breadcrumb-current">{sectionLabel}</span>
        )}
      </nav>

      <div className="topbar-right">
        <div className="stat-pills">
          <button
            type="button"
            className="stat-pill interactive-pill"
            onClick={() => onNavigate('quests', 'all')}
            title="Jump to Quests tracker"
          >
            <ScrollText size={12} />
            <span>
              {completedQuestCount}/{totalQuests} QUESTS ({totalQpEarned} QP)
            </span>
          </button>

          <button
            type="button"
            className="stat-pill interactive-pill"
            onClick={() => onNavigate('overview', 'all')}
            title="Jump to Daily Routine checklist"
          >
            <CheckCircle2 size={12} />
            <span>
              {completedDailyCount}/{totalDailies} DAILIES
            </span>
          </button>
        </div>

        <div className="header-search">
          <Search size={13} className="header-search-icon" />
          <input
            type="text"
            placeholder="SEARCH GUIDE..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search guide"
          />
          {searchQuery && (
            <button
              type="button"
              className="header-search-clear"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <X size={12} />
            </button>
          )}
        </div>

        <div className="profile-circle" title="Group Ironman Blueprint Profile">
          GIM
        </div>
      </div>
    </header>
  );
}
