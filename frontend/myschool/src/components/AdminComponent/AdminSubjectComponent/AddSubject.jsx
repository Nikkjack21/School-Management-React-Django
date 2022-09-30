import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../src/components/AdminComponent/AdminSubjectComponent/AddSubject.css";
const AddSubject = ({ open, cancel }) => {
  const navigate = useNavigate();
  const [classNum, setClassNum] = useState([]);
  const [subName, setSubName] = useState([]);
  const [selectClass, setSelectClass] = useState("");
  const [selectSub, setSelectSub] = useState("");
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


  const assignSubject = () => {
    axios
      .post("http://127.0.0.1:8000/add-subject", {
        class_number: selectClass,
        subject_name: selectSub,
        marks: marks,
        grade: grade,
      })
      .then((response) => {
        console.log("SUBJECT RESPONSE", response);
        if (response.status === 201) {
          alert("Subjects addedd to class");
        } else {
          alert("something went wrong");
        }
      });
    cancel();
  };



  console.log("CLASS-NUM", classNum);
  console.log("SUB-NAME", subName);
  console.log("CLASS-SELECT", selectClass);
  console.log("SUB-SELECT", selectSub);
  console.log("MARKS", marks);
  console.log("GRADE", grade);

  return (
    <div>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b  border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Assign Subject</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={cancel}
                  >
                    <span className="bg-transparent text-black opacity-70 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto ">
                  <div className="  text-slate-500 text-sm leading-relaxed">
                    <div>
                      <select
                        name="class_number"
                        onChange={(e) => setSelectClass(e.target.value)}
                        className="border w-5/6 outline-0 mb-3"
                        id=""
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
                        id=""
                      >
                        <option hidden value="">
                          select subject
                        </option>
                        {subName.map((item) => (
                          <option
                            key={item.id}
                            onChange={(e) => setSelectSub(e.target.value)}
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
                {/*footer*/}
                <div className="flex border-t items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={cancel}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={assignSubject}
                  >
                    Add Subject
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddSubject;
