import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ResearchProjects from "./components/ResearchProjects";
import ResearchInterests from "./components/ResearchInterests";
import TechnicalSkills from "./components/TechnicalSkills";
import Education from "./components/Education";
import CV from "./components/Cv";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="research">
          <ResearchProjects />
        </section>

        <section id="interests">
          <ResearchInterests />
        </section>

        <section id="skills">
          <TechnicalSkills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="cv">
          <CV />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
