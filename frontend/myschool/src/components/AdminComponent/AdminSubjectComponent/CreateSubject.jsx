import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CreateSubject = ({ show, close }) => {
const [sub, setSub] = useState('')
const[subName, setSubName] = useState('')

const addSubjectName = (e) =>{
     axios.post('http://127.0.0.1:8000/add-subject-name',{
        subject_name: subName
    })
    .then((response)=> setSub(response.data))
    close()
}
console.log('SUBJECT_NAME', sub);


const reset=()=>{
    setSub(null)
    setSubName('')
}
useEffect(()=>{
    reset()
},[sub])

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
                    <h4 className="text-lg flex item font-medium text-gray-800">
                      Create Subject
                    </h4>
                    <div className="w-full   ">
                   <input value={subName}
                   onChange={(e)=>setSubName(e.target.value)}
                    type="text"  name="subject_name" placeholder="Enter subject name..." className="w-full px-2 py-2 border-2"  />

                    </div>
                
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-auto mt-2 p-2.5  text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={addSubjectName}
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

export default CreateSubject;
