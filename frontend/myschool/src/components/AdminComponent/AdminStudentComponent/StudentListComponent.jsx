import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const StudentListComponent = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-student")
      .then((response) => setList(response.data));
  }, []);

  return (
    <div className="mx-10">
      <div className=" ">
        <div className="search mt-10 flex justify-between ">
          <div className="flex gap-28">
            <div>
              <input
                placeholder="search student.."
                className="border-b-2 border-zinc-400 outline-none  bg-transparent py-1 placeholder:text-xs  mr-2"
                type="text"
              />
              <button className="align-middle border-b-2  border-zinc-400 px-2 py-[.45em]">
                <FiSearch />{" "}
              </button>
            </div>

            <div>
              <form>
                <select
                  placeholder="search"
                  className=" border-b-2 mr-2 border-zinc-400  bg-transparent   py-[0.6em] text-xs text-gray-500  bg-white w-80"
                  name=""
                  id=""
                >
                  <option className="" hidden value="">
                    --select student--
                  </option>
                  <option className="text-base  text-black bg-white" value="">
                    Student 1
                  </option>
                </select>
                <button className="align-middle border-b-2  border-zinc-400 px-2 py-[0.45em]">
                  <FiSearch />{" "}
                </button>
              </form>
            </div>
          </div>

          <div className="h-5">
            <button className="bg-sky-400 px-7 rounded ">ID Cards</button>
          </div>
        </div>
      </div>
      <div className="student mt-10 flex gap-8 flex-wrap">
        <Link to={"add-student"}>
          <div className="w-36 h-36 mt-5 text-center flex flex-col items-center justify-center rounded-full bg-[#514fab] text-white font-semibold">
            <div>
              <BsPlusLg />
            </div>
            Add Student
          </div>
        </Link>
        {list.map((data, id) => (
          <div
            key={id}
            className="student-list w-44 h-48 rounded-md relative shadow-xl bg-white"
          >
            <div className="flex flex-col items-center relative top-3 ">
              <div className="flex justify-center rounded-full w-20 h-20 mb-3 border  overflow-hidden bg-slate-200">
                {/* <FaUserAlt className=" text-blue-500 mt-3  " size={70} /> */}
                <img
                  className="w-full object-cover h-full "
                  src={data.image}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xs">{data.student_name}</div>
              <div className="text-xs">{data.reg_number}</div>
            </div>
            <div className="student-crud flex gap-1 left-[3.5em] absolute bottom-1">
              <div
                className="text-xs w-7 h-7 rounded-full flex items-center justify-center bg-blue-500 cursor-pointer"
                onClick={() => navigate(`edit-student/${data.id}`)}
              >
                <BsPencil className="text-white" />
              </div>
              <div className="text-xs w-7 h-7 rounded-full flex items-center justify-center bg-red-500">
                <MdDeleteOutline className="text-white" size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentListComponent;
