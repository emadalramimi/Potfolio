import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { BackToTop } from '../../common/components/UIElements';
import { SkillsGrid } from '../Work/components';
import { SkillFilterContext, SkillFilterProvider } from '../Work/components/SkillsGrid';
import { projectsData } from '../Work/components/Projects';
import { motion } from 'framer-motion';
import { 
  FaReact,
  FaNode,
  FaPhp,
  FaLaravel,
  FaAws,
  FaDocker,
  FaGit,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
  FaCogs,
  FaServer,
  FaTasks,
  FaProjectDiagram,
  FaUsers
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiJavascript,
  SiVite,
  SiVercel
} from 'react-icons/si';
import './Skills.scss';

const technologies = [
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Node.js', icon: FaNode, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'Flask', icon: SiFlask, color: '#000000' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4' },
  { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Git', icon: FaGit, color: '#F05032' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' }
];

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="tech-stack">
      <motion.div 
        className="tech-stack-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <h2>Technologies & Tools</h2>
        </div>
      </motion.div>
      <motion.div 
        className="tech-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div 
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                className="tech-item"
                style={{ '--hover-color': tech.color }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                variants={itemVariants}
              >
                <Icon className="tech-icon" />
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

const RelatedProjects = () => {
  const { activeSkill } = useContext(SkillFilterContext);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentSkillTitle, setCurrentSkillTitle] = useState(null);

  const skillCategories = [
    "Réaliser", "Optimiser", "Administrer", "Gérer", "Conduire", "Collaborer"
  ];

  const getSkillIcon = (skill) => {
    switch(skill) {
      case "Réaliser":
        return <FaCode />;
      case "Optimiser":
        return <FaCogs />;
      case "Administrer":
        return <FaServer />;
      case "Gérer":
        return <FaTasks />;
      case "Conduire":
        return <FaProjectDiagram />;
      case "Collaborer":
        return <FaUsers />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (activeSkill !== null && activeSkill < skillCategories.length) {
      const skillTitle = skillCategories[activeSkill];
      setCurrentSkillTitle(skillTitle);
      const filtered = projectsData.filter(project => 
        project.skills && project.skills.some(skill => skill === skillTitle)
      );
      setFilteredProjects(filtered);
    } else {
      setCurrentSkillTitle(null);
      setFilteredProjects([]);
    }
  }, [activeSkill]);

  if (!currentSkillTitle || filteredProjects.length === 0) return null;

  return (
    <div className="related-projects">
      <Container>
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="skill-indicator"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <motion.div 
              className="skill-icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {getSkillIcon(currentSkillTitle)}
            </motion.div>
            <motion.span 
              className="skill-title"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {currentSkillTitle} Projects
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div 
          className="project-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

const Skills = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Skills | Portfolio</title>
        <meta 
          name="description" 
          content="Explore my technical skills and expertise across various domains including development, optimization, and project management." 
        />
        <meta 
          property="og:title" 
          content="Skills | Portfolio" 
        />
        <meta 
          property="og:description" 
          content="Explore my technical skills and expertise across various domains including development, optimization, and project management." 
        />
      </Helmet>
      
      <div className="skills-page">
        <div className="tech-stack-section">
          <Container>
            <TechStack />
          </Container>
        </div>
        <SkillFilterProvider>
          <div className="skills-content">
            <Container>
              <div className="skills-section">
                <div className="section-title">
                  <h2>Technical Competencies</h2>
                </div>
                <SkillsGrid />
              </div>
            </Container>
          </div>
          <RelatedProjects />
        </SkillFilterProvider>
      </div>
      
      <BackToTop />
    </Fragment>
  );
};

export default Skills;
