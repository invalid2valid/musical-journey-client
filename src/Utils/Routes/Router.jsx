import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../Pages/Home/Home/LandingPage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPAge";
import SignUp from "../../Pages/Registation/SignUp";
import Login from "../../Pages/Registation/Login";
import Test from "../../Component/Test";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import Home from "../../Pages/Home/Home/Home";
import AllUsers from "../../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AllClasses from "../../Pages/Dashboard/Admin/AllClasses/AllClasses";
import SelectedClasses from "../../Pages/Dashboard/Student/SelectedClasses/SelectedClasses";
import AddClass from "../../Pages/Dashboard/Instractor/AddClass";
import InsClasses from "../../Pages/Dashboard/Instractor/InsClasses";
// import SelectedClasses from "../../Pages/Dashboard/Student/SelectedClasses/SelectedClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard></Dashboard>,
      // },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      //   {
      //     path: "test",
      //     element: <Test></Test>,
      //   },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "class",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "selectedclasses",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "insclasses",
        element: <InsClasses></InsClasses>,
      },
    ],
  },
]);

export default router;
