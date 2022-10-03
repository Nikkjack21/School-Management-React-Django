import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdDeleteForever } from "react-icons/md";

const StudentInformationComp = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const classList = async () => {
      const response = await axios.get("http://127.0.0.1:8000/all-class");
      setList(response.data);
    };
    classList();
  }, []);

  const [startDate, setStartDate] = useState(null);
  const [newstartDate, setNewStartDate] = useState(null);
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <div>
      <div className="lg:flex lg:gap-1 md:flex md:gap-1 mx-2 mt-5  ">
        <div className="mb-3 xl:w-auto">
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="Student Name"
            name="student_name"
          />
        </div>
        <div className="mb-3 xl:w-auto">
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="Registration No"
            name="reg_number"
          />
        </div>
      </div>
      <div className="lg:flex md:flex mx-2 md:gap-1 ">
        <div className="seond-line mb-3 lg:w-[70%] ">
          <select
            className="form-select 
      block
      lg:w-[90%] md:w-80 
      w-full
      px-3
      py-[.4em]
      text-sm
      font-Poppins
      text-gray-500
     
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
       focus:bg-white  focus:outline-none"
            aria-label=""
          >
            <option defaultValue="" hidden className="">
              --select class--
            </option>
            {list.map((data, id) => (
              <option key={id} className="text-base text-black" value={data.id}>
                {data.class_number}
              </option>
            ))}
          </select>
        </div>

        <div className="seond-line">
          <div className="mb-3 xl:w-auto">
            <input
              type="number"
              className="
        form-control
        block
        w-full
        px-3
        py-1
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
              id=""
              placeholder="Mobile"
              name="mobile"
            />
          </div>
        </div>
      </div>
      <div className="dates lg:flex md:flex md:gap-1 lg:gap-1 mx-2 ">
        <div
          className="Date of birth mb-3
        form-control
        block
        w-full
        
        px-3
        py-1
        
        font-Poppins
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
    "
        >
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            wrapperClassName="w-full"
            isClearable={true}
            placeholderText="Date of birth"
            className="w-full text-sm"
            name="date_of_birth"
          />
        </div>
        <div
          className="admission date mb-3
        form-control
        block
        w-full
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  overflow-x-hidden
    "
        >
          <DatePicker
            selected={newstartDate}
            onChange={(date) => setNewStartDate(date)}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={15}
            className="w-full text-sm"
            scrollableYearDropdown
            wrapperClassName="w-full"
            isClearable={true}
            placeholderText="Admission Date"
            name="admission_date"
          />
        </div>
      </div>

      <div className="third-section flex mx-2 gap-1">
        <div className="gender mb-3 xl:w-auto">
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="Gender"
            name="gender"
          />
        </div>

        <div className=" mb-3 xl:w-auto">
          <input
            type="email"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="Email"
            name="email"
          />
        </div>
      </div>
      <div className="forth-section flex mx-2 gap-1">
        <div className="country mb-3 xl:w-auto">
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="Country"
            name="country"
          />
        </div>

        <div className=" mb-3 xl:w-auto">
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="State"
            name="state"
          />
        </div>
      </div>

      <div className="fifth-section flex mx-2 gap-1">
        <div className="country mb-3 xl:w-auto">
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="City"
            name="city"
          />
        </div>

        <div className=" mb-3 xl:w-auto">
          <input
            type="number"
            className="
        form-control
        block
        w-full
        px-3
        py-1
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
            id=""
            placeholder="Pincode"
            name="pincode"
          />
        </div>
      </div>

      <div className="addres-box mx-2 mb-3">
        <textarea
          name="address"
          rows="2"
          placeholder="Address"
          className="border border-solid border-gray-300 w-full resize-none rounded placeholder:text-sm px-3 py-1
        "
        ></textarea>
      </div>

      <div className="image lg:flex mx-2 gap-2">
        <div className="mb-3 lg:w-3/6 ">
          <label className="form-label inline-block  mb-2 text-sm font-Poppins text-gray-500">
            Image upload
          </label>
          <input
            onChange={imageChange}
            className="form-control 
                block
                w-full
                px-2
                py-1
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="formFileSm"
            type="file"
          />
        </div>

        <div className="w-44 h-44 border-2  flex  ">
          <div className="overflow-hidden relative">
            {selectedImage && (
              <div className="">
                <img
                  className=""
                  src={URL.createObjectURL(selectedImage)}
                  alt={""}
                />
              </div>
            )}
          </div>
        </div>
        {selectedImage ? (
          <button className=" flex align-top" onClick={removeSelectedImage}>
            <MdDeleteForever
              className="motion-safe:animate-pulse  "
              size={25}
              color="red"
            />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StudentInformationComp;
