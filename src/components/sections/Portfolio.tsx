'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Shopify',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
      desc: 'Full Shopify store with custom theme and integrations',
      tech: ['Shopify', 'Liquid', 'Custom CSS'],
    },
    {
      title: 'Business Automation',
      category: 'AI Automation',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8d87b7a7b3d0b5c5a?w=500&h=300&fit=crop',
      desc: 'Automated business process using Zapier and ChatGPT',
      tech: ['Zapier', 'ChatGPT API', 'Make.com'],
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      desc: 'Modern portfolio built with Next.js and Framer Motion',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'WordPress Blog',
      category: 'WordPress',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      desc: 'Custom WordPress site with advanced functionality',
      tech: ['WordPress', 'PHP', 'Custom Plugins'],
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      desc: 'Real-time dashboard application with analytics',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Mobile App Website',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      desc: 'Landing page for mobile application',
      tech: ['Next.js', 'Vercel', 'Framer'],
    },
    {
      title: 'Marketplace Integration',
      category: 'AI Automation',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      desc: 'Automated marketplace listing and inventory sync',
      tech: ['Make.com', 'APIs', 'Python'],
    },
    {
      title: 'Client Portal',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=500&h=300&fit=crop',
      desc: 'Secure client portal with authentication',
      tech: ['Next.js', 'Firebase', 'Stripe'],
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Featured Projects</h2>
          <p className="text-light max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise across different technologies and platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl card-hover group overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-poppins font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-light text-sm mb-4">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button className="flex-1 text-xs text-primary hover:text-secondary transition-colors font-medium py-2">
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-light mb-4">Want to see more projects?</p>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-secondary text-white rounded-3xl font-medium transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}