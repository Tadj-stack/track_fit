import React from "react";
import styles from "../../styles/Workouts.module.css";
import { ProgressCircle } from "./ProgressCircle";
export const ProgressInformation = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.TimeAndRep}>
        <img src="/images/Dumbell.png" alt="image" />
        <span className={module.Repitition}>8 Exercices</span>
        <span className={module.Time}>8 Exercices</span>
      </div>
      <ProgressCircle />
    </div>
  );
};
