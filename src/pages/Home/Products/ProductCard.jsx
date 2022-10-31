import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id, image, name, price } = product;
  return (
    <div>
      <div className="rounded-md shadow-lg bg-white h-full">
        <a data-mdb-ripple="true" data-mdb-ripple-color="orange">
          <img
            className="rounded-md w-full h-56 bg-gray-100"
            src={image}
            alt={name}
          />
        </a>
        <div className="p-4">
          <h5 className="flex justify-center text-orange-400 text-xl font-bold mb-2">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </h5>
          <h5 className="text-gray-800 text-center text-xl font-bold mb-2">
            {name}
          </h5>
          <p className="font-semibold text-center">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
