const express = require("express");
const shortenerRoutes = require("./routes/shortenerRoutes");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;

// 미들웨어 설정
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 라우터 연결
app.use("/api", shortenerRoutes); // 모든 라우트를 `/api` 경로로 설정

// 서버 실행
// 테스트 환경이 아닐 때만 서버 실행
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
