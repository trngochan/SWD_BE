const express = require("express");
const router = express.Router();
const SlotController = require("../controllers/slot.controller");

// Lấy danh sách tất cả slots
router.get("/slots", SlotController.get_list);

// Tạo mới slots
router.post("/slots", SlotController.create);

// get slots by id club
router.get("/slots/:id/id_club", SlotController.getByIdClub);

// get slots joineed

// Lấy thông tin của một slots cụ thể
router.get("/slots/:id", SlotController.get_slot);

// Cập nhật thông tin của một slots
router.put("/slots/:id", SlotController.update_slot);

// Xóa một slots
router.delete("/slots/:id", SlotController.delete_slot);

module.exports = router;
