import React, { useMemo } from "react";
import { ProcessedSkill } from "../types";
import SkillItem from "./SkillItem";

const SkillList: React.FC<{ skills: ProcessedSkill[] }> = ({ skills }) => {
  const sortedSkills = useMemo(() => {
    return [...skills].sort((a, b) => b.count - a.count);
  }, [skills]);

  return (
    <section className="skill-list" aria-labelledby="skills-title">
      <h2 id="skills-title">Skill Endorsements</h2>
      <ol>
        {sortedSkills.map((skill) => (
          <li key={skill.skill}>
            <SkillItem skill={skill} />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default SkillList;
