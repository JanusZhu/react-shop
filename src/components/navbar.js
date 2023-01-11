import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import cartlogo from "../assets/cart.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="text-2xl font-bold">JanuStore</h1>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <div className="logo bg-white rounded-full h-33 w-33">
            <img className="" src={cartlogo} alt="CartLogo" />
          </div>
        </Link>
      </div>
    </div>
  );
};
