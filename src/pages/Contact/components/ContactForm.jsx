import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import {
  Form,
  Row,
  Col,
  Alert,
  Modal,
  Button
} from 'react-bootstrap';
import { FaSpinner, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { MdError, MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { CustomButton } from '../../../common/components/UIElements';
import './ContactForm.scss';

// Input component definition
const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required,
  controlId,
  isInvalid,
  ...props
}) => {
  return (
    <Form.Group className="input-wrapper" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <div className="input-container">
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          isInvalid={isInvalid}
          required={required}
          aria-describedby={`${controlId}-error`}
          {...props}
        />
        {isInvalid && (
          <Form.Control.Feedback type="invalid" id={`${controlId}-error`}>
            <MdError className="me-2" /> {error}
          </Form.Control.Feedback>
        )}
      </div>
    </Form.Group>
  );
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ensure EmailJS is initialized only once
  useEffect(() => {
    emailjs.init({
      publicKey: '0eL5KayW2mP3HRvOD'
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
    }));
  };

  const formValidation = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formState.fullName.trim()) {
      errors.fullName = t('contact.form.nameError');
    } else if (formState.fullName.trim().length < 2) {
      errors.fullName = t('contact.form.nameLengthError');
    }

    if (!formState.email.trim()) {
      errors.email = t('contact.form.emailError');
    } else if (!emailRegex.test(formState.email)) {
      errors.email = t('contact.form.emailInvalidError');
    }

    if (!formState.subject.trim()) {
      errors.subject = t('contact.form.subjectError');
    } else if (formState.subject.trim().length < 5) {
      errors.subject = t('contact.form.subjectLengthError');
    }

    if (!formState.message.trim()) {
      errors.message = t('contact.form.messageError');
    } else if (formState.message.trim().length < 10) {
      errors.message = t('contact.form.messageLengthError');
    }

    return errors;
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const formErrors = formValidation();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTouched(
        Object.keys(formState).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const templateParams = {
        from_name: formState.fullName,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      };

      const response = await emailjs.send(
        'service_kad7ypf',
        'template_mhuvhxm',
        templateParams
      );

      console.log('Email sent successfully:', response);
      
      setShowModal(true);
      setFormState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error('Error sending email:', err);
      setError(t('contact.form.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const isRtl = i18n.dir() === 'rtl';

  return (
    <div className="contact-form-container" dir={i18n.dir()}>
      <div className="contact-info">
        <h2>{t('contact.connectWithMe')}</h2>
        <p>{t('contact.haveAProject')}</p>
        
        <div className="contact-methods">
          <a href="mailto:alramimi10@gmail.com" className="contact-method">
            <MdEmail className="icon" />
            <span>alramimi10@gmail.com</span>
          </a>
          <div className="social-links">
            <a href="https://github.com/emadalramimi" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/emad-alramimi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/emadalramimi" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>
      </div>

      <Form onSubmit={formSubmitHandler} className="contact-form" noValidate>
        {error && (
          <Alert variant="danger" className="mb-3">
            <MdError className="me-2" /> {error}
          </Alert>
        )}

        <Row>
          <Col md={6}>
            <Input
              label={t('contact.form.name')}
              type="text"
              name="fullName"
              value={formState.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.namePlaceholder')}
              error={errors.fullName}
              isInvalid={touched.fullName && errors.fullName}
              required
              controlId="fullName"
            />
          </Col>
          <Col md={6}>
            <Input
              label={t('contact.form.email')}
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.emailPlaceholder')}
              error={errors.email}
              isInvalid={touched.email && errors.email}
              required
              controlId="email"
            />
          </Col>
        </Row>
        <Input
          label={t('contact.form.subject')}
          type="text"
          name="subject"
          value={formState.subject}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={t('contact.form.subjectPlaceholder')}
          error={errors.subject}
          isInvalid={touched.subject && errors.subject}
          required
          controlId="subject"
        />
        <Form.Group className="input-wrapper" controlId="message">
          <Form.Label>{t('contact.form.message')}</Form.Label>
          <div className="input-container">
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.messagePlaceholder')}
              isInvalid={touched.message && errors.message}
              required
            />
            {touched.message && errors.message && (
              <Form.Control.Feedback type="invalid">
                <MdError className="me-2" /> {errors.message}
              </Form.Control.Feedback>
            )}
          </div>
        </Form.Group>

        {error && (
          <Alert variant="danger" className="mt-3">
            <MdError className="me-2" /> {error}
          </Alert>
        )}

        <div className="d-grid">
          <CustomButton
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? (
              <span className="button-content">
                <FaSpinner className="spinner-icon" />
                {t('contact.form.sending')}
              </span>
            ) : (
              <span className="button-content">
                {isRtl ? (
                  <>
                    {t('contact.form.send')}
                    <FaPaperPlane className="send-icon rtl-icon" />
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="send-icon" />
                    {t('contact.form.send')}
                  </>
                )}
              </span>
            )}
          </CustomButton>
        </div>
      </Form>

      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered 
        className="success-modal dark-mode"
        contentClassName="dark-modal-content"
      >
        <Modal.Header closeButton closeVariant="white" className="dark-modal-header">
          <Modal.Title className="dark-modal-title">
            <FaCheckCircle className="text-success me-2" />
            {t('contact.form.successTitle')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <FaCheckCircle className="success-icon" />
            <p>{t('contact.form.successMessage')}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton onClick={handleCloseModal}>
            {t('contact.form.close')}
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactForm;
