// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="shop-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/bulk-order">Bulk Order</Link></li>
              <li><Link to="/secure-login">Secure Login</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/terms-of-use">Terms Of Use</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CONTACT INFO</h3>
            <ul>
              <li>📱 +1 (555) 123-4567</li>
              <li>✉️ info@maximony.com</li>
              <li>📍 123 Manhattan Ave, New York, NY</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>MOBILE APPLICATION</h3>
            <div className="app-downloads">
              <button className="app-store-btn">
                <span>Google Play</span>
              </button>
              <button className="app-store-btn">
                <span>App Store</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 MAXIMONY. Established 1866. All rights reserved.</p>
          <p>Designed and Developed by R&D Web Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;