const express = require("express");
const router = express.Router();
const ClubController = require("../controllers/club.controller");

// Lấy danh sách tất cả thành viên
router.get("/clubs", ClubController.get_list);

// Tạo mới thành viên
router.post("/clubs", ClubController.create);

// Lấy thông tin của một thành viên cụ thể
router.get("/clubs/:id", ClubController.get_club);

// Cập nhật thông tin của một thành viên
router.put("/clubs/:id", ClubController.update_club);

// Xóa một thành viên
router.delete("/clubs/:id", ClubController.delete_club);

module.exports = router;
