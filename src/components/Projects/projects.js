import React from "react";
import "./projects.css";
import Slider from "../Slider/slider.js"

function Projects() {
  return (
    <div className="Projects">
      <div className="projects_box">
        <div className="left_projectsBar"></div>
        <div className="projects_text">P R O J E C T S</div>
        <div className="right_projectsBar"></div>
      </div>
      <div><Slider/></div>
    </div>
  );
}

export default Projects;
