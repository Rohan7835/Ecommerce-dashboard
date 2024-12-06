// src/components/ProductModal.js
import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null; // If no product is passed, don't render the modal

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div
        className="product-modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="product-modal-details">
          {/* Image Section */}
          <div className="product-modal-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-modal-image"
            />
          </div>

          {/* Product Info Section */}
          <div className="product-info">
            <h2 className="product-name">{product.title}</h2>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">${product.price}</p>
            <div className="product-description">
              <h4>Description:</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
