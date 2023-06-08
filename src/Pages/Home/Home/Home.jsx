import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Container from "../../../Component/Container";

const Home = () => {
  return (
    <div>
      <Container>
        <AwesomeSlider className="mb-20">
          <div className="relative">
            <div className=" w-full h-full bg-opacity-50 p-20 bg-black absolute z-20 text-white flex flex-col items-center justify-center">
              <p className="text-4xl"> We Will Teach You How To Learn</p>
              <h1 className=" text-5xl font-bold">
                BEST SCHOOL & MUSIC TO LEARN SMART WAY
              </h1>
              <p className="text-4xl">
                A Theme for Kids , Learning & Course etc.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="relative">
            <div className=" w-full h-full bg-opacity-50 p-20 bg-black absolute z-50 text-white flex flex-col items-center justify-center">
              <p className="text-4xl"> We Will Teach You How To Learn</p>
              <h1 className=" text-5xl font-bold">
                BEST SCHOOL & MUSIC TO LEARN SMART WAY
              </h1>
              <p className="text-4xl">
                A Theme for Kids , Learning & Course etc.
              </p>
            </div>
            <img
              className=" object-cover"
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="relative">
            <div className=" w-full h-full bg-opacity-50 p-20 bg-black absolute z-50 text-white flex flex-col items-center justify-center">
              <p className="text-4xl"> We Will Teach You How To Learn</p>
              <h1 className=" text-5xl font-bold">
                BEST SCHOOL & MUSIC TO LEARN SMART WAY
              </h1>
              <p className="text-4xl">
                A Theme for Kids , Learning & Course etc.
              </p>
            </div>
            <img
              className=" object-fill"
              src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </AwesomeSlider>

        <h1 className="text-4xl font-semibold text-center">
          Our Popular Course
        </h1>
        <p className="text-center border-b-2 w-2/3 mx-auto m-3 rounded-lg border-red-600">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text
        </p>
      </Container>
    </div>
  );
};

export default Home;
