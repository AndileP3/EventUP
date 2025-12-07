import { ModuleFields, TextField, ImageField, UrlField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/footer.module.css";
import defaultLogo from "../../assets/logo2.png"; // <- default logo in assets

export function Component({ fieldValues }) {
  const { logo, companyName, address, email, phone, quickLinks, socialLinks, copyright } = fieldValues;
  
  // Use the same pattern as header: logo?.src || fallbackLogo
  const logoSrc = logo?.src || defaultLogo;
  
  const quickLinksArray =
    Array.isArray(quickLinks) && quickLinks.length > 0
      ? quickLinks
      : [
          { text: "Home", url: "/" },
          { text: "Services", url: "/services" },
          { text: "About", url: "/about" },
          { text: "Contact", url: "/contact" },
        ];

  const socialLinksArray =
    Array.isArray(socialLinks) && socialLinks.length > 0
      ? socialLinks
      : [
          // { name: "LinkedIn", icon: "/assets/linkedin.png", url: "https://linkedin.com" },
        ];

  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <img
            src={logoSrc}
            alt={companyName || "Logo"}
            className={styles.logo}
          />
        </div>

        {/* Company Info */}
        <div className={styles.infoWrapper}>
          {companyName && <h3 className={styles.companyName}>{companyName}</h3>}
          {address && <p>{address}</p>}
          {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}
          {phone && <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>}
        </div>

        {/* Quick Links */}
        {quickLinksArray && quickLinksArray.length > 0 && (
          <div className={styles.linksWrapper}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinksArray.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Social Links */}
        {socialLinksArray && socialLinksArray.length > 0 && (
          <div className={styles.socialWrapper}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              {socialLinksArray.map((social, index) => {
                // Handle social icon images the same way
                const iconSrc = social.icon?.src || social.icon;
                return (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <img src={iconSrc} alt={social.name || social.platformName} />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {copyright && (
        <div className={styles.copyright}>
          <p>{copyright}</p>
        </div>
      )}
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    {/* Remove the default prop from ImageField */}
    <ImageField name="logo" label="Company Logo" />
    <TextField name="companyName" label="Company Name" default="Your Company" />
    <TextField name="address" label="Address" default="123 Business St, City, Country" />
    <TextField name="email" label="Email" default="info@company.com" />
    <TextField name="phone" label="Phone" default="+27 123 456 789" />

    <FieldGroup name="quickLinks" label="Quick Links" repeating={true}>
      <TextField name="text" label="Link Text" />
      <UrlField name="url" label="Link URL" />
    </FieldGroup>

    <FieldGroup name="socialLinks" label="Social Links" repeating={true}>
      <TextField name="platformName" label="Social Platform Name" />
      {/* Remove the default prop from ImageField */}
      <ImageField name="icon" label="Social Icon" />
      <UrlField name="url" label="Social URL" />
    </FieldGroup>

    <TextField name="copyright" label="Copyright Text" default="© 2025 CRM-SYNERGY. All rights reserved." />
  </ModuleFields>
);

export const meta = {
  label: "Footer Section",
  icon: "footer",
};

export default Component;