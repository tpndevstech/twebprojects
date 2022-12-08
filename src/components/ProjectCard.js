import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard(props) {
  return (
    <Card className="project-card-view border-light mb-3">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="success" size="sm" href={props.link1} target="_blank">
          <BiLinkExternal /> &nbsp; View Project
        </Button>
        &nbsp; &nbsp;
        <Button variant="info" size="sm" href={props.link2} target="_blank">
          <BiLinkExternal /> &nbsp; View Code
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard; 
