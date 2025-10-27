// src/pages/Media.js
import React from 'react';
import Footer from '../components/Footer';


const Media = () => {
  const pressFeatures = [
    {
      id: 1,
      publication: "Wine Spectator",
      title: "MAXIMONY: Redefining Luxury Spirits",
      date: "January 2024",
      excerpt: "A comprehensive look at how MAXIMONY is setting new standards in spirits retail and tasting experiences.",
      link: "#"
    },
    {
      id: 2,
      publication: "Forbes",
      title: "The Ultimate Destination for Discerning Collectors",
      date: "December 2023",
      excerpt: "Exploring the curated collection that has made MAXIMONY a favorite among serious collectors.",
      link: "#"
    },
    {
      id: 3,
      publication: "The Spirits Business",
      title: "Innovation Meets Tradition in Luxury Retail",
      date: "November 2023",
      excerpt: "How MAXIMONY balances heritage craftsmanship with modern retail excellence.",
      link: "#"
    }
  ];

  const galleryImages = [
    { id: 1, title: "Our Tasting Room", description: "Elegant space for private tastings" },
    { id: 2, title: "Spirits Collection", description: "Curated selection of premium bottles" },
    { id: 3, title: "Wine Cellar", description: "Temperature-controlled storage" },
    { id: 4, title: "Event Space", description: "Hosting exclusive events" },
    { id: 5, title: "Expert Team", description: "Our knowledgeable staff" },
    { id: 6, title: "Dining Area", description: "Gourmet pairing experiences" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Vintage Champagne Tasting",
      date: "March 15, 2024",
      type: "Public Event"
    },
    {
      id: 2,
      title: "Scotch Whisky Masterclass",
      date: "April 5, 2024",
      type: "Private Session"
    },
    {
      id: 3,
      title: "Wine & Cheese Pairing Evening",
      date: "May 20, 2024",
      type: "Public Event"
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Media & Press</h1>
        <p>Discover our story through features, galleries, and events</p>
      </div>

      <div className="media-content">
        <div className="container">
          {/* Press Features Section */}
          <section className="press-section">
            <h2>Press Features</h2>
            <div className="press-grid">
              {pressFeatures.map(feature => (
                <div key={feature.id} className="press-card">
                  <div className="press-publication">{feature.publication}</div>
                  <h3>{feature.title}</h3>
                  <p className="press-date">{feature.date}</p>
                  <p className="press-excerpt">{feature.excerpt}</p>
                  <a href={feature.link} className="read-more">Read Article →</a>
                </div>
              ))}
            </div>
          </section>

          {/* Photo Gallery Section */}
          <section className="gallery-section">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
              {galleryImages.map(image => (
                <div key={image.id} className="gallery-item">
                  <div className="gallery-image">
                    <div className="image-placeholder">
                      <span>{image.title}</span>
                    </div>
                  </div>
                  <div className="gallery-caption">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="events-media-section">
            <h2>Upcoming Media Events</h2>
            <div className="events-media-list">
              {upcomingEvents.map(event => (
                <div key={event.id} className="media-event-card">
                  <div className="event-date-media">
                    <span className="event-day">{new Date(event.date).getDate()}</span>
                    <span className="event-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                  </div>
                  <div className="event-details-media">
                    <h3>{event.title}</h3>
                    <p className="event-type">{event.type}</p>
                    <p className="event-full-date">{event.date}</p>
                    <button className="cta-button outline small">Media Inquiry</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Press Kit Section */}
          <section className="press-kit-section">
            <div className="press-kit-card">
              <h2>Press Kit</h2>
              <p>Download our media resources for publications and journalists</p>
              <div className="press-kit-downloads">
                <div className="download-item">
                  <h4>Company Fact Sheet</h4>
                  <p>PDF • 2.1 MB</p>
                  <button className="download-btn">Download</button>
                </div>
                <div className="download-item">
                  <h4>High-Resolution Images</h4>
                  <p>ZIP • 15.4 MB</p>
                  <button className="download-btn">Download</button>
                </div>
                <div className="download-item">
                  <h4>Brand Guidelines</h4>
                  <p>PDF • 3.7 MB</p>
                  <button className="download-btn">Download</button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="media-contact-section">
            <h2>Media Contact</h2>
            <div className="contact-info-media">
              <div className="contact-item">
                <strong>Press Inquiries:</strong>
                <span>press@maximony.com</span>
              </div>
              <div className="contact-item">
                <strong>Media Relations:</strong>
                <span>Sarah Chen</span>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+1 (555) 123-4567</span>
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

export default Media;