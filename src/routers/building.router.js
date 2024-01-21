const express = require("express");
const router = express.Router();
const BuildingController = require("../controllers/building.controller");

// Tạo mới tòa nhà
router.post("/buildings", BuildingController.create_building);

// Lấy thông tin của một tòa nhà cụ thể
router.get("/buildings/:id", BuildingController.get_building);

// Lấy danh sách tất cả tòa nhà
router.get("/buildings", BuildingController.get_all_buildings);

// Cập nhật thông tin của một tòa nhà
router.put("/buildings/:id", BuildingController.update_building);

// Xóa một tòa nhà
router.delete("/buildings/:id", BuildingController.delete_building);

module.exports = router;
