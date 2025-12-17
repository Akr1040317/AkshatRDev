import { projects, type Project } from './projects';

export const products = projects.filter((p) => p.category === 'products');
export type { Project };
