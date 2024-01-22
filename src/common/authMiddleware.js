// authMiddleware.js
const jwt = require("jsonwebtoken");

exports.authenticateToken = function (req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "Missing authorization token" });
  }

  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || !tokenParts[1]) {
    return res
      .status(401)
      .json({ message: "Invalid authorization header format" });
  }

  const token = tokenParts[1];

  jwt.verify(token, "your-secret-key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
