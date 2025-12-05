// src/theme/components/islands/CTAIsland.jsx
import React from "react";
import styles from "../../styles/home.module.css";

export default function CTAIsland({ fieldValues }) {
  const { ctaPrimary, ctaSecondary } = fieldValues || {};

  return (
    <div className={styles.ctaContainer}>
      <button className={styles.primaryCTA}>
        {ctaPrimary || "Book a Consultation"}
      </button>

      <button className={styles.secondaryCTA}>
        {ctaSecondary || "View Case Studies"}
      </button>
    </div>
  );
}
