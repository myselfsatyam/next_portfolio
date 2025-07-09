'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/myselfsatyam', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/satyam-sharma-226301259/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:satyamsharma21589@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <Code2 className="h-8 w-8 text-primary" />
            <span className="heading-md text-white">Satyam Sharma</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-primary rounded-lg transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6 text-gray-300 group-hover:text-white" />
              </a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="body-md text-gray-300 hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-md"
          >
            <p className="body-md text-gray-400 italic">
              "The best way to predict the future is to create it."
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center space-x-2 text-gray-400 caption"
          >
          
          </motion.div>
        </div>
      </div>
    </footer>
  );
}