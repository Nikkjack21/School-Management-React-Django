import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";


const AddTimeTable = ({ show, close }) => {
  const [classList, setClassList] = useState([]);
  const [subject, setSubject] = useState([]);

  const [addClass, setAddClass] = useState("");
  const [addSubject, setAddSubject] = useState("");
  const [addDay, setAddDay] = useState("");


  const loadClass = () => {
    axios
      .get("http://127.0.0.1:8000/all-class")
      .then((response) => setClassList(response.data));
  };

  const loadSubject = () => {
    axios
      .get("http://127.0.0.1:8000/all-subject-name")
      .then((response) => setSubject(response.data));
  };

  const handleSubmit = async () => {
    await axios
      .post("http://127.0.0.1:8000/add-timetable", {
        class_number: addClass,
        subject_name: addSubject,
        day_name: addDay,
      })
      .then((response) => {
        console.log("RESPONSE", response);
        if (response.status === 201) {
            Swal.fire({
              text:'Subject is added'
            })
      
        }
      })
      .catch((error) => {
        console.log(error);
      });
    close();
  };

  useEffect(() => {
    loadClass();
    loadSubject();
  }, []);
  return (
    <div className="">
      {show ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-70"></div>
            <div className="flex items-center relative -top-28 min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mt-2 w-full  sm:ml-4 sm:text-left">
                    <h4 className="text-lg flex item font-semibold mb-3 text-gray-800">
                      Create Timetable
                    </h4>
                    <div className="w-full flex flex-col mb-3 ">
                      <label htmlFor="">Class name</label>
                      <select
                        name=""
                        id=""
                        className="bg-white border text-sm text-gray-500 px-2 py-1 "
                        onChange={(e) => setAddClass(e.target.value)}
                        value={addClass}
                      >
                        <option hidden value="">
                          --select class--
                        </option>
                        {classList.map((data, id) => (
                          <option key={id} value={data.id}>
                            {data.class_number}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-full flex flex-col mb-3 ">
                      <label htmlFor="">Day</label>
                      <input
                        onChange={(e) => setAddDay(e.target.value)}
                        value={addDay}
                        type="text"
                        name="day_name"
                        placeholder="Enter Day"
                        className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 "
                      />
                    </div>

                    <div className="w-full flex flex-col mb-3 ">
                      <label htmlFor="">Subject name</label>
                      <select
                        name=""
                        id=""
                        className="bg-white border text-sm text-gray-500 px-2 py-1 "
                        onChange={(e) => setAddSubject(e.target.value)}
                      >
                        <option hidden value="">
                          --select Subject--
                        </option>
                        {subject.map((data, id) => (
                          <option key={id} value={data.id}>
                            {data.subject_name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-auto mt-2 p-2.5  text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <button
                        className="w-auto mt-2 p-2.5  text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={close}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AddTimeTable;
