import React from "react";
import { useState, createContext, useEffect } from "react";
import { PRODUCTS } from "../assets/productInfo/products";

export const ShopContext = createContext(null);

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart());
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addItem = (itemID) => {
    setCartItems((pre) => ({
      ...pre,
      [itemID]: pre[itemID] === 99 ? 99 : pre[itemID] + 1,
    }));
  };
  const deleteItem = (itemID) => {
    setCartItems((pre) => ({ ...pre, [itemID]: pre[itemID] - 1 }));
  };
  const setItemAmount = (itemID, amount) => {
    setCartItems((pre) => ({
      ...pre,
      [itemID]: amount >= 1 ? Number(amount) : 0,
    }));
  };

  const contextValue = { cartItems, addItem, deleteItem, setItemAmount };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
