import styles from "./ContactSection.module.scss";

const ContactSection: React.FC = () => {
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

            <form className={styles.form}>
              <input className={styles.input} type="text" placeholder="Name" />
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
              <textarea
                className={styles.textarea}
                placeholder="Message"
              ></textarea>
              <button className={styles.submitBtn}>Get in Touch</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
