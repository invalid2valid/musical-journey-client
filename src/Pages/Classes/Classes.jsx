import React, { useEffect, useState } from "react";
import Container from "../../Component/Container";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://summer-school-server-invalid2valid.vercel.app/classesapproved"
    )
      .then((res) => res.json())
      .then((data) => setClassesData(data));
  }, []);

  // console.log(classesData);
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center">Our All Course</h1>
      <p className="text-center border-b-2 w-1/4 mx-auto m-3 rounded-lg border-red-600">
        Learn From The Exparts
      </p>
      <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {classesData.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
