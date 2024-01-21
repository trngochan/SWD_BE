const express = require("express");
const router = express.Router();
const SportController = require("../controllers/sport.controller");

// Tạo mới môn thể thao
router.post("/sports", SportController.create_sport);

// Lấy thông tin của một môn thể thao cụ thể
router.get("/sports/:id", SportController.get_sport);

// Lấy danh sách tất cả môn thể thao
router.get("/sports", SportController.get_all_sports);

// Cập nhật thông tin của một môn thể thao
router.put("/sports/:id", SportController.update_sport);

// Xóa một môn thể thao
router.delete("/sports/:id", SportController.delete_sport);

module.exports = router;
