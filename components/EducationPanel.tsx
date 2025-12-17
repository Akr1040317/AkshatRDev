'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Users } from 'lucide-react';
import { education, certifications } from '@/data/education';

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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-2">
                          <span className="text-purple font-semibold">Grade: {edu.grade}</span>
                        </div>
                      )}
                    </div>

                    {edu.activities && edu.activities.length > 0 && (
                      <div className="mt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={16} className="text-blue" />
                          <h4 className="font-semibold text-sm text-muted uppercase">Activities and Societies</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-panel rounded-lg border border-panel-2 text-sm text-muted"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={16} className="text-orange" />
                          <h4 className="font-semibold text-sm text-muted uppercase">Achievements</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-gradient-to-r from-orange/10 to-orange/5 rounded-lg border border-orange/20 text-sm font-medium"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award size={24} className="text-purple" />
              Licenses & Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-start gap-3 pb-4 border-b border-panel last:border-0 last:pb-0"
                >
                  <span className="text-purple mt-1">•</span>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{cert.name}</div>
                    <div className="text-sm text-muted">{cert.issuer}</div>
                    {cert.issueDate && (
                      <div className="text-xs text-muted mt-1">Issued {cert.issueDate}</div>
                    )}
                    {cert.credentialId && (
                      <div className="text-xs text-muted mt-1">Credential ID: {cert.credentialId}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
