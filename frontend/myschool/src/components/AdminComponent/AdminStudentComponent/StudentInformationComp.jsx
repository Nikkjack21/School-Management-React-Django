import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StudentInformationComp = () => {
  const [list, setList] = useState([]);

  const [student_name, setStudent_name] = useState("");
  const [class_number, setClass_number] = useState("");
  const [reg_number, setReg_number] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [startDate, setStartDate] = useState(null);
  const [newDob, setNewDob] = useState(null);
  const [newstartDate, setNewStartDate] = useState(null);
  const [admDate, setAdmDate] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [Address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [father_id, setFather_id] = useState("");
  const [mother_id, setMother_id] = useState("");
  const [father_job, setFather_job] = useState("");
  const [mother_job, setMother_job] = useState("");
  const [father_mob, setFather_mob] = useState("");
  const [mother_mob, setMother_mob] = useState("");

  const navigate = useNavigate()



  useEffect(() => {
    const classList = async () => {
      const response = await axios.get("http://127.0.0.1:8000/all-class");
      setList(response.data);
    };
    classList();
  }, []);

  console.log(('LIST', list));

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/add-student",
        {
          student_name: student_name,
          class_number: class_number,
          reg_number: reg_number,
          image: selectedImage,
          admission_date: admDate,
          date_of_birth: newDob,
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
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
            navigate('/student')
          alert("student added");
        } else {
          alert("UNSUCCESSFUL");
        }
      });
  };

  useEffect(() => {
    if (startDate) {
      let date = startDate;
      let newDate = date.toISOString().slice(0, 10);
      setNewDob(newDate);
      console.log("NEW DOB", newDob);
    }
  }, [startDate, newDob]);

  useEffect(() => {
    if (newstartDate) {
      let date = newstartDate;
      let newDate = date.toISOString().slice(0, 10);
      setAdmDate(newDate);
      console.log("NEW ADMISSION", admDate);
    }
  }, [newstartDate, admDate]);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };


  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
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
                  onChange={(e) => setStudent_name(e.target.value)}
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
                  onChange={(e) => setReg_number(e.target.value)}
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
                  onChange={(e) => setClass_number(e.target.value)}
                >
                  <option defaultValue="" hidden className="">
                    --select class--
                  </option>
                  {list.map((data, id) => (
                    <option
                      key={id}
                      className="text-base text-black"
                      value={data.id}
                    >
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
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
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
                  dateFormat={"dd-MM-yyyy"}
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
                  onChange={(e) => setGender(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setCountry(e.target.value)}
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
                  onChange={(e) => setState(e.target.value)}
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
                  onChange={(e) => setCity(e.target.value)}
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
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>

            <div className="addres-box mx-2 mb-3">
              <textarea
                name="address"
                rows="2"
                placeholder="Address"
                className="border border-solid border-gray-300 w-full resize-none rounded placeholder:text-sm px-3 py-1"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setFather(e.target.value)}
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
                  onChange={(e) => setFather_id(e.target.value)}
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
                  onChange={(e) => setMother(e.target.value)}
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
                  onChange={(e) => setMother_id(e.target.value)}
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
                  onChange={(e) => setFather_job(e.target.value)}
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
                  onChange={(e) => setMother_job(e.target.value)}
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
                  onChange={(e) => setFather_mob(e.target.value)}
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
                  onChange={(e) => setMother_mob(e.target.value)}
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

export default StudentInformationComp;
