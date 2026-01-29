import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profilePic/pranjalvidyarthi.jpg"; // local profile image
import "../css/About.css"

const About = () => {
  return (
    <div>

      {/* ================= ABOUT HERO ================= */}
      <section className="py-5 themed-section">
        <div className="container">
          <div className="row align-items-center">

            {/* Left: Image */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src={profilePic}
                alt="Pranjal"
                className="rounded-circle shadow"
                style={{
                  width: "260px",
                  height: "260px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right: Text */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-3">About Me</h2>

              <p className="lead">
                Hi 👋 I’m <strong>Pranjal</strong>, a self-taught developer,
                ethical hacking enthusiast, and content creator from
                Prayagraj, India.
              </p>

              <p>
                I enjoy building futuristic user interfaces, Python automation
                tools, and real-world projects that solve practical problems.
                My journey in tech is driven by curiosity and learning by doing.
              </p>

              <p>
                I also run a YouTube channel where I share coding demos, ASMR-style
                programming videos, Python scripts, UI animations, and creative
                tech experiments — all without voice, focused on clean visuals
                and background music...
              </p>
<p> Let's code together</p>
              <a
                href="https://www.youtube.com/@the_creative_coder"
                className="btn btn-dark mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit My YouTube Channel
              </a>
            </div>

          </div>
        </div>
      </section>
{/* ================= WHAT I DO ================= */}
<section className="py-5 themed-section">
  <div className="container">
    <h3 className="text-center fw-bold mb-5">What I Do</h3>

    <div className="row text-center">

      {/* Card 1 */}
      <div className="col-md-4 mb-4">
        <div className="what-card">
          <div className="icon-circle">🐍</div>
          <h5 className="fw-bold mt-3">Python Development</h5>
          <p className="text-muted">
            Automation scripts, GUI applications, and creative Python projects.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 mb-4">
        <div className="what-card">
          <div className="icon-circle">🌐</div>
          <h5 className="fw-bold mt-3">Web Development</h5>
          <p className="text-muted">
            Responsive websites, modern portfolios & interactive UI using React.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-4">
        <div className="what-card">
          <div className="icon-circle">🎬</div>
          <h5 className="fw-bold mt-3">Content Creation</h5>
          <p className="text-muted">
            YouTube Shorts, ASMR coding videos & creative tech content.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= GOALS ================= */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">My Goal</h3>

          <p className="lead">
            To continuously learn, build meaningful projects, and share my
            knowledge with the tech community through clean, creative, and
            practical content.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
