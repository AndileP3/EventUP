import { ModuleFields, TextField, FieldGroup, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/featuredCaseStudies.module.css";

export function Component({ fieldValues }) {
  const { heading, caseStudies } = fieldValues;

  const caseStudiesArray = Array.isArray(caseStudies) && caseStudies.length > 0 ? caseStudies : [
    { title: "Dynamics Adoption Boost", description: "Achieved 90% adoption within 3 months.", image: { src: "https://via.placeholder.com/300x200", alt: "Case Study 1" } },
    { title: "ERP Integration Success", description: "Seamless Azure & ERP integration.", image: { src: "https://via.placeholder.com/300x200", alt: "Case Study 2" } },
    { title: "ROI Improvement", description: "ROI increased by 35% post-implementation.", image: { src: "https://via.placeholder.com/300x200", alt: "Case Study 3" } },
  ];

  return (
    <section className={styles.caseStudiesSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.sliderContainer}>
        {caseStudiesArray.map((item, index) => (
          <div key={index} className={styles.slide}>
            <img src={item.image?.src} alt={item.image?.alt} className={styles.slideImage} />
            <h3 className={styles.slideTitle}>{item.title}</h3>
            <p className={styles.slideDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="Featured Case Studies" />
    <FieldGroup name="caseStudies" label="Case Studies" repeating={true}>
      <TextField name="title" label="Title" />
      <TextField name="description" label="Description" />
      <ImageField name="image" label="Image" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = { label: "Featured Case Studies Slider", icon: "images" };
export default Component;
