import React, { useState, useContext, useEffect } from 'react';
import { Container, Modal, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './Projects.scss';
import { SkillFilterContext, SkillFilterProvider } from './SkillsGrid';

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

export const projectsData = [
  {
    id: 1,
    title: "AI Guardian Drone",
    category: "AI & Drone Technology",
    shortDescription: "Advanced AI-powered drone for search and rescue operations",
    fullDescription: "Developed an intelligent drone system using computer vision and machine learning algorithms to enhance search and rescue capabilities. The project integrates real-time object detection, thermal imaging, and path optimization to improve emergency response efficiency.",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"],
    githubLink: "https://github.com/emadalramimi/AI-Guardian-Drone",
    demoLink: "https://demo.ai-guardian-drone.com",
    imageUrl: aiDroneImage,
    skills: ["Réaliser", "Optimiser", "Conduire"]
  },
  {
    id: 2,
    title: "Aircraft Damage Detection",
    category: "Computer Vision",
    shortDescription: "YOLOv8-based AI system for aircraft damage assessment",
    fullDescription: "Implemented a state-of-the-art object detection model using YOLOv8 to automatically identify and classify aircraft surface damages. The system provides precise localization and severity assessment of structural imperfections, reducing manual inspection time and improving maintenance efficiency.",
    technologies: ["Python", "YOLOv8", "PyTorch", "OpenCV"],
    githubLink: "https://github.com/emadalramimi/Aircraft-Damage-Detection",
    demoLink: "https://demo.aircraft-damage.com",
    imageUrl: aircraftImage,
    skills: ["Réaliser", "Administrer", "Gérer"]
  },
  {
    id: 3,
    title: "AquaCare IoT System",
    category: "IoT & Machine Learning",
    shortDescription: "Smart water quality monitoring and prediction platform",
    fullDescription: "Created an IoT-based water quality monitoring system that uses machine learning algorithms to predict water contamination levels. The project integrates sensor data, real-time analytics, and predictive modeling to provide early warnings and comprehensive water health insights.",
    technologies: ["Python", "TensorFlow", "Raspberry Pi", "Node.js"],
    githubLink: "https://github.com/emadalramimi/AquaCare-IoT",
    demoLink: "https://demo.aquacare-iot.com",
    imageUrl: aquacareImage,
    skills: ["Réaliser", "Administrer", "Gérer"]
  },
  {
    id: 4,
    title: "AI Diagnostic Assistant",
    category: "Healthcare AI",
    shortDescription: "Machine learning-powered medical diagnosis support system",
    fullDescription: "Developed an AI-powered diagnostic assistant that helps healthcare professionals in making accurate diagnoses. The system analyzes patient symptoms, medical history, and test results using advanced machine learning algorithms to suggest potential diagnoses and treatment plans.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    githubLink: "https://github.com/emadalramimi/AI-Diagnostic",
    demoLink: "https://demo.ai-diagnostic.com",
    imageUrl: aiDiagnosticImage,
    skills: ["Collaborer", "Gérer", "Optimiser"]
  },
  {
    id: 5,
    title: "Laravel Students Management System",
    category: "Web Development",
    shortDescription: "Comprehensive student notes and modules management web application",
    fullDescription: "A robust Laravel-based web application designed for educational institutions to manage student information, modules, and grades. Features include user authentication, role-based access control, student and module management, and grade tracking. The system provides a clean, intuitive interface for administrators, teachers, and students.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/emadalramimi/Students-mangement-laravel",
    demoLink: "https://demo.laravel-notes-system.com",
    imageUrl: laravelNotesImage,
    skills: ["Réaliser", "Administrer", "Gérer"]
  },
  {
    id: 6,
    title: "Real-Time Object Detection",
    category: "Computer Vision",
    shortDescription: "Real-time object detection using OpenCV and SSD MobileNet",
    fullDescription: "A comprehensive project demonstrating real-time object detection using OpenCV and a pre-trained SSD MobileNet model. The application captures video from a webcam and highlights detected objects with bounding boxes and labels. It showcases advanced computer vision techniques, model integration, and real-time processing capabilities.",
    technologies: ["Python", "OpenCV", "Computer Vision", "SSD MobileNet"],
    githubLink: "https://github.com/emadalramimi/Object-Detection-Opencv",
    demoLink: "https://github.com/emadalramimi/Object-Detection-Opencv",
    imageUrl: objectDetectionImage,
    skills: ["Réaliser", "Optimiser", "Conduire"]
  },
  {
    id: 7,
    title: "E-Sporter: E-Sport Management App",
    category: "Software Development",
    shortDescription: "Comprehensive esports tournament management application for League of Legends",
    fullDescription: "E-Sporter is an advanced Java-based application designed to manage esports tournaments comprehensively. Developed by Team 9, the app provides robust features for team management, tournament tracking, match scheduling, and result analysis. It supports multiple user roles including administrators and referees, with a focus on efficient tournament operations and detailed performance tracking.",
    technologies: ["Java", "Swing", "JavaDB", "SCRUM Methodology"],
    githubLink: "https://github.com/emadalramimi/E-Sporter",
    demoLink: "https://github.com/emadalramimi/E-Sporter",
    imageUrl: eSporterImage,
    skills: ["Collaborer", "Gérer", "Optimiser"]
  },
  {
    id: 8,
    title: "Graph Algorithms",
    category: "Algorithmic Research",
    shortDescription: "Comprehensive exploration of shortest path algorithms in weighted graphs",
    fullDescription: "A deep dive into algorithmic problem-solving, focusing on implementing and comparing Dijkstra and Bellman-Ford algorithms. The project provides advanced graph analysis tools, including path finding, graph visualization, random graph generation, and connectivity testing. Developed collaboratively to explore algorithmic efficiency and graph theory principles.",
    technologies: ["Python", "NetworkX", "Graph Algorithms", "Algorithm Comparison"],
    githubLink: "https://github.com/emadalramimi/Dijkstra-Bellman-Ford-algorithms",
    demoLink: "https://github.com/emadalramimi/Dijkstra-Bellman-Ford-algorithms",
    imageUrl: saeProjectImage,
    skills: ["Réaliser", "Administrer", "Gérer"]
  },
  {
    id: 9,
    title: "Medical Clinic Management App",
    category: "Web Development",
    shortDescription: "Comprehensive medical practice management application with MVC architecture",
    fullDescription: "A robust web application designed to streamline medical clinic operations. Developed using PHP and MySQL, the application provides comprehensive features for managing users, doctors, consultations, and generating statistics. Implements secure authentication, intuitive user interface, and advanced scheduling capabilities with a focus on usability and efficient medical practice management.",
    technologies: ["PHP", "MySQL", "MVC Architecture", "Web Development"],
    githubLink: "https://github.com/emadalramimi/Medical-Clinic-Management-Website",
    demoLink: "https://github.com/emadalramimi/Medical-Clinic-Management-Website",
    imageUrl: medicalClinicImage,
    skills: ["Réaliser", "Optimiser", "Conduire"]
  },
  {
    id: 10,
    title: "Caesar Cipher Encryption Tool",
    category: "Cryptography",
    shortDescription: "Console-based message encryption and decryption application using Caesar Cipher",
    fullDescription: "A robust cryptography project implementing the Caesar Cipher encryption method. The application provides a console interface for encrypting and decrypting messages with advanced character verification. Developed collaboratively, it features strict input validation, message length constraints, and support for both uppercase and lowercase letters while preserving message integrity.",
    technologies: ["C", "Cryptography", "Console Application", "Text Processing"],
    githubLink: "https://github.com/emadalramimi/Message-Encryption",
    demoLink: "https://github.com/emadalramimi/Message-Encryption",
    imageUrl: messageEncryptionImage,
    skills: ["Collaborer", "Gérer", "Optimiser"]
  },
  {
    id: 11,
    title: "Takuzu Puzzle Solver",
    category: "Algorithmic Problem Solving",
    shortDescription: "Automated Ada-based solver for binary logic puzzles",
    fullDescription: "An advanced algorithmic solution for solving Takuzu (binary) puzzles using Ada programming language. The project demonstrates sophisticated puzzle-solving techniques, featuring modular design with custom data types, coordinate management, and comprehensive rule validation. It systematically approaches puzzle resolution through logical constraints and algorithmic strategies.",
    technologies: ["Ada", "Puzzle Solving", "Algorithmic Logic", "Grid Algorithms"],
    githubLink: "https://github.com/emadalramimi/Takuzu_solver",
    demoLink: "https://github.com/emadalramimi/Takuzu_solver",
    imageUrl: takuzuSolverImage,
    skills: ["Réaliser", "Administrer", "Gérer"]
  },
  {
    id: 12,
    title: "Tomato E-Commerce Application",
    category: "Java Desktop Application",
    shortDescription: "Comprehensive e-commerce platform with WindowBuilder GUI",
    fullDescription: "A robust Java-based e-commerce application featuring a complete shopping experience with six main pages. Developed using WindowBuilder, the application provides an intuitive interface for product browsing, detailed product views, shopping cart management, secure checkout, and order confirmation. Demonstrates advanced Java GUI development and e-commerce application design principles.",
    technologies: ["Java", "WindowBuilder", "Swing", "Database Integration", "E-Commerce"],
    githubLink: "https://github.com/emadalramimi/Tomato-E-Commerce-Java-Application",
    demoLink: "https://github.com/emadalramimi/Tomato-E-Commerce-Java-Application",
    imageUrl: tomatoEcommerceImage,
    skills: ["Collaborer", "Gérer", "Optimiser"]
  },
  {
    id: 13,
    title: "Online Shop Products API",
    category: "Backend Development",
    shortDescription: "Flexible RESTful API for managing food and tech product inventories",
    fullDescription: "A comprehensive Flask-based RESTful API designed to provide full CRUD operations for managing product inventories. The API supports two distinct product categories: food and technological products. It offers robust endpoints for creating, retrieving, updating, and deleting product information, demonstrating best practices in API design and backend development.",
    technologies: ["Python", "Flask", "RESTful API", "Product Management"],
    githubLink: "https://github.com/emadalramimi/Products_API",
    demoLink: "https://github.com/emadalramimi/Products_API",
    imageUrl: onlineShopApiImage,
    skills: ["Collaborer", "Gérer", "Optimiser"]
  }
];

const skillCategories = {
  "Réaliser": {
    color: "#A52A2A",
    textColor: "white",
    description: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)"
  },
  "Optimiser": {
    color: "#DEB887",
    textColor: "black",
    description: "Analyser et optimiser des applications"
  },
  "Administrer": {
    color: "#DAA520",
    textColor: "white",
    description: "Déployer des services dans une architecture réseau"
  },
  "Gérer": {
    color: "#90EE90",
    textColor: "black",
    description: "Administrer une base de données, concevoir et réaliser des systèmes d'informations décisionnels"
  },
  "Conduire": {
    color: "#000080",
    textColor: "white",
    description: "Participer à la conception et à la mise en œuvre d'un projet système d'information"
  },
  "Collaborer": {
    color: "#000000",
    textColor: "white",
    description: "Manager une équipe informatique"
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
        <Modal.Title className="modal-title">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Container fluid>
          <Row>
            <Col md={6} className="project-detail-content">
              <div className="project-detail-category">{project.category}</div>
              <div className="project-detail-description">{project.fullDescription}</div>
              
              <div className="project-detail-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {project.skills && (
                <div className="project-detail-skills">
                  <h4>Skills Demonstrated</h4>
                  <div className="skill-tags">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="skill-tag"
                        style={{
                          backgroundColor: skillCategories[skill]?.color || 'var(--card-bg)',
                          color: skillCategories[skill]?.textColor || 'var(--text-color)'
                        }}
                        onClick={() => onSkillClick(skill)}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Col>
            <Col md={6} className="project-detail-header">
              <div className="project-detail-image">
                <img src={project.imageUrl} alt={project.title} className="img-fluid" />
                <div className="project-detail-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link btn"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="demo-link btn"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
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
  const { activeSkill } = useContext(SkillFilterContext);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [currentSkillTitle, setCurrentSkillTitle] = useState(null);

  useEffect(() => {
    if (activeSkill !== null && activeSkill < Object.keys(skillCategories).length) {
      const skillTitle = Object.keys(skillCategories)[activeSkill];
      setCurrentSkillTitle(skillTitle);
      const filtered = projectsData.filter(project => 
        project.skills && project.skills.some(skill => skill === skillTitle)
      );
      setFilteredProjects(filtered);
    } else {
      setCurrentSkillTitle(null);
      setFilteredProjects(projectsData);
    }
  }, [activeSkill]);

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

  return (
    <div className="projects-container">
      <div className="projects-grid">
        <Container>
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>
              {currentSkillTitle 
                ? `Projects related to "${currentSkillTitle}" skill` 
                : "Explore my latest work in AI, Machine Learning, Web Development, and Technology"}
            </p>
          </div>
          
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card" 
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
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
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        style={{
                          backgroundColor: skillCategories[skill].color,
                          color: skillCategories[skill].textColor
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

const ProjectsWithSkillFilter = () => {
  return (
    <SkillFilterProvider>
      <Projects />
    </SkillFilterProvider>
  );
};

export default ProjectsWithSkillFilter;