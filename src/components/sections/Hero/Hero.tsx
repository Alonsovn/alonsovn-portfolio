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
        <motion.h1 className={styles.headline} variants={itemVariants}>
          Alonso
        </motion.h1>

        <motion.div variants={itemVariants} className={styles.tagline}>
          <p>Full-Stack Engineer &mdash; Open Source Contributor &mdash; Tech Educator</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Text type="secondary" className={styles.subtitle}>
            Founder of EndToEndLabCR and NaranjoSolutions. Building tools, teaching engineers,
            and shipping open source that makes other developers faster.
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
            Resume
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
