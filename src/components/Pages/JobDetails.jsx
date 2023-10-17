import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobsArray } = useLoaderData();

  const { jobId } = useParams();
  console.log(jobsArray);
  return (
    <div>
      <h2>Job Details: {jobId}</h2>
    </div>
  );
};

export default JobDetails;
