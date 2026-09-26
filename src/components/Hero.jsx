import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles, MapPin, GraduationCap, Code2, Infinity as InfinityIcon } from 'lucide-react';
import HeroVisual from './HeroVisual';
import StatCounter from './StatCounter';

export default function Hero({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lineVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: 0.2 + i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-tech-grid">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Masked Line-by-Line Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Category Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPUTER SCIENCE • AI • FULL STACK</span>
            </motion.div>

            {/* Main Headline - Line-by-Line Masked Reveal */}
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark-text dark:text-white light:text-dark-bg leading-[1.1] mb-6 flex flex-col">
              
              {/* Line 1 */}
              <div className="overflow-hidden pb-1">
                <motion.span
                  custom={0}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block"
                >
                  I build
                </motion.span>
              </div>

              {/* Line 2 */}
              <div className="overflow-hidden pb-1">
                <motion.span
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative inline-block text-accent"
                >
                  intelligent
                  <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-accent/40 rounded-full" />
                </motion.span>
              </div>

              {/* Line 3 */}
              <div className="overflow-hidden pb-1">
                <motion.span
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block"
                >
                  digital experiences.
                </motion.span>
              </div>

            </div>

            {/* Subhead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted font-normal max-w-xl leading-relaxed mb-8"
            >
              I'm <strong className="text-dark-text dark:text-white light:text-dark-bg font-semibold">Prithvi</strong> — a Computer Science undergraduate exploring AI/ML, Generative AI, Agentic AI and Full Stack Development.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-accent text-white shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:shadow-[0_0_35px_rgba(79,70,229,0.6)] hover:bg-accent-secondary transition-all duration-300"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border border-dark-border bg-dark-card/80 dark:bg-dark-card/80 light:bg-light-card text-dark-text dark:text-white light:text-dark-bg hover:border-accent hover:text-accent transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Resume</span>
              </button>
            </motion.div>

            {/* Small Metadata Cards / Stat Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-8 border-t border-dark-border"
            >
              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-card/50 dark:bg-dark-card/50 light:bg-light-surface border border-dark-border/60">
                <GraduationCap className="w-4 h-4 text-accent" />
                <div>
                  <div className="font-mono text-base font-bold text-dark-text dark:text-white light:text-dark-bg">
                    <StatCounter endValue="9.0" isDecimal={true} />
                  </div>
                  <div className="text-[10px] font-mono text-dark-muted">RCOEM CGPA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-card/50 dark:bg-dark-card/50 light:bg-light-surface border border-dark-border/60">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="font-mono text-base font-bold text-dark-text dark:text-white light:text-dark-bg">
                    0<StatCounter endValue="6" />
                  </div>
                  <div className="text-[10px] font-mono text-dark-muted">Featured Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-card/50 dark:bg-dark-card/50 light:bg-light-surface border border-dark-border/60">
                <InfinityIcon className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="font-mono text-base font-bold text-dark-text dark:text-white light:text-dark-bg">
                    ∞
                  </div>
                  <div className="text-[10px] font-mono text-dark-muted">Curiosity</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-card/50 dark:bg-dark-card/50 light:bg-light-surface border border-dark-border/60">
                <MapPin className="w-4 h-4 text-rose-400" />
                <div>
                  <div className="font-mono text-base font-bold text-dark-text dark:text-white light:text-dark-bg">Nagpur</div>
                  <div className="text-[10px] font-mono text-dark-muted">India</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Interactive Abstract AI Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
