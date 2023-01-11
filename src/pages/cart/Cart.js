import React, { useContext } from "react";
import { PRODUCTS } from "../../assets/productInfo/products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems, calSubtotal } = useContext(ShopContext);
  const subtotal = calSubtotal();
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold py-8">Your Cart Items</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {subtotal === 0 || subtotal === "0.00" ? (
          <h1>Cart is empty. Add some products to the cart.</h1>
        ) : (
          <div className="flex gap-12 justify-center items-center">
            <h1>Subtotal is ${subtotal}</h1>
            <button className="bg-blue-500 rounded hover:scale-150 p-2 text-white">
              Checkout
            </button>
          </div>
        )}
        <div className="flex flex-col gap-12">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            } else {
              return <div key={product.id}></div>;
            }
          })}
        </div>
      </div>
    </div>
  );
};
