import React from "react";
import b from "./../Assets/b.png";

const AboutMe = () => {
  return (
    <div className="w-full h-full shadow">
      <section className="max-w-screen-xl h-screen mx-auto ">
      
        <div className="flex justify-center align-middle h-full w-full">
         
          <div className="flex flex-col justify-center gap-4 align-middle w-1/3">
            <img src={b} alt="" />
          </div>
          <div className="flex flex-col justify-center align-middle w-2/3">
          <h1 className="text-center text-5xl font-bold py-5">ABOUT ME</h1>
            <p className="text-2xl font-semibold py-5">
              Hello there! I'm Shubham Chopde, I am a passionate front-end
              developer with a solid foundation in technologies such as Java,
              HTML, CSS, Bootstrap, Tailwind, JavaScript, and SQL.
            </p>
            <p className="text-2xl font-semibold py-8">
              Hello there! I'm Shubham Chopde, I am a passionate front-end
              developer with a solid foundation in technologies such as Java,
              HTML, CSS, Bootstrap, Tailwind, JavaScript, and SQL.
            </p>
            <p className="text-2xl font-semibold py-8">
              Hello there! I'm Shubham Chopde, I am a passionate front-end
              developer with a solid foundation in technologies such as Java,
              HTML, CSS, Bootstrap, Tailwind, JavaScript, and SQL.
            </p>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
