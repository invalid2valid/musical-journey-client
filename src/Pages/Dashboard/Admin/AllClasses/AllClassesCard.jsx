import React, { useEffect, useState } from "react";

const AllClassesCard = ({ item, reload, setReload }) => {
  const [isDeny, setIsDeny] = useState(false);
  const [isApprove, setIsApprove] = useState(false);
  const {
    image,
    name,
    instructor_name,
    instructor_email,
    available_seats,
    price,
    status,
    students,
  } = item;
  // console.log(;item._id)

  const updateStatus = (status) => {
    fetch(`http://localhost:8000/classstatus/${item._id}?status=${status}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReload(!reload);
      });
  };

  useEffect(() => {
    if (status && status == "deny") {
      setIsDeny(true);
      setIsApprove(false);
    }
    if (status && status == "approved") {
      setIsApprove(true);
      setIsDeny(false);
    }
  }, [item, reload]);
  return (
    <div>
      <div
        className="card w-96 glass hover:shadow-lg"
        style={
          {
            // backgroundColor: status=="deny" ? "red" : "",
          }
        }
      >
        <figure>
          <img src={image} alt="img!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p> Name: {instructor_name}</p>
          <p>Email: {instructor_email}</p>
          <p>Seats: {available_seats}</p>
          <p>Status: {status}</p>
          <p>{students}</p>
          <p>{price}</p>
          <div className="card-actions ">
            <button
              onClick={() => updateStatus("approved")}
              disabled={isApprove}
              className="btn btn-primary"
            >
              Approve
            </button>

            <button
              onClick={() => updateStatus("deny")}
              disabled={isDeny}
              className="btn btn-primary"
            >
              Deny
            </button>
            <button disabled={true} className="btn btn-primary">
              feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;
