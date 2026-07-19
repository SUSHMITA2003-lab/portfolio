import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, GraduationCap, Award, Star, Github } from 'lucide-react';

export const EducationCertificates: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
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
            <Terminal className="w-4 h-4" /> Academic Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-neon-cyan" /> Education
            </h3>

            <div className="space-y-6">
              <motion.div
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-neon-cyan/40 transition-all"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-neon-indigo/15 text-neon-cyan text-xs font-mono mb-3">
                  Sep 2022 – May 2026
                </span>
                <h4 className="text-lg font-bold text-white mb-1">
                  B.E. Computer Science and Engineering
                </h4>
                <p className="text-slate-400 text-xs font-mono mb-4">
                  EASA College of Engineering and Technology
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neon-amber/10 border border-neon-amber/30 text-neon-amber text-xs font-mono font-bold">
                  <Star className="w-4 h-4 fill-neon-amber" />
                  <span>CGPA : 9.0 / 10</span>
                </div>
              </motion.div>

              <motion.div
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-neon-cyan/40 transition-all"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-neon-indigo/15 text-neon-cyan text-xs font-mono mb-3">
                  Jun 2019 – Apr 2021
                </span>
                <h4 className="text-lg font-bold text-white mb-1">
                  Higher Secondary Education (Biology Science)
                </h4>
                <p className="text-slate-400 text-xs font-mono mb-4">
                  CA Higher Secondary School Kuzhalmanam
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono font-bold">
                  <Award className="w-4 h-4" />
                  <span>Percentage : 92%</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3D Flip Certificate Cards Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-neon-violet" /> Certifications (Hover to Flip 3D)
            </h3>

            <div className="space-y-6">
              {/* Cert 1: HackerRank SQL with real screenshot */}
              <motion.div
                className="group perspective-1000 h-52 cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180 transition-transform">
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden glass-panel rounded-2xl p-5 border border-slate-800 flex items-center gap-5">
                    <div className="w-24 h-full rounded-xl overflow-hidden border border-neon-cyan/40 shrink-0 bg-white">
                      <img src="/screenshots/sql-cert.png" alt="HackerRank SQL Certificate" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neon-cyan tracking-wider font-semibold">HackerRank Certified</span>
                      <h4 className="text-lg font-bold text-white mb-1">SQL (Intermediate) Certificate</h4>
                      <p className="text-slate-400 text-xs">Presented to Sushmitha S for passing HackerRank skill certification.</p>
                      <span className="inline-block mt-2 text-[10px] font-mono text-neon-cyan">Hover card to expand & details →</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel rounded-2xl p-5 border border-neon-cyan bg-dark-900 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-2">Verified Skill Competencies</h4>
                      <p className="text-xs text-slate-300">
                        Validated expertise in complex SQL subqueries, grouping, joins, indexes, and database operations.
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono text-neon-cyan">
                      <span>Issuer: HackerRank</span>
                      <span>Verified Credential</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cert 2: GitHub */}
              <motion.div
                className="group perspective-1000 h-52 cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180 transition-transform">
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden glass-panel rounded-2xl p-5 border border-slate-800 flex items-center gap-5">
                    <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Github className="w-10 h-10" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neon-violet tracking-wider font-semibold">GitHub Verified</span>
                      <h4 className="text-lg font-bold text-white mb-1">Career Essentials in GitHub Certificate</h4>
                      <p className="text-slate-400 text-xs">Demonstrated proficiency in version control & collaborative workflows.</p>
                      <span className="inline-block mt-2 text-[10px] font-mono text-neon-violet">Hover card to expand & details →</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel rounded-2xl p-5 border border-neon-violet bg-dark-900 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-2">Verified Version Control Skills</h4>
                      <p className="text-xs text-slate-300">
                        Demonstrated mastery in Git workflow, repository management, collaborative branching, and CI/CD basics.
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono text-neon-violet">
                      <span>Issuer: GitHub</span>
                      <span>Verified Credential</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
