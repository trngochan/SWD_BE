const express = require("express");
const router = express.Router();
const ClubMemSlotController = require("../controllers/clubMemSlot.controller");

// Lấy danh sách tất cả thành viên
router.get("/clubMemSlots", ClubMemSlotController.get_list);

// Tạo mới thành viên
router.post("/clubMemSlots", ClubMemSlotController.create);

// Lấy thông tin của một thành viên cụ thể
router.get("/clubMemSlots/:id", ClubMemSlotController.get_clubMemSlot);

// Cập nhật thông tin của một thành viên
router.put("/clubMemSlots/:id", ClubMemSlotController.update_clubMemSlot);

// Xóa một thành viên
router.delete("/clubMemSlots/:id", ClubMemSlotController.delete_clubMemSlot);

module.exports = router;