import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Details.scss';
import { Link } from 'react-router-dom';

const TechData = [
  {
    techName: 'Python',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    bg: '#FFD43B'
  },
  {
    techName: 'Machine Learning',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    bg: '#FF6F61'
  },
  {
    techName: 'JavaScript',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    bg: '#F7DF1E'
  },
  {
    techName: 'React',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    bg: '#61DAFB'
  },
  {
    techName: 'Docker',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    bg: '#2496ED'
  },
  {
    techName: 'C++',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    bg: '#00599C'
  },
  {
    techName: 'Java',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    bg: '#007396'
  },
  {
    techName: 'Git',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    bg: '#F05032'
  }
];

const TechCard = (props) => {
  return (
    <div className="tech-card">
      <img
        style={{ background: `${props.bg}` }}
        src={props.imageUrl}
        alt={props.title}
      />
      <h6 className="mt-2">{props.title}</h6>
    </div>
  );
};

const Details = () => {
  return (
    <Container>
      <div className="details">
        <div className="details__techs">
          <h2 className="details__techs__title">
            Technologies & Skills
          </h2>
          <div className="details__techs__container">
            <Row className="mt-5">
              {TechData.map((item, i) => {
                return (
                  <Col key={i} xs={4} md={3} className="mb-4">
                    <TechCard
                      imageUrl={item.imageUrl}
                      title={item.techName}
                      bg={item.bg}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className="details__skills mt-5">
          <h2 className="details__skills__title">Skill Categories</h2>
          <div className="details__skills__container">
            <Row>
              <Col sm>
                <h4>🤖 Machine Learning & AI</h4>
                <ul>
                  <li>Computer Vision</li>
                  <li>Deep Learning</li>
                  <li>Object Detection</li>
                  <li>Neural Networks</li>
                </ul>
              </Col>
              <Col sm>
                <h4>💻 Web Development</h4>
                <ul>
                  <li>Full Stack Development</li>
                  <li>React.js</li>
                  <li>REST APIs</li>
                  <li>Frontend & Backend</li>
                </ul>
              </Col>
              <Col sm>
                <h4>🚁 Drone & IoT Technology</h4>
                <ul>
                  <li>Embedded Systems</li>
                  <li>Drone Programming</li>
                  <li>IoT Solutions</li>
                  <li>Sensor Integration</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className="details__languages mt-5">
          <h2 className="details__languages__title">Languages</h2>
          <div className="details__languages__container">
            <Row>
              <Col sm>
                <h4>🇫🇷 French (B2)</h4>
              </Col>
              <Col sm>
                <h4>🇬🇧 English (B2)</h4>
              </Col>
              <Col sm>
                <h4>🇸🇦 Arabic (Native)</h4>
              </Col>
            </Row>
          </div>
        </div>
        <div className="support mt-5">
          <h2>Want to collaborate?</h2>
          <p>
            Connect with me on <Link to="/contact">LinkedIn or GitHub</Link> for potential projects or research opportunities!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Details;
