import { useState, useEffect } from "react";
import "./BannerStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/img/Profile.png";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>Hi, I'm <span>Allyn</span></h1>
            <h1></h1> <br />
            <span className="tagline">Welcome to my Portfolio</span>
            <p>
              I am an aspiring full stack web developer currently pursuing my
              Master's in Software Engineering at Lithan EduCLaaS, Singapore. I am
              passionate about creating innovative and efficient solutions,
              particularly in backend development. 
              <br /> <br />
              In this portfolio, you will find a collection of projects that
              showcase my skills in designing and implementing scalable, secure,
              and reliable web applications. Each project demonstrates my
              proficiency in working with various programming languages and
              technologies and my ability to collaborate with others. I hope
              this portfolio gives you a glimpse of my passion for web
              development and inspires you to collaborate with me on future
              projects.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
