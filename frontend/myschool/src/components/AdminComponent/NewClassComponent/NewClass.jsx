import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewClass = () => {
  const [list, setList] = useState([]);
  const [see, setSee] = useState([]);

  const token = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;
  console.log("token", token);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-class", {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      })
      .then((response) => {
        setList(response.data);
      });
  }, [token.access, see]);

  const deleteClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const resp = axios.post(`http://127.0.0.1:8000/delete-class/${id}`);
        Swal.fire("", "class has been deleted");
        setSee(resp);
      }
    });
  };

  console.log('LIST', list)

  return (
    <div className="">
      <h1>Class</h1>
      <div className="classContainer-main flex gap-4 flex-wrap ">
        <div
          className="bg-[#fe838e] hover:drop-shadow-xl rounded-md w-56 h-28
           text-white"
        >
          <Link to={"addclass"}>
            <p className=" relative top-10 left-[6.5em] w-0 ">
              <BsPlusLg />
            </p>
            <p className="relative top-10 left-1/3 w-24">Add Class </p>{" "}
          </Link>
        </div>

        {list.map((item, id) => (
          <div
            key={id}
            className="bg-[#5453ab] rounded-md w-56 h-28 px-5 py-5  text-white"
          >
            <div className="class-name flex justify-between text-sm">
              <div>{item.class_number}</div>

              <div className="name-crud flex justify-end  ">
                <div className="name-edit mr-2">
                  <button>
                    <AiFillEdit />
                  </button>
                </div>

                <div className="name-delete">
                  <button onClick={() => deleteClass(item.id)}>
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </div>
            </div>
            <div className="student-number flex justify-between relative top-3">
              <div>10</div>

              <div className="stud-icon">
                <FaUserGraduate />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default NewClass;
