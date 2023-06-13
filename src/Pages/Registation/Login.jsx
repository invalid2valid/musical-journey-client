import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const [seePass, setSeePass] = useState(true);
  const from = loacation.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const { signIn, googleLogIn } = useContext(AuthContext);

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log("object");
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        form.reset();
        setError(error.message);
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
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="bg-blue-100 md:w-2/4 m-4 p-4 rounded-br-2xl rounded-tl-2xl mt-20">
        <form onSubmit={handlelogin} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input   w-full "
            required
          />
          <div className=" relative flex items-center">
            <input
              type={seePass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input   w-full "
              required
            />
            <div
              className="bg-blue-100 absolute p-3 right-0 rounded-lg"
              onClick={() => setSeePass(!seePass)}
            >
              {seePass ? (
                <FaEyeSlash className="  text-3xl"></FaEyeSlash>
              ) : (
                <FaEye className="  text-3xl"></FaEye>
              )}
            </div>
          </div>

          <input type="Submit" className="input   w-full " />
        </form>
        <div className="divider">OR</div>
        <button
          onClick={clickedGoogle}
          className="input  w-full  text-bold mb-5"
        >
          Log In With Google
        </button>

        <Link className="text-center w-full " to={"/signup"}>
          Dont Have any account? <span className="text-red-600">Sign Up.</span>
        </Link>
        <div className="text-center text-red-600 my-5">
          <p> {error} </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
