import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobsContext } from "../Layout/Main";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import { addToDB } from "../../utilities/fakeDB";

const JobDetails = () => {
  const { jobId } = useParams();
  const allJobs = useContext(JobsContext);
  // console.log(allJobs);

  const [jobDetails, setJobDetails] = useState([]);

  // viewing the job details based on the job ID
  useEffect(() => {
    setJobDetails(allJobs.find((job) => job.id === jobId));
  }, [allJobs]);

  const handleAddToJobCart = () => {
    addToDB(jobId);
  };

  return (
    <div>
      <div className=" mx-16 my-16 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mr-2 col-span-3">
          <p className="py-4 text-justify">
            {" "}
            <span className="font-bold">Job Description:</span>{" "}
            {jobDetails.job_description}
          </p>
          <p className="text-justify">
            {" "}
            <span className="font-bold">Job Responsibility:</span>{" "}
            {jobDetails.job_responsibility}
          </p>
          <p className="py-4">
            <span className="font-bold">Educational Requirements:</span>
          </p>
          <p>{jobDetails.education}</p>
          <p className="py-4">
            <span className="font-bold">Experiences:</span>
          </p>
          <p>{jobDetails.experience}</p>
        </div>
        <div className="">
          <div className="bg-purple-100 rounded-lg py-6 px-3 mt-3">
            <h3 className="text-xl font-bold">Job Details</h3>
            <div className="divider my-2"></div>
            <div className="flex mb-4">
              <CurrencyDollarIcon className="h-5 w-5 text-purple-400" />
              <p>
                {" "}
                <strong>Salary:</strong> {jobDetails.salary} (Per Month)
              </p>
            </div>
            <div className="flex">
              <CalendarDaysIcon className="h-5 w-5 text-purple-400" />
              <p>
                {" "}
                <strong>Job Title:</strong> {jobDetails.job_title}{" "}
              </p>
            </div>
            <h3 className="text-xl font-bold mt-8">Contact Information</h3>
            <div className="divider my-2"></div>
            <div className="flex mb-4">
              <BuildingOfficeIcon className="h-5 w-5 text-purple-400" />
              <p>
                {" "}
                <strong>Organization:</strong> {jobDetails.company_name}
              </p>
            </div>
            <div className="flex mb-4">
              <PhoneIcon className="h-5 w-5 text-purple-400" />
              <p>
                {" "}
                <strong>Phone:</strong> {jobDetails.contact_phone}
              </p>
            </div>
            <div className="flex mb-4">
              <EnvelopeIcon className="h-5 w-5 text-purple-400" />
              <p>
                {" "}
                <strong>Email:</strong> {jobDetails.contact_email}
              </p>
            </div>
            <div className="flex">
              <MapPinIcon className="h-5 w-5 text-purple-400" />
              <p>
                {" "}
                <strong>Address:</strong> {jobDetails.location}, Dhaka,
                Bangladesh
              </p>
            </div>
          </div>
          <button onClick={handleAddToJobCart} className="btn-hero mt-4 w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
