import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "./pages/shop/Product";
import { Loading } from "./components/Loading";

export const PRODUCTS = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products?limit=9")
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
        setLoading(true);
      })
      .catch((err) => console.dir(err));
  }, []);

  return (
    <>
      {loading && (
        <div className=" grid grid-cols-3">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      )}
      {!loading && <Loading />}
    </>
  );
};
