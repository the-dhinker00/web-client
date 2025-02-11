"use client";

import Hero from "@/components/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
