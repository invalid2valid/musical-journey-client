import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./DashbordComponent/SideBar";
import Navbar from "../../Shared/NavBar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-36 my-20 mx-5">
          <SideBar></SideBar>
        </div>
        <div className="w-full">
          <h1 className="text-4xl text-center mt-20">Welcome to Dashboard</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
