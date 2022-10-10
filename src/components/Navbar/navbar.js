import React from "react";
import "./navbar.css";
import {useState} from "react";


function Navbar() {
  const [selected, setSelected] = useState("selector_tab")
  return (
    <div className="Navbar">
      <div className="inbetween_box"></div>
      <button className="intro_tab"></button>
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
