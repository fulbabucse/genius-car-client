import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="rounded-md shadow-lg bg-white h-full">
        <a data-mdb-ripple="true" data-mdb-ripple-color="orange">
          <img className="rounded-md w-full h-56" src={img} alt={title} />
        </a>
        <div className="p-4">
          <h5 className="text-gray-800 text-xl font-bold mb-2">{title}</h5>

          <div className="text-purple-600 text-lg flex items-center justify-between">
            <p className="font-semibold">Price: ${price}</p>
            <button type="button">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
