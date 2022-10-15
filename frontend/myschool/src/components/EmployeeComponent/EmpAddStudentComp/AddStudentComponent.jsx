import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const AddStudentComponent = () => {
  const [image, setImage] = useState();
  const inpRef = useRef();
  const [list, setList] = useState([]);

  const [user, setUser] = useState({
    student_name: "",
    class_number: "",
    reg_number: "",
    admission_date: "",
    image: "",
    gender: "",
    mobile: "",
    Address: "",
    email: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    father: "",
    mother: "",
    father_id: "",
    mother_id: "",
    father_mob: "",
    mother_mob: "",
  });

  const {
    student_name,
    reg_number,
    class_number,
    date_of_birth,
    admission_date,
    gender,
    mobile,
    Address,
    email,
    country,
    state,
    city,
    pincode,
    father,
    mother,
    father_id,
    mother_id,
    father_mob,
    mother_mob,
  } = user;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-class")
      .then((response) => setList(response.data));
  }, []);

  const inputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/employee/add-student", user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("RESPONSE", response);
      });
  };

  const imageChange = (e) => {
    setUser({ ...user, image: e.target.files[0] });

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
      <h1 className="flex justify-center mt-8 mb-3 text-2xl text-red-500 font-semibold">
        {" "}
        Admission Form
      </h1>
      <header
        className="flex justify-between mx-5 mb-3 bg-[#504fac] text-white px-3 py-1 font-semibold text-lg
        "
      >
        <p>Student Information</p>
        <p className="text-sm">
          [ <span className=" animate-pulse">*</span>Required]
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="mx-10">
          {/* first row */}
          <div className="flex justify-evenly mb-3 gap-2">
            <input
              type="text"
              name="student_name"
              value={student_name}
              onChange={(e) => inputChange(e)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Student Name"
            />
            <input
              type="number"
              name="reg_number"
              value={reg_number}
              onChange={(e) => inputChange(e)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Registration No."
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
                <option
                  key={id}
                  className="text-black text-md "
                  value={data.id}
                >
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
              name="admission_date"
              value={admission_date}
              onChange={(e) => inputChange(e)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Admission date"
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
                name="country"
                value={country}
                onChange={(e) => inputChange(e)}
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Country"
              />
              <input
                type="text"
                name="state"
                value={state}
                onChange={(e) => inputChange(e)}
                className=" bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="State"
              />
            </div>
            <div className="grid place-content-center">
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => inputChange(e)}
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="City"
              />
              <input
                type="text"
                name="pincode"
                value={pincode}
                onChange={(e) => inputChange(e)}
                className=" bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Pincode"
              />
            </div>
          </div>
          {/* Fourth row */}
          <div className="grid grid-cols-3 mb-2">
            <div className="grid place-content-center w-96">
              <textarea
                name="Address"
                value={Address}
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

        <div className="flex justify-between mx-5 mb-3 bg-red-400 text-white px-3 py-1 font-semibold text-lg">
          <p>Parent Information</p>
          <p className="text-sm">[Optional]</p>
        </div>
        {/* Fifth row */}
        <div className="grid grid-cols-3 mb-2">
          <div className="grid place-content-center">
            <input
              type="text"
              name="father"
              value={father}
              onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father name."
            />
            <input
              name="father_id"
              value={father_id}
              onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father ID."
            />
          </div>

          <div className="grid place-content-center">
            <input
              type="text"
              name="mother"
              value={mother}
              onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother name."
            />
            <input
              type="text"
              name="mother_id"
              value={mother_id}
              onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother ID."
            />
          </div>

          <div className="grid place-content-center">
            <input
              type="text"
              name="father_mob"
              value={father_mob}
              onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father Mobile"
            />
            <input
              type="text"
              name="mother_mob"
              value={mother_mob}
              onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother Mobile"
            />
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
  );
};

export default AddStudentComponent;
