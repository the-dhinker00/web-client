import { APP_NAME } from "@/utils/app-info";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>{APP_NAME}</h1>
      Development in progress.
    </div>
  );
}
