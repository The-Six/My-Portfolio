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
      {/* <img src="https://gifimage.net/wp-content/uploads/2018/04/pip-boy-gif-3.gif" alt="pipBoy"/> */}
      <Slider/>
    </div>
  );
}

export default Projects;
