import React from "react";
import { PRODUCTS } from "../../products";

export const Shop = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold py-8">Janus Shop</h1>
      <div className="products">
        <PRODUCTS />
      </div>
    </div>
  );
};
