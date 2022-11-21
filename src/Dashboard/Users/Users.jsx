import { useQuery } from "@tanstack/react-query";
import React from "react";
import SmallSpinner from "../../pages/Shared/Spinner/SmallSpinner";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://genius-car-server-eta.vercel.app/users",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("genius-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://genius-car-server-eta.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleRemoveAdmin = (id) => {
    fetch(`https://genius-car-server-eta.vercel.app/users/removeAdmin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <>
      {users?.length === 0 ? (
        <div>
          <SmallSpinner></SmallSpinner>
        </div>
      ) : (
        <div className="h-screen">
          <h1 className="text-xl lg:text-2xl font-bold text-center text-gray-700">
            Total Users {users.length}
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
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-start font-medium text-gray-900 px-6 py-4"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-start font-medium text-gray-900 px-6 py-4"
                        >
                          Role
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((user, index) => (
                        <tr
                          key={user._id}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4">
                            {user.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4">
                            {user.email}
                          </td>

                          <td className="px-6">
                            {user?.role !== "admin" ? (
                              <button
                                onClick={() => handleMakeAdmin(user?._id)}
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                              >
                                Make Admin
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleRemoveAdmin(user?._id)}
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block px-4 py-2 bg-purple-800 text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                              >
                                Remove Admin
                              </button>
                            )}
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
      )}
    </>
  );
};

export default Users;
