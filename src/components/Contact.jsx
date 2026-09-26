import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FAQ from './FAQ';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

const projectTypes = ['AI / ML', 'Web Development', 'UI / UX', 'Automation', 'Other'];
const budgetRanges = ['Student / Learning Project', '₹10k–₹25k', '₹25k–₹50k', '₹50k+'];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI / ML',
    budget: 'Student / Learning Project',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const mailtoUrl = `mailto:prithviahuja24@gmail.com?subject=Project Inquiry (${formData.projectType}) from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-28 relative border-t border-dark-border bg-tech-grid">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Editorial CTA & Direct Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-3"
            >
              05 / CONTACT
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark-text dark:text-white light:text-dark-bg leading-tight mb-6"
            >
              Have an idea? <br />Let's build it.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-dark-muted leading-relaxed mb-8"
            >
              Whether it's an AI experiment, a web experience or a design problem, send me the details. I am always open to discussing new opportunities, collaborations, or tech concepts.
            </motion.p>

            {/* Direct Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <a
                href="mailto:prithviahuja24@gmail.com"
                className="editorial-card p-4 rounded-xl flex items-center gap-4 group hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-dark-muted uppercase">Direct Email</div>
                  <div className="font-mono text-sm font-bold text-dark-text dark:text-white light:text-dark-bg group-hover:text-accent transition-colors">
                    prithviahuja24@gmail.com
                  </div>
                </div>
              </a>

              <div className="editorial-card p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-dark-muted uppercase">Location</div>
                  <div className="font-mono text-sm font-bold text-dark-text dark:text-white light:text-dark-bg">
                    Nagpur, Maharashtra, India
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://github.com/prithvi-2410"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-dark-card border border-dark-border text-dark-muted hover:text-white hover:border-accent flex items-center justify-center transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/prithviahuja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-dark-card border border-dark-border text-dark-muted hover:text-white hover:border-accent flex items-center justify-center transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-11 h-11 rounded-xl bg-dark-card border border-dark-border text-dark-muted hover:text-white hover:border-accent flex items-center justify-center transition-all hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="editorial-card p-6 sm:p-10 rounded-3xl"
            >
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-dark-muted max-w-md mb-8">
                    Your response details have been structured. Click below to trigger direct delivery via your mail client.
                  </p>
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(79,70,229,0.4)]"
                  >
                    <Send className="w-4 h-4" /> Send Email Now
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono text-dark-muted underline"
                  >
                    Edit Form Data
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-dark-muted uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface/60 border border-dark-border text-dark-text dark:text-white light:text-dark-bg text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                      {errors.name && <span className="text-[10px] text-rose-400 font-mono mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-dark-muted uppercase mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface/60 border border-dark-border text-dark-text dark:text-white light:text-dark-bg text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                      {errors.email && <span className="text-[10px] text-rose-400 font-mono mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Project Type Options */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-dark-muted uppercase mb-3">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((pt) => (
                        <button
                          key={pt}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: pt })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                            formData.projectType === pt
                              ? 'bg-accent text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]'
                              : 'bg-dark-surface border border-dark-border text-dark-muted hover:text-white'
                          }`}
                        >
                          {pt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-dark-muted uppercase mb-3">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                            formData.budget === b
                              ? 'bg-accent text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]'
                              : 'bg-dark-surface border border-dark-border text-dark-muted hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-dark-muted uppercase mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project goals, timelines, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface/60 border border-dark-border text-dark-text dark:text-white light:text-dark-bg text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                    {errors.message && <span className="text-[10px] text-rose-400 font-mono mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-accent text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:shadow-[0_0_35px_rgba(79,70,229,0.6)] hover:bg-accent-secondary transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Details</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <FAQ />

      </div>
    </section>
  );
}
