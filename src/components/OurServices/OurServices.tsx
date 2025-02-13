import styles from "./OurServices.module.scss";

const OurServices: React.FC = () => {
  return (
    <div className={styles.ourServices}>
      <div className={styles.sectionContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title1}>Explore what we</h2>
          <h2 className={styles.title2}>offer you.</h2>
        </div>

        <div className={styles.subContainer}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
