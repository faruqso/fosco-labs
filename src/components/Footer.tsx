import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import logoUrl from '../../Wireframe/FL Logo.svg';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { sectionVariants } from '../utils/animations';

const PROGRAMMES_LINKS = [
  { label: 'AI Engineering', href: '#categories' },
  { label: 'JavaScript & Frontend', href: '#categories' },
  { label: 'UI Engineering', href: '#categories' },
  { label: 'AI-Assisted Coding', href: '#categories' },
  { label: 'Firebase & Supabase', href: '#categories' },
] as const;

const COMPANY_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Consultancy', href: '#consultancy' },
  { label: 'Templates', href: '/template' },
  { label: 'Contact', href: '#contact' },
] as const;

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
] as const;

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className={styles.footer}
      role="contentinfo"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-32px 0px 0px 0px' }}
      custom={reduceMotion}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="/" className={styles.logoLink} aria-label="Fosco Labs home">
              <img
                src={logoUrl}
                alt="Fosco Labs Consulting"
                className={styles.logo}
                width={102}
                height={25}
              />
            </a>
            <p className={styles.tagline}>
              Professional software engineering and AI development training.
            </p>
          </div>
          <nav className={styles.column} aria-label="Programmes">
            <h3 className={styles.columnTitle}>Programmes</h3>
            <ul className={styles.links}>
              {PROGRAMMES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={styles.column} aria-label="Company">
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.links}>
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={styles.column} aria-label="Legal">
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.links}>
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Fosco Labs Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
