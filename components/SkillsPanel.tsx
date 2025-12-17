'use client';

import { motion } from 'framer-motion';
import { Code, Wrench, Box, Layers } from 'lucide-react';
import { skills } from '@/data/skills';

const categoryIcons = {
  languages: Code,
  frameworks: Layers,
  tools: Wrench,
  libraries: Box,
};

const categoryColors = {
  languages: 'text-blue',
  frameworks: 'text-purple',
  tools: 'text-pink',
  libraries: 'text-orange',
};

const categoryBgColors = {
  languages: 'from-blue/10 to-blue/5',
  frameworks: 'from-purple/10 to-purple/5',
  tools: 'from-pink/10 to-pink/5',
  libraries: 'from-orange/10 to-orange/5',
};

export default function SkillsPanel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Technical Skills</h1>
          <p className="text-muted text-lg">
            Technologies and tools I use to build products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, idx) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
            const color = categoryColors[category.id as keyof typeof categoryColors];
            const bgColor = categoryBgColors[category.id as keyof typeof categoryBgColors];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-2 rounded-2xl p-8 space-y-4 bg-gradient-to-br ${bgColor} neon-glow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gradient-to-br ${bgColor} rounded-lg`}>
                    <Icon size={24} className={color} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-panel rounded-lg border border-panel-2 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

