import React from "react";

const ClassCard = ({ item }) => {
  const {
    image,
    name,
    _id,
    instructor_name,
    instructor_email,
    available_seats,
    price,
  } = item;
  // console.log(item);
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor name: {instructor_name}</p>
        <p>Available seats: {available_seats}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
