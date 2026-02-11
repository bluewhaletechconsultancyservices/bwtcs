import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    { title: 'Deep-Tech AI Platforms', description: 'Modernize legacy systems with scalable AI and ML platforms that automate complex workflows and surface actionable insights.', features: ['AI Model Integration', 'Legacy Modernization', 'Performance Tuning'] },
    { title: 'Recruitment & Hiring Suite', description: 'Cloud-native hiring tools that simplify sourcing, assessment and onboarding for faster placements.', features: ['Applicant Tracking', 'Assessment Engine', 'Onboarding Flows'] },
    { title: 'Geospatial & Mapping Solutions', description: 'Visualize and analyze spatial data with robust GIS tools for decision support and location intelligence.', features: ['Spatial Analysis', 'Map Rendering', 'Data Integration'] },
    { title: 'Business Management Platforms', description: 'All-in-one management toolkits that help businesses run operations, finances and workflows more efficiently.', features: ['Process Automation', 'Reporting', 'Integrations'] },
    { title: 'AI/ML for Financial Services', description: 'Specialized AI and ML capabilities tailored to banking and financial services for fraud detection and risk analytics.', features: ['Risk Models', 'Fraud Detection', 'Predictive Analytics'] },
    { title: 'Conversational AI', description: 'Design and deploy intelligent virtual assistants to improve customer engagement and service automation.', features: ['Chatbots', 'NLP', 'Omnichannel'] },
    { title: 'Cloud Telephony & Contact Centres', description: 'Secure, cloud-based communication platforms that lower operating costs and improve CX.', features: ['Cloud PBX', 'IVR', 'Call Routing'] },
    { title: 'Secrets & Access Management', description: 'Centralized secrets management solutions that secure credentials and enforce least-privilege access.', features: ['Secrets Vault', 'Access Policies', 'Auditing'] },
    { title: 'No-Code eCommerce Platforms', description: 'Turnkey no-code storefronts and commerce tools for small and medium businesses to launch quickly.', features: ['Store Builder', 'Payments', 'Analytics'] },
    { title: 'Embedded Banking & Payments', description: 'Payments and banking rails to enable secure local and cross-border transactions inside apps.', features: ['Wallets', 'Payments API', 'Compliance'] }
  ];

  return (
    <div className="page-container">
      <section className="solutions-hero">
        <div className="container">
          <h1>Our Solutions</h1>
          <p className="hero-description">
            Innovative platforms and technologies to transform your talent acquisition
          </p>
        </div>
      </section>

      <section className="solutions-content">
        <div className="container">
          <div className="solutions-intro">
            <h2>Transform Your Recruitment Process</h2>
            <p>
              We offer cutting-edge solutions designed to streamline talent acquisition, enhance candidate 
              experience, and optimize hiring outcomes. Our platforms leverage the latest technologies 
              to deliver exceptional results.
            </p>
          </div>

          <div className="solutions-list">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-item">
                <div className="solution-content">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul className="solution-features">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="solutions-cta">
            <h2>Ready to Transform Your Talent Acquisition?</h2>
            <p>Connect with us to learn how our solutions can benefit your organization</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
