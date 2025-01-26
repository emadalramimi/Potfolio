import React, { Fragment, useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container, Button } from 'react-bootstrap';
import { BackToTop } from '../../common/components/UIElements';
import { SkillsGrid } from '../Work/components';
import { SkillFilterContext, SkillFilterProvider } from '../Work/components/SkillsGrid';
import { projectsData } from '../Work/components/Projects';
import ProjectItem from '../Work/projects/ProjectItem';

// Import project images
import aiDroneImage from '../../assets/images/projects/ai-drone.jpg';
import aircraftImage from '../../assets/images/projects/aircraft.jpg';
import aquacareImage from '../../assets/images/projects/aquacare.jpg';
import aiDiagnosticImage from '../../assets/images/projects/ai-diagnostic.jpg';
import laravelNotesImage from '../../assets/images/projects/laravel-notes.jpg';
import objectDetectionImage from '../../assets/images/projects/object-detection.jpg';
import eSporterImage from '../../assets/images/projects/e-sporter.jpg';
import saeProjectImage from '../../assets/images/projects/sae-project.jpg';
import medicalClinicImage from '../../assets/images/projects/medical-clinic.jpg';
import messageEncryptionImage from '../../assets/images/projects/message-encryption.jpg';
import takuzuSolverImage from '../../assets/images/projects/takuzu-solver.jpg';
import tomatoEcommerceImage from '../../assets/images/projects/tomato-ecommerce.jpg';
import onlineShopApiImage from '../../assets/images/projects/online-shop-api.jpg';
import springBlogImage from '../../assets/images/projects/spring-blog.png';
import mantiqPlatformImage from '../../assets/images/projects/mantiq-platform.png';

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
  FaUsers,
  FaPython
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
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
  SiSocketdotio,
  SiKubernetes,
  SiGooglecloud,
  SiFlutter,
  SiMlflow
} from 'react-icons/si';

import './Skills.scss';

