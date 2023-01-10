import React from "react";
import { PRODUCTS } from "../../products";

export const Shop = () => {
  return (
    <div>
      <h1>Janus Shop</h1>
      <div className="products">
        <PRODUCTS />
      </div>
    </div>
  );
};
