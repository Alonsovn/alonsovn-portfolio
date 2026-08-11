import type { SkillCategory } from '@/types';

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getProficiencyPercent(level: string): number {
  switch (level) {
    case 'expert':
      return 95;
    case 'advanced':
      return 80;
    case 'intermediate':
      return 60;
    case 'beginner':
      return 35;
    default:
      return 50;
  }
}

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
