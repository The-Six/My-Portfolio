import React from "react";
import "./skills.css";
import { useState } from "react";
import SkillsContent from "../SkillsContent/skillsContent";

function Skills() {
  const [sectionDisplayed, setSectionDisplayed] = useState("techStk");

  return (
    // <>
    <div className="Skills">
      <div className="skills_box">
        <div className="left_skillsBar"></div>
        <div className="skills_text">S K I L L S</div>
        <div className="right_skillsBar"></div>
      </div>
      <div className="skillsContainer">
        <div className="skillsButtonContainer">
          <button
            className="skillsButton"
            onClick={() => setSectionDisplayed("techStk")}
          >
            Tech STK
          </button>
          <button
            className="skillsButton"
            onClick={() => setSectionDisplayed("skills")}
          >
            Skills
          </button>
        </div>
        <div className="skillsContent">
          <SkillsContent
            sectionDisplayed={sectionDisplayed}
          />
        </div>
      </div>
    </div>
    // </>
  );
}

export default Skills;
