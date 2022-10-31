import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Footer from "../pages/Shared/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <DashboardHeader></DashboardHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
