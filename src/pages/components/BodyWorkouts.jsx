import React from 'react'
import styles from '../../styles/Workouts.module.css'; // assuming you have a Workouts CSS module
export const BodyWorkouts = () => {

  const progress = 50;
  return (
  <div className= {styles.workoutsPageContainer}>
   
        <div className={styles.workoutContainer}>
        
        <div className={styles.progress}>
         
          <svg viewBox="0 0 100 100" width="50" height="50"  className={styles.progressStyle}>
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#ccc"
              strokeWidth="10"
              fill="rgba(8, 14, 20, 1)"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="blue"
              strokeWidth="10"
              fill="transparent"
              transform="rotate(-90 50 50)"
              strokeDasharray="251.2" // Circumference of a circle with radius 40
              strokeDashoffset={(100 - progress) / 100 * 251.2} // Adjust this value to set the progress (e.g., 50%)
            />
               <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fill="#fff"
              fontSize="33"
            > 5/10</text>
          </svg>
          
        </div>
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
  </div>
  </div>


  )
}
