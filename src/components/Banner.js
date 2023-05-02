import "../assets/styles/banner.css";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/img/Profile.png";
import { FaGithubSquare, FaLinkedin, FaHtml5, FaCss3,  } from "react-icons/fa";
import { SiSpringboot,SiSpring, SiReact, SiMysql, SiJavascript } from "react-icons/si";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              Hi, I'm <span>Allyn</span>
            </h1>
            <br />
            <span className="tagline">Welcome to my Portfolio</span>
            <p>
              I am an aspiring full stack web developer currently pursuing my
              Master's in Software Engineering at Lithan EduCLaaS, Singapore. I
              am passionate about creating innovative and efficient solutions,
              particularly in backend development. <br />
              In this portfolio, you will find a collection of projects that
              showcase my skills. Each project demonstrates my proficiency in
              working with various programming languages and technologies and my
              ability to collaborate with others. I hope this portfolio gives
              you a glimpse of my passion for web development and inspires you
              to collaborate with me on future projects.
            </p>
            <br />
            <Row>
              <Col xs={12} md={6}>
                <Row>
                  <h4>Find me in</h4>
                </Row>
                <Row>
                  <Col>
                    <a
                      href="https://github.com/allynable?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare className="social-icons"></FaGithubSquare>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/allyn-able/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row>
                  <h4>Languages</h4>
                </Row>
                <Row>
                  <Col>
                    <SiSpringboot className="skills-icon"></SiSpringboot>
                    <SiSpring className="skills-icon"></SiSpring>
                    <SiReact className="skills-icon"></SiReact>
                    <SiMysql className="skills-icon"></SiMysql>
                    <FaHtml5 className="skills-icon"></FaHtml5>
                    <SiJavascript className="skills-icon"></SiJavascript>
                    <FaCss3 className="skills-icon"></FaCss3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row></Row>
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
