import React from "react";
import styles from "../../styles/header.module.css";
import {
  ModuleFields,
  TextField,
  ImageField,
} from "@hubspot/cms-components/fields";

// What renders on the page
export function Component({ fieldValues }) {
  const {
    logo,
    homeText,
    aboutText,
    servicesText,
    blogText,
    workText,
    contactText,
    contactLink
  } = fieldValues;

  return (
    <header className={styles.header}>
      <div className={styles.container}>

     

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="/" className={styles.link}>{homeText}</a>
          <a href="/about" className={styles.link}>{aboutText}</a>
          <a href="/services" className={styles.link}>{servicesText}</a>
          
        </nav>

           {/* Logo */}
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        {/* Contact button - different styled */}
        <nav className={styles.nav}>
        <a href={contactLink} className={styles.link}>
          {contactText}
        </a>
        <a href="/blog" className={styles.link}>{workText}</a>
         <a href="/blog" className={styles.link}>{blogText}</a>

         </nav>
      </div>
    </header>
  );
}

// Module fields for HubSpot Editor
export const fields = (
  <ModuleFields>

    <ImageField 
      name="logo"
      label="Header Logo"
      default="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    />

    <TextField name="homeText" label="Home Text" default="Home" />
    <TextField name="aboutText" label="About Text" default="Events" />
    <TextField name="servicesText" label="Services Text" default="Services" />
    <TextField name="blogText" label="Blog Text" default="Blog" />
    <TextField name="workText" label="Work Text" default="Work" />

    <TextField 
      name="contactText" 
      label="Contact Button Text" 
      default="Contact"
    />

    <TextField 
      name="contactLink" 
      label="Contact Button Link"
      default="/contact"
    />
  </ModuleFields>
);

// Module metadata
export const meta = {
  label: "Website Header",
  icon: "menu",
};
