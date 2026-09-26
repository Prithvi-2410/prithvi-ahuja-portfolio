import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code, Brain, Globe, Database, PenTool, Wrench } from 'lucide-react';

const categoryIcons = {
  PROGRAMMING: Code,
  'AI / ML': Brain,
  'WEB DEVELOPMENT': Globe,
  DATABASE: Database,
  DESIGN: PenTool,
  'DEVELOPMENT TOOLS': Wrench,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-28 relative border-t border-dark-border bg-dark-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-3"
          >
            03 / TOOLKIT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark-text dark:text-white light:text-dark-bg"
          >
            Tools I use to turn ideas into products.
          </motion.h2>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((cat, catIdx) => {
            const Icon = categoryIcons[cat.category] || Code;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                className="editorial-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-border">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs font-bold text-dark-text dark:text-white light:text-dark-bg tracking-wider uppercase">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill Items List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, skillIdx) => (
                      <div key={skill.name} className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-dark-text dark:text-white light:text-dark-bg">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-accent">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Animated Progress Line */}
                        <div className="h-1.5 w-full bg-dark-surface dark:bg-dark-surface light:bg-light-surface rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 0.35, delay: 0.2 + skillIdx * 0.05, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                          />
                        </div>

                        <span className="text-[10px] font-mono text-dark-muted">
                          {skill.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
