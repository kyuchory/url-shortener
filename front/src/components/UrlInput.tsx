import React, { useState } from "react";
import { shortenUrl } from "../services/Api";
import { useDispatch } from "react-redux";
import { setShortenedUrl } from "../redux/urlSlice";
import styles from "../styles/UrlInput.module.css";

//일단 완성후에,
const UrlInput: React.FC = () => {
  const [url, setUrl] = useState<string>("");

  const dispatch = useDispatch();

  const isValidUrl = (url: string) => {
    try {
      new URL(url); // URL 객체로 변환 시 오류가 발생하면 유효하지 않은 URL
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSendUrl = async () => {
    const normalizedUrl = normalizeUrl(url);
    if (isValidUrl(normalizedUrl)) {
      try {
        const data = await shortenUrl(normalizedUrl);
        dispatch(setShortenedUrl(`${data.shortUrl}`));
      } catch (error) {
        alert(error);
      }
    } else {
      alert("url 형식이 아님.");
    }
  };

  const normalizeUrl = (url: string) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className={styles.urlInputWrapper}>
      <input
        type="text"
        value={url}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setUrl(event.target.value)
        }
        placeholder="URL을 입력하세요."
        className={styles.urlInput}
      />
      <button onClick={handleSendUrl} className={styles.transButton}>
        변환
      </button>
    </div>
  );
};

export default UrlInput;
