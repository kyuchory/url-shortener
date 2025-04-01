const crypto = require("crypto");
let urlDatabase = {};

// URL 단축을 처리하는 함수
//test
exports.shortenUrl = (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).send({ message: "URL is required" });
  }
  // URL을 해시값으로 변환하여 고유한 단축 URL 생성
  const shortUrl = crypto
    .createHash("sha256")
    .update(url)
    .digest("hex")
    .substring(0, 6); // 6자리 단축 URL

  urlDatabase[shortUrl] = url;
  res.status(201).send({ shortUrl });
};

// URL을 리다이렉트하는 함수
exports.redirectUrl = (req, res) => {
  const { shortUrl } = req.params;
  const originalUrl = urlDatabase[shortUrl];
  console.log(urlDatabase);
  console.log(originalUrl);

  if (!originalUrl) {
    return res.status(404).send({ message: "URL not found" });
  }
  res.redirect(302, originalUrl);
};
