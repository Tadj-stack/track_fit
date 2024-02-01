import React from "react";
import styles from "../../styles/Workouts.module.css";

export const ProgressCircle = () => {
  const progress = 50;
  return (
    <div>
      <svg
        viewBox="0 0 100 100"
        width="200"
        height="200"
        className={styles.ProgressCircle}
      >
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
          strokeDashoffset={((100 - progress) / 100) * 251.2} // Adjust this value to set the progress (e.g., 50%)
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fill="#fff"
          fontSize="33"
        >
          {" "}
          5/10
        </text>
      </svg>
    </div>
  );
};
