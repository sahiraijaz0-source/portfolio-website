'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Discovery & Consultation',
      desc: 'We start with a detailed consultation to understand your vision, goals, target audience, and project requirements.',
      points: [
        'In-depth project discussion',
        'Understanding your vision',
        'Discussing timeline & budget',
        'Identifying key deliverables',
      ],
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Planning & Strategy',
      desc: 'I create a comprehensive plan outlining the project scope, design approach, technology stack, and development timeline.',
      points: [
        'Wireframing & planning',
        'Technology selection',
        'Timeline & milestones',
        'Risk assessment',
      ],
    },
    {
      icon: Code,
      number: '03',
      title: 'Development & Implementation',
      desc: 'Building your project using best practices, clean code, and the latest technologies with regular progress updates.',
      points: [
        'Agile development process',
        'Regular progress updates',
        'Code quality standards',
        'Testing & optimization',
      ],
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Delivery & Support',
      desc: 'Project delivery, training, and ongoing support to ensure smooth operation and continued success.',
      points: [
        'Final testing & QA',
        'Project handover',
        'Training & documentation',
        'Ongoing support',
      ],
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My Process</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">How I Work</h2>
          <p className="text-light max-w-2xl mx-auto">
            A proven 4-step process that ensures project success from start to finish.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:[direction:rtl]'}`}>
                  {/* Content */}
                  <motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-2xl">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-primary font-bold text-sm mb-2">STEP {step.number}</p>
                        <h3 className="font-poppins font-semibold text-2xl">{step.title}</h3>
                      </div>
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <p className="text-light mb-6">{step.desc}</p>

                    <div className="space-y-3">
                      {step.points.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (i * 0.05) }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Visual */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:flex justify-center"
                  >
                    <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden glass flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                      <div className="relative text-center">
                        <Icon className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-poppins font-bold gradient-text">{step.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block h-8 flex justify-center mt-8"
                  >
                    <div className="w-1 bg-gradient-to-b from-primary to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-light mb-6">Ready to begin your project?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-secondary text-white rounded-3xl font-medium transition-all duration-300"
          >
            Let's Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}