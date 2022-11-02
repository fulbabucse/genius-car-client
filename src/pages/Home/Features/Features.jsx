import React from "react";
import check from "../../../assets/icons/check.svg";
import delivery from "../../../assets/icons/deliveryt.svg";
import group from "../../../assets/icons/group.svg";
import person from "../../../assets/icons/person.svg";
import Wrench from "../../../assets/icons/Wrench.svg";

const Features = () => {
  return (
    <div className="mb-10 max-w-screen-lg mx-auto">
      <div className="text-center">
        <h3 className="text-xl lg:text-3xl font-bold text-purple-600">
          Features
        </h3>
        <h3 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Why Choose Us
        </h3>
        <p className="my-4 text-slate-500 font-semibold">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 mx-4 lg:flex justify-center gap-5">
        <div className="border border-gray-500/50 p-3 rounded-lg w-36 space-y-1 h-32 justify-center flex flex-col items-center">
          <img className="" src={check} alt="Features" />
          <h4 className="font-semibold">100% Guranty</h4>
        </div>
        <div className="border border-gray-500/50 p-3 rounded-lg w-36 space-y-1 h-32 justify-center flex flex-col items-center">
          <img className="" src={delivery} alt="Features" />
          <h4 className="font-semibold">Timely Delivery</h4>
        </div>
        <div className="border border-gray-500/50 p-3 rounded-lg w-36 space-y-1 h-32 justify-center flex flex-col items-center">
          <img className="" src={group} alt="Features" />
          <h4 className="font-semibold">Expert Team</h4>
        </div>
        <div className="border border-gray-500/50 p-3 rounded-lg w-36 space-y-1 h-32 justify-center flex flex-col items-center">
          <img className="" src={person} alt="Features" />
          <h4 className="font-semibold">24/7 Support</h4>
        </div>
        <div className="border border-gray-500/50 p-3 rounded-lg w-36 space-y-1 h-32 justify-center flex flex-col items-center">
          <img className="" src={Wrench} alt="Features" />
          <h4 className="font-semibold">Best Equipment</h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
