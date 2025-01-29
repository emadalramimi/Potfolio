import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCode, 
  FaAward,
  FaCheckCircle,
  FaTrophy, 
  FaProjectDiagram, 
  FaExternalLinkAlt,
  FaPaperPlane,
  FaEye
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

// Import logos
import starDronesLogo from '../../../assets/images/companies/stardrones.png';
import rentWayLogo from '../../../assets/images/companies/rentway.png';
import matterzLogo from '../../../assets/images/companies/matterz.png';
import toulouseLogo from '../../../assets/images/education/toulouse.png';
import lorraineLogo from '../../../assets/images/education/lorraine.png';

// Enhanced Dark Theme
const theme = {
  colors: {
    primary: '#6366f1',     // Vibrant indigo
    secondary: '#8b5cf6',   // Deep purple
    background: '#121212',  // Very dark background
    text: '#e0e0e0',        // Light grey text
    textLight: '#9ca3af',   // Muted grey
    heading: '#ffffff',     // Pure white for headings
    cardBg: '#1E1E1E',      // Slightly lighter than background
    cardShadow: 'rgba(255, 255, 255, 0.05)',  // Subtle light shadow
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    border: '#2C2C2C',      // Dark border color
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '2rem'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px'
  }
};

const SectionWrapper = styled(motion.section)`
  background: ${theme.colors.background};
  padding: ${theme.spacing.xl} 0;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: ${theme.typography.fontSize.xlarge};
  font-weight: 800;
  color: ${theme.colors.heading};
  margin-bottom: ${theme.spacing.lg};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${theme.colors.gradient};
    border-radius: 4px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    background: ${theme.colors.primary}20;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  width: 50%;
  padding: ${theme.spacing.md};
  left: ${props => props.position === 'left' ? '0' : '50%'};

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 80px;
  }
`;

const TimelineCard = styled(motion.div)`
  background: ${theme.colors.cardBg};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: 0 15px 30px ${theme.colors.cardShadow};
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${theme.colors.gradient};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary}30;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
  gap: ${theme.spacing.md};
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: ${theme.borderRadius.md};
  object-fit: contain;
  background: white;
  padding: 10px;
  box-shadow: 0 4px 15px ${theme.colors.cardShadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const Title = styled.h3`
  font-size: ${theme.typography.fontSize.large};
  font-weight: 700;
  color: ${theme.colors.heading};
  margin: 0;
