import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Challenge100.css";

const series = [
  {
    id: 1,
    title: "100 Days 100 HTML Designs",
    description: "Daily coding challenges & mini projects — one unique HTML/CSS design every single day.",
    link: "/series/First_series",
    badge: "UPDATED",
    icon: "🏆",
    tag: "HTML · CSS · Design",
    color: "#4facfe",
    progress: 100,
    total: 100,
  },
  {
    id:2,
    title:"30 Days 30 Designs",
    description: "Daily coding challenges & mini projects",
    icon: "🏆",
    link:"/series/Thirty_days_thirty_designs",
    badge: "NEW",
    tag:"HTML",
    color: "#8ffe4f",
    progress: 13,
    total: 30,
    
  },
];

const SeriesCard = ({ item, index }) => (
  <div
    className="dc-card"
    style={{ "--card-accent": item.color, animationDelay: `${index * 0.12}s` }}
  >
    <div className="dc-card__accent-line" />

    {item.badge && <span className="dc-card__badge">{item.badge}</span>}

    <div className="dc-card__icon-wrap">
      <span>{item.icon}</span>
    </div>

    <p className="dc-card__tag">{item.tag}</p>
    <h4 className="dc-card__title">{item.title}</h4>
    <p className="dc-card__desc">{item.description}</p>

    {/* progress bar */}
    <div className="dc-card__progress-wrap">
      <div className="dc-card__progress-header">
        <span className="dc-card__progress-label">Progress</span>
        <span className="dc-card__progress-count">{item.progress} / {item.total} days</span>
      </div>
      <div className="dc-card__progress-track">
        <div
          className="dc-card__progress-fill"
          style={{ width: `${(item.progress / item.total) * 100}%` }}
        />
      </div>
    </div>

    <Link to={item.link} className="dc-card__cta">
      <span>View Series</span>
      <svg viewBox="0 0 20 20" fill="none" width="17" height="17">
        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  </div>
);

const DaysChallenge = () => {
  return (
    <section className="dc-section">
      <div className="dc-grid-bg" aria-hidden="true" />

      {/* floating decorative numbers */}
      {["1", "50", "100"].map((n, i) => (
        <span key={i} className={`dc-float-num dc-float-num--${i + 1}`}>{n}</span>
      ))}

      <div className="container position-relative">

        {/* header */}
        <div className="dc-header">
          <p className="dc-eyebrow">Challenge Series</p>
          <h2 className="dc-title">
            Daily <span className="dc-title__accent">Coding</span> Challenge
          </h2>
          <p className="dc-subtitle">
            One design a day, every day — consistency is the real superpower.
          </p>

          {/* hero stat strip */}
          <div className="dc-stats">
            <div className="dc-stat">
              <span className="dc-stat__val">2</span>
              <span className="dc-stat__lbl">Series</span>
            </div>
            <div className="dc-stat-divider" />
            <div className="dc-stat">
              <span className="dc-stat__val">1</span>
              <span className="dc-stat__lbl">Done</span>
            </div>
            <div className="dc-stat-divider" />
            <div className="dc-stat">
              <span className="dc-stat__val">1</span>
              <span className="dc-stat__lbl">Left</span>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="dc-cards-wrap">
          {series.map((item, i) => (
            <SeriesCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* bottom cta strip */}
        <div className="dc-bottom-strip">
          <p>More series coming soon — follow along on
            <a href="https://www.youtube.com/@the_creative_coder"
              target="_blank" rel="noopener noreferrer"> YouTube</a> &amp;
            <a href="https://github.com/pranjalvidyarthi"
              target="_blank" rel="noopener noreferrer"> GitHub</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DaysChallenge;