import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import ContactImage from "../assets/img/Contact.png";
import "../assets/styles/contact.css";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o440x7p', 'template_zbkho7q', form.current, 'ZZZLrL-o-C4Tbbmz1')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 5000);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={ContactImage} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={12} className="px-1">
                    <input type="text" placeholder="Name" name="name" required/>
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <input type="email" placeholder="Email Address" name="email" required/>
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <input type="tel" placeholder="Contact No." name="contact" required/>
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <textarea rows="6" placeholder="Message" name="message" required></textarea>
                  </Col>
                  <Col size={12} sm={12} class="text-center">
                    <h5>{done && "Thanks for contacting me!"}</h5>
                  </Col>
                  <Col size={12} sm={12} className="text-center">
                    <button type="submit" className="btn btn-send">
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
