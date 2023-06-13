import { useState, useEffect } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  // console.log(e);
  useEffect(() => {
    fetch(
      `https://summer-school-server-invalid2valid.vercel.app/user/instructors/`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  //   console.log(users);
  return users;
};

export default useUser;
