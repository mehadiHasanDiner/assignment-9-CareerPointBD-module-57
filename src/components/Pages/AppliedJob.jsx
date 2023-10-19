import React, { useContext, useState } from "react";
import { JobsContext } from "../Layout/Main";
import { getAppliedJob } from "../../utilities/fakeDB";
import AppliedJobList from "./AppliedJobList";
import Header from "../Layout/Header";

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
    setAllAppliedJobs(filterRemoteJob);
  };

  const handleFilterOnsiteJob = () => {
    const filterValue = "Onsite";
    const filterOnsiteJob = jobsArray.filter(
      (job) => job.job_type === filterValue
    );
    setAllAppliedJobs(filterOnsiteJob);
  };

  // console.log(appliedJobs);

  return (
    <div>
      <Header>Applied Jobs</Header>
      <div className="flex justify-end mx-16 my-4">
        <button onClick={handleFilterRemoteJob} className="btn-hero mr-4">
          {" "}
          Remote Job
        </button>
        <button onClick={handleFilterOnsiteJob} className="btn-hero">
          {" "}
          Onsite Job
        </button>
      </div>
      {jobsArray.reverse().map((job) => (
        <AppliedJobList key={job.id} job={job}></AppliedJobList>
      ))}
    </div>
  );
};

export default AppliedJob;
