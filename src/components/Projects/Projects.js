import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import asadal from "../../Assets/Projects/asadal.png";
import inthemiddle from "../../Assets/Projects/inthemiddle.png";
import KSSC from "../../Assets/Projects/KSSC.png";
import LinkedIn from "../../Assets/Projects/LinkedIn.png";
import shareThoughts from "../../Assets/Projects/shareThoughts.jpg";
import shareTalks from "../../Assets/Projects/shareTalks.png";
import skinet from "../../Assets/Projects/skinet.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shareTalks}
              isBlog={false}
              title="Share Talks"
              tech={["Dart", "Flutter", "Firebase", "Getx"]}
              description="Realtime mobile messanger app. Developed by Dart, Flutter, and Firebase"
              ghLink="https://github.com/Jaehan-Kevin-Kim/ShareTalks"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shareThoughts}
              isBlog={false}
              title="Share Thoughts"
              tech={[
                "Javascript",
                "Next.js",
                "React.js",
                "Redux",
                "Redux-Saga",
                "Node.js",
                "Ant.Design",
                "Emotion",
                "Express.js",
                "MySQL",
                "Sequelize",
                "Passport",
                "AWS",
              ]}
              description="Realtime social media and social networking service full stack application."
              ghLink="https://github.com/Jaehan-Kevin-Kim/ShareThoughts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KSSC}
              isBlog={false}
              title="KSSC"
              tech={[
                "Javascript",
                "React.js",
                "Redux",
                "Redux-toolkit",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "Material UI",
                "JWT",
              ]}
              description="Consulting form Management application by using MERN stack. This application is developed requested by Korean Social Service Centre."
              ghLink="https://github.com/Jaehan-Kevin-Kim/KSCC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asadal}
              isBlog={false}
              title="Asadal"
              tech={["Javascript", "React.js", "Email.js", "GoDaddy"]}
              description="Korean Cuisin Restaurant Hompage located in Calgary. The homepage contains menu, location, and email composing option, as well as can directly connect to food delivery service hompages such as Skip the dishes, Uber eats, and Fantuan."
              ghLink="https://github.com/Jaehan-Kevin-Kim/Asadal-Korean-Cousine"
              demoLink="http://www.asadal.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinet}
              isBlog={false}
              title="Skinet"
              tech={[
                "Typescript",
                "Angular",
                "Bootstrap",
                ".NetCore",
                "SQLite",
                "Redis",
              ]}
              description="Ski equipments online store developed by Angular, .Net Core, and used SQLite for databse."
              ghLink="https://github.com/Jaehan-Kevin-Kim/Skinet"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LinkedIn}
              isBlog={false}
              title="LinkedIn Clone Coding"
              tech={[
                "Javascript",
                "React.js",
                "Redux",
                "Redux-Toolkit",
                "Firebase",
                "Material UI",
              ]}
              description="LinkedIn Clone Coding. Used Redux, and Redux toolkit for statemanagement. Firebase is used for NoSQL database, and real-time communication server."
              ghLink="https://github.com/Jaehan-Kevin-Kim/LinkedIn-Clone"
              demoLink="https://linkedin-clone-d9b78.firebaseapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inthemiddle}
              isBlog={false}
              title="In the middle"
              tech={[
                "Javascript",
                "React.js",
                "Redux",
                "Material UI",
                "Font awesome",
                "Firebase",
              ]}
              description="Second-hand item store web application. Used Redux, and Firebase is used for state management, and NoSQL database."
              ghLink="https://github.com/Jaehan-Kevin-Kim/InTheMiddle/tree/master/in_the_middle"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
