const express = require("express");
const router = express.Router();
const YardController = require("../controllers/yard.controller");

// Lấy danh

router.get("/yards", YardController.getAllYards);

router.get("/yards/:idsport/sport", YardController.getYardsBySport);

// Lấy thông tin của một sân thi đấu cụ thể
router.get("/yards/:id", YardController.getYardById);

// Tạo mới sân thi đấu
router.post("/yards", YardController.createYard);

// Cập nhật thông tin sân thi đấu
router.put("/yards/:id", YardController.updateYard);

// Xóa một sân thi đấu
router.delete("/yards/:id", YardController.deleteYard);

module.exports = router;
