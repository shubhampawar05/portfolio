import React from "react";

const Skills = () => {
  return (
    <div className="w-full">
      <section className="max-w-screen-xl mx-auto">
        <div className="text-center w-full border">
          <h1 className="py-8 text-5xl font-bold ">SKILLS</h1>
          <div className=" flex flex-wrap gap-8 py-12 px-20">
            <div className="px-8 py-2 rounded-xl border-2 flex items-center">
              <p className="text-xl font-semibold mr-2">HTML</p>{" "}
              <img
                width={"35px"}
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt=""
              />
            </div>

            <div className="px-8 py-2 rounded-xl border-2 flex items-center">
              <p className="text-xl font-semibold mr-2">CSS</p>{" "}
              <img
                width={"35px"}
                src="https://abhaypanchal.vercel.app/assets/css-3-Gy62SVAX.png"
                alt=""
              />
            </div>

            <div className="px-8 py-2 rounded-xl border-2 flex items-center">
              <p className="text-xl font-semibold mr-2">TAILWID</p>{" "}
              <img
                width={"35px"}
                src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"
                alt=""
              />
            </div>

            <div className="px-8 py-2 rounded-xl border-2 flex items-center">
              <p className="text-xl font-semibold mr-2">GIT</p>{" "}
              <img
                width={"35px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
                alt=""
              />
            </div>

            <div className="px-8 py-2 rounded-xl border-2 flex items-center">
              <p className="text-xl font-semibold mr-2">JAVASCRIPT</p>{" "}
              <img
                width={"35px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
                alt=""
              />
            </div>

            
            <div className="px-8 py-2 rounded-xl border-2 flex items-center">
              <p className="text-xl font-semibold mr-2">REACT</p>{" "}
              <img
                width={"35px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
                alt=""
              />
            </div>
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
