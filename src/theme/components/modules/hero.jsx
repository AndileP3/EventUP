// src/theme/components/modules/Hero.jsx
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import CTAIsland from "../islands/CTAIsland?island";
import styles from "../../styles/home.module.css";

export function Component({ fieldValues }) {
  const { title, subtitle, backgroundImage, ctaPrimary, ctaSecondary } = fieldValues;

  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className={styles.header}>
        <div className={styles.logo}>IntegriCloud</div>

        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#about">About</a>
          <a href="#contact" className={styles.contactBtn}>Contact</a>
        </nav>
      </header>

      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>

          <Island
            module={CTAIsland}
            fieldValues={{ ctaPrimary, ctaSecondary }}
          />
        </div>
      </div>
      {/* THIRD WAVE LAYER */}
  <div className={styles.waveLayer}></div>
    </section>
  );
}

// Module fields
export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Hero Title"
      default="Unify Your CRM, Boost Adoption, Transform Your Operations"
    />
    <TextField
      name="subtitle"
      label="Hero Subtitle"
      default="We help CIOs and CRM leaders integrate Dynamics 365, Azure, and Power Platform with seamless architecture and exceptional service delivery."
    />
    <ImageField
      name="backgroundImage"
      label="Background Image"
      default={{
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
        alt: "Tech Integration Background",
      }}
    />
    <TextField
      name="ctaPrimary"
      label="Primary CTA Text"
      default="Book a Consultation"
    />
    <TextField
      name="ctaSecondary"
      label="Secondary CTA Text"
      default="View Case Studies"
    />
  </ModuleFields>
);

export const meta = {
  label: "Consulting Hero Section",
  icon: "image-text",
};

export default Component;
