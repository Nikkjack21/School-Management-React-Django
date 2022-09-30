import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddSubjectComp = () => {
  const navigate = useNavigate();
  const [classNum, setClassNum] = useState([]);
  const [subName, setSubName] = useState([]);
  const [selectClass, setSelectClass] = useState("");
  const [selectSub, setSelectSub] = useState([]);
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-class")
      .then((response) => setClassNum(response.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-subject-name")
      .then((response) => setSubName(response.data));
  }, []);

  const assignSubject = async (e) => {
    e.preventDefault();
    console.log("ENTERING ASSIGN SUBJECT");
    await axios
      .post(
        "http://127.0.0.1:8000/add-subject",
        {
          class_number: selectClass,
          subject_name: selectSub,
          marks: marks,
          grade: grade,
        }
      )
      .then((response) => {
        console.log("SUBJECT RESPONSE", response);
        if (response.status === 201) {
          navigate("/subject");
          alert("Subjects addedd to class");
        } else {
          alert("something went wrong");
        }
      });
  };

  //   const assignSubject = async(e) => {
  //     e.preventDefault();
  //     const response = await fetch("http://127.0.0.1:8000/add-subject", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         selectClass,
  //         selectSub,
  //         marks,
  //         grade,
  //       }),
  //     });

  //     if (response.status === 400) {
  //       alert("NOT SUCCESSFULL");
  //     } else  {
  //       alert("SUCCESS");
  //     }
  //   };

  console.log("CLASS-NUM", classNum);
  console.log("SUB-NAME", subName);
  console.log("CLASS-SELECT", selectClass);
  console.log("SUB-SELECT", selectSub);
  console.log("MARKS", marks);
  console.log("GRADE", grade);
  return (
    <div>
      <div className="justify-center items-center">
        <div className=" w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b  border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">Assign Subject</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-30 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <form onSubmit={assignSubject}>
              <div className="relative p-4 flex-auto ">
                <div className="  text-slate-500 text-sm leading-relaxed">
                  <div>
                    <select
                      name="class_number"
                      onChange={(e) => setSelectClass(e.target.value)}
                      className="border w-5/6 outline-0 mb-3"
                    
                    >
                      <option hidden value="">
                        select class
                      </option>
                      {classNum.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.class_number}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      onChange={(e) => setSelectSub(e.target.value)}
                      className="border w-5/6 outline-0 mb-3 "
                      name="subject_name"
                     
                    >
                      <option hidden value="">
                        select subject
                      </option>
                      {subName.map((item) => (
                        <option
                          key={item.id}
                          value={item.id}
                        >
                          {item.subject_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      value={marks}
                      onChange={(e) => setMarks(e.target.value)}
                      name="marks"
                      placeholder="Enter marks"
                      type="text"
                      className=" placeholder:text-xs placeholder:font-sans  border mb-3 w-5/6 outline-0"
                    />
                  </div>
                  <div>
                    <input
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      name="grade"
                      placeholder="Enter grade"
                      type="text"
                      className=" placeholder:text-xs placeholder:font-sans  border mb-3 w-5/6 outline-0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex border-t items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add Subject
                </button>
              </div>
            </form>
            {/*footer*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubjectComp;
