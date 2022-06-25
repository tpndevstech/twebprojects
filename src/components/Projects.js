import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import scicalc from "./Images/scicalcjs.png";
import waterjs from "./Images/waterlevels.PNG";
import refire from "./Images/reactfire.PNG";
import scribble from "./Images/scribblepad.png";
import portfolio from "./Images/twportfolio.png";
import jstasks from "./Images/jstasks.PNG";
import reredux from "./Images/reactredux.png";
import merntasks from "./Images/twpmerntasks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong>Projects </strong>
        </h1>
        <p>Here are some projects made.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merntasks}
              title="MERN Tasks Manager Application"
              description="Tasks lists manager built using MongoDB, Express.js, React.js and Node.js"
              link1="https://twpmerntasks.netlify.app/"
              link2="https://github.com/tpndevstech/twpmerntasks-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={refire}
              title="Library Books Manager"
              description="Books Library Manager built with React as frontend and Firebase as backend as service."
              link1="https://twpreactfirebooks.netlify.app/"
              link2="https://github.com/tpndevstech/reactfirebooks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Portfolio website"
              description="Portfolio site built with ReactJS, Bootstrap, CSS, HTML, Styled Components and other libraries"
              link1="https://twebprojects.netlify.app/"
              link2="https://github.com/tpndevstech/twebprojects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reredux}
              title="Contact Management Application"
              description="Basic contact management application built with ReactJS and Redux."
              link1="https://twpreactredcrud.netlify.app/"
              link2="https://github.com/tpndevstech/reactreduxcrud"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scribble}
              title="Scribble pad"
              description="Scribble pad built with JavaScript, CSS and HTML, and a custom JS color library."
              link1="https://twpscribblepadjs.netlify.app/"
              link2="https://github.com/tpndevstech/scribblepadjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waterjs}
              title="Water level container"
              description="Water level container built with JavaScript, CSS and HTML."
              link1="https://twpwaterleveljs.netlify.app/"
              link2="https://github.com/tpndevstech/waterlevelsjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jstasks}
              title="Tasks To Be Done List"
              description="Tasks lists manager built using JavaScript, Bootstrap, CSS and HTML."
              link1="https://twptaskstodojs.netlify.app/"
              link2="https://github.com/tpndevstech/taskstodosjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scicalc}
              title="Basic Scientific Calculator"
              description="Basic scientific calculator built using JavaScript, CSS and HTML."
              link1="https://twpscicalcjs.netlify.app/"
              link2="https://github.com/tpndevstech/scicalculatorjs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;