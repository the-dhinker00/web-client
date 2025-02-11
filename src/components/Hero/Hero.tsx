// Hero.js
import styles from "./Hero.module.scss";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const updateMetadata = () => {
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute(
            "content",
            "Dhinker helps businesses and professionals harness AI’s power with consulting, automation, and training. Get started today!”"
          );
        document
          .querySelector('meta[name="keywords"]')
          ?.setAttribute(
            "content",
            "AI consultancy and enablement, AI consulting services, AI adoption, AI-powered business solutions"
          );
      };

      updateMetadata();

      return () => {
        document.title = "Your Default Title";
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute("content", "Your default description");
        document
          .querySelector('meta[name="keywords"]')
          ?.setAttribute("content", "");
      };
    }
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Think Big, <br />
          Think Dhinker!
        </h1>
        <p className={styles.heroDescription}>
          Empowering Companies & Professionals to Leverage AI for Growth and
          Efficiency.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
