// src/pages/About.js
import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Discover the story behind MAXIMONY</p>
      </div>

      <div className="about-content">
        <div className="container">
          {/* Our Story Section */}
          <section className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 1866, MAXIMONY emerged from a passion for exceptional spirits 
                and the art of fine craftsmanship. Our founders, renowned distillers and 
                connoisseurs, envisioned a sanctuary where enthusiasts alike could discover 
                the world's most exquisite alcoholic beverages.
              </p>
              <p>
                Today, we stand as a beacon of luxury in the spirits industry, curating 
                an unparalleled collection of rare wines, premium spirits, and vintage 
                champagnes from across the globe.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Elegant Interior</span>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mission-section">
            <div className="mission-cards">
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To provide an extraordinary experience through carefully curated spirits, 
                  expert guidance, and impeccable service that celebrates the rich heritage 
                  and craftsmanship of fine beverages.
                </p>
              </div>
              <div className="mission-card">
                <h3>Our Vision</h3>
                <p>
                  To be the world's premier destination for spirits enthusiasts, setting 
                  the standard for excellence in selection, education, and customer experience.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2>Meet Our Experts</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <div className="photo-placeholder">
                    <span>Master Sommelier</span>
                  </div>
                </div>
                <h4>Alexander Laurent</h4>
                <p className="member-role">Master Sommelier & Founder</p>
                <p className="member-bio">
                  With over 25 years of experience, Alexander has curated wine collections 
                  for Michelin-starred restaurants worldwide.
                </p>
              </div>
              
              <div className="team-member">
                <div className="member-photo">
                  <div className="photo-placeholder">
                    <span>Spirits Director</span>
                  </div>
                </div>
                <h4>Isabella Rossi</h4>
                <p className="member-role">Spirits Director</p>
                <p className="member-bio">
                  Isabella's expertise in rare whiskies and cognacs has earned her 
                  international recognition in the spirits industry.
                </p>
              </div>
              
              <div className="team-member">
                <div className="member-photo">
                  <div className="photo-placeholder">
                    <span>Executive Chef</span>
                  </div>
                </div>
                <h4>Marco DeLuca</h4>
                <p className="member-role">Executive Chef</p>
                <p className="member-bio">
                  Marco creates exquisite pairings that elevate both our spirits and 
                  culinary offerings to new heights.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">⭐</div>
                <h4>Excellence</h4>
                <p>We pursue perfection in every bottle and every service</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <h4>Heritage</h4>
                <p>We honor traditional craftsmanship while embracing innovation</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Community</h4>
                <p>We build relationships through shared passion and knowledge</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h4>Expertise</h4>
                <p>We provide knowledgeable guidance for every selection</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;