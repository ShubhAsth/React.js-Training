import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartItemCount = cartItems.length;

  return (
    <div className="navbar">
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/cart">
        <div>Cart: {cartItemCount}</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
