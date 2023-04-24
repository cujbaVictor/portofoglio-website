import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left-top scale-x-[-1]     "
        src="../public/IMG-5838.JPG"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div
          className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center   items-center   
        "
        >
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Victor Cujba
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Junior Front-End Developer", // Types 'One'
                2000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast",
                2000, // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
