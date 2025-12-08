// src/theme/components/modules/Contact.jsx
import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import styles from "../../styles/contact.module.css";

export function Component({ fieldValues }) {
  const { heading, message, location, phone, email, hours, formHeading } = fieldValues;

  return (
    <section className={styles.contactSection}>
      <div className={styles.topHeadingWrapper}>
        <h2 className={styles.heading}>{heading || "Contact Us"}</h2>
      </div>

 <div className={styles.contactContent}>
  {/* Left container: message + details */}
  <div className={styles.detailsContainer}>
    {message && <p className={styles.message}>{message}</p>}
    <div className={styles.info}>
      {location && <p><strong>Location:</strong> {location}</p>}
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      {email && <p><strong>Email:</strong> {email}</p>}
      {hours && <p><strong>Hours:</strong> {hours}</p>}
    </div>
  </div>

  {/* Right container: form */}
  <div className={styles.formContainer}>
    <h3 className={styles.formHeading}>{formHeading || "Send us a message"}</h3>
    <form className={styles.contactForm}>
      <div className={styles.inputGroup}>
        <input type="text" name="name" required placeholder=" " />
        <label>Name</label>
      </div>
      <div className={styles.inputGroup}>
        <input type="email" name="email" required placeholder=" " />
        <label>Email</label>
      </div>
      <div className={styles.inputGroup}>
        <input type="text" name="subject" required placeholder=" " />
        <label>Subject</label>
      </div>
      <div className={styles.inputGroup}>
        <textarea name="company" required placeholder=" "></textarea>
        <label>Company Name</label>
      </div>
      <div className={styles.inputGroup}>
        <textarea name="message" rows="1" required placeholder=" "></textarea>
        <label>Message</label>
      </div>
      <button type="submit" className={styles.submitBtn}>Send Message</button>
    </form>
  </div>
</div>

    </section>
  );
}

// CMS Fields
export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Page Heading" default="Contact Us" />
    <TextField name="message" label="Small Message" default="We’d love to hear from you! Reach out with any questions or inquiries." />
    <TextField name="location" label="Location" default="Versailles, Ile-de-France" />
    <TextField name="phone" label="Phone" default="+33 1 23 45 67 89" />
    <TextField name="email" label="Email" default="hello@integri-cloud.com" />
    <TextField name="hours" label="Hours" default="Mon-Fri 9am - 6pm" />
    <TextField name="formHeading" label="Form Heading" default="Send us a message" />
  </ModuleFields>
);

export const meta = { label: "Contact Page Module", icon: "envelope" };
export default Component;
