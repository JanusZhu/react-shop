import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import cartlogo from "../../assets/cart.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="text-2xl font-bold">JanuStore</h1>
      </Link>

      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <div className="logo bg-white rounded-full h-100% w-100% hover:scale-150 flex justify-center items-center">
            <img className="" src={cartlogo} alt="CartLogo" />
          </div>
        </Link>
      </div>
    </div>
  );
};