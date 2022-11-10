import React from "react";

function SkillsContent({ sectionDisplayed }) {
  if (sectionDisplayed === "techStk") {
    return <div>Tech Stk</div>;
  } else if (sectionDisplayed === "skills") return <div>Skills</div>;
}

export default SkillsContent;
