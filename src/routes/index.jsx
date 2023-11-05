import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Assignments from "../pages/Assignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import CreateAssignment from "../pages/CreateAssignment";
import MyAssignments from "../pages/MyAssignments";
import Submitted from "../pages/Submitted";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "assignments",
        element: <Assignments />,
      },
      {
        path: "create_assignment",
        element: <PrivateRoute><CreateAssignment /></PrivateRoute>,
      },
      {
        path: "my_assignments",
        element: <MyAssignments />,
      },
      {
        path: "submitted",
        element: <Submitted />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default routes;
