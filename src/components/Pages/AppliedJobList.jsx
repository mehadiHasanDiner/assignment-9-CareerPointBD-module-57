import React from "react";

const AppliedJobList = ({ job }) => {
  const { company_name, job_title, job_type, job_shift, location, salary } =
    job;
  return (
    <div className="mx-16 md:mx-32 lg:mx-48 flex items-center">
      <div>
        <h2>Applied Job List</h2>
      </div>
    </div>
  );
};

export default AppliedJobList;
