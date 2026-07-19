import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, Code, Briefcase, GraduationCap, Mail, Laptop, Sparkles } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectAction }) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from parent state
          const btn = document.getElementById('cmd-palette-trigger');
          btn?.click();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { id: 'hero', label: 'Go to Hero Section', icon: Sparkles, category: 'Navigation' },
    { id: 'about', label: 'About Sushmitha', icon: Code, category: 'Navigation' },
    { id: 'skills', label: 'Technical Skills & Toolkit', icon: Laptop, category: 'Navigation' },
    { id: 'projects', label: 'View Featured Projects', icon: Briefcase, category: 'Navigation' },
    { id: 'experience', label: 'Work Experience & Timeline', icon: Briefcase, category: 'Navigation' },
    { id: 'education', label: 'Education & Certifications', icon: GraduationCap, category: 'Navigation' },
    { id: 'contact', label: 'Contact & Let\'s Talk', icon: Mail, category: 'Navigation' },
    { id: 'resume', label: 'Download Sushmitha\'s Resume PDF', icon: FileText, category: 'Action' },
  ];

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9995] flex items-start justify-center pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Command Modal Window */}
          <motion.div
            className="relative w-full max-w-xl bg-dark-900 border border-neon-indigo/40 rounded-2xl shadow-2xl shadow-neon-indigo/20 overflow-hidden z-10"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Header */}
            <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-dark-950/50">
              <Search className="w-5 h-5 text-neon-cyan mr-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search portfolio... (Press ESC to exit)"
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 font-mono text-sm focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="p-6 text-center text-slate-500 font-mono text-xs">
                  No matching commands found for "{query}"
                </div>
              ) : (
                filteredItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectAction(item.id);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-neon-indigo/15 hover:border hover:border-neon-indigo/30 text-left transition-all duration-150 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-dark-850 text-neon-cyan group-hover:bg-neon-indigo group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-neon-cyan">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer shortcut hints */}
            <div className="px-4 py-2 bg-dark-950 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                Navigation Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">CTRL</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">K</kbd>
              </span>
              <span className="text-neon-cyan">Sushmitha S Portfolio OS</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
