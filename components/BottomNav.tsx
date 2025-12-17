'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Clock, Users, Mail, GraduationCap, Code } from 'lucide-react';
import clsx from 'clsx';
import type { Module } from './SidebarNav';

interface BottomNavProps {
  activeModule: Module;
  onModuleChange: (module: Module) => void;
}

const navItems: { id: Module; label: string; icon: typeof Home }[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: Clock },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function BottomNav({ activeModule, onModuleChange }: BottomNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="glass rounded-2xl p-2 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onModuleChange(item.id)}
              className={clsx(
                'relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 min-w-[60px]',
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

