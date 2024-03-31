import React from "react";
import a from "./../Assets/a.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div className="w-full h-full shadow">
      <main className="max-w-screen-xl h-screen mx-auto">
        <div className=" w-full h-full flex justify-center align-center ">
          <div className="w-1/2 flex justify-center align-center ">
            <div className="px-12 flex flex-col justify-center">
              <h1 className="text-6xl font-bold ">HELLO </h1>
              <p  className="max-w-[70%] text-3xl font-bold my-4">
                I'm Shubham Chopde. <br /> Full Stack Developer, <br /> Web developer Enthusiast, Life Long Learner.
              </p>
              <div className=" flex gap-2 text-2xl my-4">
              <BsGithub />
              <BsLinkedin />
              </div>
              <div>
                <button className="py-3 px-8 bg-green-400 rounded-xl mt-4 text-white font-bold text-xl">
                    Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <img src={a} alt="" />
          </div>
        </div>
        {/* <AboutMe/>
        <Skills/> */}
      </main>
    </div>
  );
};

export default Home;
