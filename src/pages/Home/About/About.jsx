import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <section className="my-20">
      <div className="container flex items-center w-full mx-auto lg:flex-row flex-col">
        <div className="w-1/2 relative">
          <img src={person} alt="" className="w-full lg:w-4/5 rounded-xl" />

          <img
            src={parts}
            alt=""
            className="w-full lg:w-3/5 absolute right-6 top-32 border-8 border-white rounded-xl"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center space-y-3">
          <h3 className="text-xl lg:text-3xl font-bold text-purple-600">
            About Us
          </h3>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-800">
            We are qualified <br /> & of experience <br /> in this field
          </h3>
          <p className="text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-lg">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-3 bg-purple-800 text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
