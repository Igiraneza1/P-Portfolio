import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal website built with React and Tailwind CSS, showcasing my skills, soft strengths, and contact information. Includes smooth animations and a downloadable CV.',
    technologies: ['React', 'Tailwind CSS', 'DaisyUI'],
    link: 'https://github.com/adeline/portfolio',
  },
 {
  title: 'Recipe Viewer App',
  description:
    'A dynamic web application to browse, search, and view delicious recipes. Users can fetch recipe data, view detailed cooking instructions, and filter recipes by category or ingredients. Built using React with API integration and TypeScript.',
  technologies: ['Next.js', 'TypeScript', 'Tailwind', 'API', 'Clerk Authentication'],
  link: 'https://viewer-k7cg.vercel.app/',
}

];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-base-100 px-6 bg-cyan-900 min-h-screen">
      <h2 className="text-5xl text-gray-200 font-bold text-center text-primary pb-10 ">Projects</h2>
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
              href={project.link}
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
