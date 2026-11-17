import { SKILLING_METHODS } from './skillMethodsSkilling.js';
import { COMBAT_METHODS } from './skillMethodsCombat.js';
import { SKILL_MECHANICS_MAP } from './skillMechanicsData.js';

export const SKILL_METHODS_MAP = {
  ...SKILLING_METHODS,
  ...COMBAT_METHODS
};

/**
 * Merges multi-method, walkthrough, map schematic, and cross-guide link metadata
 * onto base skill definitions while preserving backward-compatible bracket fields.
 */
export function enrichSkillsData(baseSkills) {
  return baseSkills.map((skill) => {
    const rich = SKILL_METHODS_MAP[skill.id];
    if (!rich) return skill;

    const mergedBrackets = rich.brackets.map((b) => {
      const rec = b.methods[0];
      return {
        levels: b.levels,
        method: rec.method,
        prereqs: rec.prereqs,
        location: rec.location,
        xpPerHour: rec.xpPerHour,
        ironmanPrep: rec.ironmanPrep,
        gpPerHour: rec.gpPerHour,
        gpTrend: rec.gpTrend,
        whereToSell: rec.whereToSell,
        notes: rec.notes,
        methods: b.methods
      };
    });

    return {
      ...skill,
      skillPrereqLinks: rich.skillPrereqLinks || [],
      mechanics: SKILL_MECHANICS_MAP[skill.id] || [],
      brackets: mergedBrackets
    };
  });
}
