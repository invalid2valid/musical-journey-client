import React, { useContext, useEffect, useState } from "react";
import UserRow from "./UserRow";
import useUser from "../../../../Utils/Hooks/UserHooks";
import { AuthContext } from "../../../../Utils/AuthProvider/AuthProvider";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const { reload, setReload } = useContext(AuthContext);

  //   console.log(user.email);
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [reload]);
  //   const users = useUser(user.email);
  //   console.log(users);

  return (
    <div className="mt-20">
      <div>
        {/* {users.map((user) => (
          <UserRow
            key={user._id}
            user={user}
            email={user.email}
            name={user.name}
            role={user.role}
          ></UserRow>
        ))} */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>index</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Add Admin</th>
                <th>Add Instroctor</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <UserRow
                  key={user._id}
                  index={index + 1}
                  user={user}
                  email={user.email}
                  name={user.name}
                  role={user.role}
                  reload={reload}
                  setReload={setReload}
                ></UserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
