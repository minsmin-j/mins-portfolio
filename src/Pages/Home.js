import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails, projectDetails, techStackDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  // 첫 3개 프로젝트만 표시
  const featuredProjects = projectDetails.slice(0, 3);

  return (
    <main className="container mx-auto max-width">
      {/* Hero Section */}
      <section className="section md:flex justify-between items-center">
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {tagline}
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section pt-20">
        <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-heading dark:text-light-heading mb-3">
                  {project.title}
                </h3>
                <p className="text-content mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techstack.split(', ').map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-content"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.previewLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-content rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Projects
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section pt-20 pb-20">
        <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-8">
          Skills & Technologies
        </h2>
        <p className="text-content py-2 lg:max-w-3xl mb-8">
          Technologies I've been working with recently
        </p>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 items-center gap-8">
          {Object.entries(techStackDetails).slice(0, 8).map(([key, icon]) => (
            <div key={key} className="flex flex-col items-center">
              <img 
                src={icon} 
                title={key.charAt(0).toUpperCase() + key.slice(1)} 
                alt={key.charAt(0).toUpperCase() + key.slice(1)} 
                className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-200"
              />
              <span className="text-xs text-content mt-2 font-medium text-center">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </div>
          ))}
        </div>
        
        {/* View More Skills Button */}
        <div className="text-center mt-12">
          <a 
            href="/technologies" 
            className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Skills
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
