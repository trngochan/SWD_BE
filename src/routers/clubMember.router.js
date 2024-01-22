const express = require("express");
const router = express.Router();
const ClubMemberController = require("../controllers/clubMember.controller");

// Lấy danh sách tất cả ClubMembers
router.get("/clubMembers", ClubMemberController.get_list);

// Tạo mới ClubMembers
router.post("/clubMembers", ClubMemberController.create);

// Lấy thông tin của một ClubMembers cụ thể
router.get("/clubMembers/:id", ClubMemberController.get_clubMember);

// Cập nhật thông tin của một ClubMembers
router.put("/clubMembers/:id", ClubMemberController.update_clubMember);

// Xóa một ClubMembers
router.delete("/clubMembers/:id", ClubMemberController.delete_clubMember);

module.exports = router;
