import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Typography, Tag } from 'antd';
import { sectionIds } from '@/styles/theme';
import { skillCategoryLabels, skillCategoryColors } from '@/lib/utils';
import type { Skill, SkillCategory } from '@/types';
import skillsData from '@/data/skills.json';
import styles from './Skills.module.css';

const { Title } = Typography;

const proficiencyColors: Record<Skill['proficiency'], string> = {
  expert: '#0d9488',
  advanced: '#10b981',
  intermediate: '#f59e0b',
  beginner: 'default',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const CATEGORIES: SkillCategory[] = ['frontend', 'backend', 'devops', 'tools'];

export default function Skills() {
  const grouped = useMemo(() => {
    const map: Record<SkillCategory, Skill[]> = {
      frontend: [],
      backend: [],
      devops: [],
      tools: [],
    };
    for (const skill of skillsData as Skill[]) {
      map[skill.category].push(skill);
    }
    return map;
  }, []);

  return (
    <motion.section
      id={sectionIds.skills}
      className={styles.skills}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div variants={itemVariants}>
        <Title level={2} className={styles.sectionTitle}>
          Skills &amp; Technologies
        </Title>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '2rem',
          fontSize: '0.85rem',
          opacity: 0.75,
        }}
      >
        {(['expert', 'advanced', 'intermediate'] as const).map((level) => (
          <span key={level} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{
              width: 10,
              height: 10,
              borderRadius: 3,
              background: level === 'expert' ? '#0d9488' : level === 'advanced' ? '#10b981' : '#f59e0b',
            }} />
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        ))}
      </motion.div>

      {CATEGORIES.map((category) => {
        const skills = grouped[category];
        if (skills.length === 0) return null;

        return (
          <motion.div key={category} className={styles.categorySection} variants={itemVariants}>
            <div className={styles.categoryTitle}>
              <span
                className={styles.categoryDot}
                style={{ backgroundColor: skillCategoryColors[category] }}
              />
              {skillCategoryLabels[category]}
            </div>

            <motion.div
              className={styles.skillGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Tag
                    color={proficiencyColors[skill.proficiency]}
                    style={{
                      borderRadius: 6,
                      padding: '4px 12px',
                      fontSize: '0.9rem',
                      width: '100%',
                      textAlign: 'center',
                      fontWeight: skill.proficiency === 'expert' ? 600 : skill.proficiency === 'advanced' ? 500 : 400,
                    }}
                  >
                    {skill.name}
                  </Tag>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
