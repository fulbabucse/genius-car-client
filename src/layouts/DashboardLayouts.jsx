import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Footer from "../pages/Shared/Footer/Footer";

const DashboardLayouts = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <DashboardHeader></DashboardHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayouts;
