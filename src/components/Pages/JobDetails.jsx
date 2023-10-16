import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  console.log(jobId);
  return (
    <div>
      <h2>Job Details: {jobId}</h2>
    </div>
  );
};

export default JobDetails;
