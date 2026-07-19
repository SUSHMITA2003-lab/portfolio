import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Send, Github, Linkedin, Mail, Phone, Code2, Database, Layers } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Parallax Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Typewriter Subtitle
  const roles = [
    'Java Full Stack Developer',
    'Spring Boot & REST API Engineer',
    'React.js Frontend Developer',
    'MySQL Database Architect'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const nameLetters = "Sushmitha S".split("");

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden z-10 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Available Status Pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-indigo/10 border border-neon-indigo/30 text-neon-cyan text-xs font-mono font-semibold mb-6 shadow-neon-cyan/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
              <span>Available for Full-Time & Internship Roles</span>
            </motion.div>

            {/* Greeting & Letter-by-Letter Name Reveal */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              <span className="text-slate-400 font-medium block text-xl sm:text-2xl mb-1">Hi, I'm</span>
              <span className="inline-flex flex-wrap">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    className="gradient-text inline-block hover:scale-110 transition-transform duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Typewriter Role Subtitle */}
            <div className="h-10 mb-6 flex items-center">
              <span className="font-mono text-xl sm:text-2xl font-bold text-neon-cyan tracking-wide">
                {displayText}
              </span>
              <span className="w-0.5 h-6 bg-neon-cyan ml-1 animate-pulse" />
            </div>

            {/* Pitch Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              Computer Science Engineering student specializing in building robust web applications using <strong>Java, Spring Boot</strong>, responsive <strong>React.js</strong> interfaces, and <strong>MySQL</strong> databases.
            </p>

            {/* Stats Bar (LeetCode removed) */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg mb-8 p-4 rounded-2xl bg-dark-900/80 border border-slate-800 backdrop-blur-md">
              <div className="text-center">
                <span className="block text-2xl font-bold font-mono gradient-text">9.0</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Degree CGPA</span>
              </div>
              <div className="text-center border-x border-slate-800">
                <span className="block text-2xl font-bold font-mono gradient-text">2+</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Internships</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold font-mono gradient-text">3+</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Core Systems</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-neon-indigo via-neon-violet to-neon-cyan text-white font-semibold text-sm shadow-neon-indigo hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-dark-900/80 border border-slate-700 text-slate-200 font-semibold text-sm hover:border-neon-cyan hover:text-white hover:bg-neon-indigo/20 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-semibold text-sm hover:bg-neon-cyan hover:text-dark-950 transition-all duration-300 shadow-neon-cyan/30"
              >
                <Send className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
              <a
                href="https://linkedin.com/in/sushmithas2003"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-slate-800 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan hover:scale-110 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sushmi0903@gmail.com"
                className="p-2.5 rounded-full bg-dark-900 border border-slate-800 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan hover:scale-110 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+917510104667"
                className="p-2.5 rounded-full bg-dark-900 border border-slate-800 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan hover:scale-110 transition-all"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-white hover:scale-110 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Frame */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Glowing Ambient Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-indigo via-neon-cyan to-neon-violet blur-[35px] opacity-60 animate-pulse-slow" />

              {/* Rotating Holographic Ring 1 */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-neon-cyan/40 animate-orbital" />

              {/* Rotating Holographic Ring 2 */}
              <div className="absolute -inset-8 rounded-full border border-neon-violet/30 animate-orbital-reverse" />

              {/* Circular Frame housing profile.jpeg */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-tr from-neon-cyan via-neon-indigo to-neon-violet shadow-2xl shadow-neon-indigo/50">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-900 border-4 border-dark-950">
                  <img
                    src="/profile.jpeg"
                    alt="Sushmitha S Profile"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="absolute top-2 -left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/90 border border-neon-indigo/50 text-xs font-mono font-semibold text-slate-100 backdrop-blur-md shadow-neon-indigo"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Code2 className="w-4 h-4 text-neon-amber" />
                <span>Java & Spring Boot</span>
              </motion.div>

              <motion.div
                className="absolute bottom-6 -right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/90 border border-neon-cyan/50 text-xs font-mono font-semibold text-slate-100 backdrop-blur-md shadow-neon-cyan"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Layers className="w-4 h-4 text-neon-cyan" />
                <span>React.js & REST APIs</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/90 border border-neon-green/50 text-xs font-mono font-semibold text-slate-100 backdrop-blur-md shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <Database className="w-4 h-4 text-neon-green" />
                <span>MySQL Databases</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
