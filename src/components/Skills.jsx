import React from 'react';

import html from '../images/HTML5.svg';      
import css from '../images/CSS3.svg';         
import javascript from '../images/JavaScript.svg'; 
import react from '../images/React.svg';
import tailwind from '../images/Tailwind-CSS.svg';
import next from '../images/Next.js.svg'
import git from '../images/Git.svg';
import github from '../images/GitHub-Codespaces.svg';

import typescript from '../images/TypeScript.svg'

function Skills() {
  const techSkills = [
    { name: 'HTML', value: 95, img: html },
    { name: 'Tailwind CSS', value: 90, img: tailwind },
    { name: 'CSS', value: 80, img: css },
    { name: 'JavaScript', value: 80, img: javascript },
    { name: 'React', value: 80, img: react },
    {name: 'Git', value: 70, img: git },
    {name: 'GitHub', value: 70, img: github },
    {name: 'Next.js', value: 60, img: next },
    {name: 'TypeScript', value: 50, img: typescript },

  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Creativity',
    'Leadership',
  ];

  return (
    <section id="skills" className="min-h-screen bg-base-200 ">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">My Skills</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-10">
        
        
        <div className='grid col-span-3'>
          <h2 className="text-2xl font-bold mb-6 text-accent text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-all flex flex-col items-center"
              >
                <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain mb-3" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <p className="text-sm text-primary font-medium">{skill.value}%</p>
                <progress className="progress progress-primary w-full mt-2" value={skill.value} max="100" />
              </div>
            ))}
          </div>
        </div>

       
        <div className='p-5 rounded-lg shadow-lg'>
          <h2 className="text-2xl font-bold mb-6 text-accent text-cennter">Soft Skills</h2>
          <ul className="space-y-4 text-lg font-medium text-gray-800 list-disc list-inside">
            {softSkills.map((skill, index) => (
              <li key={index} className="hover:text-primary transition-colors duration-300">
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
