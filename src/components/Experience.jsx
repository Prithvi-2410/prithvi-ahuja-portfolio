import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Briefcase, Award, Users, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-28 relative border-t border-dark-border bg-tech-grid">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-3"
          >
            04 / EXPERIENCE & LEARNING
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark-text dark:text-white light:text-dark-bg"
          >
            Education, Internships & Growth.
          </motion.h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-dark-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-dark-bg border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />

              <div className="editorial-card p-6 sm:p-8 rounded-2xl relative">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/30">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Role & Org */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-text dark:text-white light:text-dark-bg mb-1">
                  {item.role}
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono text-dark-muted mb-4">
                  <span className="text-accent font-semibold">{item.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-dark-muted" /> {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-dark-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 text-xs text-dark-muted font-sans border-t border-dark-border pt-4">
                  {item.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
