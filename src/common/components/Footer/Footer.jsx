import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: "https://github.com/emadalramimi", 
      label: "GitHub" 
    },
    { 
      icon: <FaLinkedin />, 
      href: "https://linkedin.com/in/emad-alramimi", 
      label: "LinkedIn" 
    },
    { 
      icon: <FaTwitter />, 
      href: "https://twitter.com/emadalramimi", 
      label: "Twitter" 
    },
    { 
      icon: <FaEnvelope />, 
      href: "mailto:contact@emadalramimi.com", 
      label: "Email" 
    }
  ];

  const quickLinks = [
    { to: "/", label: t('footer.links.home') },
    { to: "/skills", label: t('footer.links.about') },
    { to: "/projects", label: t('footer.links.projects') },
    { to: "/contact", label: t('footer.links.contact') }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} className="footer-brand">
            <h3 className="gradient-text">Emad Al Ramimi</h3>
            <p className="footer-subtitle">{t('footer.subtitle')}</p>
            <p className="footer-description">{t('footer.description')}</p>
          </Col>
          
          <Col lg={4} className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={4} className="footer-social">
            <h4>{t('footer.connectWith')}</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          <p className="footer-tagline">
            <FaCode style={{ marginRight: '0.5rem' }} />
            {t('footer.tagline')}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
