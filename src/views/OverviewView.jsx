import React, { useState } from 'react';
import {
  Compass,
  Pickaxe,
  Coins,
  ScrollText,
  Users,
  Sparkles,
  Flame,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import {
  GIM_ROLES,
  SKILLS_DATA,
  MONEY_MAKING_DATA,
  QUESTS_DATA,
  DAILY_CHECKLIST
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
      <SectionHeader
        icon={Compass}
        title="RS3 F2P Group Ironman Command Hub"
        subtitle="Coordinate team roles, track daily runs, and jump straight into focused skill, GP, or quest guides."
      />

      {/* Quick Navigation Summary Cards */}
      <div className="summary-grid-3">
        <GlassCard
          interactive
          onClick={() => onNavigate('skills', 'all')}
          icon={Pickaxe}
          title={`${SKILLS_DATA.length} F2P Skill Guides`}
          badge={<Badge variant="blue">1–99 Paths</Badge>}
        >
          <p className="card-desc">
            Reworked Mining &amp; Smithing, zero-rune Magic Revolution, F2P Fletching, Runespan, and Daemonheim party training.
          </p>
          <div className="card-footer-link">
            <span>Browse Skill Guides</span>
            <ArrowRight size={14} />
          </div>
        </GlassCard>

        <GlassCard
          interactive
          onClick={() => onNavigate('money', 'all')}
          icon={Coins}
          title={`${MONEY_MAKING_DATA.length} GIM Money Makers`}
          badge={<Badge variant="emerald">Up to 750k/hr</Badge>}
        >
          <p className="card-desc">
            250k Magical Dice milestones, Rune +3 High Alching, Cockroach Soldiers salvage, and daily Shooting Star buffs.
          </p>
          <div className="card-footer-link">
            <span>View GP Methods</span>
            <ArrowRight size={14} />
          </div>
        </GlassCard>

        <GlassCard
          interactive
          onClick={() => onNavigate('quests', 'all')}
          icon={ScrollText}
          title={`${QUESTS_DATA.length} Priority F2P Quests`}
          badge={
            <Badge variant="indigo" mono>
              {totalQpEarned}/{maxQp} QP
            </Badge>
          }
        >
          <p className="card-desc">
            Day 1 XP skips and group-shareable item checklists ({completedQuestCount} of {QUESTS_DATA.length} complete).
          </p>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${questPct}%` }} />
          </div>
          <div className="card-footer-link">
            <span>Open Quest Tracker</span>
            <ArrowRight size={14} />
          </div>
        </GlassCard>
      </div>

      {/* Main Split: Tabbed Team Strategy + Daily Checklist */}
      <div className="overview-main-grid">
        <GlassCard
          icon={strategyTab === 'roles' ? Users : Sparkles}
          title={
            strategyTab === 'roles'
              ? 'Group Ironman Role Division'
              : 'Day 1 Optimal Rush Order'
          }
          subtitle={
            strategyTab === 'roles'
              ? 'Specialize early so your Group Storage unlocks high-tier tools and alchs faster.'
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
