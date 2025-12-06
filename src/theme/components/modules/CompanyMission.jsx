// src/theme/components/modules/CompanyMission.jsx
import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/companyMission.module.css";

export function Component({ fieldValues }) {
  const { heading, missions } = fieldValues;

  const missionsArray = Array.isArray(missions) && missions.length > 0 ? missions : [
    { text: "Deliver innovative CRM and cloud solutions that empower businesses." },
    { text: "Maintain trust and transparency with all our clients." },
    { text: "Drive adoption and maximize ROI through expert guidance." },
  ];

  return (
    <section className={styles.missionSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <ul className={styles.missionList}>
        {missionsArray.map((item, index) => (
          <li key={index} className={styles.missionItem}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="Our Mission & Commitments" />
    <FieldGroup name="missions" label="Mission Statements" repeating={true}>
      <TextField name="text" label="Mission Text" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = { label: "Company Mission & Commitments", icon: "bullseye" };
export default Component;