`;

const Organization = styled.h4`
  font-size: ${theme.typography.fontSize.medium};
  color: ${theme.colors.primary};
  margin: 5px 0;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.textLight};
  font-size: ${theme.typography.fontSize.small};
  margin: ${theme.spacing.sm} 0;

  svg {
    color: ${theme.colors.primary};
  }
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSize.medium};
  line-height: 1.6;
  color: ${theme.colors.text};
  margin-top: ${theme.spacing.sm};
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  margin-right: ${theme.spacing.xs};
  border-radius: 20px;
  font-size: ${theme.typography.fontSize.small};
  background: ${theme.colors.primary}20;
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const StatisticsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const statsData = [
    {
      icon: FaProjectDiagram,
      number: 30,
      suffix: "+",
      prefix: "",
      label: t('home.statistics.projects.label'),
      description: t('home.statistics.projects.description'),
      link: "/projects",
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      background: "rgba(99, 102, 241, 0.1)",
      shadowColor: "rgba(99, 102, 241, 0.3)"
    },
    {
      icon: FaTrophy,
      number: 15,
      suffix: "+",
      prefix: "",
      label: t('home.statistics.achievements.label'),
      description: t('home.statistics.achievements.description'),
      link: "/achievements",
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      background: "rgba(16, 185, 129, 0.1)",
      shadowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      icon: FaBriefcase,
      number: 3,
      suffix: "+",
      prefix: "",
      label: t('home.statistics.experience.label'),
      description: t('home.statistics.experience.description'),
      link: "/skills",
      gradient: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
      background: "rgba(244, 63, 94, 0.1)",
      shadowColor: "rgba(244, 63, 94, 0.3)"
    }
  ];

  const StatCard = styled(motion.div)`
    background: ${theme.colors.cardBg};
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.lg};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid ${theme.colors.border};
    box-shadow: 0 15px 30px ${props => props.shadowColor};
    background-color: ${props => props.background};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${props => props.gradient};
    }

    &:hover {
      transform: translateY(-15px);
      box-shadow: 0 30px 60px ${props => props.shadowColor};
    }
  `;

  const StatIcon = styled(motion.div)`
    font-size: 3.5rem;
    margin-bottom: ${theme.spacing.md};
    background: ${props => props.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StatNumber = styled(motion.div)`
    font-size: 4rem;
    font-weight: 900;
    background: ${props => props.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: ${theme.spacing.sm};
    line-height: 1;
    letter-spacing: -2px;
  `;

  const StatLabel = styled.div`
    font-size: ${theme.typography.fontSize.medium};
    font-weight: 600;
    color: ${theme.colors.heading};
    margin-bottom: ${theme.spacing.xs};
    text-transform: uppercase;
    letter-spacing: 1px;
  `;

  const StatDescription = styled.p`
    font-size: ${theme.typography.fontSize.small};
    color: ${theme.colors.textLight};
    margin-top: ${theme.spacing.sm};
    line-height: 1.6;
    text-align: center;
  `;

  const StatisticsWrapper = styled(motion.section)`
    background: ${theme.colors.background};
    padding: ${theme.spacing.xl} 0;
    overflow: hidden;
  `;

  const StatGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.lg};

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 150,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <StatisticsWrapper 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <div className="statistics-section">
          <motion.div 
            className="tech-stack-header text-center w-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="header-content d-inline-block">
              <h2>{t('home.statistics.title')}</h2>
            </div>
          </motion.div>
          <StatGridContainer>
            {statsData.map((stat, index) => (
              <StatCard 
                key={index}
                gradient={stat.gradient}
                background={stat.background}
                shadowColor={stat.shadowColor}
                variants={itemVariants}
                whileHover="hover"
                onClick={() => navigate(stat.link)}
              >
                <StatIcon 
                  gradient={stat.gradient}
                  initial={{ rotate: -10 }}
                  whileHover={{ 
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <stat.icon />
                </StatIcon>
                <StatNumber gradient={stat.gradient}>
                  <CountUp 
                    start={0}
                    end={stat.number} 
                    duration={2.5} 
                    suffix={stat.suffix || ''} 
                    prefix={stat.prefix || ''}
                  />
                </StatNumber>
                <StatLabel>{stat.label}</StatLabel>
                <StatDescription>{stat.description}</StatDescription>
                <motion.div
                  style={{ 
                    marginTop: theme.spacing.sm, 
                    display: 'flex', 
                    alignItems: 'center',
                    color: theme.colors.primary
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaExternalLinkAlt style={{ marginRight: '8px' }} />
                  <span>{t('home.statistics.seeMore')}</span>
                </motion.div>
              </StatCard>
            ))}
          </StatGridContainer>
        </div>
      </Container>
    </StatisticsWrapper>
  );
};

const PersonalIntroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const PersonalSectionWrapper = styled(motion.section)`
    background: ${theme.colors.cardBg};
    padding: ${theme.spacing.xl} 0;
    position: relative;
    overflow: hidden;
  `;

  const ContentContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  `;

  const PersonalTitle = styled.h2`
    font-size: ${theme.typography.fontSize.xlarge};
    color: ${theme.colors.heading};
    margin-bottom: ${theme.spacing.md};
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  const PersonalDescription = styled.p`
    font-size: ${theme.typography.fontSize.medium};
    color: ${theme.colors.text};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.lg};
  `;

  const ContactButton = styled(motion.button)`
    background: ${theme.colors.gradient};
    color: white;
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.lg};
    font-size: ${theme.typography.fontSize.medium};
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.sm};
    margin: 0 auto;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
  `;

  const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      ${theme.colors.primary}10, 
      ${theme.colors.secondary}10
    );
    opacity: 0.5;
    z-index: 1;
  `;

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <PersonalSectionWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <BackgroundOverlay />
      <Container>
        <ContentContainer>
          <PersonalTitle>{t('home.personalIntro.title')}</PersonalTitle>
          <PersonalDescription>
            {t('home.personalIntro.description')}
          </PersonalDescription>
          <ContactButton
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => navigate('/contact')}
          >
            <FaPaperPlane /> {t('home.personalIntro.contactButton')}
          </ContactButton>
        </ContentContainer>
      </Container>
    </PersonalSectionWrapper>
  );
};

