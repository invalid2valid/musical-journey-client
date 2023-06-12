import React, { useEffect, useState } from "react";
import AllClassesCard from "./AllClassesCard";

const AllClasses = () => {
  const [classesData, setClassesData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/classes")
      .then((res) => res.json())
      .then((data) => setClassesData(data))
      .catch((error) => console.log(error));
  }, [reload]); // Include classesData as a dependency

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-center">Our All Course</h1>
      <div className="grid justify-items-center gap-5 md:grid-cols-2 lg:grid-col-3">
        {classesData.map((item) => (
          <AllClassesCard
            key={item._id}
            item={item}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
