import React, { useState } from 'react';
import {
  Pickaxe,
  Swords,
  Coins,
  ScrollText,
  Users,
  Sparkles,
  Flame,
  ArrowRight,
  ArrowUpRight,
  RotateCcw,
  Cpu
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import CalloutBanner from '../components/ui/CalloutBanner';
import {
  GeometricSvg,
  AbstractGeometricBox
} from '../components/ui/GeometricPattern';
import {
  GIM_ROLES,
  SKILLS_DATA,
  PVM_DATA,
  MONEY_MAKING_DATA,
  QUESTS_DATA,
  DAILY_CHECKLIST,
  GLOBAL_RS3_MECHANICS
} from '../data/guideData';

const DAY_1_STEPS = [
  {
    step: '1',
    title: 'Burthorpe & Lodestones',
    detail:
      'Claim free Bronze/Elemental weapons, then unlock Burthorpe, Taverley, Lumbridge, Varrock, Falador, Al Kharid, Edgeville, Port Sarim, and Draynor Lodestones.'
  },
  {
    step: '2',
    title: '20,000 Starter GP',
    detail:
      'Complete the Stronghold of Security (Barbarian Village) and Stronghold of Player Safety (Edgeville) for 20,000 GP & Fancy Boots per teammate.'
  },
  {
    step: '3',
    title: 'Skip Early Levels via Quests',
    detail:
      "Complete Doric's Quest → The Knight's Sword (1–29 Smithing), The Restless Ghost + One Piercing Note (1–15 Prayer), and Vampyre Slayer (1–20 Attack)."
  },
  {
    step: '4',
    title: "May's Caravan 250k GP Spike",
    detail:
      'Hit 25 Quest Points quickly and claim a Tier 1 Magical Die from May southwest of Varrock Lodestone for 250,000 GP per group member.'
  },
  {
    step: '5',
    title: '50 Mining/Smithing & 55 Magic',
    detail:
      'Funnel ores to your group Smith for Rune +3 gear and pickaxes while your group Mage rushes 55 Magic (High Alch) and 50 Runecrafting (Runespan).'
  },
  {
    step: '6',
    title: 'Daemonheim Party Floors',
    detail:
      'Run 4–5 player Complexity 6 floors together to unlock Gem Bag (2k), Coal Bag (4k), the 30 DG Maple Resource Dungeon, and Tier 55 Gravite weapons (40k).'
  }
];

export default function OverviewView({
  onNavigate,
  completedQuests,
  completedDailies,
  onToggleDaily,
  onResetDailies
}) {
  const [strategyTab, setStrategyTab] = useState('roles');

  const completedQuestCount = Object.values(completedQuests).filter(Boolean).length;
  const totalQpEarned = QUESTS_DATA.reduce(
    (acc, q) => (completedQuests[q.id] ? acc + q.qp : acc),
    0
  );
  const maxQp = QUESTS_DATA.reduce((acc, q) => acc + q.qp, 0);
  const questPct = Math.round((completedQuestCount / QUESTS_DATA.length) * 100);

  const completedDailyCount = Object.values(completedDailies).filter(Boolean).length;

  return (
    <div className="view-stack">
      {/* 50/50 Blueprint Hero Section */}
      <section className="hero-card">
        <div className="hero-left">
          <div className="hero-meta-row">
            <Badge>BLUEPRINT // V2.0</Badge>
            <span className="meta-label">RS3 FREE-TO-PLAY IRONMAN</span>
          </div>
          <h1 className="hero-title">
            RS3 F2P GROUP IRONMAN COMMAND HUB
          </h1>
          <p className="hero-body">
            Coordinate team specializations, audit Ironman gathering time vs. active XP/hr, track net red/green GP rates across specialty NPC shops, and follow Day 1 quest skips across all 20 F2P skills.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="primary-cta-btn"
              onClick={() => onNavigate('skills', 'all')}
            >
              <span>OPEN 20-SKILL MATRIX</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="hero-right">
          <GeometricSvg variant="hero" />
          <div className="hero-geo-overlay">
            <span className="geo-corner-tag geo-corner-tl">SYS // SCHEMATIC-01</span>
            <span className="geo-corner-tag geo-corner-tr">GRID: 10PX</span>
            <span className="geo-corner-tag geo-corner-bl">MODE: GROUP IRONMAN</span>
            <span className="geo-corner-tag geo-corner-br">
              {SKILLS_DATA.length} SKILLS • {QUESTS_DATA.length} QUESTS
            </span>
          </div>
        </div>
      </section>

      {/* Category Grid Section Header */}
      <div className="category-section-header">
        <div>
          <h2 className="category-section-title">CORE SYSTEM MODULES</h2>
          <p className="category-section-sub">
            SELECT A BLUEPRINT SECTOR TO INSPECT FULL PROGRESSION &amp; SHOP DATA
          </p>
        </div>
        <button
          type="button"
          className="check-all-link"
          onClick={() => onNavigate('skills', 'all')}
        >
          <span>CHECK ALL</span>
          <span className="check-all-circle">
            <ArrowUpRight size={11} />
          </span>
        </button>
      </div>

      {/* 4-Column Abstract Geometric Cards */}
      <div className="summary-grid-4">
        <div
          className="geo-card"
          onClick={() => onNavigate('skills', 'all')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigate('skills', 'all');
            }
          }}
        >
          <AbstractGeometricBox
            icon={Pickaxe}
            variant="grid"
            aspectSquare
            tag="SECTOR-01"
            code="1–99/20/5"
            iconSize={40}
          />
          <div className="geo-card-footer">
            <div className="geo-card-left">
              <div className="geo-card-title">{SKILLS_DATA.length} F2P Skill Guides</div>
              <div className="geo-card-tag">PREREQS • PREP • SELL SHOPS</div>
            </div>
            <div className="geo-card-right">
              <div className="geo-card-metric">ALL 20</div>
              <Badge>IM XP/HR</Badge>
            </div>
          </div>
        </div>

        <div
          className="geo-card"
          onClick={() => onNavigate('pvm', 'all')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigate('pvm', 'all');
            }
          }}
        >
          <AbstractGeometricBox
            icon={Swords}
            variant="triangles"
            aspectSquare
            tag="SECTOR-02"
            code="BOSSES + MOBS"
            iconSize={40}
          />
          <div className="geo-card-footer">
            <div className="geo-card-left">
              <div className="geo-card-title">{PVM_DATA.length} PvM Combat Tiers</div>
              <div className="geo-card-tag">CB 3–126+ • KBD • MOLE • GUD RAIDER</div>
            </div>
            <div className="geo-card-right">
              <div className="geo-card-metric gp-positive">+850K/HR</div>
              <Badge>19 TARGETS</Badge>
            </div>
          </div>
        </div>

        <div
          className="geo-card"
          onClick={() => onNavigate('money', 'all')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigate('money', 'all');
            }
          }}
        >
          <AbstractGeometricBox
            icon={Coins}
            variant="circles"
            aspectSquare
            tag="SECTOR-03"
            code="ALCH + D&D"
            iconSize={40}
          />
          <div className="geo-card-footer">
            <div className="geo-card-left">
              <div className="geo-card-title">{MONEY_MAKING_DATA.length} GIM Money Makers</div>
              <div className="geo-card-tag">MAGICAL DICE • SALVAGE • RUNE +3</div>
            </div>
            <div className="geo-card-right">
              <div className="geo-card-metric gp-positive">+750K/HR</div>
              <Badge>GP ENGINE</Badge>
            </div>
          </div>
        </div>

        <div
          className="geo-card"
          onClick={() => onNavigate('quests', 'all')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigate('quests', 'all');
            }
          }}
        >
          <AbstractGeometricBox
            icon={ScrollText}
            variant="grid"
            aspectSquare
            tag="SECTOR-04"
            code={`${totalQpEarned}/${maxQp} QP`}
            iconSize={40}
          />
          <div className="geo-card-footer">
            <div className="geo-card-left">
              <div className="geo-card-title">{QUESTS_DATA.length} Priority F2P Quests</div>
              <div className="geo-card-tag">
                {completedQuestCount} OF {QUESTS_DATA.length} COMPLETE
              </div>
            </div>
            <div className="geo-card-right">
              <div className="geo-card-metric">{questPct}%</div>
              <Badge>{totalQpEarned} QP</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Split: Tabbed Team Strategy / Mechanics + Daily Checklist */}
      <div className="overview-main-grid">
        <GlassCard
          icon={
            strategyTab === 'roles'
              ? Users
              : strategyTab === 'mechanics'
              ? Cpu
              : Sparkles
          }
          title={
            strategyTab === 'roles'
              ? 'Group Ironman Role Division'
              : strategyTab === 'mechanics'
              ? 'RS3 Core Mechanics for New Players'
              : 'Day 1 Optimal Rush Order'
          }
          subtitle={
            strategyTab === 'roles'
              ? 'Specialize early so your Group Storage unlocks high-tier tools and alchs faster.'
              : strategyTab === 'mechanics'
              ? 'Essential RS3 gameplay mechanics (Lodestones, Tool Belt, Revolution++, Rockertunities, Auto-Urns, PvP Opt-Out).'
              : 'Follow this 6-step sequence on launch day to skip early grinds.'
          }
          headerRight={
            <div className="segmented-control">
              <button
                type="button"
                className={`segmented-btn ${strategyTab === 'roles' ? 'active' : ''}`}
                onClick={() => setStrategyTab('roles')}
              >
                GIM Roles (4)
              </button>
              <button
                type="button"
                className={`segmented-btn ${strategyTab === 'roadmap' ? 'active' : ''}`}
                onClick={() => setStrategyTab('roadmap')}
              >
                Day 1 Rush (6)
              </button>
              <button
                type="button"
                className={`segmented-btn ${strategyTab === 'mechanics' ? 'active' : ''}`}
                onClick={() => setStrategyTab('mechanics')}
              >
                Mechanics ({GLOBAL_RS3_MECHANICS.length})
              </button>
            </div>
          }
        >
          {strategyTab === 'roles' ? (
            <div className="roles-grid-2">
              {GIM_ROLES.map((role) => (
                <div key={role.id} className="sub-surface">
                  <div className="sub-surface-header">
                    <span className="sub-surface-title">{role.title}</span>
                    <Badge variant="blue">{role.badge}</Badge>
                  </div>
                  <div className="role-focus">Focus: {role.focus}</div>
                  <p className="card-desc">{role.summary}</p>
                  <ul className="compact-list">
                    {role.milestones.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : strategyTab === 'mechanics' ? (
            <div className="roles-grid-2">
              {GLOBAL_RS3_MECHANICS.map((mech, idx) => (
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
          ) : (
            <div className="roadmap-list">
              {DAY_1_STEPS.map((item) => (
                <div key={item.step} className="roadmap-item">
                  <div className="roadmap-step-num">{item.step}</div>
                  <div className="roadmap-body">
                    <div className="roadmap-title">{item.title}</div>
                    <p className="card-desc">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </GlassCard>

        {/* Right Column: Daily Routine */}
        <GlassCard
          icon={Flame}
          title="Daily GIM Routine & Shop Runs"
          subtitle={`${completedDailyCount} of ${DAILY_CHECKLIST.length} tasks checked today`}
          headerRight={
            <button
              type="button"
              className="text-action-btn"
              onClick={onResetDailies}
              title="Reset daily checkboxes"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          }
        >
          <div className="checklist-stack">
            {DAILY_CHECKLIST.map((item) => {
              const checked = !!completedDailies[item.id];
              return (
                <label
                  key={item.id}
                  className={`check-row ${checked ? 'completed' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleDaily(item.id)}
                  />
                  <span className="check-row-label">{item.label}</span>
                  <Badge variant="amber">{item.category}</Badge>
                </label>
              );
            })}
          </div>

          <CalloutBanner label="Group Storage Tip" variant="emerald">
            Pool daily Feather Packs (10,000/player/day) and Zaff/Burthorpe elemental runes into shared Group Storage so your Fletcher and Alcher never run dry.
          </CalloutBanner>
        </GlassCard>
      </div>
    </div>
  );
}
