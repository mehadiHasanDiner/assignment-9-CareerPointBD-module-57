import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";

export const JobsContext = createContext([]);
export const JobsCartContext = createContext([]);

const Main = () => {
  const { jobsArray, allJobs } = useLoaderData();
  const [jobCart, setJobCart] = useState(jobsArray);
  // console.log(jobCart);
  return (
    <JobsCartContext.Provider value={[jobCart, setJobCart]}>
      <JobsContext.Provider value={allJobs}>
        <div className="font-serif">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </JobsContext.Provider>
    </JobsCartContext.Provider>
  );
};

export default Main;
