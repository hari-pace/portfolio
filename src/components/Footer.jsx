import { Container } from "react-bootstrap";
import Logo    from "../assets/img/hari1.jpg";
import Github  from "../assets/img/github.png";
import LinkedIn from "../assets/img/linkedin.svg";

const Footer = () => (
  <footer className="site-footer">
    <Container>
      <div className="footer-inner">
        <button
          style={{ background: "none", border: "none", padding: 0 }}
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Logo} alt="Hari Pace" className="footer-logo" />
        </button>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Hari Pace. All rights reserved.
        </p>

        <div className="footer-social">
          <a
            href="https://github.com/hari-pace"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub profile"
          >
            <img src={Github} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/hari-pace"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn profile"
          >
            <img src={LinkedIn} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
