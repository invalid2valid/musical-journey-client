import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const InstroctorRoute = () => {
  const [role, setRole] = useState({});
  const [singleUser, setSingleUser] = useState();

  const { user, setReload, reload, loading } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.email) {
      setSingleUser(user.email);
    }
  }, [user, reload]);

  //   console.log(singleUser);

  useEffect(() => {
    fetch(`http://localhost:8000/getrole/${singleUser}`)
      .then((res) => res.json())
      .then((data) => setRole(data))
      //   .then((data) => console.log(typeof data))
      .catch((error) => console.log(error));
    // console.log(e);
  }, [singleUser, reload]);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user && role.role == "instructor") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstroctorRoute;
