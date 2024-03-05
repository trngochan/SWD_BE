const express = require("express");
const router = express.Router();
const AdmninController = require("../../controllers/adminControllers/admin.controller");

router.put("/club/:id", AdmninController.approve_club);

router.put("/staff/:id", AdmninController.approve_staff);

router.post("/staffs", StaffController.create_staff);

router.get("/staffs/:id", StaffController.get_staff);

router.get("/staffs", StaffController.get_all_staffs);

router.put("/staffs/:id", StaffController.update_staff);

router.delete("/staffs/:id", StaffController.delete_staff);

module.exports = router;
