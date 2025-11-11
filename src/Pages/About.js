import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails, contactDetails } from "../Details";

function About() {
  const { email, phone, education } = contactDetails;
  
  return (
    <main className="container mx-auto max-width pt-24 pb-20 ">
      
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-center">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl mx-auto text-center">{personalDetails.about}</p>
        
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 max-w-4xl mx-auto">
          {/* Phone Contact Card */}
          <div className="dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-dark-heading dark:text-light-heading mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-dark-heading dark:text-light-heading font-semibold mb-1 text-sm">연락처</p>
                <p className="text-content text-sm">{phone}</p>
              </div>
            </div>
          </div>
          
          {/* Email Contact Card */}
          <div className="dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-dark-heading dark:text-light-heading mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-dark-heading dark:text-light-heading font-semibold mb-1 text-sm">이메일</p>
                <p className="text-content text-sm break-all whitespace-normal overflow-hidden">{email}</p>
              </div>
            </div>
          </div>
          
          {/* Education Card */}
          <div className="dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-dark-heading dark:text-light-heading mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <div className="flex-1">
                <p className="text-dark-heading dark:text-light-heading font-semibold mb-1 text-sm">학력</p>
                <p className="text-content text-sm">{education.university} {education.department}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="pt-10">
        <h1 className="text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold mb-3">Experience Timeline</h1>
        <div className="h-1 w-16 bg-indigo-400 rounded mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience - Left Column */}
          <div>
            <h2 className="flex items-center text-xl md:text-2xl text-dark-heading dark:text-light-heading font-semibold mb-6">
              <span className="mr-2" role="img" aria-label="work">💼</span>
              Work Experience
            </h2>
            <div className="relative space-y-6 pl-0.5">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-indigo-300"></div>
              {React.Children.toArray(
                workDetails.map(({ Position, Company, Location, Type, Duration }) => (
                  <div className="relative pl-6">
                    <span className="absolute left-2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-4 border-indigo-400 bg-white transform"></span>
                    <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <Work
                        position={Position}
                        company={Company}
                        location={Location}
                        type={Duration}
                        //duration={Type}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Education - Right Column */}
          <div>
            <h2 className="flex items-center text-xl md:text-2xl text-dark-heading dark:text-light-heading font-semibold mb-6">
              <span className="mr-2" role="img" aria-label="education">🎓</span>
              Activities & Education
            </h2>
            <div className="relative space-y-6 pl-0.5">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-indigo-300"></div>
              {React.Children.toArray(
                eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
                  <div className="relative pl-6">
                    <span className="absolute left-2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-4 border-indigo-400 bg-white transform"></span>
                    <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <Work
                        position={Position}
                        company={Company}
                        location={Location}
                        type={Duration}
                        //duration={Type}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
