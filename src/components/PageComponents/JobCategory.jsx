import React from "react";

const JobCategory = ({ category }) => {
  // console.log(category);
  const { category_logo, category_name, job_available } = category;
  return (
    <>
      <div className=" mt-8 m-2">
        <div className="h-60 w-60 relative mb-5">
          <div className="absolute inset-0 bg-purple-400 opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
            <div className="h-full w-full bg-purple-50 rounded-lg shadow-2xl p-6 text-center">
              <img className="w-2/4 mb-6" src={category_logo} alt="" />
              <h3 className="text-xl font-bold my-4">{category_name}</h3>
              <p>{job_available} Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCategory;
