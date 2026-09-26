import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute('data-cursor') || '');
      } else if (e.target.closest('a, button, input, textarea, select')) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small Central Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#4F46E5]"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing Ring / View Pill */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-accent/60 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px] transition-colors duration-200 ${
          isHovered ? 'bg-accent/20 border-accent' : 'bg-transparent'
        }`}
        animate={{
          x: position.x,
          y: position.y,
          width: isHovered ? (hoverText ? 64 : 40) : 32,
          height: isHovered ? (hoverText ? 64 : 40) : 32,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {hoverText && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
