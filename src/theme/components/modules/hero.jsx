// src/theme/components/modules/Hero.jsx
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import CTAIsland from "../islands/CTAIsland?island";
import heroimage from "../../assets/mountains.jpeg";

import styles from "../../styles/home.module.css";

export function Component({ fieldValues = {} }) {
  const {
    title,
    subtitle,
    backgroundImage,
    ctaPrimary,
    ctaPrimaryLink,
    ctaSecondary,
    ctaSecondaryLink
  } = fieldValues;

  const bg = backgroundImage?.src || heroimage;

  return (
    <section className={styles.heroSection}>
      
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>

          <Island
            module={CTAIsland}
            fieldValues={{ ctaPrimary, ctaPrimaryLink}}
          />
        </div>
      </div>

      <div className={styles.waveLayer}></div>
    </section>
  );
}

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
      default="We help CIOs and CRM leaders integrate Dynamics 365, Azure, and Power Platform."
    />

    <ImageField
      name="backgroundImage"
      label="Background Image"
      default={{ src: "../../assets/mountains.jpeg", alt: "Mountains" }}
    />

    <TextField name="ctaPrimary" label="Primary CTA Text" default="Book a Consultation" />
    <TextField name="ctaPrimaryLink" label="Primary CTA Link" default="#" />
    <TextField name="ctaSecondary" label="Secondary CTA Text" default="View Case Studies" />
    <TextField name="ctaSecondaryLink" label="Secondary CTA Link" default="#" />
  </ModuleFields>
);

export const meta = {
  label: "Consulting Hero Section",
  icon: "image-text",
};

export default Component;
