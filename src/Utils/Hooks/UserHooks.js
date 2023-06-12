import { useState, useEffect } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  // console.log(e);
  useEffect(() => {
    fetch(`http://localhost:8000/user/instructors/`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  //   console.log(users);
  return users;
};

export default useUser;
