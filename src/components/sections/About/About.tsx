import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { TeamOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import styles from './About.module.css';

const { Title, Paragraph } = Typography;

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

const highlights = [
  {
    icon: <TeamOutlined />,
    title: 'Community Leader',
    desc: 'Founded and leading tech education and freelance organizations',
  },
  {
    icon: <CodeOutlined />,
    title: 'Open Source Advocate',
    desc: 'Building tools used by developers worldwide',
  },
  {
    icon: <RocketOutlined />,
    title: 'Continuous Learner',
    desc: 'Always exploring new technologies and best practices',
  },
];

export default function About() {
  return (
    <motion.section
      id={sectionIds.about}
      className={styles.about}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div variants={itemVariants}>
        <Title level={2} className={styles.sectionTitle}>
          About Me
        </Title>
      </motion.div>

      <div className={styles.grid}>
        <motion.div variants={itemVariants}>
          <Paragraph className={styles.bio}>
            I'm a full-stack software engineer passionate about building tools that empower
            developers. As the founder of EndToEndLabCR, I lead tech education initiatives that
            bridge theory and practice. Through NaranjoSolutions, I deliver custom software
            solutions for clients. My open source work focuses on developer tooling,
            configuration management, and narrative engines. I believe in clean, maintainable
            code, thorough documentation, and sharing knowledge with the community.
          </Paragraph>
        </motion.div>

        <motion.div className={styles.highlights} variants={itemVariants}>
          {highlights.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              className={styles.highlightItem}
              variants={itemVariants}
            >
              <span className={styles.highlightIcon} aria-hidden="true">{icon}</span>
              <div>
                <div className={styles.highlightTitle}>{title}</div>
                <div className={styles.highlightDesc}>{desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
