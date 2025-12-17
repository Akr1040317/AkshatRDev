import { projects, type Project } from './projects';

export const projectsOnly = projects.filter((p) => p.category === 'projects');
export type { Project };

