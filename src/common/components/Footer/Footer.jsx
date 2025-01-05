import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} className="footer-brand">
            <h3 className="gradient-text">Emad Al Ramimi</h3>
            <p>AI & Machine Learning Engineer</p>
            <p className="footer-description">
              Building innovative solutions at the intersection of AI and technology.
            </p>
          </Col>
          
          <Col lg={4} className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          
          <Col lg={4} className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://github.com/emadalramimi" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/emad-alramimi" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/emadalramimi" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Emad Al Ramimi. All rights reserved.</p>
          <p className="footer-tagline">Made with 💻 and ❤️</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
