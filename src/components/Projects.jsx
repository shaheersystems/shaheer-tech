import React from "react";
import Project from "./Project";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quran Cloud",
      year: "2022",
      description:
        " Quran Cloud is a web app used to read and listen to the Quran. It is built using React, Flowbite, and Quran cloud API.",
      link: "https://quran-clone.vercel.app/",
    },
    {
      id: 2,
      title: "Jobvista",
      year: "2023",
      description:
        "Jobvista is a Job Board website built using React (Front-end) and Python Flask (Backend) with MongoDB database.",
      link: "https://worklytics-board.vercel.app/",
    },
    {
      id: 3,
      title: "Transfer List component",
      year: "2022",
      description: "Transfer List Component in React for practice",
      link: "https://transferlist.vercel.app/",
    },
    {
      id: 4,
      title: "Tick-Tack-Toe",
      year: "2023",
      description: "Tick Tack Toe game with react",
      link: "https://tick-tack-toe-six.vercel.app/",
    },
    {
      id: 5,
      title: "Drag'n'Drop",
      year: "2023",
      description:
        "Drag and Drop Component in react using React beautiful drag and drop",
      link: "https://dragndrop-cyan.vercel.app/",
    },
    {
      id: 6,
      title: "React mutli-select",
      year: "2023",
      description: "Custom mutli-select component in react.",
      link: "https://react-multi-select-indol.vercel.app/",
    },
    {
      id: 7,
      title: "React select component",
      year: "2023",
      description: "Custom select component in react.",
      link: "https://react-select-bice.vercel.app/",
    },
  ];
  return (
    <div id='projects'>
      <div className='font-sans italic text-3xl font-black'>Projects</div>
      <div className='py-6 flex flex-col gap-2'>
        {projects.map((project, idx) => {
          return <Project key={idx} {...project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
