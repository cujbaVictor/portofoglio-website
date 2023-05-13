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
        Per il progetto di fine corso sviluppatore front end basato su HTML e
        CSS, ho realizzato un sito web responsivo con un design semplice e
        accattivante.Il secondo mio progetto di sviluppatore front end e basato
        su ReactJS. Un sito di notize, ho utilizato API di sito uficiale
        TheGuardian, utilizzando la libreria Redux per lo stato globale
        dell'applicazione.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={cloneImg}
          title="IT School clone APP"
          url="https://github.com/cujbaVictor/CV-it-school-clone"
        />
        <ProjectItem
          img={mainImg}
          title="News App"
          url="https://github.com/cujbaVictor/itschool-news"
        />
      </div>
    </div>
  );
};
