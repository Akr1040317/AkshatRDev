'use client';

import { motion } from 'framer-motion';
import { MapPin, Code, Heart, ArrowRight, Download } from 'lucide-react';
import type { Module } from './SidebarNav';
import AuroraBackground from './AuroraBackground';

interface OverviewPanelProps {
  onNavigate: (module: Module) => void;
}

export default function OverviewPanel({ onNavigate }: OverviewPanelProps) {
  const stats = [
    { label: 'Students on Hive', value: '600+' },
    { label: 'Websites Built', value: '40+' },
    { label: 'Global Organization', value: '70+ members' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Hero Section */}
        <div className="relative">
          <AuroraBackground className="top-0 left-0 pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Akshat Rastogi
            </h1>
            <p className="text-xl md:text-2xl text-muted">
              Software Engineer I @ Honeywell Aerospace | Co-founder @ Hive Spelling
            </p>
            <p className="text-lg text-muted max-w-2xl">
              I am a software engineer and UF Computer Science graduate passionate about building meaningful products. 
              At Honeywell Aerospace, I work on embedded software for next generation flight systems. Currently, I am building 
              the future of spelling education with Hive, reshaping how students approach spelling and modern literacy through 
              intelligent, pattern-based learning.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="glass rounded-xl p-6 neon-glow"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Currently Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-2 rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold">Currently</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-purple mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1">Location</div>
                <div className="text-muted">Phoenix, AZ</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Code size={20} className="text-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1">Building</div>
                <div className="text-muted">
                  Avionics tooling + Hive scaling
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart size={20} className="text-pink mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1">Interests</div>
                <div className="text-muted">Product, education, cricket</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => onNavigate('projects')}
            className="glass-2 rounded-xl px-6 py-3 font-semibold flex items-center gap-2 hover:bg-panel-2 transition-colors neon-glow group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="glass-2 rounded-xl px-6 py-3 font-semibold flex items-center gap-2 hover:bg-panel-2 transition-colors neon-glow group"
          >
            Contact
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl px-6 py-3 font-semibold flex items-center gap-2 hover:bg-panel-2 transition-colors neon-glow group"
          >
            Resume
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

