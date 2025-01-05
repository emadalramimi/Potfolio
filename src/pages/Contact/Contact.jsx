import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import { BackToTop } from '../../common/components/UIElements';
import { ContactForm, Calendly } from './components';
import './Contact.scss';

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | Emad Al Ramimi</title>
        <meta
          name="description"
          content="Get in touch with Emad Al Ramimi. Let's discuss AI, Machine Learning, or your next project."
        />
        <meta property="og:title" content="Contact Emad Al Ramimi" />
        <meta
          property="og:description"
          content="Schedule a meeting or send a message to discuss AI, Machine Learning, or your next project."
        />
        <meta property="twitter:title" content="Contact Emad Al Ramimi" />
        <meta
          property="twitter:description"
          content="Schedule a meeting or send a message to discuss AI, Machine Learning, or your next project."
        />
      </Helmet>
      <div className="contact-page">
        <Container>
          <div className="contact-header">
            <h1>Let's Connect</h1>
            <p>Have a project in mind? Let's bring your ideas to life!</p>
          </div>
          <div className="contact-content">
            <ContactForm />
            <div className="calendly-section">
              <h2>Schedule a Meeting</h2>
              <p>Choose a convenient time for us to discuss your project</p>
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
