import React, { useEffect, useMemo, useState } from "react";
import { apiCall } from "../../../Utils/Api";
import ProductCard from "../ProductCard/index.jsx";
import { CirclesWithBar } from "react-loader-spinner";
import FilterSidebar from "../FilterSidebar/index.jsx";

import "./products.css";

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [productsLoading, setProductsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortingValue, setSortingValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setProductsLoading(true);
    const productdata = await apiCall("GET", "/products");
    const categoryData = await apiCall("GET", "/products/categories");

    setProductsLoading(false);
    if (productdata) {
      setAllProducts(productdata);
    }
    if (categoryData) {
      setCategories(categoryData);
    }
  };

  const filterProducts = (filters) => {
    const { category, priceRange, rating } = filters;
    // Filter products based on all conditions
    const filtered = allProducts.filter((product) => {
      const isCategoryMatch = category ? product.category === category : true;
      const isPriceMatch = priceRange ? product.price <= priceRange : true;
      const isRatingMatch = rating ? product.rating?.rate >= rating : true;

      return isCategoryMatch && isPriceMatch && isRatingMatch;
    });
    if (sortingValue) {
      sortProducts(sortingValue, filtered);
    } else {
      setFilteredProducts(filtered);
    }
  };

  const sortProducts = (order, products = filteredProducts) => {
    setSortingValue(order);
    const sorted = [...products];

    if (order === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price); // Sort from low to high
    } else if (order === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price); // Sort from high to low
    }

    setFilteredProducts(sorted);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 8);
  };

  const displayedProducts = useMemo(
    () => filteredProducts?.slice(0, visibleProducts),
    [filteredProducts, visibleProducts]
  );

  return (
    <>
      {" "}
      {productsLoading ? (
        <div className="Loader">
          <CirclesWithBar
            height="80"
            width="80"
            color="#666"
            outerCircleColor="#666"
            innerCircleColor="#666"
            barColor="#666"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          {!isSidebarVisible && (
            <button
              className="filter-toggle"
              onClick={() => setIsSidebarVisible(true)}
            >
              <span className="hamburger-icon">☰</span>
            </button>
          )}
          <section className="container-main">
            <div className="filter-container">
              <FilterSidebar
                categories={categories}
                onFilterChange={filterProducts}
                isSidebarVisible={isSidebarVisible}
                setIsSidebarVisible={setIsSidebarVisible}
              />
            </div>

            <div className="products-section">
              <div className="products-header">
                <div className="sort-container">
                  <select
                    className="sort-select"
                    onChange={(e) => sortProducts(e.target.value)}
                  >
                    <option value="">Sort By Price</option>
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                  </select>
                </div>
              </div>
              <div className="product-container">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {visibleProducts < filteredProducts.length && (
                <div className="load-more-btn-container">
                  <button className="load-more-btn" onClick={loadMoreProducts}>
                    Load More
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProductListing;
