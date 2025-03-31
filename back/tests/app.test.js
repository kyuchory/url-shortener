const request = require("supertest");
const app = require("../server");

describe("URL 단축 API 테스트", () => {
  test("POST /api/shorten - URL 단축 요청", async () => {
    const response = await request(app)
      .post("/api/shorten")
      .send({ url: "https://www.naver.com" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("shortUrl");
  });

  test("GET /api/:shortUrl - 단축된 URL 리디렉트", async () => {
    const urlToShorten = "https://www.naver.com";

    // URL 단축 요청 먼저 보내기
    const shortenResponse = await request(app)
      .post("/api/shorten")
      .send({ url: urlToShorten });

    const shortUrl = shortenResponse.body.shortUrl;

    // 리디렉트 테스트
    const redirectResponse = await request(app).get(`/api/${shortUrl}`);

    expect(redirectResponse.status).toBe(302);
    expect(redirectResponse.header.location).toBe(urlToShorten);
  });
});
