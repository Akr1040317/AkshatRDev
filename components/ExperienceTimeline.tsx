'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  return (
    <section id="experience" className="w-full min-h-screen py-20 md:py-32">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h1>
          <p className="text-muted text-lg">
            My journey in software engineering and entrepreneurship
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink via-purple to-blue opacity-20 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-8 top-6 w-4 h-4 rounded-full bg-purple border-4 border-bg-0 z-10 hidden md:block" />
                  <div className="absolute left-6 md:left-8 top-6 w-4 h-4 rounded-full bg-purple/20 animate-pulse hidden md:block" />

                  <div className="ml-0 md:ml-16">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="w-full glass rounded-xl p-6 text-left hover:bg-panel-2 transition-all neon-glow group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold group-hover:text-purple transition-colors">
                              {exp.role}
                            </h3>
                          </div>
                          <div className="text-lg text-muted mb-2">{exp.company}</div>
                          <div className="flex items-center gap-4 text-sm text-muted">
                            <span>{exp.period}</span>
                            {exp.location && (
                              <span className="flex items-center gap-1">
                                <MapPin size={14} />
                                {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`text-muted transition-transform flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="glass-2 rounded-xl p-6 mt-4 space-y-6">
                            <p className="text-muted leading-relaxed">{exp.narrative}</p>

                            <div>
                              <h4 className="font-semibold mb-3 text-purple">Impact</h4>
                              <ul className="space-y-2">
                                {exp.impact.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-muted">
                                    <span className="text-blue mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3 text-pink">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-panel rounded-lg border border-panel-2 text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}

