import React from "react";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[1040px] mx-auto flex flex-col justify-center w-full h-full "
    >
      <div>
        <h1 className="text-4xl font-bold text-center py-8 text-[#001b5e]">
          Experience
        </h1>
        <p className="py-4 pl-16">
          //These are the technologies I've worked with
        </p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center pl-20 pr-20  py-8">
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto "
            src="../../public/HTML.jpg"
            alt="HTML icon"
          />
          <p>HTML</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto "
            src="../../public/CSS.jpg"
            alt="CSS icon"
          />
          <p>CSS</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto "
            src="../../public/JS.jpg"
            alt="JS icon"
          />
          <p>JAVA SCRIPT</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto py-4 "
            src="../../public/GIT.jpg"
            alt="HTML icon"
          />
          <p>GIT</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto py-4 "
            src="../../public/REACT.png"
            alt="HTML icon"
          />
          <p>REACT</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto py-4 "
            src="../../public/TAILWIND.jpg"
            alt="HTML icon"
          />
          <p>TAILWIND</p>
        </div>
      </div>
    </div>
  );
};
