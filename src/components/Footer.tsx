import React, { useState } from 'react';
import { Terminal, Rocket } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isLaunching, setIsLaunching] = useState(false);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLaunching(false), 1200);
  };

  return (
    <footer className="relative bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 z-10 overflow-hidden">
      {/* Animated Top Wave Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2 font-mono font-bold text-xl text-white mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-neon-indigo to-neon-cyan flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span>Sushmitha<span className="text-neon-cyan">.S</span></span>
            </a>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Java Full Stack Developer • Building scalable backend microservices & modern web applications.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
            <a href="#skills" className="hover:text-neon-cyan transition-colors">Skills</a>
            <a href="#projects" className="hover:text-neon-cyan transition-colors">Projects</a>
            <a href="#experience" className="hover:text-neon-cyan transition-colors">Experience</a>
            <a href="#education" className="hover:text-neon-cyan transition-colors">Education</a>
            <a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a>
          </div>

          {/* Rocket Launch Back-To-Top Button */}
          <button
            onClick={scrollToTop}
            className={`group relative p-4 rounded-2xl bg-dark-900 border border-slate-800 hover:border-neon-cyan text-neon-cyan transition-all duration-300 ${
              isLaunching ? '-translate-y-12 opacity-80 scale-110' : 'hover:-translate-y-1'
            }`}
            title="Launch Back to Top"
          >
            <Rocket className={`w-6 h-6 transform transition-transform group-hover:-rotate-45 ${isLaunching ? 'animate-bounce text-neon-amber' : ''}`} />
            {isLaunching && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-4 bg-gradient-to-b from-neon-amber to-transparent rounded-full animate-ping" />
            )}
          </button>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>&copy; 2026 Sushmitha S. Engineered with React 19, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/sushmithas2003" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">LinkedIn</a>
            <a href="mailto:sushmi0903@gmail.com" className="hover:text-slate-300">Email</a>
            <a href="tel:+917510104667" className="hover:text-slate-300">Phone</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
