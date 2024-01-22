const express = require("express");
const router = express.Router();
const ClubController = require("../controllers/club.controller");

// Lấy danh sách tất cả club
router.get("/clubs", ClubController.get_list);

// Tạo mới club
router.post("/clubs", ClubController.create);

// Lấy thông tin của một club cụ thể
router.get("/clubs/:id", ClubController.get_club);

// Cập nhật thông tin của một club
router.put("/clubs/:id", ClubController.update_club);

// Xóa một club
router.delete("/clubs/:id", ClubController.delete_club);

module.exports = router;
