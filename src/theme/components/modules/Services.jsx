// src/theme/components/modules/Services.jsx
import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/services.module.css";

export function Component({ fieldValues }) {
  const { heading, serviceGroups } = fieldValues;

  // Default structure if user doesn’t populate CMS fields
  const defaultServices = [
    {
      groupTitle: "Dynamics 365 CRM Services",
      items: [
        { title: "CRM Implementation", description: "End-to-end CRM deployment tailored to business needs." },
        { title: "Customization & Extensions", description: "Custom entities, workflows, plugins, and UI enhancements." },
        { title: "CRM Health Check", description: "Full system audit + performance assessment." },
        { title: "User Adoption Programs", description: "Training, onboarding, and internal CRM enablement." },
      ],
    },
    {
      groupTitle: "Azure Integration & Architecture",
      items: [
        { title: "API Integration", description: "Secure, scalable API integrations leveraging Azure services." },
        { title: "Data Pipelines", description: "ETL workflows using Azure Data Factory & Synapse." },
        { title: "Azure DevOps Processes", description: "CI/CD automation & pipeline optimisation." },
        { title: "Cloud Architecture Audits", description: "Assessing cloud security, performance, and scalability." },
      ],
    },
    {
      groupTitle: "Power Platform",
      items: [
        { title: "Power Apps Development", description: "Custom low-code business apps." },
        { title: "Power Automate Workflows", description: "Workflow automation + process optimisation." },
        { title: "Power BI Dashboards", description: "Insights dashboards & reporting analytics." },
      ],
    },
    {
      groupTitle: "ERP + CRM Integration",
      items: [
        { title: "Dynamics Finance & Ops", description: "Unified D365 FO + CRM architecture." },
        { title: "SAP ↔ Dynamics", description: "Bi-directional enterprise-grade integration." },
        { title: "Custom Middleware Connectors", description: "Connect legacy systems with modern platforms." },
      ],
    },
    {
      groupTitle: "Digital Transformation Consulting",
      items: [
        { title: "Audit", description: "Full review of digital maturity & current processes." },
        { title: "Cadrage", description: "Project scoping, feasibility, and alignment." },
        { title: "Project Strategy", description: "Enterprise-level delivery planning & roadmap creation." },
        { title: "Change Management", description: "Stakeholder enablement, training, and adoption." },
      ],
    },
  ];

  const groups =
    Array.isArray(serviceGroups?.serviceGroups) && serviceGroups.serviceGroups.length > 0
      ? serviceGroups.serviceGroups
      : defaultServices;

  return (
    <section className={styles.servicesSection}>
      <div className={styles.topHeadingWrapper}>
    <h2 className={styles.heading}>{heading}</h2>
  </div>

      <div className={styles.serviceGroupsWrapper}>
        {groups.map((group, idx) => (
          <div key={idx} className={styles.serviceGroup}>
            <h3 className={styles.groupTitle}>{group.groupTitle}</h3>

            <div className={styles.cardsContainer}>
              {(group?.items?.items || group.items || []).map((item, i) => (
                <div key={i} className={styles.card}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardText}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// MODULE FIELDS
export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Page Heading" default="Our Services" />

    <FieldGroup name="serviceGroups" label="Service Groups" repeating={true}>
      <TextField name="groupTitle" label="Service Group Title" />

      <FieldGroup name="items" label="Service Items" repeating={true}>
        <TextField name="title" label="Service Title" />
        <TextField name="description" label="Service Description" />
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Services Page Module",
  icon: "layers",
};

export default Component;
