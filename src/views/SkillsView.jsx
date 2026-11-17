import React, { useState, useMemo } from 'react';
import {
  Pickaxe,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ScrollText,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import { SKILLS_DATA } from '../data/guideData';

const SKILL_FILTERS = ['All', 'Combat', 'Artisan', 'Gathering', 'Support'];

export default function SkillsView({
  selectedItemId,
  onSelectSkill,
  searchQuery
}) {
  const [activeFilter, setActiveFilter] = useState('All');
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
        skill.brackets.some(
          (b) =>
            b.method.toLowerCase().includes(q) ||
            b.location.toLowerCase().includes(q)
        )
      );
    });
  }, [activeFilter, q]);

  const focusedSkillIndex = SKILLS_DATA.findIndex((s) => s.id === selectedItemId);
  const focusedSkill = focusedSkillIndex >= 0 ? SKILLS_DATA[focusedSkillIndex] : null;

  // FOCUSED SINGLE-SKILL GUIDE
  if (focusedSkill) {
    const prevSkill =
      focusedSkillIndex > 0 ? SKILLS_DATA[focusedSkillIndex - 1] : null;
    const nextSkill =
      focusedSkillIndex < SKILLS_DATA.length - 1
        ? SKILLS_DATA[focusedSkillIndex + 1]
        : null;

    return (
      <div className="view-stack">
        <SectionHeader
          icon={Pickaxe}
          title={focusedSkill.name}
          subtitle={`${focusedSkill.category} • Max F2P Level: ${focusedSkill.maxF2pLevel} • ${focusedSkill.tier}`}
          actions={
            <div className="nav-action-group">
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

        {/* Overview & GIM Synergy */}
        <GlassCard padding="spacious">
          <p className="focused-overview">{focusedSkill.overview}</p>
          <CalloutBanner label="Group Ironman Synergy" variant="blue">
            {focusedSkill.gimSynergy}
          </CalloutBanner>
        </GlassCard>

        {/* Leveling Brackets Table */}
        <GlassCard
          title="1–99 F2P Leveling Path"
          subtitle="Recommended methods, locations, and RS3/GIM optimizations"
          badge={<Badge variant="emerald">{focusedSkill.brackets.length} Brackets</Badge>}
        >
          <div className="table-wrap">
            <table className="compact-table">
              <thead>
                <tr>
                  <th style={{ width: '76px' }}>Levels</th>
                  <th>Training Method</th>
                  <th>Location</th>
                  <th>RS3 &amp; GIM Notes</th>
                </tr>
              </thead>
              <tbody>
                {focusedSkill.brackets.map((b, i) => (
                  <tr key={i}>
                    <td className="mono level-cell">{b.levels}</td>
                    <td className="method-cell">{b.method}</td>
                    <td>{b.location}</td>
                    <td className="notes-cell">{b.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Quests & Pro Tips side-by-side */}
        <div className="dense-grid-2">
          <GlassCard
            icon={ScrollText}
            title="Quest XP Skips & Unlocks"
            badge={<Badge variant="amber">{focusedSkill.quests.length} Quests</Badge>}
          >
            <div className="quest-skip-list">
              {focusedSkill.quests.map((quest, idx) => (
                <div key={idx} className="sub-surface">
                  <div className="sub-surface-header">
                    <span className="sub-surface-title">{quest.name}</span>
                    <Badge variant="emerald">{quest.xp}</Badge>
                  </div>
                  <div className="card-desc">Requirements: {quest.req}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard
            icon={Lightbulb}
            title="RS3 & Group Ironman Pro Tips"
            badge={<Badge variant="indigo">Key Advice</Badge>}
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

  // CATALOG MODE (Clean Scannable Cards)
  return (
    <div className="view-stack">
      <SectionHeader
        icon={Pickaxe}
        title="F2P Skills Catalog (1–99)"
        subtitle="Select any skill card or sidebar entry to inspect full leveling brackets, quest XP skips, and GIM tips."
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
          {filteredSkills.map((skill) => (
            <GlassCard
              key={skill.id}
              interactive
              onClick={() => onSelectSkill(skill.id)}
              icon={Pickaxe}
              title={skill.name}
              subtitle={`${skill.category} • Max ${skill.maxF2pLevel}`}
              badge={
                <Badge
                  variant={
                    skill.tier.startsWith('S-Tier')
                      ? 'emerald'
                      : skill.tier.startsWith('A-Tier')
                      ? 'blue'
                      : 'amber'
                  }
                >
                  {skill.tier.replace(' GIM Priority', '')}
                </Badge>
              }
            >
              <p className="card-desc">{skill.overview}</p>

              <CalloutBanner label="GIM Synergy" variant="blue">
                {skill.gimSynergy}
              </CalloutBanner>

              <div className="card-footer-meta">
                <span className="meta-chip">
                  {skill.brackets.length} Level Brackets • {skill.quests.length} Quests
                </span>
                <span className="card-footer-link">
                  <span>View Full Guide</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
