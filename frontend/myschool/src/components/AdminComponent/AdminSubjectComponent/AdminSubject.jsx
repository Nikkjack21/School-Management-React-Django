import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CreateSubject from "./CreateSubject";
import AddSubject from "./AddSubject";
import { Link } from "react-router-dom";

const AdminSubject = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-subject")
      .then((response) => setList(response.data));
  }, []);

  console.log('LIST', list);
  return (
    <div className="main">
      <h1>Subject</h1>
      <div className="classContainer-main flex mb-5  gap-4  ">
        <div
          onClick={() => setShow(true)}
          className="add-box bg-[#6a8bf6]  rounded-md w-56 h-28
           text-white"
        >
          <p className=" relative top-10 left-[6.5em] w-0 ">
            <BsPlusLg />
          </p>
          <p className="  flex justify-center relative top-10 w-auto">
            Create Subject{" "}
          </p>{" "}
        </div>
        <div
          className="add-box bg-[#fe838e]  rounded-md w-56 h-28
           text-white"
        >
          <Link to={"/add-subject"}>
            <p className=" relative top-10 left-[6.5em] w-0 ">
              <BsPlusLg />
            </p>
            <p className="  flex justify-center relative top-10 w-auto">
              Add Subject{" "}
            </p>{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {list.map((item, id) => (
          <div
            key={id}
            className="bg-[#5453ab] rounded-md w-56 h-28 px-5 py-5  text-white"
          >
            <div className="class-name flex justify-between text-sm">
              <div></div>

              <div className="name-crud flex justify-end  ">
                <div className="name-edit mr-2">
                  <button>
                    <AiFillEdit />
                  </button>
                </div>

                <div className="name-delete">
                  <button>
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </div>
            </div>
            <div className="student-number flex justify-center relative top-3">
              <div>{item.class_number.class_number}</div>

              <div className="stud-icon"></div>
            </div>
          </div>
        ))}
      </div>
      <CreateSubject show={show} close={() => setShow(false)} />
      <AddSubject open={open} cancel={() => setOpen(false)} />
    </div>
  );
};

export default AdminSubject;
