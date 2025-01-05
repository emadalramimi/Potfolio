import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Form,
  Row,
  Col,
  Spinner,
  Modal,
  Alert,
  Button
} from 'react-bootstrap';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaPaperPlane, 
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa';
import { MdEmail, MdError } from 'react-icons/md';

import { CustomButton } from '../../../common/components/UIElements';
import useHttpHook from '../../../common/hooks/http-hook';
import './ContactForm.scss';

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
  const { t, i18n } = useTranslation();
  const [formState, setFormState] = useState({
    fullName: '',
    contactEmail: '',
    messageSubject: '',
    messageContent: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { sendRequest, isLoading, error: httpError } = useHttpHook();

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

    if (!formState.contactEmail.trim()) {
      errors.contactEmail = t('contact.form.emailError');
    } else if (!emailRegex.test(formState.contactEmail)) {
      errors.contactEmail = t('contact.form.emailInvalidError');
    }

    if (!formState.messageSubject.trim()) {
      errors.messageSubject = t('contact.form.subjectError');
    } else if (formState.messageSubject.trim().length < 5) {
      errors.messageSubject = t('contact.form.subjectLengthError');
    }

    if (!formState.messageContent.trim()) {
      errors.messageContent = t('contact.form.messageError');
    } else if (formState.messageContent.trim().length < 10) {
      errors.messageContent = t('contact.form.messageLengthError');
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

    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/contact`,
        'POST',
        {
          fullName: formState.fullName,
          contactEmail: formState.contactEmail,
          messageSubject: formState.messageSubject,
          messageContent: formState.messageContent
        }
      );

      if (response.success) {
        setShowModal(true);
        setFormState({
          fullName: '',
          contactEmail: '',
          messageSubject: '',
          messageContent: ''
        });
        setErrors({});
        setTouched({});
      }
    } catch (err) {
      console.error('Error sending message:', err);
    }
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
        {httpError && (
          <Alert variant="danger" className="mb-3">
            <MdError className="me-2" /> {httpError}
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
              controlId="fullName"
              isInvalid={touched.fullName && errors.fullName}
              error={errors.fullName}
              required
            />
          </Col>
          <Col md={6}>
            <Input
              label={t('contact.form.email')}
              type="email"
              name="contactEmail"
              value={formState.contactEmail}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.emailPlaceholder')}
              controlId="contactEmail"
              isInvalid={touched.contactEmail && errors.contactEmail}
              error={errors.contactEmail}
              required
            />
          </Col>
        </Row>

        <Input
          label={t('contact.form.subject')}
          type="text"
          name="messageSubject"
          value={formState.messageSubject}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={t('contact.form.subjectPlaceholder')}
          controlId="messageSubject"
          isInvalid={touched.messageSubject && errors.messageSubject}
          error={errors.messageSubject}
          required
        />

        <Form.Group className="mb-3" controlId="messageContent">
          <Form.Label>{t('contact.form.message')}</Form.Label>
          <Form.Control
            as="textarea"
            name="messageContent"
            value={formState.messageContent}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={t('contact.form.messagePlaceholder')}
            style={{ height: '150px' }}
            isInvalid={touched.messageContent && errors.messageContent}
            required
          />
          {touched.messageContent && errors.messageContent && (
            <Form.Control.Feedback type="invalid">
              <MdError className="me-2" /> {errors.messageContent}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <div className="form-actions">
          <Button 
            type="submit" 
            className={`submit-btn ${isRtl ? 'rtl-submit' : ''}`}
            disabled={isLoading}
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
          </Button>
        </div>
      </Form>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        className="success-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{t('contact.form.success')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <FaCheckCircle className="success-icon" />
            <p>{t('contact.form.successMessage')}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton onClick={() => setShowModal(false)}>
            {t('contact.form.close')}
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactForm;
