import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Product from "./components/productPage/product";
import Navbar from "./components/navbar/navbar";
import Cart from "./components/cart/cart";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
