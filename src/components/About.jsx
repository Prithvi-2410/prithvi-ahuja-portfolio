import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Layers, Layout, RefreshCw } from 'lucide-react';

const infoBlocks = [
  {
    icon: Target,
    title: 'FOCUS',
    value: 'AI / ML & Agentic Systems',
    desc: 'Deep learning, YOLO vision, LLMs, prompt architecture & agentic workflows.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30',
  },
  {
    icon: Layers,
    title: 'BUILDING',
    value: 'AI + Web Applications',
    desc: 'Connecting Python backend microservices to responsive React interfaces.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Layout,
    title: 'DESIGN',
    value: 'UI / UX + Figma',
    desc: 'Crafting thoughtful typography, clear information hierarchy & polished prototypes.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
  },
  {
    icon: RefreshCw,
    title: 'APPROACH',
    value: 'Learn → Build → Iterate',
    desc: 'Rapidly learning modern tools, writing clean code, and constantly refining products.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative border-t border-dark-border bg-dark-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-4"
        >
          01 / ABOUT
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Hero Statement */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark-text dark:text-white light:text-dark-bg leading-tight"
            >
              I like turning practical problems into useful digital products.
            </motion.h2>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-dark-muted dark:text-dark-muted light:text-light-muted text-base leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a Computer Science undergraduate focused on AI/ML, Generative AI, Agentic AI and Full Stack Development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I enjoy building practical applications where intelligent systems meet thoughtful interfaces. Rather than treating AI as a buzzword, I use models like YOLO, Gemini, and custom agents to solve tangible user challenges.
            </motion.p>
          </div>

        </div>

        {/* Information Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {infoBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="editorial-card p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${block.bgColor} ${block.borderColor} border flex items-center justify-center ${block.color} mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-dark-muted uppercase mb-1">
                  {block.title}
                </div>
                <div className="font-display font-bold text-dark-text dark:text-white light:text-dark-bg text-lg mb-2">
                  {block.value}
                </div>
                <p className="text-xs text-dark-muted leading-relaxed">
                  {block.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
