// src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const products = [
    {
      id: 1,
      name: "SITA DA RED SPARKLER",
      category: "wines",
      type: "SPARKLING RED WINE",
      price: 162.00,
      originalPrice: 189.00,
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=500&fit=crop",
      description: "A vibrant sparkling red with rich berry notes and fine bubbles. Perfect for celebrations and special occasions. This exquisite wine offers a perfect balance of sweetness and acidity, making it an ideal choice for any celebration.",
      inStock: true,
      abv: "12.5%",
      volume: 750,
      country: "Italy"
    },
    {
      id: 2,
      name: "TILT RED",
      category: "wines",
      type: "RED WINE",
      price: 180.00,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop",
      description: "Bold and complex red wine with dark fruit characteristics and subtle oak notes.",
      inStock: true,
      abv: "14.0%",
      volume: 750,
      country: "France"
    }
  ];

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <button onClick={() => navigate('/shop')} className="back-button">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} ${product.name} added to cart!`);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate('/shop')} className="back-button">
          ← Back to Products
        </button>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
            {!product.inStock && (
              <div className="out-of-stock-badge">Out of Stock</div>
            )}
          </div>

          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-category">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)} • {product.country}
            </p>
            
            <p className="product-price">${product.price}</p>
            
            <div className="product-specs-detailed">
              <div className="spec-item">
                <span className="spec-label">ABV:</span>
                <span className="spec-value">{product.abv}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Volume:</span>
                <span className="spec-value">{product.volume}ml</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Type:</span>
                <span className="spec-value">
                  {product.type.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </span>
              </div>
            </div>

            <p className="product-description-detailed">
              {product.description}
            </p>

            {product.inStock ? (
              <div className="purchase-section">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={decreaseQuantity}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-display">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="add-to-cart-large"
                >
                  Add {quantity} to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            ) : (
              <div className="out-of-stock-message">
                <p>This product is currently out of stock.</p>
                <button className="notify-btn">
                  Notify When Available
                </button>
              </div>
            )}

            <div className="age-warning-section">
              <p>🚫 You must be 21 or older to purchase alcoholic beverages.</p>
              <p>Please drink responsibly.</p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="related-products">
          <h3>You Might Also Like</h3>
          <div className="related-products-list">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.id}
                  className="related-product-card"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                  <h4>{relatedProduct.name}</h4>
                  <p>${relatedProduct.price}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;