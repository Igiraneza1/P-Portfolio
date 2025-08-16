import React from "react";
import { motion } from "framer-motion";
import data from "../types/data"; 

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Skills() {
  const categories = [
    "Languages",
    "Frameworks",
    "VersionControl",
    "Tools",
    "Database",
    "CloudServices",
    "Testing",
  ];

  return (
    <section id="skills" className="min-h-screen bg-cyan-900 p-10">
      <motion.h1
        className="text-5xl md:text-5xl font-bold text-left text-primary mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h1>

      <div className="max-w-7xl mx-auto space-y-16">
        {categories.map((category) => (
          <motion.div
            key={category}
            className="grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-accent text-left">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data[category]
                ?.slice()
                .sort((a, b) => b.value - a.value)
                .map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
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

                    
                    <div className="w-full bg-gray-300 rounded-full h-3 mt-2">
                      <div
                        className="h-3 rounded-full"
                        style={{
                          width: `${skill.value}%`,
                          backgroundColor: skill.color,
                        }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}

        {/* Soft Skills */}
        <motion.div
          className="p-5 rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-accent text-left">
            Soft Skills
          </h2>
          <ul className="space-y-4 text-lg font-medium list-disc list-inside">
            {data.softSkills.map((skill, index) => (
              <li
                key={index}
                className="hover:text-primary transition-colors duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
