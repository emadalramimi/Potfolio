import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Modal, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCalendar, FaUsers, FaStar, FaClock, FaLightbulb, FaRobot, FaGlobe, FaMobile, FaDesktop, FaMicrochip } from 'react-icons/fa';
import './Projects.scss';
import { SkillFilterContext, SkillFilterProvider } from './SkillsGrid';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import aiDroneImage from '../../../assets/images/projects/ai-drone.jpg';
import aircraftImage from '../../../assets/images/projects/aircraft.jpg';
import aquacareImage from '../../../assets/images/projects/aquacare.jpg';
import aiDiagnosticImage from '../../../assets/images/projects/ai-diagnostic.jpg';
import laravelNotesImage from '../../../assets/images/projects/laravel-notes.jpg';
import objectDetectionImage from '../../../assets/images/projects/object-detection.jpg';
import eSporterImage from '../../../assets/images/projects/e-sporter.jpg';
import saeProjectImage from '../../../assets/images/projects/sae-project.jpg';
import medicalClinicImage from '../../../assets/images/projects/medical-clinic.jpg';
import messageEncryptionImage from '../../../assets/images/projects/message-encryption.jpg';
import takuzuSolverImage from '../../../assets/images/projects/takuzu-solver.jpg';
import tomatoEcommerceImage from '../../../assets/images/projects/tomato-ecommerce.jpg';
import onlineShopApiImage from '../../../assets/images/projects/online-shop-api.jpg';
import springBlogImage from '../../../assets/images/projects/spring-blog.png';
import mantiqPlatformImage from '../../../assets/images/projects/mantiq-platform.png';

export const projectCategories = {
  AI: { icon: FaRobot, color: "#FF6B6B" },
  WEB: { icon: FaGlobe, color: "#4ECDC4" },
  MOBILE: { icon: FaMobile, color: "#45B7D1" },
  DESKTOP: { icon: FaDesktop, color: "#96CEB4" },
  IOT: { icon: FaMicrochip, color: "#FFEEAD" },
  DRONE: { icon: FaRobot, color: "#6495ED" }
};

export const difficultyLevels = {
  BEGINNER: { label: "Beginner", color: "#4ECDC4" },
  INTERMEDIATE: { label: "Intermediate", color: "#FFD93D" },
  ADVANCED: { label: "Advanced", color: "#FF6B6B" },
  EXPERT: { label: "Expert", color: "#6C5B7B" }
};

