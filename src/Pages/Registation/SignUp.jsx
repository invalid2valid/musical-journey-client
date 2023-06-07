import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const [error, setError] = useState("");
  const [imageURL, setImageURL] = useState(null);
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
    const photo = form.photoURL.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    const url =
      "https://api.imgbb.com/1/upload?key=ffdfe5e4bf8343c330ab6b652b624de0";

    async () => {
      await fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          setImageURL(imageData.data.url);
          console.log(imageData.data.url);
        });
    };

    const userDetails = {
      name,
      email,
      password1,
      password2,
      imageURL,
    };
    console.log(userDetails);

    if (userDetails.password1 !== userDetails.password2) {
      console.log("Password did not match");
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
            console.log(" from error");
          });
      } else {
        console.log("Password does not meet the requirements.");
      }
    }
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
            type="file"
            placeholder=""
            className="input   w-full "
            required
          />

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
