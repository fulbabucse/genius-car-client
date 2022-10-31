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

              <Link
                to="/dashboard/add-product"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
