import React, { useEffect, useMemo, useState } from "react";
import { apiCall } from "../../Utils/Api";
import ProductCard from "./ProductCard/index.jsx";
import "./products.css";

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProductsListing();
  }, []);

  const getProductsListing = async () => {
    const data = await apiCall("GET", "/products");
    if (data) {
      setAllProducts(data);
    }
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
    () => allProducts?.slice(0, visibleProducts),
    [allProducts, visibleProducts]
  );

  return (
    <div>
      {" "}
      <section className="products-section">
        <div className="product-container">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts < allProducts.length && (
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
      </section>
    </div>
  );
};

export default ProductListing;
