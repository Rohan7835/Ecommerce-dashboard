import React from "react";
import { renderStars } from "../../../Utils/utils.jsx";

const ProductCard = ({ product }) => {
  const { title, price, category, image, rating } = product;

  return (
    <div className="product-card">
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
  );
};

export default ProductCard;
