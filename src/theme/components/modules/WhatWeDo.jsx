// src/theme/components/modules/WhatWeDo.jsx
import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/whatWeDo.module.css";

export function Component({ fieldValues }) {
  const { heading, services } = fieldValues;

  const servicesArray = Array.isArray(services) && services.length > 0 ? services : [
    { title: "CRM Implementation", description: "Tailored Dynamics 365 solutions for your business." },
    { title: "System Integration", description: "Azure, API, and ERP integrations that connect your systems." },
    { title: "Power Platform Solutions", description: "Automate workflows and enhance business processes." },
    { title: "Audit & Architecture", description: "Ensure system efficiency and governance." },
    { title: "Change Management & Adoption", description: "Drive user adoption and organizational change." },
  ];

  return (
    <section className={styles.servicesSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.gridContainer}>
        {servicesArray.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// HubSpot Module Fields
export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="What We Do" />

    <FieldGroup name="services" label="Services" repeating={true}>
      <TextField name="title" label="Service Title" />
      <TextField name="description" label="Service Description" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Service Overview Grid",
  icon: "th-large",
};

export default Component;
