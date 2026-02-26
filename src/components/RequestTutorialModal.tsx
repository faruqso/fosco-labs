import { useEffect, useState } from 'react';
import styles from './RequestTutorialModal.module.css';
import buttonStyles from './Button/Button.module.css';

type RequestTutorialModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RequestTutorialModal({ isOpen, onClose }: RequestTutorialModalProps) {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setShowForm(false);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-tutorial-title"
    >
      <div className={styles.dialog}>
        {/* Desktop: single close button */}
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className={styles.closeIcon}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Mobile: action sheet handle + close row */}
        <div className={styles.actionSheetTop}>
          <span className={styles.sheetHandleBar} aria-hidden />
          <button
            type="button"
            className={styles.closeActionSheet}
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              className={styles.closeIcon}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <header className={styles.header}>
          <h2 id="request-tutorial-title" className={styles.title}>
            Request a Tutorial Session
          </h2>
          <p className={styles.description}>
            Tell us what you want to learn. We'll reach out to discuss a
            tailored learning path for you or your team.
          </p>
        </header>

        {!showForm ? (
          <div className={styles.introActions}>
            <button
              type="button"
              className={buttonStyles.primary}
              onClick={() => setShowForm(true)}
            >
              Get started
            </button>
          </div>
        ) : (
        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.field}>
            <label htmlFor="request-full-name" className={styles.label}>
              Full Name
            </label>
            <input
              id="request-full-name"
              type="text"
              className={styles.input}
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="request-email" className={styles.label}>
              Email Address
            </label>
            <input
              id="request-email"
              type="email"
              className={styles.input}
              placeholder="name@email.com"
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="request-phone" className={styles.label}>
              WhatsApp / Mobile
            </label>
            <div className={styles.phoneRow}>
              <select
                id="request-country"
                className={`${styles.input} ${styles.select} ${styles.countryCodeSelect}`}
                defaultValue="+234"
                aria-label="Country code"
              >
                <option value="+234">+234</option>
                <option value="+233">+233</option>
                <option value="+254">+254</option>
                <option value="+27">+27</option>
                <option value="+255">+255</option>
                <option value="+256">+256</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
                <option value="+49">+49</option>
                <option value="+33">+33</option>
                <option value="+39">+39</option>
                <option value="+34">+34</option>
                <option value="+61">+61</option>
                <option value="+81">+81</option>
                <option value="+86">+86</option>
                <option value="+971">+971</option>
                <option value="+966">+966</option>
                <option value="+20">+20</option>
                <option value="+212">+212</option>
              </select>
              <input
                id="request-phone"
                type="tel"
                className={`${styles.input} ${styles.phoneInput}`}
                placeholder="Mobile"
                autoComplete="tel-national"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="request-interest" className={styles.label}>
              Learning Interest
              <span className={styles.labelMobileSuffix}> (Service Type)</span>
            </label>
            <select
              id="request-interest"
              className={`${styles.input} ${styles.select}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="ai-engineering">AI Engineering</option>
              <option value="javascript-frontend">JavaScript & Frontend</option>
              <option value="ui-engineering">UI Engineering</option>
              <option value="ai-assisted-coding">AI-Assisted Coding</option>
              <option value="firebase-supabase">Firebase & Supabase</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="request-level" className={styles.label}>
              Current Skill Level
            </label>
            <select
              id="request-level"
              className={`${styles.input} ${styles.select}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select your level
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="request-goals" className={styles.label}>
              What are you looking to achieve?
            </label>
            <textarea
              id="request-goals"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="e.g., I want to build a custom AI chatbot for my SaaS..."
              rows={3}
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={buttonStyles.primary}>
              Submit Request
            </button>
            <p className={styles.whatsappPrompt}>
              Need a faster response?{' '}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}
