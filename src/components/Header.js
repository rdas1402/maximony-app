// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/events', label: 'EVENTS' },
    { path: '/shop', label: 'SHOP' },
    { path: '/reservations', label: 'RESERVATIONS' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/media', label: 'MEDIA' }
  ];

  return (
    <header className="elegant-header">
      <div className="header-top-bar">
        <div className="container">
          <div className="header-contact">
            <span>📞 +1 (555) 123-4567</span>
            <span>📍 123 Luxury Avenue, Metropolitan City</span>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Link to="/">
                <h1>MAXIMONY</h1>
                <p>PREMIUM SPIRITS & DINING</p>
              </Link>
            </div>

            <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <button className="cart-button-elegant" onClick={onCartClick}>
                <span className="cart-icon">🛒</span>
                {cartItemCount > 0 && (
                  <span className="cart-count">{cartItemCount}</span>
                )}
              </button>
              
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;