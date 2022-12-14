import React from "react";
import logo from "../../../assets/admin/dashlogo.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { EmpSideBarData } from "./EmpSidebarData";
import EmpSideMenu from "./EmpSideMenu";

const EmpSideDrawer = () => {
  const {  empLogout } = useContext(AuthContext);


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <nav className="h-[3.5em] w-full sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-sky-400 flex justify-between">
        <div className="">
          <img
            className="w-[35%] mt-[5%] md:ml-[10%] md:w-[40%] md:mt-[3%] "
            src={logo}
            alt=""
          />
        </div>

        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div className="">
              <Menu.Button className="inline-flex  truncate w-full  justify-center mt-[8%] md:mx-[-5%]    px-4 py-2 text-xs md:text-sm text-white ] ">
                Instituion Name
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-4"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#/"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#/"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Profile
                      </a>
                    )}
                  </Menu.Item>

                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={empLogout}
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>

      <div className="flex ">
        <div
          className="w-60 h-screen shadow-lg border backdrop-blur-3xl bg-white"
          id="sidenavSecExample"
        >
            {
            EmpSideBarData.map((item,id)=>{
              return <EmpSideMenu  item={item} key={id} />
            })
            }
        </div>

        <div className="w-full h-[100vh] bg-[#f6f7fb]">
          {" "}
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default EmpSideDrawer;
