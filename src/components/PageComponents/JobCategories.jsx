import React, { useEffect, useState } from "react";
import JobCategory from "./JobCategory";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);

  return (
    <>
      <div className="mx-16 mt-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Job Category List</h2>
          <p className="leading-10">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="flex flex-col sm:flex-row  sm:justify-between">
          {categories.map((category) => (
            <JobCategory category={category} key={category.id}></JobCategory>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobCategories;
