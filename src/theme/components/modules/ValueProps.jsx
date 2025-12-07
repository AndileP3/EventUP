import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/valueProps.module.css";

export function Component({ fieldValues }) {
  const { heading, valueProps } = fieldValues;

  const valuePropsArray =
    Array.isArray(valueProps?.valueProps) && valueProps.valueProps.length > 0
      ? valueProps.valueProps
      : [
          { title: "Tailored CRM Solutions", description: "We recognise that each business is unique. Our approach to HubSpot CRM implementation is fully tailored to your business needs, ensuring you get the maximum ROI from your CRM investment." },
          { title: "HubSpot Certified Experts", description: "Our team includes certified HubSpot consultants who have successfully implemented and optimised the platform for clients across various industries." },
          { title: "Proven Track Record", description: "From startups to enterprises, we’ve implemented CRM systems that drive revenue, streamline operations, and improve customer retention." },
         
        ];

  return (
    <section className={styles.valuePropsSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.cardsContainer}>
        {valuePropsArray.map((item, index) => (
          <div key={index} className={styles.card}>
            {item.title && <h3 className={styles.cardTitle}>{item.title}</h3>}
            {item.description && <p className={styles.cardText}>{item.description}</p>}
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
      default="Why Our Clients Choose Us"
    />

    <FieldGroup name="valueProps" label="Value Propositions" repeating={true}>
  <TextField name="title" label="Title" />
  <TextField name="description" label="Description" />
</FieldGroup>

  </ModuleFields>
);

export const meta = {
  label: "Value Proposition Cards",
  icon: "list-ul",
};

export default Component;
