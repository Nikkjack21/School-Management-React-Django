import React, { useState } from "react";
import logo from "../../../assets/admin/logo.png";
import adminicon from "../../../assets/admin/adminicon.png";
import vector from "../../../assets/admin/loginvector.jpg";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import {  useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


const AdminLogin = () => {
  const {setAuthToken, setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = await fetch('http://127.0.0.1:8000/api/token/',{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    const data = await response.json();
    console.log(data)
    setAuthToken(data); 
    setUser(jwt_decode(data.access))
    localStorage.setItem('authToken', JSON.stringify(data))
    navigate('/admin')

    
   
 

  }

  return (
    <div>
      <div className="flex">
        <div className="w-[58%]">
          <div className="flex justify-center">
            <img
              className="mx-auto absolute w-56 top-28 rounded-md "
              src={logo}
              alt="logo"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="mx-auto absolute top-[35%] left-[26.5%] rounded-full "
              src={adminicon}
              alt="adminicon"
            />
          </div>
          <div className=" flex justify-center">
            <form onSubmit={handleSubmit} className="absolute top-2/4 w-1/5">
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={(e)=>setUsername(e.target.value)}
                  className="border outline-none  p-2 w-full"
                />
              </div>
              <div className="mb-5">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="border outline-none p-2 w-full "
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="text-white font-semibold bg-sky-400 w-[35%] p-2 rounded-[25px]
                    hover:bg-sky-500
                    "
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" h-screen w-[40%] flex-1  text-blue-600 bg-[#039be5] ">
          <div className="flex justify-center">
            <h1
              className="absolute top-24
            text-white f font-medium
            text-4xl"
            >
              Start managing now
            </h1>

            <h1
              className=" text-gray-200 font-sans text-lg top-44
           break-words absolute text-center mx-3 "
            >
              Stop struggling with common tasks and focus on the real choke
              points. Discover a full featured & 100% Free School management
              platform.{" "}
            </h1>
          </div>

          <div className="">
            <img className="mx-auto fixed top-[35%] left-[62%] w-[35%] " src={vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
