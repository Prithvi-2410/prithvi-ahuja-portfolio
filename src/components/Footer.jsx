import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-dark-border bg-dark-bg text-dark-text dark:text-white light:text-dark-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand Identity & Tagline */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 text-accent font-display font-bold flex items-center justify-center text-sm">
            PA
          </div>
          <div>
            <div className="font-display font-bold text-base text-dark-text dark:text-white light:text-dark-bg">
              Prithvi Ahuja
            </div>
            <div className="text-xs font-mono text-dark-muted">
              Building at the intersection of AI and the web.
            </div>
          </div>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/prithvi-2410"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-dark-muted hover:text-accent transition-colors text-xs font-mono flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/prithviahuja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-dark-muted hover:text-accent transition-colors text-xs font-mono flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-dark-muted hover:text-accent transition-colors text-xs font-mono flex items-center gap-1.5"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </div>

        {/* Right Back to Top & Copyright */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-dark-muted">
            © 2026 Prithvi Ahuja
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-dark-border bg-dark-card text-dark-muted hover:text-accent hover:border-accent flex items-center justify-center transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
