'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Splitr",
      description: "A full-stack splitting solution with remainder integration, inventory management, and real-time analytics. Built with modern technologies for optimal performance.",
      image: "https://i.ibb.co/wryzgKyL/Screenshot-2025-07-09-at-18-43-53.png",
      tech: ["Next.js", "Node.js", "Supabade", "Convex", "Docker"],
      githubUrl: "https://github.com/myselfsatyam/splitrrrrr_",
      liveUrl: "https://splitrrrrr.vercel.app/",
      featured: true,
      category: "Full Stack"
    },
    {
      title: "Animenota",
      description: "A high-performance, modern web application for exploring anime characters with an interactive Naruto-themed chatbot. Built with Next.js 13, TypeScript, and Framer Motion.",
      image: "https://i.ibb.co/wrgXgS4s/Screenshot-2025-07-09-at-18-33-00.png",
      tech: ["Next.js", "TypeScript", "Framer-motion", "Radix UI + shadcn/ui"],
      githubUrl: "https://github.com/myselfsatyam/AnimeNote",
      liveUrl: "https://anime-note-six.vercel.app/",
      featured: true,
      category: "Web App"
    },
    {
      title: "FYD",
      description: "A modern crm platform with real-time monitpring, task assigning, and advanced privacy controls.",
      image: "https://i.ibb.co/d4rCFSKC/Screenshot-2025-07-09-at-18-51-32.png",
      tech: ["Next.js", "Node.js", "Socket.IO", "MongoDB", "zod" , "Cors"],
      githubUrl: "https://github.com/myselfsatyam/fly_your_tech_project",
      liveUrl: "https://fly-your-tech-project.vercel.app/login",
      featured: true,
      category: "Mobile"
    },
  ];

  const filteredProjects = projects;

  return (
    <section id="projects" className="section-spacing bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="heading-xl text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="body-lg text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my technical skills and passion for creating 
            impactful solutions. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        

        {/* Projects Grid */}
        <div className="grid-container grid-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="professional-card overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full caption font-medium">
                      Featured
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="btn-secondary caption"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="btn-primary caption"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="subheading-md text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="caption bg-primary/20 text-primary px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="body-md text-gray-300 mb-4">
                    {project.description}
                  </p>

                 
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded caption"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="btn-primary"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}