import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Projects.css";

const series = [
  {
    id: 1,
    title: "Basic CSS Designs",
    description: "Daily coding challenges & mini projects — from scratch, one design at a time.",
    link: "/projects/Challenge",
    badge: null,
    icon: "🎨",
    tag: "CSS · Design",
    color: "#4facfe",
    count: "130+",
    countLabel: "Designs",
  },
  {
    id: 2,
    title: "Python Automation Series",
    description: "Automate real-world tasks using Python — scripts that actually save time.",
    link: "/projects/python",
    badge: null,
    icon: "🐍",
    tag: "Python · Scripting",
    color: "#f7971e",
    count: "20+",
    countLabel: "Scripts",
  },
  {
    id: 3,
    title: "UI Components Series",
    description: "Modern, reusable UI components built with HTML, CSS & React.",
    link: "/projects/ui-designs",
    badge: "UPDATED",
    icon: "⚡",
    tag: "React · HTML · CSS",
    color: "#a78bfa",
    count: "50+",
    countLabel: "Components",
  },
];

const ProjectCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-card"
      style={{ animationDelay: `${index * 0.12}s`, "--card-accent": item.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* top accent line */}
      <div className="proj-card__accent-line" />

      {/* badge */}
      {item.badge && <span className="proj-card__badge">{item.badge}</span>}

      {/* icon */}
      <div className="proj-card__icon-wrap">
        <span className="proj-card__icon">{item.icon}</span>
      </div>

      {/* tag */}
      <p className="proj-card__tag">{item.tag}</p>

      {/* title */}
      <h4 className="proj-card__title">{item.title}</h4>

      {/* desc */}
      <p className="proj-card__desc">{item.description}</p>

      {/* stat */}
      <div className="proj-card__stat">
        <span className="proj-card__stat-value">{item.count}</span>
        <span className="proj-card__stat-label">{item.countLabel}</span>
      </div>

      {/* cta */}
      <Link to={item.link} className="proj-card__cta">
        <span>View Series</span>
        <svg className="proj-card__arrow" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
};

const Tutorials = () => {
  return (
    <section className="projects-section">
      {/* background grid */}
      <div className="projects-grid-bg" aria-hidden="true" />

      <div className="container position-relative">

        {/* header */}
        <div className="projects-header">
          <p className="projects-eyebrow">What I've built</p>
          <h2 className="projects-title">Tutorials</h2>
          <p className="projects-subtitle">
            Organised by theme — pick a series and dive in.
          </p>
        </div>

        {/* cards */}
        <div className="proj-grid">
          {series.map((item, i) => (
            <ProjectCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tutorials;