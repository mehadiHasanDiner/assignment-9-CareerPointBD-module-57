import React, { useContext, useState } from "react";
import Banner from "../PageComponents/Banner";
import JobCategories from "../PageComponents/JobCategories";
import { useNavigate } from "react-router-dom";
import FeaturedJobs from "../PageComponents/FeaturedJobs";
import { JobsContext } from "../Layout/Main";

const Home = () => {
  const allJobs = useContext(JobsContext);
  const [showAll, setShowAll] = useState(true);

  const navigate = useNavigate();

  // console.log(allJobs);

  const handleViewDetails = (job) => {
    navigate(`/${job.id}`);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

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
        {showAll ? (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-16 ">
            {allJobs.slice(0, 4).map((job) => (
              <FeaturedJobs
                job={job}
                key={job.id}
                handleViewDetails={handleViewDetails}
              ></FeaturedJobs>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-16 ">
            {allJobs.map((job) => (
              <FeaturedJobs
                job={job}
                key={job.id}
                handleViewDetails={handleViewDetails}
              ></FeaturedJobs>
            ))}
          </div>
        )}
        <div className="text-center my-4">
          <button onClick={() => handleShowAll()} className="btn-hero">
            {showAll ? "Show All Jobs" : "See Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
