import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Achievements.scss';

// Explicit imports with console logging
import image1Path from '../../assets/images/london/1.jpg';
import image2Path from '../../assets/images/london/2.jpg';
import image3Path from '../../assets/images/london/3.jpg';

const Achievements = () => {
  // Log image paths to console for debugging
  console.log('Image Paths:', {
    image1: image1Path,
    image2: image2Path,
    image3: image3Path
  });

  const achievements = [
    {
      title: "London International Youth Science Forum (LIYSF)",
      year: "2024",
      description: "Selected among 180+ projects to present AI Guardian Drone at Imperial College London. Joining 500+ young scientists worldwide for cutting-edge scientific collaboration.",
      location: "London, UK",
      images: [image1Path, image2Path, image3Path],
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
      issuer: "Oman Center for Genetic Resources - Scientific Research and Innovation Sector",
      highlights: [
        "First place in Biodiversity Ideas Marathon",
        "Established 'Furat team' for project development",
        "Selected for scientific development incubators",
        "Innovative water filtration solution"
      ]
    },
    {
      title: "Tech Youth Camps",
      year: "2021",
      description: "Intensive technical training program focused on emerging technologies including AI, IoT, Robotics, and 3D printing.",
      location: "Oman",
      issuer: "National Youth Committee - Ministry of Culture, Sports and Youth",
      highlights: [
        "Hands-on experience with AI and IoT",
        "Robotics and 3D printing practical training",
        "Industry-focused problem solving",
        "Technical implementation skills development"
      ]
    },
    {
      title: "Water Research and Innovation Award 2020",
      year: "2020",
      description: "Second place for innovative oil-water purification unit utilizing electrochemical energy in oil extraction processes.",
      location: "Oman",
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

  return (
    <>
      <Helmet>
        <title>Achievements | Emad Al Ramimi</title>
        <meta name="description" content="Explore my academic and professional achievements, including participation in international science forums and research projects." />
      </Helmet>

      <div className="achievements-page">
        <Container>
          <h1 className="page-title gradient-text">Achievements</h1>
          <p className="page-subtitle">Milestones in my academic and professional journey</p>

          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <Row>
                  <Col lg={6} className="achievement-content">
                    <div className="achievement-header">
                      <h2>{achievement.title}</h2>
                      <div className="achievement-meta">
                        <span className="year">{achievement.year}</span>
                        <span className="location">{achievement.location}</span>
                      </div>
                    </div>
                    <p className="description">{achievement.description}</p>
                    {achievement.issuer && (
                      <p className="issuer">Issued by: {achievement.issuer}</p>
                    )}
                    {achievement.link && (
                      <p className="link">
                        <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                          Learn more
                        </a>
                      </p>
                    )}
                    <div className="highlights">
                      <h3>Highlights</h3>
                      <ul>
                        {achievement.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6} className="achievement-gallery">
                    {achievement.images && (
                      <div className="image-grid">
                        {achievement.images.map((imageSrc, idx) => (
                          <div key={idx} className="image-container">
                            <img 
                              src={imageSrc} 
                              alt={`${achievement.title} - Image ${idx + 1}`} 
                              onError={(e) => {
                                console.error('Image load error:', e);
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Achievements;