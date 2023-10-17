import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobsContext } from "../Layout/Main";
import { getAppliedJob } from "../../utilities/fakeDB";

const JobDetails = () => {
  const { jobId } = useParams();
  const allJobs = useContext(JobsContext);

  const [jobDetails, setJobDetails] = useState([]);

  // viewing the job details based on the job ID
  useEffect(() => {
    setJobDetails(allJobs.find((job) => job.id === jobId));
  }, [allJobs]);

  console.log(jobDetails);

  return (
    <div>
      <h1 className="text-5xl text-center">{jobDetails.company_name}</h1>

      <div>
        <p>Job Description: {jobDetails.job_description}</p>
        <p>Job Responsibility: {jobDetails.job_responsibility}</p>
        <p>Educational Requirements:</p>
        <p>{jobDetails.education}</p>
        <p>Experiences:</p>
        <p>{jobDetails.experience}</p>
      </div>
      <div></div>
    </div>
  );
};

export default JobDetails;
