import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-8 pt-6">
        <div className="flex flex-col items-center">
          <img src={html} title="HTML" alt="HTML" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={css} title="CSS" alt="CSS" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={js} title="JavaScript" alt="JavaScript" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={react} title="React" alt="React" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">React</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={redux} title="Redux" alt="Redux" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">Redux</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">Tailwind</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={sass} title="SASS" alt="SASS" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">SASS</span>
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-8 pt-6">
        <div className="flex flex-col items-center">
          <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">VS Code</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={git} title="Git" alt="Git" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={github} title="Github" alt="Github" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">GitHub</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={figma} title="Figma" alt="Figma" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={npm} title="NPM" alt="NPM" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">NPM</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={postman} title="Postman" alt="Postman" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-sm text-content mt-2 font-medium">Postman</span>
        </div>
      </section>
    </main>
  );
}

export default Technologies;
