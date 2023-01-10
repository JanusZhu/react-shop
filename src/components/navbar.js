import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import cartlogo from "../assets/cart.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Store</h1>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <div className="logo">
            <img src={cartlogo} alt="CartLogo" />
          </div>
        </Link>
      </div>
    </div>
  );
};
