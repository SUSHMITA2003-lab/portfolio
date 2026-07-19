import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Database, Server, GitBranch, Shield, Zap, Layers, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillsList = [
    { name: 'Java', level: 92, category: 'Backend', icon: Code, color: 'from-orange-500 to-amber-600', shadow: 'shadow-orange-500/20' },
    { name: 'Spring Boot', level: 90, category: 'Backend', icon: Server, color: 'from-emerald-500 to-green-600', shadow: 'shadow-emerald-500/20' },
    { name: 'React.js', level: 88, category: 'Frontend', icon: Layers, color: 'from-cyan-400 to-blue-600', shadow: 'shadow-cyan-500/20' },
    { name: 'MySQL / SQL', level: 90, category: 'Database', icon: Database, color: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/20' },
    { name: 'REST APIs', level: 92, category: 'Architecture', icon: Cpu, color: 'from-purple-500 to-violet-600', shadow: 'shadow-purple-500/20' },
    { name: 'Hibernate / JDBC', level: 85, category: 'Backend', icon: Zap, color: 'from-amber-400 to-orange-600', shadow: 'shadow-amber-500/20' },
    { name: 'JavaScript (ES6+)', level: 88, category: 'Frontend', icon: Code, color: 'from-yellow-400 to-amber-500', shadow: 'shadow-yellow-500/20' },
    { name: 'Git & GitHub', level: 90, category: 'DevOps & Tools', icon: GitBranch, color: 'from-red-500 to-orange-600', shadow: 'shadow-red-500/20' },
    { name: 'HTML5 & CSS3', level: 92, category: 'Frontend', icon: Shield, color: 'from-indigo-500 to-purple-600', shadow: 'shadow-indigo-500/20' },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Terminal className="w-4 h-4" /> Technical Competence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Skills & <span className="gradient-text">Toolkit</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Floating 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-neon-indigo/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                {/* Background Rotating Icon Watermark */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-15 group-hover:scale-125 transition-all duration-500 pointer-events-none">
                  <Icon className="w-32 h-32 text-white animate-spin-slow" />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 shadow-lg ${skill.shadow}`}>
                        <div className="w-full h-full rounded-[10px] bg-dark-950 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-100 group-hover:text-neon-cyan transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-neon-cyan">{skill.level}%</span>
                  </div>

                  {/* Animated Proficiency Progress Bar */}
                  <div className="w-full bg-dark-950 rounded-full h-2 overflow-hidden border border-slate-800 p-0.5">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + idx * 0.05 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-Stack Proficiency Highlight Card */}
        <motion.div
          className="mt-12 glass-panel rounded-2xl p-6 border border-neon-indigo/40 bg-gradient-to-r from-dark-900/90 via-neon-indigo/10 to-dark-900/90 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center text-neon-cyan shrink-0 shadow-neon-cyan">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full-Stack Development Stack</h4>
              <p className="text-xs text-slate-300 font-mono">
                Java • Spring Boot • React.js • MySQL • RESTful APIs
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan font-mono text-xs font-bold hover:bg-neon-cyan hover:text-dark-950 transition-all shadow-md"
          >
            Explore Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
};
