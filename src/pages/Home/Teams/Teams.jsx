import React from "react";
import TeamCarousel from "./TeamCarousel";

const Teams = () => {
  return (
    <div className="mb-10 max-w-screen-lg mx-auto">
      <div className="text-center">
        <h3 className="text-xl lg:text-3xl font-bold text-purple-600">Team</h3>
        <h3 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Meet Our Team
        </h3>
        <p className="my-4 text-slate-500 font-semibold">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="px-3">
        <TeamCarousel></TeamCarousel>
      </div>
    </div>
  );
};

export default Teams;
