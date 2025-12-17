'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github, Sparkles } from 'lucide-react';
import { type Project } from '@/data/projects';

interface ProjectDrawerProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-2 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={20} className="text-purple" />
                <span className="text-sm text-muted uppercase">{project.category}</span>
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-2">{project.name}</h2>
              <p className="text-muted text-lg">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-panel-2 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Media Gallery */}
            {project.media && project.media.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Media</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.media.map((item, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden glass">
                      {item.type === 'image' ? (
                        <div className="relative w-full aspect-video">
                          <Image
                            src={item.url}
                            alt={item.alt || project.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : (
                        <video
                          src={item.url}
                          controls
                          className="w-full h-auto"
                          onError={(e) => {
                            (e.target as HTMLVideoElement).style.display = 'none';
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple">Problem</h3>
              <p className="text-muted">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue">What I Built</h3>
              <p className="text-muted">{project.solution}</p>
            </div>

            {/* Technical Highlights */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-pink">Technical Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted">
                    <span className="text-purple mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Outcome</h3>
              <p className="text-muted">{project.outcome}</p>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-panel-2 rounded-lg border border-panel text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-panel">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-panel-2 transition-colors neon-glow"
                  >
                    <ExternalLink size={18} />
                    <span>Live Site</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-panel-2 transition-colors neon-glow"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-panel-2 transition-colors neon-glow"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

