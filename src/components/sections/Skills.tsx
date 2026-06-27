'use client';

import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      category: 'Platforms',
      skills: [
        { name: 'Shopify', level: 95 },
        { name: 'WordPress', level: 90 },
        { name: 'WooCommerce', level: 85 },
        { name: 'Webflow', level: 80 },
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'ChatGPT API', level: 90 },
        { name: 'Zapier', level: 95 },
        { name: 'Make.com', level: 90 },
        { name: 'Process Automation', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-bg-secondary dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Skills</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">My Expertise</h2>
          <p className="text-light max-w-2xl mx-auto">
            A comprehensive set of technical skills developed over 5+ years of professional experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="font-poppins font-semibold text-lg mb-6">{category.category}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between mb-2">
                      <p className="font-medium text-sm">{skill.name}</p>
                      <p className="text-primary text-sm font-semibold">{skill.level}%</p>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}