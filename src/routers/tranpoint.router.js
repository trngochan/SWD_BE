const express = require("express");
const router = express.Router();
const TranpointController = require("../controllers/tranpoint.controller");

// Lấy danh sách tất cả tranpoint
router.get("/tranpoints", TranpointController.get_list);

// Tạo mới tranpoint
router.post("/tranpoints", TranpointController.create);

// Lấy thông tin của một tranpoint cụ thể
router.get("/tranpoints/:id", TranpointController.get_tranpoint);

// Cập nhật thông tin của một tranpoint
router.put("/tranpoints/:id", TranpointController.update_tranpoint);

// Xóa một tranpoint
router.delete("/tranpoints/:id", TranpointController.delete_tranpoint);

module.exports = router;
