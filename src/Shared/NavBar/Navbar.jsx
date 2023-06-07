import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Component/Logo/Logo";
import "./navbar.css";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const toLogout = () => {
    logOut();
  };

  const list = (
    /* name, Home, Instructors, Classes, Dashboard and User profile picture. The user profile picture and Dashboard on the navbar are conditional. If the user is signed in, the navbar will show the profile picture; otherwise, it will show the Login button. */
    <>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-orange-400 navitem"
              : "text-black navitem"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-orange-400 navitem"
              : "text-black navitem"
          }
          to={"/instructors"}
        >
          Instructors
        </NavLink>
      </li>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-orange-400 navitem"
              : "text-black navitem"
          }
          to={"/classes"}
        >
          Classes
        </NavLink>
      </li>

      {user ? (
        <>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " border-b-2 border-orange-400 navitem"
                  : "text-black navitem"
              }
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="">
            <button onClick={toLogout} className={"navitem"} to={"/"}>
              Logout
            </button>
          </li>
          <li className="">
            <img
              className="h-10 rounded-full"
              src={user.photoURL}
              data-tooltip-id="id-name"
              data-tooltip-content={user.displayName}
              alt=""
            />{" "}
            <Tooltip id="id-name" />{" "}
          </li>{" "}
        </>
      ) : (
        <>
          {" "}
          <li className="">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " border-b-2 border-orange-400 navitem"
                  : "text-black navitem"
              }
              to={"/login"}
            >
              Log In
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-blue-100 bg-opacity-20 w-full fixed">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {list}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <Logo />
          </Link>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 flex items-center">
              {list}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
