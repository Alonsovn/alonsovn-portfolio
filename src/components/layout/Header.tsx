import { useState, useEffect } from 'react';
import { Button, Space, Drawer } from 'antd';
import {
  MenuOutlined,
  SunOutlined,
  MoonOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import styles from './Header.module.css';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const navItems = [
  { key: sectionIds.about, label: 'About' },
  { key: sectionIds.skills, label: 'Skills' },
  { key: sectionIds.projects, label: 'Projects' },
  { key: sectionIds.organizations, label: 'Orgs' },
  { key: sectionIds.experience, label: 'Experience' },
  { key: sectionIds.contact, label: 'Contact' },
];

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    const ids = Object.values(sectionIds);
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={styles.header}
      style={{
        background: isDark ? 'rgba(20,20,20,0.85)' : 'rgba(255,255,255,0.85)',
        borderBottom: `1px solid ${isDark ? '#303030' : '#f0f0f0'}`,
      }}
    >
      <span
        className={styles.logo}
        onClick={() => scrollTo(sectionIds.hero)}
        style={{ color: isDark ? '#fff' : '#1c1917' }}
      >
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.8rem',
          marginRight: 8,
          fontFamily: "var(--font-heading)",
        }}>A</span>
        Alonso
      </span>

      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      <nav className={styles.nav}>
        <Space size="small">
          {navItems.map((item) => (
            <Button
              key={item.key}
              type="text"
              className={styles.navLink}
              onClick={() => scrollTo(item.key)}
              style={{
                color: activeSection === item.key ? '#0d9488' : undefined,
                fontWeight: activeSection === item.key ? 600 : 500,
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            type="text"
            icon={<GithubOutlined />}
            href="https://github.com/Alonsovn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          />
          <Button
            type="text"
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/alonso-villanueva-naranjo-739341144"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          />
          <Button
            type="text"
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            onClick={onThemeToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          />
        </Space>
      </nav>

      <div className={styles.mobileMenu}>
        <Button
          type="text"
          icon={isDark ? <SunOutlined /> : <MoonOutlined />}
          onClick={onThemeToggle}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        />
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation menu"
        />
      </div>

      <Drawer
        title="Navigation"
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        styles={{ body: { padding: '1rem' } }}
      >
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          {navItems.map((item) => (
            <Button
              key={item.key}
              type="text"
              block
              style={{ justifyContent: 'flex-start', height: 44, fontWeight: 500 }}
              onClick={() => scrollTo(item.key)}
            >
              {item.label}
            </Button>
          ))}
          <Button type="text" icon={isDark ? <SunOutlined /> : <MoonOutlined />} block onClick={onThemeToggle}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Space>
      </Drawer>
    </header>
  );
}