const technologies = [
  { key: 'React.js', icon: FaReact, color: '#61DAFB' },
  { key: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { key: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { key: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { key: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { key: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { key: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { key: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { key: 'Node.js', icon: FaNode, color: '#339933' },
  { key: 'Express', icon: SiExpress, color: '#000000' },
  { key: 'Django', icon: SiDjango, color: '#092E20' },
  { key: 'Flask', icon: SiFlask, color: '#000000' },
  { key: 'PHP', icon: FaPhp, color: '#777BB4' },
  { key: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
  { key: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { key: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { key: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { key: 'AWS', icon: FaAws, color: '#FF9900' },
  { key: 'Docker', icon: FaDocker, color: '#2496ED' },
  { key: 'Git', icon: FaGit, color: '#F05032' },
  { key: 'Linux', icon: FaLinux, color: '#FCC624' },
  { key: 'Vite', icon: SiVite, color: '#646CFF' },
  { key: 'Python', icon: FaPython, color: '#3776AB' },
  { key: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { key: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { key: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { key: 'ML Flow', icon: SiMlflow, color: '#0194E7' }
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
        className="tech-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologies.map(({ key, icon: Icon, color }) => (
          <motion.div
            key={key}
            className="tech-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div 
              className="tech-icon" 
              style={{ 
                backgroundColor: `${color}1A`, 
                color: color 
              }}
            >
              <Icon />
            </div>
            <div className="tech-details">
              <h3>{key}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const RelatedProjects = () => {
  const { t, i18n } = useTranslation();
  const { activeSkill } = useContext(SkillFilterContext);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mapping of original titles to translation keys
  const projectTranslationMap = {
    'AI Guardian Drone': 'aiguardiandrone',
    'Aircraft Damage Detection': 'aircraftdamagedetection',
    'AquaCare IoT System': 'aquacareiotsystem',
    'AI Diagnostic Assistant': 'aidiagnosticassistant',
    'Laravel Students Management System': 'laravelstudentsmanagementsystem',
    'Real-Time Object Detection': 'real-timeobjectdetection',
    'E-Sporter: E-Sport Management App': 'e-sportmanagementapp',
    'Graph Algorithms': 'graphalgorithms',
    'Medical Clinic Management App': 'medicalclinicmanagementapp',
    'Caesar Cipher Encryption Tool': 'caesarcipherencryptiontool',
    'Takuzu Puzzle Solver': 'takuzupuzzlesolver',
    'Tomato E-Commerce Java Application': 'tomatoe-commerceapplication',
    'Online Shop Products API': 'onlineshopproductsapi',
    'Spring Boot Blog Application': 'springbootblogapplication',
    'Mantiq AI Sales Platform': 'mantiqaisalesplatform'
  };

  const getSkillIcon = (skill) => {
    switch(skill) {
      case "Entrepreneurship":
        return <FaArrowRight />;
      case "Innovation R&D":
        return <FaCogs />;
      case "Development":
        return <FaCode />;
      case "AI & ML":
        return <FaProjectDiagram />;
      case "Communication":
        return <FaUsers />;
      case "Problem-Solving":
        return <FaTasks />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (activeSkill) {
      const filtered = projectsData.filter(project => 
        project.skills.includes(activeSkill)
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects([]);
    }
  }, [activeSkill]);

  if (!activeSkill || filteredProjects.length === 0) return null;

  return (
    <div className="related-projects">
      <Container>
        <div className="section-header">
          <h2>
            {t('projects.relatedTo')} {t(`skills.categories.${activeSkill}.name`)}
            <span className="skill-icon">{getSkillIcon(activeSkill)}</span>
          </h2>
        </div>
        <motion.div 
          className="projects-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project, index) => {
            // Use the predefined mapping for translation key
            const translationKey = projectTranslationMap[project.title] || 
              project.title
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')  // Remove special characters except spaces
                .replace(/\s+/g, '')          // Remove spaces
                .replace(/[^a-z0-9]/g, '');   // Final cleanup
            
            // Determine the project's translation key
            const projectTranslationBase = `projects.${translationKey}`;
            
            // Fallback to original project details if translation is not found
            const projectTitle = t(`${projectTranslationBase}.title`, { 
              defaultValue: project.title 
            });
            
            const projectDescription = t(`${projectTranslationBase}.shortDescription`, { 
              defaultValue: project.shortDescription || project.description 
            });

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5 
                    }
                  }
                }}
              >
                <ProjectItem 
                  project={{
                    ...project,
                    title: projectTitle,
                    shortDescription: projectDescription,
                    imageUrl: project.imageUrl || {
                      'AI Guardian Drone': aiDroneImage,
                      'Aircraft Damage Detection': aircraftImage,
                      'AquaCare IoT System': aquacareImage,
                      'AI Diagnostic Assistant': aiDiagnosticImage,
                      'Laravel Students Management System': laravelNotesImage,
                      'Real-Time Object Detection': objectDetectionImage,
                      'E-Sporter: E-Sport Management App': eSporterImage,
                      'Graph Algorithms': saeProjectImage,
                      'Medical Clinic Management App': medicalClinicImage,
                      'Caesar Cipher Encryption Tool': messageEncryptionImage,
                      'Takuzu Puzzle Solver': takuzuSolverImage,
                      'Tomato E-Commerce Java Application': tomatoEcommerceImage,
                      'Online Shop Products API': onlineShopApiImage,
                      'Spring Boot Blog Application': springBlogImage,
                      'Mantiq AI Sales Platform': mantiqPlatformImage
                    }[project.title] || null,
                    githubLink: project.githubLink,
                    demoLink: project.demoLink,
                    technologies: project.skills
                  }}
                >
                  {/* Add project action buttons */}
                  <div className="project-action-buttons">
                    {project.githubLink && (
                      <Button 
                        variant="outline-primary" 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <FaGithub className="me-2" /> GitHub
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button 
                        variant="outline-success" 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="me-2" /> Demo
                      </Button>
                    )}
                  </div>
                </ProjectItem>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Helmet>
        <title>{t('skills.title')} | Portfolio</title>
        <meta 
          name="description" 
          content={t('skills.subtitle')}
        />
        <meta 
          property="og:title" 
          content={`${t('skills.title')} | Portfolio`}
        />
        <meta 
          property="og:description" 
          content={t('skills.subtitle')}
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
                  <h2>{t('skills.technicalCompetencies')}</h2>
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
