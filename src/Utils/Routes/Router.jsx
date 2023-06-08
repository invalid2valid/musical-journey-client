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
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
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
]);

export default router;
