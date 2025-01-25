import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Achievements.scss';

// Import achievement images
import liysf1 from '../../assets/images/achievements/liysf1.jpg';
import liysf2 from '../../assets/images/achievements/liysf2.jpg';
import liysf3 from '../../assets/images/achievements/liysf3.jpg';
import rowad1 from '../../assets/images/achievements/rowad1.png';
import rowad2 from '../../assets/images/achievements/rowad2.png';
import biodiversityMarathon1 from '../../assets/images/achievements/Biodiversity.png';
import roya1 from '../../assets/images/achievements/Roya1.png';
import roya2 from '../../assets/images/achievements/Roya2.png';
import dahira from '../../assets/images/achievements/dahira.png';
import TRC1 from '../../assets/images/achievements/TRC1.png';

const achievements = [
  {
    title: "London International Youth Science Forum (LIYSF)",
    year: "2024",
    description: "Selected among 180+ projects to present AI Guardian Drone at Imperial College London. Joining 500+ young scientists worldwide for cutting-edge scientific collaboration.",
    location: "London, UK",
    images: [liysf1, liysf2, liysf3],
    link: "https://www.liysf.org.uk/",
    highlights: [
      "Project selected among 180+ international submissions",
      "Two-week residential event at Imperial College London",
      "AI Guardian Drone for search and rescue operations",
      "Networking with 500+ global young scientists"
    ]
  },
  {
    title: "ROWAD Hackathon - Furat Project",
    year: "2023",
    description: "Developed Furat Project combining biosolutions and AI technologies for entrepreneurial innovation at ROWAD Hackathon.",
    location: "Doha, Qatar",
    images: [rowad1, rowad2],
    link: "https://rowad.live/",
    issuer: "ROWAD Hackathon",
    highlights: [
      "Integration of biosolutions with AI technology",
      "Entrepreneurial innovation showcase",
      "International competition experience",
      "Sustainable technology development"
    ]
  },
  {
    title: "Biodiversity Marathon Award",
    year: "2021",
    description: "Won the Biodiversity Ideas Marathon with Integrated Water Filtration Units project, leading to scientific incubation at Sultan Qaboos University.",
    location: "Oman",
    images: [biodiversityMarathon1],
    issuer: "Oman Center for Genetic Resources - Scientific Research and Innovation Sector",
    highlights: [
      "First place in Biodiversity Ideas Marathon",
      "Established 'Furat team' for project development",
      "Selected for scientific development incubators",
      "Innovative water filtration solution"
    ]
  },
  {
    title: "Water Research and Innovation Award 2020",
    year: "2020",
    description: "Second place for innovative oil-water purification unit utilizing electrochemical energy in oil extraction processes.",
    location: "Oman",
    images: [TRC1],
    issuer: "The Scientific Research Council and Sultan Qaboos Higher Center for Culture and Science",
    highlights: [
      "Second place achievement",
      "Novel electrochemical purification method",
      "Oil extraction process improvement",
      "Sustainable water treatment solution"
    ]
  },
  {
    title: "Al-Dahirah Leaders Forum",
    year: "2020",
    description: "Second place in Fourth Industrial Revolution applications forum for innovative Agricultural Vital Production solution.",
    location: "Oman",
    images: [dahira],
    issuer: "Youth Sada Foundation and BP Oman",
    highlights: [
      "Second place in specialized program",
      "Focus on sustainable tech solutions",
      "Agricultural innovation development",
      "Digital transformation application"
    ]
  },
  {
    title: "Al-Roya Award for Youth Initiatives",
    year: "2019",
    description: "Second place in renewable energy category and nominated for Occidental Oman Innovation Award.",
    location: "Oman",
    images: [roya1, roya2],
    issuer: "Occidental Oman Petroleum Company and Al Roya Foundation",
    highlights: [
      "Second place in renewable energy category",
      "Nominated for Innovation Award",
      "Top 5 scientific innovative projects",
      "Sustainable energy solution"
    ]
  },
  {
    title: "Water Research and Innovation Award 2019",
    year: "2019",
    description: "First place for developing biological water purification filter using natural extracts from Omani plants.",
    location: "Oman",
    issuer: "The Scientific Research Council and Sultan Qaboos Higher Center for Culture and Science",
    highlights: [
      "First place achievement",
      "Natural water purification solution",
      "Indigenous plant extracts utilization",
      "Eco-friendly water treatment"
    ]
  },
  {
    title: "Water Research and Innovation Award 2018",
    year: "2018",
    description: "First place for innovative solution treating gray water parasites using thermoelectric energy.",
    location: "Oman",
    issuer: "The Scientific Research Council and Sultan Qaboos Higher Center for Culture and Science",
    highlights: [
      "First place achievement",
      "Thermoelectric energy application",
      "Gray water treatment innovation",
      "Sustainable water solution"
    ]
  },
  {
    title: "Namaa Ambassadors",
    year: "2018",
    description: "Second place in renewable energy projects competition for innovative sustainable solutions.",
    location: "Oman",
    issuer: "Namaa Group Company",
    highlights: [
      "Second place achievement",
      "Renewable energy innovation",
      "Sustainable project development",
      "Energy efficiency solution"
    ]
  },
  {
    title: "GLOBE Environmental Research Competition",
    year: "2017",
    description: "Third place for research on gray water parasites' environmental impact and fifth place for soil fertility study.",
    location: "Oman",
    issuer: "Ministry of Education",
    highlights: [
      "Two awards in environmental research",
      "Gray water parasites study",
      "Soil fertility analysis",
      "Environmental impact assessment"
    ]
  }
]; 

