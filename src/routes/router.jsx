import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import JobApply from "../pages/JobApply";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyApplications from "../pages/MyApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
        loader: () => fetch("http://localhost:3000/jobs"),
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: '/myApplications/:email',
        element: <PrivateRoute>
            <MyApplications></MyApplications>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications?email=${params.email}`),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signin",
        Component: SignIn,
      },
    ],
  },
]);
