import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import news from "../../Assets/Projects/news.jpg";
import iworkonlinejob from "../../Assets/Projects/iworkonlinejob.jpg";
import luckcharm from "../../Assets/Projects/luckcharm.jpeg";
import movie from "../../Assets/Projects/movie.avif";

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
              imgPath={news}
              isBlog={false}
              title="
              MetroHive Locate"
              description="PG finder:-
              Developed a hostel and PG finder web application to help students find suitable accommodations in Asansol.
• Enabled students to search, compare, and book hostels and PGs based on preferences.
• Provided hostel owners with a platform to list services, manage room availability, and accept online bookings. • Implemented user authentication, a secure booking system, and user reviews & ratings."
              ghLink="*"
              demoLink="*"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iworkonlinejob}
              isBlog={false}
              title="Weather Application"
              description="real-time weather :- Developed a dynamic weather application that fetches real-time weather data using the Open Weather API.
              • Features include searching for any city}, displaying current temperature, humidity, wind speed, and a 5-day weather forecast. • Implemented an intuitive user interface with responsive design} to ensure accessibility across devices.
                  "
              ghLink="*"
              demoLink="*"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
