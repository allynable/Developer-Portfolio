import React from 'react'
import {FaCaretRight} from  "react-icons/fa"
const AboutCard = (props) => {
    return (
        <div className="about-item">
          
            <h4>{props.title}</h4>
            <h5>{props.details}</h5>
          <p>
            <em>{props.date}</em>
          </p>
          <ul>
            {props.content.map((value, index) => (
              <li key={index}><FaCaretRight /> {value}</li>
            ))}
          </ul>
        </div>
      );
}

export default AboutCard