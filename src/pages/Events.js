// src/pages/Events.js
import React from 'react';
import Footer from '../components/Footer';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Wine Tasting Masterclass",
      date: "2024-02-15",
      time: "19:00",
      price: "$120",
      description: "Join our master sommelier for an exclusive wine tasting experience."
    },
    {
      id: 2,
      title: "Whisky & Cigar Evening",
      date: "2024-02-22",
      time: "20:00",
      price: "$150",
      description: "Premium whisky pairing with hand-rolled cigars in our private lounge."
    },
    {
      id: 3,
      title: "Craft Beer Festival",
      date: "2024-03-05",
      time: "18:00",
      price: "$75",
      description: "Sample the finest craft beers from local and international breweries."
    },
    {
      id: 4,
      title: "Vintage Champagne Tasting",
      date: "2024-03-12",
      time: "19:30",
      price: "$200",
      description: "Exclusive tasting of rare vintage champagnes and sparkling wines."
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Events & Tastings</h1>
        <p>Exclusive experiences for the discerning connoisseur</p>
      </div>
      
      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-date">
              <span className="event-day">{new Date(event.date).getDate()}</span>
              <span className="event-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="event-details">
                <span>🕒 {event.time}</span>
                <span>💰 {event.price} per person</span>
              </div>
              <button className="cta-button outline">Reserve Spot</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;