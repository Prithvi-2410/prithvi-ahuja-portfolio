import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ onComplete }) {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = sessionStorage.getItem('pa_seen_intro');

    if (prefersReducedMotion || hasSeenIntro) {
      setShouldShow(false);
      onComplete();
      return;
    }

    // Auto complete after ~2.2 seconds
    const timer = setTimeout(() => {
      sessionStorage.setItem('pa_seen_intro', 'true');
      setShouldShow(false);
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F19] text-[#F8FAFC] overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
          {/* Monogram PA Mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-14 h-14 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(79,70,229,0.3)]"
          >
            <span className="font-display font-bold text-accent text-lg tracking-widest">PA</span>
          </motion.div>

          {/* Name Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2"
          >
            PRITHVI AHUJA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            className="text-xs sm:text-sm font-mono tracking-widest text-accent-light uppercase mb-6"
          >
            AI • FULL STACK • CREATIVE TECHNOLOGY
          </motion.p>

          {/* Expanding Thin Accent Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '120px', opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1, ease: 'easeInOut' }}
            className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
