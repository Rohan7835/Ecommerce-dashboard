import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

const FilterSidebar = ({
  categories,
  onFilterChange,
  setIsSidebarVisible,
  isSidebarVisible,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    onFilterChange({ category: selectedCategory, priceRange, rating });
  }, [selectedCategory, priceRange, rating]);

  const resetFilter = () => {
    setSelectedCategory("");
    setPriceRange(1000);
    setRating(0);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const handlePriceChange = (e) => {
    const value = +e.target.value;
    setPriceRange(value);
  };

  const handleRatingChange = (e) => {
    const selectedRating = parseInt(e.target.value);
    setRating(selectedRating);
  };

  return (
    <>
      <div className={`filter-sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <div onClick={() => setIsSidebarVisible(false)}>
          <IoIosClose size={30} />
        </div>
        <div className="flex-justify">
          <h3>Filters</h3>
          <span onClick={() => resetFilter()} style={{ paddingLeft: 20 }}>
            Reset
          </span>
        </div>

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

        <div className="filter-section">
          <h4>Price Range</h4>
          <input
            type="range"
            min="0"
            max="1000"
            step="1"
            value={priceRange}
            onChange={handlePriceChange}
            className="filter-range"
          />
          <p>0 - ${priceRange}</p>
        </div>

        <div className="filter-section">
          <h4>Minimum Rating</h4>
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
    </>
  );
};

export default FilterSidebar;
