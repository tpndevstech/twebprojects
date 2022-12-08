import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiCss3, DiSass, DiHtml5,
  DiBootstrap, DiNodejs, DiMongodb, DiMysql
} from "react-icons/di";
import { SiRedux, SiFirebase, SiExpress, SiGit, 
  SiGithub, SiNetlify, SiVisualstudiocode, SiNpm  
} from "react-icons/si";

function Skills() {
  return (
    <div>
      <br />
      <Row style={{ justifyContent: "center", paddingBottom: "150px" }}>
        <h1>
          <strong>Skills Tech Stack</strong>
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1> Frontend </h1>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
          <h1>HTML</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
          <h1>CSS</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <h1>JavaScript</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <h1>ReactJS</h1>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiBootstrap />
          <h1>Bootstrap</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiSass />
          <h1>SASS/SCSS</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
          <h1>Redux</h1>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "150px" }}>
        <h1> Backend and Database</h1>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <h1>MongoDB</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
          <h1>ExpressJS</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <h1>NodeJS</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
          <h1>Firebase</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMysql />
          <h1>MySQL</h1>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "150px" }}>
        <h1>Tools Stack</h1>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
          <h1>VS Code</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNpm />
          <h1>npm</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
          <h1>Git</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
          <h1>GitHub</h1>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNetlify />
          <h1>Netlify</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
