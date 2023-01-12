import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const CartItem = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addItem, deleteItem, setItemAmount } =
    useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="border-solid rounded border-2 border-dark mx-20 p-8 shadow-md  shadow-black grid grid-cols-2 justify-center justify-items-center items-center">
      <div className="justify-self-end">
        <img className="w-40 h-48" src={image} alt={`product${id}`} />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-1xl font-bold">{title}</p>
        <p>${price}</p>
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
            className="text-black px-3 py-1 rounded-full hover:bg-slate-200"
            onClick={() => {
              addItem(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
