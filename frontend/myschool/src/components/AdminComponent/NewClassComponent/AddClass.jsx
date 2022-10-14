import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const navigate = useNavigate();
  const [classNum, setClassNum] = useState("");
  const [grade, setGrade] = useState("");
  const [teacher, setTeacher] = useState([]);
  const [selectTeacher, setSelectTeacher] = useState("");

  const token = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;

  console.log("teacher", selectTeacher);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/add-class",
        {
          class_number: classNum,
          class_grade: grade,
          class_teacher: selectTeacher,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 400) {
          console.log('iiiiiffffffffff');
          navigate("/class");
          alert("Class Added");
        } else {
          console.log('elseeeeeeeeeeeeee');
          navigate("/class");
          alert("something went wrong");
        }
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/employee/all-teachers")
      .then((response) => setTeacher(response.data));
  }, []);
  console.log(teacher);

  return (
    <div className="">
      <h1>Place to add class</h1>
      <div className="container shadow-lg relative mx-28 lg:mx-[30%] lg:my-16 my-20 border w-96 h-96  ">
        <form onSubmit={handleSubmit}>
          <div className="">
            <header className="w-full h-auto px-3 backdrop-filter  py-3 flex rounded-sm justify-center text-white font-bold text-2xl bg-gradient-to-r from-red-500  to-red-400 ">
              ADD CLASS
            </header>
            <div className="mx-10 mt-[3em]">
              <div className="mb-5">
                <label className="text-sm text-gray-600">Class Number:</label>
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
                  Class Teacher:
                </label>
                <select
                  onChange={(e) => setSelectTeacher(e.target.value)}
                  className="w-full px-3 py-2 mb-3 text-xs bg-white border-2 border-gray-300"
                >
                  <option className="text-gray-500" hidden>
                    Select teacher
                  </option>
                  {teacher.map((item, id) => (
                    <option key={id} value={item.id}>
                      {item.teacher_name}
                    </option>
                  ))}
                </select>
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

              <div className="mt-7 flex justify-center ">
                <button className="px-4 py-2 w-36 rounded text-white font-medium bg-sky-400 hover:bg-sky-500">
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
