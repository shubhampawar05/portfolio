import React from "react";
import a from "./../Assets/a.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="w-full dark:bg-black dark:text-white transition-all duration-1000 shadow">
      <main className="max-w-screen-xl h-screen mx-auto">
        <div className=" w-full h-full flex justify-center align-center ">
          <div className="w-1/2 flex justify-center align-center ">
            <div className="px-12 flex flex-col justify-center">
              <h1 className="text-6xl font-bold ">HELLO </h1>
              <p  className="max-w-[70%] text-3xl font-bold my-4">
                I'm Shubham Chopde. <br /> Full Stack Developer, <br /> Web developer Enthusiast, Life Long Learner.
              </p>
              <div className=" flex gap-5 text-2xl my-4">
              <a href="https://github.com/shubhampawar05" target='_blank' ><BsGithub className="text-red-400 hover:text-green-400 hover:scale-110" /></a>
             <a href="https://www.linkedin.com/in/shubham-chopde05/"  target='_blank' > <BsLinkedin className="text-blue-400 hover:text-blue-600 hover:scale-110" /></a>
              </div>
              <div>
                <button className="py-3 px-8 bg-green-400 rounded-xl mt-4 text-white font-bold text-xl">
                   <Link to={'/contactus'}> Contact Me</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <img src={a} alt="" className="rounded-lg" />
          </div>
        </div>
        
      </main>
     
    </div>

  );
};

export default Home;
