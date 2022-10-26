import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableContext from "../../../context/TableContext";
import ViewTimetable from "./ViewTimetable";

const TimeTable = () => {
  const [click, setClick] = useState(false);
  const { setClassNum } = useContext(TableContext);

  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-class")
      .then((response) => setList(response.data));
  }, []);

  const setID = (id) => {
    console.log("CLASSID", id);
    setClassNum(id);
  };

  console.log("CLASSLIST", list);

  return (
    <div>
      <div className="flex justify-center  gap-72     lg:h-40 bg-gray-100 items-center ">
        <div className="select-search flex gap-4">
          <div className=" bg-blue-400">
            <select className="px-3 py-2 w-96" name="" id="">
              <option hidden>--select class--</option>
              {
                list.map((item, id)=>(

                  <option  onClick={() => setID(item.id, setClick(true))}
                  key={id} value={item.id} >{item.class_number}</option>
                ))
              }
            </select>
          </div>
          <div>
            <button className="px-3 py-2 bg-blue-400">Search</button>
          </div>
        </div>

        <div className="add-timetable">Add Timetable</div>
      </div>
      {click ? <ViewTimetable /> : null}
    </div>
  );
};

export default TimeTable;
