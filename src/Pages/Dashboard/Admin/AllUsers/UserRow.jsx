import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Utils/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UserRow = ({ user, email, role, name, index, setReload, reload }) => {
  //   const { name, email, role } = user;
  //   console.log(user);
  // const { reload, setReload } = useContext(AuthContext);

  const [btnDisable, setBtnDisable] = useState(false);
  const navigate = useNavigate();

  const handaleButton = (r) => {
    fetch(`http://localhost:8000/user/updaterole?email=${email}&role=${r}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        setReload(!reload);
        // Handle the response from the API
        // navigate("/");
      })
      .catch((error) => {
        // Handle any errors
      });
    console.log(r);
  };

  useEffect(() => {
    if (email === "admin@admin.com") {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, []);
  //   /api/users?email=hazrat@ali.com&role=student
  return (
    <tr className="bg-base-200 ">
      <th>{index}</th>
      <td>{name}</td>
      <td>{role}</td>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <button className="bg-red-100 p-2 rounded-md ">Already Admin</button>
        ) : (
          <button
            className="bg-red-200 p-2 rounded-md "
            onClick={() => handaleButton("admin")}
          >
            Make Admin
          </button>
        )}
      </td>
      {email !== "admin@admin.com" && (
        <td>
          {role === "instructor" ? (
            <button className="bg-red-100 p-2 rounded-md ">
              Already Instructor
            </button>
          ) : (
            <button
              className="bg-red-200 p-2 rounded-md "
              onClick={() => handaleButton("instructor")}
            >
              Make Instructor
            </button>
          )}
        </td>
      )}
      {/* <td>
        {role === "instructor" ? (
          <button className="bg-red-100 p-2 rounded-md ">
            Already Instructor
          </button>
        ) : (
          <button
            className="bg-red-200 p-2 rounded-md "
            onClick={() => handaleButton("instructor")}
          >
            Make Instructor
          </button>
        )}
      </td> */}
    </tr>
  );
};

export default UserRow;
