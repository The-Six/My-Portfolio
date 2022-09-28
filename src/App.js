import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact/>
    </div>
  );
}

export default App;
