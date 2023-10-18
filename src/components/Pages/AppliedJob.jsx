import React, { useContext } from "react";
import { JobsContext } from "../Layout/Main";
import { getAppliedJob } from "../../utilities/fakeDB";
import AppliedJobList from "./AppliedJobList";

const AppliedJob = () => {
  const allJobs = useContext(JobsContext);

  const appliedJobs = getAppliedJob();
  let jobsArray = [];
  for (const id in appliedJobs) {
    const foundAppliedJob = allJobs.find((job) => job.id === id);

    if (foundAppliedJob) {
      jobsArray.push(foundAppliedJob);
    }
  }

  console.log(jobsArray);

  return (
    <div>
      {jobsArray.reverse().map((job) => (
        <AppliedJobList key={job.id} job={job}></AppliedJobList>
      ))}
    </div>
  );
};

export default AppliedJob;