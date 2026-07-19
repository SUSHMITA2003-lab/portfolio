import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, User, Mail, Phone, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4">
          <motion.div
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-3xl bg-dark-900 border border-neon-indigo/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-neon-indigo/30 z-10 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-dark-950 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-6 mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs mb-1">
                  <FileText className="w-4 h-4" /> OFFICIAL DOCUMENT
                </div>
                <h3 className="text-2xl font-bold text-white">Sushmitha S — Resume Overview</h3>
              </div>

              <a
                href="/resume.pdf"
                download="Sushmitha_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-indigo to-neon-cyan text-white text-xs font-mono font-bold shadow-neon-cyan hover:scale-105 transition-transform shrink-0"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>

            {/* Resume Content Grid */}
            <div className="space-y-6 text-xs text-slate-300">
              {/* Contact Header */}
              <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 flex flex-wrap gap-4 text-slate-300 font-mono">
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-neon-cyan" /> Sushmitha S</span>
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-neon-cyan" /> sushmi0903@gmail.com</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-neon-cyan" /> +91 7510104667</span>
                <span className="flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5 text-neon-cyan" /> linkedin.com/in/sushmithas2003</span>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-neon-cyan tracking-wider mb-2">Summary</h4>
                <p className="leading-relaxed bg-dark-950/50 p-3 rounded-xl border border-slate-800/60">
                  Computer Science Engineering student with a strong foundation in software development and full-stack web technologies. Proficient in Java, JavaScript, and React.js, with experience building responsive applications, working with RESTful APIs, and MySQL databases.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-neon-cyan tracking-wider mb-2">Experience & Training</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-dark-950/50 border border-slate-800/60">
                    <div className="flex justify-between font-bold text-white mb-1">
                      <span>Java Full Stack Developer Intern — BESANT TECHNOLOGY</span>
                      <span className="text-neon-cyan font-mono text-[11px]">May 2026 – Present</span>
                    </div>
                    <p>Developed web applications using Java, Spring Boot, HTML, CSS, JavaScript. Built RESTful APIs and managed MySQL databases.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-950/50 border border-slate-800/60">
                    <div className="flex justify-between font-bold text-white mb-1">
                      <span>Java Full Stack Training — AISECT Powered by Capgemini</span>
                      <span className="text-neon-cyan font-mono text-[11px]">Dec 2025 – May 2026</span>
                    </div>
                    <p>Learned Java, Spring Boot, SQL, and REST APIs. Built backend applications tested using Postman.</p>
                  </div>
                </div>
              </div>

              {/* Projects Summary */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-neon-cyan tracking-wider mb-2">Projects</h4>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-dark-950/50 border border-slate-800/60">
                    <strong className="text-white">Food Delivery System (FoodDash):</strong> Java, Spring Boot, React.js, MySQL, REST APIs.
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-950/50 border border-slate-800/60">
                    <strong className="text-white">Cab Booking System:</strong> Java, Spring Boot, React.js, MySQL, REST APIs.
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-950/50 border border-slate-800/60">
                    <strong className="text-white">E-Commerce Database Management System:</strong> SQL, MySQL, Views, Procedures.
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-neon-cyan tracking-wider mb-2">Education</h4>
                  <p className="bg-dark-950/50 p-3 rounded-xl border border-slate-800/60">
                    <strong className="text-white">B.E. Computer Science Engineering</strong><br />
                    EASA College (2022–2026) | CGPA: 9.0
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-neon-cyan tracking-wider mb-2">Certifications</h4>
                  <p className="bg-dark-950/50 p-3 rounded-xl border border-slate-800/60">
                    • HackerRank SQL (Intermediate)<br />
                    • GitHub Career Essentials Professional
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
