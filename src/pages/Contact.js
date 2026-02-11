import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    consultancyName: '',
    contact: '',
    email: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.consultancyName.trim()) {
      newErrors.consultancyName = 'Consultancy name is required';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.contact)) {
      newErrors.contact = 'Please enter a valid contact number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Log form data (in production, this would be sent to a backend)
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          consultancyName: '',
          contact: '',
          email: '',
          additionalInfo: ''
        });
      }, 5000);
    }
  };

  return (
    <div className="page-container">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-description">
            Get in touch with us to learn more about our services
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                Whether you're a job seeker looking for your next opportunity or an employer 
                seeking top talent, we're here to help. Fill out the form or reach out to us 
                directly.
              </p>
              
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>Hr@bwtcs.com</p>
              </div>
              
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="info-item">
                <h3>📍 Location</h3>
                <p>Canada</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Consultancy Information</h2>
                  
                  <div className="form-group">
                    <label htmlFor="consultancyName">
                      Consultancy Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="consultancyName"
                      name="consultancyName"
                      value={formData.consultancyName}
                      onChange={handleChange}
                      className={errors.consultancyName ? 'error' : ''}
                      placeholder="Enter your consultancy name"
                    />
                    {errors.consultancyName && (
                      <span className="error-message">{errors.consultancyName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact">
                      Contact Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className={errors.contact ? 'error' : ''}
                      placeholder="e.g., +1 (555) 123-4567"
                    />
                    {errors.contact && (
                      <span className="error-message">{errors.contact}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="additionalInfo">Additional Information (Optional)</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your consultancy or specific requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Submit Information
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your information has been submitted successfully. We'll be in touch soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
