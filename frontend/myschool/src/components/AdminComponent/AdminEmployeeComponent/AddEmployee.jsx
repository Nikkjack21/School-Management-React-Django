import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [empName, setEmpname] = useState("");
  const [mobile, setMobile] = useState("");
  const [emptype, setEmptype] = useState("");
  const [image, setImage] = useState("");
  const [joinDate, setjoinDate] = useState("");
  const [admdate, setAdmDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [exp, setExp] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:8000/add-employee",
      {
        emp_name: empName,
        mobile: mobile,
        emp_type: emptype,
        image: image,
        joining_date: joinDate,
        salary: salary,
        gender: gender,
        experience: exp,
        email: email,
        Address: address,
        date_of_birth: admdate,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      );
      console.log(response)
      const status = response.status
      console.log('satus', status);
      if (status === 201){
        navigate('/admin-employee')
      }else{
        alert('WRONGGG')
      }

  };


  return (
    <div>
      <div className="Emp-name">
        <header className="flex justify-center py-5 font-extrabold text-3xl text-red-400">
          Employee Form
        </header>
        <form onSubmit={handleSubmit} className="emp-info mx-4 ">
          <div className="bg-violet-600 mb-3 flex justify-between px-3 py-2 text-white text-lg font-semibold">
            <p>Employee informartion</p>
            <p className="text-sm font-bold flex items-center"> [*Required]</p>
          </div>
          <div className="mx-7 flex flex-wrap gap-4">
            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Employee Name:{" "}
              </label>

              <input
                value={empName}
                onChange={(e) => setEmpname(e.target.value)}
                type="text"
                className="
                placeholder:text-sm
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlInput1"
                placeholder="Employee name"
              />
            </div>

            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Mobile:{" "}
              </label>

              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="number"
                className="
                placeholder:text-sm
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlInput1"
                placeholder="Mobile"
              />
            </div>

            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Employee type:{" "}
              </label>

              <input
                value={emptype}
                onChange={(e) => setEmptype(e.target.value)}
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-sm
      "
                id="exampleFormControlInput1"
                placeholder="Employee type"
              />
            </div>

            <div class="mb-3 w-96">
              <label
                for="formFile"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Upload Image
              </label>
              <input
                //  value={image}
                onChange={(e) => setImage(e.target.files[0])}
                className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
              />
            </div>

            <div class="mt-2">
              <label for="floatingInput" class="text-gray-700 ">
                Join date
              </label>
              <div
                class="datepicker relative form-floating mb-3 xl:w-96"
                data-mdb-toggle-button="false"
              >
                <input
                  type="date"
                  value={joinDate}
                  onChange={(e) => setjoinDate(e.target.value)}
                  class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Select a date"
                  data-mdb-toggle="datepicker"
                />
              </div>
            </div>

            <div class="mt-2">
              <label for="floatingInput" class="text-gray-700 ">
                Date of birth
              </label>
              <div
                class="datepicker relative form-floating mb-3 xl:w-96"
                data-mdb-toggle-button="false"
              >
                <input
                  type="date"
                  value={admdate}
                  onChange={(e) => setAdmDate(e.target.value)}
                  class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Select a date"
                  data-mdb-toggle="datepicker"
                />
              </div>
            </div>

            <div class="mb- lg:w-64">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Gender:{" "}
              </label>

              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-sm
      "
                id="exampleFormControlInput1"
                placeholder="Gender"
              />
            </div>

            <div class="mb- lg:w-64">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Email:{" "}
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="emal"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-sm
      "
                id="exampleFormControlInput1"
                placeholder="Emal"
              />
            </div>

            <div class="mb- lg:w-64">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Experience:{" "}
              </label>

              <input
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-sm
      "
                id="exampleFormControlInput1"
                placeholder="Experience"
              />
            </div>

            <div class="mb- lg:w-64">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                salary:{" "}
              </label>

              <input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                type="number"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-sm
      "
                id="exampleFormControlInput1"
                placeholder="salary"
              />
            </div>

            <div class="mb-3 xl:w-full">
              <label
                for="exampleFormControlTextarea1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Address:
              </label>

              <textarea
                class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none
      "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* 
          <div className="bg-red-400 mb-3 w-full  flex justify-between px-2 py-1 text-white text-lg font-semibold">
            <h1>Additional informartion</h1>
            <h1 className="text-sm font-bold flex items-center"> [Optional]</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="mx-7 flex flex-wrap gap-4">
              <div class="mb-3 xl:w-56">
                <label
                  for="exampleFormControlInput1"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  {" "}
                  Father Name:{" "}
                </label>

                <input
                  value={""}
                  onChange={""}
                  type="text"
                  className="
                placeholder:text-sm
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Father name"
                />
              </div>
            </div>
            <div className="mx-7 flex flex-wrap gap-4">
              <div class="mb-3 xl:w-56">
                <label
                  for="exampleFormControlInput1"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  {" "}
                  Mother Name:{" "}
                </label>

                <input
                  value={""}
                  onChange={""}
                  type="text"
                  className="
                placeholder:text-sm
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Mother name"
                />
              </div>
            </div>

            <div className="mx-7 flex flex-wrap gap-4">
              <div class="mb-3 xl:w-56">
                <label
                  for="exampleFormControlInput1"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  {" "}
                  Religion:{" "}
                </label>

                <input
                  value={""}
                  onChange={""}
                  type="text"
                  className="
                placeholder:text-sm
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Religion"
                />
              </div>
            </div>

            <div className="mx-7 flex flex-wrap gap-4">
              <div class="mb-3 xl:w-56">
                <label
                  for="exampleFormControlInput1"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  {" "}
                  Cast:{" "}
                </label>

                <input
                  value={""}
                  onChange={""}
                  type="text"
                  className="
                placeholder:text-sm
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Cast"
                />
              </div>
            </div>
          </div> */}

          <div className="buttons flex mt-5 gap-3 text-white font-semibold justify-center">
            <button type="submit" className="bg-blue-500 px-10  rounded py-3">
              Submit
            </button>
            <button className="bg-red-400 px-10 rounded py-3">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
