import { Endorsement, ProcessedSkill } from "../types";

export const processEndorsements = (
  endorsements: Endorsement[]
): ProcessedSkill[] => {
  const skillMap: Record<string, Set<string>> = {};

  endorsements.forEach(({ skill, user }) => {
    if (!skillMap[skill]) {
      skillMap[skill] = new Set();
    }
    skillMap[skill].add(user);
  });

  return Object.entries(skillMap).map(([skill, users]) => ({
    skill,
    users: Array.from(users),
    count: users.size,
  }));
};
