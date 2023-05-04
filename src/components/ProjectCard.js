import React from 'react';
import { Col} from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export const ProjectCard = ({title, imageUrl, details, githubLink}) => {
  return (
    <Col sm={4}>
      <div className="proj-imgbx">
        <img src={imageUrl} className="img-fluid"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{details}</span>
          <br />
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={28}  className="social-icons" title="Go to GitHub Repository"/>
         </a>
        </div>
      </div>
    </Col>
  )
}