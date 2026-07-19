import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Award, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code,
      title: 'Full-Stack Architecture',
      desc: 'Building responsive React web interfaces seamlessly paired with Java & Spring Boot RESTful microservices.',
      color: 'text-neon-cyan',
      borderColor: 'border-neon-cyan/30',
      bgGlow: 'hover:shadow-neon-cyan/20',
    },
    {
      icon: Layers,
      title: 'Software Engineering Practices',
      desc: 'Developing modular, maintainable, clean code adhering to OOP principles, REST standards, and modern web patterns.',
      color: 'text-neon-violet',
      borderColor: 'border-neon-violet/30',
      bgGlow: 'hover:shadow-neon-violet/20',
    },
    {
      icon: Database,
      title: 'Database Architecture & Querying',
      desc: 'Proficient in MySQL schema design, normalized entities, complex joins, views, triggers, and stored procedures.',
      color: 'text-neon-green',
      borderColor: 'border-neon-green/30',
      bgGlow: 'hover:shadow-neon-green/20',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Terminal className="w-4 h-4" /> System Overview
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            About <span className="gradient-text">Sushmitha S</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={`glass-panel rounded-2xl p-8 border ${item.borderColor} ${item.bgGlow} transition-all duration-300 hover:-translate-y-2 group`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-dark-900 border border-slate-800 flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Career Highlights Banner */}
        <motion.div
          className="glass-panel rounded-2xl p-8 border border-slate-800 bg-gradient-to-r from-dark-900/90 via-dark-850/90 to-dark-900/90 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-indigo/20 border border-neon-indigo flex items-center justify-center text-neon-cyan shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Engineering Academic Distinction</h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                B.E. Computer Science & Engineering — EASA College • CGPA: 9.0 / 10
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center px-4 py-2 bg-dark-950/60 rounded-xl border border-slate-800">
              <span className="block text-2xl font-bold font-mono text-neon-cyan">9.0</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Degree CGPA</span>
            </div>
            <div className="text-center px-4 py-2 bg-dark-950/60 rounded-xl border border-slate-800">
              <span className="block text-2xl font-bold font-mono text-neon-violet">92%</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">HSC Marks</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
