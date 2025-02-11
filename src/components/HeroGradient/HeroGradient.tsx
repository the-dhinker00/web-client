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
        "linear-gradient(135deg, rgba(43, 204, 113, 0.6), rgba(43, 204, 113, 0.3), rgba(43, 204, 113, 0.1))", // #2bcc71 - Stronger
    },
    {
      color:
        "linear-gradient(135deg, rgba(43, 204, 113, 0.5), rgba(43, 204, 113, 0.25), rgba(43, 204, 113, 0.1))", // #2bcc71 - Medium
    },
    {
      color:
        "linear-gradient(135deg, rgba(145, 39, 243, 0.5), rgba(145, 39, 243, 0.25), rgba(145, 39, 243, 0.1))", // #9127f3 - Purple
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