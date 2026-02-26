import styles from './TemplatePage.module.css';

/**
 * Page template (Figma 107:3554). Uses centralized design tokens from index.css.
 * Use this layout to build other pages: hero + body content area + CTA section.
 */
export function TemplatePage() {
  return (
    <main className={styles.main} id="main-content">
      {/* Hero: Page title + short description */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>Page Title</h1>
            <p className={styles.pageDescription}>
              Short supporting description for the page
            </p>
          </div>
        </div>
      </section>

      {/* Body content area */}
      <section className={styles.bodySectionWrapper}>
        <div className={styles.bodySection}>
          <h2 className={styles.sectionTitle}>Body Content area</h2>
          <p className={styles.sectionDescription}>
            Short supporting description for the section
          </p>
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSectionWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>CTA Header</h2>
            <p className={styles.ctaDescription}>
              Short supporting description for the section
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="#primary" className={styles.ctaPrimary}>
              CTA 1
            </a>
            <a href="#secondary" className={styles.ctaSecondary}>
              CTA 2
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
