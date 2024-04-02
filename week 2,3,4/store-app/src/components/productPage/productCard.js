import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/actions";

const ProductCard = ({ product }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="product-card">
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <p>{product.category}</p>
      </div>
      <div>
        <p>{product.price}</p>
      </div>
      <div className="rating">
        <p>Rating:</p>
        <div>{product.rating.rate}</div>
        <div>{product.rating.count}</div>
      </div>
      <div>
        {cartItems.some((item) => item.id === product.id) ? (
          <button onClick={handleRemoveProduct}>Remove From Cart</button>
        ) : (
          <button onClick={handleAddProduct}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
