import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';

interface BootLoaderProps {
  onComplete: () => void;
}

export const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState('Initializing Portfolio OS v4.0...');

  const bootLogs = [
    'Initializing Portfolio OS v4.0...',
    'Loading Component Modules & Assets...',
    'Rendering Aurora Canvas & Particle Engine...',
    'Establishing REST API & Database Connections...',
    'Welcome to Sushmitha S Developer Workspace.'
  ];

  useEffect(() => {
    const duration = 2800; // ~2.8 seconds
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(currentProgress);

      const logIndex = Math.min(
        bootLogs.length - 1,
        Math.floor((currentProgress / 100) * bootLogs.length)
      );
      setCurrentLog(bootLogs[logIndex]);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-dark-950 flex flex-col items-center justify-center p-6 select-none overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-neon-indigo/20 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-neon-cyan/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
        {/* Glowing Circular Loader */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-neon-indigo/30 animate-ping opacity-40" />
          <div className="absolute inset-0 rounded-full border-2 border-t-neon-cyan border-r-neon-violet border-b-transparent border-l-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-dashed border-neon-indigo/50 animate-spin-slow" />
          
          <div className="w-20 h-20 rounded-full bg-dark-900 border border-neon-cyan/40 flex items-center justify-center shadow-neon-cyan">
            <Cpu className="w-8 h-8 text-neon-cyan animate-pulse" />
          </div>
        </div>

        {/* OS Boot Title */}
        <h1 className="text-2xl font-bold font-mono tracking-wider gradient-text mb-2 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-neon-cyan" /> PORTFOLIO OS
        </h1>
        <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mb-6">
          Sushmitha S • Java Full Stack Developer
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900/80 border border-slate-800 rounded-full h-2 overflow-hidden mb-4 p-0.5 shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet shadow-neon-cyan"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        <div className="flex justify-between w-full text-xs font-mono text-slate-500 mb-6">
          <span>SYSTEM_BOOT</span>
          <span className="text-neon-cyan font-bold">{progress}%</span>
        </div>

        {/* System Terminal Logs Stream */}
        <div className="w-full bg-dark-900/90 border border-slate-800/80 rounded-xl p-3 text-left font-mono text-xs text-slate-300 min-h-[48px] flex items-center gap-3 backdrop-blur-md">
          <Zap className="w-4 h-4 text-neon-amber shrink-0 animate-bounce" />
          <span className="truncate">{currentLog}</span>
        </div>
      </div>
    </motion.div>
  );
};
