import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaUsers, FaStar } from 'react-icons/fa';
import { difficultyLevels, projectCategories } from './Projects';

const ProjectCard = ({ 
  project, 
  onSkillClick, 
  onTechClick,
  onCategoryClick,
  isDarkMode 
}) => {
  const {
    title,
    shortDescription,
    technologies,
    skills,
    imageUrl,
    githubLink,
    demoLink,
    timeline,
    difficulty,
    teamSize,
    categoryType
  } = project;

  const CategoryIcon = projectCategories[categoryType]?.icon;
  const categoryColor = projectCategories[categoryType]?.color;
  const difficultyColor = difficultyLevels[difficulty]?.color;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="project-category" 
               onClick={() => onCategoryClick(categoryType)}
               style={{ backgroundColor: categoryColor }}>
            {CategoryIcon && <CategoryIcon />}
            <span>{categoryType}</span>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        
        <div className="project-meta">
          <div className="meta-item">
            <FaCalendar />
            <span>{timeline.duration}</span>
          </div>
          <div className="meta-item">
            <FaUsers />
            <span>{teamSize} member{teamSize > 1 ? 's' : ''}</span>
          </div>
          <div className="meta-item" style={{ color: difficultyColor }}>
            <FaStar />
            <span>{difficultyLevels[difficulty].label}</span>
          </div>
        </div>

        <p className="project-description">{shortDescription}</p>

        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="tech-tag"
              onClick={() => onTechClick(tech)}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="project-skills">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-tag"
              onClick={() => onSkillClick(skill)}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub /> View Code
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
