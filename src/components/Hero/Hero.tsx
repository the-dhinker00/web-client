import { useEffect, useRef } from "react";
import HeroGradient from "@/components/HeroGradient/HeroGradient";
import styles from "./Hero.module.scss";

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
        document.title = "";
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
      <HeroGradient theme="dark" />
      <div className={styles.glassBackground}></div>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Think Big, <br />
          Think Dhinker!
        </h1>
        <p className={styles.heroDescription}>
          Empowering companies & professionals to leverage AI for growth and
          efficiency.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
