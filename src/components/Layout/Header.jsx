import React from "react";
import bgHeader from "../../assets/bg-header.png";

const Header = () => {
  return (
    <>
      <div className="mx-16 bg-purple-50 p-2 rounded-md flex justify-between">
        <div className="pl-8 flex flex-col">
          <h1 className="text-5xl font-bold my-4 leading-normal">
            One Step <br /> Closer To Your <br />
            <span className="text-purple-500">Dream Job</span>
          </h1>
          <p className="text-lg pr-16 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="mt-auto">
            <button className="btn-hero mt-4 ">Start Applying</button>
          </div>
        </div>
        <div className="pr-4 ">
          <img className="w-full" src={bgHeader} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
