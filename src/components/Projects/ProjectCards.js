import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useEffect } from "react";
import { BiLogoPlayStore } from "react-icons/bi";

function ProjectCards(props) {
  const [tech, setTech] = useState([]);
  useEffect(() => {
    console.log("props: ", props.tech);
    // props.tech.map((tech) => {
    //   return <Badge>{tech}</Badge>;
    // });
    // props.tech?.map((v) => console.log(v));
    if (props.tech) {
      setTech(props.tech);
    }
  }, [props.tech]);
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", marginBottom: "0.5rem" }}>
          {props.description}
        </Card.Text>

        {/* {props.tech.map((tech) => {
          return <Badge>{tech}</Badge>;
        })}
        <Badge>Test</Badge> */}
        {tech?.map((tech) => (
          <Badge pill bg="success" key={tech} style={{ margin: "0 1px" }}>
            {tech}
          </Badge>
        ))}
        <div style={{ marginBottom: "1rem" }}></div>
        {/* <br /> */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp;
            {"WebPage"}
          </Button>
        )}

        {!props.isBlog && props.downloadLink && (
          <Button
            variant="primary"
            href={props.downloadLink}
            target="_blank"
            style={{ marginLeft: "10px" }}>
            <BiLogoPlayStore /> &nbsp;
            {"PlayStore"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
