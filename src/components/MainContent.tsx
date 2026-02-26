import { HeroSection } from './HeroSection';
import { TutorialCategoriesSection } from './TutorialCategoriesSection';
import { ConsultancySection } from './ConsultancySection';
import { HowItWorksSection } from './HowItWorksSection';
import { WhoThisIsForSection } from './WhoThisIsForSection';
import { GetStartedSection } from './GetStartedSection';
import styles from './MainContent.module.css';

export function MainContent() {
  return (
    <main className={styles.main} id="main-content">
      <HeroSection />
      <TutorialCategoriesSection />
      <ConsultancySection />
      <HowItWorksSection />
      <WhoThisIsForSection />
      <GetStartedSection />
    </main>
  );
}
