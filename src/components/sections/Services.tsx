'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Zap, Code, Palette, Settings } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Custom websites built with modern technologies. Responsive, fast, and beautiful.',
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Development',
      desc: 'Complete Shopify store setup, customization, and optimization for e-commerce success.',
    },
    {
      icon: Code,
      title: 'WordPress Development',
      desc: 'Professional WordPress sites with custom themes and plugins tailored to your needs.',
    },
    {
      icon: Zap,
      title: 'AI Automation',
      desc: 'Automate business processes with AI. Save time and increase efficiency dramatically.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful, user-friendly interfaces that convert visitors into customers.',
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      desc: 'Ongoing support, updates, and optimization for your website.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Services</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">What I Offer</h2>
          <p className="text-light max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl card-hover group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-light">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}