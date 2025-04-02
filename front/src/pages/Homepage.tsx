import { useState } from "react";
import Header from "../components/Header";
import UrlDisplay from "../components/UrlDisplay";
import UrlInput from "../components/UrlInput";
import styles from "../styles/Homepage.module.css";
import bgImg from "../assets/bgImg.png";
import IntroductionList from "../components/IntroductionList";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Homepage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>홈페이지</title>
        <meta name="description" content="url 단축 웹사이트의 홈페이지" />
        <meta
          name="keywords"
          content="홈, 웹사이트, url, url shorten, url 단축"
        />
      </Helmet>
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
      <Footer />
    </div>
  );
};

export default Homepage;
