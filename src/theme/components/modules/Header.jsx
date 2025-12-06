import { ModuleFields, TextField, ImageField, FieldGroup } from "@hubspot/cms-components/fields";
import { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import fallbackLogo from "../../assets/logo.png";

export function Component({ fieldValues = {} }) {
  const { logoImage, logoText = "IntegriCloud" } = fieldValues;

  const defaultLinks = [
    { text: "Services", href: "#services", isButton: "false" },
    { text: "Case Studies", href: "#case-studies", isButton: "false" },
    { text: "About", href: "#about", isButton: "false" },
    { text: "Contact", href: "#contact", isButton: "true" },
  ];

  const safeNavLinks = Array.isArray(fieldValues.navLinks) && fieldValues.navLinks.length > 0
    ? fieldValues.navLinks
    : defaultLinks;

  const [scrolled, setScrolled] = useState(false);
  const logoSrc = logoImage?.src || fallbackLogo;

  useEffect(() => {
    const hero = document.querySelector(".heroSection");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting); // header is scrolled when hero is out of view
      },
      { threshold: 0.1 } // trigger when 10% of hero is visible
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <img src={logoSrc} alt="Logo" className={styles.logoImg} />

      <nav className={styles.nav}>
        {safeNavLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href || "#"}
            className={link.isButton === "true" ? styles.contactBtn : ""}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="logoImage" label="Logo Image" />
    <TextField name="logoText" label="Fallback Logo Text" default="IntegriCloud" />
    <FieldGroup name="navLinks" label="Navigation Links" repeating={true}>
      <TextField name="text" label="Link Text" />
      <TextField name="href" label="Link URL" default="#" />
      <TextField name="isButton" label="Is Button?" default="false" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = { label: "Header", icon: "navigation" };
export default Component;
