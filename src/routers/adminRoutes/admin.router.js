const express = require("express");
const router = express.Router();
const AdmninController = require("../../controllers/adminControllers/admin.controller");

router.put("/admin/club/approve/:id", AdmninController.approve_club);

router.put("/admin/club/reject/:id", AdmninController.reject_club);

router.put("/admin/staff/:id", AdmninController.approve_staff);

router.post("/admin/staffs", AdmninController.create_staff);

router.get("/admin/staffs/:email", AdmninController.get_staff_email);

router.get("/admin/staffs", AdmninController.get_all_staffs);

router.put("/admin/staffs/:id", AdmninController.update_staff);

router.delete("/admin/staffs/:id", AdmninController.delete_staff);

module.exports = router;
