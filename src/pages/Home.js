import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const stats = [
    { number: '25+', label: 'Countries Served', icon: '🌍' },
    { number: '500+', label: 'Clients Worldwide', icon: '🤝' },
    { number: '5000+', label: 'Successful Placements', icon: '✅' },
    { number: '15+', label: 'Years Experience', icon: '⭐' }
  ];

  const services = [
    {
      title: 'Professional & Managed Services',
      description: 'Human resources fuel any organization; finding the right person for the right job requires time, effort, and precision.',
      icon: '👥'
    },
    {
      title: 'IT Talent Acquisition',
      description: 'Connect talents with opportunities in this digital era. Leverage our comprehensive tech recruitment services.',
      icon: '💻'
    },
    {
      title: 'Executive Search',
      description: 'Specialized recruitment for senior-level positions and C-suite executives across industries.',
      icon: '🎯'
    },
    {
      title: 'Career Development',
      description: 'We don\'t just fill positions—we help build careers and long-term success through comprehensive support.',
      icon: '📈'
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions for short-term projects, seasonal needs, and specialized requirements.',
      icon: '⏱️'
    },
    {
      title: 'Training & Upskilling',
      description: 'Enhance your team\'s capabilities with our broad range of skills-based training and development programs.',
      icon: '🎓'
    }
  ];

  const solutions = [
    {
      title: 'AI-Powered Talent Matching',
      description: 'Leverage artificial intelligence to match candidates with opportunities more accurately and efficiently.',
      link: '/solutions'
    },
    {
      title: 'Recruitment Analytics Platform',
      description: 'Transform your hiring process with data-driven insights and analytics to optimize recruitment outcomes.',
      link: '/solutions'
    },
    {
      title: 'Digital Career Portal',
      description: 'A comprehensive platform connecting job seekers with employers through an intuitive, user-friendly interface.',
      link: '/solutions'
    }
  ];

  return (
    <div className="page-container">
      {/* Main Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Career with Blue Whale Tech</h1>
          <p className="hero-subtitle">
            Your Gateway to Global Tech Opportunities. Connect talents with opportunities in this digital era.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Explore Opportunities</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-gradient"></div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHO WE ARE</span>
            <h2 className="section-title">About Blue Whale Tech Consultancy Services</h2>
          </div>
          <div className="about-content-grid">
            <div className="about-text">
              <p>
                With a vision to transform talent acquisition, Blue Whale Tech Consultancy Services is a 
                fast-growing global tech recruitment and consultancy company.
              </p>
              <p>
                Our diverse portfolio and partnerships provide a unique selection of solutions such as 
                AI-powered talent matching, digital career platforms, recruitment analytics, tech skill 
                assessment platforms, and comprehensive professional services.
              </p>
              <Link to="/about" className="btn btn-outline">Read More</Link>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <h3>Our Mission</h3>
                <p>Connecting exceptional talent with extraordinary opportunities across the globe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHAT WE DO</span>
            <h2 className="section-title">Our Services</h2>
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
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHAT WE OFFER</span>
            <h2 className="section-title">Our Solutions</h2>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <Link to={solution.link} className="solution-link">Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="cta-section cta-primary">
        <div className="container">
          <h2>Streamline Your Talent Acquisition and Amplify Growth</h2>
          <p>Walk into a one-stop shop for all your tech recruitment needs</p>
          <Link to="/contact" className="btn btn-primary btn-large">Let's Explore Possibilities</Link>
        </div>
      </section>

      <section className="cta-section cta-secondary">
        <div className="container">
          <h2>Empower Your Business to Achieve Agility & Flexibility</h2>
          <p>Leverage our comprehensive tech recruitment and consultancy solutions</p>
          <Link to="/contact" className="btn btn-secondary btn-large">Let's Talk</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
