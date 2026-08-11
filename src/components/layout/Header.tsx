import { useState } from 'react';
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
        style={{ color: isDark ? '#fff' : '#000' }}
      >
        Alonso
      </span>

      <nav className={styles.nav}>
        <Space size="small">
          {navItems.map((item) => (
            <Button
              key={item.key}
              type="text"
              className={styles.navLink}
              onClick={() => scrollTo(item.key)}
            >
              {item.label}
            </Button>
          ))}
          <Button
            type="text"
            icon={<GithubOutlined />}
            href="https://github.com/Alonsovn"
            target="_blank"
          />
          <Button
            type="text"
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/alonsovn"
            target="_blank"
          />
          <Button
            type="text"
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            onClick={onThemeToggle}
          />
        </Space>
      </nav>

      <div className={styles.mobileMenu}>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
        />
      </div>

      <Drawer
        title="Navigation"
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        styles={{ body: { padding: '1rem' } }}
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
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
