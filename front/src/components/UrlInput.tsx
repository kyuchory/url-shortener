import React, { useState } from "react";
import { shortenUrl } from "../services/Api";
import { useDispatch } from "react-redux";
import { setShortenedUrl } from "../redux/urlSlice";

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
    if (isValidUrl(url)) {
      try {
        const data = await shortenUrl(url);
        dispatch(setShortenedUrl(data));
      } catch (error) {
        alert(error);
      }
    } else {
      alert("url 형식이 아님.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setUrl(event.target.value)
        }
        placeholder="Url 을 입력하세요."
      />
      <button onClick={handleSendUrl}>변환</button>
    </div>
  );
};

export default UrlInput;
