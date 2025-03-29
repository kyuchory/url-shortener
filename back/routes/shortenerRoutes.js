const express = require("express");
const router = express.Router();
const shortenerController = require("../controllers/shortenerController");

// URL 단축 요청 처리
router.post("/shorten", shortenerController.shortenUrl);

// 단축 URL 리다이렉트 처리
router.get("/:shortUrl", shortenerController.redirectUrl);

module.exports = router;
