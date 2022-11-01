import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { FaTh, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white px-3 lg:px-0 dark:bg-gray-800">
      <div className="container py-5 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/dashboard/home">
                <img className="w-16 h-10" src={logo} alt="Genius Car logo" />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                className="p-2 text-slate-700 rounded-md outline-none focus:border-slate-700 focus:border"
                onClick={() => setOpen(!open)}
              >
                {open ? <FaTimes></FaTimes> : <FaTh></FaTh>}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800  lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
              open
                ? "block translate-x-0 opacity-100"
                : "hidden opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col transition-all duration-300 ease-in-out  text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <Link
                to="/dashboard/home"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Home
              </Link>

              <div className="flex justify-center">
                <div>
                  <div className="dropdown relative">
                    <button
                      className="dropdown-toggle px-6 py-2.5 text-slate-700 text-md leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          to="/dashboard/products"
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        >
                          All Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/add-product"
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        >
                          Add Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div>
                  <div className="dropdown relative">
                    <button
                      className="dropdown-toggle px-6 py-2.5 text-slate-700 text-md leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          to="/dashboard/services"
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        >
                          All Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/add-service"
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        >
                          Add Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
