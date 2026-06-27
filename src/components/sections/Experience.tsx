'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Digital Solutions Agency',
      period: '2023 - Present',
      desc: 'Leading web development projects, mentoring junior developers, and implementing modern technologies for various clients.',
      achievements: [
        'Delivered 30+ projects worth $500K+',
        'Led team of 3 junior developers',
        'Improved project delivery by 40%',
      ],
    },
    {
      title: 'Shopify Developer',
      company: 'E-Commerce Experts',
      period: '2021 - 2023',
      desc: 'Specialized in Shopify store development, customization, and optimization for high-growth e-commerce businesses.',
      achievements: [
        'Created 25+ Shopify stores',
        'Increased client sales by average 60%',
        'Expert in Liquid and custom integrations',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Tech Startup',
      period: '2020 - 2021',
      desc: 'Developed full-stack web applications using React, Node.js, and MongoDB for various startup clients.',
      achievements: [
        'Built 15+ web applications',
        'Reduced load time by 50%',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'Web Development Company',
      period: '2019 - 2020',
      desc: 'Started career building responsive websites and learning modern web development practices and technologies.',
      achievements: [
        'Created 20+ websites',
        'Mastered HTML, CSS, JavaScript',
        'Achieved 98% client satisfaction',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-bg-secondary dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Experience</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">My Journey</h2>
          <p className="text-light max-w-2xl mx-auto">
            A timeline of my professional experience and career growth in web development.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-24 h-16 w-1 bg-gradient-to-b from-primary to-transparent -translate-x-1/2" />
              )}

              <div className={`md:grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                {/* Timeline Dot */}
                <div className="hidden md:flex justify-end pb-4">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-primary rounded-full border-4 border-background dark:border-dark"
                  />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-2xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-poppins font-semibold text-xl mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-light text-sm whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-light mb-4">{exp.desc}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}