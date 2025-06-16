import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Advanced Front-End Developer Trainee",
      company: "Igire Rwanda Organization",
      period: "2025",
      details: [
        "Built responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.",
        "Collaborated with team members to develop a Book Management App and other real-world projects.",
        "Gained practical experience in front-end development through project-based learning.",
      ],
    },
    {
      title: "Web Development Trainee",
      company: "AmaliTech",
      period: "2024",
      details: [
        "Completed hands-on training in HTML, CSS, and JavaScript.",
        "Built mini projects and practiced responsive design principles.",
        "Learned foundational front-end development and collaboration tools.",
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
    <section id="experience" className="bg-cyan-950 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl text-gray-200 font-bold text-center text-primary mb-12"
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
              className="bg-cyan-950 border border-gray-400 shadow-lg rounded-xl p-6"
              variants={zoomInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-accent"
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
                className="text-sm text-gray-500 italic mb-4"
                variants={zoomInVariant}
              >
                {exp.period}
              </motion.p>
              <motion.ul
                className="list-disc list-inside space-y-1"
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
