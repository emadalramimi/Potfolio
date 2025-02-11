import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaLayerGroup 
} from 'react-icons/fa';
import './ProjectItem.scss';

const ProjectItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div 
      className="project-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
    >
      <div className="project-item__image-container">
        <img 
          src={project.imageUrl} 
          alt={t(`projects.projectsList.${project.id}.title`)} 
          className="project-item__image"
        />
        <div className={`project-item__overlay ${isHovered ? 'project-item__overlay--active' : ''}`}>
          <div className="project-item__links">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-item__link"
              >
                <FaGithub />
              </a>
            )}
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-item__link"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-item__details">
        <h3 className="project-item__title">
          {t(`projects.projectsList.${project.id}.title`)}
        </h3>
        
        <div className="project-item__tech-stack">
          <FaLayerGroup className="project-item__tech-icon" />
          <span className="project-item__tech-text">
            {project.technologies.join(' • ')}
          </span>
        </div>
        
        <p className="project-item__description">
          {t(`projects.projectsList.${project.id}.shortDescription`)}
        </p>
        
        <div className="project-item__actions">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-item__action-btn"
            >
              <FaCode /> Source Code
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-item__action-btn project-item__action-btn--outline"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
