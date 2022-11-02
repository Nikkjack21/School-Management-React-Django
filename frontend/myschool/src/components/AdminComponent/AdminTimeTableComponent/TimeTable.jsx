import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableContext from "../../../context/TableContext";
import AddTimeTable from "./AddTimeTable";
import ViewTimetable from "./ViewTimetable";

const TimeTable = () => {
  const { setClassNum } = useContext(TableContext);
  const [search, setSearch] = useState(false);

  const [show, setShow] = useState(false);

  const [newList, setNewlist] = useState([]);

  useEffect(() => {
    const fetchClass = async () => {
      const response = await fetch("http://127.0.0.1:8000/all-class");
      const data = await response.json();
      setNewlist(data);
    };
    fetchClass();
  }, []);

  console.log("FETCHCLASS", newList);

  return (
    <div>
      <div className="flex justify-center  gap-72     lg:h-40 bg-gray-100 items-center ">
        <div className="select-search flex gap-4">
          <div className=" bg-blue-400">
            <select
              className="px-3 py-2 w-96"
              name=""
              id=""
              onChange={(e) => setClassNum(e.target.value)}
            >
              <option hidden>--select class--</option>
              {newList.map((item, id) => (
                <option key={id} value={item.id}>
                  {item.class_number}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              onClick={() => setSearch(!search)}
              className="px-3 py-2 bg-blue-400 rounded text-white hover:bg-blue-500"
            >
              Show Timetable
            </button>
          </div>
        </div>

        <button
          onClick={() => setShow(true)}
          className="add-timetable bg-red-400 px-3 py-2 text-white rounded hover:bg-red-500 c"
        >
          Add Timetable
        </button>
      </div>
      {search  ? <ViewTimetable /> : null}

      <div> 
        <AddTimeTable show={show} close={() => setShow(false)} />
      </div>
    </div>
  );
};

export default TimeTable;
