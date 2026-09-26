import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, GraduationCap, Award, Briefcase, Code, Mail, Phone, MapPin } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Resume Sheet Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl bg-[#0F172A] border border-dark-border rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto font-sans"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full border border-dark-border bg-dark-card text-dark-muted hover:text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Identity */}
          <div className="border-b border-dark-border pb-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/30">
                CURRICULUM VITAE
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                B.Tech CS • CGPA 9.0
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-2">PRITHVI AHUJA</h2>
            <p className="text-xs font-mono text-accent-light mb-4">
              Aspiring AI/ML Engineer | Agentic AI, Generative AI & Full Stack Development
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-dark-muted">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-accent" /> Nagpur, India</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-accent" /> prithviahuja24@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-accent" /> +91 86682 82619</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h3 className="font-mono text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Profile Summary
            </h3>
            <p className="text-xs text-dark-muted leading-relaxed bg-dark-card/60 p-4 rounded-xl border border-dark-border">
              Computer Science undergraduate specializing in AI/ML, Generative AI, Agentic AI, and Full Stack Development. Experienced in building AI-powered applications and intelligent automation solutions using Python, JavaScript, React, and modern web technologies. Strong foundation in OOP, problem-solving, and software engineering.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="font-mono text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="space-y-3">
              <div className="bg-dark-card/60 p-4 rounded-xl border border-dark-border flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Shri Ramdeobaba College of Engineering and Management</h4>
                  <p className="text-xs text-dark-muted font-mono">B.Tech in Computer Science</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-accent font-bold">2024 — 2028</span>
                  <span className="block text-[11px] font-mono text-emerald-400 font-semibold">CGPA: 9.0</span>
                </div>
              </div>

              <div className="bg-dark-card/60 p-4 rounded-xl border border-dark-border flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Bhavan's Bhagwandas Purohit Vidya Mandir</h4>
                  <p className="text-xs text-dark-muted font-mono">CBSE Class 10</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-accent font-bold">2009 — 2022</span>
                  <span className="block text-[11px] font-mono text-emerald-400 font-semibold">93%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Projects & Internships */}
          <div className="mb-6">
            <h3 className="font-mono text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Featured Work & Internships
            </h3>
            <div className="space-y-3 text-xs text-dark-muted">
              <div className="bg-dark-card/60 p-4 rounded-xl border border-dark-border">
                <div className="font-bold text-white text-sm mb-1">CrowdSense AI — Crowd Monitoring & Risk Detection</div>
                <p>YOLO, OpenCV, FastAPI & React video analysis system for real-time crowd risk indicators.</p>
              </div>
              <div className="bg-dark-card/60 p-4 rounded-xl border border-dark-border">
                <div className="font-bold text-white text-sm mb-1">Infosys Springboard Virtual Internship 7.0</div>
                <p>Selected after proctored assessment for virtual software engineering internship.</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h3 className="font-mono text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Certifications
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-lg text-slate-300">Prompt Engineering (Coursera)</span>
              <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-lg text-slate-300">Data Science & Analytics (HP)</span>
              <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-lg text-slate-300">AI on Public Cloud (RCOEM)</span>
              <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-lg text-slate-300">Cyber Security Internship (Edureka)</span>
            </div>
          </div>

          {/* Modal Action Bar */}
          <div className="pt-6 border-t border-dark-border flex items-center justify-between">
            <span className="text-xs font-mono text-dark-muted">
              Updated September 2026
            </span>
            <button
              onClick={() => alert("Downloading Prithvi Ahuja's Resume PDF...")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-accent-secondary transition-colors"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
