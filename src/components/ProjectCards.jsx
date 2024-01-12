import React from "react";
import { Col } from "react-bootstrap";

const ProjectCards = ({ title, description, tech, imgURL, link }) => {
  return (
    <div className="proj-cards">
      <Col className="proj-col" sm={6} md={4}>
        <a href={link} target="blank">
          <div className="proj-imgbx">
            <img src={imgURL} alt="" />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <div>{tech}</div>
              <span>{description}</span>
            </div>
          </div>
        </a>
      </Col>
    </div>
  );
};

export default ProjectCards;
