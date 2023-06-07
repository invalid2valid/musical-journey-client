import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const from = loacation.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const { signIn, googleLogIn } = useContext(AuthContext);

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // form.reset();
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        // form.reset();
        console.log(error.message);
      });
  };

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
    <div className="flex justify-center ">
      <div className="bg-blue-100 md:w-2/4 m-4 p-4 rounded-br-2xl rounded-tl-2xl mt-20">
        <form onSubmit={handlelogin} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input   w-full "
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input   w-full "
            required
          />

          <input type="Submit" className="input   w-full " />
        </form>
        <div className="divider">OR</div>
        <button
          onClick={clickedGoogle}
          className="input  w-full  text-bold mb-5"
        >
          Log In With Google
        </button>

        <Link className="text-center w-full text-red-500" to={"/signup"}>
          Dont Have any account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
