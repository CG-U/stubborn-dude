import React from "react";
import gbfScreenShot from "../../../../assets/gbf.png";
import coursesScreenShot from "../../../../assets/courses.png";

export interface ProjectsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Projects({ ...props }: ProjectsProps) {
  const workCards: {
    title: string;
    picture: string;
    description: string;
  }[] = [
    {
      title: "Learners",
      description:
        "I built the the rehauled version of the LMS which is the main product of a start up company, I mainly did the front end of this web applications.",
      picture: gbfScreenShot,
    },
    {
      title: "Courses",
      description:
        "One of the crucial features that i have developed on the LMS is the course viewing page, where most of the users spend their time on in learning what the client has to offer.",
      picture: coursesScreenShot,
    },
  ];

  return (
    <div className="flex flex-col h-full p-8 mx-auto space-y-8 text-2xl text-blue-800 font-inter max-w-7xl">
      <p className="text-2xl text-blue-800">
        I have no current personal projects finished at the moment ...
      </p>
      <p className="font-bold">BUT</p>
      <p>
        I've finished <span className="font-bold">production</span> ready
        frontend applications. Here's some of what I've done on my working
        years!
      </p>
      <div className="grid flex-1 grid-cols-1 gap-10 my-auto md:px-5 md:grid-cols-2 ">
        {workCards.map((card) => {
          return (
            <div className="flex flex-col items-center w-full h-full p-4 my-auto space-y-4 bg-gray-200 rounded-lg drop-shadow">
              <h1 className="font-bold">{card.title}</h1>
              <img
                src={card.picture}
                alt={card.title}
                className="object-contain w-auto h-36"
              />
              <p className="px-4 py-2 bg-white rounded-lg">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
