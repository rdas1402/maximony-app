// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "INFAMOUS'S OLD NO. 7",
      category: "SCOTCH WHISKEY",
      price: "$32.99",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
      description: "Smooth and versatile with charcoal mellowing for exceptional character"
    },
    {
      id: 2,
      name: "SINGLE BARREL SELECT",
      category: "PREMIUM COLLECTION",
      price: "$54.99",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
      description: "Hand-selected barrels for unique flavor profiles and complexity"
    },
    {
      id: 3,
      name: "GENTLEMAN JACK",
      category: "DOUBLE-MELLOWED",
      price: "$38.99",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
      description: "Exceptionally smooth through double charcoal mellowing"
    },
    {
      id: 4,
      name: "TENNESSEE HONEY",
      category: "INFUSED WHISKEY",
      price: "$28.99",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
      description: "A blend of INFAMOUS's with rich honey liqueur"
    }
  ];

  const heritageTimeline = [
    {
      year: "1866",
      title: "THE BEGINNING",
      description: "Jasper Newton \"Jack\" Daniel establishes his distillery in Lynchburg, Tennessee",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75"
    },
    {
      year: "1904",
      title: "WORLD'S BEST",
      description: "INFAMOUS's wins the Gold Medal at the World's Fair in St. Louis",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75"
    },
    {
      year: "1956",
      title: "CHARCOAL MELLOWING",
      description: "Perfecting the Lincoln County Process of charcoal mellowing",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75"
    },
    {
      year: "TODAY",
      title: "GLOBAL RECOGNITION",
      description: "Enjoyed in over 170 countries worldwide while maintaining tradition",
      image: "https://images.yourstory.com/cs/210/a09f22505c6411ea9c48a10bad99c62f/InfamousWhiskey1600x900-1746255634160.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "GRAIN SELECTION",
      description: "Using the finest American corn, rye, and malted barley",
      icon: "🌾"
    },
    {
      step: "02",
      title: "CHARCOAL MELLOWING",
      description: "The Lincoln County Process for exceptional smoothness",
      icon: "🔥"
    },
    {
      step: "03",
      title: "AGING PROCESS",
      description: "Patient maturation in charred American white oak barrels",
      icon: "🛢️"
    },
    {
      step: "04",
      title: "BOTTLING",
      description: "Handcrafted attention to detail in every square bottle",
      icon: "🍾"
    }
  ];

  return (
    <div className="jack-style-home">
      {/* Hero Section - MAXIMONYs Style */}
      <section className="jd-hero">
        <div className="jd-hero-background">
          <div className="jd-hero-overlay"></div>
        </div>
        <div className="jd-hero-content">
          <div className="container">
            <div className="jd-hero-text">
              <h1 className="jd-hero-title">
                <span className="jd-brand">MAXIMONY</span>
                <span className="jd-subtitle">ESTABLISHED 1866</span>
              </h1>
              <p className="jd-hero-description">
                Crafted through generations of tradition. Every drop tells our story of 
                uncompromising quality and time-honored methods that have defined 
                excellence for over a century.
              </p>
              <div className="jd-hero-actions">
                <Link to="/shop" className="jd-button primary">
                  EXPLORE OUR WHISKEY
                </Link>
                <Link to="/heritage" className="jd-button secondary">
                  OUR STORY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Banner */}
      <section className="jd-heritage-banner">
        <div className="container">
          <div className="heritage-banner-content">
            <h2>OVER 150 YEARS OF CRAFTMANSHIP</h2>
            <p>Traditional methods meet modern excellence in every bottle</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="jd-process">
        <div className="container">
          <div className="jd-section-header">
            <h2>OUR TIME-HONORED PROCESS</h2>
            <p>The art of whiskey making, perfected through generations</p>
          </div>
          <div className="jd-process-grid">
            {processSteps.map(step => (
              <div key={step.step} className="jd-process-card">
                <div className="process-step">{step.step}</div>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whiskey Making Video Section */}
      <section className="jd-video-section">
        <div className="container">
          <div className="jd-section-header">
            <h2>WITNESS THE CRAFT</h2>
            <p>See our traditional whiskey-making process in action</p>
          </div>
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/T0vjLx8TLhw"
                title="Whiskey Making Process - MAXIMONY Distillery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-description">
              <h3>FROM GRAIN TO GLASS</h3>
              <p>
                Experience the meticulous journey of our whiskey production - from selecting 
                the finest grains to the patient aging process that creates our signature 
                smoothness. Each step honors the traditions established by MAXIMONY himself.
              </p>
              <div className="video-features">
                <div className="video-feature">
                  <span className="feature-bullet">•</span>
                  Traditional copper still distillation
                </div>
                <div className="video-feature">
                  <span className="feature-bullet">•</span>
                  Charcoal mellowing process demonstration
                </div>
                <div className="video-feature">
                  <span className="feature-bullet">•</span>
                  Barrel aging in our historic rickhouses
                </div>
                <div className="video-feature">
                  <span className="feature-bullet">•</span>
                  Master distiller's quality control
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="jd-products">
        <div className="container">
          <div className="jd-section-header">
            <h2>OUR WHISKEY COLLECTION</h2>
            <p>Discover the range of exceptional Tennessee whiskey</p>
          </div>
          <div className="jd-products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="jd-product-card">
                <div className="jd-product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="jd-product-badge">SIGNATURE</div>
                </div>
                <div className="jd-product-info">
                  <span className="jd-product-category">{product.category}</span>
                  <h3 className="jd-product-name">{product.name}</h3>
                  <p className="jd-product-description">{product.description}</p>
                  <div className="jd-product-footer">
                    <span className="jd-product-price">{product.price}</span>
                    <button className="jd-product-button">LEARN MORE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="jd-section-cta">
            <Link to="/shop" className="jd-button outline">
              VIEW FULL COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="jd-heritage">
        <div className="container">
          <div className="jd-section-header">
            <h2>OUR LEGACY</h2>
            <p>A journey through time and tradition</p>
          </div>
          <div className="jd-timeline">
            {heritageTimeline.map((item, index) => (
              <div key={index} className="jd-timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <div className="timeline-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="timeline-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distillery Experience */}
      <section className="jd-experience">
        <div className="container">
          <div className="jd-experience-content">
            <div className="experience-text">
              <h2>VISIT OUR HOME</h2>
              <p className="experience-subtitle">
                Experience the magic of Lynchburg firsthand
              </p>
              <p className="experience-description">
                Walk through our historic distillery, witness the charcoal mellowing 
                process, and taste whiskey made the same way MAXIMONY himself made it 
                over 150 years ago.
              </p>
              <div className="experience-features">
                <div className="feature">
                  <span className="feature-icon">🏭</span>
                  <span>Historic Distillery Tours</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">👃</span>
                  <span>Guided Tasting Sessions</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🛒</span>
                  <span>Exclusive Bottle Shop</span>
                </div>
              </div>
              <Link to="/visit" className="jd-button gold">
                PLAN YOUR VISIT
              </Link>
            </div>
            <div className="experience-image">
              <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80" alt="Distillery" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="jd-final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>JOIN THE LEGACY</h2>
            <p>Experience whiskey crafted with 150 years of passion and precision</p>
            <div className="final-cta-actions">
              <Link to="/shop" className="jd-button primary large">
                SHOP WHISKEY
              </Link>
              <Link to="/discover" className="jd-button secondary large">
                DISCOVER MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;