import { companyServicesData } from "@/data/servicesData";
import CustomAccordion from "@/components/CustomAccordion/CustomAccordion";
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
          <div className={styles.subTitle}>For Companies</div>

          <CustomAccordion data={companyServicesData} />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
