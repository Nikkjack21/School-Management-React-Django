import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableContext from "../../../context/TableContext";

const ViewTimetable = () => {
  const [list, setList] = useState([]);
  const { classNumID } = useContext(TableContext);



  console.log("ClassssID", classNumID);
  useEffect(() => {
    const loadDay = async () => {
      const response = await axios
        .get(`http://127.0.0.1:8000/day/${classNumID}`)
        .catch((error) => {
          console.log("ERROR", error);
        });
      setList(response.data);
    };
    loadDay();
  }, [classNumID]);


  return (
    <div className="timetable min-h-screen py-5">
      <div className="overflow-x-auto w-full">
        <table className="mx-auto   max-w-4xl w-full rounded-lg bg-white divide-y divide overflow-hidden">
          <thead>
            <tr className="text-white bg-gray-900 divide-x divide-gray-300">
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center ">
                {" "}
                Days
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center ">
                {" "}
                09:30 am - 10:30 am
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center ">
                {" "}
                10:30 am - 11:30 am
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center ">
                {" "}
                11:45 am - 12:45 pm
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center ">
                {" "}
                01:15 pm - 02:15 pm
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center ">
                {" "}
                02:15 pm - 03:15 pm
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((data, id) => (
              <tr key={id} className="border divide-x divide-gray-300">
                <th className="font-semibold text-sm uppercase px-6 py-4 text-center bg-gray-900 text-white ">
                  {data.day_name}
                </th>
                {data.subject_name.map((sub, id) => (
                  <td className="text-sm text-center"
                   key={id}>{sub.subject_name} </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTimetable;
