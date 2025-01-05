import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { 
  FaTrophy,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaAward,
  FaGlobe,
  FaLaptopCode,
  FaRocket,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

import {
  AnimatedButton,
  ProjectCard,
  AnimatedCounter
} from '../../../common/components/UIElements';
import AchievementCard from './AchievementCard';
import './Content.scss';
import { LoadingProjectCard } from '../../../common/components/UIElements/loadingAnimations';

const StyledAchievementsSection = styled.section`
  padding: 4rem 0;
  background: #0D1117;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, #0D1117 21px, transparent 1%) center,
      linear-gradient(#0D1117 21px, transparent 1%) center,
      #16181C;
    background-size: 22px 22px;
    opacity: 0.4;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #58A6FF;
    margin-bottom: 1rem;
    font-family: 'JetBrains Mono', monospace;
    position: relative;

    &::before {
      content: '< ';
      color: #7EE787;
    }

    &::after {
      content: ' />';
      color: #7EE787;
    }
  }

  .section-subtitle {
    text-align: center;
    color: #8B949E;
    margin-bottom: 3rem;
    font-size: 1.1rem;
    font-family: 'JetBrains Mono', monospace;
    position: relative;

    &::before {
      content: '// ';
      color: #6E7681;
    }
  }

  .achievements-container {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .view-more {
    text-align: center;
    position: relative;
    z-index: 1;
    margin-top: 2rem;
  }
`;

const StyledProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, #1C2128 0%, #22272E 100%);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }

  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-category {
    color: #7EE787;
    font-size: 0.9rem;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 0.5rem;
  }

  .project-title {
    color: #E6EDF3;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .project-description {
    color: #8B949E;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    span {
      background: rgba(88, 166, 255, 0.1);
      color: #58A6FF;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.85rem;
      font-family: 'JetBrains Mono', monospace;
    }
  }

  .project-links {
    display: flex;
    gap: 1rem;

    a {
      color: #8B949E;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: #58A6FF;
      }
    }
  }
`;

const statsData = [
  {
    icon: FaTrophy,
    count: 15,
    label: "Awards & Honors",
    description: "Local and international recognitions"
  },
  {
    icon: FaLightbulb,
    count: 35,
    label: "Projects",
    description: "Cutting-edge projects and solutions"
  },
  {
    icon: FaUsers,
    count: 70,
    label: "Participations",
    description: "Conferences, hackathons, and events"
  },
  {
    icon: FaClock,
    count: 3,
    label: "Experience",
    description: "Years of professional expertise"
  }
];

const achievementsData = [
  {
    icon: FaAward,
    title: "Research Excellence",
    description: "Award-winning innovations in sustainable water purification technologies",
    highlight: "Featured in International Research Journal"
  },
  {
    icon: FaGlobe,
    title: "Global Recognition",
    description: "Selected Scholar for LIYSF 2024 at Imperial College London",
    highlight: "Representing Innovation in Science"
  },
  {
    icon: FaLaptopCode,
    title: "Tech Innovation",
    description: "Champion at International Hackathons with breakthrough solutions",
    highlight: "Multiple Competition Wins"
  },
  {
    icon: FaRocket,
    title: "Leadership",
    description: "Spearheaded innovative tech initiatives with global impact",
    highlight: "Driving Technological Change"
  }
];

const recentProjects = [
  {
    id: 1,
    title: "AI Guardian Drone",
    category: "AI & DRONE TECHNOLOGY",
    shortDescription: "Advanced AI-powered drone for search and rescue operations",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"],
    githubLink: "https://github.com/emadalramimi/AI-Guardian-Drone",
    demoLink: "https://demo.ai-guardian-drone.com",
    imageUrl: require('../../../assets/images/projects/ai-drone.jpg')
  },
  {
    id: 2,
    title: "Aircraft Damage Detection",
    category: "COMPUTER VISION",
    shortDescription: "YOLOv8-based AI system for aircraft damage assessment",
    technologies: ["Python", "YOLOv8", "PyTorch", "OpenCV"],
    githubLink: "https://github.com/emadalramimi/aircraft-damage-detection",
    demoLink: "https://demo.aircraft-damage.com",
    imageUrl: require('../../../assets/images/projects/aircraft.jpg')
  },
  {
    id: 3,
    title: "AquaCare IoT System",
    category: "IOT & MACHINE LEARNING",
    shortDescription: "Smart water quality monitoring and prediction platform",
    technologies: ["Python", "TensorFlow", "Raspberry Pi", "Node.js"],
    githubLink: "https://github.com/emadalramimi/aquacare-iot",
    demoLink: "https://demo.aquacare-iot.com",
    imageUrl: require('../../../assets/images/projects/aquacare.jpg')
  }
];

const AnimatedStatItem = ({ stat }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }}
      className="stat-item"
    >
      <motion.div 
        className="stat-icon-wrapper"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <stat.icon className="stat-icon" />
      </motion.div>
      <div className="stat-number">
        <CountUp 
          end={stat.count} 
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />
        <span>+</span>
      </div>
      <div className="stat-label">{stat.label}</div>
      <p className="stat-description">{stat.description}</p>
    </motion.div>
  );
};

const Content = (props) => {
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAchievementIndex((prevIndex) => 
        prevIndex === achievementsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change achievement every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Container fluid className="content-wrapper">
      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Milestones
          </motion.h2>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <AnimatedStatItem key={index} stat={stat} />
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements Section */}
      <StyledAchievementsSection>
        <Container>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Achievements & Recognition
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pioneering Innovation Through Technology & Research
          </motion.p>
          <div className="achievements-container">
            <AchievementCard 
              achievement={achievementsData[currentAchievementIndex]} 
              totalAchievements={achievementsData.length}
              currentIndex={currentAchievementIndex}
            />
          </div>
        </Container>
      </StyledAchievementsSection>

      {/* Recent Projects Section */}
      <section className="recent-projects-section">
        <Container>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Recent Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check out my latest work in AI, IoT, and Software Development
          </motion.p>
          
          <Row className="g-4">
            {recentProjects.map((project, index) => (
              <Col key={project.id} lg={4} md={6}>
                <StyledProjectCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-content">
                    <div className="project-category">{project.category}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.shortDescription}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </StyledProjectCard>
              </Col>
            ))}
          </Row>
          
          <motion.div 
            className="view-more-projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/work" className="explore-more-link">
              View All Projects <FaRocket />
            </Link>
          </motion.div>
        </Container>
      </section>
    </Container>
  );
};

export default Content;
