import React, { useContext } from "react";
import { PRODUCTS } from "../../assets/productInfo/products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, calSubtotal, clearCart, calNum } = useContext(ShopContext);
  const subtotal = calSubtotal();
  const itemNum = calNum();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-end py-8 pl-8">
        <h1 className="text-4xl font-bold align-self-start px-2">Your Cart </h1>
        <h2>({itemNum !== 1 ? `${itemNum} items` : "1 item"})</h2>
      </div>

      {subtotal === 0 || subtotal === "0.00" ? (
        <div className="flex flex-col justify-center items-center">
          <h1>Cart is empty. Add some products to the cart.</h1>
        </div>
      ) : (
        <div className="flex pl-8 gap-8 justify-start items-start mb-20 py-0">
          <div className="flex flex-col gap-8 w-3/5 border-solid rounded border-2 border-dark m-0 justify-start shadow-md shadow-black p-0">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              } else {
                return <div key={product.id}></div>;
              }
            })}
          </div>
          <div className="flex flex-col h-min justify-start items-center border-solid rounded border-2 border-dark px-8 py-12 fixed right-20 shadow-md shadow-black gap-8">
            <h1>Subtotal is ${subtotal}</h1>
            <div className="flex gap-12">
              <button
                onClick={() => navigate("/")}
                className="bg-blue-500 rounded hover:bg-blue-600 p-2 text-white"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => {
                  clearCart();
                  navigate("/");
                }}
                className="bg-blue-500 rounded hover:bg-blue-600 p-2 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
