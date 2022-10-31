import React, { useState } from "react";
import { FaTh, FaTimes, FaBriefcase } from "react-icons/fa";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="container py-5 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/">
                <img className="w-16 h-10" src={logo} alt="Genius Car logo" />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                className="p-2 text-slate-700 rounded-md outline-none focus:border-slate-700 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaTimes></FaTimes> : <FaTh></FaTh>}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800  lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
              navbar
                ? "block translate-x-0 opacity-100"
                : "hidden opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col transition-all duration-300 ease-in-out  text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <Link
                to="/"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                About
              </Link>
              <Link
                to="/services"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Contact
              </Link>

              <Link
                to="/login"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Log In
              </Link>

              <div className="relative mt-4 lg:mt-0 lg:mx-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 lg:flex lg:mt-0 lg:-mx-2">
              <div>
                <FaBriefcase></FaBriefcase>
              </div>
              <Link>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-6 py-3 bg-purple-800 text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Appointments
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

/*
<div class="flex space-x-2 justify-center">
  <div>
    <button type="button" class="inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Primary</button>
    <button type="button" class="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Secondary</button>
  </div>
</div>

<div class="flex space-x-2 justify-center">
  <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Click me</button>
</div>
*/
