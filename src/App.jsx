import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopHeader from './components/layout/TopHeader';
import OverviewView from './views/OverviewView';
import SkillsView from './views/SkillsView';
import PvmView from './views/PvmView';
import MoneyMakingView from './views/MoneyMakingView';
import QuestsView from './views/QuestsView';
import ItemLookupModal from './components/ui/ItemLookupModal';
import { ItemLookupProvider } from './context/ItemLookupContext';
import {
  SKILLS_DATA,
  PVM_DATA,
  MONEY_MAKING_DATA,
  QUESTS_DATA,
  DAILY_CHECKLIST
} from './data/guideData';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedItemId, setSelectedItemId] = useState('all');
  const [targetBracket, setTargetBracket] = useState(null);
  const [previousNav, setPreviousNav] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    skills: true,
    pvm: true,
    money: true,
    quests: true
  });
  const [searchQuery, setSearchQuery] = useState('');

  const [completedQuests, setCompletedQuests] = useState(() => {
    try {
      const saved = localStorage.getItem('rs3_f2p_gim_quests');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [completedDailies, setCompletedDailies] = useState(() => {
    try {
      const saved = localStorage.getItem('rs3_f2p_gim_dailies');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('rs3_f2p_gim_quests', JSON.stringify(completedQuests));
  }, [completedQuests]);

  useEffect(() => {
    localStorage.setItem('rs3_f2p_gim_dailies', JSON.stringify(completedDailies));
  }, [completedDailies]);

  const handleToggleMenu = (menuKey) => {
    setOpenMenus((prev) => ({ ...prev, [menuKey]: !prev[menuKey] }));
  };

  const handleToggleAllMenus = (show) => {
    setOpenMenus({ skills: show, pvm: show, money: show, quests: show });
  };

  const handleSelectNav = (section, itemId = 'all', bracket = null, fromNav = null) => {
    setActiveSection(section);
    setSelectedItemId(itemId);
    setTargetBracket(bracket);
    setPreviousNav(fromNav || null);
  };

  const handleToggleQuest = (id) => {
    setCompletedQuests((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleDaily = (id) => {
    setCompletedDailies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedQuestCount = Object.values(completedQuests).filter(Boolean).length;
  const totalQpEarned = QUESTS_DATA.reduce(
    (acc, quest) => (completedQuests[quest.id] ? acc + quest.qp : acc),
    0
  );
  const completedDailyCount = Object.values(completedDailies).filter(Boolean).length;

  const selectedItemLabel = useMemo(() => {
    if (selectedItemId === 'all') return null;
    if (activeSection === 'skills') {
      return SKILLS_DATA.find((s) => s.id === selectedItemId)?.name || null;
    }
    if (activeSection === 'pvm') {
      return PVM_DATA.find((p) => p.id === selectedItemId)?.name || null;
    }
    if (activeSection === 'money') {
      return MONEY_MAKING_DATA.find((m) => m.id === selectedItemId)?.title || null;
    }
    if (activeSection === 'quests') {
      return QUESTS_DATA.find((q) => q.id === selectedItemId)?.name || null;
    }
    return null;
  }, [activeSection, selectedItemId]);

  return (
    <ItemLookupProvider>
      <div className="app-shell" data-section={activeSection}>
        <Sidebar
        activeSection={activeSection}
        selectedItemId={selectedItemId}
        onSelectNav={handleSelectNav}
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed((prev) => !prev)}
        openMenus={openMenus}
        onToggleMenu={handleToggleMenu}
        onToggleAllMenus={handleToggleAllMenus}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        completedQuests={completedQuests}
      />

      <main className="main-content">
        <TopHeader
          activeSection={activeSection}
          selectedItemLabel={selectedItemLabel}
          onResetItem={() => handleSelectNav(activeSection, 'all')}
          onNavigate={handleSelectNav}
          completedQuestCount={completedQuestCount}
          totalQuests={QUESTS_DATA.length}
          totalQpEarned={totalQpEarned}
          completedDailyCount={completedDailyCount}
          totalDailies={DAILY_CHECKLIST.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {activeSection === 'overview' && (
          <OverviewView
            onNavigate={handleSelectNav}
            completedQuests={completedQuests}
            completedDailies={completedDailies}
            onToggleDaily={handleToggleDaily}
            onResetDailies={() => setCompletedDailies({})}
          />
        )}

        {activeSection === 'skills' && (
          <SkillsView
            selectedItemId={selectedItemId}
            onSelectSkill={(id) => handleSelectNav('skills', id)}
            onNavigate={handleSelectNav}
            targetBracket={targetBracket}
            previousNav={previousNav}
            onReturnPrevious={() =>
              previousNav &&
              handleSelectNav(
                previousNav.section,
                previousNav.itemId,
                previousNav.bracket || null
              )
            }
            searchQuery={searchQuery}
          />
        )}

        {activeSection === 'pvm' && (
          <PvmView
            selectedItemId={selectedItemId}
            onSelectPvm={(id) => handleSelectNav('pvm', id)}
            onNavigate={handleSelectNav}
            previousNav={previousNav}
            onReturnPrevious={() =>
              previousNav &&
              handleSelectNav(
                previousNav.section,
                previousNav.itemId,
                previousNav.bracket || null
              )
            }
            searchQuery={searchQuery}
          />
        )}

        {activeSection === 'money' && (
          <MoneyMakingView
            selectedItemId={selectedItemId}
            onSelectMethod={(id) => handleSelectNav('money', id)}
            searchQuery={searchQuery}
          />
        )}

        {activeSection === 'quests' && (
          <QuestsView
            selectedItemId={selectedItemId}
            onSelectQuest={(id) => handleSelectNav('quests', id)}
            completedQuests={completedQuests}
            onToggleQuest={handleToggleQuest}
            searchQuery={searchQuery}
          />
        )}
        </main>
      </div>
      <ItemLookupModal />
    </ItemLookupProvider>
  );
}
