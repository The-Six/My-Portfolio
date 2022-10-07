import React from "react";
import "./navbar.css";

function Navbar() {
  return <div className="Navbar">
    <button className="intro_tab"></button>
    <button className="about_tab"></button>
    <button className="projects_tab"></button>
    <button className="skills_tab"></button>
    <button className="contact_tab"></button>
  </div>;
}

export default Navbar;
