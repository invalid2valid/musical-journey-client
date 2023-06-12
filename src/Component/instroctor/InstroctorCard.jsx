import React from "react";
import { Fade } from "react-awesome-reveal";

const InstroctorCard = ({ item }) => {
  return (
    <Fade delay={0} cascade damping={1e-2}>
      <div className="card w-96 glass">
        <figure>
          <img src={item.img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Email: {item.email}</p>
          {/* <p>Available seats: {available_seats}</p>
          <p>Price: ${price}</p>
          <p>Students: {students}</p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Select</button>
          </div> */}
        </div>
      </div>
    </Fade>
  );
};

export default InstroctorCard;
