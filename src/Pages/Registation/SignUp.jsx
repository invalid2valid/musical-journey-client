import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const [error, setError] = useState("");
  const from = loacation.state?.from?.pathname || "/";
  const { creatUser, googleLogIn } = useContext(AuthContext);

  const clickedGoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
    console.log("google clicked");
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="bg-blue-100 md:w-2/4 m-4 p-4 rounded-br-2xl rounded-tl-2xl ">
        <form className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input   w-full "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input   w-full "
            required
          />
          <input
            type="password"
            name="password1"
            placeholder="Password"
            className="input   w-full "
            required
          />
          <input
            type="password"
            name="password2"
            placeholder="Password"
            className="input   w-full "
            required
          />
          <input
            name="photoURL"
            type="text"
            placeholder=""
            className="input   w-full "
            required
          />
          <select className="select  w-full ">
            <option disabled selected>
              Gender:
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input type="Submit" className="input   w-full " />
        </form>
        <div className="divider">OR</div>
        <button onClick={clickedGoogle} className="input  w-full  text-bold ">
          Sign up With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
