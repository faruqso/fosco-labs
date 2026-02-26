import { useState, useEffect } from 'react';

/**
 * Respects prefers-reduced-motion for accessibility.
 * Pass the returned value to Framer Motion's custom prop to skip or simplify animations.
 */
export function useReducedMotion(): boolean {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduceMotion;
}
