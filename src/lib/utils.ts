import type { SkillCategory } from '@/types';

export const skillCategoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  tools: 'Tools & Other',
};

export const skillCategoryColors: Record<SkillCategory, string> = {
  frontend: '#1677ff',
  backend: '#52c41a',
  devops: '#faad14',
  tools: '#722ed1',
};
