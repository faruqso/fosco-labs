import { motion } from 'framer-motion';
import styles from './WhatsAppFab.module.css';

/* WhatsApp icon from Figma: Chat on WhatsApp (node 90-2047) */
const WHATSAPP_ICON_URL =
  'https://www.figma.com/api/mcp/asset/f3b2f7e5-eb6d-41c8-8129-de73b6b72a25';

const WHATSAPP_LINK = 'https://wa.me/';

export function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={WHATSAPP_ICON_URL}
        alt=""
        width={32}
        height={32}
        className={styles.icon}
      />
    </motion.a>
  );
}
