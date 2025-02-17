"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import arrowIcon from "@/images/custom-accordion/arrow.svg";
import styles from "./CustomAccordion.module.scss";

type servicesDataType = { id: number; title: string; description: string };

const CustomAccordion: React.FC<{ data: servicesDataType[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [data.length]);

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={
            activeIndex === index
              ? `${styles.open} ${styles.accordionItem}`
              : styles.accordionItem
          }
        >
          <button
            className={styles.accordionTitle}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
            <div
              className={
                activeIndex === index
                  ? `${styles.open} ${styles.arrowContainer}`
                  : styles.arrowContainer
              }
            >
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                className={
                  activeIndex === index
                    ? `${styles.open} ${styles.arrowIcon}`
                    : styles.arrowIcon
                }
              />
            </div>
          </button>

          <div
            className={
              activeIndex === index
                ? `${styles.accordionContent} ${styles.active}`
                : styles.accordionContent
            }
          >
            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{ width: activeIndex === index ? `${progress}%` : "0%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
