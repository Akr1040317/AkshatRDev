'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import ProjectDrawer from './ProjectDrawer';

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured' | 'labs'>('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  const featuredProjects = projects.filter((p) => p.category === 'featured');
  const labsProjects = projects.filter((p) => p.category === 'labs');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h1>
          <p className="text-muted text-lg">
            A collection of products and experiments I&apos;ve built
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {(['all', 'featured', 'labs'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === f
                  ? 'glass-2 text-white'
                  : 'glass text-muted hover:text-white hover:bg-panel-2'
              }`}
            >
              {f === 'all' ? 'All' : f === 'featured' ? 'Featured' : 'Labs'}
            </button>
          ))}
        </div>

        {/* Featured Projects - Horizontal Scroll (only when showing all) */}
        {filter === 'all' && featuredProjects.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles size={24} className="text-purple" />
              Featured
            </h2>
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-6 min-w-max">
                {featuredProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Labs Projects - Grid (only when showing all) */}
        {filter === 'all' && labsProjects.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Labs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labsProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  index={idx + featuredProjects.length}
                />
              ))}
            </div>
          </div>
        )}

        {/* Filtered Projects Grid (when filter is featured or labs) */}
        {(filter === 'featured' || filter === 'labs') && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                index={idx}
              />
            ))}
          </div>
        )}
      </motion.div>

      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="glass rounded-xl overflow-hidden cursor-pointer hover:bg-panel-2 transition-all neon-glow group min-w-[320px] md:min-w-0"
    >
      {thumbnail && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt || project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

