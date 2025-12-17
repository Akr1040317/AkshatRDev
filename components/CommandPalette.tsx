'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, Briefcase, Clock, GraduationCap, Code, Users, Mail, ExternalLink, Copy, FileText } from 'lucide-react';
import clsx from 'clsx';
import type { Module } from './SidebarNav';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onModuleChange: (module: Module) => void;
}

interface Command {
  id: string;
  label: string;
  icon: typeof Search;
  action: () => void;
  category: 'navigation' | 'actions';
}

export default function CommandPalette({
  isOpen,
  onClose,
  onModuleChange,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  const commands: Command[] = [
    {
      id: 'overview',
      label: 'Go to Overview',
      icon: Home,
      category: 'navigation',
      action: () => {
        onModuleChange('overview');
        onClose();
      },
    },
    {
      id: 'projects',
      label: 'Go to Projects',
      icon: Briefcase,
      category: 'navigation',
      action: () => {
        onModuleChange('projects');
        onClose();
      },
    },
    {
      id: 'experience',
      label: 'Go to Experience',
      icon: Clock,
      category: 'navigation',
      action: () => {
        onModuleChange('experience');
        onClose();
      },
    },
    {
      id: 'education',
      label: 'Go to Education',
      icon: GraduationCap,
      category: 'navigation',
      action: () => {
        onModuleChange('education');
        onClose();
      },
    },
    {
      id: 'skills',
      label: 'Go to Skills',
      icon: Code,
      category: 'navigation',
      action: () => {
        onModuleChange('skills');
        onClose();
      },
    },
    {
      id: 'leadership',
      label: 'Go to Leadership',
      icon: Users,
      category: 'navigation',
      action: () => {
        onModuleChange('leadership');
        onClose();
      },
    },
    {
      id: 'contact',
      label: 'Go to Contact',
      icon: Mail,
      category: 'navigation',
      action: () => {
        onModuleChange('contact');
        onClose();
      },
    },
    {
      id: 'copy-email',
      label: 'Copy Email',
      icon: Copy,
      category: 'actions',
      action: async () => {
        await navigator.clipboard.writeText('rastogia@ufl.edu');
        onClose();
      },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      icon: ExternalLink,
      category: 'actions',
      action: () => {
        window.open('https://www.linkedin.com/in/akshat--rastogi', '_blank');
        onClose();
      },
    },
    {
      id: 'github',
      label: 'Open GitHub',
      icon: ExternalLink,
      category: 'actions',
      action: () => {
        window.open('https://github.com/akshatrastogi', '_blank');
        onClose();
      },
    },
    {
      id: 'resume',
      label: 'Open Resume',
      icon: FileText,
      category: 'actions',
      action: () => {
        window.open('/resume.pdf', '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Will be handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-[101] px-4"
          >
            <div className="glass-2 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 px-2">
                <Search size={20} className="text-muted" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-muted"
                  autoFocus
                />
                <kbd className="px-2 py-1 text-xs bg-panel rounded border border-panel-2 text-muted">
                  ESC
                </kbd>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-muted">
                    No commands found
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd) => {
                      const Icon = cmd.icon;
                      return (
                        <button
                          key={cmd.id}
                          onClick={cmd.action}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-panel-2 transition-colors text-left group"
                        >
                          <Icon size={18} className="text-muted group-hover:text-white" />
                          <span className="flex-1 text-white">{cmd.label}</span>
                          <span className="text-xs text-muted uppercase">{cmd.category}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

