'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/education';

export default function EducationPanel() {
  return (
    <section id="education" className="w-full min-h-screen py-20 md:py-32">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Education</h1>
          <p className="text-muted text-lg">
            Academic background and certifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-2 rounded-2xl p-8 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple/20 to-blue/20 rounded-lg">
                  <GraduationCap size={24} className="text-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-lg text-muted mb-4">{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  {edu.details && (
                    <ul className="mt-4 space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted">
                          <span className="text-purple mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-8 space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-purple mt-1">•</span>
              <div>
                <div className="font-semibold">6.00.1x Introduction to Computer Science and Programming Using Python</div>
                <div className="text-sm text-muted">MITx via edX</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple mt-1">•</span>
              <div>
                <div className="font-semibold">Certified Internet Webmaster Business Associate</div>
                <div className="text-sm text-muted">CIW</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}

