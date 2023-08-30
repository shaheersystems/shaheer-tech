import React from "react";
import Stack from "./Stack";
import Vscode from "../icons/Vscode";
import Figma from "../icons/Figma";
import ReactIcon from "../icons/React";
import Dribbble from "../icons/Dribbble";
import Tailwindcss from "../icons/Tailwindcss";
import Flask from "../icons/Flask";
import Github from "../icons/Github";
import Notion from "../icons/Notion";
import Udemy from "../icons/Udemy";
import Next from "../icons/Next";
import Radix from "../icons/Radix";
import Vercel from "../icons/Vercel";
import ChatGPT from "../icons/ChatGPT";
function Stacks() {
  const stacks = [
    {
      name: "VS Code",
      link: "https://vscode.dev/",
      icon: <Vscode />,
    },
    {
      name: "Figma",
      link: "https://figma.com",
      icon: <Figma />,
    },
    {
      name: "React",
      link: "https://react.dev",
      icon: <ReactIcon />,
    },
    {
      name: "Dribble",
      link: "https://dribbble.com",
      icon: <Dribbble />,
    },
    {
      name: "Tailwind",
      link: "https://tailwindcss.com",
      icon: <Tailwindcss />,
    },
    {
      name: "Flask",
      link: "https://flask.palletsprojects.com/en/2.3.x/",
      icon: <Flask />,
    },
    {
      name: "GitHub",
      link: "https://github.com",
      icon: <Github />,
    },
    {
      name: "Notion",
      link: "https://notion.so",
      icon: <Notion />,
    },
    {
      name: "Udemy",
      link: "https://udemy.com",
      icon: <Udemy />,
    },
    {
      name: "NextJs",
      link: "https://nextjs.org/",
      icon: <Next />,
    },
    {
      name: "Radix UI",
      link: "https://www.radix-ui.com/",
      icon: <Radix />,
    },
    {
      name: "Vercel",
      link: "https://vercel.com/",
      icon: <Vercel />,
    },
    {
      name: "Chat GPT",
      link: "https://chat.openai.com/",
      icon: <ChatGPT />,
    },
  ];
  return (
    <div id='projects'>
      <div className='font-sans italic text-3xl font-black'>Stack</div>
      <div className='py-6 flex gap-2 flex-wrap'>
        {stacks.map((stack, idx) => {
          return (
            <Stack
              key={idx}
              name={stack.name}
              link={stack.link}
              icon={stack.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Stacks;
