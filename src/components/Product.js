import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
  const { id, title, price, image } = props.product;
  const { cartItems, addItem, deleteItem, setItemAmount } =
    useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="product flex flex-col justify-start items-center gap-8 my-12">
      <img className="w-40 h-48" src={image} alt={`product${id}`} />
      <div className="description">
        <p className="text-1xl font-bold">{title}</p>
        <p>${price}</p>
      </div>
      {cartItemsAmount === 0 ? (
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:scale-110"
          onClick={() => {
            addItem(id);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <div className="border-2 border-solid border-black-500 rounded-full p-1">
          <button
            className="text-black px-3 py-1 rounded-full hover:bg-slate-200 font-mono"
            onClick={() => {
              deleteItem(id);
            }}
          >
            -
          </button>
          <input
            type="text"
            maxLength={2}
            className="text-center w-14 text-dark border-dark px-3 py-1"
            value={cartItemsAmount}
            onChange={(e) => {
              setItemAmount(id, e.target.value);
            }}
          />
          <button
            className=" text-black px-3 py-1 rounded-full hover:bg-slate-200"
            onClick={() => {
              addItem(id);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
