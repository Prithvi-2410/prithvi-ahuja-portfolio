import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';
import ProjectVisual from './ProjectVisual';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectCard({ project, index, onSelectProject }) {
  const isEven = index % 2 === 0; // Alternating layout
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisualHovered, setIsVisualHovered] = useState(false);

  // Handle local visual cursor movement
  const handleVisualMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleLiveLinkClick = (e) => {
    e.stopPropagation();
    if (project.primaryUrl) {
      window.open(project.primaryUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelectProject(project);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="editorial-card rounded-3xl p-6 sm:p-8 md:p-10 cursor-pointer group relative overflow-hidden"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        
        {/* TEXT CONTENT COLUMN: Sequentially Staggered Elements */}
        <div className={`lg:col-span-6 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          
          {/* Step 1 & 2: Project Number & Category */}
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/30 group-hover:translate-x-1.5 transition-transform duration-300"
            >
              {project.id}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-xs font-mono font-semibold tracking-wider text-dark-muted uppercase"
            >
              {project.category}
            </motion.span>
          </div>

          {/* Step 3: Project Title Masked Upward Reveal */}
          <div className="overflow-hidden mb-4">
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.18 }}
              onClick={handleLiveLinkClick}
              className="font-display text-2xl sm:text-3xl font-bold text-dark-text dark:text-white light:text-dark-bg group-hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </motion.h3>
          </div>

          {/* Step 4: Description Fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm sm:text-base text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed mb-6"
          >
            {project.shortDescription}
          </motion.p>

          {/* Step 5: Technology Tags Staggered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.technologies.map((tech, tIdx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.25, delay: 0.35 + tIdx * 0.05 }}
                className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-dark-surface dark:bg-dark-surface light:bg-light-surface text-dark-text dark:text-white light:text-dark-bg border border-dark-border"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Links: Open Deployed Site & Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.42 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <button
              onClick={handleLiveLinkClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-secondary shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all"
            >
              <span>{project.liveUrl || project.figmaUrl ? 'Open Live Project' : 'View Code'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject(project);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dark-border bg-dark-card text-dark-text dark:text-white light:text-dark-bg font-mono text-xs font-bold uppercase tracking-wider hover:border-accent transition-colors"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </button>
          </motion.div>

        </div>

        {/* VISUAL PREVIEW COLUMN: Local Visual Cursor Interaction */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 35 : -35 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:col-span-6 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div
            onClick={handleLiveLinkClick}
            onMouseEnter={() => setIsVisualHovered(true)}
            onMouseLeave={() => setIsVisualHovered(false)}
            onMouseMove={handleVisualMouseMove}
            className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
          >
            {/* Visual Canvas Container with Tilt */}
            <div className="transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-transform duration-500">
              <ProjectVisual visualType={project.visualType} />
            </div>

            {/* Local Magnetic Visual Cursor Indicator */}
            {isVisualHovered && (
              <motion.div
                animate={{
                  x: mousePos.x - 24,
                  y: mousePos.y - 24,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="pointer-events-none absolute top-0 left-0 w-12 h-12 rounded-full bg-accent text-white font-mono text-[10px] font-bold tracking-wider flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.6)] z-30"
              >
                VIEW
              </motion.div>
            )}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
