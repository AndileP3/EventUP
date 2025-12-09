// src/theme/components/islands/CTAIsland.jsx
import styles from '../../styles/ctaIsland.module.css';

export default function CTAIsland({ fieldValues }) {
  const { ctaPrimary, ctaPrimaryLink, ctaSecondary, ctaSecondaryLink } = fieldValues || {};

  return (
    <div className={styles.ctaContainer}>
      {ctaPrimary && (
     <a
        href="/contact"
        className={styles.primaryBtn}
      >
        {ctaPrimary}
      </a>

      )}
      {ctaSecondary && (
        <button className={styles.secondaryBtn} onClick={() => window.location.href = ctaSecondaryLink || "#"}>
          {ctaSecondary}
        </button>
      )}
    </div>
  );
}
