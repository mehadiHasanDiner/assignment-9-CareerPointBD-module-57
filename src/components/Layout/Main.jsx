import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";

export const JobsContext = createContext([]);
export const LinkToFeatureJob = createContext([]);

const Main = () => {
  // const scrollToFeatureSection = (id) => {
  //   const targetDiv = document.getElementById(id);
  //   if (targetDiv) {
  //     targetDiv.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const { allJobs } = useLoaderData();

  // console.log(jobCart);
  return (
    <JobsContext.Provider value={allJobs}>
      <div className="font-serif">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </JobsContext.Provider>
  );
};

export default Main;
