import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJobList = ({ job }) => {
  const {
    company_name,
    job_title,
    job_type,
    job_shift,
    location,
    salary,
    logo,
    id,
  } = job;
  return (
    <div className="mx-16 md:mx-32 lg:mx-48 ">
      <div className="w-full my-4">
        <div className="border-2 rounded-lg p-4 flex-col items-center md:flex md:flex-row">
          <div className="bg-gray-300 mr-8 h-full p-4 rounded-lg">
            <img className="w-56" src={logo} alt="" />
          </div>

          <div className="w-3/4 ">
            <h3 className="text-xl font-bold my-2">{job_title}</h3>
            <p className="mb-4 text-xl">{company_name}</p>
            <button className="btn btn-outline btn-info cursor-default ">
              {job_type}
            </button>
            <button className="btn btn-outline btn-info ml-4 cursor-default">
              {job_shift}
            </button>
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
          </div>

          <div className="w-1/4 mr-4 text-right">
            {" "}
            <Link to={`/${id}`}>
              <button className="btn-hero">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobList;
