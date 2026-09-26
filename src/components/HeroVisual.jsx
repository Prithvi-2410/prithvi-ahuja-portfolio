import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Sparkles, Network } from 'lucide-react';

export default function HeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse coordinate (-1 to 1)
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Outer Orbit Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed border-accent/20"
      />

      {/* Outer Orbit Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-6 rounded-full border border-accent/15"
      />

      {/* SVG Neural Connections & Pulse Signals */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
        <defs>
          <radialGradient id="systemGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50%" cy="50%" r="40%" fill="url(#systemGlow)" />
        
        {/* Connecting signal lines */}
        <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="rgba(79,70,229,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="80%" y2="28%" stroke="rgba(79,70,229,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(79,70,229,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="78%" y2="72%" stroke="rgba(79,70,229,0.3)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Central Core Monogram Node with Parallax */}
      <motion.div
        animate={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="relative z-20 w-28 h-28 rounded-3xl bg-dark-card border-2 border-accent shadow-[0_0_50px_rgba(79,70,229,0.4)] flex flex-col items-center justify-center p-3 text-center"
      >
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-1">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="font-display font-bold text-white text-base tracking-wider">PA CORE</span>
        <span className="text-[9px] font-mono text-accent-light uppercase">Neural Hub</span>
      </motion.div>

      {/* Floating Node 1: AI / Vision (Top Left) */}
      <motion.div
        animate={{
          x: mousePos.x * -1 + 10,
          y: mousePos.y * -1 - 10,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        className="absolute top-[12%] left-[10%] z-20 px-3.5 py-2 rounded-xl bg-dark-card/90 border border-accent/40 shadow-xl backdrop-blur-md flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-mono font-semibold text-white">YOLOv8 + OpenCV</div>
          <div className="text-[9px] font-mono text-emerald-400">FPS: 60 | Risk: Low</div>
        </div>
      </motion.div>

      {/* Floating Node 2: Generative AI (Top Right) */}
      <motion.div
        animate={{
          x: mousePos.x * 1.2 - 5,
          y: mousePos.y * 1.2 - 15,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className="absolute top-[15%] right-[8%] z-20 px-3.5 py-2 rounded-xl bg-dark-card/90 border border-accent/40 shadow-xl backdrop-blur-md flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded-lg bg-accent/20 text-accent">
          <Terminal className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-mono font-semibold text-white">Gemini LLM API</div>
          <div className="text-[9px] font-mono text-accent-light">Prompt Engine</div>
        </div>
      </motion.div>

      {/* Floating Node 3: Agentic Workflows (Bottom Left) */}
      <motion.div
        animate={{
          x: mousePos.x * -0.8 - 15,
          y: mousePos.y * -0.8 + 10,
        }}
        transition={{ type: 'spring', stiffness: 110, damping: 13 }}
        className="absolute bottom-[14%] left-[12%] z-20 px-3.5 py-2 rounded-xl bg-dark-card/90 border border-accent/40 shadow-xl backdrop-blur-md flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
          <Network className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-mono font-semibold text-white">Agentic System</div>
          <div className="text-[9px] font-mono text-indigo-300">Tool Execution</div>
        </div>
      </motion.div>

      {/* Floating Node 4: Full Stack DB (Bottom Right) */}
      <motion.div
        animate={{
          x: mousePos.x * 0.9 + 10,
          y: mousePos.y * 0.9 + 12,
        }}
        transition={{ type: 'spring', stiffness: 130, damping: 15 }}
        className="absolute bottom-[16%] right-[10%] z-20 px-3.5 py-2 rounded-xl bg-dark-card/90 border border-accent/40 shadow-xl backdrop-blur-md flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
          <Database className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-mono font-semibold text-white">FastAPI + React</div>
          <div className="text-[9px] font-mono text-cyan-300">REST / WebSockets</div>
        </div>
      </motion.div>
    </div>
  );
}
