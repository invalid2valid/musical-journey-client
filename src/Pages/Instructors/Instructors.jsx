import React from "react";
import useUser from "../../Utils/Hooks/UserHooks";
import InstroctorCard from "../../Component/instroctor/instroctorCard";

const Instructors = () => {
  const users = useUser();
  return (
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
  );
};

export default Instructors;
