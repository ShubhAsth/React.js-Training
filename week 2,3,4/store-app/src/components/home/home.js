import React from "react";
import logo from "../../logo.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to the Fake Store</h1>
      <NavLink to="/product">Show Products</NavLink>
    </div>
  );
};

export default Home;
