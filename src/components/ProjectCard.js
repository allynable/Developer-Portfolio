import React from "react";
import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = (props) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="proj-imgbx">
        <img src={props.imageUrl} className="img-fluid" alt="" />
        <div className="proj-txtx">
          <h4>{props.title}</h4>
          <span>{props.details}</span>
          <br />
          {props.githubLink ? (
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={28}
                className="social-icons mt-5"
                title="Go to GitHub Repository"
              />
            </a>
          ) : null}
        </div>
      </div>
    </Col>
  );
};
