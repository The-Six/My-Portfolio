import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="inbetween_box"></div>
      <button className="selector_tab"></button>
      <div className="inbetween_box"></div>
      <button className="about_tab"></button>
      <div className="inbetween_box"></div>
      <button className="projects_tab"></button>
      <div className="inbetween_box"></div>
      <button className="skills_tab"></button>
      <div className="inbetween_box"></div>
      <button className="contact_tab"></button>
      <div className="inbetween_box"></div>
    </div>
  );
}

export default Navbar;
