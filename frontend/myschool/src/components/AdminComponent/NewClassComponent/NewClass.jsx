import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

const NewClass = () => {
  const [list, setList] = useState([]);
  const [see, setSee] = useState([]);

  const token = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;
  console.log("token", token);

  // useEffect(() => {
  //   const viewClass = async () => {
  //     await axios
  //       .get("http://127.0.0.1:8000/all-class", {
  //         headers: {
  //           Authorization: `Bearer ${token.access}`,
  //         },
  //       })
  //       .then((response) => {
  //         setList(response.data);
  //       });
  //   };
  //   viewClass();
  // }, [token.access, see]);

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

  //   useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://127.0.0.1:8000/all-class",{
  //       credentials:'include',
  //       headers:{
  //         "Authorization": `Bearer ${token.access}`
  //       }
  //     });
  //     const newData = await response.json();
  //     setList(newData);
  //   };
  //   fetchData();
  // }, [token]);

  const deleteClass = async (id) => {
    const resp = await axios.post(`http://127.0.0.1:8000/delete-class/${id}`);
    setSee(resp);
  };

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
