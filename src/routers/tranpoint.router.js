const express = require("express");
const router = express.Router();
const TranpointController = require("../controllers/tranpoint.controller");

// Lấy danh sách tất cả tranpoint
router.get("/tranpoint", TranpointController.get_list);

// Tạo mới tranpoint
router.post("/tranpoint", TranpointController.create);

// Lấy thông tin của một tranpoint cụ thể
router.get("/tranpoint/:id", TranpointController.get_tranpoint);

// Cập nhật thông tin của một tranpoint
router.put("/tranpoint/:id", TranpointController.update_tranpoint);

// Xóa một tranpoint
router.delete("/tranpoint/:id", TranpointController.delete_tranpoint);

module.exports = router;
