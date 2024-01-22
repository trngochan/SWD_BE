// auth.router.js
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

// API đăng nhập
router.post("/login", AuthController.login);

// API đăng xuất
router.get("/logout", AuthController.logout);

module.exports = router;
