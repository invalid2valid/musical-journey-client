import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Utils/AuthProvider/AuthProvider";

const SideBar = () => {
  const [role, setRole] = useState({});
  const [singleUser, setSingleUser] = useState();

  const { user, setReload, reload } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.email) {
      setSingleUser(user.email);
    }
  }, [user, reload]);

  //   console.log(singleUser);

  useEffect(() => {
    fetch(
      `https://summer-school-server-invalid2valid.vercel.app/getrole/${singleUser}`
    )
      .then((res) => res.json())
      .then((data) => setRole(data))
      //   .then((data) => console.log(typeof data))
      .catch((error) => console.log(error));
    // console.log(e);
  }, [singleUser, reload]);

  //   console.log(user)
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Link to={"/"}>Home</Link>

        {role.role == "admin" && (
          <>
            <Link to={"allusers"}>Users</Link>
            <Link to={"class"}>Classes</Link>
          </>
        )}
        {role.role == "instructor" && (
          <>
            <Link to={"addclass"}>Add Class</Link>
            <Link to={"insclasses"}>My Class</Link>
          </>
        )}
        {role.role == "student" && (
          <>
            <Link to={"selectedclasses"}>Selected Classes</Link>
            <Link to={"/"}>Enrolled Classes</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
