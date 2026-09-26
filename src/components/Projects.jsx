import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-28 relative border-t border-dark-border bg-tech-grid">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag & Headline */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-3"
          >
            02 / SELECTED WORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark-text dark:text-white light:text-dark-bg"
          >
            Projects that show how I think.
          </motion.h2>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
