import React from "react";
import Banner from "../PageComponents/Banner";
import JobCategories from "../PageComponents/JobCategories";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../PageComponents/FeaturedJobs";

const Home = () => {
  const jobsData = useLoaderData();
  console.log(jobsData);
  return (
    <div>
      <div className="bg-purple-50">
        <Banner />
      </div>
      <JobCategories />
      <div>
        <div className="text-center my-16">
          <h2 className="text-4xl font-bold">Featured Jobs</h2>
          <p className="leading-10">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 ">
          {jobsData.map((job) => (
            <FeaturedJobs job={job} key={job.id}></FeaturedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
