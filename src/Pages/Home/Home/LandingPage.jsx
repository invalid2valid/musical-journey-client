import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../Shared/NavBar/Navbar";
import Container from "../../../Component/Container";
import Footer from "../../../Shared/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-16 min-h-[95vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
