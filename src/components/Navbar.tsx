import React, { useState, useEffect } from 'react';
import { Search, CloudSun, Clock, Eye, FileText, Menu, X, Terminal } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface NavbarProps {
  onOpenCmd: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCmd, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live Local Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smart Hide / Show Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-slate-100 font-mono font-bold text-lg tracking-tight"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-neon-indigo to-neon-cyan flex items-center justify-center text-white shadow-neon-cyan group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              Sushmitha<span className="text-neon-cyan">.S</span>
            </span>
          </a>

          {/* Center OS Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-neon-indigo/15 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Widgets & Actions */}
          <div className="flex items-center gap-3">
            {/* OS Clock & Status Widgets */}
            <div className="hidden xl:flex items-center gap-3 text-xs font-mono text-slate-400 bg-dark-900/80 px-3 py-1.5 rounded-full border border-slate-800">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neon-cyan" />
                <span>{currentTime}</span>
              </div>
              <div className="w-px h-3 bg-slate-800" />
              <div className="flex items-center gap-1.5">
                <CloudSun className="w-3.5 h-3.5 text-neon-amber" />
                <span>28°C Chennai</span>
              </div>
              <div className="w-px h-3 bg-slate-800" />
              <div className="flex items-center gap-1.5 text-neon-green">
                <Eye className="w-3.5 h-3.5" />
                <span>Visits: 1,482</span>
              </div>
            </div>

            {/* Audio Player Synth */}
            <AudioPlayer />

            {/* Command Palette Trigger button */}
            <button
              id="cmd-palette-trigger"
              onClick={onOpenCmd}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-neon-indigo hover:text-white transition-all duration-200 shadow-sm"
              title="Search Portfolio (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-neon-cyan" />
              <span className="hidden sm:inline">Ctrl+K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-neon-indigo to-neon-violet text-white font-medium text-xs shadow-neon-indigo hover:scale-105 transition-transform"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/95 border-b border-slate-800 backdrop-blur-2xl px-4 py-4 space-y-2 mt-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-900 hover:text-neon-cyan font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-neon-indigo text-white font-medium text-sm"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
