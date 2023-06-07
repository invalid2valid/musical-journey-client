import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../Pages/Home/Home/LandingPage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPAge";
import SignUp from "../../Pages/Registation/SignUp";
import Login from "../../Pages/Registation/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <h1>Child</h1>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
