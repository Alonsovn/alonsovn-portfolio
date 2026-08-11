import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Tag, Segmented } from 'antd';
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

const CATEGORIES: (SkillCategory | 'all')[] = ['all', 'frontend', 'backend', 'devops', 'tools'];

const categoryOptions = CATEGORIES.map((c) => ({
  value: c,
  label: c === 'all' ? 'All' : skillCategoryLabels[c],
}));

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | 'all'>('all');

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

  const visibleCategories = active === 'all'
    ? CATEGORIES.filter((c): c is SkillCategory => c !== 'all')
    : [active];

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

      <motion.div variants={itemVariants} className={styles.filterBar}>
        <Segmented
          options={categoryOptions}
          value={active}
          onChange={(val) => setActive(val as SkillCategory | 'all')}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={styles.legend}
      >
        {(['expert', 'advanced', 'intermediate'] as const).map((level) => (
          <span key={level} className={styles.legendItem}>
            <span
              className={styles.legendDot}
              style={{
                background: level === 'expert' ? '#0d9488' : level === 'advanced' ? '#10b981' : '#f59e0b',
              }}
            />
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        ))}
      </motion.div>

      <AnimatePresence>
        {visibleCategories.map((category) => {
          const skills = grouped[category];
          if (skills.length === 0) return null;

          return (
            <motion.div
              key={category}
              className={styles.categorySection}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.categoryTitle}>
                <span
                  className={styles.categoryDot}
                  style={{ backgroundColor: skillCategoryColors[category] }}
                />
                {skillCategoryLabels[category]}
              </div>

              <div className={styles.skillGrid}>
                {skills.map((skill) => (
                  <Tag
                    key={skill.name}
                    color={proficiencyColors[skill.proficiency]}
                    className={styles.skillTag}
                    style={{
                      fontWeight: skill.proficiency === 'expert' ? 600 : skill.proficiency === 'advanced' ? 500 : 400,
                    }}
                  >
                    {skill.name}
                  </Tag>
                ))}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.section>
  );
}
