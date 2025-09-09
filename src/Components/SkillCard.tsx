// src/Components/SkillCard.tsx
import { Avatar } from "@mantine/core";

import c from "../assets/Icons/C.png";
import cpp from "../assets/Icons/C++.png";
import css from "../assets/Icons/CSS.png";
import expressjs from "../assets/Icons/Express JS.png";
import git from "../assets/Icons/Git.png";
import github from "../assets/Icons/Github.png";
import html from "../assets/Icons/HTML.png";
import javascript from "../assets/Icons/JavaScript.png";
import materialui from "../assets/Icons/Material UI.png";
import mongodbcompass from "../assets/Icons/MongoDB Compass.png";
import mongodb from "../assets/Icons/MongoDB.png";
import mysql from "../assets/Icons/MySQL.png";
import nodejs from "../assets/Icons/Node JS.png";
import postman from "../assets/Icons/Postman.png";
import reactjs from "../assets/Icons/React JS.png";
import redux from "../assets/Icons/Redux.png";
import sass from "../assets/Icons/SASS.png";
import springboot from "../assets/Icons/Springboot.png";
import tailwindcss from "../assets/Icons/Tailwind CSS.png";
import typescript from "../assets/Icons/TypeScript.png";
import vscode from "../assets/Icons/VS Code.png";
import java from "../assets/Icons/Java.png"; 
import springtoolsuite from "../assets/Icons/springtoolsuite.png";
import postgresql from "../assets/Icons/Postgres.png";



// 🔹 Build a lookup map (keys normalized: lowercase, no spaces, no +)
const ICONS: Record<string, string> = {
  c,
  cpp,
  css,
  expressjs,
  git,
  github,
  html,
  javascript,
  materialui,
  mongodbcompass,
  mongodb,
  mysql,
  nodejs,
  postman,
  reactjs,
  redux,
  sass,
  java,
  springtoolsuite,
  postgresql,
  springboot,
  tailwindcss,
  typescript,
  vscode,
};

// 🔹 Normalize function to match props.skills → keys
const normalize = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "").replace(/\+/g, "p");

const SkillBadge = (skills: string[]) =>
  skills.map((skill, index) => {
    const key = normalize(skill);
    return (
      <div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 mb-1">
        <img
          className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"
          src={ICONS[key]}
          alt={skill}
        />
        <div className="text-textColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm">
          {skill}
        </div>
      </div>
    );
  });


const SkillCard = (props: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      className="w-[47%] shadow-[0_0_10px_0_#3B82F650] rounded-3xl mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full"
    >
      <div className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold">
        {props.title}
      </div>
      <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillCard;
