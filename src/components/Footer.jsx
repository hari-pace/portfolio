import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Logo from "../assets/img/hari1.jpg";
import Github from "../assets/img/github.png";
import LinkedIn from "../assets/img/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row className="align-item-center">
            <Col sm={1} id="footer-logo">
              <img
                src={Logo}
                alt="Logo"
                height="100px"
                className="navbar-logo"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              />
            </Col>
            <Col sm={11} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://github.com/hari-pace">
                  <img src={Github} alt="" />
                </a>
                <a href="https://linkedin.com/in/hari-pace">
                  <img src={LinkedIn} alt="" />
                </a>
              </div>
              <p id="footer-line">Created by Hari Pace, 2024</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
