import React, { useEffect, useRef, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff, RotateCcw, Code2, ExternalLink } from "lucide-react";
import "../css/first_series.css";
// import { preview } from "vite";

const uiComponents = [
  {
    id: 1,
    title: "Parallax Effect",
    description: "Parallax Effect on scrolling using HTML & CSS.",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/1.Day-1.Parallax_Effect.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/1.Day-1.Parallax_Effect.html",
    tag: "CSS · Animation",
  },

  {
    id: 2,
    title: "Digital Clock",
    description: "Digital Clock creation using HTML CSS & JS",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/2.Day-2.Digital_Clock_Animation.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/2.Day-2.Digital_Clock_Animation.html",
    tag: "Clock · CSS ·  Digital Clock · HTMl "
  },

  {
    id: 3,
    title: "Black Hole",
    description: "I created a Black Hole using HTML , CSS & Three.js",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/3.Day-3.Black_Hole_in_CSS.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/3.Day-3.Black_Hole_in_CSS.html",
    tag: "Black Hole · Space · Three.js"
  },

  {
    id: 4,
    title: "Solar System",
    description: "Creating a Solar System using three.js",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/4.Day-4.Creating_a_Solar_System.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/4.Day-4.Creating_a_Solar_System.html",
    tag: "Solar System · Space ·  Three.js "
  },

  {
    id: 5,
    title: "Subscribe Now Button",
    description: "Subscribe Now Button",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/5.Day--5.Subscirbe_now.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/5.Day--5.Subscirbe_now.html",
    tag: "Button · CSS "
  },

  {
    id: 6,
    title: "Our Earth",
    description: "Creating Our Earth using Three.js",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/6.Day-6.Our_Earth_using_three.js.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/6.Day-6.Our_Earth_using_three.js.html",
    tag: "Earth · Space · Three.js"
  },

  {
    id: 7,
    title: "Moon Phases",
    description: "Learn About Moon phases which i created using three.js",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/7.Day-7%20Moon%20Phase.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/7.Day-7%20Moon%20Phase.html",
    tag: "Moon · CSS ·  Three.js · Space "
  },

  {
    id: 8,
    title: "Hover Button",
    description: "Animated Hover Button Effect",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/8.Day-8.Animated_Button_Hover.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/8.Day-8.Animated_Button_Hover.html",
    tag: "Hover · Button · CSS"
  },

  {
    id: 9,
    title: "Character Counter",
    description: "Creating a Character Counter using HTML, CSS & JS",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/9.Day-9.Character_Counter.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/9.Day-9.Character_Counter.html",
    tag: "CSS · JS"
  },

  {
    id: 10,
    title: "Password Strength Checker",
    description: "Password Strength Checker using HTML CSS & JS",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/10.Day-10.Passowrd_strength_checker.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/10.Day-10.Passowrd_strength_checker.html",
    tag: "JS · CSS "
  },

  {
    id: 11,
    title: "Button to Email Snippet",
    description: "Click on Button to change it into an Email Box",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/11.Day-11.Button_to_Email_snippet.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/11.Day-11.Button_to_Email_snippet.html",
    tag: "JS · Button"
  },

  {
    id: 12,
    title: "Light Sweep Button",
    description: "Light Sweep Button using HTML,CSS & JS",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/12.Day-12.Light_Sweep_Button.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/12.Day-12.Light_Sweep_Button.html",
    tag: "Button · CSS "
  },

  {
    id: 13,
    title: "Gradient Angle Button",
    description: "Creating Gradient Angle Button using CSS",
    preview: "https://pranjalvidyarthi.github.io/30-Days-30-Designs/13.Day-13.Gradient_Angled_Button_Snippet.html",
    code: "https://github.com/pranjalvidyarthi/30-Days-30-Designs/blob/main/13.Day-13.Gradient_Angled_Button_Snippet.html",
    tag: "Button · Navbar"
  },


];

const isMobileDevice = () => window.innerWidth <= 768;

const DesignCard = ({ item, index }) => {
  const [activePreview, setActivePreview] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const mobile = isMobileDevice();
  const col = index % 3; // stagger direction: left / center / right

  return (
    <div
      ref={cardRef}
      className={`col-md-6 col-lg-4 mb-4 hs-col hs-col--${col} ${visible ? "hs-visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
    >
      <div className="hs-card">
        {/* day badge */}
        <span className="hs-day-badge">Day {item.id}</span>

        {/* preview box */}
        <div
          className={`hs-preview ${activePreview ? "hs-preview--active" : ""}`}
          onClick={() => !mobile && setActivePreview(true)}
        >
          {activePreview && !mobile ? (
            <>
              <div className="hs-iframe-wrap">
                <iframe
                  src={item.preview}
                  title={item.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              <button
                className="hs-reset-btn"
                onClick={(e) => { e.stopPropagation(); setActivePreview(false); }}
                title="Reset preview"
              >
                <RotateCcw size={14} />
              </button>
            </>
          ) : (
            <div className="hs-preview-placeholder">
              {mobile ? (
                <>
                  <EyeOff size={28} className="hs-eye-icon" />
                  <p>Mobile preview disabled</p>
                </>
              ) : (
                <>
                  <div className="hs-eye-ring">
                    <Eye size={26} className="hs-eye-icon" />
                  </div>
                  <p>Click to preview</p>
                </>
              )}
            </div>
          )}
        </div>

        {/* card body */}
        <div className="hs-card-body">
          <p className="hs-card-tag">{item.tag}</p>
          <h5 className="hs-card-title">{item.title}</h5>
          <p className="hs-card-desc">{item.description}</p>

          <div className="hs-card-actions">
            <a href={item.code} target="_blank" rel="noopener noreferrer" className="hs-btn hs-btn--code">
              <Code2 size={14} />
              <span>Code</span>
            </a>
            <a href={item.preview} target="_blank" rel="noopener noreferrer" className="hs-btn hs-btn--live">
              <ExternalLink size={14} />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Thirty_days_thirty_designs = () => {
  return (
    <section className="hs-section">
      <div className="hs-grid-bg" aria-hidden="true" />

      {/* floating ghost text */}
      <span className="hs-ghost-text" aria-hidden="true">30</span>

      <div className="container position-relative">

        {/* header */}
        <div className="hs-header">
          <p className="hs-eyebrow">Day by day</p>
          <h2 className="hs-title">
            30 Days <span className="hs-title__accent">HTML</span> Designs
          </h2>
          <p className="hs-subtitle">
            One design every day — click any card to preview it live.
          </p>

          {/* stats row */}
          <div className="hs-stats">
            <div className="hs-stat">
              <span className="hs-stat__val">13</span>
              <span className="hs-stat__lbl">Shown</span>
            </div>
            <div className="hs-stat-div" />
            <div className="hs-stat">
              <span className="hs-stat__val">30</span>
              <span className="hs-stat__lbl">Total</span>
            </div>
            <div className="hs-stat-div" />
            <div className="hs-stat">
              <span className="hs-stat__val">HTML & CSS</span>
              <span className="hs-stat__lbl">Stack</span>
            </div>
          </div>
        </div>

        {/* grid */}
        <div className="row">
          {uiComponents.map((item, i) => (
            <DesignCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Thirty_days_thirty_designs;