import React from "react";
import Banner from "../PageComponents/Banner";
import JobCategory from "../PageComponents/JobCategory";

const Home = () => {
  return (
    <div>
      <div className="bg-purple-50">
        <Banner />
      </div>
      <JobCategory />
    </div>
  );
};

export default Home;
