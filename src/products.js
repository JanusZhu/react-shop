import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

export const PRODUCTS = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products/1")
      .then(({ data }) => {
        console.log(data.title);
        setProducts(data.title);
      })
      .catch((err) => console.dir(err));
  }, []);

  return <div>{products}</div>;
};
