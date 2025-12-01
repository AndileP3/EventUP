import React from "react";
import styles from "../../styles/home.module.css";
import { 
  ModuleFields, 
  TextField, 
  ImageField, 
  DateField 
} from "@hubspot/cms-components/fields";

// What renders on the page
export function Component({ fieldValues }) {
  const { 
    title,
    subtitle,
    backgroundImage,
    upcomingEventTitle,
    upcomingEventDate,
    ctaText,
    ctaLink
  } = fieldValues;

  return (
    <section 
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.eventBox}>
            <h3 className={styles.eventHeading}>Upcoming Event</h3>
            <p className={styles.eventTitle}>{upcomingEventTitle}</p>
            <p className={styles.eventDate}>{upcomingEventDate}</p>
          </div>

          <a href={ctaLink} className={styles.cta}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}

// Module fields (visible in HubSpot editor)
export const fields = (
  <ModuleFields>

    <TextField 
      name="title"
      label="Hero Title"
      default="Discover and Share Amazing Events"
    />

    <TextField 
      name="subtitle"
      label="Hero Subtitle"
      default="Find upcoming events – concerts, workshops, meetups, and more."
    />

    <ImageField
      name="backgroundImage"
      label="Background Image"
      default="https://images.unsplash.com/photo-1515165562835-c4c36c9f5237"
    />

    <TextField
      name="upcomingEventTitle"
      label="Upcoming Event Title"
      default="Tech Innovators Summit 2025"
    />

    <DateField
      name="upcomingEventDate"
      label="Upcoming Event Date"
    />

    <TextField
      name="ctaText"
      label="CTA Text"
      default="Explore Events"
    />

    <TextField
      name="ctaLink"
      label="CTA Link"
      default="/events"
    />

  </ModuleFields>
);

// Module metadata
export const meta = {
  label: "Homepage Hero",
  icon: "image-text"
};
