import React from "react";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";

const Header = ({ children }) => {
  return (
    <div className="bg-purple-100  ">
      <div className="mx-16 h-52 flex justify-center items-center relative">
        <div className="-mt-8">
          <h2 className="text-center font-bold text-2xl">{children}</h2>
        </div>
        <img className="absolute -left-16 bottom-0" src={bg1} alt="" />
        <img className="absolute -right-16 -top-24" src={bg2} alt="" />
      </div>
    </div>
  );
};

export default Header;
