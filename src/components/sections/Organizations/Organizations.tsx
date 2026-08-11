import { motion } from 'framer-motion';
import { Typography, Card, Tag, Button, Space } from 'antd';
import { GithubOutlined, BookOutlined } from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import orgsData from '@/data/organizations.json';
import styles from './Organizations.module.css';

const { Title, Text, Paragraph } = Typography;

interface OrgLink {
  github: string;
  website?: string;
  documentation?: string;
}

interface Organization {
  id: string;
  name: string;
  role: string;
  description: string;
  mission: string;
  focusAreas: string[];
  links: OrgLink;
  color: string;
}

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

const organizations = orgsData as Organization[];

export default function Organizations() {
  return (
    <motion.section
      id={sectionIds.organizations}
      className={styles.organizations}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div variants={itemVariants}>
        <Title level={2} className={styles.sectionTitle}>
          Organizations &amp; Leadership
        </Title>
      </motion.div>

      <motion.div className={styles.grid} variants={containerVariants}>
        {organizations.map((org) => (
          <motion.div key={org.id} variants={itemVariants}>
            <Card
              className={styles.card}
              hoverable
              style={{ borderTopColor: org.color }}
              title={<Text strong style={{ fontSize: 16 }}>{org.name}</Text>}
            >
              <div className={styles.role}>
                <Tag color={org.color}>{org.role}</Tag>
              </div>

              <Paragraph type="secondary">{org.description}</Paragraph>

              <div className={styles.mission}>
                <Text type="secondary">{org.mission}</Text>
              </div>

              <div className={styles.focusAreas}>
                {org.focusAreas.map((area) => (
                  <Tag key={area} color="default">
                    {area}
                  </Tag>
                ))}
              </div>

              <div className={styles.actions}>
                <Space size="small">
                  <Button
                    type="link"
                    size="small"
                    icon={<GithubOutlined />}
                    href={org.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  {org.links.documentation && (
                    <Button
                      type="link"
                      size="small"
                      icon={<BookOutlined />}
                      href={org.links.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Docs
                    </Button>
                  )}
                </Space>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
