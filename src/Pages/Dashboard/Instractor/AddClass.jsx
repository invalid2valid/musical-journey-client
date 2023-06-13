import React, { useContext } from "react";
import { AuthContext } from "../../../Utils/AuthProvider/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  /*
 - Instructor name (read-only) **(use the displayName value of logged in user/instructor)**
- Instructor email (read-only) **(use the email value of logged in user/instructor)**
- Available seats
- Price
- Add button
    */

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const password = form.password.value;
    const name = form.classname.value;
    const image = form.image.value;
    const instructor_name = form.insname.value;
    const instructor_email = form.insemail.value;
    const available_seats = form.seats.value;
    const price = form.price.value;
    const status = "pending";
    const students = 0;

    const classDetails = {
      name,
      image,
      instructor_name,
      instructor_email,
      available_seats,
      status,
      students,
      price,
    };
    // console.log(classDetails);
    fetch("https://summer-school-server-invalid2valid.vercel.app/addclass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(classDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mt-20">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name of Class"
              name="classname"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="url"
              placeholder="imageURL"
              name="image"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="text"
              placeholder="Instructor name"
              name="insname"
              className="input input-bordered w-full max-w-xs"
              value={user?.displayName}
              required
            />
            <input
              type="email"
              placeholder="Instructor email"
              name="insemail"
              className="input input-bordered w-full max-w-xs"
              value={user?.email}
              required
            />
            <input
              type="number"
              placeholder="Available seats"
              name="seats"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="input input-bordered w-full max-w-xs"
              required
            />

            <input
              type="submit"
              className="btn btn-outline btn-primary max-w-[100px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
