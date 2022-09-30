import React from "react";
import { FiSearch } from "react-icons/fi";

const AdminStuentComp = () => {
  return (
    <div className="mx-10">
      <div className=" ">
        <div className="search mt-10 flex justify-between ">
          <div className="flex gap-28">
            <div>
              <input
                placeholder="search student.."
                className="border-2 py-1 placeholder:text-xs mr-3"
                type="text"
              />
              <button className="align-middle">
                <FiSearch />{" "}
              </button>
            </div>

            <div>
              <form>
                <select
                  placeholder="search"
                  className="border-2 py-[0.6em] text-xs text-gray-500  bg-white w-80"
                  name=""
                  id=""
                >
                  <option className="" selected hidden value="">
                    search student..
                  </option>
                  <option className="text-lg text-black " value="">
                    Student 1
                  </option>
                </select>
                <button className="align-middle">
                  <FiSearch />{" "}
                </button>
              </form>
            </div>
          </div>

          <div className="h-5">
            <button className="bg-sky-400 px-7 rounded ">ID Cards</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStuentComp;
