import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useInView } from "../hooks/useInView";
import Hari from "../assets/img/hari3.jpg";

const ROLES = [
  "Full-Stack Web Developer",
  "React Enthusiast",
  "Problem Solver",
];

const Banner = () => {
  const [ref, inView] = useInView();
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[roleIdx];
    const speed = isDeleting ? 60 : 100;
    const pauseMs = 1800;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayed === fullText) {
        setTimeout(() => setIsDeleting(true), pauseMs);
        return;
      }
      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
        return;
      }
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section className="banner" id="home" aria-label="Introduction">
      <div className="banner-bg" aria-hidden="true" />
      <Container className="banner-content">
        <Row className="align-items-center g-5">
          <Col xs={12} md={6} xl={7}>
            <div
              ref={ref}
              className={`banner-text-col reveal reveal--left${inView ? " is-visible" : ""}`}
            >
              <p className="banner-greeting">Welcome to my portfolio</p>

              <h1 className="banner-name">
                Hi, I&rsquo;m{" "}
                <span className="gradient-text">Hari</span>
              </h1>

              <p className="banner-role" aria-live="polite" aria-atomic="true">
                {displayed}
                <span className="cursor" aria-hidden="true" />
              </p>

              <div className="banner-tags">
                <span className="banner-tag">💻 Full-Stack Web Developer</span>
                <span className="banner-tag">📍 Munich, DE</span>
              </div>

              <p className="banner-bio">
                Since leaving the UK for Munich in 2019, I completed a
                career change in order to professionally pursue a passion of
                mine - web development. If you want to know more, feel
                free to connect via LinkedIn.
              </p>

              <a
                href="https://linkedin.com/in/hari-pace"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Find me on LinkedIn{" "}
                <ArrowRightCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </Col>

          <Col xs={12} md={6} xl={5} className="banner-img-col">
            <div className="banner-avatar">
              <img src={Hari} alt="Portrait of Hari Pace" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
