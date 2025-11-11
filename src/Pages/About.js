import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails, contactDetails } from "../Details";

function About() {
  const { email, phone, education } = contactDetails;
  
  return (
    <main className="container mx-auto max-width pt-24 pb-20 ">
      
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
        
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-4xl">
          {/* Phone Contact Card */}
          <div className="bg-gray-50 dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
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
          <div className="bg-gray-50 dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
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
              <div className="flex-1">
                <p className="text-dark-heading dark:text-light-heading font-semibold mb-1 text-sm">이메일</p>
                <p className="text-content text-sm break-words">{email}</p>
              </div>
            </div>
          </div>
          
          {/* Education Card */}
          <div className="bg-gray-50 dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
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
      
      
      <section className="pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience - Left Column */}
          <div>
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
              Work Experience
            </h1>
            <div className="space-y-4">
              {React.Children.toArray(
                workDetails.map(({ Position, Company, Location, Type, Duration }) => (
                  <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Work
                      position={Position}
                      company={Company}
                      location={Location}
                      type={Duration}
                      //duration={Type}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Education - Right Column */}
          <div>
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
              Experience
            </h1>
            <div className="space-y-4">
              {React.Children.toArray(
                eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
                  <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Work
                      position={Position}
                      company={Company}
                      location={Location}
                      type={Duration}
                      //duration={Type}
                    />
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
