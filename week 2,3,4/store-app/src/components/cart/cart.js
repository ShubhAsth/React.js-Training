import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../productPage/productCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="product-page">
      {cartItems.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        cartItems.map((product) => (
          <div className="product-card-container" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
