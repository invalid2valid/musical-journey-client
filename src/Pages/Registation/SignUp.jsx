import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const [error, setError] = useState("");
  // const [imageURL, setImageURL] = useState(null);
  const from = loacation.state?.from?.pathname || "/";
  const { createUser, googleLogIn, updateNamePhoto } = useContext(AuthContext);

  /* sign up function */
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password1 = form.password1.value;
    const password2 = form.password2.value;
    const photo = form.photoURL.value;

    const userDetails = {
      name,
      email,
      password1,
      password2,
      photo,
    };
    console.log(userDetails);

    if (userDetails.password1 !== userDetails.password2) {
      setError("Password did not match");
    } else {
      const isValidPassword =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/.test(
          userDetails.password1
        );
      if (isValidPassword) {
        console.log("Password is valid.");
        createUser(userDetails.email, userDetails.password1)
          .then((result) => {
            console.log(result.user);
            updateNamePhoto(userDetails.name, userDetails.imageURL);
            // from.reset();
            console.log("from cr user");
            // navigate("/");
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
          });
      } else {
        console.log("Password does not meet the requirements.");
      }
    }
    const userForDatabase = {
      name,
      email,
      role: "student",
    };
    fetch(`http://localhost:8000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userForDatabase),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const clickedGoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        // const userForgoogledata = {
        //   name: user.displayName,
        //   email: user.email,
        //   role: "student",
        // };
        // console.log(userForgoogledata, "fetch google");

        fetch(`http://localhost:8000/users/${user.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            role: "student",
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

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
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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
            type="url"
            placeholder="Photo URL"
            className="input   w-full "
            required
          />

          <input type="Submit" className="input   w-full " />
        </form>
        <div className="divider">OR</div>
        <button onClick={clickedGoogle} className="input  w-full  text-bold ">
          Sign up With Google
        </button>
        <div className="text-center text-red-600 my-5">
          <p> {error} </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
