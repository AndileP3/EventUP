// src/theme/components/modules/About.jsx
import {
  ModuleFields,
  TextField,
  FieldGroup,
  ImageField,
} from "@hubspot/cms-components/fields";
import styles from "../../styles/about.module.css";
import founderImageDefault from "../../assets/founder.png";
import rocket from "../../assets/rocket.png";

export function Component({ fieldValues }) {
  const {
    heading,
    story,
    poweredBy,
    founderImage,
    founderName,
    founderTitle,
    founderBio,
    mission,
    values,
  } = fieldValues;

  const valuesArray =
    Array.isArray(values?.values) && values.values.length > 0
      ? values.values
      : [
          { item: "Innovation — We design forward-thinking digital solutions." },
          { item: "Integrity — We build with honesty and transparency." },
          { item: "Excellence — Every project receives premium craftsmanship." },
          { item: "Growth — We empower people and businesses to scale." },
        ];

  return (
    <section className={styles.aboutSection}>
      
      {/* ---------------- HEADER ---------------- */}
         <div className={styles.topHeadingWrapper}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

      {/* ---------------- OUR STORY ---------------- */}
      <div className={styles.ourStoryBlock}>
        <h3>Our Story</h3>
        <p>{story}</p>
      </div>

      {/* ---------------- POWERED BY HUBSPOT ---------------- */}
      <div className={styles.poweredByBlock}>
        <h3>Powered by HubSpot</h3>
        <p>{poweredBy}</p>
      </div>

      {/* ---------------- FOUNDER INFO ---------------- */}
      <div className={styles.founderWrapper}>

        <div className={styles.founderRight}>
          <h3>Meet Our Founder</h3>
          <h4 className={styles.founderName}>{founderName}</h4>
          <p className={styles.founderTitle}>{founderTitle}</p>
          <p className={styles.founderBio}>{founderBio}</p>

          <div className={styles.founderActions}>
            <a href="https://www.linkedin.com/in/mybusinessdeveloper/" className={styles.linkedinBtn}>LinkedIn</a>
            <a href="/contact" className={styles.callBtn}>Book a Call</a>
          </div>
        </div>

          <div className={styles.founderLeft}>
          <img
            src={founderImage?.src || founderImageDefault}
            alt={founderName || "Founder"}
          />
        </div>
      </div>

      {/* ---------------- MISSION ---------------- */}
      <div className={styles.missionSection}>
  <div className={styles.missionLeft}>
    <img
      src={rocket}
      alt="Our Mission"
      className={styles.missionImage}
    />
    <p className={styles.missionText}>
      We are committed to delivering innovative CRM solutions that empower businesses to streamline processes, improve customer relationships, and drive growth.
    </p>
  </div>
  <div className={styles.missionRight}>
    <h3>Our Mission & Commitments</h3>
    <p>
      Our mission is to enable companies to fully leverage Dynamics 365, Power Platform, and Azure technologies by providing tailored CRM and integration solutions. We focus on innovation, seamless adoption, and measurable impact, ensuring each client achieves sustainable growth and operational excellence.
    </p>
  </div>
</div>


      {/* ---------------- CORE VALUES ---------------- */}
      <div className={styles.valuesWrapper}>
        <h3>Our Core Values</h3>
        <div className={styles.valuesList}>
          {valuesArray.map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <p>{v.item}</p>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
}

// ---------------- HUBSPOT FIELDS ----------------

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="About Us" />

    <TextField
      name="story"
      label="Our Story"
      default="Our journey started with a vision to build meaningful digital experiences, Founded in 2024 in Versailles, CRM-SYNERGY is a boutique IT consulting firm dedicated to helping businesses unlock the full potential of their digital ecosystem. With a specialized focus on Dynamics 365 CRM, Azure, and the Power Platform, we deliver tailored solutions spanning CRM, ERP, marketing, sales, customer service, and data-driven projects. Our team of experts combines deep technical knowledge with strategic insight to guide clients through architecture design, AI and data initiatives, audits, and project cadrage."
      multiple
    />

    <TextField
      name="poweredBy"
      label="Powered by HubSpot Text"
      default="We leverage the HubSpot ecosystem to deliver powerful CRM platform to help businesses streamline customer relationships and drive growth. Our expertise ensures that every HubSpot implementation is tailored to the unique needs of each client, maximizing adoption, improving efficiency, and unlocking actionable insights from your data."
      multiple
    />

    <ImageField name="founderImage" label="Founder Image" />

    <TextField name="founderName" label="Founder Name" default="Emmanuel LAIGNELET " />
    
    <TextField
      name="founderTitle"
      label="Founder Title"
      default="Founder & CEO"
    />

    <TextField
      name="founderBio"
      label="Founder Biography"
      default="With over ten years of experience in CRM implementation, Dynamics 365, and business process optimization, Emmanuel has built a reputation for delivering CRM solutions that streamline operations and drive measurable business growth. His deep expertise in Dynamics 365, Power Platform, and Azure integrations enables him to craft bespoke systems that are not only technically robust but also strategically designed to maximize user adoption and ROI. Passionate about helping businesses scale through smarter technology, Emmanuel ensures every CRM project delivers both efficiency and tangible commercial impact.With a passion for automation and digital transformation"
      multiple
    />

    <TextField
      name="mission"
      label="Mission & Commitments"
      default="We aim to design digital experiences that inspire, engage, and empower..."
      multiple
    />

    <FieldGroup name="values" label="Core Values" repeating={true}>
      <TextField name="item" label="Value Item" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "About Page Module",
  icon: "info-circle",
};

export default Component;
