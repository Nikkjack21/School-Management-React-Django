import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import DatePicker from "react-datepicker";
import { useEffect } from "react";
import { useState } from "react";
import { data } from "autoprefixer";

const EditStudentComponent = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [newstartDate, setNewStartDate] = useState(null);
  const navigate = useNavigate();

  const [detail, setDetail] = useState("");
  const BASE_URL = "http://127.0.0.1:8000";
  let [selectedImage, setSelectedImage] = useState();

  const [user, setUser] = useState({
    student_name: "",
    reg_number: "",
    gender: "",
    mobile: "",
    image:"",
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
    father_job: "",
    mother_job: "",
    father_mob: "",
    mother_mob: "",
  });

  const {
    student_name,
    reg_number,
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
    father_job,
    mother_job,
    father_mob,
    mother_mob,
  } = user;

  const onInputChnage = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/student-detail/${id}`
      );
      setDetail(response.data);
      setUser(response.data);
    };
    loadUser();
  }, [id]);




  
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/edit-student/${id}`, {
      student_name: student_name,
      reg_number: reg_number,
      gender: gender,
      mobile: mobile,
      Address: Address,
      email: email,
      country: country,
      state: state,
      city: city,
      pincode: pincode,
      father: father,
      mother: mother,
      father_id: father_id,
      mother_id: mother_id,
      father_job: father_job,
      mother_job: mother_job,
      father_mob: father_mob,
      mother_mob: mother_mob,
    });
    console.log("POST", user);
    navigate("/student");
  };

  useEffect(() => {
    const classList = async () => {
      const response = await axios.get("http://127.0.0.1:8000/all-class");
      setList(response.data);
    };
    classList();
  }, []);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };
console.log('YYYYYYYYYY', detail.image);
  return (
    <div>
      EditStudentComponent
      <form onSubmit={onSubmit}>
        <div className="lg:grid lg:grid-cols-2">
          <div className="Student-Info-grid">
            <header className="bg-blue-500 py-1 w-full flex justify-center text-white">
              Student Information
            </header>

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
                  value={student_name}
                  onChange={(e) => onInputChnage(e)}
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
                  value={reg_number}
                  onChange={(e) => onInputChnage(e)}
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
                  disabled={true}
                >
                  <option className="text-base text-black">
                    {detail.class_number}
                  </option>
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
                    value={mobile}
                    onChange={(e) => onInputChnage(e)}
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
        bg-white  bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
      
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                  dateFormat={"dd-MM-yyyy"}
                  disabled
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
                  dateFormat={"dd-MM-yyyy"}
                  disabled
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
                  value={gender}
                  onChange={(e) => onInputChnage(e)}
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
                  value={email}
                  onChange={(e) => onInputChnage(e)}
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
                  value={country}
                  onChange={(e) => onInputChnage(e)}
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
                  value={state}
                  onChange={(e) => onInputChnage(e)}
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
                  value={city}
                  onChange={(e) => onInputChnage(e)}
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
                  value={pincode}
                  onChange={(e) => onInputChnage(e)}
                />
              </div>
            </div>

            <div className="addres-box mx-2 mb-3">
              <textarea
                name="Address"
                rows="2"
                placeholder="Address"
                className="border border-solid border-gray-300 w-full resize-none rounded placeholder:text-sm px-3 py-1"
                value={Address}
                onChange={(e) => onInputChnage(e)}
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
                  name="selectedImage"
                />
              </div>

              <div className="w-44 h-44 border-2  flex  ">
                <div className="overflow-hidden relative">
                  <div className="">
                    {!selectedImage ? (
                      <img
                        className=""
                        src={`${BASE_URL}${detail.image}`}
                        alt={""}
                      />
                    ) : (
                      <img
                        className=""
                        src={URL.createObjectURL(selectedImage)}
                        alt={""}
                      />
                    )}
                  </div>
                </div>
              </div>
              {selectedImage ? (
                <button
                  className=" flex align-top"
                  onClick={removeSelectedImage}
                >
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
          <div className="Parent-info-grid">
            <header className="bg-red-400 py-1 w-full flex justify-center text-white">
              Parent Information
            </header>

            <div className="lg:flex lg:gap-1 md:flex md:gap-1 mx-2 mt-5  ">
              <div className=" xl:w-auto">
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
                  placeholder="father Name"
                  name="father"
                  value={father}
                  onChange={(e) => onInputChnage(e)}
                />
              </div>
              <div className=" xl:w-auto">
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
                  placeholder="Father ID"
                  name="father_id"
                  value={father_id}
                  onChange={(e) => onInputChnage(e)}
                />
              </div>
            </div>

            <div className="lg:flex lg:gap-1 md:flex md:gap-1 mx-2 mt-5  ">
              <div className=" xl:w-auto">
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
                  placeholder="Mother Name"
                  name="mother"
                  value={mother}
                  onChange={(e) => onInputChnage(e)}
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
                  placeholder="Mother ID"
                  name="mother_id"
                  value={mother_id}
                  onChange={(e) => onInputChnage(e)}
                />
              </div>
            </div>
            <div className="lg:flex lg:gap-1 md:flex md:gap-1 mx-2 mt-5  ">
              <div className=" xl:w-auto">
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
                  placeholder="Father Job"
                  name="father_job"
                  value={father_job}
                  onChange={(e) => onInputChnage(e)}
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
                  placeholder="Mother Job"
                  name="mother_job"
                  value={mother_job}
                  onChange={(e) => onInputChnage(e)}
                />
              </div>
            </div>

            <div className="lg:flex lg:gap-1 md:flex md:gap-1 mx-2 mt-5  ">
              <div className=" xl:w-auto">
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
                  placeholder="Father Mobile"
                  name="father_mob"
                  value={father_mob}
                  onChange={(e) => onInputChnage(e)}
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
                  placeholder="Mother Mobile"
                  name="mother_mob"
                  value={mother_mob}
                  onChange={(e) => onInputChnage(e)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:mx-44 lg:mt-5 justify-center gap-2 flex flex-wrap text-white font-semibold  ">
          <button className="bg-blue-500 lg:w-1/6 px-3 py-2 rounded w-full">
            Submit
          </button>
          <button className="bg-red-400 lg:w-1/6 px-3 py-2 rounded w-full">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudentComponent;
