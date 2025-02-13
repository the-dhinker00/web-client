"use client";

import Hero from "@/components/Hero/Hero";
import ContactSection from "@/components/ContactSection/ContactSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <ContactSection />
    </div>
  );
}
