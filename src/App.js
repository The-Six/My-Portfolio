import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="Main">
      <section className="Intro_about">
      <Intro />
      <About />
      </section>
      <Projects />
      <Skills />
      <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
