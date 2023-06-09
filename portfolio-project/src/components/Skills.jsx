import React from "react";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[1040px] mx-auto flex flex-col justify-center w-full h-full "
    >
      <div>
        <h1 className="text-4xl font-bold text-center py-8 text-[#001b5e]">
          Esperienza
        </h1>
        <p className="py-4 pl-16 text-center text-[#001b5e]">
          Queste sono le tecnologie con cui ho lavorato :
        </p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center pl-20 pr-20  py-8">
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto "
            src="./images/HTML.jpg"
            alt="HTML icon"
          />
          <p>HTML</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto "
            src="./images/CSS.PNG"
            alt="CSS icon"
          />
          <p>CSS</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img className="w-20 mx-auto " src="./images/JS.PNG" alt="JS icon" />
          <p>JAVA SCRIPT</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto py-4 "
            src="./images/GIT.PNG"
            alt="HTML icon"
          />
          <p>GIT</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto py-4 "
            src="./images/REACT.PNG"
            alt="HTML icon"
          />
          <p>REACT</p>
        </div>
        <div className="shadow-md rounded-xl hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto py-4 "
            src="./images/TAILWIND.jpg"
            alt="HTML icon"
          />
          <p>TAILWIND</p>
        </div>
      </div>
    </div>
  );
};
