import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/whyClientsTrustUs.module.css";

export function Component({ fieldValues }) {
  const { heading, stats } = fieldValues;

  const statsArray = Array.isArray(stats) && stats.length > 0 ? stats : [
    { text: "10+ Years of Experience" },
    { text: "Microsoft Certified Experts" },
    { text: "NPS 9.8/10" },
  ];

  return (
    <section className={styles.statsSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.statsContainer}>
        {statsArray.map((item, index) => (
          <div key={index} className={styles.statCard}>
            <p className={styles.statText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="Why Clients Trust Us" />
    <FieldGroup name="stats" label="Stats" repeating={true}>
      <TextField name="text" label="Stat Text" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = { label: "Why Clients Trust Us", icon: "check-circle" };
export default Component;
