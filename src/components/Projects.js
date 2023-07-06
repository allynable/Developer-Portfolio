import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectImg1 from "../assets/img/silent-library-banner.png";
import projectImg2 from "../assets/img/boutiqa-banner.png";
import projectImg3 from "../assets/img/prcbbmis-banner.png";
import projectImg4 from "../assets/img/tumandok-banner.png";
import projectImg5 from "../assets/img/online-portal.png";
import projectImg6 from "../assets/img/kyn-react.png";
import projectImg7 from "../assets/img/MealsOnWheels.png";
import { ProjectCard } from "./ProjectCard";
import "../assets/styles/projects.css";
const Projects = () => {
  const projects = [
    {
      title: "Meals On Wheels",
      imageUrl: projectImg3,
      details: "ReactJs, Bootstrap, Spring Boot",
      githubLink: "https://github.com/allynable/MerryMeals"
    },
    {
      title: "Know-Your-Neighborhood",
      imageUrl: projectImg6,
      details: "ReactJs, Bootstrap, Spring Boot",
      githubLink: "https://github.com/allynable/KYN-React",
    },
    {
      title: "Online News Portal",
      imageUrl: projectImg7,
      details: "Liferay",
    },
    {
      title: "Boutiqa - Ecommerce Portal",
      imageUrl: projectImg2,
      details: "Spring MVC, Bootstrap, MySQL",
      githubLink: "https://github.com/allynable/spring-boutiqa",
    },
    {
      title: "Silent Library",
      imageUrl: projectImg1,
      details: "HTML, CSS, Javascript",
      githubLink: "https://github.com/allynable/Silent-Library",
    },
    {
      title: "Tumandok Craft Industries Website",
      imageUrl: projectImg4,
      details: "PHP, Bootstrap, MySQL",
      githubLink: "https://github.com/allynable/tci",
    },
    {
      title: "Philippine Red Cross Blood Bank Management Information System",
      imageUrl: projectImg3,
      details: "PHP, Bootstrap, MySQL",
      githubLink: "https://github.com/allynable/prcbbmis",
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Here you'll find a collection of my latest and greatest work,
              showcasing my skills and expertise in various areas.
            </p>

            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
