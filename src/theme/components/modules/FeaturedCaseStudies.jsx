import { ModuleFields, TextField, FieldGroup, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/featuredCaseStudies.module.css";

export function Component({ fieldValues }) {
  const { heading, caseStudies } = fieldValues;

  const caseStudiesArray =
    Array.isArray(caseStudies?.caseStudies) && caseStudies.caseStudies.length > 0
      ? caseStudies.caseStudies
      : [
          {
            title: "Enhanced Customer Relationships",
            description:
              "Gain a 360-degree view of your customer interactions, improving customer satisfaction and retention.",
            image: {
              src: "https://www.orega.com/hubfs/bespoke-design-coral.svg",
              alt: "Case Study 1",
            },
          },
          {
            title: "Increased Sales & Revenue",
            description:
              "Leverage advanced sales automation tools to streamline your sales processes, track leads, and close deals more efficiently.",
            image: {
              src: "https://www.orega.com/hubfs/meeting-room-orange.svg",
              alt: "Case Study 2",
            },
          },
          {
            title: "Interdepartmental Collaboration",
            description:
              "Facilitate communication and collaboration across teams with shared access to customer data in real-time.",
            image: {
              src: "https://www.orega.com/hubfs/collaboration-spaces-coral-2.svg",
              alt: "Case Study 3",
            },
          },
        ];

  return (
    <section className={styles.caseStudiesSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.cardsGrid}>
        {caseStudiesArray.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image?.src} alt={item.image?.alt} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="The Benefits Of A CRM System" />
    <FieldGroup name="caseStudies" label="Case Studies" repeating={true}>
      <TextField name="title" label="Title" />
      <TextField name="description" label="Description" />
      <ImageField name="image" label="Image" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = { label: "The Benefits Of A CRM System", icon: "images" };
export default Component;
