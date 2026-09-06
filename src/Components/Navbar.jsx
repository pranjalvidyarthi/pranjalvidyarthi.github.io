import { NavLink, useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";
// import { BlogList, BlogPost, SearchPage } from "../Blog/Blog";

// ─── Placeholder Pages ────────────────────────────────────────────────────────
const PagePlaceholder = ({ name, emoji }) => (
  <div style={{ textAlign: "center", padding: "100px 20px", color: "var(--text-muted)" }}>
    <div style={{ fontSize: 56, marginBottom: 16 }}>{emoji}</div>
    <h2 style={{ color: "var(--text-primary)", fontSize: 28, margin: "0 0 8px", fontFamily: "Georgia, serif" }}>
      {name}
    </h2>
    <p>This page is under construction.</p>
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const NAV_LINKS = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    // { to: "/blog", label: "Blog" },
    { to: "/quiz", label: "Quiz" },
    { to: "/contact", label: "Contact" },
    { to: "/tutorials" , label:"Tutorials"},
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 1000,
      background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", height: 64, display: "flex", alignItems: "center", gap: 20 }}>

        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span style={{
            fontSize: 18, fontWeight: 800, color: "var(--text-primary)",
            letterSpacing: "-0.3px", fontFamily: "Georgia, serif",
          }}>
            <span style={{ color: "var(--accent)" }}>P</span>ranjal
            <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>.dev</span>
          </span>
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="desktop-nav" style={{ display: "flex", gap: 2, listStyle: "none", margin: 0, padding: 0, flex: 1 }}>
          {NAV_LINKS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  padding: "6px 13px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 450,
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  background: isActive ? "var(--accent-soft)" : "transparent",
                  transition: "all 0.15s",
                  display: "block",
                })}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="desktop-search" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            display: "flex", alignItems: "center",
            background: "var(--search-bg)",
            border: `1px solid ${searchFocused ? "var(--accent)" : "var(--border)"}`,
            borderRadius: 10, overflow: "hidden",
            transition: "all 0.2s",
            boxShadow: searchFocused ? "0 0 0 3px var(--accent-glow)" : "none",
          }}>
            <span style={{ padding: "0 8px 0 12px", color: "var(--text-muted)", fontSize: 13 }}>🔍</span>
            <input
              ref={inputRef}
              type="search"
              placeholder="Search tutorials..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{
                background: "transparent", border: "none", outline: "none",
                color: "var(--text-primary)", fontSize: 13, padding: "8px 12px 8px 0",
                width: 160,
              }}
            />
            {query && (
              <button type="submit" style={{
                background: "var(--accent)", color: "#fff", border: "none",
                padding: "8px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600,
              }}>Go</button>
            )}
          </div>
        </form>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          style={{
            background: "var(--search-bg)", border: "1px solid var(--border)",
            borderRadius: 10, width: 38, height: 38, cursor: "pointer",
            fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s", flexShrink: 0,
          }}
          title="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(o => !o)}
          style={{
            background: "transparent", border: "1px solid var(--border)",
            borderRadius: 8, padding: "6px 10px", cursor: "pointer",
            color: "var(--text-primary)", fontSize: 18, lineHeight: 1, display: "none",
          }}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 0 24px",
          background: "var(--nav-bg-scrolled)",
          backdropFilter: "blur(16px)",
        }}>
          <form onSubmit={handleSearch} style={{ padding: "0 24px 16px", display: "flex", gap: 8 }}>
            <input
              type="search"
              placeholder="Search tutorials..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                flex: 1, background: "var(--search-bg)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "8px 12px", color: "var(--text-primary)",
                fontSize: 14, outline: "none",
              }}
            />
            <button type="submit" style={{
              background: "var(--accent)", color: "#fff", border: "none",
              borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 14,
            }}>Go</button>
          </form>
          {NAV_LINKS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              style={({ isActive }) => ({
                display: "block", padding: "12px 24px", textDecoration: "none",
                color: isActive ? "var(--accent)" : "var(--text-primary)",
                fontWeight: isActive ? 600 : 400, fontSize: 15,
                borderLeft: isActive ? "3px solid var(--accent)" : "3px solid transparent",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────
const App = () => {
  return (
    <>
      <style>{`
        :root[data-theme="dark"] {
          --nav-bg: rgba(10, 10, 14, 0);
          --nav-bg-scrolled: rgba(10, 10, 14, 0.92);
          --text-primary: #f0f0f5;
          --text-muted: #6b7280;
          --accent: #6366f1;
          --accent-soft: rgba(99, 102, 241, 0.12);
          --accent-glow: rgba(99, 102, 241, 0.2);
          --border: #1f2937;
          --search-bg: rgba(255,255,255,0.05);
          --card-bg: #0f1117;
          --hover-bg: rgba(255,255,255,0.06);
          --tag-bg: rgba(255,255,255,0.07);
          --page-bg: #07080e;
        }
        :root[data-theme="light"] {
          --nav-bg: rgba(255, 255, 255, 0);
          --nav-bg-scrolled: rgba(255, 255, 255, 0.92);
          --text-primary: #0f172a;
          --text-muted: #64748b;
          --accent: #4f46e5;
          --accent-soft: rgba(79, 70, 229, 0.1);
          --accent-glow: rgba(79, 70, 229, 0.2);
          --border: #e2e8f0;
          --search-bg: rgba(0,0,0,0.04);
          --card-bg: #ffffff;
          --hover-bg: rgba(0,0,0,0.04);
          --tag-bg: rgba(0,0,0,0.06);
          --page-bg: #f8fafc;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { font-family: 'Georgia', 'Times New Roman', serif; }
        body { background: var(--page-bg); color: var(--text-primary); min-height: 100vh; transition: background 0.3s, color 0.3s; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-search { display: none !important; }
          .hamburger { display: flex !important; }
        }

        input[type="search"]::-webkit-search-cancel-button { display: none; }
        a { color: inherit; }
      `}</style>

      <Navbar />

      <main>
        <Routes>
          <Route path="/about"  />
          <Route path="/projects"  />
          <Route path="/quiz"  />
          <Route path="/contact" />
          {/* <Route path="/blog" element={<BlogList />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
          {/* <Route path="/search" element={<SearchPage />} /> */}
          <Route path="/tutorials" />
        </Routes>
      
      </main>
    </>
  );
};

export default App;