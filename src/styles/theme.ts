import type { ThemeConfig } from 'antd';

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    borderRadius: 8,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: 14,
    lineHeight: 1.6,
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      siderBg: '#ffffff',
    },
    Card: {
      borderRadiusLG: 12,
    },
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#4096ff',
    colorSuccess: '#49aa19',
    colorWarning: '#d89614',
    colorError: '#dc4446',
    colorInfo: '#4096ff',
    borderRadius: 8,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: 14,
    lineHeight: 1.6,
  },
  components: {
    Layout: {
      headerBg: '#141414',
      siderBg: '#141414',
    },
    Card: {
      borderRadiusLG: 12,
    },
  },
};

export const sectionIds = {
  hero: 'hero',
  about: 'about',
  projects: 'projects',
  organizations: 'organizations',
  skills: 'skills',
  experience: 'experience',
  contact: 'contact',
} as const;
