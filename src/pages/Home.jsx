import profilePic from "../assets/profilePic/pranjalvidyarthi.jpg";
import React, { useEffect, useState } from "react";
import "../css/Home.css";
// import "../css/PaidSourcecode.css"
import PaidProjects from "../Components/PaidSourceCode";

/* ================= PROJECTS ================= */
const projects = [
  {
    id: 1,
    title: "System Monitor",
    description: "Language used – Python",
    video: "https://www.youtube.com/embed/wBMuIOiQ3lE",
    link: "https://github.com/pranjalvidyarthi/Python-Projects",
    badge: "NEW",
    tech: "Python",
  },
  {
    id: 2,
    title: "Linux Advance Login Alert System",
    description: "Helps system administrators & cybersecurity learners.",
    video: "https://www.youtube.com/embed/aMvPSG2jGKw",
    link: "https://www.youtube.com/embed/aMvPSG2jGKw",
    tech: "Linux",
  },
  {
    id: 3,
    title: "Creative Login/SignUp Form",
    description: "Creative Login/Signup Form using pure CSS",
    video: "https://youtube.com/embed/kt-10rlQJoY",
    link: "https://youtu.be/kt-10rlQJoY",
    tech: "CSS",
  },
  {
    id: 4,
    title: "Create your first production-ready website using AI",
    description: "Creating a website using AI",
    video:
      // "https://pranjalvidyarthi.github.io/CodeVault/",
      "https://www.youtube.com/embed/G4kiZfA_Xg4",
    link:
      "https://www.youtube.com/watch?v=G4kiZfA_Xg4",
    badge: "NEW",
    tech: "Web Development",
  },
];

/* ================= PAID Projects CODE ================= */
// const paidProjects = [
//   {
//     id: 1,
//     title: "Build your own Website",
//     description:
//       ".",
//     price: "₹499",
//     originalPrice: "₹799",
//     badge: "BESTSELLER",
//     features: [
//       "1 Website",
//       "Only 7 Days support after completetion of website",
//       "Both Dynamic & Static Website available",
//       "30 Times repeation after creating website",
//       "Fully Commented Code",
//     ],
//     tech: ["React", "Node.js", "MongoDB"],
//     color: "#f97316",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Design Package",
//     description:
//       "Premium responsive admin panel with charts, tables, sidebar navigation, dark/light mode, and 10+ pre-built pages.",
//     price: "₹299",
//     originalPrice: "₹599",
//     badge: "HOT",
//     features: [
//       "25+ Pre-built Designs",
//       "Dark & Light Mode",
//       "Responsive for All Devices",
//       "Customizable Components",
//       "Clean Folder Structure",
//     ],
//     tech: ["HTML", "CSS", "JS"],
//     color: "#8b5cf6",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Python Automation Bundle",
//     description:
//       "20+ Python automation scripts – web scraping, file management, email automations, PDF tools, and system utilities bundled with documentation.",
//     price: "₹249",
//     originalPrice: "₹499",
//     badge: "NEW",
//     features: [
//       "20+ Ready-to-Use Scripts",
//       "Web Scraping Toolkit",
//       "Email Automation",
//       "PDF & File Tools",
//       "Detailed Documentation",
//       "Discord Support Access",
//     ],
//     tech: ["Python"],
//     color: "#10b981",
//     link: "#",
//   },
// ];

