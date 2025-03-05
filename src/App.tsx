import React, { Suspense, lazy, useState } from "react";
import { processEndorsements } from "./Utils/processData";
import { Endorsement } from "./types";

const SkillList = lazy(() => import("./components/SkillList"));

const endorsements: Endorsement[] = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

const App: React.FC = () => {
  const [skills, setSkills] = useState(processEndorsements(endorsements));

  return (
    <main className="app">
      <header>
        <h1>Professional Endorsements</h1>
      </header>
      <Suspense fallback={<p>Loading skills...</p>}>
        <SkillList skills={skills} />
      </Suspense>
    </main>
  );
};

export default App;
