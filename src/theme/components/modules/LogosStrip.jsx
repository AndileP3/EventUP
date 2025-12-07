import { ModuleFields, TextField, ImageField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/logosStrip.module.css";

export function Component({ fieldValues }) {
  const { heading, logos } = fieldValues;

  // Fallback logos if none added in CMS
  const logosArray = Array.isArray(logos) && logos.length > 0 ? logos : [
    { image: { src: "https://static.hsappstatic.net/ui-images/static-2.967/optimized/canvas/hubspot-wordmark.svg", alt: "Logo 1" } },
  ];

  return (
    <section className={styles.logosSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.logosContainer}>
        {logosArray.map((item, index) => (
          <div key={index} className={styles.logoWrapper}>
            <img
              src={item.image?.src || ""}
              alt={item.image?.alt || `Logo ${index + 1}`}
              className={styles.logoImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// HubSpot Module Fields
export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="Trusted by the best HubSpot customers"
    />

    <FieldGroup name="logos" label="Logos" repeating={true}>
      <ImageField name="image" label="Logo Image" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Logos Strip",
  icon: "image",
};

export default Component;
