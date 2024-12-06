import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, category, image, rating } = product;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Whole number part of rating
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star condition
    const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

    const stars = [
      ...Array(fullStars).fill("full"),
      ...Array(halfStar).fill("half"),
      ...Array(emptyStars).fill("empty"),
    ];

    return stars.map((star, index) => (
      <span key={index} className={`star ${star}`}></span>
    ));
  };
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <div className="product-price-rating">
          <p className="product-price">${price.toFixed(2)}</p>
          <div className="product-rating">{renderStars(rating?.rate)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
