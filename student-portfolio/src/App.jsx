import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Weather Dashboard",
    type: "Web Application",
    description: "A simple weather application that displays useful weather information.",
    tech: "React · API · CSS",
    link: "#",
  },
  {
    number: "02",
    name: "Student Portal",
    type: "Web Development",
    description: "A student-focused platform for organizing and accessing information.",
    tech: "HTML · CSS · JavaScript",
    link: "#",
  },
  {
    number: "03",
    name: "Personal Portfolio",
    type: "Personal Project",
    description: "A personal space to showcase my skills, projects, and progress.",
    tech: "React · Vite · CSS",
    link: "#",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          jude<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">Let's talk ↗</a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              STUDENT DEVELOPER · CONTINUOUSLY LEARNING
            </p>

            <h1>
              Hello, I'm
              <br />
              <span>Jude Don.</span>
              <br />
              I build things
              <br />
              for the web<span className="green-dot">.</span>
            </h1>

            <p className="hero-description">
              An aspiring developer and Information Technology student
              passionate about programming, web development, and turning
              creative ideas into useful digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                Explore my work <span>↗</span>
              </a>
              <a href="#about" className="button-text">
                More about me ↓
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="side-line"></div>
            <p>BASED IN THE PHILIPPINES</p>
            <p>AVAILABLE FOR LEARNING<br />AND COLLABORATION</p>
            <span className="side-number">01 / 04</span>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span>© 2026 JUDE DON</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-number">01 — ABOUT</span>
            <h2>A little about<br />what I do.</h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I’m a student developer who enjoys learning how technology
              works and creating things with it.
            </p>
            <p className="muted">
              I’m currently developing my skills in programming, web
              development, and database management. I believe every project
              is an opportunity to learn something new and become better
              at what I do.
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-number">02 — SKILLS</span>
            <h2>Tools I work<br />and learn with.</h2>
          </div>

          <div className="skills-list">
            {[
              ["01", "HTML & CSS", "Building web interfaces"],
              ["02", "JavaScript", "Adding functionality"],
              ["03", "React", "Building user interfaces"],
              ["04", "Python", "Programming fundamentals"],
              ["05", "MySQL", "Working with databases"],
              ["06", "Git & GitHub", "Version control"],
            ].map(([number, name, description]) => (
              <div className="skill-row" key={number}>
                <span className="skill-number">{number}</span>
                <h3>{name}</h3>
                <span className="skill-description">{description}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-number">03 — SELECTED WORK</span>
            <h2>Things I've<br />been building.</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="project-tech">{project.tech}</span>
                </div>
                <a
                  href={project.link}
                  className="project-link"
                  aria-label={`View ${project.name}`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
          <p className="project-note">
            Replace these sample projects and links with your actual work.
          </p>
        </section>

        <section className="contact-section section" id="contact">
          <span className="section-number">04 — GET IN TOUCH</span>
          <h2>Have an idea?<br />Let's build it.</h2>
          <p>
            I'm always open to learning, collaborating, and connecting
            with people who share the same passion for technology.
          </p>
          <a className="button-primary" href="mailto:your.email@example.com">
            Send me an email ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">jude<span>.</span></a>
        <span>Designed & built by Jude Don.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;