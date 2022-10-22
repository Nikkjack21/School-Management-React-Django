import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { MdDeleteForever } from "react-icons/md";

const EditTeacherComponent = () => {
  const { id } = useParams();
  const { userID } = useContext(AuthContext);
  const [image, setImage] = useState();
  const inpRef = useRef();

  const [first_name, setfname] = useState("");
  const [last_name, setlname] = useState("");
  const [email, setemail] = useState("");
  const [username, setuname] = useState("");
  const [class_number, setcnum] = useState("");
  const [join_date, setjdate] = useState("");
  const [date_of_birth, setdob] = useState("");
  const [gender, setgen] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [salary, setsalary] = useState("");
  const [experience, setexperience] = useState("");
  const [post_name, setpost_name] = useState("");
  const [classname, setcname] = useState("");

  useEffect(() => {
    const loadTeacher = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/teacher-detail/${id}`
      );
      console.log("RESPOOOOONSEEE", response);
      setfname(response.data.user.first_name);
      setlname(response.data.user.last_name);
      setemail(response.data.user.email);
      setuname(response.data.user.username);
      setcnum(response.data.class_number.id);
      setjdate(response.data.join_date);
      setdob(response.data.date_of_birth);
      setgen(response.data.gender);
      setmobile(response.data.mobile);
      setaddress(response.data.address);
      setsalary(response.data.salary);
      setexperience(response.data.experience);
      setpost_name(response.data.post_name);
      setcname(response.data.class_number);
    };
    loadTeacher();
  }, [id]);

  // console.log("first_name", first_name);
  // console.log("classname", classname);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/edit-teacher/${id}`, {
        id: userID.id,
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        // join_date: join_date,
        // address: address,
        gender: gender,
        mobile: mobile,
        salary: salary,
        experience: experience,
        post_name: post_name,
        image: image,
      },{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .then((response) => {
        console.log("RESPOOO", response.data);
      })
      .catch((error) => {
        console.log("Error", error.response);
      });
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
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  First Name:
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={first_name || ""}
                  onChange={(e) => setfname(e.target.value)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Last Name:
                </label>

                <input
                  type="text"
                  name="last_name"
                  value={last_name || ""}
                  onChange={(e) => setlname(e.target.value)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Registration no:
                </label>
                <input
                  disabled
                  type=""
                  name=""
                  className="  bg-gray-100 border cursor-not-allowed placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="register no."
                />
              </div>
            </div>
            <div className="flex mx-3  justify-between mb-3 gap-2">
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Userame:
                </label>

                <input
                  type="text"
                  name="username"
                  value={username || ""}
                  onChange={(e) => setuname(e.target.value)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="User Name"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Password:
                </label>

                <input
                  type="text"
                  name="password"
                  disabled
                  className="bg-gray-100 border cursor-not-allowed placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Class name:
                </label>

                <select
                  name="class_number"
                  value={class_number}
                  onChange={(e) => setcnum(e.target.value)}
                  className="bg-white border text-sm text-gray-500 px-2 py-1 w-96"
                  placeholder="select class"
                  id=""
                >
                  <option className="text-black text-md ">
                    {classname.class_number}
                  </option>
                </select>
              </div>
            </div>
            {/* second row */}
            <div className="flex mb-3 mx-3 justify-evenly gap-2">
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Mobile:
                </label>

                <input
                  type="number"
                  name="mobile"
                  value={mobile || ""}
                  onChange={(e) => setmobile(e.target.value)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Phone No."
                />
              </div>
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Date of birth:
                </label>

                <input
                  disabled
                  type="text"
                  name="date_of_birth"
                  value={date_of_birth}
                  className="bg-gray-100 cursor-not-allowed border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Date of birth"
                  id="date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500" htmlFor="">
                  Join date:
                </label>

                <input
                  type="text"
                  name="join_date"
                  value={join_date || ""}
                  onChange={(e) => setjdate(e.target.value)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Joining date"
                  id="dates"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
            </div>
            {/* third row */}
            <div className="grid grid-cols-3 mb-3 mx-2 ">
              <div className="grid place-content-center">
                <label className="text-xs text-gray-500" htmlFor="">
                  Gender:
                </label>

                <input
                  type="text"
                  name="gender"
                  value={gender || ""}
                  onChange={(e) => setgen(e.target.value)}
                  className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Gender"
                />
                <label className="text-xs text-gray-500" htmlFor="">
                  Email:
                </label>

                <input
                  type="email"
                  name="email"
                  value={email || ""}
                  onChange={(e) => setemail(e.target.value)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Email"
                />
              </div>

              <div className="grid place-content-center">
                <label className="text-xs text-gray-500" htmlFor="">
                  Salary:
                </label>

                <input
                  type="text"
                  name="salary"
                  value={salary || ""}
                  onChange={(e) => setsalary(e.target.value)}
                  className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Salary"
                />
                <label className="text-xs text-gray-500" htmlFor="">
                  Experienceh:
                </label>

                <input
                  type="text"
                  name="experience"
                  value={experience || ""}
                  onChange={(e) => setexperience(e.target.value)}
                  className="bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="experience"
                />
              </div>

              <div className="grid place-content-start">
                <label className="text-xs text-gray-500" htmlFor="">
                  Department:
                </label>

                <input
                  type="text"
                  name="post_name"
                  value={post_name || ""}
                  onChange={(e) => setpost_name(e.target.value)}
                  className="mb-3 bg-white border placeholder:text-sm placeholder:text-gray-500 px-2 py-1 w-96 "
                  placeholder="Post name"
                />
              </div>
            </div>
            {/* Fourth row */}
            <div className="grid grid-cols-3 mb-2 ">
              <div className="grid place-content-center w-96 mx-3">
                <label className="text-xs text-gray-500" htmlFor="">
                  Address:
                </label>

                <textarea
                  name="address"
                  value={address || ""}
                  onChange={(e) => setaddress(e.target.value)}
                  rows="2"
                  placeholder="Addressss"
                  className="border border-solid border-gray-300 w-96  resize-none rounded placeholder:text-sm px-3 py-1"
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

export default EditTeacherComponent;
