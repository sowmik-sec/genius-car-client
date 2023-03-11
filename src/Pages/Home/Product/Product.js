import React from "react";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  const { name, price, img } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5  md:mx-0 mx-auto">
      <figure className="w-[314px] h-[215px]  bg-slate-100">
        <img height={146} width={146} src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold text-orange-600">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
