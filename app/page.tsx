'use client';

import { useState, useEffect } from 'react';
import { useScrollSpy, type Section } from '@/hooks/useScrollSpy';
import SidebarNav from '@/components/SidebarNav';
import BottomNav from '@/components/BottomNav';
import CommandPalette from '@/components/CommandPalette';
import OverviewPanel from '@/components/OverviewPanel';
import ProductGallery from '@/components/ProductGallery';
import ProjectGallery from '@/components/ProjectGallery';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationPanel from '@/components/EducationPanel';
import SkillsPanel from '@/components/SkillsPanel';
import LeadershipPanel from '@/components/LeadershipPanel';
import ContactPanel from '@/components/ContactPanel';

const sections: Section[] = ['overview', 'products', 'projects', 'experience', 'education', 'skills', 'leadership', 'contact'];

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useScrollSpy(sections);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const scrollToSection = (section: Section) => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCommandPaletteOpen(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-0">
        <div className="text-muted">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SidebarNav />
      <BottomNav activeSection={activeSection} onSectionChange={scrollToSection} />

      <main className="md:ml-64 pb-20 md:pb-0">
        <OverviewPanel />
        <ProductGallery />
        <ProjectGallery />
        <ExperienceTimeline />
        <EducationPanel />
        <SkillsPanel />
        <LeadershipPanel />
        <ContactPanel />
      </main>

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSectionChange={scrollToSection}
      />
    </div>
  );
}
