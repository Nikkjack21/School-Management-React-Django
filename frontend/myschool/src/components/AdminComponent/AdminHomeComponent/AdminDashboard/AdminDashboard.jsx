import React from "react";
import { BsPeople } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import Marquee from "react-fast-marquee";
import WelcomeDash from "../../OtherComponents/WelcomeDash";

const AdminDashboard = () => {
  return (
    <div >
      <h1 className="text-blue-600    ">This is admin Dashboard</h1>
      <Marquee
        className="font-Poppins mb-4 mt-4 md:text-base text-xs  "
        gradient={false}
        pauseOnClick={true}
        speed={60}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        pariatur velit. In magnam tempore id nemo quis dignissimos impedit
        temporibus? .
      </Marquee>
      <div className="margin-adjust md:mx-10 ">
        <div className="grid md:grid-cols-4 gap-4   ">
          <div className=" w-[80%] mx-10 lg:mx-0   lg:w-[16em] px-5 py-5 bg-[#5554ab] rounded-md text-white">
            <div className="font-Poppins ">
              <div>
                <div className="md:font-Poppins mb-4">Total Students</div>
                <div className="student-icon flex justify-between">
                  <div className="md:mb-3 ">
                    <BsPeople size={23} />
                  </div>
                  <div className="student-count">750</div>
                </div>

                <div className="student-abs flex justify-between ">
                  <div className="text-sm">Today absent</div>
                  <div className="text-sm">45</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[80%] mx-10 lg:mx-0  lg:w-[16em]  px-5 py-5 bg-[#688af6] rounded-md text-white">
            <div className="Total-employees font-Poppins mb-4">
              Total Employees
            </div>
            <div className="flex justify-between">
              <div className="icon_image md:mb-3">
                <MdWorkOutline size={23} />
              </div>
              <div className="employee-count font-Poppins">155</div>
            </div>
            <div className="employee-present flex justify-between font-Poppins">
              <div className="text-sm">Today absent</div>

              <div className="text-sm">4</div>
            </div>
          </div>

          <div className="w-[80%] mx-10 lg:mx-0  lg:w-[16em] px-5 py-5 bg-[#fa8a94] rounded-md text-white">
            03
          </div>
          <div className="w-[80%] mx-10 lg:mx-0  lg:w-[16em] px-5 py-5 bg-[#a5a7da] rounded-md text-white">
            04
          </div>
        </div>

        <div className="welcome-main mt-5 lg:mt-0
         lg:flex lg:justify-between">
          <div className="welcome-left w-full">
            
              <WelcomeDash />
              <div className="left-chart">

              </div>
            
          </div>
          <div className="lg:block welcome-right">
            sample
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
