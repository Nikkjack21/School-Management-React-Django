import React from "react";
import StudentInformationComp from "./StudentInformationComp";

const StudentFormComponent = () => {
  return (
    <div>
      <header className="flex justify-center px-3 py-4">
        <h1 className="text-red-500 font-semibold text-xl">Admission Form</h1>
      </header>
        <div className="form ">
          <div className="student-form  ">
            <StudentInformationComp />
          </div>
        </div>
    </div>
  );
};

export default StudentFormComponent;
