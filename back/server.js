const express = require("express");
const shortenerRoutes = require("./routes/shortenerRoutes");
const cors = require("cors");

const app = express();

// 미들웨어 설정
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

// 라우터 연결
app.use("/api", shortenerRoutes); // 모든 라우트를 `/api` 경로로 설정

// 서버 실행
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

module.exports = app;
