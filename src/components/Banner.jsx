import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Hari from "../assets/img/hari3.jpg";
import { useState, useEffect } from "react";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  //   for rotating job titles
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const period = 2000

  // add different job titles here
  // const toRotate = []

  //   useEffect(() => {
  //     let ticker = setInterval(() => {
  //       tick();
  //     }, delta);
  //     return () => {
  //       clearInterval(ticker);
  //     };
  //   }, [text]);

  //   const tick = () => {
  //     let i = loopNum % toRotate.length;
  //     let fullText = toRotate[i];
  //     let updatedText = isDeleting
  //       ? fullText.substring(0, text.length - 1)
  //       : fullText.substring(0, text.length + 1);

  //     setText(updatedText);

  //     if (isDeleting) {
  //       setDelta((prevDelta) => prevDelta / 2);
  //     }
  //     if (!isDeleting && updatedText === fullText) {
  //       setIsDeleting(true);
  //       setDelta(period);
  //     } else if (isDeleting && updatedText === "") {
  //       setIsDeleting(false);
  //       setLoopNum(loopNum + 1);
  //       setDelta(500);
  //     }
  //   };

  return (
    <div>
      <section className="banner" id="#home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <h1>{`Hi, I'm Hari`} </h1>
              <span className="tagline">💻 Full-Stack Web Developer</span>
              <span className="tagline">📍 Munich, DE</span>
              <p>
                Since leaving the UK for Munich in 2019, I have completed a
                career change in order to professionally pursue a passion of
                mine - web development. Hopefully this portfolio page will give
                you a brief idea of what I can do, but if you want to know more,
                you can either find me via the LinkedIn or GitHub links above or
                you can get in contact by clicking the button below.
              </p>
              <button onClick={() => console.log("connect")}>
                Let's connect <ArrowRightCircle size={25} />{" "}
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={Hari} alt="Header img" className="banner-img" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
