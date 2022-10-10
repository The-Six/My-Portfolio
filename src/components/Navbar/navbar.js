import React from "react";
import "./navbar.css";
import { useState } from "react";

function Navbar({
  intro,
  about,
  projects,
  skills,
  contact,
  setIntro,
  setAbout,
  setProjects,
  setSkills,
  setContact,
}) {
  function setStyles(input) {
    if (input === 1) {
      setIntro("selector_tab");
      setAbout("about_tab");
      setProjects("projects_tab");
      setSkills("skills_tab");
      setContact("contact_tab");
    } else if (input === 2) {
      setIntro("intro_tab");
      setAbout("selector_tab");
      setProjects("projects_tab");
      setSkills("skills_tab");
      setContact("contact_tab");
    } else if (input === 3) {
      setIntro("intro_tab");
      setAbout("about_tab");
      setProjects("selector_tab");
      setSkills("skills_tab");
      setContact("contact_tab");
    } else if (input === 4) {
      setIntro("intro_tab");
      setAbout("about_tab");
      setProjects("projects_tab");
      setSkills("selector_tab");
      setContact("contact_tab");
    } else if (input === 5) {
      setIntro("intro_tab");
      setAbout("about_tab");
      setProjects("projects_tab");
      setSkills("skills_tab");
      setContact("selector_tab");
    }
  }

  return (
    <div className="Navbar">
      <div className="inbetween_box"></div>
      <button className={intro} onClick={() => setStyles(1)}></button>
      <div className="inbetween_box"></div>
      <button className={about} onClick={() => setStyles(2)}></button>
      <div className="inbetween_box"></div>
      <button className={projects} onClick={() => setStyles(3)}></button>
      <div className="inbetween_box"></div>
      <button className={skills} onClick={() => setStyles(4)}></button>
      <div className="inbetween_box"></div>
      <button className={contact} onClick={() => setStyles(5)}></button>
      <div className="inbetween_box"></div>
    </div>
  );
}

export default Navbar;
