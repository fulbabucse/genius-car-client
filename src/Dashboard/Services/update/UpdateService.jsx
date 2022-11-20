import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateService = () => {
  const storedService = useLoaderData();
  const [updateService, setUpdateService] = useState(storedService);

  const handleServiceUpdateChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...updateService };
    newService[field] = value;
    setUpdateService(newService);
  };

  const handleServiceUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/services/${updateService._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdateService(data);
        toast.success("Product updates successfully");
      });
  };
  return (
    <div className="h-screen">
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-xl mx-auto lg:mt-10">
        <h2 className="text-xl lg:text-2xl font-bold mb-5 text-center text-gray-700">
          Updates Service
        </h2>
        <form onSubmit={handleServiceUpdate}>
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
                defaultValue={updateService.name}
                onChange={handleServiceUpdateChange}
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
                defaultValue={updateService.price}
                onChange={handleServiceUpdateChange}
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
              defaultValue={updateService.image}
              onChange={handleServiceUpdateChange}
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
              defaultValue={updateService.serviceId}
              onChange={handleServiceUpdateChange}
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
              defaultValue={updateService.descriptions}
              onChange={handleServiceUpdateChange}
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
            Updates Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
