import React from "react";
import { Product } from "./Product";
import { useState, useEffect } from "react";
import loadingGif from "../assets/loading.gif";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://react-http-6bf46-default-rtdb.firebaseio.com/products.json      "
      );
      const responseData = await response.json();
      const productsList = [];
      for (const key in responseData) {
        productsList.push({
          id: responseData[key].id,
          price: responseData[key].price,
          title: responseData[key].title,
          image: responseData[key].image,
        });
      }
      //console.log(productsList);
      setProducts(productsList);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="flex flex-col justify-center items-center mt-32">
          <p>Loading</p>
          <img className="w-12 h-12" src={loadingGif} alt="loadingGif" />
        </div>
      )}
      <div className=" grid grid-cols-3">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
