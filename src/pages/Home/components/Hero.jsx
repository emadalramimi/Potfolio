import React, { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  const typedSequence = useMemo(() => {
    const roles = [
      t('home.roles.aiDeveloper'),
      1000,
      t('home.roles.mlSpecialist'),
      1000,
      t('home.roles.webDeveloper'),
      1000,
      t('home.roles.droneTech'),
      1000
    ];
    return roles;
  }, [t, i18n.language]);

  return (
    <div className="hero-wrapper" dir={i18n.dir()}>
      <Container className="hero-container">
        <Row className="hero-content">
          <Col md={6} className="hero-text">
            <div>
              <h6 className="hero-greeting">{t('home.greeting')}</h6>
              <h1 className="hero-name">{t('home.name')}</h1>
              <div className="hero-typed-container">
                <TypeAnimation
                  key={i18n.language} // Force re-render on language change
                  sequence={typedSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="hero-typed-text"
                />
              </div>
              <p className="hero-description">
                {t('home.description')}
              </p>
              <div className="hero-cta-buttons">
                <a 
                  href={i18n.language === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'} 
                  download 
                  className="btn btn-primary"
                >
                  <AiOutlineDownload /> {t('home.downloadCV')}
                </a>
                <a 
                  href="/contact" 
                  className="btn btn-outline-primary"
                >
                  {t('home.contactMe')}
                </a>
              </div>
              <div className="hero-social-links">
                <a 
                  href="https://github.com/emadalramimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={t('home.socialLinks.github')}
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/emad-alramimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={t('home.socialLinks.linkedin')}
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://twitter.com/emadalramimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={t('home.socialLinks.twitter')}
                >
                  <FaTwitter />
                </a>
                <a 
                  href="mailto:alramimi10@gmail.com"
                  title={t('home.socialLinks.email')}
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="hero-image">
            <img 
              src="/profile.jpg" 
              alt={t('home.name')} 
              className="profile-image" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
