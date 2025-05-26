import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Advanced Front-End Developer Trainee',
      company: 'Igire Rwanda Organization',
      period: '2025',
      details: [
        'Built responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.',
        'Collaborated with team members to develop a Book Management App and other real-world projects.',
        'Gained practical experience in front-end development through project-based learning.'
      ]
    },
    {
      title: 'Web Development Trainee',
      company: 'AmaliTech',
      period: '2024',
      details: [
        'Completed hands-on training in HTML, CSS, and JavaScript.',
        'Built mini projects and practiced responsive design principles.',
        'Learned foundational front-end development and collaboration tools.'
      ]
    }
  ];

  return (
    <section id="experience" className="bg-cyan-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Experience</h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-cyan-900 shadow-lg rounded-xl p-6">
              <h3 className="text-2xl font-bold text-accent">{exp.title}</h3>
              <p className="text-lg text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-500 italic mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
