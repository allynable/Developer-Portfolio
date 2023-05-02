import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Initials from "../assets/img/Initials.png";
import "../assets/styles/footer.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={12} sm={6}>
            <img src={Initials} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
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
            </div>
            <p>&copy; Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
