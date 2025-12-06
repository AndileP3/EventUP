import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/valueProps.module.css";

export function Component({ fieldValues }) {
  const { heading, valueProps } = fieldValues;

  // Fallback valueProps if none added in CMS
  const valuePropsArray = Array.isArray(valueProps) && valueProps.length > 0 ? valueProps : [
    { text: "Dynamics 365 CRM Expertise" },
    { text: "Complex Azure Integrations" },
    { text: "Power Platform Automation" },
    { text: "9.8/10 Client Satisfaction" },
  ];

  return (
    <section className={styles.valuePropsSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.cardsContainer}>
        {valuePropsArray.map((item, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.cardText}>{item.text || ""}</p>
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
      default="Why Clients Choose Us"
    />

    <FieldGroup name="valueProps" label="Value Propositions" repeating={true}>
      <TextField name="text" label="Value Proposition Text" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Value Proposition Cards",
  icon: "list-ul",
};

export default Component;
