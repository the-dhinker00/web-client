"use client";

import Hero from "@/components/Hero/Hero";
import ContactSection from "@/components/ContactSection/ContactSection";
import OurServices from "@/components/OurServices/OurServices";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <OurServices />
      <ContactSection />
    </div>
  );
}
