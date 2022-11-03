import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, userSignOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userSignOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, [user?.email, userSignOut]);

  const handleDeleteOrder = (id) => {
    const agree = window.confirm("Are you sure cancel this orders");
    if (agree) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const restOrders = orders.filter((odr) => odr._id !== id);
            toast.error("Orders cancel successfully");
            setOrders(restOrders);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-700">
        Total Orders {orders.length}
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="w-full lg:w-4/5 mx-auto">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6  text-left"
                    >
                      No
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-center text-gray-900  py-4"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Products Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Products Price
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order, index) => (
                    <tr
                      key={order._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>

                      <td className="py-1 flex justify-center">
                        <img
                          src={order.image}
                          className="w-16 h-16 rounded-lg"
                          alt=""
                        />
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {order.serviceName}
                      </td>
                      <td className="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                        {order.price}
                      </td>

                      <td className="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                        {order.phone}
                      </td>

                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => handleDeleteOrder(order._id)}
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="inline-block px-4 py-2 bg-red-600  text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          <FaTimes></FaTimes>
                        </button>
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

export default Orders;
