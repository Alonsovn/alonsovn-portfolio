import { motion } from 'framer-motion';
import { Button, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, DownloadOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import styles from './Hero.module.css';

const { Text } = Typography;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
} as const;

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id={sectionIds.hero}
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.bgGradient} />

      <div className={styles.content}>
        <motion.p className={styles.greeting} variants={itemVariants}>
          Hello, I'm
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#fff',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          A
        </motion.div>

        <motion.h1 className={styles.headline} variants={itemVariants}>
          <span className={styles.highlight}>Alonso</span>
        </motion.h1>

        <motion.div variants={itemVariants}>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 500, opacity: 0.75, marginBottom: '0.5rem' }}>
            Full-Stack Engineer | Open Source Contributor | Tech Educator
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Text type="secondary" className={styles.subtitle}>
            Building open source tools, leading tech education at EndToEndLabCR, and crafting
            freelance solutions through NaranjoSolutions. Passionate about clean architecture,
            developer experience, and knowledge sharing.
          </Text>
        </motion.div>

        <motion.div className={styles.actions} variants={itemVariants}>
          <Button
            type="primary"
            size="large"
            onClick={() => scrollTo(sectionIds.projects)}
          >
            View Projects
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => scrollTo(sectionIds.contact)}
          >
            Contact Me
          </Button>
          <Button
            type="link"
            size="large"
            icon={<DownloadOutlined />}
            href="/resume.pdf"
            download
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div className={styles.socialLinks} variants={itemVariants}>
          <Button
            type="text"
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/Alonsovn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          />
          <Button
            type="text"
            size="large"
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/alonso-villanueva-naranjo-739341144"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        variants={itemVariants}
        onClick={() => scrollTo(sectionIds.about)}
        style={{ cursor: 'pointer' }}
        aria-hidden="true"
      >
        <ArrowDownOutlined style={{ fontSize: '1.25rem' }} />
      </motion.div>
    </motion.section>
  );
}
