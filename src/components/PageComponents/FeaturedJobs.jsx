import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const FeaturedJobs = ({ job, handleViewDetails }) => {
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
        <div className="flex flex-col">
          <div>
            <img className="w-1/4 mb-8" src={logo} alt="" />
            <h3 className="text-2xl font-bold"> {job_title} </h3>
            <p className="text-xl my-4"> {company_name}</p>
            <button className="btn btn-outline btn-info cursor-default">
              {job_type}
            </button>
            <button className="btn btn-outline btn-info ml-4 cursor-default">
              {job_shift}
            </button>
          </div>
          <div className="flex my-4">
            <p className="pr-6 flex">
              {" "}
              <span>
                <MapPinIcon className="h-5 w-5 " />
              </span>
              {location}, Dhaka, Bangladesh
            </p>
            <p className="flex">
              {" "}
              <span>
                <CurrencyDollarIcon className="h-5 w-5 " />
              </span>
              {"  "}
              Salary: {salary}
            </p>
          </div>
          <div className="mt-auto">
            <button onClick={() => handleViewDetails(job)} className="btn-hero">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
