import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profilePic/pranjalvidyarthi.jpg";
import "../css/Home.css";
import React, { useEffect, useState } from "react";

/* ================= PROJECTS ================= */
const projects = [
  {
    id: 1,
    title: "System Monitor",
    description: "Language used – Python",
    video: "https://www.youtube.com/embed/wBMuIOiQ3lE",
    link: "https://github.com/pranjalvidyarthi/Python-Projects",
    badge: "NEW",
  },
  {
    id: 2,
    title: "Linux Advance Login Alert System",
    description:
      "Helps system administrators & cybersecurity learners.",
    video: "https://www.youtube.com/embed/aMvPSG2jGKw",
    link: "https://www.youtube.com/embed/aMvPSG2jGKw",
  },
  {
    id: 3,
    title: "Creative Login/SignUp Form",
    description: "Creative Login/Signup Form using pure CSS",
    video: "https://youtube.com/embed/kt-10rlQJoY",
    link: "https://youtu.be/kt-10rlQJoY",
  },

  // ✅ UI COMPONENT PROJECT
  {
    id: 4,
    title: "Happy New Year 2026 🎉",
    description: "Creative New Year animation using HTML, CSS & JS",
    preview:
      "https://pranjalvidyarthi.github.io/Modern_UI_Designs/29.Happy%20New%20Year%202026.html",
    link:
      "https://github.com/pranjalvidyarthi/Modern_UI_Designs/blob/main/29.Happy%20New%20Year%202026.html",
    badge: "NEW",
  },
];

/* ================= SKILLS ================= */
const skills = [
  {
    id: 1,
    title: "Python",
    rating: 4,
    description: "GUI, automation, scripts",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 2,
    title: "HTML / CSS / JS",
    rating: 4,
    description: "Responsive UI & animations",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: 3,
    title: "React.js",
    rating: 4.5,
    description: "SPA with Router & Vite",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
];

const Home = () => {
  /* ================= TYPING EFFECT ================= */
  const text = "Hi, I'm Pranjal";
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const delayAfterTyping = 1200;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayAfterTyping);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div>
      {/* ================= HERO ================= */}
      <header className="py-5 themed-section">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <img
            src={profilePic}
            alt="Pranjal"
            className="rounded-circle shadow"
            style={{ width: "240px", height: "240px", objectFit: "cover" }}
          />

          <div className="ms-md-5 text-center text-md-start mt-4 mt-md-0">
            <h1 className="fw-bold display-5">
              {displayText}
              <span className="typing-cursor">|</span>
            </h1>

            <p className="lead">
              Self-taught developer, ethical hacking enthusiast & content creator
              from India.
            </p>

            <a
              href="https://www.youtube.com/@the_creative_coder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-lg"
            >
              View My Works
            </a>
          </div>
        </div>
      </header>

      {/* ================= SKILLS ================= */}
      <section className="py-5 themed-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">My Skills</h2>

          {skills.map((skill) => (
            <div key={skill.id}>
              <div className="row align-items-center py-4">
                <div className="col-md-6">
                  <h5 className="fw-bold">{skill.title}</h5>

                  <div>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        {i < skill.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted mt-2">{skill.description}</p>
                </div>

                <div className="col-md-6 text-center">
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="skill-img"
                  />
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-5 themed-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">My Projects</h2>

          <div className="row">
            {projects.map((project) => (
              <div className="col-md-4 mb-4" key={project.id}>
                <div className="card h-100 shadow project-card">

                  {/* VIDEO or UI PREVIEW */}
                  <div className="ratio ratio-16x9">
                    {project.video ? (
                      <iframe
                        src={project.video}
                        title={project.title}
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <iframe
                        src={project.preview}
                        title={project.title}
                        loading="lazy"
                        style={{ border: "none" }}
                      ></iframe>
                    )}
                  </div>

                  <div className="card-body">
                    <h5 className="d-flex align-items-center gap-2">
                      {project.title}
                      {project.badge && (
                        <span className="new-badge">{project.badge}</span>
                      )}
                    </h5>

                    <p>{project.description}</p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
