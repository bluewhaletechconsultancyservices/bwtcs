import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="hero-description">
            Blue Whale Tech Consultancy Services — leading tech consultancy across Canada
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Blue Whale Tech Consultancy Services, we believe that every professional deserves the right opportunity 
              to grow and succeed. Our mission is to bridge the gap between talented individuals and 
              forward-thinking companies, creating meaningful connections that drive success for both 
              parties.
            </p>
          </div>

          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              We are a dedicated team of recruitment specialists with deep knowledge of the Canadian 
              job market. With years of experience across various industries, we understand the unique 
              needs of both job seekers and employers. Our expertise spans technology, finance, healthcare, 
              engineering, and many other sectors.
            </p>
          </div>

          <div className="about-section">
            <h2>What Sets Us Apart</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Personalized Approach</h3>
                <p>We take time to understand each candidate's unique skills, goals, and aspirations.</p>
              </div>
              <div className="value-item">
                <h3>Industry Expertise</h3>
                <p>Our consultants have hands-on experience in the industries they serve.</p>
              </div>
              <div className="value-item">
                <h3>Comprehensive Support</h3>
                <p>From resume optimization to interview preparation, we guide you every step of the way.</p>
              </div>
              <div className="value-item">
                <h3>Long-term Partnerships</h3>
                <p>We build lasting relationships with both candidates and employers.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Reach</h2>
            <p>
              Based in Canada, we serve clients and candidates across all major cities including Toronto, 
              Vancouver, Montreal, Calgary, and Ottawa. Our network extends nationwide, ensuring we can 
              connect you with opportunities wherever you are.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
