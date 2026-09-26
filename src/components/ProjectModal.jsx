import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-dark-bg border border-dark-border rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-dark-border bg-dark-card text-dark-muted hover:text-white hover:border-accent flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/30">
                PROJECT {project.id}
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-dark-muted uppercase">
                {project.category}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              {project.title}
            </h2>
            <p className="text-base text-dark-muted leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Visual Stage */}
          <div className="w-full mb-8 rounded-2xl overflow-hidden border border-dark-border">
            <ProjectVisual visualType={project.visualType} />
          </div>

          {/* Case Study Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
            {/* Left Column: Problem & Architecture */}
            <div className="space-y-6">
              <div className="bg-dark-card/60 p-5 rounded-2xl border border-dark-border">
                <h4 className="font-mono text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> The Problem
                </h4>
                <p className="text-dark-muted leading-relaxed">
                  {project.details?.problem}
                </p>
              </div>

              <div className="bg-dark-card/60 p-5 rounded-2xl border border-dark-border">
                <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> What I Built
                </h4>
                <p className="text-dark-muted leading-relaxed">
                  {project.details?.whatIBuilt}
                </p>
              </div>
            </div>

            {/* Right Column: Key Features & Challenges */}
            <div className="space-y-6">
              <div className="bg-dark-card/60 p-5 rounded-2xl border border-dark-border">
                <h4 className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Key Features
                </h4>
                <ul className="space-y-2 text-dark-muted">
                  {project.details?.keyFeatures?.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-card/60 p-5 rounded-2xl border border-dark-border">
                <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Challenges & Results
                </h4>
                <p className="text-dark-muted leading-relaxed mb-2">
                  <strong className="text-white font-semibold">Challenge:</strong> {project.details?.challenges}
                </p>
                <p className="text-dark-muted leading-relaxed">
                  <strong className="text-white font-semibold">Result:</strong> {project.details?.results}
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-8 pt-6 border-t border-dark-border">
            <h4 className="text-xs font-mono font-bold text-dark-muted uppercase tracking-wider mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-dark-card border border-dark-border text-xs font-mono text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links Footer */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-dark-border">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-dark-border bg-dark-card text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                <span>Live Demo</span>
              </a>
            )}

            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-dark-border bg-dark-card text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-cyan-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Figma Prototype</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
