import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Typography, Card, Tag, Button, Space, Segmented } from 'antd';
import { GithubOutlined, LinkOutlined, StarOutlined, TeamOutlined } from '@ant-design/icons';
import { sectionIds } from '@/styles/theme';
import type { Project } from '@/types';
import projectsData from '@/data/projects.json';
import styles from './Projects.module.css';

const { Title, Text, Paragraph } = Typography;

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

const FILTER_OPTIONS = ['All', 'Open Source', 'Freelance', 'Personal'] as const;

const filterToCategory: Record<string, string | null> = {
  All: null,
  'Open Source': 'open-source',
  Freelance: 'freelance',
  Personal: 'personal',
};

const categoryColors: Record<Project['category'], string> = {
  'open-source': 'green',
  freelance: 'purple',
  personal: 'blue',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects = projectsData as Project[];

  const availableFilters = useMemo(
    () => FILTER_OPTIONS.filter(
      (opt) => opt === 'All' || projects.some((p) => p.category === filterToCategory[opt])
    ),
    [projects]
  );

  const filtered = useMemo(() => {
    const target = filterToCategory[activeFilter];
    if (target === null) return projects;
    return projects.filter((p) => p.category === target);
  }, [activeFilter, projects]);

  return (
    <motion.section
      id={sectionIds.projects}
      className={styles.projects}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div variants={itemVariants}>
        <Title level={2} className={styles.sectionTitle}>
          Featured Projects
        </Title>
      </motion.div>

      <motion.div className={styles.filters} variants={itemVariants}>
        <Segmented
          options={[...availableFilters]}
          value={activeFilter}
          onChange={(value) => setActiveFilter(value as string)}
        />
      </motion.div>

      <motion.div className={styles.grid} variants={containerVariants}>
        {filtered.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card className={styles.card} hoverable>
              <Space align="start" style={{ marginBottom: 4 }}>
                <Text strong style={{ fontSize: 16 }}>
                  {project.title}
                </Text>
                {project.featured && (
                  <Tag color="gold" style={{ fontSize: 11, lineHeight: '18px' }}>
                    Featured
                  </Tag>
                )}
              </Space>

              <Paragraph
                type="secondary"
                ellipsis={{ rows: 3 }}
                style={{ marginBottom: 12, marginTop: 8 }}
              >
                {project.description}
              </Paragraph>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <Tag key={tag} color={categoryColors[project.category]}>
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className={styles.tags}>
                {project.techStack.map((tech) => (
                  <Tag key={tech} color="blue">
                    {tech}
                  </Tag>
                ))}
              </div>

              <div className={styles.footer} style={{ marginTop: 12 }}>
                <div className={styles.metrics}>
                  {project.metrics?.stars !== undefined && (
                    <span>
                      <StarOutlined /> {project.metrics.stars}
                    </span>
                  )}
                  {project.metrics?.contributors !== undefined && (
                    <span>
                      <TeamOutlined /> {project.metrics.contributors}
                    </span>
                  )}
                </div>

                <Space size="small">
                  {project.links.github && (
                    <Button
                      type="link"
                      size="small"
                      icon={<GithubOutlined />}
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  )}
                  {project.links.demo && (
                    <Button
                      type="link"
                      size="small"
                      icon={<LinkOutlined />}
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </Button>
                  )}
                  {project.links.documentation && !project.links.demo && (
                    <Button
                      type="link"
                      size="small"
                      icon={<LinkOutlined />}
                      href={project.links.documentation}
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
