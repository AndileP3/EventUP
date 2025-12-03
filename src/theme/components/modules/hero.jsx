// src/theme/components/modules/Hero.jsx
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import QRButtonIsland from "../islands/QRButtonIsland?island";
import styles from "../../styles/home.module.css";

export function Component({ fieldValues }) {
  const { title, subtitle, backgroundImage, defaultUrl } = fieldValues;

  return (
    <section
      className={styles.heroLanding}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlayLanding}>
        <div className={styles.contentLanding}>
          <h1 className={styles.titleLanding}>{title}</h1>
          <p className={styles.subtitleLanding}>{subtitle}</p>

          <Island module={QRButtonIsland} fieldValues={{ defaultUrl }} />
        </div>
      </div>
    </section>
  );
}

// Module fields
export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Hero Title"
      default="Generate Your QR Code Instantly"
    />
    <TextField
      name="subtitle"
      label="Hero Subtitle"
      default="Enter any URL and get a QR code you can use anywhere."
    />
    <ImageField
      name="backgroundImage"
      label="Background Image"
      default={{
        src: "https://images.unsplash.com/photo-1515165562835-c4c36c9f5237",
        alt: "QR Code Landing Background",
      }}
    />
    <TextField
      name="defaultUrl"
      label="Default QR Code URL"
      default=""
    />
  </ModuleFields>
);

export const meta = {
  label: "QR Code Landing Page Hero",
  icon: "image-text",
};

export default Component;
