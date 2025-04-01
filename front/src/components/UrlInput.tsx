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
      const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      return regex.test(url);
    } catch (e) {
      return false;
    }
  };

  // URL 변환 함수
  const handleSendUrl = async () => {
    const normalizedUrl = normalizeUrl(url);
    if (isValidUrl(normalizedUrl)) {
      try {
        const data = await shortenUrl(normalizedUrl);
        dispatch(setShortenedUrl(`${data.shortUrl}`));
        alert("변환 완료");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("url 형식이 아님.");
    }
  };

  const normalizeUrl = (url: string) => {
    let normalizedUrl = url.trim();
    if (
      !normalizedUrl.startsWith("http://") &&
      !normalizedUrl.startsWith("https://")
    ) {
      normalizedUrl = `https://${normalizedUrl}`;
    }
    return normalizedUrl;
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
