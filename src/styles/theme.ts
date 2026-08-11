import type { ThemeConfig } from 'antd';

// Brand palette — deep teal primary, warm amber accent
const brand = {
  primary: '#0d9488',    // teal-600
  primaryLight: '#14b8a6', // teal-500
  primaryDark: '#0f766e',  // teal-700
  accent: '#f59e0b',      // amber-500
  accentLight: '#fbbf24', // amber-400
};

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: brand.primary,
    colorSuccess: '#10b981',
    colorWarning: brand.accent,
    colorError: '#ef4444',
    colorInfo: brand.primary,
    colorLink: brand.primary,
    colorBgBase: '#fafaf9',
    colorTextBase: '#1c1917',
    colorTextSecondary: '#78716c',
    colorBorder: '#e7e5e4',
    borderRadius: 10,
    borderRadiusLG: 14,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontFamilyCode: "'SF Mono', 'Fira Code', 'Fira Mono', monospace",
    fontSize: 15,
    fontSizeLG: 16,
    fontSizeHeading1: 48,
    fontSizeHeading2: 36,
    fontSizeHeading3: 28,
    fontSizeHeading4: 22,
    fontSizeHeading5: 18,
    lineHeight: 1.7,
    lineHeightHeading1: 1.15,
    lineHeightHeading2: 1.2,
    lineHeightHeading3: 1.3,
    controlHeight: 40,
    controlHeightLG: 48,
    paddingContentHorizontal: 24,
    paddingContentVertical: 20,
    boxShadow:
      '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
    boxShadowSecondary:
      '0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)',
  },
  components: {
    Layout: {
      headerBg: 'rgba(250,250,249,0.85)',
      bodyBg: '#fafaf9',
    },
    Card: {
      borderRadiusLG: 14,
      colorBgContainer: '#ffffff',
    },
    Tag: {
      borderRadiusSM: 6,
    },
    Button: {
      borderRadius: 8,
      fontWeight: 600,
    },
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: brand.primaryLight,
    colorSuccess: '#34d399',
    colorWarning: brand.accentLight,
    colorError: '#f87171',
    colorInfo: brand.primaryLight,
    colorLink: brand.primaryLight,
    colorBgBase: '#0c0a09',
    colorTextBase: '#fafaf9',
    colorTextSecondary: '#a8a29e',
    colorBorder: '#292524',
    borderRadius: 10,
    borderRadiusLG: 14,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontFamilyCode: "'SF Mono', 'Fira Code', 'Fira Mono', monospace",
    fontSize: 15,
    fontSizeLG: 16,
    fontSizeHeading1: 48,
    fontSizeHeading2: 36,
    fontSizeHeading3: 28,
    fontSizeHeading4: 22,
    fontSizeHeading5: 18,
    lineHeight: 1.7,
    lineHeightHeading1: 1.15,
    lineHeightHeading2: 1.2,
    lineHeightHeading3: 1.3,
    controlHeight: 40,
    controlHeightLG: 48,
    paddingContentHorizontal: 24,
    paddingContentVertical: 20,
    boxShadow:
      '0 1px 3px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.3)',
    boxShadowSecondary:
      '0 2px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.4)',
  },
  components: {
    Layout: {
      headerBg: 'rgba(12,10,9,0.85)',
      bodyBg: '#0c0a09',
    },
    Card: {
      borderRadiusLG: 14,
      colorBgContainer: '#1c1917',
    },
    Tag: {
      borderRadiusSM: 6,
    },
    Button: {
      borderRadius: 8,
      fontWeight: 600,
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
