import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Utils/AuthProvider/AuthProvider";
import InsClassRow from "./InsClassRow";

const InsClasses = () => {
  const [classes, setClasses] = useState([]);
  const [email, setEmail] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, []);
  //   console.log(email);
  useEffect(() => {
    fetch(
      `https://summer-school-server-invalid2valid.vercel.app/insclasses/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Total Student</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item) => (
              <InsClassRow key={item._key} item={item}></InsClassRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsClasses;
