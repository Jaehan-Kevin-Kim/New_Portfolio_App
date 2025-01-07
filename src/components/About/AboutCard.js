import React from "react";
import Card from "react-bootstrap/Card";
import { GiBulletBill } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaehan.</span> I am a
            skillful and passionate{" "}
            <span className="purple"> Full-stack developer</span> specializing
            in web, and mobile development applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiBulletBill /> Playing Any Sports
            </li>
            <li className="about-activity">
              <GiBulletBill /> Driving on a Highway
            </li>
            <li className="about-activity">
              <GiBulletBill /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
