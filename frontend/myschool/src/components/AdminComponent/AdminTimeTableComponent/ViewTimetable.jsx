import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableContext from "../../../context/TableContext";

const ViewTimetable = () => {
  const [list, setList] = useState([]);
  const { classNumID } = useContext(TableContext);

  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/day/${classNumID}`)
  //     .then((response) => setList(response.data));
  // }, [classNumID]);

  console.log("TIMETABLE", list);

  console.log("ClassssID", classNumID);
  useEffect(() => {
    const loadDay = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/day/${classNumID}`
      );
      setList(response.data);
    };
    loadDay();
  }, [classNumID]);

  return (
    <div className="timetable min-h-screen py-5">
      <div className="overflow-x-auto w-full">
        <table className="mx-auto   max-w-4xl w-full rounded-lg bg-white divide-y divide overflow-hidden">
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
          {list.map((days, id) => (
            <tr className="border divide-x divide-gray-300">
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center bg-gray-900 text-white ">
                {days.day_name}
              </th>
              {days.subject_name.map((data, id) => (
                <td className="items-center space-y-3 text-center">{data.subject_name}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ViewTimetable;
