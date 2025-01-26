import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './SkillsGrid.scss';

// Create a context for skill filtering
export const SkillFilterContext = React.createContext();

const skillCategories = {
  "Entrepreneurship": {
    color: "#8B5CF6", // Matching the image's purple
    icon: "💡"
  },
  "Innovation R&D": {
    color: "#EC4899", // Matching the image's pink
    icon: "🔬"
  },
  "Development": {
    color: "#3B82F6", // Matching the image's blue
    icon: "💻"
  },
  "AI & ML": {
    color: "#84CC16", // Matching the image's green
    icon: "🤖"
  },
  "Communication": {
    color: "#F59E0B", // Matching the image's orange/yellow
    icon: "🗣️"
  },
  "Problem-Solving": {
    color: "#7C3AED", // Matching the image's purple
    icon: "🎯"
  }
};

// Skill Filter Provider Component
export const SkillFilterProvider = ({ children }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <SkillFilterContext.Provider value={{ activeSkill, setActiveSkill }}>
      {children}
    </SkillFilterContext.Provider>
  );
};

const SkillsGrid = () => {
  const { t } = useTranslation();
  const { activeSkill, setActiveSkill } = useContext(SkillFilterContext);

  const handleSkillClick = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="skills-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(skillCategories).map(([category, { color, icon }]) => (
        <motion.div
          key={category}
          className={`skill-card ${activeSkill === category ? 'active' : ''}`}
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
          onClick={() => handleSkillClick(category)}
          style={{
            backgroundColor: color
          }}
        >
          <div className="skill-content">
            <div className="skill-icon">{icon}</div>
            <div className="skill-text">
              <h3>{t(`skills.categories.${category}.name`)}</h3>
              <div className="skill-level">
                <span className="level-badge">
                  {t(`skills.categories.${category}.level`)}
                </span>
              </div>
              <p>{t(`skills.categories.${category}.description`)}</p>
            </div>
          </div>
          <div className="skill-overlay"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
