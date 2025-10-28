// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css'; // Make sure you have this CSS file

const Cart = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, total }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div className={`cart-side-panel ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-content">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemoveItem}
                  />
                ))}
              </div>
              
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${total.toFixed(2)}</strong>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;