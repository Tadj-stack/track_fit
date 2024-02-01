import React from 'react'
import styles from '../../styles/Workouts.module.css';

export const WorkoutSchedule = () => {
  return (
<div className={styles.picCont} >
    <div className={styles.repCont}>
      <img src="/images/biceps_pic.jpg" alt="image" />
        <span className={styles.exerciceNumb}>Exercice One</span>
        <a className={styles.workoutsInfo}>
      <span>10 Reps, </span> <span> 3 Sets</span>
      </a>
    </div>
    <div className={styles.repCont}>
      <img src="/images/back_pic.jpg" alt="image" />
        <span className={styles.exerciceNumb}>Exercice Two</span>
        <a className={styles.workoutsInfo}>
        <span>10 Reps, </span> <span> 3 Sets</span>
      </a>
    </div>
    <div className={styles.repCont}>
      <img src="/images/6pack_pic2.jpg" alt="image" />
        <span className={styles.exerciceNumb}>Exercice Three</span>
        <a className={styles.workoutsInfo}>
        <span>10 Reps, </span> <span> 3 Sets</span>
      </a>
    </div>
    <div className={styles.repCont}>
      <img src="/images/backpress_pic.jpeg" alt="image" />
        <span className={styles.exerciceNumb}>Exercice Four</span>
        <a className={styles.workoutsInfo}>
        <span>10 Reps, </span> <span> 3 Sets</span>
      </a>
    </div>
    <div className={styles.repCont}>
      <img src="/images/chest_pic.jpeg" alt="image" />
        <span className={styles.exerciceNumb}>Exercice Five</span>
        <a className={styles.workoutsInfo}>
        <span>10 Reps, </span> <span> 3 Sets</span>
      </a>
    </div>
    <div className={styles.repCont}>
      <img src="/images/pushUps_pic.jpg" alt="image" />
        <span className={styles.exerciceNumb}>Exercice Six</span>
        <a className={styles.workoutsInfo}>
        <span>10 Reps, </span> <span> 3 Sets</span>
      </a>
    </div>
  </div>
  )
}
