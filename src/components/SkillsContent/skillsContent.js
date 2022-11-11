import React from "react";
import "./skillsContent.css";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiCanva, SiTrello, SiSlack, SiJirasoftware, SiMicrosoftteams } from "react-icons/si";

function SkillsContent({ sectionDisplayed }) {
  if (sectionDisplayed === "techStk") {
    return (
      <div className="Container">
        <div className="TopSection">
        <IoLogoJavascript className="logo"/>
        </div>
        <div className="pipMan">
          <div className="MidSection">
          <IoLogoHtml5 className="logo"/>
          <IoLogoCss3 className="logo"/>
          </div>
          <div className="BottomSection">
          <FaReact className="logo"/>
          <SiNextdotjs className="logo"/>
          </div>
        </div>
      </div>
    );
  } else if (sectionDisplayed === "skills")
    return <div className="Container">
    <div className="TopSection">
    <SiCanva className="logo"/>
    </div>
    <div className="pipMan">
      <div className="MidSection">
      <SiTrello className="logo"/>
      <SiSlack className="logo"/>
      </div>
      <div className="BottomSection">
      <SiJirasoftware className="logo"/>
      <SiMicrosoftteams className="logo"/>
      </div>
    </div>
  </div>
}

export default SkillsContent;
