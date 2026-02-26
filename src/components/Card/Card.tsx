import { motion } from 'framer-motion';
import styles from './Card.module.css';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { staggerItemVariants, quickTransition } from '../../utils/animations';

const ARROW_ICON =
  'https://www.figma.com/api/mcp/asset/7987af0d-f888-41f5-bc6c-8782c4d031fe';

export type CardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  /** Optional: set to true when card is inside a list (e.g. Tutorial Categories) for role="listitem" */
  asListItem?: boolean;
};

export function Card({
  title,
  description,
  image,
  href,
  asListItem = false,
}: CardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={styles.card}
      role={asListItem ? 'listitem' : undefined}
      variants={staggerItemVariants}
      custom={reduceMotion}
      whileHover={{ y: -4 }}
      transition={quickTransition}
    >
      <div className={styles.cardImageWrap}>
        <div className={styles.cardImageInner}>
          <img
            src={image}
            alt=""
            className={styles.cardImage}
            width={304}
            height={221}
          />
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <motion.a
          href={href}
          className={styles.learnMore}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={quickTransition}
          aria-label="Learn more"
        >
          <span className={styles.learnMoreLabel}>Learn More</span>
          <img
            src={ARROW_ICON}
            alt=""
            width={24}
            height={24}
            className={styles.arrow}
            aria-hidden
          />
        </motion.a>
      </div>
    </motion.article>
  );
}
