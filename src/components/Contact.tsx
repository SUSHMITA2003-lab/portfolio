import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
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
            <Terminal className="w-4 h-4" /> Let's Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-violet mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-neon-cyan/40 transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/15 border border-neon-cyan/40 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400">Email Me</span>
                <a href="mailto:sushmi0903@gmail.com" className="block text-sm font-bold text-white hover:text-neon-cyan transition-colors">
                  sushmi0903@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-neon-cyan/40 transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-neon-indigo/15 border border-neon-indigo/40 flex items-center justify-center text-neon-indigo group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400">Phone / WhatsApp</span>
                <a href="tel:+917510104667" className="block text-sm font-bold text-white hover:text-neon-cyan transition-colors">
                  +91 7510104667
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-neon-cyan/40 transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-neon-violet/15 border border-neon-violet/40 flex items-center justify-center text-neon-violet group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400">LinkedIn Profile</span>
                <a href="https://linkedin.com/in/sushmithas2003" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-white hover:text-neon-cyan transition-colors">
                  linkedin.com/in/sushmithas2003
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon-green/15 border border-neon-green/40 flex items-center justify-center text-neon-green">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400">Location</span>
                <span className="block text-sm font-bold text-white">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Futuristic Contact Form */}
          <motion.div
            className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-slate-800 shadow-2xl relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send Message to Sushmitha</h3>
            <p className="text-xs text-slate-400 font-mono mb-8">
              Fill out the form below for job opportunities, project inquiries, or technical discussion.
            </p>

            {submitted && (
              <motion.div
                className="mb-6 p-4 rounded-xl bg-neon-green/20 border border-neon-green text-neon-green flex items-center gap-3 font-mono text-xs"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Message received! Thank you, Sushmitha will respond promptly.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={e => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Java Developer Role / Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Sushmitha, I would like to get in touch..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-indigo via-neon-violet to-neon-cyan text-white font-mono text-sm font-bold shadow-neon-indigo hover:shadow-neon-cyan hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Dispatching Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
