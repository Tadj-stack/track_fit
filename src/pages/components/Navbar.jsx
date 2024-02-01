// src/Navbar.js
import React from "react";
import styles from "../../styles/Navbar.module.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <img src="/images/logo.png" alt="Logo" />
          <span>TRACK </span> <span> FIT</span>
        </div>
        <div className={styles.right}>
          {/* Placeholder for the icons */}
          <div className={styles.ic}>
            <IoIosNotifications size={30} />
          </div>
          <div className={styles.ic}>
            <RiLogoutCircleRLine size={30} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
