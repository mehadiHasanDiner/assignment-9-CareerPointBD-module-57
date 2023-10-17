import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Pages/Home.jsx";
import JobDetails from "./components/Pages/JobDetails.jsx";
import getJobsAndJobCart from "./utilities/loaders.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
