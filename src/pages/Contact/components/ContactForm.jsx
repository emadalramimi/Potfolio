import React, { useState } from 'react';
import {
  Form,
  Row,
  Col,
  Spinner,
  Modal,
  Alert
} from 'react-bootstrap';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaPaperPlane, 
  FaCheckCircle
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
      errors.fullName = 'Full name is required';
    } else if (formState.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    }

    if (!formState.contactEmail.trim()) {
      errors.contactEmail = 'Email address is required';
    } else if (!emailRegex.test(formState.contactEmail)) {
      errors.contactEmail = 'Please enter a valid email address';
    }

    if (!formState.messageSubject.trim()) {
      errors.messageSubject = 'Message subject is required';
    } else if (formState.messageSubject.trim().length < 5) {
      errors.messageSubject = 'Subject must be at least 5 characters';
    }

    if (!formState.messageContent.trim()) {
      errors.messageContent = 'Message content is required';
    } else if (formState.messageContent.trim().length < 10) {
      errors.messageContent = 'Message must be at least 10 characters';
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

  const isFormValid = Object.keys(formValidation()).length === 0;

  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Connect with Me</h2>
        <p>Have a project in mind or just want to say hello? I'm all ears and excited to collaborate!</p>
        
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
              label="Your Name"
              type="text"
              name="fullName"
              value={formState.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Name"
              controlId="fullName"
              isInvalid={touched.fullName && errors.fullName}
              error={errors.fullName}
              required
            />
          </Col>
          <Col md={6}>
            <Input
              label="Your Email"
              type="email"
              name="contactEmail"
              value={formState.contactEmail}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Email"
              controlId="contactEmail"
              isInvalid={touched.contactEmail && errors.contactEmail}
              error={errors.contactEmail}
              required
            />
          </Col>
        </Row>

        <Input
          label="Subject Line"
          type="text"
          name="messageSubject"
          value={formState.messageSubject}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Subject"
          controlId="messageSubject"
          isInvalid={touched.messageSubject && errors.messageSubject}
          error={errors.messageSubject}
          required
        />

        <Form.Group className="mb-3" controlId="messageContent">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            name="messageContent"
            value={formState.messageContent}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Message"
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
          <CustomButton 
            type="submit" 
            disabled={isLoading}
            className="submit-btn"
          >
            {isLoading ? (
              <Spinner animation="border" size="sm" className="me-2" />
            ) : (
              <FaPaperPlane className="me-2" />
            )}
            {isLoading ? 'Sending...' : 'Send Message'}
          </CustomButton>
        </div>
      </Form>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        className="success-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Message Sent Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <FaCheckCircle className="success-icon" />
            <p>Thank you for reaching out! I'll get back to you soon.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton onClick={() => setShowModal(false)}>
            Close
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactForm;
