import { motion } from 'framer-motion';
import styles from './WhoThisIsForSection.module.css';
import { Card } from './Card';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { sectionVariants, staggerContainerVariants } from '../utils/animations';

const AUDIENCES = [
  {
    id: 'junior',
    title: 'Junior Developers',
    description:
      'Build solid foundations in modern development practices.',
    image:
      'https://www.figma.com/api/mcp/asset/dc27cf3b-b29e-45c3-83eb-997bcba98f7b',
  },
  {
    id: 'mid',
    title: 'Mid-level Engineers',
    description:
      'Level up with advanced patterns and architectural thinking.',
    image:
      'https://www.figma.com/api/mcp/asset/e03c493e-6f2d-461e-a590-4316de7b7912',
  },
  {
    id: 'senior',
    title: 'Senior Developers',
    description: 'Stay current with AI and cutting-edge technologies.',
    image:
      'https://www.figma.com/api/mcp/asset/7601c399-796e-4efa-a810-a0711ba50705',
  },
  {
    id: 'teams',
    title: 'Product Teams',
    description:
      'Upskill your entire team with consistent, professional training.',
    image:
      'https://www.figma.com/api/mcp/asset/39e3e423-cf9f-4780-a06c-a8013a1fe9e6',
  },
] as const;

export function WhoThisIsForSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.wrapper}
      id="who-this-is-for"
      aria-labelledby="who-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px 0px -48px 0px' }}
      custom={reduceMotion}
    >
      <div className={styles.section}>
        <header className={styles.header}>
          <h2 id="who-heading" className={styles.title}>
            Who This Is For
          </h2>
          <p className={styles.subtitle}>
            Whether you're starting out or leading a team, we have training that
            meets you where you are.
          </p>
        </header>
        <motion.div
          className={styles.grid}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={reduceMotion}
        >
          {AUDIENCES.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              className={styles.cardInGrid}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
