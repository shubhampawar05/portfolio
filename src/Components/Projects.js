import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLink } from "react-icons/io5";
import projectImg from './../Assets/project.png'
import axisimg from './../Assets/axisbank.png'

const Projects = () => {
const projects =[{
imgPoster:projectImg,
title:'Ecommerce Admin Panel',
disc:'"Developed a basic e-commerce website with a focus on robust admin panel functionalities using React and Firebase database integration. Implemented CRUD operations for admin users while providing seamless cart management and order placement for regular users. Utilized Tailwind CSS for responsive design and enhanced user experience."',
githubLink : 'https://github.com/shubhampawar05/MCT-Project',
prjectliveLink:'https://mct-project.vercel.app/'
},{
  imgPoster: axisimg,
  title:'AxisBank Clone',
  disc:'Welcome to our Axis Bank Website Clone project! This repository contains the front-end implementation of the Axis Bank website created as part of a Geekathon hosted by Geekster Reduced dependence on JavaScript through innovative use of HTML and CSS.',
  githubLink : 'https://github.com/shubhampawar05/Major-Project-Axis-Bank;',
  prjectliveLink:'https://major-project-axis-bank.vercel.app/'
  },{
    imgPoster:'https://github.com/shubhampawar05/Team-20/raw/main/Shubham%20Chopde/YouTube%20Chrome%20Extension/assets/abc.png',
    title:'YouTube Timeline Bookmarker',
    disc:'YouTube Timeline Bookmarker is a Chrome extension that serves as a convenient tool for bookmarking YouTube videos by saving specific intervals of the video timeline. It enables users to jump directly to these bookmarked intervals, facilitating the resumption of videos added to the "Watch Later" list or the creation of important notes during lectures. Additionally, users can easily bookmark the beginning of their favorite songs for quick access.',
    githubLink : 'https://github.com/shubhampawar05/Team-20/tree/main/Shubham%20Chopde/YouTube%20Chrome%20Extension;',
    prjectliveLink:'https://www.linkedin.com/posts/shubham-chopde05_youtubeextension-geekathon-chromeextension-activity-7163135123511615488-0Z_E?utm_source=share&utm_medium=member_desktop'
    }]
  return (
    <div className="w-full min-h-screen dark:text-white dark:bg-black">
      <section className="max-w-screen-xl  mx-auto   py-8">
        <div className="">
         
          <div className="flex p-4 flex-wrap  justify-center gap-12 align-middle">
           {projects.map((item,idx)=>{
            const {imgPoster,title,disc,githubLink,prjectliveLink}=item
            return(
              <div className="border max-w-[300px] rounded-lg p-4" key={idx}>
              <img
                src={imgPoster}
                alt=""
              />
              <h1 className="py-2 text-2xl font-bold text-left">
                {title}
              </h1>
              <p>
                {disc.substring(0,300)}
              </p>
              <p className="flex">
                {" "}
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button className="flex gap-2 justify-center align-middle items-center py-2 px-3 bg-green-400 rounded-xl mt-2  mr-2 text-white font-bold text-sm hover:text-black">
                  {" "}
                  <BsGithub className="text-2xl hover:text-black"/> Source Code{" "}
                </button>
                </a>
               <a href={prjectliveLink} target="_blank" rel="noopener noreferrer"> <button className="flex gap-2 justify-center align-middle items-center py-2 px-3 bg-green-400 rounded-xl mt-2  mr-2 text-white font-bold hover:text-black text-sm">
                  {" "}
                  <IoLink className="text-2xl hover:text-black" /> Go Live{" "}
                </button></a>
                
              </p>
            </div>
            )
           })}

          
            

         
           

          

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
