import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-screen">
      <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div class="border-t-transparent border-solid animate-spin  rounded-full border-purple-600 border-8 w-16 h-16 lg:h-48 lg:w-48"></div>
      </div>
    </div>
  );
};

export default Spinner;
