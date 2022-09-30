import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const navigate = useNavigate();
  const [classNum, setClassNum] = useState("");
  const [grade, setGrade] = useState("");
  const token = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;
console.log('ADD-CLASS-TOKEN', token.access);
  const handleSubmit = (e) => {
    console.log("CLICKED");
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/add-class",
        {
          class_number: classNum,
          class_grade: grade,
        },
        {
          headers: {
            "Authorization": `Bearer ${token.access}`
          },
        }
      )
      .then((response) => {
        console.log("RESPONSE IN ADD", response);
        if (response.status === 201) {
          navigate("/class");
          alert("Class Added");
        } else {
          alert("something went wrong");
        }
      });
  };

  return (
    <div>
      <h1>Place to add class</h1>
      <div className="container  relative mx-28 lg:mx-[30%] lg:my-16 my-20  border-2 w-96 h-96 ">
        <form onSubmit={handleSubmit}>
          <div>
            <header className="w-full h-auto px-3 py-3 flex justify-center text-white font-bold text-2xl bg-gradient-to-r from-red-500  to-red-400 ">
              ADD CLASS
            </header>
            <div className="mx-10 mt-[3em]">
              <div className="mb-5">
                <label className="text-sm text-gray-600" htmlFor="">
                  Class Number:
                </label>
                <input
                  value={classNum}
                  onChange={(e) => setClassNum(e.target.value)}
                  placeholder="Enter class number"
                  className="w-full px-3 py-2 border-2 text-xs outline-gray-400 border-gray-300"
                  type="text"
                  name="class_number"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600" htmlFor="">
                  Class Grade:
                </label>
                <input
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="Enter class grade"
                  className="w-full px-3 py-2 mb-3 text-xs outline-gray-400  border-2 border-gray-300"
                  type="text"
                  name="class_grade"
                />
              </div>
              <div className="mt-7 flex justify-center">
                <button className="px-4 py-2 w-36 rounded text-white font-medium bg-sky-400">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