/* ================= FREE SECTION ================= */
const freeProjects = [
  {
    id: 1,
    title: "Glassmorphism Login Form",
    description: "Stunning glass-effect login UI with blur backdrop",
    preview:
      "https://pranjalvidyarthi.github.io/Modern_UI_Designs/29.Happy%20New%20Year%202026.html",
    link: "https://github.com/pranjalvidyarthi",
    tech: "CSS",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Typing Animation Effect",
    description: "Smooth typewriter text animation in vanilla JS",
    preview: null,
    link: "https://github.com/pranjalvidyarthi",
    tech: "JS",
    icon: "⌨️",
  },
  {
    id: 3,
    title: "Dark Mode Toggle",
    description: "Animated dark/light mode switcher with localStorage",
    preview: null,
    link: "https://github.com/pranjalvidyarthi",
    tech: "JS",
    icon: "🌙",
  },
  {
    id: 4,
    title: "CSS Loader Pack",
    description: "10 pure CSS loading animations, copy-paste ready",
    preview: null,
    link: "https://github.com/pranjalvidyarthi",
    tech: "CSS",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Responsive Navbar",
    description: "Mobile-first hamburger nav with smooth slide animation",
    preview: null,
    link: "https://github.com/pranjalvidyarthi",
    tech: "HTML/CSS",
    icon: "📱",
  },
  {
    id: 6,
    title: "Particle Background JS",
    description: "Interactive floating particles canvas background",
    preview: null,
    link: "https://github.com/pranjalvidyarthi",
    tech: "Canvas",
    icon: "✨",
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
    color: "#3776AB",
  },
  {
    id: 2,
    title: "HTML / CSS / JS",
    rating: 4,
    description: "Responsive UI & animations",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    color: "#e34f26",
  },
  {
    id: 3,
    title: "React.js",
    rating: 4.5,
    description: "SPA with Router & Vite",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    color: "#61dafb",
  },
];

const techColors = {
  Python: "#3776AB",
  "HTML/CSS/JS": "#e34f26",
  "React": "#61dafb",
  "Node.js": "#3c873a",
  "MongoDB": "#47a248",
  HTML: "#e34f26",
  CSS: "#264de4",
  JS: "#f7df1e",
  Linux: "#333",
  "HTML/CSS": "#e34f26",
  Canvas: "#ff6b35",
};

