const addToDB = (id) => {
  let jobCart = {};
  const storedJob = localStorage.getItem("job-cart");
  if (storedJob) {
    jobCart = JSON.parse(storedJob);
  }
  const appliedJob = jobCart[id];
  if (appliedJob) {
    const newAppliedJob = appliedJob + 1;
    jobCart[id] = newAppliedJob;
  } else {
    jobCart[id] = 1;
  }
  localStorage.setItem("job-cart", JSON.stringify(jobCart));
};

export default addToDB;
