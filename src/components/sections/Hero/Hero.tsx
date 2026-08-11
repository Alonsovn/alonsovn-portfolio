import { motion } from 'framer-motion';
import { Button, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, DownloadOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import styles from './Hero.module.css';

const { Title, Text } = Typography;

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

        <motion.h1 className={styles.headline} variants={itemVariants}>
          <span className={styles.highlight}>Alonso</span>
        </motion.h1>

        <motion.div variants={itemVariants}>
          <Title level={3} style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
            Full-Stack Engineer | Open Source Contributor | Tech Educator
          </Title>
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
          />
          <Button
            type="text"
            size="large"
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/alonsovn"
            target="_blank"
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        variants={itemVariants}
        onClick={() => scrollTo(sectionIds.about)}
        style={{ cursor: 'pointer' }}
      >
        <ArrowDownOutlined style={{ fontSize: '1.25rem' }} />
      </motion.div>
    </motion.section>
  );
}
