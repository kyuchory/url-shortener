import { useState } from "react";
import Header from "../components/Header";
import UrlDisplay from "../components/UrlDisplay";
import UrlInput from "../components/UrlInput";
import styles from "../styles/Homepage.module.css";
import bgImg from "../assets/bgImg.png";
import IntroductionList from "../components/IntroductionList";

const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <section className={styles.urlSearchSectionContainer}>
        <div className={styles.urlContentWrapper}>
          <div className={styles.textWapper}>
            <h1>Shorten your URL for free</h1>
            <p>Shorten long URLs</p>
            <p>and share them.</p>
          </div>
          <UrlInput />
          <UrlDisplay />
        </div>
      </section>
      <section className={styles.urlIntroductionContainer}>
        <IntroductionList />
      </section>
    </div>
  );
};

export default Homepage;
