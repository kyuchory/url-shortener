const express = require("express");
const app = express();
const shortenerRoutes = require("./routes/shortenerRoutes");

// 미들웨어 설정
app.use(express.json());

// 라우터 연결
app.use("/api", shortenerRoutes); // 모든 라우트를 `/api` 경로로 설정

// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = app;
