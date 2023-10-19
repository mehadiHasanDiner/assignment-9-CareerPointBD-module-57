import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";

export const JobsContext = createContext([]);
export const LinkToFeatureJob = createContext([]);

const Main = () => {
  const scrollToTarget = () => {
    const targetDiv = document.getElementById("target");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { allJobs } = useLoaderData();

  // console.log(jobCart);
  return (
    <LinkToFeatureJob.Provider value={scrollToTarget}>
      <JobsContext.Provider value={allJobs}>
        <div className="font-serif">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </JobsContext.Provider>
    </LinkToFeatureJob.Provider>
  );
};

export default Main;
