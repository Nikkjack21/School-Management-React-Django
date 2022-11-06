import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddStudentComponent = () => {
  const inpRef = useRef();
  const [cls, setCls] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("empToken")
    ? JSON.parse(localStorage.getItem("empToken"))
    : null;

  const [first_name, setfname] = useState("");
  const [last_name, setlname] = useState("");
  const [email, setemail] = useState("");
  const [username, setuname] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgen] = useState("");
  const [mobile, setmobile] = useState("");
  const [Address, setaddress] = useState("");
  const [dob, setDob] = useState("");
  const [jdate, setJdate] = useState("");
  const [country, setCOuntry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [image, setImage] = useState();
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [father_mob, setFmob] = useState("");
  const [mother_mob, setMmob] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/employee/class-id", {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      })
      .then((response) => setCls(response.data.class_number));
  }, [token.access]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/employee/add-student",
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          username: username,
          password: password,
          gender: gender,
          mobile: mobile,
          Address: Address,
          dob: dob,
          jdate: jdate,
          country: country,
          city: city,
          state: state,
          pincode: pincode,
          image: image,
          father: father,
          mother: mother,
          father_mob: father_mob,
          mother_mob: mother_mob,
          class_number: cls.id,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log("RESPONSE", response);
        if (response.status === 201) {
          navigate("/employee-student");
        }
      })
      .catch((error) => {
        alert(error);
        console.log("Error",error);
      });
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const removeImage = (e) => {
    e.preventDefault();
    setImage();
    inpRef.current.value = null;
  };

  console.log("image", image);

  console.log('CLASS-ID', cls);

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
          <div className="flex mx-3  justify-between mb-3 gap-2">
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={(e) => setfname(e.target.value)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={(e) => setlname(e.target.value)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Last Name"
            />
            <input
              type="number"
              name="reg_number"
              disabled
              className="bg-gray-100 border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Registration No."
            />
          </div>
          <div className="flex mx-3  justify-between mb-3 gap-2">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setuname(e.target.value)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="User Name"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Password"
            />
            <select
              name="class_number"
              className="bg-white border text-sm text-gray-500 px-2 py-1 w-96"
              placeholder="select class"
              id=""
            >
              <option className="text-black text-md ">
                {cls.class_number}
              </option>
            </select>
          </div>
          {/* second row */}
          <div className="flex mb-3 justify-evenly gap-2">
            <input
              type="number"
              name="mobile"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Phone No."
            />

            <input
              type="text"
              name="date_of_birth"
              value={dob || ""}
              onChange={(e) => setDob(e.target.value)}
              className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Date of birth"
              id="date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />

            <input
              type="text"
              name="admission_date"
              value={jdate || ""}
              onChange={(e) => setJdate(e.target.value)}
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
                onChange={(e) => setgen(e.target.value)}
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Gender."
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Email"
              />
            </div>
            <div className="grid place-content-center">
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCOuntry(e.target.value)}
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="Country"
              />
              <input
                type="text"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className=" bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="State"
              />
            </div>
            <div className="grid place-content-center">
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                placeholder="City"
              />
              <input
                type="text"
                name="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
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
                onChange={(e) => setaddress(e.target.value)}
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
              onChange={(e) => setFather(e.target.value)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father name."
            />
            <input
              name="father_id"
              // value={father_id}
              // onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father ID."
            />
          </div>

          <div className="grid place-content-center">
            <input
              type="text"
              name="mother"
              value={mother}
              onChange={(e) => setMother(e.target.value)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother name."
            />
            <input
              type="text"
              name="mother_id"
              // value={mother_id}
              // onChange={(e) => inputChange(e)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Mother ID."
            />
          </div>

          <div className="grid place-content-center">
            <input
              type="text"
              name="father_mob"
              value={father_mob}
              onChange={(e) => setFmob(e.target.value)}
              className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
              placeholder="Father Mobile"
            />
            <input
              type="text"
              name="mother_mob"
              value={mother_mob}
              onChange={(e) => setMmob(e.target.value)}
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
