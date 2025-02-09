import Image from "next/image";
import appLogo from "@/images/logos/app-logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    link: "/",
    hidden: true,
  },
  {
    name: "Services",
    link: "/services",
    hidden: true,
  },
  {
    name: "Courses",
    link: "/courses",
    hidden: true,
  },
  {
    name: "Case Studies",
    link: "/case-studies",
    hidden: true,
  },
  {
    name: "Blogs",
    link: "/blogs",
    hidden: true,
  },
  {
    name: "Contact",
    link: "/contact",
    hidden: true,
  },
];

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Image className={styles.appLogo} src={appLogo} alt="App Logo" />

        <div className={styles.navContainer}>
          {navItems.map(
            (item) =>
              !item.hidden && (
                <Link
                  key={item.name}
                  href={item.link}
                  className={styles.navItem}
                >
                  {item.name}
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
