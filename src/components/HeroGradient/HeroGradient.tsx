import { FC } from "react";
import classNames from "classnames";
import styles from "./HeroGradient.module.scss";
interface GradientsProps {
  theme?: "light" | "dark";
}

const HeroGradient: FC<GradientsProps> = ({ theme = "light" }) => {
  const gradients = [
    {
      color:
        "linear-gradient(135deg, rgba(0, 78, 212, 0.6), rgba(0, 78, 212, 0.3), rgba(0, 78, 212, 0.1))",
    },
    {
      color:
        "linear-gradient(135deg, rgba(0, 78, 212, 0.5), rgba(0, 78, 212, 0.25), rgba(0, 78, 212, 0.1))",
    },
    {
      color:
        "linear-gradient(135deg, rgba(0, 78, 212, 0.4), rgba(0, 78, 212, 0.2), rgba(0, 78, 212, 0.1))",
    },
  ];
  return (
    <div
      className={classNames(styles.gradientWrapper, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {gradients.map((gradient, index) => (
        <div
          key={index}
          className={styles.gradient}
          style={{ background: gradient.color }}
        />
      ))}
    </div>
  );
};
export default HeroGradient;
