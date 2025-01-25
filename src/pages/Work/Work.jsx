import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Projects from './components/Projects';
import './Work.scss';

const Work = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  return (
    <div className="work-container">
      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{t('projects.title')}</h1>
        <p className="subtitle">{t('projects.subtitle')}</p>
      </motion.div>

      <div className="work-filter">
        {['All', 'Web', 'Mobile', 'AI/ML', 'Other'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`work-filter-item ${activeFilter === item ? 'item-active' : ''}`}
          >
            {t(`projects.filters.${item.toLowerCase().replace('/', '')}`)}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work-portfolio"
      >
        <Projects activeFilter={activeFilter} />
      </motion.div>
    </div>
  );
};

export default Work;
