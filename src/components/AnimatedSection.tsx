import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { sectionVariants } from '../utils/animations';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
  'aria-labelledby'?: string;
};

export function AnimatedSection({
  children,
  className,
  as: Component = 'section',
  id,
  'aria-labelledby': ariaLabelledby,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const props = {
    id,
    className,
    'aria-labelledby': ariaLabelledby,
    variants: sectionVariants,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, margin: '-48px 0px -48px 0px' },
    custom: reduceMotion,
  };

  if (Component === 'section') {
    return <motion.section {...props}>{children}</motion.section>;
  }
  return <motion.div {...props}>{children}</motion.div>;
}
