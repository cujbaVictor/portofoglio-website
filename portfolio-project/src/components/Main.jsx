import React from "react";
import cloneImg from "./../img/victor.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="main">
      <Main img="./../img/victor.jpg" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div
          className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center   items-left pl-10  
        "
        >
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            Ciao!
          </h2>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            Mi chiamo
          </h2>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Victor Cujba
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            E io sono
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
            <a
              href="https://www.facebook.com/profile.php?id=100009954939516"
              target="_blank"
            >
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>

            <a href="https://www.instagram.com/victor_7996/" target="_blank">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/cujba-victor-076582254/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/cujbaVictor" target="_blank">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
