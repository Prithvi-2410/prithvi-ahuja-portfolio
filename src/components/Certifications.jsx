import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certificationsData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="py-24 relative border-t border-dark-border bg-dark-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-3"
          >
            CERTIFICATIONS & VERIFICATIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-dark-text dark:text-white light:text-dark-bg"
          >
            Verified domain credentials.
          </motion.h2>
        </div>

        {/* Compact Grid of Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="editorial-card p-6 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/30">
                    {cert.category}
                  </span>
                  <span className="text-[10px] font-mono text-dark-muted">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-dark-text dark:text-white light:text-dark-bg group-hover:text-accent transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-accent font-semibold mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-dark-border flex flex-wrap gap-1.5">
                {cert.skills.map((sk) => (
                  <span key={sk} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-surface text-dark-muted">
                    {sk}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
