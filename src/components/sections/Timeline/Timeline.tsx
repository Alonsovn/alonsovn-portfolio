import { motion } from 'framer-motion';
import { Typography, Button, Tag } from 'antd';
import { LinkOutlined, CaretRightOutlined } from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import type { Experience } from '@/types';
import expData from '@/data/experience.json';
import styles from './Timeline.module.css';

const { Title, Text, Paragraph } = Typography;

const typeColorMap: Record<Experience['type'], string> = {
  'open-source': 'green',
  organization: 'blue',
  project: 'purple',
  work: 'red',
  education: 'orange',
};

const typeLabelMap: Record<Experience['type'], string> = {
  'open-source': 'Open Source',
  organization: 'Organization',
  project: 'Project',
  work: 'Work',
  education: 'Education',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

const experiences = expData as Experience[];

export default function Timeline() {
  return (
    <motion.section
      id={sectionIds.experience}
      className={styles.timeline}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div variants={itemVariants}>
        <Title level={2} className={styles.sectionTitle}>
          Experience &amp; Milestones
        </Title>
      </motion.div>

      <motion.div variants={containerVariants}>
        {experiences.map((exp) => (
          <motion.div key={exp.id} className={styles.item} variants={itemVariants}>
            <div className={styles.itemContent}>
              <div className={styles.itemHeader}>
                <Text className={styles.itemDate}>{exp.date}</Text>
                <Tag color={typeColorMap[exp.type]}>{typeLabelMap[exp.type]}</Tag>
              </div>

              <div className={styles.itemTitle}>{exp.title}</div>

              <div className={styles.itemOrg}>
                <Text>
                  {exp.organization}
                  {exp.link && (
                    <LinkOutlined style={{ marginLeft: 6, fontSize: 12, opacity: 0.6 }} />
                  )}
                </Text>
              </div>

              <Paragraph className={styles.itemDesc} type="secondary">
                {exp.description}
              </Paragraph>

              {exp.highlights && exp.highlights.length > 0 && (
                <div className={styles.highlights}>
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className={styles.highlight}>
                      <CaretRightOutlined className={styles.highlightDot} />
                      <Text type="secondary">{highlight}</Text>
                    </div>
                  ))}
                </div>
              )}

              {exp.link && (
                <Button
                  type="link"
                  size="small"
                  icon={<LinkOutlined />}
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: 0, marginTop: 8 }}
                >
                  View
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
