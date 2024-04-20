import React from "react";
import Project from "./Project";
function Projects() {
  const projects = [
    {
      id: 0,
      title: "Deversity",
      year: "2024-present",
      description:
        "Deversity is an ed-tech platform that helps educational creators and students to connect and learn. It is built using React, NodeJS (express), and PostgreSQL (Prisma ORM).",
      link: "https://deversity.vercel.app/",
    },
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
      id: 7,
      title: "Snippy",
      year: "2024",
      description:
        "A code snippet manager built using React and NodeJS (Express) and SQLite (Prisma ORM).",
      link: "https://snippy-blond.vercel.app",
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
      id: 6,
      title: "React mutli-select",
      year: "2023",
      description: "Custom mutli-select component in react.",
      link: "https://react-multi-select-indol.vercel.app/",
    },
  ];
  return (
    <div id="projects">
      <div className="font-sans text-3xl italic font-black">Projects</div>
      <div className="flex flex-col gap-2 py-6">
        {projects.map((project, idx) => {
          return <Project key={idx} {...project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
