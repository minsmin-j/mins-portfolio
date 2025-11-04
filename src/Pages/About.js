import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-24 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section className="pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience - Left Column */}
          <div>
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
              Work Experience
            </h1>
            {React.Children.toArray(
              workDetails.map(({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              ))
            )}
          </div>
          
          {/* Education - Right Column */}
          <div>
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
              Experience
            </h1>
            {React.Children.toArray(
              eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
