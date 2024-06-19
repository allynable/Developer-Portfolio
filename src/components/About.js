import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/about.css";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <section id="about" className="about">
      <Container className="resume-section">
      
        <Container>
          <Row>
            <Col>
              <h2>About</h2>
            </Col>
          </Row>
          <Row>
            <Col s={12} md={6} className="about-left">
              <h3 className="about-title">Education</h3>
              <AboutCard
                title="Bachelor of Science in Information Systems"
                details="University of Negros Occidental Recoletos"
                date="June 2013 - March 2017"
                content={[]}
              ></AboutCard>

              <h3 className="about-title">Honors and Awards</h3>
              <AboutCard 
              content={[
                "Programming Proficiency Awardee",
                "Service and Industry Awardee",
                "Network Design with High Distinction Awardee",
                "Student Council Officer - Finance Committee Chairperson"
             ]}>

              </AboutCard>
            </Col>
            <Col sm={12} md={6} className="about-right">
              <h3 className="about-title">Work Experience</h3>
              <AboutCard
                title="Administrative Aide VI"
                details="Department of Education"
                date="February 2019 - September 2022"
                content={[
                  "Provided administrative support",
                  "Maintained accurate records and files, including personnel files, and financial records",
                  "Conducted data entry and retrieval tasks using various software applications, such as Microsoft Word, Excel, and PowerPoint",
                  "Assisted with organizing meetings and events, including scheduling, preparing agendas, taking minutes, and making travel arrangements",
                  "Assisted in the preparation and processing of various forms and documents, such as purchase orders, vouchers, and requisitions",
                ]}
              ></AboutCard>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default About;
