// src/pages/Reservations.js
import React, { useState } from 'react';
import Footer from '../components/Footer';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission
    alert('Reservation request submitted! We will contact you to confirm.');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Table Reservations</h1>
        <p>Secure your exclusive dining experience</p>
      </div>
      
      <div className="reservation-form-container">
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Number of Guests *</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Date *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Time *</label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Special Occasion (Optional)</label>
            <input
              type="text"
              placeholder="Birthday, Anniversary, etc."
              value={formData.occasion}
              onChange={(e) => setFormData({...formData, occasion: e.target.value})}
            />
          </div>
          
          <button type="submit" className="cta-button gold full-width">
            Request Reservation
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Reservations;