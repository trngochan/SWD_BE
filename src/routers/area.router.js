const express = require("express");
const router = express.Router();
const AreaController = require("../controllers/area.controller");

// Tạo mới khu vực
router.post("/areas", AreaController.create_area);

// get by yard id
router.get("/areas/:id/getByYardId", AreaController.getByYardId);

// Lấy thông tin của một khu vực cụ thể
router.get("/areas/:id", AreaController.get_area);

// Lấy danh sách tất cả các khu vực
router.get("/areas", AreaController.get_all_areas);

// Cập nhật thông tin của một khu vực
router.put("/areas/:id", AreaController.update_area);

// Xóa một khu vực
router.delete("/areas/:id", AreaController.delete_area);

module.exports = router;
