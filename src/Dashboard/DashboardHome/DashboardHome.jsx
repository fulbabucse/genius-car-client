import React from "react";

const DashboardHome = () => {
  return (
    <div className="h-screen">
      <marquee
        className="text-3xl font-bold text-orange-500"
        behavior="scroll"
        direction="left"
      >
        Genius Car Admin Panel
      </marquee>
    </div>
  );
};

export default DashboardHome;
