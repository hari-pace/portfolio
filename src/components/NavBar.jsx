import { useState, useEffect } from "react";
import Logo from "../assets/img/hari1.jpg";
import Github from "../assets/img/github.png";
import LinkedIn from "../assets/img/linkedin.svg";

const SECTIONS = ["home", "skills", "projects", "contact"];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]      = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (section) => {
    setActiveLink(section);
    setMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`site-nav${scrolled ? " scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {/* Logo */}
          <button
            className="nav-logo-btn"
            style={{ background: "none", border: "none", padding: 0 }}
            aria-label="Scroll to top"
            onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setActiveLink("home"); }}
          >
            <img src={Logo} alt="Hari Pace" className="nav-logo" />
          </button>

          {/* Desktop nav links */}
          <ul className={`nav-links${menuOpen ? " open" : ""}`} role="list">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className={`nav-link${activeLink === s ? " active" : ""}`}
                  aria-current={activeLink === s ? "page" : undefined}
                  onClick={() => handleNavClick(s)}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="nav-actions">
            <a
              href="https://github.com/hari-pace"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Visit Hari's GitHub profile"
            >
              <img src={Github} alt="" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/hari-pace"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Visit Hari's LinkedIn profile"
            >
              <img src={LinkedIn} alt="" aria-hidden="true" />
            </a>

            {/* Hamburger */}
            <button
              className="nav-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="nav-links"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

