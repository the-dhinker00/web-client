import Image from "next/image";
import appLogo from "@/images/logos/app-logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Case Studies",
    link: "/case-studies",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src={appLogo} alt="App Logo" />

        <div className={styles.navContainer}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
