const express = require("express");
const router = express.Router();
const ClubMemberController = require("../controllers/clubMember.controller");

// Lấy danh sách tất cả ClubMembers
router.get("/clubMembers", ClubMemberController.get_list);

// Tạo mới ClubMembers
router.post("/clubMembers", ClubMemberController.create);

// Lấy thông tin của một ClubMembers cụ thể
router.get("/clubMembers/:id", ClubMemberController.get_clubMember);

// kiem tra xem member nay da join vao club hay chuwa
router.get(
  "/clubMembers/check_join/:id_member/:id_club",
  ClubMemberController.check_join
);

//get clubmem join by slot id
router.get(
  "/clubMembers/:idslot/getbyslotid",
  ClubMemberController.getbyslotid
);

// member roi clb
router.put("/clubMembers/leaving_club/", ClubMemberController.leaving_club);

// Cập nhật thông tin của một ClubMembers
router.put("/clubMembers/:id", ClubMemberController.update_clubMember);

// Xóa một ClubMembers
router.delete("/clubMembers/:id", ClubMemberController.delete_clubMember);

// kiem tra xem member nay da join vao club hay chuwa
router.post("/clubMembers/join_club/", ClubMemberController.join_club);

// getCLubMebers by idMember, idClub
router.get(
  "/clubMembers/getByIdMemberClub/:idMember/:idClub",
  ClubMemberController.getByIdMemberClub
);

module.exports = router;
