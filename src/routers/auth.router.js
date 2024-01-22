// auth.router.js
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

// API đăng nhập member
router.post("/login-member", AuthController.login_member);

// API đăng nhập member
router.post("/login-admin", AuthController.login_admin);

// API đăng xuất member
router.get("/logout", AuthController.logout);

module.exports = router;
