import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/callToAction.module.css";

export function Component({ fieldValues }) {
  const { heading, subheading, ctaText, ctaLink } = fieldValues;

  return (
    <section className={styles.ctaSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {subheading && <p className={styles.subheading}>{subheading}</p>}

      {ctaText && ctaLink && (
        <a href="/contact" className={styles.ctaButton}>{ctaText}</a>
      )}
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="CTA Heading" default="Ready to Get Started?" />
    <TextField name="subheading" label="CTA Subheading" default="Book a consultation or contact us today." />
    <TextField name="ctaText" label="Button Text" default="Book Now" />
    <TextField name="ctaLink" label="Button Link" default="/contact" />
  </ModuleFields>
);

export const meta = { label: "Call to Action", icon: "hand-pointer" };
export default Component;