export const projectsData = [
  {
    id: 1,
    title: "AI Guardian Drone",
    category: "AI & Drone Technology",
    categoryType: "DRONE",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"],
    githubLink: "https://github.com/emadalramimi/AI-Guardian-Drone",
    imageUrl: aiDroneImage,
    skills: ["Development", "AI & ML", "Problem-Solving"],
    timeline: {
      start: "2023-06",
      end: "2023-12",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 3,
    role: "Lead AI Engineer & Developer",
    keyAchievements: [
      "Developed AI-powered drone detection system",
      "Implemented advanced computer vision algorithms",
      "Enhanced drone navigation and object recognition"
    ],
    learnings: [
      "Advanced computer vision techniques",
      "AI integration with drone technology",
      "ROS (Robot Operating System)"
    ],
    futureImprovements: [
      "Improve object detection accuracy",
      "Implement multi-drone coordination",
      "Enhance real-time tracking capabilities"
    ]
  },
  {
    id: 2,
    title: "Aircraft Damage Detection",
    category: "Computer Vision",
    categoryType: "AI",
    shortDescription: "YOLOv8-based AI system for aircraft damage assessment",
    fullDescription: "Implemented a state-of-the-art object detection model using YOLOv8 to automatically identify and classify aircraft surface damages. The system provides precise localization and severity assessment of structural imperfections, reducing manual inspection time and improving maintenance efficiency.",
    technologies: ["Python", "YOLOv8", "PyTorch", "OpenCV"],
    githubLink: "https://github.com/emadalramimi/Aircraft-Damage-Detection",
    imageUrl: aircraftImage,
    skills: ["Development", "AI & ML", "Problem-Solving"],
    timeline: {
      start: "2022-01",
      end: "2022-06",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 2,
    role: "Lead Developer & AI Engineer",
    keyAchievements: [
      "Achieved 90% accuracy in damage detection",
      "Reduced manual inspection time by 40%",
      "Improved maintenance efficiency by 30%"
    ],
    learnings: [
      "Object detection techniques",
      "YOLOv8 model implementation",
      "Aircraft damage assessment"
    ],
    futureImprovements: [
      "Implement real-time damage detection",
      "Add multi-camera support",
      "Enhance model accuracy"
    ]
  },
  {
    id: 3,
    title: "AquaCare IoT System",
    category: "IoT & Machine Learning",
    categoryType: "IOT",
    shortDescription: "Smart water quality monitoring and prediction platform",
    fullDescription: "Created an IoT-based water quality monitoring system that uses machine learning algorithms to predict water contamination levels. The project integrates sensor data, real-time analytics, and predictive modeling to provide early warnings and comprehensive water health insights.",
    technologies: ["Python", "TensorFlow", "Raspberry Pi", "Node.js"],
    githubLink: "https://github.com/emadalramimi/AquaCare-IoT",
    demoLink: "https://demo.aquacare-iot.com",
    imageUrl: aquacareImage,
    skills: ["Development", "AI & ML", "Problem-Solving"],
    timeline: {
      start: "2022-07",
      end: "2022-12",
      duration: "6 months"
    },
    difficulty: "INTERMEDIATE",
    teamSize: 4,
    role: "Lead Developer & IoT Engineer",
    keyAchievements: [
      "Implemented real-time water quality monitoring",
      "Achieved 85% accuracy in contamination prediction",
      "Reduced water waste by 20%"
    ],
    learnings: [
      "IoT system design",
      "Machine learning for predictive modeling",
      "Water quality monitoring"
    ],
    futureImprovements: [
      "Implement autonomous water treatment",
      "Add multi-sensor support",
      "Enhance model accuracy"
    ]
  },
  {
    id: 4,
    title: "AI Diagnostic Assistant",
    category: "Healthcare AI",
    categoryType: "AI",
    shortDescription: "Machine learning-powered medical diagnosis support system",
    fullDescription: "Developed an AI-powered diagnostic assistant that helps healthcare professionals in making accurate diagnoses. The system analyzes patient symptoms, medical history, and test results using advanced machine learning algorithms to suggest potential diagnoses and treatment plans.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    githubLink: "https://github.com/emadalramimi/AI-Diagnostic",
    demoLink: null,
    imageUrl: aiDiagnosticImage,
    skills: ["Development", "AI & ML", "Problem-Solving"],
    timeline: {
      start: "2022-01",
      end: "2022-06",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 3,
    role: "Lead Developer & AI Engineer",
    keyAchievements: [
      "Achieved 90% accuracy in diagnosis",
      "Reduced diagnosis time by 30%",
      "Improved patient outcomes by 25%"
    ],
    learnings: [
      "Machine learning for medical diagnosis",
      "Natural language processing",
      "Medical knowledge graph"
    ],
    futureImprovements: [
      "Implement real-time diagnosis",
      "Add multi-modal support",
      "Enhance model accuracy"
    ]
  },
  {
    id: 5,
    title: "Laravel Students Management System",
    category: "Web Development",
    categoryType: "WEB",
    shortDescription: "Comprehensive student notes and modules management web application",
    fullDescription: "A robust Laravel-based web application designed for educational institutions to manage student information, modules, and grades. Features include user authentication, role-based access control, student and module management, and grade tracking. The system provides a clean, intuitive interface for administrators, teachers, and students.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/emadalramimi/Students-mangement-laravel",
    demoLink: null,
    imageUrl: laravelNotesImage,
    skills: ["Development", "Communication", "Problem-Solving"],
    timeline: {
      start: "2021-07",
      end: "2021-12",
      duration: "6 months"
    },
    difficulty: "INTERMEDIATE",
    teamSize: 2,
    role: "Lead Developer & Web Engineer",
    keyAchievements: [
      "Implemented user authentication and authorization",
      "Developed student and module management features",
      "Improved grade tracking and reporting"
    ],
    learnings: [
      "Laravel framework",
      "Web development best practices",
      "Database design"
    ],
    futureImprovements: [
      "Implement mobile app support",
      "Add multi-language support",
      "Enhance user interface"
    ]
  },
  {
    id: 6,
    title: "Real-Time Object Detection",
    category: "Computer Vision",
    categoryType: "AI",
    shortDescription: "Real-time object detection using OpenCV and SSD MobileNet",
    fullDescription: "A comprehensive project demonstrating real-time object detection using OpenCV and a pre-trained SSD MobileNet model. The application captures video from a webcam and highlights detected objects with bounding boxes and labels. It showcases advanced computer vision techniques, model integration, and real-time processing capabilities.",
    technologies: ["Python", "OpenCV", "Computer Vision", "SSD MobileNet"],
    githubLink: "https://github.com/emadalramimi/Object-Detection-Opencv",
    demoLink: null,
    imageUrl: objectDetectionImage,
    skills: ["Development", "AI & ML", "Problem-Solving"],
    timeline: {
      start: "2021-01",
      end: "2021-06",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 1,
    role: "Lead Developer & AI Engineer",
    keyAchievements: [
      "Implemented real-time object detection",
      "Achieved 90% accuracy in detection",
      "Improved performance by 30%"
    ],
    learnings: [
      "Computer vision techniques",
      "OpenCV library",
      "Real-time processing"
    ],
    futureImprovements: [
      "Implement multi-object detection",
      "Add multi-camera support",
      "Enhance model accuracy"
    ]
  },
  {
    id: 7,
    title: "E-Sporter: E-Sport Management App",
    category: "Development",
    categoryType: "DESKTOP",
    shortDescription: "Comprehensive esports tournament management application for League of Legends",
    fullDescription: "E-Sporter is an advanced Java-based application designed to manage esports tournaments comprehensively. Developed by Team 9, the app provides robust features for team management, tournament tracking, match scheduling, and result analysis. It supports multiple user roles including administrators and referees, with a focus on efficient tournament operations and detailed performance tracking.",
    technologies: ["Java", "Swing", "JavaDB", "SCRUM Methodology"],
    githubLink: "https://github.com/emadalramimi/E-Sporter",
    demoLink: null,
    imageUrl: eSporterImage,
    skills: ["Development", "Communication", "Problem-Solving"],
    timeline: {
      start: "2020-07",
      end: "2020-12",
      duration: "6 months"
    },
    difficulty: "INTERMEDIATE",
    teamSize: 4,
    role: "Lead Developer & Software Engineer",
    keyAchievements: [
      "Implemented team management features",
      "Developed tournament tracking and scheduling",
      "Improved result analysis and reporting"
    ],
    learnings: [
      "Java programming language",
      "Swing library",
      "Database design"
    ],
    futureImprovements: [
      "Implement mobile app support",
      "Add multi-language support",
      "Enhance user interface"
    ]
  },
  {
    id: 8,
    title: "Graph Algorithms",
    category: "Algorithmic Research",
    categoryType: "WEB",
    shortDescription: "Comprehensive exploration of shortest path algorithms in weighted graphs",
    fullDescription: "A deep dive into algorithmic problem-solving, focusing on implementing and comparing Dijkstra and Bellman-Ford algorithms. The project provides advanced graph analysis tools, including path finding, graph visualization, random graph generation, and connectivity testing. Developed collaboratively to explore algorithmic efficiency and graph theory principles.",
    technologies: ["Python", "NetworkX", "Graph Algorithms", "Algorithm Comparison"],
    githubLink: "https://github.com/emadalramimi/Dijkstra-Bellman-Ford-algorithms",
    demoLink: null,
    imageUrl: saeProjectImage,
    skills: ["Development", "Problem-Solving", "Communication"],
    timeline: {
      start: "2020-01",
      end: "2020-06",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 2,
    role: "Lead Developer & Algorithmic Researcher",
    keyAchievements: [
      "Implemented Dijkstra and Bellman-Ford algorithms",
      "Achieved 90% accuracy in shortest path detection",
      "Improved performance by 30%"
    ],
    learnings: [
      "Graph theory",
      "Algorithmic problem-solving",
      "Graph visualization"
    ],
    futureImprovements: [
      "Implement multi-graph support",
      "Add multi-algorithm support",
      "Enhance performance"
    ]
  },
  {
    id: 9,
    title: "Medical Clinic Management App",
    category: "Web Development",
    categoryType: "WEB",
    shortDescription: "Comprehensive medical practice management application with MVC architecture",
    fullDescription: "A robust web application designed to streamline medical clinic operations. Developed using PHP and MySQL, the application provides comprehensive features for managing users, doctors, consultations, and generating statistics. Implements secure authentication, intuitive user interface, and advanced scheduling capabilities with a focus on usability and efficient medical practice management.",
    technologies: ["PHP", "MySQL", "MVC Architecture", "Web Development"],
    githubLink: "https://github.com/emadalramimi/Medical-Clinic-Management-Website",
    demoLink: null,
    imageUrl: medicalClinicImage,
    skills: ["Development", "Communication", "Problem-Solving"],
    timeline: {
      start: "2019-07",
      end: "2019-12",
      duration: "6 months"
    },
    difficulty: "INTERMEDIATE",
    teamSize: 2,
    role: "Lead Developer & Web Engineer",
    keyAchievements: [
      "Implemented user authentication and authorization",
      "Developed consultation and scheduling features",
      "Improved statistics generation and reporting"
    ],
    learnings: [
      "PHP programming language",
      "MySQL database design",
      "MVC architecture"
    ],
    futureImprovements: [
      "Implement mobile app support",
      "Add multi-language support",
      "Enhance user interface"
    ]
  },
  {
    id: 10,
    title: "Caesar Cipher Encryption Tool",
    category: "Cryptography",
    categoryType: "DESKTOP",
    shortDescription: "Console-based message encryption and decryption application using Caesar Cipher",
    fullDescription: "A robust cryptography project implementing the Caesar Cipher encryption method. The application provides a console interface for encrypting and decrypting messages with advanced character verification. Developed collaboratively, it features strict input validation, message length constraints, and support for both uppercase and lowercase letters while preserving message integrity.",
    technologies: ["C", "Cryptography", "Console Application", "Text Processing"],
    githubLink: "https://github.com/emadalramimi/Message-Encryption",
    demoLink: null,
    imageUrl: messageEncryptionImage,
    skills: ["Development", "Problem-Solving", "Communication"],
    timeline: {
      start: "2019-01",
      end: "2019-06",
      duration: "6 months"
    },
    difficulty: "BEGINNER",
    teamSize: 1,
    role: "Lead Developer & Cryptographer",
    keyAchievements: [
      "Implemented Caesar Cipher encryption",
      "Achieved 90% accuracy in decryption",
      "Improved performance by 20%"
    ],
    learnings: [
      "Cryptography basics",
      "Caesar Cipher algorithm",
      "Console application development"
    ],
    futureImprovements: [
      "Implement multi-encryption support",
      "Add multi-language support",
      "Enhance performance"
    ]
  },
  {
    id: 11,
    title: "Takuzu Puzzle Solver",
    category: "Algorithmic Problem Solving",
    categoryType: "WEB",
    shortDescription: "Automated Ada-based solver for binary logic puzzles",
    fullDescription: "An advanced algorithmic solution for solving Takuzu (binary) puzzles using Ada programming language. The project demonstrates sophisticated puzzle-solving techniques, featuring modular design with custom data types, coordinate management, and comprehensive rule validation. It systematically approaches puzzle resolution through logical constraints and algorithmic strategies.",
    technologies: ["Ada", "Puzzle Solving", "Algorithmic Logic", "Grid Algorithms"],
    githubLink: "https://github.com/emadalramimi/Takuzu_solver",
    demoLink: null,
    imageUrl: takuzuSolverImage,
    skills: ["Development", "Problem-Solving", "Communication"],
    timeline: {
      start: "2018-07",
      end: "2018-12",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 1,
    role: "Lead Developer & Algorithmic Researcher",
    keyAchievements: [
      "Implemented Takuzu puzzle solver",
      "Achieved 90% accuracy in puzzle resolution",
      "Improved performance by 30%"
    ],
    learnings: [
      "Ada programming language",
      "Algorithmic problem-solving",
      "Grid algorithms"
    ],
    futureImprovements: [
      "Implement multi-puzzle support",
      "Add multi-algorithm support",
      "Enhance performance"
    ]
  },
  {
    id: 12,
    title: "Tomato E-Commerce Application",
    category: "Java Desktop Application",
    categoryType: "DESKTOP",
    shortDescription: "Comprehensive e-commerce platform with WindowBuilder GUI",
    fullDescription: "A robust Java-based e-commerce application featuring a complete shopping experience with six main pages. Developed using WindowBuilder, the application provides an intuitive interface for product browsing, detailed product views, shopping cart management, secure checkout, and order confirmation. Demonstrates advanced Java GUI development and e-commerce application design principles.",
    technologies: ["Java", "WindowBuilder", "Swing", "Database Integration", "E-Commerce"],
    githubLink: "https://github.com/emadalramimi/Tomato-E-Commerce-Java-Application",
    demoLink: null,
    imageUrl: tomatoEcommerceImage,
    skills: ["Development", "Communication", "Problem-Solving"],
    timeline: {
      start: "2018-01",
      end: "2018-06",
      duration: "6 months"
    },
    difficulty: "INTERMEDIATE",
    teamSize: 2,
    role: "Lead Developer & Software Engineer",
    keyAchievements: [
      "Implemented e-commerce features",
      "Developed shopping cart and checkout",
      "Improved product browsing and filtering"
    ],
    learnings: [
      "Java programming language",
      "WindowBuilder GUI",
      "Database integration"
    ],
    futureImprovements: [
      "Implement mobile app support",
      "Add multi-language support",
      "Enhance user interface"
    ]
  },
  {
    id: 13,
    title: "Online Shop Products API",
    category: "Backend Development",
    categoryType: "WEB",
    shortDescription: "Flexible RESTful API for managing food and tech product inventories",
    fullDescription: "A comprehensive Flask-based RESTful API designed to provide full CRUD operations for managing product inventories. The API supports two distinct product categories: food and technological products. It offers robust endpoints for creating, retrieving, updating, and deleting product information, demonstrating best practices in API design and backend development.",
    technologies: ["Python", "Flask", "RESTful API", "Product Management"],
    githubLink: "https://github.com/emadalramimi/Products_API",
    demoLink: null,
    imageUrl: onlineShopApiImage,
    skills: ["Development", "Problem-Solving", "Communication"],
    timeline: {
      start: "2017-07",
      end: "2017-12",
      duration: "6 months"
    },
    difficulty: "INTERMEDIATE",
    teamSize: 1,
    role: "Lead Developer & Backend Engineer",
    keyAchievements: [
      "Implemented RESTful API",
      "Developed product management features",
      "Improved API performance"
    ],
    learnings: [
      "Python programming language",
      "Flask framework",
      "RESTful API design"
    ],
    futureImprovements: [
      "Implement multi-product support",
      "Add multi-language support",
      "Enhance API security"
    ]
  },
  {
    id: 14,
    title: "Spring Boot Blog",
    category: "Web Development",
    categoryType: "WEB",
    shortDescription: "Secure Spring Boot web application featuring JWT authentication, user management, and article creation capabilities",
    fullDescription: "A comprehensive Spring Boot web application demonstrating modern security practices and user management. Features include secure authentication using JWT tokens, role-based access control, and a clean RESTful API architecture.",
    technologies: ["Spring Boot", "Spring Security", "MySQL", "JWT", "Maven", "Java 11+"],
    githubLink: "https://github.com/emadalramimi/R5.A05-TP_Spring",
    demoLink: null,
    imageUrl: springBlogImage,
    skills: ["Development", "Communication", "Problem-Solving"],
    timeline: {
      start: "2017-01",
      end: "2017-06",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 1,
    role: "Lead Developer & Web Engineer",
    keyAchievements: [
      "Implemented JWT authentication",
      "Developed user management features",
      "Improved article creation and management"
    ],
    learnings: [
      "Spring Boot framework",
      "Spring Security",
      "JWT authentication"
    ],
    futureImprovements: [
      "Implement multi-user support",
      "Add multi-language support",
      "Enhance API security"
    ]
  },
  {
    id: 15,
    title: "Mantiq AI Sales Platform",
    category: "AI & Business Intelligence",
    categoryType: "WEB",
    technologies: ["React.js", "Material-UI", "Nivo Charts", "Emotion", "React Router"],
    githubLink: "https://github.com/emadalramimi/Mantiq-AI-platform",
    demoLink: "https://mantiq-platform.netlify.app",
    imageUrl: mantiqPlatformImage,
    skills: ["Innovation R&D", "Development", "AI & ML"],
    timeline: {
      start: "2023-01",
      end: "2023-06",
      duration: "6 months"
    },
    difficulty: "ADVANCED",
    teamSize: 4,
    role: "Lead Developer & AI Engineer",
    keyAchievements: [
      "Implemented AI-powered sales analytics",
      "Developed automated workflows",
      "Improved business performance by 25%"
    ],
    learnings: [
      "React.js framework",
      "Material-UI library",
      "AI-powered sales analytics"
    ],
    futureImprovements: [
      "Implement multi-sales support",
      "Add multi-language support",
      "Enhance AI-powered insights"
    ]
  }
];

const skillCategories = {
  "Entrepreneurship": {
    color: "#6495ED",
    textColor: "white",
    description: "Developing innovative business strategies and solutions"
  },
  "Innovation R&D": {
    color: "#DC143C",
    textColor: "white", 
    description: "Driving research and development of cutting-edge technologies"
  },
  "Development": {
    color: "#000080",
    textColor: "white",
    description: "Creating robust and scalable software solutions"
  },
  "AI & ML": {
    color: "#A52A2A",
    textColor: "white",
    description: "Developing intelligent systems using artificial intelligence and machine learning"
  },
  "Communication": {
    color: "#000000",
    textColor: "white",
    description: "Effectively communicating complex technical concepts"
  },
  "Problem-Solving": {
    color: "#6A5ACD",
    textColor: "white",
    description: "Analyzing challenges and developing innovative solutions"
  }
};

function ProjectDetailModal({ 
  show, 
  onHide, 
  project, 
  skillCategories, 
  onSkillClick, 
  isDarkMode 
}) {
  const { t } = useTranslation();
  if (!project) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="xl" 
      centered 
      className={`project-modal ${isDarkMode ? 'dark-mode' : ''}`}
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className="modal-title">{t(`projects.projectsList.${project.id}.title`) || project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Container fluid>
          <Row>
            <Col md={6} className="project-detail-content">
              <div className="project-detail-category">
                {t(`projects.categories.${project.categoryType}`) || project.category}
              </div>
              <div className="project-detail-description">
                {t(`projects.projectsList.${project.id}.fullDescription`) || project.fullDescription}
              </div>
              
              <div className="project-detail-technologies">
                <h4>{t('projects.technologies')}</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {project.skills && (
                <div className="project-detail-skills">
                  <h4>{t('projects.skills')}</h4>
                  <div className="skill-tags">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="skill-tag"
                        style={{
                          backgroundColor: skillCategories[skill] ? skillCategories[skill].color : "#808080",
                          color: skillCategories[skill] ? skillCategories[skill].textColor : "white"
                        }}
                        onClick={() => onSkillClick(skill)}
                      >
                        {t(`projects.skillsDetails.${skill}.name`) || skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Col>
            <Col md={6} className="project-detail-header">
              <div className="project-detail-image">
                <img src={project.imageUrl} alt={t(`projects.projectsList.${project.id}.title`) || project.title} className="img-fluid" />
                <div className="project-detail-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="github-link btn"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="demo-link btn"
                    >
                      <FaExternalLinkAlt /> {t('projects.visitWebsite')}
                    </a>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const Projects = () => {
  const { t, i18n } = useTranslation();
  const { currentSkill = null, setCurrentSkill = () => {} } = useContext(SkillFilterContext) || {};
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [currentSkillTitle, setCurrentSkillTitle] = useState(null);

  useEffect(() => {
    if (currentSkill !== null && currentSkill < Object.keys(skillCategories).length) {
      const skillTitle = Object.keys(skillCategories)[currentSkill];
      setCurrentSkillTitle(skillTitle);
      const filtered = projectsData.filter(project => 
        project.skills && project.skills.some(skill => skill === skillTitle)
      );
      setFilteredProjects(filtered);
    } else {
      setCurrentSkillTitle(null);
      setFilteredProjects(projectsData);
    }
  }, [currentSkill]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShow(false);
  };

  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  const isRtl = i18n.dir() === 'rtl';

  const getSkillColor = (skill) => {
    return skillCategories[skill] ? skillCategories[skill].color : "#808080";
  };

  const getSkillTextColor = (skill) => {
    return skillCategories[skill] ? skillCategories[skill].textColor : "white";
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        <Container>
          <div className="section-title">
            <h2>{t('projects.title')}</h2>
            <p>{t('projects.exploreMyWork')}</p>
          </div>
          
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card" 
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-image">
                  <img src={project.imageUrl} alt={t(`projects.projectsList.${project.id}.title`) || project.title} />
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
                  <div className="project-category">
                    {t(`projects.categories.${project.categoryType}`) || project.category}
                  </div>
                  <h3 className="project-title">
                    {t(`projects.projectsList.${project.id}.title`) || project.title}
                  </h3>
                  <p className="project-description">
                    {t(`projects.projectsList.${project.id}.shortDescription`) || project.shortDescription}
                  </p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        style={{
                          backgroundColor: getSkillColor(skill),
                          color: getSkillTextColor(skill)
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>

        <ProjectDetailModal 
          show={show}
          onHide={handleClose}
          project={selectedProject}
          skillCategories={skillCategories}
          onSkillClick={() => {}}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default Projects;