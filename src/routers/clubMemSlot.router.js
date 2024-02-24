const express = require("express");
const router = express.Router();
const ClubMemSlotController = require("../controllers/clubMemSlot.controller");

// Lấy danh sách tất cả clubMemSlots
router.get("/clubMemSlots", ClubMemSlotController.get_list);

// Tạo mới clubMemSlots
router.post("/clubMemSlots", ClubMemSlotController.create);

// Tạo mới clubMemSlots
router.put(
  "/clubMemSlots/:id/confirmJoining",
  ClubMemSlotController.comfirm_joining
);

router.put(
  "/clubMemSlots/:id/confirmNoJoining",
  ClubMemSlotController.comfirm_no_joining
);

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

// get slot joined by clubmember
router.get(
  "/clubMemSlots/:clubmember/getSlotJoined",
  ClubMemSlotController.geSlotJoinedByClubMember
);

module.exports = router;