const Content = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('experience');

  const experienceData = [
    {
      title: t('home.experience.details.starDrones.title'),
      organization: t('home.experience.details.starDrones.organization'),
      duration: t('home.experience.details.starDrones.duration'),
      location: t('home.experience.details.starDrones.location'),
      description: t('home.experience.details.starDrones.description'),
      tags: t('home.experience.details.starDrones.tags'),
      logo: starDronesLogo,
      position: 'right'
    },
    {
      title: t('home.experience.details.rentWay.title'),
      organization: t('home.experience.details.rentWay.organization'),
      duration: t('home.experience.details.rentWay.duration'),
      location: t('home.experience.details.rentWay.location'),
      description: t('home.experience.details.rentWay.description'),
      tags: t('home.experience.details.rentWay.tags'),
      logo: rentWayLogo,
      position: 'left'
    },
    {
      title: t('home.experience.details.matterz.title'),
      organization: t('home.experience.details.matterz.organization'),
      duration: t('home.experience.details.matterz.duration'),
      location: t('home.experience.details.matterz.location'),
      description: t('home.experience.details.matterz.description'),
      tags: t('home.experience.details.matterz.tags'),
      logo: matterzLogo,
      position: 'right'
    }
  ];

  const educationData = [
    {
      title: t('home.education.details.toulouse.title'),
      organization: t('home.education.details.toulouse.organization'),
      duration: t('home.education.details.toulouse.duration'),
      location: t('home.education.details.toulouse.location'),
      description: t('home.education.details.toulouse.description'),
      tags: t('home.education.details.toulouse.tags'),
      logo: toulouseLogo,
      position: 'right'
    },
    {
      title: t('home.education.details.lorraine.title'),
      organization: t('home.education.details.lorraine.organization'),
      duration: t('home.education.details.lorraine.duration'),
      location: t('home.education.details.lorraine.location'),
      description: t('home.education.details.lorraine.description'),
      tags: t('home.education.details.lorraine.tags'),
      logo: lorraineLogo,
      position: 'left'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatisticsSection />
        <SectionWrapper>
          <Container>
            <motion.div 
              className="tech-stack-header text-center w-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="header-content d-inline-block">
                <h2>
                  {activeSection === 'experience' ? <FaBriefcase style={{ marginRight: '10px' }} /> : <FaGraduationCap style={{ marginRight: '10px' }} />}
                  {activeSection === 'experience' ? t('home.experience.title') : t('home.education.title')}
                </h2>
              </div>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: theme.spacing.lg }}>
              <Badge 
                onClick={() => setActiveSection('experience')}
                style={{ 
                  background: activeSection === 'experience' ? theme.colors.gradient : theme.colors.primary + '20',
                  color: activeSection === 'experience' ? 'white' : theme.colors.primary,
                  cursor: 'pointer'
                }}
              >
                <FaBriefcase style={{ marginRight: '5px' }} />
                {t('home.experience.badge')}
              </Badge>
              <Badge 
                onClick={() => setActiveSection('education')}
                style={{ 
                  background: activeSection === 'education' ? theme.colors.gradient : theme.colors.primary + '20',
                  color: activeSection === 'education' ? 'white' : theme.colors.primary,
                  cursor: 'pointer'
                }}
              >
                <FaGraduationCap style={{ marginRight: '5px' }} />
                {t('home.education.badge')}
              </Badge>
            </div>

            <TimelineContainer>
              <AnimatePresence>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={activeSection}
                >
                  {(activeSection === 'experience' ? experienceData : educationData).map((item, index) => (
                    <TimelineItem 
                      key={index} 
                      position={item.position}
                      variants={itemVariants}
                    >
                      <TimelineCard
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CardHeader>
                          {item.logo && (
                            <Logo src={item.logo} alt={item.organization} />
                          )}
                          <div>
                            <Title>{item.title}</Title>
                            <Organization>{item.organization}</Organization>
                          </div>
                        </CardHeader>
                        <MetaInfo>
                          <FaClock /> {item.duration}
                          {item.location && (
                            <>
                              <FaMapMarkerAlt /> {item.location}
                            </>
                          )}
                        </MetaInfo>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
                          {Array.isArray(item.tags) ? item.tags.map((tag, idx) => (
                            <Badge key={idx}>
                              <FaCheckCircle style={{ marginRight: '5px' }} />
                              {tag}
                            </Badge>
                          )) : null}
                        </div>
                        <Description>{item.description}</Description>
                      </TimelineCard>
                    </TimelineItem>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TimelineContainer>
          </Container>
        </SectionWrapper>
        <PersonalIntroSection />
      </>
    </ThemeProvider>
  );
};

export default Content;
