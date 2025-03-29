import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { redirectToUrl } from "../services/Api";

const UrlDisplay: React.FC = () => {
  const shortenedUrl = useSelector(
    (state: RootState) => state.url.shortenedUrl
  );

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
      alert("복사됨");
    }
  };

  const handleRedirect = async () => {
    if (shortenedUrl) {
      try {
        // 리디렉션을 처리합니다.
        console.log(shortenedUrl);
        await redirectToUrl(shortenedUrl);
        window.location.href = shortenedUrl; // 리디렉션
      } catch (error) {
        alert("리디렉션 오류 발생");
      }
    }
  };

  return (
    <div>
      {shortenedUrl ? (
        <div>
          <p>단축된 URL:</p>
          <input type="text" value={shortenedUrl} readOnly />
          <button onClick={handleCopy}>복사</button>
          <button onClick={handleRedirect}>리디렉션</button>
        </div>
      ) : (
        <p>단축된 URL이 여기에 나타납니다.</p>
      )}
    </div>
  );
};

export default UrlDisplay;
