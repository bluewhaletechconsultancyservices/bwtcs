import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Application Management Services (AMS)', description: 'End-to-end support for enterprise applications, ensuring continuous performance, maintenance and enhancements.', icon: '🛠️' },
    { title: 'ERP & CRM', description: 'Implementation, customization and support for ERP and CRM platforms to streamline business processes.', icon: '🔗' },
    { title: 'SAP Services', description: 'SAP consulting, migrations and managed services to help businesses modernize their core systems.', icon: '📦' },
    { title: 'Oracle Solutions', description: 'Oracle application and database services that improve stability and scalability for enterprise workloads.', icon: '🗄️' },
    { title: 'Salesforce Services', description: 'CRM strategy, implementation and integrations that drive customer-facing transformations.', icon: '☁️' },
    { title: 'Murex & Treasury', description: 'Specialized services for capital markets platforms and treasury operations.', icon: '💹' },
    { title: 'Cloud Services', description: 'Cloud strategy, migration and managed cloud operations to accelerate agility and reduce costs.', icon: '☁️' },
    { title: 'Professional & Managed Services', description: 'Managed IT services and professional consulting to ensure operational resilience.', icon: '🧩' },
    { title: 'Mobility & Apps', description: 'Design and build mobile-first experiences and enterprise-grade applications.', icon: '📱' },
    { title: 'Emerging Tech & R&D', description: 'Proofs-of-concept and product engineering using AI, IoT, and blockchain.', icon: '🤖' },
    { title: 'Data & Analytics', description: 'Data engineering, analytics and visualization to turn information into decisions.', icon: '📈' },
    { title: 'Infrastructure & IMS', description: 'Infrastructure management, operations and automation for reliable IT landscapes.', icon: '⚙️' },
    { title: 'Geospatial Services', description: 'Mapping and GIS solutions for spatial analysis and visualization.', icon: '🗺️' },
    { title: 'SRE & DevOps', description: 'Site reliability and DevOps practices to speed delivery while improving stability.', icon: '🚦' },
    { title: 'Consulting & Transformation', description: 'Strategy and transformation programs that align technology with business outcomes.', icon: '📘' },
    { title: 'Business Process Outsourcing (BPO)', description: 'Outsourced operations to improve cost-efficiency and service quality.', icon: '🏢' },
    { title: 'Testing & QA', description: 'End-to-end testing services that ensure software quality and compliance.', icon: '🔍' },
    { title: 'Training & Enablement', description: 'Skill-building programs to upskill teams and accelerate adoption.', icon: '🎓' }
  ];

  return (
    <div className="page-container">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="hero-description">
            Comprehensive recruitment and talent management solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-intro">
            <div className="section-header">
              <span className="section-tag">WHAT WE DO</span>
              <h2 className="section-title">Our Services</h2>
            </div>
            <p>
              We provide a full range of recruitment and career services designed to meet the diverse 
              needs of both job seekers and employers. Our comprehensive approach ensures successful 
              placements and long-term career satisfaction.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="process-section">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>We start by understanding your needs, goals, and requirements through detailed consultation.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Matching</h3>
                <p>Our team identifies and evaluates the best-fit opportunities using advanced matching algorithms.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Preparation</h3>
                <p>We help you prepare with resume optimization, interview coaching, and skill development.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Placement</h3>
                <p>We facilitate the connection and provide ongoing support throughout the placement process.</p>
              </div>
            </div>
          </div>

          <div className="services-cta">
            <h2>Ready to Transform Your Talent Acquisition?</h2>
            <p>Connect with us to learn how our services can benefit your organization</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
