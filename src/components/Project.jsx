import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal website built with React and Tailwind CSS, showcasing my skills, soft strengths, and contact information. Includes smooth animations and a downloadable CV.',
    technologies: ['React', 'Tailwind CSS', 'DaisyUI'],
    github: 'https://github.com/adeline/portfolio',
  },
  {
    title: 'Book Management App',
    description:
      'A CRUD web application to manage books, fetch book data, add and update entries, and organize by year. Built using React with API fetching and TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'API'],
    github: 'https://github.com/adeline/book-management-app',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-base-100 px-6 bg-slate-700 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
        {projects.map((project, index) => (
          <div key={index} className="card shadow-md p-6 rounded-xl hover:shadow-xl transition">
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
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
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
