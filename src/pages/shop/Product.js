import React from "react";
export const Product = (props) => {
  const { id, title, price, image } = props.product;
  return (
    <div className="product flex flex-col justify-start items-center gap-8 my-12">
      <img className="w-52 h-60" src={image} alt={`product${id}`} />
      <div className="description">
        <p className="text-1xl font-bold">{title}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};
