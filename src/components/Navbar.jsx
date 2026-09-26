import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-dark-bg/85 dark:bg-dark-bg/85 light:bg-white/85 backdrop-blur-md border-b border-dark-border shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-3 text-white font-display font-bold text-lg tracking-tight"
        >
          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center font-mono font-bold text-sm group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
            PA
          </div>
          <div className="flex flex-col">
            <span className="text-dark-text dark:text-white light:text-dark-bg font-bold tracking-tight text-base group-hover:text-accent transition-colors">
              Prithvi Ahuja
            </span>
            <span className="text-[10px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Projects
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-surface/60 dark:bg-dark-card/60 light:bg-light-surface/60 backdrop-blur-md border border-dark-border px-4 py-1.5 rounded-full">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors duration-200 group ${
                  isActive
                    ? 'text-accent font-bold'
                    : 'text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-dark-text dark:hover:text-white light:hover:text-dark-bg'
                }`}
              >
                {item.label}
                {/* Active Pill / Sliding Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover Underline Slide */}
                {!isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="w-9 h-9 rounded-full border border-dark-border bg-dark-card/80 dark:bg-dark-card/80 light:bg-light-card text-dark-muted hover:text-accent dark:hover:text-accent flex items-center justify-center transition-all hover:scale-105"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-accent" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg bg-accent text-white overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-dark-border bg-dark-card text-dark-muted flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-accent" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Mobile Menu"
            className="w-10 h-10 rounded-lg border border-dark-border bg-dark-card text-white flex items-center justify-center focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[65px] z-30 bg-dark-bg/98 dark:bg-dark-bg/98 light:bg-white/98 backdrop-blur-xl flex flex-col justify-between px-8 py-10 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">Navigation</span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="font-display text-2xl font-bold text-dark-text dark:text-white light:text-dark-bg hover:text-accent transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-dark-border">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full py-3.5 text-center font-mono font-bold text-xs uppercase tracking-wider rounded-lg bg-accent text-white shadow-[0_0_25px_rgba(79,70,229,0.3)]"
              >
                Let's Talk
              </a>
              <div className="text-center text-xs font-mono text-dark-muted">
                Nagpur, India • prithviahuja24@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