const AchievementCard = ({ achievement, index, t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (achievement.images && achievement.images.length > 1 && !isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [achievement.images, isHovered]);

  const getTranslationKey = (title) => {
    const keys = {
      "London International Youth Science Forum (LIYSF)": "liysf",
      "ROWAD Hackathon - Furat Project": "rowad",
      "Biodiversity Marathon Award": "biodiversity",
      "Tech Youth Camps": "techYouth",
      "Water Research and Innovation Award 2020": "waterAward2020",
      "Al-Dahirah Leaders Forum": "dahirah",
      "Al-Roya Award for Youth Initiatives": "alRoya",
      "Water Research and Innovation Award 2019": "waterAward2019",
      "Water Research and Innovation Award 2018": "waterAward2018",
      "Namaa Ambassadors": "namaa",
      "GLOBE Environmental Research Competition": "globe"
    };
    return keys[title] || title;
  };

  const translationKey = getTranslationKey(achievement.title);

  // Fallback to original highlights if translation fails
  const highlightsList = t(`achievements.items.${translationKey}.highlights`, { 
    defaultValue: achievement.highlights || [],
    returnObjects: true 
  });

  return (
    <motion.div
      className="achievement-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {achievement.images && achievement.images.length > 0 && (
        <div 
          className="achievement-images" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {achievement.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${t(`achievements.items.${translationKey}.title`)} - Image ${idx + 1}`}
              className={`achievement-image ${idx === currentImageIndex ? 'active' : 'exit'}`}
              style={{ zIndex: idx === currentImageIndex ? 1 : 0 }}
            />
          ))}
          {achievement.images.length > 1 && (
            <div className="image-indicators">
              {achievement.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="achievement-content">
        <h3 className="achievement-title">
          {t(`achievements.items.${translationKey}.title`)}
        </h3>
        
        <div className="achievement-meta">
          <span className="meta-item">
            <FaCalendarAlt /> {achievement.year}
          </span>
          <span className="meta-item">
            <FaMapMarkerAlt /> {achievement.location}
          </span>
        </div>

        <p className="achievement-description">
          {t(`achievements.items.${translationKey}.description`)}
        </p>

        <div className="achievement-highlights">
          {highlightsList.map((highlight, idx) => (
            <div key={idx} className="highlight-item">
              <FaAward className="highlight-icon" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            {t('achievements.learnMore')} <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <div className="achievements-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{t('achievements.title')}</h1>
        <p className="subtitle">{t('achievements.subtitle')}</p>
      </motion.div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`${achievement.title}-${achievement.year}`}
            achievement={achievement}
            index={index}
            t={t}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
