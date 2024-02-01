import React from "react";
import styles from "../../styles/Workouts.module.css"; // assuming you have a Workouts CSS module
import { ProgressInformation } from "./ProgressInformation";
import Workouts from "../Workouts";
import { WorkoutSchedule } from "./WorkoutSchedule";
export const BodyWorkouts = () => {
  const progress = 50;
  return (
    // <div className={styles.workoutsPageContainer}>
    <div className={styles.workoutContainer}>
      <ProgressInformation />
      <WorkoutSchedule />
    </div>
  );
};
