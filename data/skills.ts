export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML/CSS', 'R', 'PHP', 'Matlab', 'C', 'C++', 'Swift'],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    skills: ['WordPress', 'Bootstrap', 'CloudKit', 'Next.js', 'Materialize', 'SwiftyJSON', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js'],
  },
  {
    id: 'tools',
    name: 'Developer Tools',
    skills: ['Git', 'Google Firebase', 'Xcode', 'phpMyAdmin', 'Kanban', 'MySQL', 'Agile Methodologies', 'Vercel', 'Google Cloud'],
  },
  {
    id: 'libraries',
    name: 'Libraries',
    skills: ['PyTorch', 'PyTorch Geometric', 'Core Data', 'jQuery', 'ChatGPT-4.0 API', 'Google FCM'],
  },
];

