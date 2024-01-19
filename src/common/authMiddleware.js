const passport = require("passport");

// Middleware kiểm tra xác thực bằng Passport
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = { ensureAuthenticated };
