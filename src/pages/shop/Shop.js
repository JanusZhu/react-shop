import React from "react";
import { Products } from "../../components/Products";

export const Shop = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold py-8">Janus Shop</h1>
      <div className="products">
        <Products />
      </div>
    </div>
  );
};
