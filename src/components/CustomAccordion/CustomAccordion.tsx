"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import arrowIcon from "@/images/custom-accordion/arrow.svg";
import styles from "./CustomAccordion.module.scss";

type servicesDataType = { id: number; title: string; description: string };

const CustomAccordion: React.FC<{ data: servicesDataType[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    setProgress(0);
    startTimeRef.current = null;

    const animateProgress = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const newProgress = Math.min((elapsed / 5000) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        requestRef.current = requestAnimationFrame(animateProgress);
      } else {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        setProgress(0);
        startTimeRef.current = null;
        requestRef.current = requestAnimationFrame(animateProgress);
      }
    };

    requestRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [data.length, activeIndex]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = null;
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
            onClick={() => handleClick(index)}
          >
            <div className={styles.titleContainer}>
              <p className={styles.number}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
              {item.title}
            </div>

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
              style={{
                width: activeIndex === index ? `${progress}%` : "0%",
                transition: "width 0.3s linear",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
