// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaDumbbell, FaCalendar, FaBullseye } from 'react-icons/fa';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
      <div>
        <h3>Full Name</h3>
      </div>
      <div className={styles.age}>Age 28 years</div>
      <hr />
      <div className={styles.details}>
        <div>
          <div className={styles.detailsLabel}>HEIGHT</div>
          <div className={styles.valeur}>181 cm</div>
        </div>
        <div className={styles.verticalLine}></div>
        <div>
          <div className={styles.detailsLabel}>WEIGHT</div>
          <div className={styles.valeur}>78 kg</div>
        </div>
      </div>
      <hr />
      <div className={styles.tabs}>
        <div>
          <FaHome />
          <a href=''>Home</a>
        </div>
        <div>
          <FaDumbbell />
          <a href=''>My Workout</a>
        </div>
        <div>
          <FaCalendar />
          <a href=''>Schedule</a>
        </div>
        <div>
          <FaBullseye />
          <a href=''>My goals</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
