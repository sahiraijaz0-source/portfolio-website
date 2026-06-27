'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function About() {
  const highlights = [
    'Expert in Next.js, React, and TypeScript',
    'Shopify and WordPress specialist',
    'AI Automation & Process Optimization',
    '100+ successful projects delivered',
    'Passionate about clean code',
    'Client-focused approach',
  ];

  return (
    <section id="about" className="py-20 bg-bg-secondary dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Who I Am</h2>
          <p className="text-light max-w-2xl mx-auto">
            I'm a passionate web developer with 5+ years of experience creating beautiful, functional websites and digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-light mb-6">
              I started my journey as a developer with a passion for creating beautiful and functional web experiences. Over the years, I've worked with businesses of all sizes - from startups to established companies - helping them achieve their digital goals.
            </p>

            <p className="text-light mb-8">
              My expertise spans across multiple technologies and platforms. I specialize in building custom websites, developing Shopify stores, creating WordPress solutions, and implementing AI automation to streamline business processes.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { year: '2020', title: 'Started My Journey', desc: 'Began freelancing as a web developer' },
              { year: '2021', title: 'First Major Success', desc: 'Reached 20+ successful projects' },
              { year: '2022', title: 'Expanded Skills', desc: 'Added Shopify & AI expertise' },
              { year: '2025', title: 'Today', desc: '100+ projects, 50+ satisfied clients' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <p className="text-primary font-bold text-lg">{item.year}</p>
                <p className="font-poppins font-semibold mb-2">{item.title}</p>
                <p className="text-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}