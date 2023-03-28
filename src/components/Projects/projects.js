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
      <div className="projectsImage"></div>
      {/* <img src="https://media.tenor.com/yasksYy1XekAAAAC/matrix-code.gif" alt="pipBoy"/> */}
      <Slider/>
    </div>
  );
}

export default Projects;
