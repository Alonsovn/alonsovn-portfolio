export const sectionIds = {
  hero: 'hero',
  about: 'about',
  projects: 'projects',
  organizations: 'organizations',
  skills: 'skills',
  experience: 'experience',
  contact: 'contact',
} as const;

export interface NavItem {
  id: (typeof sectionIds)[keyof typeof sectionIds];
  label: string;
}

export const navItems: readonly NavItem[] = [
  { id: sectionIds.about, label: 'About' },
  { id: sectionIds.skills, label: 'Skills' },
  { id: sectionIds.projects, label: 'Projects' },
  { id: sectionIds.organizations, label: 'Orgs' },
  { id: sectionIds.experience, label: 'Experience' },
  { id: sectionIds.contact, label: 'Contact' },
];
