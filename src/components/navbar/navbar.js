import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import cartlogo from "../../assets/cart.png";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const Navbar = () => {
  const { calSubtotal } = useContext(ShopContext);
  const subtotal = calSubtotal();
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="text-2xl font-bold">JanuStore</h1>
      </Link>

      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <div className="logo bg-white rounded-full hover:bg-dark h-8 w-28 px-1 flex justify-center items-center">
            <img className="" src={cartlogo} alt="CartLogo" />
            <p className="text-black">${subtotal}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
