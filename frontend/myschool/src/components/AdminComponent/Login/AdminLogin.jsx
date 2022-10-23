import React, { useState } from "react";
import logo from "../../../assets/admin/logo.png";
import adminicon from "../../../assets/admin/adminicon.png";
import employeeIcon from '../../../assets/admin/teacher.png'
import studentIcon from '../../../assets/admin/student.png'
import vector from "../../../assets/admin/loginvector.jpg";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

const AdminLogin = () => {
  const { setAuthToken, setAdmin, setTeacher, setEmpToken } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [check, setCheck] = useState('Admin')

  const { admin } = useContext(AuthContext);

  useEffect(() => {
    if (admin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [admin, navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (check==='Admin'){
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      setAuthToken(data);
      setAdmin(jwt_decode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
      navigate("/admin");

    }else if(check==="Teacher"){
      const response = await fetch("http://127.0.0.1:8000/employee/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      setEmpToken(data)
      setTeacher(jwt_decode(data.access));
      localStorage.setItem("empToken", JSON.stringify(data));
      navigate("/employee-home");
      console.log("teacherrrr")
    }else if(check==="Student"){
      alert('Stuenttt')
    }
    
  };

  return (
    <div className=" h-screen  bg-gradient-to-r from-blue-400 via-blue-800 to-gray-900 appearance-none">
      <div className="flex ">
        <div className="lg:w-[58%] w-full">
          <div className="flex justify-center items-end h-40 w-full  ">
            <img
              className="mx-auto rounded-md lg:w-56 lg:h-16 w-40 h-14  "
              src={logo}
              alt="logo"
            />
          </div>

          <div className="flex w-full h-52 justify-center gap-3 items-end ">
            <img onClick={()=>setCheck('Admin')}
              className=" cursor-pointer border-2 w-20 h-20  border-zinc-300 rounded-full hover:bg-blue-500 "
              src={adminicon}
              alt="adminicon"
            />
            <img onClick={()=>setCheck('Teacher')}
              className=" cursor-pointer border-2 w-20 h-20  border-zinc-300 rounded-full "
              src={employeeIcon}
              alt="Employee Icon"
            />
            <img onClick={()=>setCheck('Student')}
              className=" cursor-pointer border-2 w-20 h-20  border-zinc-300 rounded-full "
              src={studentIcon}
              alt="Student Icon"
            />
          </div>
          <div className=" flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="h-44 flex items-center 
                 lg:absolute lg:top-2/4 lg:w-1/5 "
            >
              <div className="mx-10 lg:mx-0 md:mx-0">
                <div className="mb-3 ">
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="border outline-none p-1 placeholder:text-xs lg:p-2 lg:w-full w-full rounded "
                  />
                </div>
                <div className="mb-5 ">
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border  outline-none p-1 placeholder:text-xs  lg:p-2 w-full rounded "
                  />
                </div>
                <div className="flex justify-center  ">
                  <button
                    className="text-white font-semibold relative  bg-sky-500  shadow-lg lg:w-[35%] w-20 p-1 lg:p-2  rounded-sm group
                  lg:hover:scale-125
                  "
                  >
                    <span className="absolute w-0 group-hover:w-full  transition-all ease-out duration-500 h-full rounded-sm  bg-blue-600 left-0 top-0"></span>
                    <span className="relative">Login </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:block hidden  lg:h-screen lg:w-[40%] flex-1 shadow-2xl  t">
          <div className="flex flex-col ">
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
              <img
                className="mx-auto fixed top-[35%] left-[62%] w-[35%] "
                src={vector}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
