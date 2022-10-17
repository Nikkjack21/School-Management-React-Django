import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const EditTeacherComponent = () => {
  const { id } = useParams();
  const { userID } = useContext(AuthContext);

  const [teacher, setTeacher] = useState({
    first_name: "",
    last_name: "",
    username: "",
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

  const onInputChnage = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    const loadTeacher=async()=>{
        const response = await axios.get(`http://127.0.0.1:8000/teacher-detail/${id}`)
        setTeacher(response.data)
    }
    loadTeacher()
  },[id])


console.log('TEAHHER', teacher);

  return <div>EditTeacherComponent</div>;
};

export default EditTeacherComponent;
