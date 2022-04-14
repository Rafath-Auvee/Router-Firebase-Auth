import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
  return (
    <div className="header">
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
