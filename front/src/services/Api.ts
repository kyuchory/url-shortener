import axios from "axios";

const api = axios.create({
  baseURL:
    "https://port-0-url-shortener-m8wumeqa0a9a46b4.sel4.cloudtype.app/api",
});

//url 단축 요청
export const shortenUrl = async (url: string) => {
  try {
    const response = await api.post("/shorten", { url });
    return response.data;
  } catch (error) {
    console.error("Error shortening the URL:", error);
    throw error;
  }
};

//url 리디렉션 요청 Cors 문제때문에 사용 안함
export const redirectToUrl = async (shortUrl: string) => {
  try {
    const response = await api.get(`/${shortUrl}`);
    return response;
  } catch (error) {
    console.error("Error redirecting to URL:", error);
    throw error;
  }
};
