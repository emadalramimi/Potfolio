import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter 
} from 'react-icons/fa';
import { 
  AiOutlineDownload,
  AiOutlineMail 
} from 'react-icons/ai';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <Container className="hero-container">
        <Row className="hero-content">
          <Col md={6} className="hero-text">
            <div>
              <h6 className="hero-greeting">Hello, I'm</h6>
              <h1 className="hero-name">Emad Al Ramimi</h1>
              <div className="hero-typed-container">
                <TypeAnimation
                  sequence={[
                    'AI Developer',
                    1000,
                    'Machine Learning Specialist',
                    1000,
                    'Web Developer',
                    1000,
                    'Drone Technology Expert',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="hero-typed-text"
                />
              </div>
              <p className="hero-description">
                Innovating at the intersection of AI, Machine Learning, and Technology
              </p>
              <div className="hero-cta-buttons">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="btn btn-primary"
                >
                  <AiOutlineDownload /> Download CV
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline-primary"
                >
                  Contact Me
                </a>
              </div>
              <div className="hero-social-links">
                <a 
                  href="https://github.com/emadalramimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/emad-alramimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://twitter.com/emadalramimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="mailto:alramimi10@gmail.com"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="hero-image">
            <img 
              src="/profile.jpg" 
              alt="Emad Al Ramimi" 
              className="profile-image" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
