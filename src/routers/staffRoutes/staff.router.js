const express = require("express");
const router = express.Router();
const StaffController = require("../../controllers/staffControllers/staff.controller");

router.get("/staff/get-club/:id", StaffController.get_managed_clubs);

router.get("/staff/get-member-club/:id", StaffController.get_member_by_id);


module.exports = router;
