import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../Shared/NavBar/Navbar";
import Container from "../../../Component/Container";

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default LandingPage;
