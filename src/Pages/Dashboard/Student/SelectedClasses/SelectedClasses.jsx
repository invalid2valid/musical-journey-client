import { getItem } from "localforage";
import React, { useEffect, useState } from "react";
import SelectedClassesCard from "./SelectedClassesCard";

const SelectedClasses = () => {
  const [classes, setClasses] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/selectedclasses")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [reload]);

  //   console.log(classes);
  return (
    <div className="mt-20 ">
      <h1 className="m-5 text-4xl font-semibold text-center underline">
        All Selected Classes
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => (
          <SelectedClassesCard
            key={item._id}
            item={item}
            setReload={setReload}
            reload={reload}
          ></SelectedClassesCard>
        ))}
      </div>
    </div>
  );
};

export default SelectedClasses;
