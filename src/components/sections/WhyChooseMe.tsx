'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Target, Users, Award, Clock } from 'lucide-react';

export function WhyChooseMe() {
  const reasons = [
    {
      icon: Award,
      title: 'Proven Expertise',
      desc: '5+ years of experience with 100+ successful projects across multiple technologies and platforms.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      desc: 'Quick turnaround times without compromising on quality. Your project is my priority.',
    },
    {
      icon: Target,
      title: 'Results Oriented',
      desc: 'Focus on delivering measurable results that directly impact your business growth and revenue.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      desc: 'Your vision is my mission. I work closely with you to ensure complete satisfaction.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Ongoing support and maintenance to ensure your website runs smoothly at all times.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assured',
      desc: 'Every project goes through rigorous testing and quality checks before delivery.',
    },
  ];

  const benefits = [
    'Custom solutions tailored to your needs',
    'Latest technologies and best practices',
    'SEO optimized for maximum visibility',
    'Mobile-responsive design',
    'Fast loading speeds',
    'Secure and reliable',
    'Scalable architecture',
    'Excellent communication',
  ];

  return (
    <section id="why-choose" className="py-20 bg-bg-secondary dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Why Choose Me</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Why Work With Me</h2>
          <p className="text-light max-w-2xl mx-auto">
            Discover what makes me different and why 50+ satisfied clients trust me with their projects.
          </p>
        </motion.div>

        {/* Main Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl card-hover"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">{reason.title}</h3>
                <p className="text-light">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-2xl"
        >
          <h3 className="font-poppins font-semibold text-2xl mb-8">What You Get</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-light mb-6">Ready to transform your vision into reality?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-secondary text-white rounded-3xl font-medium transition-all duration-300"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}