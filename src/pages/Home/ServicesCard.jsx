import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div class="rounded-md shadow-lg bg-white h-full">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="rounded-t-lg w-full h-60" src={img} alt={title} />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>

          <div className="text-orange-600 text-lg flex items-center justify-between">
            <p class="font-semibold">Price: ${price}</p>
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
