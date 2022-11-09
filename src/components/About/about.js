import React from "react";
import "./about.css";

function About() {
  return (
    <div className="About">
      <div className="about_box">
        <div className="left_aboutBar"></div>
        <div className="about_text">A B O U T</div>
        <div className="right_aboutBar"></div>
      </div>
      <div className="aboutImage"></div>
      <div className="about_textBox">
        <p className="about_content">
         Coding initially began as a hobby but I began to see how pivotal software had become in
          our society, I believe it truly rules the world and I want to help
          shape it.
        </p>
      </div>
    </div>
  );
}

export default About;
