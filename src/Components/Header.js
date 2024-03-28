import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">
        <nav className=" py-4 px-2 shadow ">
          <div className="flex justify-between align-middle w-full">
            <div className="w-30%">
              <span className="text-2xl text-black font-semibold">
                Shubham Chopde
              </span>
            </div>
            <div className="flex justify-evenly align-middle w-[60%] text-xl">
              <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">Home</div> 
              <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">About me</div>
              <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">Projects</div>
              <div className="px-3 py-2 hover:bg-orange-300 rounded-lg shadow-orange-500 outline-orange-700 font-semibold">Contact</div>
              <button className="">theme</button>
            </div>
           
          </div>
         
        </nav>
      </div>
    </div>
  );
};

export default Header;
