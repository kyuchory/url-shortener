import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clearShortenedUrl } from "../redux/urlSlice";
import styles from "../styles/UrlDisplay.module.css";

const UrlDisplay: React.FC = () => {
  const dispatch = useDispatch();

  const shortenedUrl = useSelector(
    (state: RootState) => state.url.shortenedUrl
  );

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(
        `http://localhost:3001/api/${shortenedUrl}`
      );
      alert("copied");
    }
  };

  const handleRedirect = async () => {
    if (shortenedUrl) {
      try {
        window.open(`http://localhost:3001/api/${shortenedUrl}`, "_blank");
      } catch (error) {
        alert("리디렉션 오류 발생");
      }
    }
  };

  const handleReset = () => {
    dispatch(clearShortenedUrl());
  };

  return (
    <div className={styles.urlDisplayContainer}>
      {shortenedUrl ? (
        <div className={styles.buttonsWrapper}>
          <p>단축된 URL: http://localhost:3001/api/{shortenedUrl}</p>
          <button className={styles.buttonStyle} onClick={handleCopy}>
            복사
          </button>
          <button className={styles.buttonStyle} onClick={handleRedirect}>
            이동
          </button>
          <button className={styles.buttonStyle} onClick={handleReset}>
            리셋
          </button>
        </div>
      ) : (
        <p>단축된 URL이 여기에 나타납니다.</p>
      )}
    </div>
  );
};

export default UrlDisplay;
