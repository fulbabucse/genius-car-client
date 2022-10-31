import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddProducts = () => {
  const [products, setAddProducts] = useState({});

  const handleServiceBlue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...products };
    newService[field] = value;
    setAddProducts(newService);
  };

  const handleAddServicesForm = (e) => {
    e.preventDefault();
    console.log(products);
    e.target.reset();

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Products Add successfully");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="h-screen">
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-xl mx-auto lg:mt-10">
        <h2 className="text-3xl font-bold mb-5 text-center text-gray-700 uppercase">
          Add Product
        </h2>
        <form onSubmit={handleAddServicesForm}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Product Name"
                name="name"
                onBlur={handleServiceBlue}
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="number"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Product Price"
                name="price"
                onBlur={handleServiceBlue}
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
              id="exampleInput125"
              placeholder="Photo URL"
              name="image"
              onBlur={handleServiceBlue}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Product Type"
              name="serviceType"
              onBlur={handleServiceBlue}
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Service Descriptions"
              name="descriptions"
              onBlur={handleServiceBlue}
            ></textarea>
          </div>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-purple-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-purple-700 hover:shadow-lg
      focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-purple-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
