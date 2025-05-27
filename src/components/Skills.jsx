import React from "react";

import html from "../images/HTML5.svg";
import css from "../images/CSS3.svg";
import javascript from "../images/JavaScript.svg";
import react from "../images/React.svg";
import tailwind from "../images/Tailwind-CSS.svg";
import next from "../images/Next.js.svg";
import git from "../images/Git.svg";
import github from "../images/GitHub-Codespaces.svg";

import typescript from "../images/TypeScript.svg";

function Skills() {
  const techSkills = [
    {
      name: "HTML",
      value: 95,
      img: html,
      color: "[&::-webkit-progress-value]:bg-[#E34F26]",
    },
    {
      name: "Tailwind CSS",
      value: 90,
      img: tailwind,
      color: "[&::-webkit-progress-value]:bg-[#38BDF8]",
    },
    {
      name: "CSS",
      value: 80,
      img: css,
      color: "[&::-webkit-progress-value]:bg-[#264de4]",
    },
    {
      name: "JavaScript",
      value: 80,
      img: javascript,
      color: "[&::-webkit-progress-value]:bg-[#f7df1e]",
    },
    {
      name: "React",
      value: 80,
      img: react,
      color: "[&::-webkit-progress-value]:bg-[#61DBFB]",
    },
    {
      name: "Git",
      value: 70,
      img: git,
      color: "[&::-webkit-progress-value]:bg-[#F05032]",
    },
    {
      name: "GitHub",
      value: 70,
      img: github,
      color: "[&::-webkit-progress-value]:bg-[#24292e]",
    },
    {
      name: "Next.js",
      value: 70,
      img: next,
      color: "[&::-webkit-progress-value]:bg-black",
    },
    {
      name: "TypeScript",
      value: 60,
      img: typescript,
      color: "[&::-webkit-progress-value]:bg-[#007acc]",
    },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Leadership",
  ];

  return (
    <section id="skills" className="min-h-screen bg-base-200 p-10 bg-cyan-900 ">
      <h1 className="text-5xl text-gray-200 md:text-5xl font-bold text-center text-primary mb-12">
        My Skills
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-10">
        <div className="grid col-span-3">
          <h2 className="text-2xl font-bold mb-6 text-accent text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="shadow-lg rounded-lg p-5 hover:shadow-xl transition-all flex flex-col items-center"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-14 h-14 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <p className="text-sm text-primary font-medium">
                  {skill.value}%
                </p>
                <progress
                  value={skill.value}
                  max="100"
                  className={`progress w-full mt-2 rounded-full 
                    [&::-webkit-progress-bar]:rounded-full 
                    [&::-webkit-progress-value]:rounded-full 
                    ${skill.color}`}
                ></progress>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl text-gray-800 font-bold mb-6 text-accent text-cennter">
            Soft Skills
          </h2>
          <ul className="space-y-4 text-lg font-medium list-disc list-inside">
            {softSkills.map((skill, index) => (
              <li
                key={index}
                className="hover:text-primary transition-colors duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
