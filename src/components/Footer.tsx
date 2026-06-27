'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-secondary dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-poppins font-bold gradient-text mb-2">RS</h3>
            <p className="text-light text-sm">Rukhma Shafqat</p>
            <p className="text-light text-sm">Website Developer • Digital Solutions Specialist • AI Automation Specialist</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-poppins font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-light hover:text-primary transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-poppins font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Shopify', 'AI Automation', 'WordPress'].map((service) => (
                <li key={service}>
                  <span className="text-light text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-poppins font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:am.irukh001@gmail.com" className="text-light hover:text-primary transition-colors text-sm">
                  am.irukh001@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923329549545" className="text-light hover:text-primary transition-colors text-sm">
                  +92 332 9549545
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-light text-sm">© 2025 Rukhma Shafqat. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary hover:bg-secondary transition-colors text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}