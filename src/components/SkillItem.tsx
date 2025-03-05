import React from "react";
import { ProcessedSkill } from "../types";

const SkillItem: React.FC<{ skill: ProcessedSkill }> = React.memo(
  ({ skill }) => {
    return (
      <article className="skill-item">
        <h3>
          {skill.skill} <span>({skill.count} endorsements)</span>
        </h3>
        <ul aria-label={`List of users who endorsed ${skill.skill}`}>
          {skill.users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </article>
    );
  }
);

export default SkillItem;
