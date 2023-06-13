import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Container from "../../../Component/Container";
import ClassCard from "../../Classes/ClassCard";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import useUser from "../../../Utils/Hooks/UserHooks";
import InstroctorCard from "../../../Component/instroctor/instroctorCard";

const Home = () => {
  const [classesData, setClassesData] = useState([]);
  const users = useUser();
  // console.log(users);

  useEffect(() => {
    fetch("http://localhost:8000/classesapproved")
      .then((res) => res.json())
      .then((data) => setClassesData(data.slice(0, 6)));
  }, []);

  return (
    <div>
      <Container>
        <AwesomeSlider className="mb-20">
          <div className="relative">
            <div className=" text-center w-full h-full bg-opacity-50 p-20 bg-black absolute z-20 text-white flex flex-col items-center justify-center">
              <p className=" md:text-4xl "> We Will Teach You How To Learn</p>
              <h1 className=" md:text-5xl font-bold text-center">
                BEST SCHOOL & MUSIC TO LEARN SMART WAY
              </h1>
              <p className="md:text-4xl">
                A Theme for Kids , Learning & Course etc.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="text-center w-full h-full bg-opacity-50 p-20 bg-black absolute z-50 text-white flex flex-col items-center justify-center">
              <p className="md:text-4xl"> We Will Teach You How To Learn</p>
              <h1 className=" md:text-5xl font-bold">
                BEST SCHOOL & MUSIC TO LEARN SMART WAY
              </h1>
              <p className="md:text-4xl">
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
            <div className="text-center w-full h-full bg-opacity-50 p-20 bg-black absolute z-50 text-white flex flex-col items-center justify-center">
              <p className="md:text-4xl"> We Will Teach You How To Learn</p>
              <h1 className=" md:text-5xl font-bold">
                BEST SCHOOL & MUSIC TO LEARN SMART WAY
              </h1>
              <p className="md:text-4xl">
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
        <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {classesData.map((item) => (
            <ClassCard key={item._id} item={item}></ClassCard>
          ))}
        </div>

        <h1 className="text-4xl text-center font-semibold my-20 mb-10 border-b-2 rounded-lg w-28 mx-auto border-red-400">
          FAQ
        </h1>
        <div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-200 my-5"
          >
            {/*  question */}
            <div className="collapse-title text-xl font-medium">
              What is musical instruments?
            </div>
            <div className="collapse-content">
              <p>
                Musical instrument | History, Characteristics, Examples ...
                musical instrument, any device for producing a musical sound.
                The principal types of such instruments, classified by the
                method of producing sound, are percussion, stringed, keyboard,
                wind, and electronic.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-200 my-5"
          >
            {/*  question */}
            <div className="collapse-title text-xl font-medium">
              How to learn music?
            </div>
            <div className="collapse-content">
              <p>
                Practice playing notes, chords, and scales on your instrument.
                After you've mastered the concepts of notes, chords, and scales,
                learning how to produce these sounds with your instrument is the
                first step to learning how to play music. Start by practicing
                notes first, then move on to scales, and finally to chords.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-200 my-5"
          >
            {/*  question */}
            <div className="collapse-title text-xl font-medium">
              what is musical instruments?
            </div>
            <div className="collapse-content">
              <p>
                Musical instrument | History, Characteristics, Examples ...
                musical instrument, any device for producing a musical sound.
                The principal types of such instruments, classified by the
                method of producing sound, are percussion, stringed, keyboard,
                wind, and electronic.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-center">
            Our Popular Instroctor
          </h1>
          <p className="text-center border-b-2 w-2/3 mx-auto m-3 rounded-lg border-red-600">
            Learn from the best teachers.
          </p>
          <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {users.slice(0, 6).map((item) => (
              <InstroctorCard key={item._id} item={item}></InstroctorCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
