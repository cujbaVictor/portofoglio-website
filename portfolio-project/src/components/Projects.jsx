import React from "react";
import cloneImg from "../../public/clone.png";
import mainImg from "../../public/main-project.png";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        explicabo atque placeat vel! Labore asperiores eius incidunt facilis,
        eaque necessitatibus quis consectetur! Sequi dolorum nemo voluptatum
        fugit quam, adipisci ratione!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={cloneImg} title="IT School clone APP" />
        <ProjectItem img={mainImg} title="News App" />
      </div>
    </div>
  );
};
