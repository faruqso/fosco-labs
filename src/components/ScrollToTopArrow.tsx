import { useState, useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';
import styles from './ScrollToTopArrow.module.css';

const SCROLL_THRESHOLD = 280;

export function ScrollToTopArrow() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(false);

  const lenis = useLenis((lenis) => {
    const past = lenis.scroll > SCROLL_THRESHOLD;
    if (past !== prevRef.current) {
      prevRef.current = past;
      setVisible(past);
    }
  });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1, easing: (t) => t });
  };

  if (!isMobile) return null;

  return (
    <button
      type="button"
      className={`${styles.arrowButton} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        className={styles.arrowIcon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 19V5M12 5l-6 6M12 5l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