const Home = () => {
  const text = "Hi, I'm Pranjal";
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const delayAfterTyping = 1200;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("all");

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
    <div className="pv-root">

      {/* ===== HERO ===== */}
      <header className="pv-hero">
        <div className="pv-hero-bg-grid" />
        <div className="pv-hero-blob pv-blob-1" />
        <div className="pv-hero-blob pv-blob-2" />
        <div className="container pv-hero-inner">
          <div className="pv-hero-left">
            <span className="pv-hero-eyebrow">Portfolio · 2026</span>
            <h1 className="pv-hero-title">
              {displayText}
              <span className="pv-cursor">|</span>
            </h1>
            <p className="pv-hero-sub">
              Self-taught developer &amp; ethical hacking enthusiast —
              crafting clean code &amp; creative UIs from India 🇮🇳
            </p>
            <div className="pv-hero-actions">
              <a
                href="https://www.youtube.com/@the_creative_coder"
                target="_blank"
                rel="noopener noreferrer"
                className="pv-btn pv-btn-primary"
              >
                View My Works
              </a>
              <a href="#projects" className="pv-btn pv-btn-ghost">
                See Projects ↓
              </a>
            </div>
            <div className="pv-hero-stats">
              <div className="pv-stat"><span className="pv-stat-num">20+</span><span className="pv-stat-label">Projects</span></div>
              <div className="pv-stat-divider" />
              <div className="pv-stat"><span className="pv-stat-num">3+</span><span className="pv-stat-label">Years Coding</span></div>
              <div className="pv-stat-divider" />
              <div className="pv-stat"><span className="pv-stat-num">∞</span><span className="pv-stat-label">Curiosity</span></div>
            </div>
          </div>
          <div className="pv-hero-right">
            <div className="pv-avatar-ring">
              <img
                src={profilePic}
                alt="Pranjal"
                className="pv-avatar"
              />
            </div>
            <div className="pv-avatar-tag pv-tag-1">Python Dev</div>
            <div className="pv-avatar-tag pv-tag-2">UI Designer</div>
            <div className="pv-avatar-tag pv-tag-3">Ethical Hacker</div>
          </div>
        </div>
      </header>

      {/* ===== SKILLS ===== */}
      <section className="pv-section">
        <div className="container">
          <div className="pv-section-header">
            <span className="pv-section-tag">What I Know</span>
            <h2 className="pv-section-title">My Skills</h2>
          </div>
          <div className="pv-skills-grid">
            {skills.map((skill) => (
              <div className="pv-skill-card" key={skill.id}>
                <div className="pv-skill-icon-wrap" style={{ "--sk-color": skill.color }}>
                  <img src={skill.img} alt={skill.title} className="pv-skill-icon" />
                </div>
                <div className="pv-skill-info">
                  <h3 className="pv-skill-name">{skill.title}</h3>
                  <p className="pv-skill-desc">{skill.description}</p>
                  <div className="pv-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`pv-star ${i < skill.rating ? "pv-star-filled" : ""}`}>
                        {i < skill.rating ? "★" : "☆"}
                      </span>
                    ))}
                    <span className="pv-star-num">{skill.rating}/5</span>
                  </div>
                </div>
                <div className="pv-skill-bar-wrap">
                  <div
                    className="pv-skill-bar"
                    style={{ "--bar-w": `${(skill.rating / 5) * 100}%`, "--bar-color": skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="pv-section pv-section-alt" id="projects">
        <div className="container">
          <div className="pv-section-header">
            <span className="pv-section-tag">Open Source</span>
            <h2 className="pv-section-title">My Projects</h2>
          </div>
          <div className="pv-projects-grid">
            {projects.map((project) => (
              <div className="pv-project-card" key={project.id}>
                <div className="pv-project-thumb">
                  {project.video ? (
                    <iframe
                      src={project.video}
                      title={project.title}
                      allowFullScreen
                      className="pv-project-iframe"
                    />
                  ) : (
                    <iframe
                      src={project.preview}
                      title={project.title}
                      loading="lazy"
                      className="pv-project-iframe"
                    />
                  )}
                  {project.badge && (
                    <span className="pv-project-badge">{project.badge}</span>
                  )}
                </div>
                <div className="pv-project-body">
                  <span className="pv-tech-chip" style={{ "--chip-color": techColors[project.tech] || "#888" }}>
                    {project.tech}
                  </span>
                  <h3 className="pv-project-title">{project.title}</h3>
                  <p className="pv-project-desc">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pv-btn pv-btn-sm pv-btn-primary"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAID SOURCE CODE ===== */}
      
      <section>
      <PaidProjects />
      </section>
      {/* ===== FREE SECTION ===== */}
      <section className="pv-section pv-free-section">
        <div className="container">
          <div className="pv-section-header">
            <span className="pv-section-tag pv-tag-free">Free Stuff</span>
            <h2 className="pv-section-title">You May Also Like This ✨</h2>
            <p className="pv-section-subtitle">
              Free code snippets &amp; mini-projects — just fork &amp; use!
            </p>
          </div>
          <div className="pv-free-grid">
            {freeProjects.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pv-free-card"
                key={item.id}
              >
                <div className="pv-free-icon">{item.icon}</div>
                <div className="pv-free-info">
                  <span
                    className="pv-free-chip"
                    style={{ "--chip-color": techColors[item.tech] || "#888" }}
                  >
                    {item.tech}
                  </span>
                  <h4 className="pv-free-title">{item.title}</h4>
                  <p className="pv-free-desc">{item.description}</p>
                </div>
                <span className="pv-free-arrow">→</span>
              </a>
            ))}
          </div>
          <div className="pv-free-cta">
            <a
              href="https://github.com/pranjalvidyarthi"
              target="_blank"
              rel="noopener noreferrer"
              className="pv-btn pv-btn-outline"
            >
              View All on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="pv-footer-cta">
        <div className="container pv-footer-cta-inner">
          <h2>Let's build something cool together.</h2>
          <p>Open for freelance projects, collaborations &amp; content ideas.</p>
          <a
            href="https://www.youtube.com/@the_creative_coder"
            target="_blank"
            rel="noopener noreferrer"
            className="pv-btn pv-btn-primary pv-btn-lg"
          >
            Get In Touch →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;