import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Tilt from "react-parallax-tilt";

import profileImg from "../../Assets/profile.jpg";

import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    // <section>
    <>
      {/* <Container fluid className="home-section" id="home"> */}
      <Particle />
      <Container className="home-content" style={{ textAlign: "center" }}>
        <Row>
          {/* <Col md={5} style={{ paddingBottom: 20, margin: "auto 0" }}> */}
          <Tilt>
            <img
              src={profileImg}
              alt="profile"
              className="img-fluid"
              style={{
                // maxHeight: "450px",
                borderRadius: "50%",
                width: "30vh",
                height: "30vh",
                marginBottom: "2em",
              }}
            />
          </Tilt>
          {/* </Col> */}
        </Row>
        <Row>
          {/* <Col md={7} className="home-header"> */}
          {/* <h1 className="heading-name">
              WELCOME TO
              <strong className="main-name"> KEVIN</strong>
              'S WEBPAGE
            </h1> */}
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hello, I'm <strong className="main-name">Kevin</strong>
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h2>
            <span>I am a Full Stack Developer</span>
          </h2>

          <div style={{ padding: 50, textAlign: "center" }}>
            <Type />
          </div>
          {/* </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:kevin.kim9685@gmail.com"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Jaehan-Kevin-Kim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kevin-jaehan-kim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* </Container> */}
      {/* // </section> */}
    </>
  );
}

export default Home;
