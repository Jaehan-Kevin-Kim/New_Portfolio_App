import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Kevin Kim</h3>
        </Col>
        <Col
          md="4"
          className="footer-copywright"
          style={{ margin: "auto 0 !important" }}>
          <address style={{ fontStyle: "italic", margin: "auto 0" }}>
            <a
              style={{
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "1.25rem",
                textDecoration: "none",
                color: "crimson",
                "&:hover": {
                  opacity: 0.5,
                },
              }}
              href="mailto:kevin.kim9685@gmail.com">
              kevin.kim9685@gmail.com
            </a>
          </address>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
