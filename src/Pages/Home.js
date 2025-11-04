import React from "react";
import { Link } from "react-router-dom";
import Project from "../Components/Project";
import { personalDetails, projectDetails, techStackDetails } from "../Details";

function Home() {
  const { name, img } = personalDetails;
  
  // 첫 3개 프로젝트만 표시
  const featuredProjects = projectDetails.slice(0, 3);

  // 주요 스킬만 선택 (아이콘과 함께)
  const mainSkills = [
    { name: "Java", icon: techStackDetails.java },
    { name: "Spring Boot", icon: techStackDetails.springboot },
    { name: "MySQL", icon: techStackDetails.mysql },
    { name: "Git", icon: techStackDetails.git },
    { name: "AWS", icon: techStackDetails.aws },
    { name: "HTML/CSS", icon: techStackDetails.html },
    { name: "Cursor", icon: techStackDetails.cursor },
    { name: "Notion", icon: techStackDetails.notion },
  ];

  return (
    <main className="container mx-auto max-width pt-24">
      {/* Hero Section */}
      <section className="section md:flex justify-between items-center">
        <div>
          <h1
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold animate-fade-in whitespace-nowrap"
          >
            안녕하세요,<br></br>백엔드 개발자 <Link to="/about" className="bg-clip-text bg-gradient text-transparent hover:underline cursor-pointer">{name}</Link>입니다.
          </h1>
        </div>
        <div className="mt-5 md:mt-0">
          <img className="w-64 h-80 md:ml-auto object-cover rounded-lg border-4 border-gray-200 dark:border-gray-600 shadow-lg" src={img} alt="Profile" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section pt-20">
        <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              techstack={project.techstack}
              previewLink={project.previewLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Projects
          </Link>
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
        
        {/* 주요 스킬 태그들 */}
        <div className="flex flex-wrap gap-3 justify-center">
          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-card rounded-full border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-content">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* View More Skills Button */}
        <div className="text-center mt-12">
          <Link 
            to="/technologies" 
            className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Skills
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;