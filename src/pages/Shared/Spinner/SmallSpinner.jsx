import React from "react";

const SmallSpinner = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-purple-600 border-4 w-16 h-16"></div>
      </div>
    </div>
  );
};

export default SmallSpinner;
