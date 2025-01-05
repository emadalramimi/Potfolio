import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BackToTop } from '../../common/components/UIElements';
import { ContactForm, Calendly } from './components';
import './Contact.scss';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('contact.title')} | Emad Al Ramimi</title>
        <meta
          name="description"
          content={t('contact.description')}
        />
        <meta property="og:title" content={t('contact.title')} />
        <meta
          property="og:description"
          content={t('contact.description')}
        />
        <meta property="twitter:title" content={t('contact.title')} />
        <meta
          property="twitter:description"
          content={t('contact.description')}
        />
      </Helmet>
      <div className="contact-page">
        <Container>
          <div className="contact-header">
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.subtitle')}</p>
          </div>
          <div className="contact-content">
            <ContactForm />
            <div className="calendly-section">
              <h2>{t('contact.schedule.title')}</h2>
              <p>{t('contact.schedule.description')}</p>
              <Calendly />
            </div>
          </div>
        </Container>
      </div>
      <BackToTop />
    </React.Fragment>
  );
};

export default Contact;
