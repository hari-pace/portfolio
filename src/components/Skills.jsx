import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactLogo from "../assets/img/react-black.svg";
import HTML from "../assets/img/html-black.svg";
import JS from "../assets/img/js-black.svg";
import CSS from "../assets/img/CSS.svg";
import Tailwind from "../assets/img/tailwind.svg";
import Node from "../assets/img/node.svg";
import Express from "../assets/img/express.svg";
import Postgres from "../assets/img/postgresql.svg";
import MongoDB from "../assets/img/mongodb.svg";
import MySQL from "../assets/img/mysql.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__fadeInLeftBig "
                          : ""
                      }
                    >
                      <h1>Skills</h1>
                    </div>
                  )}
                </TrackVisibility>

                <p>
                  Through a mix of school-based learning during my 17-week
                  course at WBS Coding School, along with a lot of
                  self-learning, I currently have the following technical
                  skillset.
                </p>

                <h2>Frontend</h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={HTML} alt="image" />
                    <h5>HTML5</h5>
                  </div>
                  <div className="item">
                    <img src={CSS} alt="image" />
                    <h5>CSS3</h5>
                  </div>
                  <div className="item">
                    <img src={JS} alt="image" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={ReactLogo} alt="image" />
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src={Tailwind} alt="image" />
                    <h5>TailwindCSS</h5>
                  </div>
                </Carousel>
                <h2>Backend</h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={Node} alt="image" />
                    <h5>Node.js</h5>
                  </div>
                  <div className="item">
                    <img src={Express} alt="image" />
                    <h5>Express.js</h5>
                  </div>
                </Carousel>
                <h2>Databases</h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={MySQL} alt="image" />
                    <h5>MySQL</h5>
                  </div>
                  <div className="item">
                    <img src={Postgres} alt="image" />
                    <h5>PostgreSQL</h5>
                  </div>
                  <div className="item">
                    <img src={MongoDB} alt="image" />
                    <h5>MongoDB</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Skills;
