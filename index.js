const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require("./src/common/connect");
const passport = require("./src/common/passport");
const { ensureAuthenticated } = require("./src/common/authMiddleware");
const membeRoutes = require("./src/routers/member.router");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({ secret: "your-secret-key", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//Import api
app.use("/api", membeRoutes);

// Route xử lý đăng nhập
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login-failure" }),
  (req, res) => {
    res.json({ message: "Login successful", user: req.user });
  }
);

app.get("/", ensureAuthenticated, (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
