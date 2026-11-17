import React, { useState, useMemo } from 'react';
import {
  Pickaxe,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ScrollText,
  Lightbulb,
  ArrowRight,
  CheckSquare
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import CalloutBanner from '../components/ui/CalloutBanner';
import { AbstractGeometricBox } from '../components/ui/GeometricPattern';
import { SKILLS_DATA } from '../data/guideData';

const SKILL_FILTERS = ['All', 'Combat', 'Artisan', 'Gathering', 'Support', 'F2P Cap 20/5'];
const GEO_VARIANTS = ['grid', 'circles', 'triangles'];

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
        skill.defaultSellLocation.toLowerCase().includes(q) ||
        skill.prerequisites.some((p) => p.toLowerCase().includes(q)) ||
        skill.brackets.some(
          (b) =>
            b.method.toLowerCase().includes(q) ||
            b.location.toLowerCase().includes(q) ||
            b.whereToSell.toLowerCase().includes(q) ||
            b.prereqs.toLowerCase().includes(q)
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
              <Badge variant="blue" mono>
                XP: {focusedSkill.peakXpHr}
              </Badge>
              <Badge
                variant={focusedSkill.gpTrend === 'positive' ? 'emerald' : 'red'}
                mono
              >
                GP: {focusedSkill.netGpHr}
              </Badge>
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

        {/* Prerequisites, Ironman Prep & Where to Sell */}
        <GlassCard
          padding="spacious"
          icon={CheckSquare}
          title="Prerequisites, Ironman Prep & Where to Sell"
          badge={<Badge variant="indigo">{focusedSkill.prerequisites.length} Prerequisites</Badge>}
        >
          <p className="focused-overview">{focusedSkill.overview}</p>

          <div className="prereq-grid">
            {focusedSkill.prerequisites.map((prereq, idx) => (
              <div key={idx} className="prereq-item">
                <span className="prereq-bullet">✓</span>
                <span>{prereq}</span>
              </div>
            ))}
          </div>

          <CalloutBanner label="Ironman Item Gathering & Prep Time" variant="amber">
            {focusedSkill.ironmanGatheringNote}
          </CalloutBanner>

          <CalloutBanner
            label="Where to Sell Items (Ironman Liquidation)"
            variant={focusedSkill.gpTrend === 'positive' ? 'emerald' : 'red'}
          >
            {focusedSkill.defaultSellLocation}
          </CalloutBanner>

          <CalloutBanner label="Group Ironman Synergy" variant="blue">
            {focusedSkill.gimSynergy}
          </CalloutBanner>
        </GlassCard>

        {/* Leveling Brackets Table */}
        <GlassCard
          title={`1–${focusedSkill.maxF2pLevel.split(' ')[0]} F2P Ironman Leveling Path`}
          subtitle="Effective Ironman XP/hr, gathering time, red/green GP/hr, and exact NPC shops or alchemy outlets"
          badge={<Badge variant="emerald">{focusedSkill.brackets.length} Brackets</Badge>}
        >
          <div className="table-wrap">
            <table className="compact-table">
              <thead>
                <tr>
                  <th style={{ width: '88px' }}>Levels</th>
                  <th>Training Method &amp; Prerequisites</th>
                  <th style={{ width: '130px' }}>XP / Hour (Ironman)</th>
                  <th>Ironman Item Gathering Time</th>
                  <th style={{ width: '220px' }}>Money / Hour &amp; Where to Sell</th>
                  <th>RS3 &amp; GIM Notes</th>
                </tr>
              </thead>
              <tbody>
                {focusedSkill.brackets.map((b, i) => (
                  <tr key={i}>
                    <td className="mono level-cell">{b.levels}</td>
                    <td>
                      <div className="method-cell">{b.method}</div>
                      <div className="bracket-prereq">Prereq: {b.prereqs}</div>
                      <div className="bracket-location">📍 {b.location}</div>
                    </td>
                    <td>
                      <span className="mono">{b.xpPerHour}</span>
                    </td>
                    <td>
                      <div className="prep-cell">{b.ironmanPrep}</div>
                    </td>
                    <td>
                      <Badge
                        variant={b.gpTrend === 'positive' ? 'emerald' : 'red'}
                        mono
                      >
                        {b.gpPerHour}
                      </Badge>
                      <div className="sell-where-box">
                        <strong>Where to Sell:</strong> {b.whereToSell}
                      </div>
                    </td>
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
        title="F2P Ironman Skills Catalog (All 20 Guides)"
        subtitle="Includes all 17 full 1–99/120 F2P skills, Level 20 previews (Necromancy & Archaeology), and Level 5 trial skills with XP/hr, Red/Green GP/hr, prep time, and sell shops."
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
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.id}
              className="geo-card skill-geo-card"
              onClick={() => onSelectSkill(skill.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSkill(skill.id);
                }
              }}
            >
              <AbstractGeometricBox
                icon={Pickaxe}
                variant={GEO_VARIANTS[idx % GEO_VARIANTS.length]}
                aspectSquare
                tag={skill.category}
                code={`MAX ${skill.maxF2pLevel.split(' ')[0]}`}
                iconSize={38}
              />

              <div className="geo-card-footer">
                <div className="geo-card-left">
                  <div className="geo-card-title">{skill.name}</div>
                  <div className="geo-card-tag">
                    {skill.brackets.length} BRACKETS • {skill.prerequisites.length} PREREQS • {skill.quests.length} QUESTS
                  </div>
                </div>
                <div className="geo-card-right">
                  <div className="geo-card-metric">{skill.peakXpHr}</div>
                  <Badge
                    variant={skill.gpTrend === 'positive' ? 'emerald' : 'red'}
                    mono
                  >
                    {skill.netGpHr}
                  </Badge>
                </div>
              </div>

              <div className="geo-card-submeta">
                <div>
                  <span className="meta-label">PREREQ:</span>{' '}
                  <span>{skill.prerequisites[0]}</span>
                </div>
                <div>
                  <span className="meta-label">SELL:</span>{' '}
                  <span>{skill.defaultSellLocation}</span>
                </div>
              </div>

              <div className="geo-card-action-row">
                <Badge>{skill.tier.replace(' GIM Priority', '')}</Badge>
                <span className="card-footer-link">
                  <span>OPEN BLUEPRINT</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
