'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup CEO',
      text: 'Rukhma is an exceptional developer. She delivered our portfolio website on time and exceeded all expectations. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Mike Chen',
      company: 'E-Commerce Owner',
      text: 'The Shopify store Rukhma built increased our sales by 60% in just 3 months. Amazing work and great communication throughout the project.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      company: 'Marketing Manager',
      text: 'Working with Rukhma on our WordPress blog was a game-changer. She understood our brand and delivered a beautiful, functional website.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      name: 'David Park',
      company: 'Business Owner',
      text: 'Rukhma automated our entire inventory system with AI. It saved us 20+ hours per week and reduced errors by 95%. Best investment ever!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      name: 'Lisa Thompson',
      company: 'Agency Owner',
      text: 'We partnered with Rukhma for multiple projects. Her attention to detail, technical expertise, and professional approach are outstanding.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89f?w=100&h=100&fit=crop',
    },
    {
      name: 'James Wilson',
      company: 'Startup Founder',
      text: 'Rukhma transformed our vision into reality. The dashboard she built is performant, beautiful, and user-friendly. Truly exceptional work!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500595046891-9d5f0e01deec?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">What Clients Say</h2>
          <p className="text-light max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my satisfied clients have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-light mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-light text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-4xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}