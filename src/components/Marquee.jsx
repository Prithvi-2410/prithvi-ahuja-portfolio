import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const marqueeItems = [
  'AI / ML',
  'GENERATIVE AI',
  'AGENTIC AI',
  'FULL STACK',
  'UI / UX',
  'COMPUTER VISION',
  'CREATIVE TECHNOLOGY',
];

export default function Marquee() {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);
  }, []);

  // Repeat sequence 4 times for seamless infinite loop width
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full py-4 bg-dark-bg/60 dark:bg-dark-bg/60 light:bg-light-surface/60 border-y border-dark-border overflow-hidden select-none relative z-20"
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={prefersReduced ? {} : { x: ['0%', '-50%'] }}
          transition={{
            duration: isHovered ? 60 : 30, // Slows down when hovered
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-6 sm:gap-10 shrink-0"
        >
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-10">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-dark-muted dark:text-dark-muted light:text-light-muted uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#4F46E5]" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
