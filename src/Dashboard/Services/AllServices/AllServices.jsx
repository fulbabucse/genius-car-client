import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const AllServices = () => {
  const servicesData = useLoaderData();
  const [services, setServices] = useState(servicesData);
  const handleServiceDelete = (service) => {
    const agree = window.confirm("Are you sure delete this user");
    if (agree) {
      fetch(
        `https://genius-car-server-eta.vercel.app/services/${service._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            const restServices = services.filter(
              (svr) => svr._id !== service._id
            );
            setServices(restServices);
            toast.error("Service deleted successfully");
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-700">
        Total Services {services?.length}
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Services Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Services Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Services Id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services?.map((service, index) => (
                    <tr
                      key={service._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                        {service.name}
                      </td>
                      <td className="text-sm text-gray-900 text-center font-light px-3 py-4 whitespace-nowrap">
                        {service.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap">
                        <img
                          className="w-12 h-12 rounded-md"
                          src={service.image}
                          alt=""
                        />
                      </td>

                      <td className="text-sm text-gray-900 text-center font-light px-3 py-4 whitespace-nowrap">
                        {service.serviceId}
                      </td>

                      <td>
                        <button
                          onClick={() => handleServiceDelete(service)}
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Delete
                        </button>
                      </td>

                      <td>
                        <Link to={`/dashboard/service/update/${service._id}`}>
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block px-4 py-2 bg-purple-800 text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
