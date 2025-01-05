import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { CustomButton } from '../../../common/components/UIElements';

import './Introduction.scss';

const Introduction = () => {
  return (
    <div id="introduction">
      <Container>
        <div className="introduction">
          <Row>
            <Col sm>
              <div className="introduction__img">
                <img
                  src="https://via.placeholder.com/400x400?text=Emad+Al+Ramimi"
                  alt="Emad Al Ramimi"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col className="introduction__short mt-4" sm>
              <div>
                <h1>Emad Al Ramimi</h1>
                <p>
                  Computer Scientist, AI Developer, and Web Developer
                </p>
              </div>
              <div>
                <h6>Email Me</h6>
                <a href="mailto:alramimi10@gmail.com">
                  <span className="introduction__short__email">
                    alramimi10@gmail.com
                  </span>
                </a>
              </div>
              <div className="introduction__short__links">
                <Row>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/work">
                      <CustomButton className="work">Projects</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/about">
                      <CustomButton className="about">About</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/contact">
                      <CustomButton className="contact">Contact</CustomButton>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div className="introduction__short__social">
                <h6>Connect with me</h6>
                <div>
                  <a href="https://github.com/emadalramimi" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/emad-alramimi" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
                  <a href="mailto:alramimi10@gmail.com">
                    <AiOutlineMail className="social-icon" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="introduction__brief">
            <p>
              Hi there! I'm Emad Al Ramimi, a passionate Computer Scientist and AI Developer 
              with expertise in Machine Learning, Web Development, and Drone Technology. 
              Currently pursuing my Bachelor's in Computer Science at the University of 
              Paul Sabatier in Toulouse, France, I am dedicated to creating innovative 
              solutions that leverage cutting-edge technologies.
            </p>
            <p>
              My journey includes developing groundbreaking projects like the AI Guardian Drone, 
              Aircraft Damage Detection system, and AquaCare IoT platform. I've been recognized 
              for my innovative work, including winning the Water Research & Innovation Award 
              and participating in global initiatives like COP28 and ROWAD Hackathon.
            </p>
            <p>
              As an entrepreneur and technology enthusiast, I'm committed to pushing the 
              boundaries of AI and creating impactful solutions that address real-world challenges.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
