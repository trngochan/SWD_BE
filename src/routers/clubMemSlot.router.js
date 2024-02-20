const express = require("express");
const router = express.Router();
const ClubMemSlotController = require("../controllers/clubMemSlot.controller");

// Lấy danh sách tất cả clubMemSlots
router.get("/clubMemSlots", ClubMemSlotController.get_list);

// Tạo mới clubMemSlots
router.post("/clubMemSlots", ClubMemSlotController.create);

// Lấy thông tin của một clubMemSlots cụ thể
router.get("/clubMemSlots/:id", ClubMemSlotController.get_clubMemSlot);

// Cập nhật thông tin của một clubMemSlots
router.put("/clubMemSlots/:id", ClubMemSlotController.update_clubMemSlot);

// Xóa một clubMemSlots
router.delete("/clubMemSlots/:id", ClubMemSlotController.delete_clubMemSlot);

// get number of slot
router.get(
  "/clubMemSlots/getNumberOfSlot/:idslot",
  ClubMemSlotController.getNumberOfSlot
);

module.exports = router;
