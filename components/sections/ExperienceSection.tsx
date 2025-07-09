'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "DailyMandir",
      location: "Remote",
      duration: "Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
    },
  ];

  return (
    <section id="experience" className="section-spacing bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="heading-xl text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="body-lg text-gray-300 max-w-3xl mx-auto">
            My journey as a developer, growing from a curious beginner to a seasoned professional 
            with expertise in modern web technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-orange-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="professional-card p-6">
                  <div className="mb-4">
                    <h3 className="subheading-lg text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-primary mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="body-md font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 caption mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 caption">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <p className="body-md text-gray-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}