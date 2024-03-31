import React from "react";
import b from "./../Assets/b.png";

const AboutMe = () => {
  return (
    <div className="w-full ">
      <section className="max-w-screen-xl h-screen mx-auto">
        <div className="flex justify-center align-middle h-full w-full">
          <div className="flex flex-col justify-center gap-4 align-middle w-1/3">
            <img src={b} alt="" />
          </div>
          <div className="flex flex-col justify-center align-middle w-2/3">
            <p className="text-4xl font-semibold py-8">
              Hello there! I'm Shubham Chopde, I am a passionate front-end
              developer with a solid foundation in technologies such as Java,
              HTML, CSS, Bootstrap, Tailwind, JavaScript, and SQL.
            </p>
            <div className="flex justify-center items-center flex-col">
              <h1 className="pt-2 pb-4 text-4xl font-bold ">SKILLS</h1>
              <div className=" flex flex-wrap justify-center align-middle gap-4 py-8 px-12">
                <div className="px-4 py-2 rounded-xl border-2 flex items-center hover:shadow-2xl  bg-white shadow-lg">
                  <p className="text-xl font-semibold mr-2">HTML</p>{" "}
                  <img
                    width={"35px"}
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">CSS</p>{" "}
                  <img
                    width={"35px"}
                    src="https://abhaypanchal.vercel.app/assets/css-3-Gy62SVAX.png"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">JAVASCRIPT</p>{" "}
                  <img
                    width={"35px"}
                    src="https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">TAILWID</p>{" "}
                  <img
                    width={"35px"}
                    src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">BOOTSTRAP</p>{" "}
                  <img
                    width={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuU41rM7esgx8rT9u2f46LzqWywUvw3cRl184lxLXMg&s"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">REACT</p>{" "}
                  <img
                    width={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8g7aKvIY52OLcb15hrLFdac8vbaGsSKguIIBXp6GJDA&s"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">REDUX</p>{" "}
                  <img
                    width={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirPA2StzlQ9dXqdoEBbNwRK_cuBLE92CgU3-AQZL5Kg&s"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">GIT</p>{" "}
                  <img
                    width={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">NODEJS</p>{" "}
                  <img
                    width={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">MONGODB</p>{" "}
                  <img
                    width={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
                    alt=""
                  />
                </div>

                <div className="px-4 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
                  <p className="text-xl font-semibold mr-2">EXPRESS</p>{" "}
                  <img
                    width={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
