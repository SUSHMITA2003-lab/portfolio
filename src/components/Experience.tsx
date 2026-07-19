import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Java Full Stack Developer Intern',
      company: 'BESANT TECHNOLOGY, Chennai',
      period: 'May 2026 – Present',
      type: 'Internship',
      icon: Briefcase,
      points: [
        'Developed full-stack web applications using Java, Spring Boot, HTML, CSS, and JavaScript with responsive designs.',
        'Constructed RESTful API microservices enabling high-performance client-server application communication.',
        'Managed MySQL databases, optimized complex SQL queries & joins, and contributed to production workflows.'
      ],
      tags: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JavaScript']
    },
    {
      role: 'Java Full Stack Development Training',
      company: 'AISECT Powered by Capgemini',
      period: 'Dec 2025 – May 2026',
      type: 'Industry Training Program',
      icon: GraduationCap,
      points: [
        'Learned core & advanced Java, Spring Boot, SQL databases, and REST APIs through structured hands-on modules.',
        'Built backend services using Spring Boot and validated endpoints via Postman for seamless frontend integration.',
        'Executed complete CRUD database operations in MySQL and strengthened enterprise backend architecture.'
      ],
      tags: ['Java', 'Spring Boot', 'Postman', 'SQL', 'Capgemini']
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
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
            <Terminal className="w-4 h-4" /> Career Progression
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Experience & <span className="gradient-text">Training</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Illuminated Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-indigo to-neon-violet transform sm:-translate-x-1/2 opacity-50" />

          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.role}
                className={`relative flex flex-col sm:flex-row items-center mb-16 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Glowing Node Circle */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-dark-950 border-2 border-neon-cyan flex items-center justify-center text-neon-cyan shadow-neon-cyan">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}>
                  <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-neon-indigo/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-neon-indigo/15 text-neon-cyan text-xs font-mono font-semibold border border-neon-indigo/30">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-sm font-semibold text-neon-cyan font-mono mb-4">{exp.company}</h4>

                    <div className="space-y-2 mb-6">
                      {exp.points.map(point => (
                        <div key={point} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-neon-indigo shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map(t => (
                        <span key={t} className="px-2.5 py-0.5 rounded bg-dark-950 text-slate-400 font-mono text-[10px] border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
