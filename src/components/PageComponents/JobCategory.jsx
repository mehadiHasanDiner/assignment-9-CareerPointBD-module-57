import React, { useEffect, useState } from "react";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Job Category List</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div>
          {categories.map((category) => (
            <img src={category.category_logo} alt="category" />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobCategory;
