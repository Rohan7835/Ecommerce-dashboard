import React, { useState } from "react";
import { renderStars } from "../../../Utils/utils.jsx";
import ProductModal from "./ProductModal.jsx";

const ProductCard = ({ product }) => {
  const { title, price, category, image, rating } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="product-card" onClick={() => setIsModalOpen(true)}>
        <img src={image} alt={title} className="product-image" />
        <div className="product-details">
          <h3 className="product-name">{title}</h3>
          <p className="product-category">{category}</p>
          <div className="product-price-rating">
            <p className="product-price">${price.toFixed(2)}</p>
            <div className="product-rating">
              {rating?.rate && renderStars(rating?.rate)}{" "}
              <span className="product-review">({rating?.count})</span>
            </div>
          </div>
        </div>
      </div>
      {/* Modal to show product details */}
      {isModalOpen && (
        <ProductModal product={product} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ProductCard;
