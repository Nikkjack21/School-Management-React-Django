import React from "react";

const AddStudentComponent = () => {
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

      <form>
        <div className="mx-10">
          <div className="flex justify-evenly mb-3 gap-2">
            <input
              type="text"
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Student Name"
            />
            <input
              type="number"
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Registration No."
            />
            <select
              name=""
              className="bg-white border text-sm text-gray-500 px-2 py-1 w-96"
              placeholder="select class"
              id=""
            >
              <option hidden>--Select Class--</option>
              <option className="text-black text-lg " value="">
                class 1
              </option>
            </select>
          </div>
          <div className="flex mb-3 justify-evenly gap-2">
            <input
              type="number"
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Phone No."
            />

            <input
              type="text"
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Date of birth"
              id="date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />

            <input
              type="date"
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Admission date"
              id="date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>

          <div className="grid grid-cols-3 mb-3  ">
            <div className="grid place-content-center">
              <input
                type="text"
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Gender."
              />
              <input
                type="email"
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Email"
              />
            </div>
            <div className="grid place-content-center">
              <input
                type="text"
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Country"
              />
              <input
                type="text"
                className=" bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="State"
              />
            </div>
            <div className="grid place-content-center">
              <input
                type="text"
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="City"
              />
              <input
                type="text"
                className=" bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Pincode"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 mb-2">
            <div className="grid place-content-center w-96">
              <textarea
                name="address"
                rows="2"
                placeholder="Addressss"
                className="border border-solid border-gray-300 w-auto  resize-none rounded placeholder:text-sm px-3 py-1"
              ></textarea>
            </div>
            <div className="grid place-content-center ">
              <div className="flex items-center border h-9 px-2  bg-white">
                <input type="file" className="" />
              </div>
            </div>
            <div className="grid place-content-center row-span-3">
              <div className="w-40 h-40 bg-blue-500"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mx-5 mb-3 bg-red-400 text-white px-3 py-1 font-semibold text-lg">
          <p>Parent Information</p>
          <p className="text-sm">[Optional]</p>
        </div>
        <div className="grid grid-cols-3 mb-2">
          <div className="grid place-content-center">
            <input
              type="text"
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father name."
            />
            <input
              type="text"
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father ID."
            />
          </div>

          <div className="grid place-content-center">
            <input
              type="text"
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother name."
            />
            <input
              type="text"
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother ID."
            />
          </div>

          <div className="grid place-content-center">
            <input
              type="text"
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father Mobile"
            />
            <input
              type="text"
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother Mobile"
            />
          </div>
        </div>

        <div className="flex justify-center gap-1">
          <button className="px-10 py-2 bg-[#504fac] text-white">Submit</button>
          <button className="px-7 py-2 bg-red-400 text-white">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentComponent;
