import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [intro, setIntro] = useState("selector_tab");
  const [about, setAbout] = useState("about_tab");
  const [projects, setProjects] = useState("projects_tab");
  const [skills, setSkills] = useState("skills_tab");
  const [contact, setContact] = useState("contact_tab");
  return (
    <div className="App">
      <Navbar
        intro={intro}
        about={about}
        projects={projects}
        skills={skills}
        contact={contact}
        setIntro={setIntro}
        setAbout={setAbout}
        setProjects={setProjects}
        setSkills={setSkills}
        setContact={setContact}
      />
      {intro === "selector_tab" ? <Intro /> : <></>}
      {about === "selector_tab" ? <About /> : <></>}
      {projects === "selector_tab" ? <Projects /> : <></>}
      {skills === "selector_tab" ? <Skills /> : <></>}
      {contact === "selector_tab" ? <Contact /> : <></>}
      <Footer/>
    </div>
  );
}

export default App;
