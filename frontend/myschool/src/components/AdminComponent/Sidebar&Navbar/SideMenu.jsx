import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ item }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <ul className="relative px-1">
        <li className="relative" id="sidenavSecEx2">
          {item.subNav ? (
            <div
              onClick={() => setOpen(!open)}
              className="flex  items-center text-sm py-4 px-6 h-12 hover:bg-blue-500 hover:rounded-md hover:text-white group hover:drop-shadow-2xl hover:font-semibold  text-gray-700 text-ellipsis  transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <div className="w-3 h-3 mr-3 group-hover:scale-125">
                {item.icon}
              </div>
              <span>{item.name}</span>
              {item.subNav ? (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-3 h-3 ml-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  ></path>
                </svg>
              ) : null}
            </div>
          ) : (
            <div
              onClick={() => navigate(item.path)}
              className="flex  items-center text-sm py-4 px-6 h-12 hover:bg-blue-500 hover:rounded-none hover:text-white group hover:drop-shadow-2xl hover:font-semibold  text-gray-700 text-ellipsis whitespace-nowrap rounded cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <div className="w-3 h-3 mr-3 group-hover:scale-125">
                {item.icon}
              </div>
              <span>{item.name}</span>
              {item.subNav ? (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-3 h-3 ml-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  ></path>
                </svg>
              ) : null}
            </div>
          )}

          {open &&
            item.subNav.map((data, id) => (
              <ul
                key={id}
                className="relative  accordion-collapse collapse "
                id="collapseSidenavSecEx2"
                aria-labelledby="sidenavSecEx2"
                data-bs-parent="#sidenavSecExample"
              >
                <li className="relative ">
                  <div
                    onClick={() => navigate(data.path)}
                    className="flex cursor-pointer  items-center text-xs py-4 pl-12 pr-6 h-6  group hover:drop-shadow-2xl hover:font-semibold  text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="primary"
                  >         <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 mr-1 "
                  viewBox="0 0 25 25"
                  
                >
                  <path d="M18 12.5 7.707 23 7 22.293l9.586-9.793L7 2.707 7.707 2 18 12.5z" />
                </svg>
                    {data.name}
                  </div>
                </li>
              </ul>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
