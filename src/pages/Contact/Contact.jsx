import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BackToTop } from '../../common/components/UIElements';
import { ContactForm, Calendly } from './components';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | Emad Al Ramimi</title>
        <meta name="description" content={t('contact.pageDescription')} />
        <meta property="og:title" content={t('contact.pageTitle')} />
        <meta property="og:description" content={t('contact.pageDescription')} />
        <meta property="twitter:title" content={t('contact.pageTitle')} />
        <meta property="twitter:description" content={t('contact.pageDescription')} />
      </Helmet>
      <motion.div
        className="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>        
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="contact-content">
              <ContactForm />
              <div className="calendly-section">
                <h2>{t('contact.schedule.title')}</h2>
                <p>{t('contact.schedule.description')}</p>
                <Calendly />
              </div>
            </div>
          </motion.div>
        </Container>
      </motion.div>
      <BackToTop />
    </React.Fragment>
  );
};

export default Contact;
