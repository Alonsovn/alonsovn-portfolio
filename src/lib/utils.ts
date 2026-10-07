import type { SkillCategory } from '@/types';

export const skillCategoryLabels: Record<SkillCategory, string> = {
  backend: 'Backend & Platform',
  devops: 'Cloud & DevOps',
  frontend: 'Frontend',
  tools: 'Architecture & AI Tooling',
};

export const skillCategoryColors: Record<SkillCategory, string> = {
  backend: '#52c41a',
  devops: '#faad14',
  frontend: '#1677ff',
  tools: '#722ed1',
};
