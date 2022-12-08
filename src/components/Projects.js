import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import scicalc from "./Images/scicalcjs.png";
import fintrack from "./Images/fintrack.png";
import scribble from "./Images/scribblepad.png";
import clocktick from "./Images/tickclock.png";
import jstasks from "./Images/jstasks.png";
import waterlevels from "./Images/waterlevels.png";
import reacttasks from "./Images/reacttasks.png";
import portfolio from "./Images/twportfolio.png";
import refire from "./Images/reactfire.png";
import reredux from "./Images/reactredux.png";
import merntasks from "./Images/merntasks.png";
import mernecomm from "./Images/mernecomm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong>Projects </strong>
        </h1>
        <p>Here are some projects made by me.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernecomm}
              title="E-Commerce Application"
              description="E-commerce application built using MERN stack: MongoDB, Express.js, React.js, Node.js, Redux"
              link1="https://twpmernecomm.onrender.com/"
              link2="https://github.com/tpndevstech/twpmernecomm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merntasks}
              title="Tasks Manager Application"
              description="Tasks lists manager built using MERN stack: MongoDB, Express.js, React.js, Node.js, Redux"
              link1="https://twpmerntasks.netlify.app/"
              link2="https://github.com/tpndevstech/twpmerntasks-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={refire}
              title="Library Books Manager"
              description="Books Library Manager built with React.js as frontend, Firebase as backend as service, Bootstrap"
              link1="https://twpreactfirebooks.netlify.app/"
              link2="https://github.com/tpndevstech/reactfirebooks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reredux}
              title="Contacts Management"
              description="Basic contact management application built with React.js, Redux"
              link1="https://twpreactredcrud.netlify.app/"
              link2="https://github.com/tpndevstech/reactreduxcrud"
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
              imgPath={reacttasks}
              title="Tasks To Do Lists"
              description="Basic tasks to do lists manager built using React.js, CSS"
              link1="https://twpreacttasks.netlify.app/"
              link2="https://github.com/tpndevstech/twpreacttasks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scribble}
              title="Scribble pad"
              description="Scribble pad built with JavaScript, CSS and HTML, and a custom JS color library"
              link1="https://twpscribblepadjs.netlify.app/"
              link2="https://github.com/tpndevstech/scribblepadjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jstasks}
              title="Tasks Lists Manager"
              description="Tasks lists manager built using JavaScript, Bootstrap, CSS and HTML"
              link1="https://twptaskstodojs.netlify.app/"
              link2="https://github.com/tpndevstech/taskstodosjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waterlevels}
              title="Water level container"
              description="Water level container built with JavaScript, CSS and HTML"
              link1="https://twpwaterleveljs.netlify.app/"
              link2="https://github.com/tpndevstech/waterlevelsjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clocktick}
              title="Ticking Clock"
              description="Basic analog ticking clock build using JavaScript, CSS and HTML, which syncs to current Internet time"
              link1="https://twptickingclock.netlify.app/"
              link2="https://github.com/tpndevstech/twptickclock"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fintrack}
              title="Financial Expenses tracker"
              description="Basic financial expenses tracker built using JavaScript, CSS and HTML"
              link1="https://twpfintracker.netlify.app/"
              link2="https://github.com/tpndevstech/twpfintracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scicalc}
              title="Basic Scientific Calculator"
              description="Basic scientific calculator built using JavaScript, CSS and HTML"
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
