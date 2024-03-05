const express = require("express");
const router = express.Router();
const AdmninController = require("../../controllers/adminControllers/admin.controller");

router.put("/club/:id", AdmninController.approve_club);

router.put("/staff/:id", AdmninController.approve_staff);

router.post("/staffs", AdmninController.create_staff);

router.get("/staffs/:email", AdmninController.get_staff_email);

router.get("/staffs", AdmninController.get_all_staffs);

router.put("/staffs/:id", AdmninController.update_staff);

router.delete("/staffs/:id", AdmninController.delete_staff);

module.exports = router;
