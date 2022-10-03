import React from "react";
import ParentInformationCOmp from "./ParentInformationCOmp";
import StudentInformationComp from "./StudentInformationComp";

const StudentFormComponent = () => {
  return (
    <div>
      <header className="flex justify-center px-3 py-4">
        <h1 className="text-red-500 font-semibold text-xl">Admission Form</h1>
      </header>
      <form>
        <div className="form lg:grid lg:grid-cols-2  ">
          <div className="student-form  ">
            <header className="bg-blue-500 py-1 w-full flex justify-center text-white">
              Student Information
            </header>
            <StudentInformationComp />
          </div>
          <div className="parent-form mt-5 lg:mt-0 md:mt-0   ">
            <header className="bg-red-400 py-1 w-full flex justify-center text-white">
              Parent Information
            </header>
            <div>
              <ParentInformationCOmp />
            </div>
          </div>
        </div>

        <div className="lg:flex lg:mx-44 lg:mt-5 justify-center gap-2 flex flex-wrap text-white font-semibold  ">
          <button className="bg-blue-500 lg:w-1/6 px-3 py-2 rounded w-full">
            Submit
          </button>
          <button className="bg-red-400 lg:w-1/6 px-3 py-2 rounded w-full">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentFormComponent;
