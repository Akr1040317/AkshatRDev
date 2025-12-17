'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarNav, { type Module } from '@/components/SidebarNav';
import BottomNav from '@/components/BottomNav';
import CommandPalette from '@/components/CommandPalette';
import OverviewPanel from '@/components/OverviewPanel';
import ProjectGallery from '@/components/ProjectGallery';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationPanel from '@/components/EducationPanel';
import LeadershipPanel from '@/components/LeadershipPanel';
import ContactPanel from '@/components/ContactPanel';

export default function Home() {
  const [activeModule, setActiveModule] = useState<Module>('overview');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderModule = () => {
    switch (activeModule) {
      case 'overview':
        return <OverviewPanel onNavigate={setActiveModule} />;
      case 'projects':
        return <ProjectGallery />;
      case 'experience':
        return <ExperienceTimeline />;
      case 'education':
        return <EducationPanel />;
      case 'leadership':
        return <LeadershipPanel />;
      case 'contact':
        return <ContactPanel />;
      default:
        return <OverviewPanel onNavigate={setActiveModule} />;
    }
  };

  return (
    <div className="min-h-screen">
      <SidebarNav activeModule={activeModule} onModuleChange={setActiveModule} />
      <BottomNav activeModule={activeModule} onModuleChange={setActiveModule} />

      <main className="md:ml-64 pb-20 md:pb-0 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-8 md:pt-12"
          >
            {renderModule()}
          </motion.div>
        </AnimatePresence>
      </main>

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onModuleChange={(module) => {
          setActiveModule(module);
          setCommandPaletteOpen(false);
        }}
      />
    </div>
  );
}

