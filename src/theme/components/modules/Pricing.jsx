// src/theme/components/modules/Pricing.jsx
import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/pricing.module.css";

export function Component({ fieldValues }) {
  const { heading, plans } = fieldValues;

  const defaultPlans = [
    {
      name: "Foundation",
      price: "$49/mo",
      features: [
        "Basic CRM setup",
        "1 user license",
        "Email support",
        "Access to basic dashboards"
      ],
      recommended: false
    },
    {
      name: "Standard",
      price: "$99/mo",
      features: [
        "Full CRM implementation",
        "Up to 5 users",
        "Priority support",
        "Custom dashboards & reports"
      ],
      recommended: true
    },
    {
      name: "Pro",
      price: "$199/mo",
      features: [
        "Advanced CRM & Power Platform integration",
        "Unlimited users",
        "Dedicated account manager",
        "Advanced analytics & automation"
      ],
      recommended: false
    },
  ];

  const plansArray =
    Array.isArray(plans?.plans) && plans.plans.length > 0
      ? plans.plans
      : defaultPlans;

  return (
    <section className={styles.pricingSection}>
      <div className={styles.topHeadingWrapper}>
        <h2 className={styles.heading}>{heading || "Our Pricing Plans"}</h2>
      </div>

      <div className={styles.cardsContainer}>
        {plansArray.map((plan, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}
          >
            {plan.recommended && <div className={styles.badge}>Recommended</div>}
            <h3 className={styles.planName}>{plan.planname}</h3>
            <p className={styles.planPrice}>{plan.price}</p>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="/contact" className={styles.ctaBtn}>Choose Plan</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// MODULE FIELDS
export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Page Heading" default="Our Pricing Plans" />

    <FieldGroup name="plans" label="Pricing Plans" repeating={true}>
      <TextField name="planname" label="Plan Name" />
      <TextField name="price" label="Plan Price" />
      <FieldGroup name="features" label="Features" repeating={true}>
        <TextField name="feature" label="Feature" />
      </FieldGroup>
      <TextField name="recommended" label="Recommended (true/false)" default="false" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Pricing Page Module",
  icon: "dollar-sign",
};

export default Component;
