import { lazy, Suspense } from 'react';
import { ConfigProvider, App as AntApp, Layout, Spin } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { lightTheme, darkTheme } from '@/styles/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';

const Hero = lazy(() => import('@/components/sections/Hero/Hero'));
const About = lazy(() => import('@/components/sections/About/About'));
const Skills = lazy(() => import('@/components/sections/Skills/Skills'));
const Projects = lazy(() => import('@/components/sections/Projects/Projects'));
const Organizations = lazy(() => import('@/components/sections/Organizations/Organizations'));
const Timeline = lazy(() => import('@/components/sections/Timeline/Timeline'));
const Contact = lazy(() => import('@/components/sections/Contact/Contact'));

const { Content } = Layout;

const sectionLoader = (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}>
    <Spin size="large" />
  </div>
);

export default function App() {
  const { toggle, isDark } = useTheme();

  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <AntApp>
        <BrowserRouter>
          <Layout
            style={{ minHeight: '100vh', background: isDark ? '#141414' : '#f5f5f5' }}
          >
            <Header isDark={isDark} onThemeToggle={toggle} />
            <Content id="main-content">
              <Suspense fallback={sectionLoader}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Organizations />
                <Timeline />
                <Contact />
              </Suspense>
            </Content>
            <Footer />
            <ScrollToTop />
          </Layout>
        </BrowserRouter>
      </AntApp>
    </ConfigProvider>
  );
}
