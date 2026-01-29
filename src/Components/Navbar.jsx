import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Route change hote hi hamburger close
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // 🌗 Apply theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
    setQuery("");
    setIsOpen(false);
  };

  // 🌞🌙 Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg px-3 ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          Pranjal Vidyarthi
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
              {to : "/quiz" , label:"Quiz"}, 
              
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold text-warning" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* 🔍 Search */}
          <form className="d-flex align-items-center" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button className="btn btn-outline-success me-3">
              Search
            </button>

            {/* 🌞🌙 Theme Toggle */}
            <span
              onClick={toggleTheme}
              style={{
                cursor: "pointer",
                fontSize: "22px",
                userSelect: "none",
              }}
              title="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </span>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
