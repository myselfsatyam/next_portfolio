'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Server, Smartphone, Shield } from 'lucide-react';

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Globe, 
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      level: 92
    },
    { 
      name: 'Backend Development', 
      icon: Server, 
      description: 'Node.js, Python, Express, FastAPI',
      level: 90
    },
    { 
      name: 'Database Management', 
      icon: Database, 
      description: 'PostgreSQL, MongoDB, Redis',
      level: 85
    },
    { 
      name: 'DevOps & Cloud', 
      icon: Code, 
      description: 'Docker, AWS, CI/CD, Kubernetes',
      level: 88
    },
    { 
      name: 'Security', 
      icon: Shield, 
      description: 'Authentication, Encryption, Best Practices',
      level: 82
    },
  ];

  return (
    <section id="about" className="section-spacing bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="heading-xl text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="body-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 1+ years of experience building 
            scalable web applications. I love turning complex problems into simple, 
            beautiful solutions that users enjoy.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="professional-card p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Info */}
            <div>
              <h3 className="heading-md text-white mb-4">Developer Profile</h3>
              <div className="space-y-4">
                {[
                  { label: "Experience", value: "1+ Years" },
                  { label: "Specialization", value: "Full Stack Development" },
                  { label: "Location", value: "Ghaziabad , India" },
                  { label: "Focus", value: "Modern Web Technologies" }
                ].map((item, index) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="caption text-gray-400">{item.label}:</span>
                    <span className="body-md text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "20+", label: "Projects Completed" },
                { number: "10+", label: "Technologies" },
                { number: "100%", label: " chasing Satisfaction" },
                { number: "24/7", label: "Problem Solving" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-gray-800/50 rounded-lg"
                >
                  <div className="heading-md text-primary mb-1">{stat.number}</div>
                  <div className="caption text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="heading-md text-white text-center mb-8">Technical Skills</h3>
          
          <div className="grid-container grid-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="professional-card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg mr-4">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="subheading-md text-white">{skill.name}</h4>
                    <p className="caption text-gray-400">{skill.description}</p>
                  </div>
                </div>
                
                {/* Skill Level */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="caption text-gray-400">Proficiency</span>
                    <span className="caption text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-primary to-orange-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}