import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal website built with React and Tailwind CSS, showcasing my skills, soft strengths, and contact information. Includes smooth animations and a downloadable CV.',
    technologies: ['React', 'Tailwind CSS', 'DaisyUI'],
    link: 'https://github.com/adeline/portfolio',
    image: 'https://via.placeholder.com/400x200?text=Portfolio+Website',
  },
  {
    title: 'Referral Tracker',
    description:
  'A Referral Tracker web application is a full-stack system that includes both frontend and backend components working together. The frontend provides an interface for users to create, view, and manage patient referrals, while the backend handles data storage, authentication, and updates to referral status and clinical notes. Both parts communicate through APIs to ensure smooth data flow and real-time updates.',
technologies: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL (Sequelize)', 'JWT'],
    link: 'https://referral-tracker-frontend-onq1.vercel.app/',
    image: 'https://via.placeholder.com/400x200?text=Referral+tracker',  },
  {
    title: 'Elegant – E-commerce',
    description:
      'Elegant is a modern and high-performance e-commerce frontend built using Next.js 15, TypeScript, and Tailwind CSS. It features a fully responsive design with reusable components for product listings, blog/article sections, and a user-friendly footer. Optimized for SEO and scalability, Elegant delivers a seamless shopping experience and is ready for production deployment on Vercel.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'App Router ', 'SEO', 'Vercel'],
    link: 'https://github.com/Igiraneza1/In-door.git',
    image: 'https://via.placeholder.com/400x200?text=Elegant+Ecommerce',
  },
  {
    title: 'Github-challenge',
    description:
      'An app that lets you search for GitHub users and view their profile information. It fetches data from the GitHub API and shows details like avatar, name, bio, location, and public repositories. The app is fully responsive and built with clean, maintainable JavaScript code.',
    technologies: ['React.js', 'Tailwind CSS'],
    link: 'https://github.com/Igiraneza1/Github-Challenge.git',
    image: 'https://via.placeholder.com/400x200?text=Github+Challenge',
  },
];

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
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge badge-outline badge-primary text-gray-900">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
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
        className=" text-gray-200 hover:underline text-lg p-5 inline-block transition duration-300 ease-in-out transform hover:translate-x-1"
      >
        View more projects on GitHub →
      </a>
    </section>
  );
}

export default Projects;
