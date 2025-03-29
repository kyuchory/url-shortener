let urlDatabase = {};

// URL 단축을 처리하는 함수
exports.shortenUrl = (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).send({ message: "URL is required" });
  }
  const shortUrl = url.substring(0, 5);
  urlDatabase[shortUrl] = url;
  res.send({ shortUrl });
};

// URL을 리다이렉트하는 함수
exports.redirectUrl = (req, res) => {
  const { shortUrl } = req.params;
  const originalUrl = urlDatabase[shortUrl];

  if (!originalUrl) {
    return res.status(404).send({ message: "URL not found" });
  }

  res.redirect(originalUrl);
};
