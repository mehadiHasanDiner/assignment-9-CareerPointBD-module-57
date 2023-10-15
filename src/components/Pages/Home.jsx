import React from "react";
import Banner from "../PageComponents/Banner";
import JobCategories from "../PageComponents/JobCategories";

const Home = () => {
  return (
    <div>
      <div className="bg-purple-50">
        <Banner />
      </div>
      <JobCategories />
    </div>
  );
};

export default Home;
