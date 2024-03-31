import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

const Header = () => {
  const [themeMode, setThemeMode] = useState("light");
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="w-full dark:bg-black dark:text-white transition-all duration-1000">
      <div className="max-w-screen-xl mx-auto">
        <nav className=" py-4 px-2  ">
          <div className="flex justify-between align-middle w-full">
            <div className="w-30%">
              <span className="text-2xl  font-semibold">Shubham Chopde</span>
            </div>
            <div className="flex justify-evenly align-middle w-[60%] text-xl">
              <Link to="/">
                {" "}
                <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">
                  {" "}
                  Home
                </div>{" "}
              </Link>
              <Link to="/aboutme">
                <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">
                  About me{" "}
                </div>
              </Link>
              <Link to="/project">
                <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">
                  {" "}
                  Projects
                </div>
              </Link>
              <Link to="contactus">
                {" "}
                <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">
                  Contact
                </div>
              </Link>
              <div className="item-center">
              
                  <div className="w-full max-w-sm mx-auto flex justify-end mt-[13px]">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={onChangeBtn}
                        checked={themeMode === "dark"}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
