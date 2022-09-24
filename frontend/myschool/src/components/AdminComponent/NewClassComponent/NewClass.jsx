import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from 'axios';

const NewClass = () => {
    const [list, setList] = useState([]);
    const token = JSON.parse(localStorage.getItem("access_token"));
  console.log("token", token);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-class", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setList(response.data);
      });
  }, [token]);

  return (
    <div className="mx-10">
      <h1>Class</h1>
        <div className="classContainer-main flex gap-4 flex-wrap ">
         <div
           className="bg-[#fe838e]  rounded-md w-56 h-28
           text-white"
         >
        
             <p className=" relative top-10 left-[6.5em] w-0 ">
               <BsPlusLg />
             </p>
             <p className="relative top-10 left-1/3 w-24">Add Class </p>{" "}
   
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
                   <AiFillEdit />
                 </div>

                 <div className="name-delete">
                   <RiDeleteBin5Fill />
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

       <div>
       
       </div>
    </div>
  )
}

export default NewClass