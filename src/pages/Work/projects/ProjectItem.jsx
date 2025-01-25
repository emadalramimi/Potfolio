import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ProjectItem.scss';

const ProjectItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const getTranslationKey = (title) => {
    const titleToKey = {
      'Tomato Ecommerce': 'tomatoEcommerce',
      'Takuzu Solver': 'takuzuSolver',
      'Online Shop API': 'onlineShopApi',
      'Spring Boot Blog': 'springBlog'
    };
    return titleToKey[title] || title.toLowerCase().replace(/\s+/g, '');
  };

  const translationKey = getTranslationKey(project.title);

  return (
    <motion.div
      className="project-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image-container">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-image" 
        />
        {isHovered && (
          <motion.div 
            className="project-hover-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-links">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  <FaGithub /> {t('projects.viewGithub')}
                </a>
              )}
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  <FaExternalLinkAlt /> {t('projects.visitWebsite')}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>

      <div className="project-details">
        <h3 className="project-title">
          {t(`projects.${translationKey}.title`)}
        </h3>
        <p className="project-description">
          {t(`projects.${translationKey}.shortDescription`)}
        </p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-skills">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
