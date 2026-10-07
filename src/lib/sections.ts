export const sectionIds = {
  hero: 'hero',
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  skills: 'skills',
  organizations: 'organizations',
  contact: 'contact',
} as const;

export interface NavItem {
  id: (typeof sectionIds)[keyof typeof sectionIds];
  label: string;
}

export const navItems: readonly NavItem[] = [
  { id: sectionIds.about, label: 'About' },
  { id: sectionIds.experience, label: 'Experience' },
  { id: sectionIds.projects, label: 'Projects' },
  { id: sectionIds.skills, label: 'Skills' },
  { id: sectionIds.contact, label: 'Contact' },
];
