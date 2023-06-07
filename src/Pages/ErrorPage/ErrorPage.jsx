import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center w-full flex justify-center items-center">
      <div className="p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold  text-center">
          Ohhh.. Something is wrong <br />
          <span className="text-red-400">404 Error</span>
        </h1>
        <img className=" my-5" src="../../../src/assets/Sketch.png" alt="" />

        <Link to={"/"} className="border-2 py-2 px-20  rounded-lg ">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
