import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Mountains from "../assets/img/mountains.jpg";
import TeamUp from "../assets/img/TeamUp-screenshot4.png";
import SamsQuizzes from "../assets/img/Sams-quizzes-screenshot2.png";
import Pokefight from "../assets/img/Pokefight-screenshot2.png";

const Projects = () => {
  const projects = [
    {
      title: "TeamUp",
      description:
        "An event creation app where users can find and create sports events in their local area. Created as part of a group for the final project of our Full-Stack Web & App Development course at WBS Coding School.",
      tech: "HTML, CSS, React.js, AntDesign, Node.js, Express.js, MongoDB",
      imgURL: TeamUp,
      link: "https://teamup-de.netlify.app/",
    },
    {
      title: "Sam's Quizzes",
      description:
        "A harder-than-usual quiz game created for my brother, who is for some reason too good at quizzes made for normal-people. Leaderboard section included so scores can be tracked.",
      tech: "HTML, CSS, React.js, TailwindCSS, Node.js, Express.js, MongoDB",

      imgURL: SamsQuizzes,
      link: "https://sams-quizzes.netlify.app/",
    },
    {
      title: "Pokefight",
      description:
        "A turn-based Pokemon battle game created as part of the WBS Coding School curriculum. Leaderboard section included so scores can be tracked.",
      tech: "HTML, CSS, React.js, React Bootstrap, Node.js, Express.js, MongoDB",

      imgURL: Pokefight,
      link: "https://wondrous-baklava-2f2d28.netlify.app/",
    },
  ];

  return (
    <div>
      <section className="project" id="projects">
        <Container>
          <Col>
            <h2>Projects</h2>
            <p>
              A selection of projects created either alone or during my time at
              WBS Coding School.
            </p>
            {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
            {/* <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav> */}
            {/* <Tab.Content>
                <Tab.Pane eventKey="first"> */}
            <Row className="tab-content">
              {projects.map((project, index) => (
                <ProjectCards className="proj-cards" key={index} {...project} />
              ))}
            </Row>
            {/* </Tab.Pane> */}
            {/* <Tab.Pane eventKey="second">Second</Tab.Pane>
                <Tab.Pane eventKey="third">Third</Tab.Pane> */}
            {/* </Tab.Content> */}
            {/* </Tab.Container> */}
          </Col>
        </Container>
        <img className="background-image-right" src={Mountains} alt="" />
      </section>
    </div>
  );
};

export default Projects;
