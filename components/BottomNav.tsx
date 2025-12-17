'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Clock, Users, Mail, GraduationCap, Code, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { useScrollSpy, type Section } from '@/hooks/useScrollSpy';

const sections: Section[] = ['overview', 'products', 'projects', 'experience', 'education', 'skills', 'leadership', 'contact'];

const navItems: { id: Section; label: string; icon: typeof Home }[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'products', label: 'Products', icon: Sparkles },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: Clock },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
];

interface BottomNavProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function BottomNav({ activeSection, onSectionChange }: BottomNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onSectionChange(id as Section);
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="glass rounded-2xl p-2 flex items-center justify-around overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={clsx(
                'relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 min-w-[60px] flex-shrink-0',
                isActive ? 'text-white' : 'text-muted'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeBottomNav"
                  className="absolute inset-0 bg-gradient-to-r from-pink/20 via-purple/20 to-blue/20 rounded-lg"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={clsx('relative z-10', isActive && 'text-purple')}
              />
              <span className={clsx('relative z-10 text-xs font-medium', !isActive && 'hidden')}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
