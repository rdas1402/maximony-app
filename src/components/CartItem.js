// src/components/CartItem.js
import React from 'react';
import '../styles/CartItem.css'; // We'll create this CSS file

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-type">{item.type}</p>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        
        <div className="cart-item-controls">
          <div className="quantity-controls">
            <button 
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="quantity-btn"
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="quantity-display">{item.quantity}</span>
            <button 
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleRemove}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
        
        <div className="cart-item-total">
          Item Total: ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;