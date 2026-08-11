import { motion } from 'framer-motion';
import { Typography, Button, Card, Divider } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, FileTextOutlined } from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import styles from './Contact.module.css';

const { Title, Text } = Typography;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
} as const;

export default function Contact() {
  return (
    <motion.section
      id={sectionIds.contact}
      className={styles.contact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div variants={fadeUp}>
        <Title level={2} className={styles.sectionTitle}>
          Let's Connect
        </Title>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Text className={styles.subtitle}>
          I'm always open to interesting conversations, collaboration opportunities, and technical
          mentorship.
        </Text>
      </motion.div>

      <motion.div variants={fadeUp}>
        <div className={styles.availability}>
          <span className={styles.availabilityDot} />
          <Text strong style={{ color: '#52c41a' }}>
            Available for freelance & opportunities
          </Text>
        </div>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Card className={styles.content}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Text strong style={{ fontSize: '1.1rem' }}>
              alonso@example.com
            </Text>
          </div>

          <div className={styles.actions}>
            <Button type="primary" size="large" icon={<MailOutlined />} href="mailto:alonso@example.com">
              Send Email
            </Button>
            <Button size="large" icon={<FileTextOutlined />} href="/resume.pdf" target="_blank" download>
              Download Resume
            </Button>
          </div>

          <Divider plain>Or find me on</Divider>

          <div className={styles.links}>
            <Button
              icon={<GithubOutlined />}
              href="https://github.com/Alonsovn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              icon={<LinkedinOutlined />}
              href="https://linkedin.com/in/alonsovn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={fadeUp} className={styles.footerNote}>
        <Text>
          For freelance inquiries, reach out through{' '}
          <a href="https://github.com/NaranjoSolutions" target="_blank" rel="noopener noreferrer">
            NaranjoSolutions
          </a>
        </Text>
      </motion.div>
    </motion.section>
  );
}
