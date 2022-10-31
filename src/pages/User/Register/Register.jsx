import React from "react";
import { Link } from "react-router-dom";
import RegisterLogo from "../../../assets/images/login/login.svg";

const Register = () => {
  const handleUserLogIn = (e) => {
    e.preventDefault();
  };
  return (
    <section className="h-screen">
      <div className="container px-6 py-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 flex justify-center">
            <img src={RegisterLogo} className="w-3/5" alt="Register image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h2 className="text-center text-3xl font-bold text-gray-700 uppercase mb-4">
              Register
            </h2>
            <form onSubmit={handleUserLogIn} className="space-y-3">
              <div>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Photo URL"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck1"
                    required
                  />
                  <label
                    className="form-check-label text-gray-800"
                    htmlFor="exampleCheck1"
                  >
                    Check me out
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
            </form>
            <div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>

              <p className="text-md font-semibold text-center">
                Don't have an account?
                <Link
                  to="/login"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
