import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Utensils, Car, Database, Sparkles, X, CheckCircle2, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'database';
  icon: React.ElementType;
  gradient: string;
  tech: string[];
  summary: string;
  screenshots?: string[];
  features: string[];
  architecture: { label: string; value: string }[];
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'database'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<Record<string, number>>({
    'food-delivery': 0
  });

  const projectsData: ProjectItem[] = [
    {
      id: 'food-delivery',
      title: 'Food Delivery System (FoodDash)',
      subtitle: 'Java + Spring Boot + React + MySQL',
      category: 'fullstack',
      icon: Utensils,
      gradient: 'from-red-600 via-rose-600 to-amber-600',
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Postman'],
      screenshots: [
        '/screenshots/fooddash-1.png',
        '/screenshots/fooddash-2.png',
        '/screenshots/fooddash-3.png'
      ],
      summary: 'A complete full-stack food ordering web platform featuring restaurant catalog browsing, real-time cart operations, secure user authentication, and order status tracking.',
      features: [
        'User Authentication & Sign Up / Login with Session Security',
        'Dynamic Menu Browsing, Popular Categories (Italian, Indian, Fast Food, Chinese, Beverages, Desserts)',
        'Spring Boot RESTful APIs for order handling, payment processing, and menu catalogs',
        'Relational MySQL database managing Users, Restaurants, Food Items, Orders, and Carts'
      ],
      architecture: [
        { label: 'Backend Architecture', value: 'Java 17, Spring Boot, Spring Data JPA' },
        { label: 'Frontend UI', value: 'React.js, Axios HTTP, Tailored CSS Modules' },
        { label: 'Database Persistence', value: 'MySQL Server (Normalized Entities & Foreign Keys)' },
        { label: 'API Gateway', value: 'REST Controllers tested using Postman' }
      ]
    },
    {
      id: 'cab-booking',
      title: 'Cab Booking System',
      subtitle: 'Java + Spring Boot + React + MySQL',
      category: 'fullstack',
      icon: Car,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
      summary: 'A comprehensive ride-hailing web application supporting passenger ride requests, driver matching, dynamic fare calculation, and trip tracking.',
      features: [
        'Ride Dispatching engine matching passenger requests with nearby drivers',
        'Dynamic Fare Estimation calculated based on route distance and vehicle category',
        'Driver Queue & Passenger Dashboards for real-time ride status updates',
        'MySQL database persistence for trip logs, payment history, and user ratings'
      ],
      architecture: [
        { label: 'Backend Microservices', value: 'Java, Spring Boot Framework' },
        { label: 'Frontend UI', value: 'React.js, HTML5, Tailored CSS' },
        { label: 'Database', value: 'MySQL Relational Schema' },
        { label: 'Integration', value: 'REST Controllers & Axios API Gateway' }
      ]
    },
    {
      id: 'ecommerce-db',
      title: 'E-Commerce Database Management System',
      subtitle: 'SQL + MySQL Relational Database Engine',
      category: 'database',
      icon: Database,
      gradient: 'from-purple-600 via-indigo-600 to-violet-700',
      tech: ['SQL', 'MySQL', 'Stored Procedures', 'Triggers & Views'],
      summary: 'A high-performance relational database architecture engineered to manage online store operations, product inventories, shopping carts, orders, and customer accounts.',
      features: [
        '3NF Normalized MySQL database managing Products, Orders, Carts, and Payments',
        'Optimized SQL Joins, Views, Triggers, and Stored Procedures for high query throughput',
        'Enforced Primary Keys, Foreign Key Cascading, and Integrity Constraints',
        'Analytical Queries for top-selling products and financial reports'
      ],
      architecture: [
        { label: 'Database Engine', value: 'MySQL Server / MySQL Workbench' },
        { label: 'Core Relational Entities', value: 'Users, Products, Orders, OrderItems, Cart, Payments' },
        { label: 'Optimization', value: 'Indexed Tables, Views, Stored Procedures' }
      ]
    }
  ];

  // Auto-slide carousel for projects with screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(prev => ({
        ...prev,
        'food-delivery': ((prev['food-delivery'] || 0) + 1) % 3
      }));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = (id: string, max: number) => {
    setActiveSlideIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % max
    }));
  };

  const handlePrevSlide = (id: string, max: number) => {
    setActiveSlideIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + max) % max
    }));
  };

  const filteredProjects = projectsData.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Terminal className="w-4 h-4" /> Featured Systems
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Highlighted <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Controls */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Systems' },
            { id: 'fullstack', label: 'Full Stack Web Apps' },
            { id: 'database', label: 'Database & SQL' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-neon-indigo to-neon-cyan text-white shadow-neon-cyan'
                  : 'bg-dark-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            const hasCarousel = project.screenshots && project.screenshots.length > 0;
            const currentSlide = activeSlideIndex[project.id] || 0;

            return (
              <motion.div
                key={project.id}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-neon-indigo/50 transition-all duration-500 hover:-translate-y-3 flex flex-col group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Visual Header Banner / Animated Image Carousel */}
                <div className="h-56 bg-dark-950 relative overflow-hidden group/carousel">
                  {hasCarousel ? (
                    <>
                      {/* Carousel Image Display */}
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSlide}
                          src={project.screenshots![currentSlide]}
                          alt={`${project.title} Screenshot ${currentSlide + 1}`}
                          className="w-full h-full object-cover object-top"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

                      {/* Carousel Navigation Arrows */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevSlide(project.id, project.screenshots!.length);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-dark-950/80 border border-slate-700 text-slate-200 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextSlide(project.id, project.screenshots!.length);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-dark-950/80 border border-slate-700 text-slate-200 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Slide Indicator Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                        {project.screenshots!.map((_, slideIdx) => (
                          <button
                            key={slideIdx}
                            onClick={() => setActiveSlideIndex(prev => ({ ...prev, [project.id]: slideIdx }))}
                            className={`w-2 h-2 rounded-full transition-all ${
                              slideIdx === currentSlide
                                ? 'bg-neon-cyan w-5 shadow-neon-cyan'
                                : 'bg-slate-500/60'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                      <div className="absolute inset-0 bg-dark-950/30 backdrop-blur-[2px]" />
                      <div className="relative z-10 text-white transform group-hover:scale-125 transition-transform duration-500">
                        <Icon className="w-16 h-16 drop-shadow-lg" />
                      </div>
                    </div>
                  )}

                  <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-dark-950/80 text-neon-cyan text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border border-neon-cyan/30">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-3">{project.subtitle}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-0.5 rounded bg-dark-950 text-slate-300 font-mono text-[11px] border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Details Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neon-indigo/20 border border-neon-indigo/50 text-neon-cyan font-mono text-xs font-semibold hover:bg-neon-indigo hover:text-white transition-all shadow-md group-hover:shadow-neon-cyan"
                    >
                      <Sparkles className="w-4 h-4" /> View Architecture & Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Holographic Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="relative w-full max-w-3xl bg-dark-900 border border-neon-cyan/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-neon-cyan/20 z-10 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-dark-950 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-white shrink-0`}>
                  {React.createElement(selectedProject.icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider font-semibold">System Architecture Spec</span>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Screenshots Gallery in Modal */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {selectedProject.screenshots.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-slate-800 bg-dark-950">
                      <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-44 object-cover object-top hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              )}

              <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedProject.summary}</p>

              <h4 className="text-sm font-bold font-mono text-neon-cyan uppercase tracking-wider mb-3">Key Features</h4>
              <div className="space-y-2 mb-6">
                {selectedProject.features.map(f => (
                  <div key={f} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-bold font-mono text-neon-cyan uppercase tracking-wider mb-3">Technical Layers</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {selectedProject.architecture.map(arch => (
                  <div key={arch.label} className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 mb-0.5">{arch.label}</span>
                    <span className="text-xs font-semibold text-white">{arch.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 rounded-full bg-neon-indigo text-white font-mono text-xs font-bold hover:scale-105 transition-transform"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
