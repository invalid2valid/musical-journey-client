import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-bold text-2xl text-orange-600">
        Musical <span className="text-blue-600">Journey</span>
      </p>
      <img
        className=" h-10"
        src="https://cdn-icons-png.flaticon.com/512/4472/4472584.png"
        alt=""
      />
    </div>
  );
};

export default Logo;
