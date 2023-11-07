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
import AssignmentDetails from "../pages/AssignmentDetails";
import UpdateAssignment from "../pages/UpdateAssignment";

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
        loader: () =>
          fetch(
            "https://group-study-server.vercel.app/api/v1/user/assignmentsCount"
          ),
      },
      {
        path: "create_assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "assignment_details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://group-study-server.vercel.app/api/v1/user/assignments/${params.id}`
          ),
      },
      {
        path: "upadate_assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://group-study-server.vercel.app/api/v1/user/assignments/${params.id}`
          ),
      },
      {
        path: "my_assignments",
        element: (
          <PrivateRoute>
            <MyAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "submitted",
        element: (
          <PrivateRoute>
            <Submitted />
          </PrivateRoute>
        ),
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
