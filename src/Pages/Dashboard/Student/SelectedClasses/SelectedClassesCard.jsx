import React, { useEffect } from "react";

const SelectedClassesCard = ({ item, setReload, reload }) => {
  const {
    _id,
    available_seats,
    image,
    instructor_email,
    instructor_name,
    name,
    price,
    students,
  } = item;

  //   console.log(_id);

  const deleteOne = (id) => {
    // fetch(`http://localhost:8000/selectedclasses/64812e9b5d4f51f026815305`, {

    fetch(`http://localhost:8000/selectedclasses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReload(!reload);
      });
  };

  return (
    <div className="card w-96 glass">
      <figure>
        <img src={image} alt="img!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Teachers Email: {instructor_name}</p>
        <p>Email: {instructor_email}</p>
        <p>Seats: {available_seats}</p>
        <p>Price: {price}</p>
        <p>Student: {students}</p>
        <div className="card-actions justify-end">
          <button onClick={() => deleteOne(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedClassesCard;
