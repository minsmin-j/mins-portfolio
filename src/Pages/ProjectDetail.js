import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectDetails } from "../Details";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="container mx-auto max-width pt-24 pb-20">
        <div className="text-center">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl font-bold mb-4">
            프로젝트를 찾을 수 없습니다
          </h1>
          <Link 
            to="/projects" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto max-width pt-24 pb-20">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          프로젝트 목록으로 돌아가기
        </Link>
      </div>

      {/* Project Header */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden mb-8">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-content mb-6">
            {project.description}
          </p>
          
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-content">{project.duration}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-content">{project.role}</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-dark-heading dark:text-light-heading mb-3">사용 기술</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techstack.split(', ').map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-content border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overview */}
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4">개요</h2>
          <p className="text-content leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4">주요 성과</h2>
          <ul className="space-y-3">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-content">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Challenges */}
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4">기술적 도전과 해결</h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-dark-heading dark:text-light-heading mb-2">
                  {challenge.title || `도전 ${index + 1}`}
                </h3>
                <div className="mb-3">
                  <h4 className="font-medium text-red-600 mb-1">문제</h4>
                  <p className="text-content whitespace-pre-line">{challenge.problem}</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-600 mb-1">해결</h4>
                  <p className="text-content whitespace-pre-line">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learnings */}
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4">배운 점</h2>
          <p className="text-content leading-relaxed whitespace-pre-line">
            {project.learnings}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {project.previewLink && (
          <a
            href={project.previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-medium rounded-lg border border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View Code
          </a>
        )}
      </div>
    </main>
  );
}

export default ProjectDetail;