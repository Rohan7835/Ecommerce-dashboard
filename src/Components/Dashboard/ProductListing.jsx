import React, { useEffect, useMemo, useState } from "react";
import { apiCall } from "../../Utils/Api";
import ProductCard from "./ProductCard/index.jsx";
import { CirclesWithBar } from "react-loader-spinner";
import FilterSidebar from "./FilterSidebar/index.jsx";

import "./products.css";

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [productsLoading, setProductsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      const isPriceMatch = priceRange
        ? product.price >= priceRange[0] && product.price <= priceRange[1]
        : true;
      const isRatingMatch = rating ? product.rating >= rating : true;

      return isCategoryMatch && isPriceMatch && isRatingMatch;
    });
    console.log("filtered", filtered);
    setFilteredProducts(filtered);
  };

  const loadMoreProducts = () => {
    setIsLoading(true);
    // Simulate a delay like an API call
    setTimeout(() => {
      setVisibleProducts((prevVisible) => prevVisible + 8); // Show 6 more products
      setIsLoading(false);
    }, 1000);
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
          <section className="container-main">
            <div className="filter-container">
              <FilterSidebar
                categories={categories}
                onFilterChange={filterProducts}
              />
            </div>

            <div className="products-section">
              <div className="product-container">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {visibleProducts < filteredProducts.length && (
                <div className="load-more-btn-container">
                  <button
                    className="load-more-btn"
                    onClick={loadMoreProducts}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Load More"}
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
