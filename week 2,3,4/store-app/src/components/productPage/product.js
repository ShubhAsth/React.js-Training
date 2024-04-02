import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import "./Product.css";

const Product = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [productList, setProductList] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.log("Unable to get data:", error);
      setProductList([]);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      {productList.map((product) => (
        <div className="product-card-container" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Product;
