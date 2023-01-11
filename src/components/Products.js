import React from "react";
import { Product } from "./Product";
import { PRODUCTS } from "../assets/productInfo/products";

export const Products = () => {
  return (
    <>
      <div className=" grid grid-cols-3">
        {PRODUCTS.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
