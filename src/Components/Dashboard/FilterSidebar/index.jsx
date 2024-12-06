// src/components/FilterSidebar.js
import React, { useEffect, useState } from "react";

const FilterSidebar = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    onFilterChange({ category: null, priceRange: null, rating: null });
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, priceRange, rating });
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.split(",").map(Number);
    setPriceRange(value);
    onFilterChange({ selectedCategory, priceRange: value, rating });
  };

  const handleRatingChange = (e) => {
    const selectedRating = parseInt(e.target.value);
    setRating(selectedRating);
    onFilterChange({ selectedCategory, priceRange, rating: selectedRating });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      {/* Category Filter */}
      <div className="filter-section">
        <h4>Category</h4>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <h4>Price Range</h4>
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          value={priceRange.join(",")}
          onChange={handlePriceChange}
          className="filter-range"
        />
        <p>
          ${priceRange[0]} - ${priceRange[1]}
        </p>
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <h4>Rating</h4>
        <div className="rating-options">
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                value={star}
                checked={rating === star}
                onChange={handleRatingChange}
              />
              {star} Stars
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
