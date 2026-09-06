import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profilePic/pranjalvidyarthi.jpg";
import "../css/About.css";

const SocialLink = ({ href, icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-pill"
    style={{ "--pill-color": color }}
  >
    <span className="social-icon">{icon}</span>
    <span>{label}</span>
  </a>
);

const WhatCard = ({ icon, title, desc, delay }) => (
  <div className="col-md-4 mb-4">
    <div className="what-card" style={{ animationDelay: delay }}>
      <div className="icon-circle">{icon}</div>
      <h5 className="fw-bold mt-3">{title}</h5>
      <p>{desc}</p>
    </div>
  </div>
);

const StatBadge = ({ value, label }) => (
  <div className="stat-badge">
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const About = () => {
  return (
    <div className="about-wrapper">

      {/* ── HERO ── */}
      <section className="about-hero py-5">
        {/* decorative blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="container position-relative">
          <div className="row align-items-center gy-5">

            {/* Photo column */}
            <div className="col-md-5 text-center">
              <div className="avatar-frame">
                <img
                  src={profilePic}
                  alt="Pranjal Vidyarthi"
                  className="avatar-img"
                />
                <span className="avatar-badge">👨‍💻 Open to work</span>
              </div>

              {/* Stats row */}
              <div className="stats-row mt-4">
                <StatBadge value="2+" label="Yrs Coding" />
                <StatBadge value="20+" label="Projects" />
                <StatBadge value="∞" label="Curiosity" />
              </div>
            </div>

            {/* Text column */}
            <div className="col-md-7">
              <p className="eyebrow">Hey there 👋</p>
              <h1 className="hero-name">I'm <span className="highlight">Pranjal</span></h1>
              <p className="hero-tagline">
                Self-taught developer · Ethical hacking enthusiast · Content creator
              </p>

              <p className="bio-text">
                I'm a developer from <strong>Prayagraj, India</strong> who got into coding
                out of pure curiosity — no formal classes, no bootcamp, just late nights,
                broken code, and YouTube tutorials. That curiosity turned into a passion
                for building things that actually work and look great.
              </p>
              <p className="bio-text">
                I build Python automation tools, futuristic web interfaces, and small
                projects that solve everyday problems. I'm also deeply interested in
                ethical hacking and cybersecurity — understanding how things break
                is just as fun as building them.
              </p>
              <p className="bio-text">
                On the side, I run a <strong>YouTube channel</strong> where I post
                ASMR-style coding videos — no voice, just clean visuals, keyboard sounds,
                and good music. Think of it as coding, but calming. I genuinely enjoy making
                those videos as much as I enjoy coding itself.
              </p>
              <p className="bio-text">
                I'm still learning, always building, and sharing everything along the way.
                If you're into code, creativity, or just want to connect — let's talk!
              </p>

              {/* Social pills */}
              <div className="social-row mt-4">
                <SocialLink
                  href="https://github.com/pranjalvidyarthi"
                  icon={
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  }
                  label="GitHub"
                  color="#24292e"
                />
                <SocialLink
                  href="https://www.youtube.com/@the_creative_coder"
                  icon={
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  }
                  label="YouTube"
                  color="#ff0000"
                />
                <SocialLink
                  href="https://www.instagram.com/vansh.x._x.vidyarthi"
                  icon={
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  }
                  label="Instagram"
                  color="#e1306c"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="py-5 what-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <p className="eyebrow">My skills</p>
            <h3 className="section-title">What I Do</h3>
          </div>
          <div className="row text-center">
            <WhatCard
              icon="🐍"
              title="Python Development"
              desc="Automation scripts, GUI apps, and creative Python projects that save time and solve real problems."
              delay="0s"
            />
            <WhatCard
              icon="🌐"
              title="Web Development"
              desc="Responsive websites, modern portfolios, and interactive UIs built with React and clean CSS."
              delay="0.1s"
            />
            <WhatCard
              icon="🎬"
              title="Content Creation"
              desc="YouTube Shorts, ASMR coding videos, and creative tech content — no voice, just vibes."
              delay="0.2s"
            />
            <WhatCard
              icon="🔐"
              title="Ethical Hacking"
              desc="Exploring cybersecurity concepts, CTF challenges, and understanding how systems work under the hood."
              delay="0.3s"
            />
            <WhatCard
              icon="🎨"
              title="UI / UX Design"
              desc="Futuristic, animated interfaces that look as good as they work — design is never an afterthought."
              delay="0.4s"
            />
            <WhatCard
              icon="📦"
              title="Open Source"
              desc="Sharing tools and projects on GitHub so others can learn, fork, and build on top of my work."
              delay="0.5s"
            />
          </div>
        </div>
      </section>

      {/* ── GOAL ── */}
      <section className="goal-section py-5">
        <div className="container">
          <div className="goal-card">
            <span className="goal-icon">🎯</span>
            <h3 className="fw-bold mb-3">My Goal</h3>
            <p>
              To keep learning every single day, build projects that actually matter,
              and share everything I know with people who are on the same journey.
              Code has no gatekeepers — and I want to prove that with enough curiosity,
              anyone can build something amazing.
            </p>
            <div className="goal-links mt-4">
              <a href="https://github.com/pranjalvidyarthi" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3">
                See My Work on GitHub →
              </a>
              <a href="https://www.youtube.com/@the_creative_coder" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                Watch on YouTube →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;