import React from "react";
import "./skills.css";
import { useState } from "react";
import SkillsContent from "../SkillsContent/skillsContent";

function Skills() {
  const [sectionDisplayed, setSectionDisplayed] = useState("techStk");
  const [activeButton, setActiveButton] = useState("skillsButtonActive")
  const [unActiveButton, setUnActiveButton] = useState("skillsButton")
  return (
    // <>
    <div className="Skills">
      <div className="skills_box">
        <div className="left_skillsBar">
        <div className="death"></div>
        </div>
        <div className="skills_text">S K I L L S</div>
        <div className="right_skillsBar">
        <div className="deathStar"></div>
        </div>
      </div>
      <div className="skillsContainer">
        <div className="skillsButtonContainer">
          <button
            className={activeButton}
            onClick={() => {setSectionDisplayed("techStk"); setActiveButton("skillsButtonActive"); setUnActiveButton("skillsButton")}}
          >
            Tech Stk
          </button>
          <button
            className={unActiveButton}
            onClick={() => {setSectionDisplayed("skills"); setActiveButton("skillsButton"); setUnActiveButton("skillsButtonActive")}}
          >
            Tools
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
