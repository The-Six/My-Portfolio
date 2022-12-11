import React from "react";
import "./skillsContent.css";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiCanva, SiTrello, SiSlack, SiJirasoftware, SiMicrosoftteams } from "react-icons/si";

function SkillsContent({ sectionDisplayed }) {
  if (sectionDisplayed === "techStk") {
    return (
      <div className="Container">
        {/* <div className="pipMan"> */}
        <div className="TopSection">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank" rel="noopener noreferrer">
        <IoLogoJavascript className="logo"/>
        </a>
        </div>
          <div className="MidSection">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="blank" rel="noopener noreferrer">
          <IoLogoHtml5 className="logo"/>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank" rel="noopener noreferrer">
          <IoLogoCss3 className="logo"/>
          </a>
          </div>
          <div className="BottomSection">
          <a href="https://reactjs.org/" target="blank" rel="noopener noreferrer">
          <FaReact className="logo"/>
          </a>
          <a href="https://nextjs.org/" target="blank" rel="noopener noreferrer">
          <SiNextdotjs className="logo"/>
          </a>
          </div>
        {/* </div> */}
      </div>
    );
  } else if (sectionDisplayed === "skills")
    return <div className="Container">
    <div className="TopSection">
    <a href="https://www.canva.com/about/" target="blank" rel="noopener noreferrer">
    <SiCanva className="logo"/>
    </a>
    </div>

      <div className="MidSection">
      <a href="https://trello.com/en/tour" target="blank" rel="noopener noreferrer">
      <SiTrello className="logo"/>
      </a>
      <a href="https://slack.com/intl/en-gb" target="blank" rel="noopener noreferrer">
      <SiSlack className="logo"/>
      </a>
      </div>
      <div className="BottomSection">
      <a href="https://www.atlassian.com/software/jira" target="blank" rel="noopener noreferrer">
      <SiJirasoftware className="logo"/>
      </a>
      <a href="https://www.microsoft.com/en-gb/microsoft-teams/group-chat-software" target="blank" rel="noopener noreferrer">
      <SiMicrosoftteams className="logo"/>
      </a>
      </div>
    
  </div>
}

export default SkillsContent;
