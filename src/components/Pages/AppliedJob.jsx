import React, { useContext, useState } from "react";
import { JobsContext } from "../Layout/Main";
import { getAppliedJob } from "../../utilities/fakeDB";
import AppliedJobList from "./AppliedJobList";
import Header from "../Layout/Header";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AppliedJob = () => {
  let jobsArray = [];

  const allJobs = useContext(JobsContext);
  const [allAppliedJobs, setAllAppliedJobs] = useState(allJobs);

  const appliedJobs = getAppliedJob();
  for (const id in appliedJobs) {
    const foundAppliedJob = allAppliedJobs.find((job) => job.id === id);

    if (foundAppliedJob) {
      jobsArray.push(foundAppliedJob);
    }
  }

  const handleFilterRemoteJob = () => {
    const filterValue = "Remote";
    const filterRemoteJob = jobsArray.filter(
      (job) => job.job_type === filterValue
    );
    if (filterRemoteJob.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There is no Remote job found",
      });
    } else {
      setAllAppliedJobs(filterRemoteJob);
    }
  };

  const handleFilterOnsiteJob = () => {
    const filterValue = "Onsite";
    const filterOnsiteJob = jobsArray.filter(
      (job) => job.job_type === filterValue
    );
    if (filterOnsiteJob.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There is no Onsite job found",
      });
    } else {
      setAllAppliedJobs(filterOnsiteJob);
    }
  };

  // console.log(appliedJobs);

  return (
    <div>
      <Header>Applied Jobs</Header>
      <div className="flex justify-end mx-16 my-4">
        {jobsArray.length > 0 ? (
          <div>
            <button onClick={handleFilterRemoteJob} className="btn-hero mr-4">
              Remote Job
            </button>
            <button onClick={handleFilterOnsiteJob} className="btn-hero">
              Onsite Job
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <p className="text-xl font-bold">You haven't applied any job</p>
            <Link to="/">
              <button className="btn btn-info ml-4">Go Back</button>
            </Link>
          </div>
        )}
      </div>
      {jobsArray.reverse().map((job) => (
        <AppliedJobList key={job.id} job={job}></AppliedJobList>
      ))}
    </div>
  );
};

export default AppliedJob;
