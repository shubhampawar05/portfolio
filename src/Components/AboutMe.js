import React from "react";
import b from "./../Assets/b.png";

const AboutMe = () => {
  return (
    <div className="w-full dark:bg-black dark:text-white transition-all duration-1000 shadow">
      <section className="max-w-screen-xl h-screen mx-auto ">
        <div className="flex justify-center gap-4 align-middle h-full w-full">
          <div className="flex flex-col justify-center  align-middle w-1/3">
            <img src={b} alt="" className="rounded-lg"/>
          </div>
          <div className="flex flex-col justify-center align-middle w-2/3">
            <h1 className="text-center text-5xl font-bold py-5">ABOUT ME</h1>
            <p className="text-2xl font-semibold py-5">
            Hello there! I'm Shubham Chopde, a passionate front-end developer with a strong background in web technologies. I specialize in front-end development, working with HTML, CSS, JavaScript, and frameworks like Bootstrap and Tailwind.
            </p>
            <p className="text-2xl font-semibold py-8">
            My journey into programming began with a curiosity for creating interactive and user-friendly interfaces. I enjoy the challenges of turning ideas into functional and visually appealing websites and applications.
            </p>
            <p className="text-2xl font-semibold py-8">
            I'm always eager to take on new challenges and collaborate on exciting projects. Feel free to explore my portfolio and reach out for any inquiries or collaborations!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
