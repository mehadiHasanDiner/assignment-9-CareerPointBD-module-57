import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div className="font-serif">
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
