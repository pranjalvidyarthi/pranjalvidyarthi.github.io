import { useState } from "react";
import "../css/PaidSourcecode.css";
import { useNavigate } from "react-router-dom";

const paidProjects = [
  {
    id: 1,
    title: "Build Your Own Website",
    tagline: "Your idea. Online. In days.",
    description:
      "Get a fully custom website built for you — from scratch, with clean commented code you actually own. Whether it's a portfolio, business site, or web app, I handle everything.",
    price: "₹15,000",
    originalPrice: "₹30,000",
    discount: "50% OFF",
    badge: "BESTSELLER",
    badgeColor: "#f97316",
    urgency: "12 spots left this month",
    features: [
      { text: "1 fully custom website, built for you", highlight: true },
      { text: "Both Static & Dynamic options available", highlight: false },
      { text: "7 days post-delivery support", highlight: false },
      { text: "Up to 30 revision requests", highlight: false },
      { text: "100% commented, readable code", highlight: true },
      { text: "Deployed & ready to share", highlight: false },
      { text: "Included Hosting", highlight: false },
    ],
    tech: ["React", "Node.js", "MongoDB"],
    cta: "Get My Website Built",
    color: "#f97316",
    colorRgb: "249, 115, 22",
    icon: "🌐",
    type: "internal", // 👈 important
  link: "/order",
  },
  {
    id: 2,
    title: "Premium Design Package",
    tagline: "25+ designs. Infinite possibilities.",
    description:
      "A curated library of premium, responsive UI designs ready to drop into any project. Admin panels, landing pages, dashboards — all dark/light mode ready.",
    price: "₹1,900",
    originalPrice: "₹5000",
    discount: "38% OFF",
    badge: "HOT",
    badgeColor: "#ef4444",
    urgency: "Limited time pricing",
    features: [
      { text: "25+ production-ready designs", highlight: true },
      { text: "Dark & Light mode for every template", highlight: false },
      { text: "Fully responsive across all devices", highlight: false },
      { text: "Customizable component system", highlight: false },
      { text: "Clean, scalable folder structure", highlight: true },
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    cta: "Get the Design Pack",
    color: "#8b5cf6",
    colorRgb: "139, 92, 246",
    icon: "🎨",
  type: "external", // 👈 important
  link: "https://forms.gle/DDmVAgB9Eam9tE748",

  },
  // {
  //   id: 3,
  //   title: "Python Automation Bundle",
  //   tagline: "Stop doing manually what code can do.",
  //   description:
  //     "20+ battle-tested Python scripts that automate the boring stuff — scraping, emails, file management, PDFs, and more. Fully documented with Discord access.",
  //   price: "₹249",
  //   originalPrice: "₹499",
  //   discount: "50% OFF",
  //   badge: "NEW",
  //   badgeColor: "#10b981",
  //   // urgency: "Discord community included",
  //   features: [
  //     { text: "20+ plug-and-play automation scripts", highlight: true },
  //     { text: "Web scraping toolkit (Beautiful Soup + Selenium)", highlight: false },
  //     { text: "Email automation with attachments", highlight: false },
  //     { text: "PDF reader, merger & generator tools", highlight: false },
  //     { text: "File organizer & system utilities", highlight: false },
  //     { text: "Detailed docs + Discord support access", highlight: true },
  //   ],
  //   tech: ["Python"],
  //   cta: "Automate My Workflow",
  //   color: "#10b981",
  //   colorRgb: "16, 185, 129",
  //   icon: "🤖",
  //   link: "#",
  // },
];

const techColors = {
  React: { bg: "#0ea5e9", text: "#fff" },
  "Node.js": { bg: "#22c55e", text: "#fff" },
  MongoDB: { bg: "#16a34a", text: "#fff" },
  HTML: { bg: "#f97316", text: "#fff" },
  CSS: { bg: "#3b82f6", text: "#fff" },
  JavaScript: { bg: "#eab308", text: "#000" },
  Python: { bg: "#3b82f6", text: "#fff" },
};



export default function PaidProjects() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="pp-section">
      {/* Section header */}
      <div className="pp-header">
        <span className="pp-header__eyebrow">Premium Products</span>
        <h2 className="pp-header__title">
          Ship faster.<br />
          <em>Pay once.</em>
        </h2>
        <p className="pp-header__sub">
          Handcrafted by a developer who actually uses these tools every day.
          No subscriptions. No fluff. Just stuff that works.
        </p>
      </div>

      {/* Trust bar */}
      <div className="pp-trust">
        {["✦  100% Commented Code", "✦  Instant Delivery", "✦  Real Support", "✦  Affordable Pricing"].map((t) => (
          <span key={t} className="pp-trust__item">{t}</span>
        ))}
      </div>

      {/* Cards */}
      <div className="pp-grid">
        {paidProjects.map((p, i) => (
          <article
            key={p.id}
            className={`pp-card ${hovered === p.id ? "pp-card--hovered" : ""}`}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ "--card-color": p.color, "--card-rgb": p.colorRgb, animationDelay: `${i * 0.1}s` }}
          >
            {/* Glow */}
            <div className="pp-card__glow" />

            {/* Header */}
            <div className="pp-card__top">
              <div className="pp-card__icon">{p.icon}</div>
              <span className="pp-card__badge" style={{ background: p.badgeColor }}>
                {p.badge}
              </span>
            </div>

            <div className="pp-card__title-group">
              <h3 className="pp-card__title">{p.title}</h3>
              <p className="pp-card__tagline">{p.tagline}</p>
            </div>

            <p className="pp-card__desc">{p.description}</p>

            {/* Price */}
            <div className="pp-card__pricing">
              <div className="pp-card__price-row">
                <span className="pp-card__price">{p.price}</span>
                <span className="pp-card__original">{p.originalPrice}</span>
                <span className="pp-card__discount">{p.discount}</span>
              </div>
              <p className="pp-card__urgency">⚡ {p.urgency}</p>
            </div>

            {/* Features */}
            <ul className="pp-card__features">
              {p.features.map((f, fi) => (
                <li key={fi} className={`pp-card__feature ${f.highlight ? "pp-card__feature--highlight" : ""}`}>
                  <span className="pp-card__check">✓</span>
                  {f.text}
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="pp-card__tech">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="pp-card__tech-tag"
                  style={{ background: techColors[t]?.bg, color: techColors[t]?.text }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
 {/* <button   onClick={() => navigate("/order")}
  className="pp-card__cta"> */}
            {/* <a href="/order" className="pp-card__cta"> */}
              {/* <span>{p.cta}</span>
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg> */}
            {/* </a> */}
{/* </button> */}

{p.type === "internal" ? (
  <button
    onClick={() => navigate(p.link)}
    className="pp-card__cta"
  >
    <span>{p.cta}</span>
    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
) : (
  <a
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    className="pp-card__cta"
  >
    <span>{p.cta}</span>
    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
)}

            <p className="pp-card__guarantee">🔒 Secure payment · Instant access</p>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="pp-bottom">
        <p className="pp-bottom__text">
          Not sure which one is right for you?
        </p>
        <a href="#contact" className="pp-bottom__link">
          Message me — I'll help you pick →
        </a>
      </div>
    </section>
  );
}