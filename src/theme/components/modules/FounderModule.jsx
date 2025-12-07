// src/theme/components/modules/FounderModule.jsx
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/founder.module.css";
import founderImage from "../../assets/trust.png";

export function Component({ fieldValues }) {
  const { heading, description, image, buttonText } = fieldValues;
  // Use the same pattern as header: image?.src || fallbackImage
  const imgSrc = image?.src || founderImage;
  
  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {/* Always show the image wrapper, but use conditional src */}
          <img src={imgSrc} alt={heading} className={styles.founderImage} />
        </div>
        <div className={styles.textWrapper}>
          {heading && <h2 className={styles.heading}>{heading}</h2>}
          {description && <p className={styles.description}>{description}</p>}
          {buttonText && (
            <a href="#" className={styles.button}>
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="Why choose CRM-SYNERGY" />
    <TextField
      name="description"
      label="Description"
      default="Experience helping businesses leverage HubSpot CRM to streamline operations and boost customer engagement. From initial consultation to full implementation, they design and configure HubSpot to automate workflows, enhance sales pipelines, and provide actionable insights. Their expertise ensures your team can maximize HubSpot's capabilities for measurable growth."
    />
    {/* Remove the default prop - it was causing the validation error */}
    <ImageField name="image" label="Founder Image" />
    <TextField name="buttonText" label="Button Text" default="About" />
  </ModuleFields>
);

export const meta = {
  label: "Founder Section",
  icon: "user",
};

export default Component;