import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { useTheme } from './hooks/useTheme';

import IntroLoader from './components/IntroLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import CreativeStatement from './components/CreativeStatement';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [introCompleted, setIntroCompleted] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    } catch (e) {
      console.warn("Lenis smooth scroll initialized with fallback:", e);
    }
  }, []);

  return (
    <div className={`min-h-screen bg-dark-bg text-dark-text transition-colors duration-300 font-sans ${theme}`}>
      {/* 1. Opening Intro Loader */}
      <IntroLoader onComplete={() => setIntroCompleted(true)} />

      {/* 2. Magnetic Desktop Custom Cursor */}
      <CustomCursor />

      {/* 3. Sticky Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* 4. Seamless Continuous Visual Flow */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Marquee />
        <About />
        <Projects />
        <CreativeStatement />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* 5. Minimal Footer */}
      <Footer />

      {/* 6. Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
