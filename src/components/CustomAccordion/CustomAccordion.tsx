"use client";

import { useState } from "react";
import Image from "next/image";
import arrowIcon from "@/images/custom-accordion/arrow.svg";
import styles from "./CustomAccordion.module.scss";

type servicesDataType = { id: number; title: string; description: string };

const CustomAccordion: React.FC<{
  data: servicesDataType[];
}> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            onClick={() => toggleAccordion(index)}
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
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
