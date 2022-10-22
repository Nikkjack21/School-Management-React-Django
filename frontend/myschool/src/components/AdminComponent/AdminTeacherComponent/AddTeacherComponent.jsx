import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddTeacherComponent = () => {
  const [image, setImage] = useState();
  const inpRef = useRef();
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    class_number: "",
    join_date: "",
    date_of_birth: "",
    gender: "",
    mobile: "",
    address: "",
    salary: "",
    experience: "",
    post_name: "",
    email: "",
  });

  const {
    first_name,
    last_name,
    username,
    password,
    class_number,
    join_date,
    date_of_birth,
    gender,
    mobile,
    address,
    salary,
    experience,
    post_name,
    email,
  } = teacher;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-class")
      .then((response) => setList(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/add-teacher", teacher, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Respo", response);
        if(response.status === 201){
          navigate("/admin-teachers")
          alert('Teacher added')
        }
      });
  };

  const inputChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
    setTeacher({ ...teacher, image: e.target.files[0] });

    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const removeImage = (e) => {
    e.preventDefault();
    setImage();
    inpRef.current.value = null;
  };

  return (
    <div>
      <div>
        <h1 className="flex justify-center mt-8 mb-3 text-2xl text-red-500 font-semibold">
          {" "}
          Teacher Form
        </h1>
        <header
          className="flex justify-between mx-5 mb-3 bg-[#504fac] text-white px-3 py-1 font-semibold text-lg
    "
        >
          <p>Teacher Information</p>
          <p className="text-sm">
            [ <span className=" animate-pulse">*</span>Required]
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="mx-10">
            {/* first row */}
            <div className="flex mx-3  justify-between mb-3 gap-2">
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => inputChange(e)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="First Name"
              />
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => inputChange(e)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Last Name"
              />
              <input
                disabled
                type=""
                name=""
                value={""}
                onChange={(e) => inputChange(e)}
                className="  bg-gray-100 border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="register no."
              />
            </div>
            <div className="flex mx-3  justify-between mb-3 gap-2">
              <input
                type="text"
                name="user_name"
                value={username}
                onChange={(e) => inputChange(e)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="User Name"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => inputChange(e)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Password"
              />
              <select
                name="class_number"
                value={class_number}
                onChange={(e) => inputChange(e)}
                className="bg-white border text-sm text-gray-500 px-2 py-1 w-96"
                placeholder="select class"
                id=""
              >
                <option defaultValue="" hidden>
                  --Select Class--
                </option>
                {list.map((data, id) => (
                  <option key={id} value={data.id} className="text-black text-md ">
                    {data.class_number}
                  </option>
                ))}
              </select>
            </div>  
            {/* second row */}
            <div className="flex mb-3 justify-evenly gap-2">
              <input
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e) => inputChange(e)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Phone No."
              />

              <input
                type="text"
                name="date_of_birth"
                value={date_of_birth}
                onChange={(e) => inputChange(e)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Date of birth"
                id="date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />

              <input
                type="text"
                name="join_date"
                value={join_date}
                onChange={(e) => inputChange(e)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Joining date"
                id="date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
            {/* third row */}
            <div className="grid grid-cols-3 mb-3  ">
              <div className="grid place-content-center">
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={(e) => inputChange(e)}
                  className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Gender."
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => inputChange(e)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Email"
                />
              </div>

              <div className="grid place-content-center">
                <input
                  type="text"
                  name="salary"
                  value={salary}
                  onChange={(e) => inputChange(e)}
                  className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Salary"
                />
                <input
                  type="text"
                  name="experience"
                  value={experience}
                  onChange={(e) => inputChange(e)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="experience"
                />
              </div>

              <div className="grid place-content-start">
                <input
                  type="text"
                  name="post_name"
                  value={post_name}
                  onChange={(e) => inputChange(e)}
                  className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Post name"
                />
              </div>
            </div>
            {/* Fourth row */}
            <div className="grid grid-cols-3 mb-2">
              <div className="grid place-content-center w-96">
                <textarea
                  name="address"
                  value={address}
                  onChange={(e) => inputChange(e)}
                  rows="2"
                  placeholder="Addressss"
                  className="border border-solid border-gray-300 w-auto  resize-none rounded placeholder:text-sm px-3 py-1"
                ></textarea>
              </div>
              {/* IMAGE */}
              <div className="grid place-content-center ">
                <div className="flex items-center border h-9 px-2 truncate  bg-white">
                  <input
                    type="file"
                    ref={inpRef}
                    className=""
                    name="image"
                    onChange={imageChange}
                  />
                </div>
              </div>
              <div className="grid place-content-center row-span-3">
                <div className="flex">
                  <div className=" w-40 h-40  border-2 overflow-hidden">
                    {image && (
                      <img
                        className="object-contain"
                        src={URL.createObjectURL(image)}
                        alt=""
                      />
                    )}
                  </div>
                  {image ? (
                    <button className="flex align-top">
                      <MdDeleteForever
                        className="motion-safe:animate-pulse  "
                        size={25}
                        color="red"
                        onClick={removeImage}
                      />
                    </button>
                  ) : null}
                </div>
              </div>
              {/* IMAGE END */}
            </div>
          </div>

          <div className="flex justify-center gap-1">
            <button className="px-10 py-2 bg-[#504fac] hover:bg-violet-700 rounded-sm text-white">
              Submit
            </button>
            <button className="px-7 py-2 bg-red-400 rounded-sm text-white hover:bg-red-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherComponent;
