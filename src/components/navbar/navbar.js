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
          <div className="logo bg-white rounded-full h-8 w-28 px-1 flex justify-center items-center">
            <img className="" src={cartlogo} alt="CartLogo" />
            <p className="text-black">My Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
