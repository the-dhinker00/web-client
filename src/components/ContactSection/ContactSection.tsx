import React, { useState } from "react";
import styles from "./ContactSection.module.scss";

interface FormField {
  type: "text" | "email" | "textarea";
  placeholder: string;
  name: string;
  value: string;
}

interface FormData {
  fields: FormField[];
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fields: [
      { type: "text", placeholder: "Name", name: "name", value: "" },
      { type: "email", placeholder: "Email", name: "email", value: "" },
      { type: "textarea", placeholder: "Message", name: "message", value: "" },
    ],
  });

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const updatedFields = [...prevFormData.fields];
      updatedFields[index] = { ...updatedFields[index], value };
      return { ...prevFormData, fields: updatedFields };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formattedData = formData.fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {} as Record<string, string>);

    console.log("Form Data:", formattedData);
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title1}>Get in Touch</h2>
          <h2 className={styles.title2}>with us.</h2>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.contactCardContainer}>
            <div className={styles.contactCard}>
              <div className={styles.contactCardTitle}>
                <span className={styles.decoration}></span>Address
              </div>
              <div className={styles.contactCardValue}>
                Lorum Ipsum Dolor Sit Amet, <br />
                1234 Street, City, State, Country
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactCardTitle}>Contacts</div>
              <div className={styles.contactCardValue}>
                +12 345 67890 <br />
                lorum@ipsum.com
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Inquiries</h3>

            <form className={styles.form} onSubmit={handleSubmit}>
              {formData.fields.map((field, index) => (
                <React.Fragment key={index}>
                  {field.type === "textarea" ? (
                    <textarea
                      className={styles.textarea}
                      placeholder={field.placeholder}
                      name={field.name}
                      value={field.value}
                      onChange={(event) => handleChange(index, event)}
                      required
                    />
                  ) : (
                    <input
                      className={styles.input}
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.name}
                      value={field.value}
                      onChange={(event) => handleChange(index, event)}
                      required
                    />
                  )}
                </React.Fragment>
              ))}

              <button className={styles.submitBtn} type="submit">
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
