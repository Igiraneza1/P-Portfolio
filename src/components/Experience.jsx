import React from "react";
import { motion } from "framer-motion";

function Experience() {
 const experiences = [
  {
    title: "IT Officer",
    company: "ICT Department",
    period: "Present",
    details: [
      "Provide daily IT support, troubleshooting hardware, software, and network issues across hospital departments.",
      "Maintain ICT infrastructure, ensuring system security, stability, backups, and data confidentiality.",
      "Install, configure, and manage computers, printers, and other ICT equipment.",
      "Monitor system performance and support users to ensure smooth hospital operations.",
      "Assist in ICT planning, reporting, and implementation of digital system improvements."
    ],
  },
  {
    title: "Advanced Front-End Developer Trainee",
    company: "Igire Rwanda Organization",
    period: "2025",
    details: [
      "Built responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.",
      "Collaborated with team members to develop a Book Management App and other real-world projects.",
      "Gained practical experience in front-end development through project-based learning."
    ],
  },
  {
    title: "Backend Development Trainee",
    company: "Solvit Africa",
    period: "2025",
    details: [
      "Learned backend development fundamentals including server-side logic and API development.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Worked with MongoDB and PostgreSQL for data storage and management.",
      "Practiced authentication, authorization, and secure backend system design.",
      "Followed software development best practices in collaborative projects."
    ],
  },
  {
    title: "Web Development Trainee",
    company: "AmaliTech",
    period: "2024",
    details: [
      "Completed hands-on training in HTML, CSS, and JavaScript.",
      "Built mini projects and practiced responsive design principles.",
      "Learned foundational front-end development and collaboration tools."
    ],
  },
];

  // Variants for zoom-in effect
  const zoomInVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="bg-cyan-950 dark:bg-gray-900 py-16 px-6 text-gray-100 dark:text-gray-200">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-gray-200 dark:text-gray-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-cyan-950 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 shadow-lg rounded-xl p-6"
              variants={zoomInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-accent dark:text-gray-100"
                variants={zoomInVariant}
              >
                {exp.title}
              </motion.h3>
              <motion.p
                className="text-lg text-gray-300"
                variants={zoomInVariant}
              >
                {exp.company}
              </motion.p>
              <motion.p
                className="text-sm text-gray-500 dark:text-gray-400 italic mb-4"
                variants={zoomInVariant}
              >
                {exp.period}
              </motion.p>
              <motion.ul
                className="list-disc list-inside space-y-1 text-gray-950 font-semibold"
                variants={zoomInVariant}
              >
                {exp.details.map((point, i) => (
                  <motion.li key={i} variants={zoomInVariant}>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
