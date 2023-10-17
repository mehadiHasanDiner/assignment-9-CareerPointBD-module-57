import { getAppliedJob } from "./fakeDB";

const getJobsAndJobCart = async () => {
  const allJobsData = await fetch("jobsData.json");
  const allJobs = await allJobsData.json();
  //   console.log(allJobs);

  const appliedJobs = getAppliedJob();
  let jobsArray = [];
  for (const id in appliedJobs) {
    const foundAppliedJob = allJobs.find((job) => job.id === id);

    if (foundAppliedJob) {
      const numberOfApplied = appliedJobs[id];
      foundAppliedJob.numberOfApplied = numberOfApplied;
      jobsArray.push(foundAppliedJob);
    }
  }
  return { jobsArray, allJobs };
};

export default getJobsAndJobCart;
