import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
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
    fetch(
      `https://summer-school-server-invalid2valid.vercel.app/getrole/${singleUser}`
    )
      .then((res) => res.json())
      .then((data) => setRole(data))
      //   .then((data) => console.log(typeof data))
      .catch((error) => console.log(error));
    // console.log(e);
  }, [singleUser, reload]);
  const location = useLocation();
  console.log(singleUser, role);

  if (loading) {
    return <Loader />;
  }

  if (role.role == "admin") {
    return children;
  }
  // return <Navigate to="/" replace></Navigate>;
};

export default AdminRoute;
