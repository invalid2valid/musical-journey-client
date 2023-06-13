import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const ClassCard = ({ item }) => {
  const { user, reload } = useContext(AuthContext);
  const [role, setRole] = useState({});
  const [singleUser, setSingleUser] = useState();
  // console.log(singleUser);
  const [isDisable, setIsDisable] = useState(false);
  const notify = () => toast("Class added!");

  useEffect(() => {
    if (user && user.email) {
      setSingleUser(user.email);
    } else {
      setIsDisable(true);
    }
  }, [user, reload]);

  useEffect(() => {
    fetch(
      `https://summer-school-server-invalid2valid.vercel.app/getrole/${singleUser}`
    )
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setRole(data))
      //   .then((data) => console.log(typeof data))
      .catch((error) => console.log(error));
    // console.log(e);
  }, [reload, user]);

  const {
    image,
    name,
    students,
    instructor_name,
    instructor_email,
    available_seats,
    price,
  } = item;
  // console.log(item);
  useEffect(() => {
    if (!available_seats && role.role !== "student") {
      setIsDisable(true);
    }
  }, [user, reload, role]);
  console.log(role);
  const addClassToDatabase = () => {
    fetch(
      "https://summer-school-server-invalid2valid.vercel.app/addselectedclass",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          name,
          students,
          instructor_name,
          instructor_email,
          available_seats,
          price,
          student_email: user.email,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your class saved",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Fade delay={0} cascade damping={1e-2}>
      <div
        className="card w-96 glass "
        style={{
          backgroundColor: available_seats ? "" : "red",
        }}
      >
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Instructor name: {instructor_name}</p>
          <p>Available seats: {available_seats}</p>
          <p>Price: ${price}</p>
          <p>Students: {students}</p>
          <div className="card-actions justify-end">
            <button
              onClick={addClassToDatabase}
              className="btn btn-primary"
              disabled={isDisable}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ClassCard;
