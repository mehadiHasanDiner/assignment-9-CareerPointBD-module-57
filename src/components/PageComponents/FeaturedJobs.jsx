import React from "react";

const FeaturedJobs = ({ job }) => {
  const {
    company_name,
    job_title,
    logo,
    job_type,
    job_shift,
    location,
    salary,
  } = job;
  return (
    <>
      <div className="border-1  rounded-lg p-6 bg-white shadow-md hover:shadow-xl">
        <img className="w-2/4" src={logo} alt="" />
        <h3 className="text-2xl font-bold my-3"> {job_title} </h3>
        <p className="text-xl my-2"> {company_name}</p>
        <button className="btn btn-outline btn-success">{job_type}</button>
        <button className="btn btn-outline btn-success ml-4">
          {job_shift}
        </button>
      </div>
    </>
  );
};

export default FeaturedJobs;
