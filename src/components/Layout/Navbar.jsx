import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-purple-50 py-6">
        <div className="flex justify-between items-center mx-16">
          <div>
            <h3 className="text-2xl font-bold">CareerPointBD</h3>
          </div>
          <nav className="text-center py-2">
            <Link to="/" className="mx-2">
              Home
            </Link>
            <Link to="/statistics" className="mx-2">
              Statistics
            </Link>
            <Link to="/appliedJob" className="mx-2">
              Applied Jobs
            </Link>
            <Link to="/blog" className="mx-2">
              Blog
            </Link>
          </nav>
          <div>
            <button className="btn-hero">Start Applying</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
