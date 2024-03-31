import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLink } from "react-icons/io5";

const Projects = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="max-w-screen-xl  mx-auto   py-8">
        <div className="">
         
          <div className="flex p-4 flex-wrap  justify-start gap-12 align-middle">
            <div className="border max-w-[300px] rounded-lg p-4">
              <img
                src="https://www.codingnepalweb.com/wp-content/uploads/2022/09/10-best-beginner-to-intermediate-js-projec-fix.jpg"
                alt=""
              />
              <h1 className="py-2 text-2xl font-bold text-left">
                Project Name
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis modi corporis enim neque quam, dolorem minus dolore
                obcaecati itaque non ne{" "}
              </p>
              <p className="flex">
                {" "}
                <button className="flex gap-2 justify-center align-middle items-center py-2 px-3 bg-green-400 rounded-xl mt-2  mr-2 text-white font-bold text-sm hover:text-black">
                  {" "}
                  <BsGithub className="text-2xl hover:text-black"/> Source Code{" "}
                </button>
                <button className="flex gap-2 justify-center align-middle items-center py-2 px-3 bg-green-400 rounded-xl mt-2  mr-2 text-white font-bold hover:text-black text-sm">
                  {" "}
                  <IoLink className="text-2xl hover:text-black" /> Go Live{" "}
                </button>
                
              </p>
            </div>

          
            <div className="border max-w-[300px] rounded-lg p-4">
              <img
                src="https://www.codingnepalweb.com/wp-content/uploads/2022/09/10-best-beginner-to-intermediate-js-projec-fix.jpg"
                alt=""
              />
              <h1 className="py-2 text-2xl font-bold text-left">
                Project Name
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis modi corporis enim neque quam, dolorem minus dolore
                obcaecati itaque non ne{" "}
              </p>
              <p className="flex">
                {" "}
                <button className="flex gap-2 justify-center align-middle items-center py-2 px-3 bg-green-400 rounded-xl mt-2  mr-2 text-white font-bold text-sm hover:text-black">
                  {" "}
                  <BsGithub className="text-2xl hover:text-black"/> Source Code{" "}
                </button>
                <button className="flex gap-2 justify-center align-middle items-center py-2 px-3 bg-green-400 rounded-xl mt-2  mr-2 text-white font-bold hover:text-black text-sm">
                  {" "}
                  <IoLink className="text-2xl hover:text-black" /> Go Live{" "}
                </button>
                
              </p>
            </div>

         
           

          

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
