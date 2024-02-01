
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import { FiBell, FiLogOut } from 'react-icons/fi';  


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" className={styles.logo_img} />
          <h3>TrackFit</h3>
        </div>
      </div>
      <div className={styles.right}>
        <Link href="/notifications" className={styles.icon}>
            <FiBell />
        </Link>
        <Link href="/logout" className={styles.icon}>
            <FiLogOut />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
