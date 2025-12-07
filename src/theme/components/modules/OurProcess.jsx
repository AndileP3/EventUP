// src/theme/components/modules/OurProcess.jsx
import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/ourProcess.module.css";

export function Component({ fieldValues }) {
  const { heading, steps } = fieldValues;

  const stepsArray =
    Array.isArray(steps) && steps.length > 0
      ? steps
      : [
          {
            title: "CRM Consultation & Needs Assessment",
            description:
              "We assess your goals, processes, and CRM needs to determine the best platform—HubSpot or others like Salesforce, Zoho, or Pipedrive.",
          },
          {
            title: "HubSpot CRM Customisation & Configuration",
            description:
              "We configure HubSpot CRM to match your workflows, automate tasks, and enhance efficiency.",
          },
          {
            title: "Data Migration",
            description:
              "Secure, seamless migration of all customer data with full integrity and validation.",
          },
          {
            title: "HubSpot Integration",
            description:
              "We integrate HubSpot with your ERP, email, or ecommerce systems for unified operations.",
          },
        //   {
        //     title: "Training & Support",
        //     description:
        //       "Hands-on training and ongoing support to ensure long-term CRM success.",
        //   },
        ];

  return (
    <section className={styles.processSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.timelineContainer}>
        {stepsArray.map((item, index) => (
          <div key={index} className={styles.stepWrapper}>
            <div className={styles.stepMarker}>
              <span className={styles.stepNumber}>{index + 1}</span>
            </div>

            <div className={styles.stepCard}>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="Our CRM Implementation Process"
    />

    <FieldGroup name="steps" label="Process Steps" repeating={true}>
      <TextField name="title" label="Step Title" />
      <TextField name="description" label="Step Description" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "CRM Process Timeline",
  icon: "exchange",
};

export default Component;
