import { motion } from 'framer-motion';
import styles from './HowItWorksSection.module.css';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  sectionVariants,
  staggerContainerVariants,
  staggerItemVariants,
  quickTransition,
} from '../utils/animations';

const STEPS = [
  {
    number: '01',
    title: 'Choose Category',
    description:
      'Select a learning path that matches your goals and skill level.',
  },
  {
    number: '02',
    title: 'Learn by Building',
    description:
      'Work on real-world projects with production-ready code patterns.',
  },
  {
    number: '03',
    title: 'Apply to Real Products',
    description:
      'Take your skills directly to your work and ship better software.',
  },
] as const;

export function HowItWorksSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.wrapper}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px 0px -48px 0px' }}
      custom={reduceMotion}
    >
      <div className={styles.section}>
        <header className={styles.header}>
          <h2 id="how-it-works-heading" className={styles.title}>
            How It Works
          </h2>
          <p className={styles.subtitle}>
            A straightforward path from learning to shipping production code.
          </p>
        </header>
        <motion.div
          className={styles.steps}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={reduceMotion}
        >
          {STEPS.map((step) => (
            <motion.article
              key={step.number}
              className={styles.step}
              variants={staggerItemVariants}
              custom={reduceMotion}
              whileHover={{ y: -2 }}
              transition={quickTransition}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
