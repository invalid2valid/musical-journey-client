import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center w-full flex justify-center items-center">
      <div className="p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold  text-center">
          Ohhh.. Something is wrong
        </h1>
        <img className=" my-5" src="../../../src/assets/Sketch.png" alt="" />

        <Link
          to={"/"}
          className="border-2 p-5 border-orange-400 rounded-lg shadow-lg"
        >
          {" "}
          Go to Home{" "}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
