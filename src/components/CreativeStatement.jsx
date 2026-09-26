import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const statements = [
  { text: 'I BUILD', dir: 1, accent: false },
  { text: 'I DESIGN', dir: -1, accent: true },
  { text: 'I EXPERIMENT', dir: 1, accent: false },
  { text: 'I LEARN', dir: -1, accent: false },
  { text: 'I SHIP', dir: 1, accent: true },
];

export default function CreativeStatement() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xRight = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 relative border-t border-dark-border bg-dark-bg/80 overflow-hidden select-none"
    >
      <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 font-display font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        {statements.map((st, idx) => {
          const xMotion = st.dir === 1 ? xRight : xLeft;
          return (
            <motion.div
              key={idx}
              style={{ x: xMotion }}
              className={`whitespace-nowrap transition-colors duration-300 ${
                st.accent
                  ? 'text-accent drop-shadow-[0_0_25px_rgba(79,70,229,0.3)]'
                  : 'text-dark-text/30 dark:text-white/20 light:text-dark-bg/20 hover:text-white'
              }`}
            >
              {st.text}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
