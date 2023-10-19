import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Pages/Home.jsx";
import JobDetails from "./components/Pages/JobDetails.jsx";
import getJobsAndJobCart from "./utilities/loaders.js";
import AppliedJob from "./components/Pages/AppliedJob.jsx";
import Statistics from "./components/Pages/Statistics.jsx";
import Blog from "./components/Pages/Blog.jsx";
import ErrorPage from "./components/Pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getJobsAndJobCart,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`jobsData.json/${params.jobId}`),
      },
      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
