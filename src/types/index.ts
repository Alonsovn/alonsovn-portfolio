export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  built?: string;
  role?: string;
  decisions?: string;
  tags: string[];
  techStack: string[];
  category: 'open-source' | 'freelance' | 'personal';
  organization?: 'EndToEndLabCR' | 'NaranjoSolutions' | 'alonsovndev';
  links: {
    github?: string;
    website?: string;
    demo?: string;
    documentation?: string;
  };
  featured: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  years?: number;
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'tools';

export interface Experience {
  id: string;
  type: 'work' | 'open-source' | 'organization' | 'project' | 'education';
  title: string;
  organization: string;
  description: string;
  date: string;
  link?: string;
  highlights?: string[];
}

export interface Organization {
  id: string;
  name: string;
  role: string;
  description: string;
  mission: string;
  focusAreas: string[];
  links: {
    github: string;
    website?: string;
    demo?: string;
    documentation?: string;
  };
  projects?: string[];
  color: string;
}
