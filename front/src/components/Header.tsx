import styles from "../styles/Header.module.css";
import logo from "../assets/logo3.gif";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <a href="/소개" className={styles.menuItem}>
          Introduction
        </a>
      </nav>
    </header>
  );
};

export default Header;
