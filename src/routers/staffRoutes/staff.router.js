const express = require("express");
const router = express.Router();
const StaffController = require("../../controllers/staffControllers/staff.controller");

router.get("/get-club/:id", StaffController.get_managed_clubs);

router.post("/manage-club", StaffController.manage_club);

module.exports = router;
