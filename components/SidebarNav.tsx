'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Clock, Users, Mail, GraduationCap } from 'lucide-react';
import clsx from 'clsx';

export type Module = 'overview' | 'projects' | 'experience' | 'education' | 'leadership' | 'contact';

interface SidebarNavProps {
  activeModule: Module;
  onModuleChange: (module: Module) => void;
}

const navItems: { id: Module; label: string; icon: typeof Home }[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: Clock },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function SidebarNav({ activeModule, onModuleChange }: SidebarNavProps) {
  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col items-start justify-center px-6 z-50">
      <div className="glass rounded-2xl p-4 w-full space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onModuleChange(item.id)}
              className={clsx(
                'relative w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                isActive
                  ? 'text-white'
                  : 'text-muted hover:text-white hover:bg-panel-2'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-pink/20 via-purple/20 to-blue/20 rounded-lg border border-purple/30"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={clsx('relative z-10', isActive && 'text-purple')}
              />
              <span className="relative z-10 font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  className="absolute right-2 w-1.5 h-1.5 rounded-full bg-purple"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

