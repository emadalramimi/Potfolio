import React from 'react';
import { projectsData } from '../components/Projects';
import ProjectItem from './ProjectItem';

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {projectsData.map((project) => (
        <ProjectItem 
          key={project.id} 
          project={project} 
        />
      ))}
    </div>
  );
};

export default AllProjects;
