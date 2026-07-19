import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootLoader } from './components/BootLoader';
import { CustomCursor } from './components/CustomCursor';
import { AuroraCanvas } from './components/AuroraCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { EducationCertificates } from './components/EducationCertificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleCommandAction = (actionId: string) => {
    if (actionId === 'resume') {
      setResumeOpen(true);
      return;
    }

    const targetElement = document.getElementById(actionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden font-sans">
      {/* 1. Cinematic Boot Loader */}
      <AnimatePresence>
        {isBooting && <BootLoader onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>

      {/* 2. Custom Glowing Particle Cursor */}
      <CustomCursor />

      {/* 3. Ambient Aurora Canvas Background */}
      <AuroraCanvas />

      {/* Main Portfolio Content */}
      <div className={`transition-opacity duration-700 ${isBooting ? 'opacity-0' : 'opacity-100'}`}>
        {/* 4. OS Navbar */}
        <Navbar
          onOpenCmd={() => setCmdOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 5. Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <EducationCertificates />
          <Contact />
        </main>

        {/* 6. Footer & Back-to-Top Rocket */}
        <Footer />
      </div>

      {/* 7. Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onSelectAction={handleCommandAction}
      />

      {/* 8. Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
