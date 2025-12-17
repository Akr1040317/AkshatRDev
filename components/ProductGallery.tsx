'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Sparkles } from 'lucide-react';
import { products, type Project } from '@/data/products';
import ProjectDrawer from './ProjectDrawer';

export default function ProductGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="products" className="w-full min-h-screen py-20 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text flex items-center gap-3">
              <Sparkles size={32} className="text-purple" />
              Products
            </h2>
            <p className="text-muted text-lg">
              Production-ready products I&apos;ve built and scaled
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                index={idx}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  const thumbnail = project.media?.find((m) => m.type === 'image');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="glass rounded-xl overflow-hidden cursor-pointer hover:bg-panel-2 transition-all neon-glow group"
    >
      {thumbnail && (
        <div className="relative w-full h-48 overflow-hidden bg-panel">
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt || project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-0/80 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple transition-colors">
          {project.name}
        </h3>
        <p className="text-muted text-sm mb-4 line-clamp-2">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-panel-2 rounded border border-panel text-muted"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted">+{project.stack.length - 3}</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-purple">
          <span>View details</span>
          <ExternalLink size={16} />
        </div>
      </div>
    </motion.div>
  );
}

