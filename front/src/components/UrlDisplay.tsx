import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

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

  return (
    <div>
      {shortenedUrl ? (
        <div>
          <p>단축된 URL:</p>
          <input type="text" value={shortenedUrl} readOnly />
          <button onClick={handleCopy}>복사</button>
        </div>
      ) : (
        <p>단축된 URL이 여기에 나타납니다.</p>
      )}
    </div>
  );
};

export default UrlDisplay;
