import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 shadow-lg z-10 md:opacity-100 opacity-75">
        <div
          className="float-right p-2 bg-purple-100 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open === true ? (
            <XMarkIcon className="w-12 h-12 text-purple-600" />
          ) : (
            <Bars3Icon className="w-12 h-12 text-purple-600" />
          )}
        </div>

        <div className="bg-purple-100 pt-6 pb-12 md:py-2">
          <div>
            <Link to="/">
              <h3 className="text-2xl font-bold md:hidden pl-6">
                CareerPointBD
              </h3>
            </Link>
          </div>
          <div
            className={`md:flex justify-between items-center mx-16 absolute md:static duration-700 ${
              open ? "top-14" : "-top-60"
            }`}
          >
            <div>
              <Link to="/">
                <h3 className="text-2xl font-bold hidden md:block">
                  CareerPointBD
                </h3>
              </Link>
            </div>
            <div className="w-[400px] bg-purple-100">
              <nav className="md:text-center bg-purple-100 md:py-2 p-4 flex flex-col md:flex-row ">
                <Link to="/" className="mx-2 hover:font-bold">
                  Home
                </Link>
                <Link to="/statistics" className="mx-2 hover:font-bold">
                  Statistics
                </Link>
                <Link to="/appliedJob" className="mx-2 hover:font-bold">
                  Applied Jobs
                </Link>
                <Link to="/blog" className="mx-2 hover:font-bold">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="bg-purple-100 p-4">
              <button className="btn-hero"> Start Applying</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
