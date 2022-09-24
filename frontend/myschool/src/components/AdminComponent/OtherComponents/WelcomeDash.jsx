import React from "react";
import admin1 from "../../../assets/admin/adminboard1.png";
const WelcomeDash = () => {
  return (
    <div>
      <div className="welcome-msg w-[80%] mx-10 lg:mx-0  
      lg:w-[59%]   relative lg:h-[6em] bg-gradient-to-r from-blue-500 to-sky-100  rounded-md md:mt-10  ">
        <div className="container-div flex justify-between lg:block">
          <div className="mt-3">
            <h1 className="font-Poppins text-sm mx-5 mb-1 text-[#fff88a] font-semibold">
              Welcome to Admin Dashboard
            </h1>
            <h3 className="mx-8 text-sm font-Poppins">We're excited to have you  here.<br /> Start managing now</h3>
          </div>
          <div className="hidden lg:block absolute left-[65%] top-[-30%]">
            <img className=" md:w-44  " src={admin1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDash;
