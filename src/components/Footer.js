import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Blue Whale Tech Consultancy Services</h3>
          <p>Connecting talent with opportunities across Canada. bwtcs.com</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: <a href="mailto:Hr@bwtcs.com">Hr@bwtcs.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: Canada</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Blue Whale Tech Consultancy Services. All rights reserved. bwtcs.com</p>
      </div>
    </footer>
  );
};

export default Footer;
