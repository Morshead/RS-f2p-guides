import React from 'react';
import {
  Shield,
  Pickaxe,
  Swords,
  Coins,
  ScrollText,
  ChevronDown,
  ChevronRight,
  Search,
  Compass,
  PanelLeftClose,
  PanelLeftOpen,
  X
} from 'lucide-react';
import {
  SKILLS_DATA,
  PVM_DATA,
  MONEY_MAKING_DATA,
  QUESTS_DATA
} from '../../data/guideData';

export default function Sidebar({
  activeSection,
  selectedItemId,
  onSelectNav,
  sidebarCollapsed,
  onToggleSidebar,
  openMenus,
  onToggleMenu,
  onToggleAllMenus,
  searchQuery,
  onSearchChange,
  completedQuests
}) {
  const q = searchQuery.trim().toLowerCase();

  const matchingSkills = SKILLS_DATA.filter(
    (s) =>
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
  );

  const matchingPvm = PVM_DATA.filter(
    (p) =>
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.combatRange.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.options.some(
        (opt) =>
          opt.name.toLowerCase().includes(q) ||
          opt.lootDrops.some((d) => d.item.toLowerCase().includes(q))
      )
  );

  const matchingMoney = MONEY_MAKING_DATA.filter(
    (m) =>
      !q ||
      m.title.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q)
  );

  const matchingQuests = QUESTS_DATA.filter(
    (quest) =>
      !q ||
      quest.name.toLowerCase().includes(q) ||
      quest.priority.toLowerCase().includes(q)
  );

  const completedQuestCount = Object.values(completedQuests).filter(Boolean).length;

  return (
    <aside className={`sidebar glass-panel ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="brand-bar">
        {!sidebarCollapsed && (
          <div
            className="brand-title"
            onClick={() => onSelectNav('overview', 'all')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectNav('overview', 'all');
              }
            }}
          >
            <div className="brand-icon-box">
              <Shield size={16} />
            </div>
            <div className="brand-text-group">
              <span className="brand-kicker">SYS // BLUEPRINT</span>
              <span className="brand-name">RS3 F2P GIM</span>
            </div>
          </div>
        )}
        <button
          type="button"
          className="icon-btn"
          onClick={onToggleSidebar}
          title={sidebarCollapsed ? 'Expand navigation panel' : 'Collapse navigation panel'}
        >
          {sidebarCollapsed ? <PanelLeftOpen size={14} /> : <PanelLeftClose size={14} />}
        </button>
      </div>

      {!sidebarCollapsed ? (
        <div className="sidebar-scroll">
          {/* Quick Search Filter */}
          <div className="sidebar-search">
            <Search size={12} className="sidebar-search-icon" />
            <input
              type="text"
              placeholder="Filter navigation..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="sidebar-search-clear"
                onClick={() => onSearchChange('')}
                title="Clear search"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Menu Visibility Controls */}
          <div className="menu-controls-row">
            <span>MAIN MENU</span>
            <div className="menu-controls-actions">
              <button
                type="button"
                onClick={() => onToggleAllMenus(true)}
                title="Show all menu items"
              >
                EXPAND
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => onToggleAllMenus(false)}
                title="Hide all menu items"
              >
                COLLAPSE
              </button>
            </div>
          </div>

          {/* Overview Link */}
          <div className="nav-group">
            <button
              type="button"
              className={`nav-section-header ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => onSelectNav('overview', 'all')}
            >
              <span className="nav-header-left">
                <Compass size={14} />
                <span>Overview &amp; Roles</span>
              </span>
              <span className="nav-count">HUB</span>
            </button>
          </div>

          {/* SKILLS MENU */}
          <div className="nav-group">
            <div className="nav-group-label">SKILLS CATALOG</div>
            <div className="nav-section-row">
              <button
                type="button"
                className={`nav-section-header ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => onSelectNav('skills', 'all')}
              >
                <span className="nav-header-left">
                  <Pickaxe size={14} />
                  <span>All Skills</span>
                </span>
                <span className="nav-count">{matchingSkills.length}</span>
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => onToggleMenu('skills')}
                title={openMenus.skills ? 'Hide Skills menu items' : 'Show Skills menu items'}
                aria-expanded={openMenus.skills}
              >
                {openMenus.skills ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
              </button>
            </div>

            {openMenus.skills && (
              <div className="nav-submenu">
                <button
                  type="button"
                  className={`nav-subitem ${
                    activeSection === 'skills' && selectedItemId === 'all' ? 'active' : ''
                  }`}
                  onClick={() => onSelectNav('skills', 'all')}
                >
                  <span>All F2P Skills</span>
                  <span className="subitem-tag">ALL</span>
                </button>
                {matchingSkills.map((skill) => (
                  <button
                    key={skill.id}
                    type="button"
                    className={`nav-subitem ${
                      activeSection === 'skills' && selectedItemId === skill.id ? 'active' : ''
                    }`}
                    onClick={() => onSelectNav('skills', skill.id)}
                  >
                    <span className="nav-subitem-label">{skill.name}</span>
                    <span className="subitem-tag">{skill.maxF2pLevel.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* MONEY MAKING MENU */}
          <div className="nav-group">
            <div className="nav-group-label">ECONOMY &amp; GP</div>
            <div className="nav-section-row">
              <button
                type="button"
                className={`nav-section-header ${activeSection === 'money' ? 'active' : ''}`}
                onClick={() => onSelectNav('money', 'all')}
              >
                <span className="nav-header-left">
                  <Coins size={14} />
                  <span>Money Making</span>
                </span>
                <span className="nav-count">{matchingMoney.length}</span>
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => onToggleMenu('money')}
                title={openMenus.money ? 'Hide Money Making items' : 'Show Money Making items'}
                aria-expanded={openMenus.money}
              >
                {openMenus.money ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
              </button>
            </div>

            {openMenus.money && (
              <div className="nav-submenu">
                <button
                  type="button"
                  className={`nav-subitem ${
                    activeSection === 'money' && selectedItemId === 'all' ? 'active' : ''
                  }`}
                  onClick={() => onSelectNav('money', 'all')}
                >
                  <span>All GP Methods</span>
                  <span className="subitem-tag">ALL</span>
                </button>
                {matchingMoney.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    className={`nav-subitem ${
                      activeSection === 'money' && selectedItemId === method.id ? 'active' : ''
                    }`}
                    onClick={() => onSelectNav('money', method.id)}
                  >
                    <span className="nav-subitem-label">{method.title}</span>
                    <span className="subitem-tag">GP</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PVM & BOSS LOOT MENU */}
          <div className="nav-group">
            <div className="nav-group-label">PVM &amp; BOSS LOOT</div>
            <div className="nav-section-row">
              <button
                type="button"
                className={`nav-section-header ${activeSection === 'pvm' ? 'active' : ''}`}
                onClick={() => onSelectNav('pvm', 'all')}
              >
                <span className="nav-header-left">
                  <Swords size={14} />
                  <span>PvM &amp; Drops</span>
                </span>
                <span className="nav-count">{matchingPvm.length}</span>
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => onToggleMenu('pvm')}
                title={openMenus.pvm ? 'Hide PvM items' : 'Show PvM items'}
                aria-expanded={openMenus.pvm}
              >
                {openMenus.pvm ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
              </button>
            </div>

            {openMenus.pvm && (
              <div className="nav-submenu">
                <button
                  type="button"
                  className={`nav-subitem ${
                    activeSection === 'pvm' && selectedItemId === 'all' ? 'active' : ''
                  }`}
                  onClick={() => onSelectNav('pvm', 'all')}
                >
                  <span>All Combat Brackets</span>
                  <span className="subitem-tag">ALL</span>
                </button>
                {matchingPvm.map((entry) => (
                  <button
                    key={entry.id}
                    type="button"
                    className={`nav-subitem ${
                      activeSection === 'pvm' && selectedItemId === entry.id ? 'active' : ''
                    }`}
                    onClick={() => onSelectNav('pvm', entry.id)}
                  >
                    <span className="nav-subitem-label">{entry.name}</span>
                    <span className="subitem-tag">{entry.options.length}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* QUESTS MENU */}
          <div className="nav-group">
            <div className="nav-group-label">QUEST LEDGER</div>
            <div className="nav-section-row">
              <button
                type="button"
                className={`nav-section-header ${activeSection === 'quests' ? 'active' : ''}`}
                onClick={() => onSelectNav('quests', 'all')}
              >
                <span className="nav-header-left">
                  <ScrollText size={14} />
                  <span>Quests &amp; Order</span>
                </span>
                <span className="nav-count">
                  {completedQuestCount}/{QUESTS_DATA.length}
                </span>
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => onToggleMenu('quests')}
                title={openMenus.quests ? 'Hide Quests menu items' : 'Show Quests menu items'}
                aria-expanded={openMenus.quests}
              >
                {openMenus.quests ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
              </button>
            </div>

            {openMenus.quests && (
              <div className="nav-submenu">
                <button
                  type="button"
                  className={`nav-subitem ${
                    activeSection === 'quests' && selectedItemId === 'all' ? 'active' : ''
                  }`}
                  onClick={() => onSelectNav('quests', 'all')}
                >
                  <span>All Priority Quests</span>
                  <span className="subitem-tag">ALL</span>
                </button>
                {matchingQuests.map((quest) => {
                  const isDone = !!completedQuests[quest.id];
                  return (
                    <button
                      key={quest.id}
                      type="button"
                      className={`nav-subitem ${
                        activeSection === 'quests' && selectedItemId === quest.id ? 'active' : ''
                      }`}
                      onClick={() => onSelectNav('quests', quest.id)}
                    >
                      <span className="nav-subitem-label">{quest.name}</span>
                      <span className={`subitem-tag ${isDone ? 'done' : ''}`}>
                        {isDone ? 'OK' : `${quest.qp}QP`}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="collapsed-rail">
          <button
            type="button"
            className={`icon-btn rail-btn ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => onSelectNav('overview', 'all')}
            title="GIM Overview & Roles"
          >
            <Compass size={16} />
          </button>
          <button
            type="button"
            className={`icon-btn rail-btn ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => onSelectNav('skills', 'all')}
            title="Skills (1–99 F2P)"
          >
            <Pickaxe size={16} />
          </button>
          <button
            type="button"
            className={`icon-btn rail-btn ${activeSection === 'pvm' ? 'active' : ''}`}
            onClick={() => onSelectNav('pvm', 'all')}
            title="PvM & Boss Loot"
          >
            <Swords size={16} />
          </button>
          <button
            type="button"
            className={`icon-btn rail-btn ${activeSection === 'money' ? 'active' : ''}`}
            onClick={() => onSelectNav('money', 'all')}
            title="Money Making"
          >
            <Coins size={16} />
          </button>
          <button
            type="button"
            className={`icon-btn rail-btn ${activeSection === 'quests' ? 'active' : ''}`}
            onClick={() => onSelectNav('quests', 'all')}
            title="Quests & Order"
          >
            <ScrollText size={16} />
          </button>
        </div>
      )}
    </aside>
  );
}
