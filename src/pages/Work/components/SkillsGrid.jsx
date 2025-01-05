import React, { useState, useContext } from 'react';
import './SkillsGrid.scss';

// Create a context for skill filtering
export const SkillFilterContext = React.createContext();

const skillCategories = [
  {
    title: "Réaliser",
    color: "#A52A2A",
    lightColor: "#FFC5C5",
    textColor: "white",
    description: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
    level: "Niveau 3"
  },
  {
    title: "Optimiser",
    color: "#DEB887",
    lightColor: "#F5F5DC",
    textColor: "black",
    description: "Analyser et optimiser des applications",
    level: "Niveau 3"
  },
  {
    title: "Administrer",
    color: "#DAA520",
    lightColor: "#FFF2CC",
    textColor: "white",
    description: "Déployer des services dans une architecture réseau",
    level: "Niveau 2"
  },
  {
    title: "Gérer",
    color: "#90EE90",
    lightColor: "#C6F4D6",
    textColor: "black",
    description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
    level: "Niveau 2"
  },
  {
    title: "Conduire",
    color: "#000080",
    lightColor: "#ADD8E6",
    textColor: "white",
    description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
    level: "Niveau 2"
  },
  {
    title: "Collaborer",
    color: "#000000",
    lightColor: "#CCCCCC",
    textColor: "white",
    description: "Manager une équipe informatique",
    level: "Niveau 3"
  }
];

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
  const { activeSkill, setActiveSkill } = useContext(SkillFilterContext);

  return (
    <div className="skills-grid">
      {skillCategories.map((category, index) => (
        <div 
          key={index} 
          className={`category-column ${activeSkill === index ? 'active-skill' : ''}`}
          onClick={() => setActiveSkill(activeSkill === index ? null : index)}
          style={{
            '--bg-color': category.lightColor,
            '--text-color': category.textColor,
            '--bg-secondary': 'rgba(255, 255, 255, 0.2)',
            '--bg-hover': 'rgba(255, 255, 255, 0.3)'
          }}
        >
          <div 
            className="category-header" 
            style={{ 
              backgroundColor: category.color,
              color: category.textColor 
            }}
          >
            {category.title}
          </div>
          <div className="level-box">
            <h3 style={{ color: category.textColor }}>{category.level}</h3>
            <p style={{ color: 'black' }}>{category.description}</p>
            <div className="skills-list">
              {/* Add skill tags if needed */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
