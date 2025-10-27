// src/pages/Shop.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Shop = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState('all');

  // Main categories
  const categories = [
    { id: 'wines', name: 'Wines', icon: '🍷' },
    { id: 'spirits', name: 'Spirits & Liquor', icon: '🥃' },
    { id: 'beer', name: 'Beer', icon: '🍺' },
    { id: 'others', name: 'Others', icon: '🍸' }
  ];

  // Wine subcategories
  const wineSubcategories = [
    { id: 'domestic', name: 'DOMESTIC' },
    { id: 'imported', name: 'IMPORTED' }
  ];

  // Product data
  const products = [
    // Wines - Domestic
    {
      id: 1,
      name: "SITA DA RED SPARKLER",
      category: "wines",
      subcategory: "domestic",
      type: "SPARKLING RED WINE",
      price: 162.00,
      originalPrice: 189.00,
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=500&fit=crop",
      description: "A vibrant sparkling red with rich berry notes and fine bubbles"
    },
    {
      id: 2,
      name: "TILT RED",
      category: "wines",
      subcategory: "domestic",
      type: "RED WINE",
      price: 180.00,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop",
      description: "Bold and complex red wine with dark fruit characteristics"
    },
    {
      id: 3,
      name: "CRYSTAL RIVER WHITE",
      category: "wines",
      subcategory: "domestic",
      type: "WHITE WINE",
      price: 145.00,
      originalPrice: 165.00,
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=500&fit=crop",
      description: "Crisp and refreshing white wine with citrus notes"
    },
    {
      id: 4,
      name: "GOLDEN SPARKLE",
      category: "wines",
      subcategory: "domestic",
      type: "SPARKLING",
      price: 195.00,
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=500&fit=crop",
      description: "Elegant sparkling wine perfect for celebrations"
    },

    // Wines - Imported
    {
      id: 5,
      name: "FRENCH RESERVE RED",
      category: "wines",
      subcategory: "imported",
      type: "RED WINE",
      price: 245.00,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop",
      description: "Premium French red wine with exceptional aging"
    },
    {
      id: 6,
      name: "ITALIAN SUNSET WHITE",
      category: "wines",
      subcategory: "imported",
      type: "WHITE WINE",
      price: 165.00,
      originalPrice: 185.00,
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=500&fit=crop",
      description: "Italian white wine with tropical fruit aromas"
    },
    {
      id: 7,
      name: "CHAMPAGNE GRANDE",
      category: "wines",
      subcategory: "imported",
      type: "SPARKLING",
      price: 325.00,
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=500&fit=crop",
      description: "Authentic French champagne with fine bubbles"
    },

    // Spirits & Liquor
    {
      id: 8,
      name: "SINGLE MALT SCOTCH",
      category: "spirits",
      type: "WHISKEY",
      price: 85.00,
      originalPrice: 95.00,
      image: "https://images.unsplash.com/photo-1470338622423-81a89a77f9c0?w=400&h=500&fit=crop",
      description: "Aged single malt scotch with smoky character"
    },
    {
      id: 9,
      name: "PREMIUM VODKA",
      category: "spirits",
      type: "VODKA",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1608270586627-84d4d705f754?w=400&h=500&fit=crop",
      description: "Ultra-premium vodka with exceptional smoothness"
    },
    {
      id: 10,
      name: "AGED TEQUILA",
      category: "spirits",
      type: "TEQUILA",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1583074626332-9d57d5ef2702?w=400&h=500&fit=crop",
      description: "Añejo tequila with complex oak notes"
    },

    // Beer
    {
      id: 11,
      name: "CRAFT IPA",
      category: "beer",
      type: "IPA",
      price: 8.00,
      originalPrice: 10.00,
      image: "https://images.unsplash.com/photo-1558618666-fcd25856cd8c?w=400&h=500&fit=crop",
      description: "Hoppy craft IPA with citrus notes"
    },
    {
      id: 12,
      name: "STOUT RESERVE",
      category: "beer",
      type: "STOUT",
      price: 9.00,
      image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf0826?w=400&h=500&fit=crop",
      description: "Rich and creamy stout with chocolate notes"
    },

    // Others
    {
      id: 13,
      name: "PREMIUM GIN",
      category: "others",
      type: "GIN",
      price: 55.00,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=500&fit=crop",
      description: "Botanical gin with juniper and citrus notes"
    },
    {
      id: 14,
      name: "RARE BRANDY",
      category: "others",
      type: "BRANDY",
      price: 120.00,
      originalPrice: 140.00,
      image: "https://images.unsplash.com/photo-1572383672419-ab35444a6934?w=400&h=500&fit=crop",
      description: "Aged brandy with rich fruit and oak flavors"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Why should I order liquor online from Manhattan?",
      answer: "There are many interesting local liquor online from Manhattan. One of the largest online liquor store students living in a wide classroom is globally celebrated and isn't liquor with alcohol-free delivery. We can see how these brand delivery will be done, so we don't do our greatest collection, or if it's all over nature."
    },
    {
      question: "I want to buy alcohol online - What spirits can I get?",
      answer: "We offer a wide range of spirits including whiskey, vodka, tequila, gin, rum, and premium liquors from around the world. Our collection features both domestic and imported brands to suit every taste and occasion."
    },
    {
      question: "Where can I find the largest collection of liquor online?",
      answer: "Our online store features one of the largest collections of premium liquors, wines, and spirits. With thousands of brands from across the globe, we bring unique experiences and flavors right to your doorstep."
    }
  ];

  // Filter products based on active category and subcategory
  const filteredProducts = products.filter(product => {
    if (activeCategory === 'all') return true;
    if (product.category !== activeCategory) return false;
    if (activeCategory === 'wines' && activeSubcategory !== 'all') {
      return product.subcategory === activeSubcategory;
    }
    return true;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>SHOP</h1>
        <p>Premium Collection of Wines, Spirits & More</p>
      </div>

      <div className="shop-container">
        <div className="container">
          {/* Category Navigation */}
          <div className="shop-categories">
            <div className="categories-grid">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setActiveSubcategory('all');
                  }}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Wine Subcategories */}
          {activeCategory === 'wines' && (
            <div className="wine-subcategories">
              <div className="subcategory-filters">
                {wineSubcategories.map(subcat => (
                  <button
                    key={subcat.id}
                    className={`subcategory-filter ${activeSubcategory === subcat.id ? 'active' : ''}`}
                    onClick={() => setActiveSubcategory(subcat.id)}
                  >
                    {subcat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="shop-products-section">
            <div className="products-header">
              <h2>
                {activeCategory === 'all' ? 'ALL PRODUCTS' : 
                 activeCategory === 'wines' ? `${activeSubcategory.toUpperCase()} WINES` : 
                 categories.find(cat => cat.id === activeCategory)?.name.toUpperCase()}
              </h2>
              <div className="results-count">
                Showing {filteredProducts.length} of {products.length} products
              </div>
            </div>

            {activeCategory === 'wines' && (
              <div className="wine-description">
                <p>
                  When the perfect mix of cherry and soup, I'm more than just a drink. It's an experience. 
                  And if you're a wine lover, you know the thrill of finding that new bottle. Our collection 
                  of the finest wines will take your tastefulness to preserve your flavor. So come into a 
                  glass with us and let's taste as the good life.
                </p>
              </div>
            )}

            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.originalPrice && (
                      <div className="discount-badge">
                        SAVE ${(product.originalPrice - product.price).toFixed(2)}
                      </div>
                    )}
                  </div>
                  <div className="product-info">
                    <span className="product-type">{product.type}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-pricing">
                      {product.originalPrice ? (
                        <>
                          <span className="original-price">Rs. {product.originalPrice.toFixed(2)}</span>
                          <span className="current-price">from Rs. {product.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="current-price">Rs. {product.price.toFixed(2)}</span>
                      )}
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <section className="shop-faq">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;