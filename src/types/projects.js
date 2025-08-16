import React from 'react';
import projects from '../types/projects'; 

function Projects() {
  return (
    <section id="projects" className="py-16 bg-cyan-900 px-6 min-h-screen">
      <h2 className="text-5xl text-gray-200 font-bold text-center pb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="card shadow-md p-6 rounded-xl bg-base-200 hover:shadow-xl transition">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge badge-outline badge-primary">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/Igiraneza1?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-lg p-5 inline-block transition duration-300 ease-in-out transform hover:translate-x-1"
      >
        View more projects on GitHub →
      </a>
    </section>
  );
}

export default Projects;
