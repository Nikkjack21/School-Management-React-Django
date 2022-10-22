import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const EmployeeAddStudent = () => {
  const [title, setTitle]=useState("")
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-student")
      .then((response) => setList(response.data));
  }, []);


  useEffect(()=>{
    setTitle('Add Student')
    document.title=title
  },[title])

  return (
    <div className='mx-7'>
    <div className="flex mt-5 ">
      <input
        type="text"
        className="border placeholder:text-sm p-1"
        placeholder="Search  student"
      />
      <button className="border px-1 bg-sky-400 text-white hover:bg-blue-600">
        search
      </button>
    </div>
    <div className="flex  mt-10  gap-8 flex-wrap">
      <Link to={'/employee-add-student'}>
      <div className="w-36 h-36 mt-5 text-center flex flex-col items-center justify-center rounded-full hover:scale-105 bg-[#514fab] ring-2 text-white font-semibold">
        <div>
          <BsPlusLg />
        </div>
        <button>Add Student</button>
      </div>
      </Link>
      {list.map((item, id) => (
        <div key={id}>
          <div
            
            className="flex border w-48 flex-col justify-center hover:scale-105  shadow-lg rounded-xl "
          >
            <img
              src={item.image}
              alt=""
              className="w-24 h-24 mx-auto rounded-full dark:bg-gray-500 hover:scale-110"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700 ">
              <div className="my-2 space-y-1">
                <h2 className="text-base font-semibold ">{item.student_name.first_name} {item.student_name.last_name}</h2>
                <p className="px-5 text-base  dark:text-gray-600">
                  {item.reg_number}
                </p> 
              </div>
              <div className="flex justify-center pt-2 py-2 space-x-4 align-center">
                <div>
                  <BsPencil />
                </div>
                <div>
                  <MdDeleteOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default EmployeeAddStudent