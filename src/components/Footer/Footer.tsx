import Image from "next/image";
import linkedInIcon from "@/images/footer/linkedin.svg";
import instagramIcon from "@/images/footer/instagram.svg";
import xIcon from "@/images/footer/x.svg";
import rightArrow from "@/images/footer/right-arrow.svg";
import styles from "./Footer.module.scss";
import Link from "next/link";

const socialsIcons = [
  {
    icon: linkedInIcon,
    link: "https://www.linkedin.com/",
    alt: "Linkedin",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/",
    alt: "Instagram",
  },
  {
    icon: xIcon,
    link: "https://twitter.com/",
    alt: "X",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.appName}>
          DHINK<span className={styles.highlight}>ER</span>.
        </div>

        <div className={styles.topContainer}>
          <div className={styles.contactContainer}>
            <p className={styles.emailTItle}>
              LET&apos;S INNOVATE
              <br /> TOGETHER
            </p>
            <div className={styles.emailInputContainer}>
              <input
                className={styles.emailInput}
                type="email"
                placeholder="Enter your email..."
              />
              <Image
                className={styles.sendBtn}
                src={rightArrow}
                alt="Right Arrow"
              />
            </div>
          </div>

          <div className={styles.contactInfo}>
            <p className={styles.phone}>Phone: +1 123 456 7890</p>
            <p className={styles.email}>Email: 9f7lA@example.com</p>
          </div>
        </div>

        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>© 2025 The Dhinker. All rights reserved.</p>

          <div className={styles.socialsContainer}>
            {socialsIcons.map((item) => (
              <Link
                className={styles.socialItem}
                key={item.alt}
                href={item.link}
              >
                <Image
                  className={styles.socialIcon}
                  src={item.icon}
                  alt={item.alt}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
