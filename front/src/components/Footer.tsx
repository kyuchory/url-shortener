import styles from "../styles/Footer.module.css";
import logo from "../assets/logo3.gif";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerContentWrapper}>
        <h2>Contact</h2>
        <address>
          이메일: sls789456@naver.com
          <br />
          전화: 010-5119-6910
        </address>
      </section>
    </footer>
  );
};

export default Footer;
