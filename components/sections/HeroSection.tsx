'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      {isClient && (
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXBjaDhrYzMwcHdkMjJqb3h2a2hwZGh1eWQwczdtdHoyaHd1amYxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yRYlmHTF1qJnu5bdeH/giphy.gif)',
              filter: 'brightness(0.3) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80"></div>
        </div>
      )}

      {/* Fallback background */}
      {!isClient && (
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80"></div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Content */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-lg text-white"
            >
              Satyam Sharma
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-xl text-primary"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-lg text-gray-300 max-w-2xl mx-auto"
            >
              Building scalable web applications with modern technologies. 
              Passionate about creating exceptional user experiences and robust backend systems.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
              size="lg"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/myselfsatyam", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/satyam-sharma-226301259/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:satyamsharma21589@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="p-3 bg-gray-800/70 hover:bg-primary/90 rounded-lg transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer group"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="caption text-gray-400 group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <div className="p-2 rounded-full border border-gray-600 group-hover:border-primary transition-colors">
              <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}