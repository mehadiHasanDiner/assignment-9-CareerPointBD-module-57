import React from "react";
import bgHeader from "../../assets/bg-header.png";

const Banner = () => {
  return (
    <>
      <div className="mx-16  p-2 rounded-md flex justify-between items-center py-6">
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-snug">
            One Step <br /> Closer To Your <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-600">
              Dream Job
            </span>
          </h1>
          <p className="text-lg pr-16 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. <br /> Manage all your job
            application from start to finish.
          </p>
          <div className="mt-auto">
            <button className="btn-hero mt-4 ">Start Applying</button>
          </div>
        </div>
        <div className="flex-none w-96">
          <img className="w-full" src={bgHeader} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
